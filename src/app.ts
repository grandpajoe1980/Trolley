import { getLevel, getOutcome, getPlayerLevel } from './content/catalog';
import { generateUUID, SaveManager } from './storage/save';
import { TabCoordinator } from './storage/locks';
import { SessionManager } from './engine/session';
import { createScene, type SceneComponent } from './render/scene';
import { createFactsPanel } from './ui/facts';
import { createControls, type ControlsComponent } from './ui/controls';
import { createResultPanel } from './ui/result';
import { createMenuScreen } from './ui/menu';
import { createLibraryScreen } from './ui/library';
import { createSettingsScreen } from './ui/settings';
import { createSummaryScreen } from './ui/summary';
import { createRecoveryScreen } from './ui/recovery';
import { createLevelNavigation, type LevelNavigationComponent } from './ui/level-navigation';
import { sound } from './audio/sound';
import { computeCampaignMetrics } from './engine/scoring';

export class App {
  private root: HTMLElement;
  private saveManager: SaveManager;
  private tabCoordinator: TabCoordinator;
  private currentSession: SessionManager | null = null;
  private currentScene: SceneComponent | null = null;
  private currentControls: ControlsComponent | null = null;
  private currentLevelNavigation: LevelNavigationComponent | null = null;
  private currentResultEl: HTMLElement | null = null;
  private currentLevelId: number | null = null;

  public getCurrentLevelId(): number | null {
    return this.currentLevelId;
  }
  private currentMode: 'campaign' | 'practice' = 'campaign';
  private checkpointThrottleTimer: number | null = null;
  private isDisposed = false;
  private routeNotice: string | null = null;

  constructor(root: HTMLElement) {
    this.root = root;
    this.saveManager = new SaveManager();
    this.tabCoordinator = new TabCoordinator(
      this.saveManager.getSave().revision,
      () => {
        if (typeof window !== 'undefined' && typeof window.alert === 'function') {
          window.alert('Another tab has taken campaign writer ownership. This tab is now in read/practice mode.');
        }
      },
      (newRevision) => {
        console.warn('Storage updated from another tab; updating revision to', newRevision);
        if (this.currentSession && this.currentSession.getState().phase === 'running') {
          this.currentSession.pause('user');
        }
      }
    );

    this.initListeners();
    sound.setEnabled(this.saveManager.getSettings().sound);
    this.route();
  }

  private initListeners(): void {
    window.addEventListener('hashchange', () => this.route());

    // Page Visibility listener: Section 6 pause on hidden
    document.addEventListener('visibilitychange', () => {
      if (document.visibilityState === 'hidden') {
        if (this.currentSession) {
          const st = this.currentSession.getState();
          if (st.phase === 'running') {
            this.currentSession.pause('hidden');
            this.saveCheckpointNow();
          }
        }
      }
    });

    // Beforeunload: persist uncommitted checkpoint
    window.addEventListener('beforeunload', () => {
      this.saveCheckpointNow();
    });
  }

  private saveCheckpointNow(): void {
    if (!this.currentSession) return;
    const session = this.currentSession.getState().session;
    if (!session) return;

    if (session.committed === null) {
      this.saveManager.saveCheckpoint({
        levelId: session.levelId,
        mode: session.mode,
        sessionId: session.sessionId,
        phase: 'paused',
        selectedChoiceId: session.selectedChoiceId,
        selectionOrigin: session.selectionOrigin,
        timingMode: session.timingMode,
        activeElapsedMs: session.activeElapsedMs,
        committedOutcomeId: null
      });
    }
  }

  private renderHeader(): HTMLElement {
    const header = document.createElement('header');
    header.className = 'site-header';

    const brand = document.createElement('a');
    brand.href = '#/';
    brand.className = 'brand-logo';
    brand.style.fontWeight = '800';
    brand.style.fontSize = '1.25rem';
    brand.style.color = 'var(--text-main)';
    brand.style.textDecoration = 'none';
    brand.textContent = 'Trolley';
    header.appendChild(brand);

    const nav = document.createElement('nav');
    nav.className = 'site-nav';

    const nextLvl = this.saveManager.getNextUnlockedLevel();
    const currentHash = window.location.hash.trim();
    const campLink = document.createElement('a');
    campLink.href = `#/level/${nextLvl}`;
    campLink.className = 'nav-link';
    campLink.textContent = 'Campaign';
    if (currentHash === '#/campaign' || currentHash === '#/summary' || currentHash.startsWith('#/level/')) {
      campLink.classList.add('active');
      campLink.setAttribute('aria-current', 'page');
    }
    nav.appendChild(campLink);

    const libLink = document.createElement('a');
    libLink.href = '#/library';
    libLink.className = 'nav-link';
    libLink.textContent = 'Library';
    if (currentHash === '#/library') {
      libLink.classList.add('active');
      libLink.setAttribute('aria-current', 'page');
    }
    nav.appendChild(libLink);

    const setLink = document.createElement('a');
    setLink.href = '#/settings';
    setLink.className = 'nav-link';
    setLink.textContent = 'Settings';
    if (currentHash === '#/settings') {
      setLink.classList.add('active');
      setLink.setAttribute('aria-current', 'page');
    }
    nav.appendChild(setLink);

    header.appendChild(nav);
    return header;
  }

  private teardownCurrentSession(): void {
    if (this.currentSession) {
      this.saveCheckpointNow();
      this.currentSession.dispose();
      this.currentSession = null;
    }
    if (this.currentScene) {
      this.currentScene.destroy();
      this.currentScene = null;
    }
    if (this.currentControls) {
      this.currentControls.destroy();
      this.currentControls = null;
    }
    if (this.currentLevelNavigation) {
      this.currentLevelNavigation.destroy();
      this.currentLevelNavigation = null;
    }
    if (this.checkpointThrottleTimer !== null) {
      clearInterval(this.checkpointThrottleTimer);
      this.checkpointThrottleTimer = null;
    }
    this.currentResultEl = null;
    this.currentLevelId = null;
  }

  public route(): void {
    if (this.isDisposed) return;
    this.teardownCurrentSession();
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' });

    // Check for corrupt save first
    const loaded = this.saveManager.loadSave();
    if (loaded.isCorrupt) {
      this.root.innerHTML = '';
      const recoveryScreen = createRecoveryScreen(loaded.rawText, loaded.error ?? 'Save corrupted', {
        onPlayTemporary: () => {
          this.saveManager.isMemoryOnly = true;
          this.route();
        },
        onResetSave: () => {
          this.saveManager.resetSave();
          this.route();
        }
      });
      this.root.appendChild(recoveryScreen);
      return;
    }

    const hash = window.location.hash.trim();

    // Build base shell
    this.root.innerHTML = '';
    const appShell = document.createElement('div');
    appShell.className = 'app-root';
    appShell.appendChild(this.renderHeader());

    const mainContainer = document.createElement('div');
    mainContainer.className = 'main-content';
    appShell.appendChild(mainContainer);
    this.root.appendChild(appShell);

    if (this.routeNotice) {
      const notice = document.createElement('div');
      notice.className = 'callout epistemic-notice route-notice';
      notice.setAttribute('role', 'status');
      notice.textContent = this.routeNotice;
      mainContainer.appendChild(notice);
      this.routeNotice = null;
    }

    // Route matching
    if (hash === '' || hash === '#/' || hash === '#') {
      const menu = createMenuScreen(this.saveManager, {
        onContinueCampaign: (lvlId) => {
          window.location.hash = `#/level/${lvlId}`;
        },
        onOpenLibrary: () => {
          window.location.hash = '#/library';
        },
        onOpenSettings: () => {
          window.location.hash = '#/settings';
        },
        onOpenSummary: () => {
          window.location.hash = '#/summary';
        },
        onResetCampaign: () => {
          this.saveManager.resetSave();
          this.route();
        }
      });
      mainContainer.appendChild(menu);
    } else if (hash === '#/campaign') {
      const nextLvl = this.saveManager.getNextUnlockedLevel();
      window.location.hash = `#/level/${nextLvl}`;
    } else if (hash === '#/library') {
      const library = createLibraryScreen(this.saveManager, {
        onSelectLevel: (lvlId, mode) => {
          this.currentMode = mode;
          window.location.hash = `#/level/${lvlId}`;
        },
        onBackToMenu: () => {
          window.location.hash = '#/';
        }
      });
      mainContainer.appendChild(library);
    } else if (hash === '#/settings') {
      const settings = createSettingsScreen(this.saveManager, {
        onBackToMenu: () => {
          window.location.hash = '#/';
        },
        onResetSave: () => {
          this.saveManager.resetSave();
          this.route();
        }
      });
      mainContainer.appendChild(settings);
    } else if (hash === '#/summary') {
      const summary = createSummaryScreen(this.saveManager, {
        onBackToMenu: () => {
          window.location.hash = '#/';
        },
        onOpenLibrary: () => {
          window.location.hash = '#/library';
        },
        onResetCampaign: () => {
          this.saveManager.resetSave();
          window.location.hash = '#/';
        }
      });
      mainContainer.appendChild(summary);
    } else if (hash.startsWith('#/level/')) {
      const rawId = parseInt(hash.replace('#/level/', ''), 10);
      if (isNaN(rawId) || rawId < 1 || rawId > 200) {
        window.location.hash = '#/';
        return;
      }

      // Check progression lock: cannot bypass with direct URL
      const nextUnlocked = this.saveManager.getNextUnlockedLevel();
      let effectiveLevelId = rawId;
      let effectiveMode = this.currentMode;

      if (rawId > nextUnlocked && this.currentMode !== 'practice') {
        this.routeNotice = `Level ${rawId} is locked. Returning to your next unlocked level (${nextUnlocked}).`;
        window.location.hash = `#/level/${nextUnlocked}`;
        this.route();
        return;
      } else if (rawId < nextUnlocked || this.currentMode === 'practice') {
        // Previously completed level: practice mode
        effectiveMode = 'practice';
      } else {
        effectiveMode = 'campaign';
      }

      this.mountLevel(effectiveLevelId, effectiveMode, mainContainer);
    } else {
      // Unknown route -> fallback to menu
      window.location.hash = '#/';
    }
  }

  private mountLevel(levelId: number, mode: 'campaign' | 'practice', parent: HTMLElement): void {
    const rawLevel = getLevel(levelId);
    const playerLevel = getPlayerLevel(levelId);
    if (!rawLevel || !playerLevel) {
      parent.innerHTML = '<p role="alert">Level data could not be found.</p>';
      return;
    }

    this.currentLevelId = levelId;
    this.currentMode = mode;

    const levelContainer = document.createElement('main');
    levelContainer.className = 'level-container';

    const statusBar = document.createElement('section');
    statusBar.className = 'level-statusbar';
    statusBar.setAttribute('aria-label', 'Campaign totals');
    const statusValues = new Map<string, HTMLElement>();
    const addStatusItem = (label: string, key: string) => {
      const item = document.createElement('div');
      item.className = 'level-status-item';
      const labelEl = document.createElement('span');
      labelEl.className = 'level-status-label';
      labelEl.textContent = label;
      const valueEl = document.createElement('span');
      valueEl.className = 'level-status-value';
      item.append(labelEl, valueEl);
      statusBar.appendChild(item);
      statusValues.set(key, valueEl);
    };
    addStatusItem('Progress', 'progress');
    addStatusItem('Fatalities', 'fatalities');
    addStatusItem('Impact', 'impact');
    addStatusItem('Morality', 'morality');
    const updateStatusBar = () => {
      const save = this.saveManager.getSave();
      const outcomes = save.completions
        .map((completion) => getOutcome(completion.levelId, completion.choiceId))
        .filter((outcome): outcome is NonNullable<typeof outcome> => outcome !== undefined);
      const metrics = computeCampaignMetrics(outcomes);
      statusValues.get('progress')!.textContent = `Level ${levelId} · ${metrics.completedCount}/200`;
      statusValues.get('fatalities')!.textContent = String(metrics.rawDeaths);
      statusValues.get('impact')!.textContent = (metrics.weightedImpactTenths / 10).toFixed(1);
      statusValues.get('morality')!.textContent = metrics.campaignScore === null ? 'Not yet rated' : metrics.displayScore;
    };
    updateStatusBar();

    // Put the interactive game immediately below the header. The facts panel
    // follows the game so the first view is focused on play.
    const playArea = document.createElement('div');
    playArea.className = 'level-play-area';

    const stageWrapper = document.createElement('div');
    stageWrapper.className = 'stage-wrapper';
    this.currentScene = createScene(playerLevel, (choiceId) => {
      this.currentSession?.selectChoice(choiceId);
    });
    stageWrapper.appendChild(this.currentScene.element);
    playArea.appendChild(stageWrapper);

    // Controls sit beside the game on wide screens and below it on narrow screens.
    this.currentControls = createControls(playerLevel, {
      onSelectChoice: (id) => this.currentSession?.selectChoice(id),
      onResolveNow: () => this.currentSession?.resolveNow(),
      onPause: () => this.currentSession?.pause('user'),
      onResume: () => this.currentSession?.resume()
    });
    playArea.appendChild(this.currentControls.element);
    levelContainer.appendChild(playArea);

    this.currentLevelNavigation = createLevelNavigation(playerLevel, {
      onPrevious: () => {
        if (levelId <= 1) return;
        this.currentMode = 'practice';
        window.location.hash = `#/level/${levelId - 1}`;
        this.route();
      },
      onNext: () => {
        if (levelId >= 200 || this.currentSession?.getState().phase !== 'result') return;
        // Keep library browsing in practice mode so the next level is never
        // blocked just because it has not been completed in the campaign.
        this.currentMode = this.currentMode === 'practice' ? 'practice' : 'campaign';
        window.location.hash = `#/level/${levelId + 1}`;
        this.route();
      }
    });
    levelContainer.appendChild(this.currentLevelNavigation.element);

    // Keep campaign totals close to the game, before the longer premise panel.
    levelContainer.appendChild(statusBar);

    const facts = createFactsPanel(playerLevel);
    levelContainer.appendChild(facts);

    parent.appendChild(levelContainer);

    // 4. Session Manager
    const settings = this.saveManager.getSettings();
    const sessionId = generateUUID();
    const campaignId = this.saveManager.getSave().campaignId;
    let completionRecorded = this.saveManager.getSave().completions.some((c) => c.levelId === levelId);

    this.currentSession = new SessionManager();

    // Subscribe to state changes immediately
    this.currentSession.subscribe((state) => {
      if (!state.session) return;

      const reducedMotion = settings.reducedMotion;

      // Update scene & controls
      this.currentScene?.update(state.session, reducedMotion);
      this.currentControls?.update(state.session);
      this.currentLevelNavigation?.update(state.session);

      // Handle commitment persistence (reliably triggers once on commit)
      if (state.session.committed !== null && !completionRecorded) {
        completionRecorded = true;
        sound.playTrolleyBell();
        if (mode === 'campaign') {
          this.saveManager.recordCompletion(
            state.session.levelId,
            state.session.committed.choiceId,
            state.session.committed.outcomeId,
            state.session.sessionId
          );
          this.tabCoordinator.updateRevision(this.saveManager.getSave().revision);
        }
        updateStatusBar();
      }

      // Handle transition to Result phase
      if (state.phase === 'result' && !this.currentResultEl) {
        sound.playLevelComplete();
        this.currentControls?.element.remove();
        this.currentResultEl = createResultPanel(
          rawLevel,
          state.session.selectedChoiceId,
          state.session.committed?.selectionOrigin ?? state.session.selectionOrigin,
          mode,
          {
            onReplayPractice: () => {
              this.teardownCurrentSession();
              this.mountLevel(levelId, 'practice', parent);
            },
            onReturnToCampaign: () => {
              const nextLvl = this.saveManager.getNextUnlockedLevel();
              window.location.hash = `#/level/${nextLvl}`;
              this.route();
            },
            onViewSummary: () => {
              window.location.hash = '#/summary';
              this.route();
            }
          }
        );
        levelContainer.appendChild(this.currentResultEl);
      }
    });

    // Check for existing checkpoint
    const checkpoint = this.saveManager.getSave().checkpoint;
    if (checkpoint && checkpoint.levelId === levelId && checkpoint.mode === mode) {
      // Restore from checkpoint
      this.currentSession.restoreSession({
        levelId,
        level: rawLevel,
        mode,
        selectedChoiceId: checkpoint.selectedChoiceId,
        selectionOrigin: checkpoint.selectionOrigin,
        timingMode: checkpoint.timingMode,
        deadlineMs: checkpoint.timingMode === 'untimed' ? Number.POSITIVE_INFINITY : 30000,
        activeElapsedMs: checkpoint.activeElapsedMs,
        resolutionElapsedMs: checkpoint.phase === 'result' ? 2400 : 0,
        anchorMs: null,
        phaseBeforePause: checkpoint.committedOutcomeId ? null : 'running',
        pauseReason: null,
        committed: checkpoint.committedOutcomeId
          ? {
              choiceId: checkpoint.selectedChoiceId,
              outcomeId: checkpoint.committedOutcomeId,
              outcome: rawLevel.choices.find((c) => c.id === checkpoint.selectedChoiceId)!.outcome,
              committedAtMs: checkpoint.activeElapsedMs,
              selectionOrigin: checkpoint.selectionOrigin
            }
          : null,
        sessionId: checkpoint.sessionId,
        campaignId
      }, checkpoint.committedOutcomeId ? 'result' : 'running');
    } else {
      // Fresh start
      this.currentSession.startLevel(rawLevel, mode, settings.timingMode, sessionId, campaignId);
    }

    // Throttled periodic checkpoint saving (every 1,000ms while running)
    this.checkpointThrottleTimer = window.setInterval(() => {
      if (this.currentSession) {
        const s = this.currentSession.getState().session;
        if (s && s.committed === null && this.currentSession.getState().phase === 'running') {
          this.saveManager.saveCheckpoint({
            levelId: s.levelId,
            mode: s.mode,
            sessionId: s.sessionId,
            phase: 'paused',
            selectedChoiceId: s.selectedChoiceId,
            selectionOrigin: s.selectionOrigin,
            timingMode: s.timingMode,
            activeElapsedMs: s.activeElapsedMs,
            committedOutcomeId: null
          });
        }
      }
    }, 1000);
  }

  public dispose(): void {
    this.isDisposed = true;
    this.teardownCurrentSession();
    this.tabCoordinator.dispose();
  }
}
