import type { ChoiceId, PlayerLevel } from '../content/types';
import type { EngineSession } from '../engine/state';
import { sound } from '../audio/sound';
import { getScenarioProfile, type ScenarioMode } from '../gameplay/profile';

export type ChallengeResult = 'perfect' | 'complete' | 'close' | 'missed' | 'skipped';

export interface ControlsCallbacks {
  onSelectChoice: (id: ChoiceId) => void;
  onResolveNow: () => void;
  onPause: () => void;
  onResume: () => void;
  onUseResource?: () => boolean;
  onChallengeResult?: (mode: ScenarioMode, result: ChallengeResult) => void;
  resourceCharges?: number;
}

export interface ControlsComponent {
  element: HTMLElement;
  update: (session: EngineSession) => void;
  destroy: () => void;
}

export function createControls(level: PlayerLevel, callbacks: ControlsCallbacks): ControlsComponent {
  const profile = getScenarioProfile(level);
  const container = document.createElement('section');
  container.className = 'controls-panel';
  container.dataset.scenarioMode = profile.mode;
  container.setAttribute('aria-label', 'Decision Controls and Timer');

  const decisionIntro = document.createElement('div');
  decisionIntro.className = 'decision-intro';

  const introEyebrow = document.createElement('span');
  introEyebrow.className = 'decision-eyebrow';
  introEyebrow.textContent = 'Your turn';
  decisionIntro.appendChild(introEyebrow);

  const introHeading = document.createElement('h2');
  introHeading.textContent = 'Choose a route';
  decisionIntro.appendChild(introHeading);

  const introText = document.createElement('p');
  introText.textContent = 'Select a choice to preview it. Click the same choice again to commit early.';
  decisionIntro.appendChild(introText);
  container.appendChild(decisionIntro);

  const mechanicPanel = document.createElement('div');
  mechanicPanel.className = `mechanic-panel mechanic-${profile.mode}`;
  mechanicPanel.dataset.scenarioMode = profile.mode;
  const mechanicHeader = document.createElement('div');
  mechanicHeader.className = 'mechanic-header';
  const mechanicBadge = document.createElement('span');
  mechanicBadge.className = 'mechanic-badge';
  mechanicBadge.textContent = profile.label;
  mechanicHeader.appendChild(mechanicBadge);
  const mechanicInstruction = document.createElement('p');
  mechanicInstruction.className = 'mechanic-instruction';
  mechanicInstruction.textContent = profile.instruction;
  mechanicPanel.append(mechanicHeader, mechanicInstruction);

  let evidenceCount = 0;
  let sequenceReady = false;
  let precisionTimer: number | null = null;
  let resourceUsed = false;
  const choicePreviewSpans: HTMLSpanElement[] = [];
  const challengeStatus = document.createElement('p');
  challengeStatus.className = 'mechanic-status';

  const completeChallenge = (result: ChallengeResult): void => {
    callbacks.onChallengeResult?.(profile.mode, result);
  };

  const inspectButton = document.createElement('button');
  inspectButton.type = 'button';
  inspectButton.className = 'btn btn-ghost mechanic-action';
  inspectButton.textContent = `Inspect evidence (0/${profile.evidenceRequired})`;

  if (profile.mode === 'investigation') {
    const clueList = document.createElement('ol');
    clueList.className = 'evidence-list';
    profile.clues.forEach((clue) => {
      const clueItem = document.createElement('li');
      clueItem.textContent = 'Unreviewed clue';
      clueItem.dataset.clue = clue;
      clueList.appendChild(clueItem);
    });
    mechanicPanel.appendChild(clueList);
    challengeStatus.textContent = `Review ${profile.evidenceRequired} public clues to reveal route projections.`;
    mechanicPanel.append(inspectButton, challengeStatus);
    inspectButton.addEventListener('click', () => {
      if (evidenceCount >= profile.evidenceRequired) return;
      const clue = clueList.children[evidenceCount];
      if (clue) {
        clue.textContent = clue.getAttribute('data-clue') ?? 'Public clue reviewed.';
        clue.classList.add('reviewed');
      }
      evidenceCount += 1;
      inspectButton.textContent = `Inspect evidence (${evidenceCount}/${profile.evidenceRequired})`;
      if (evidenceCount >= profile.evidenceRequired) {
        choicePreviewSpans.forEach((span) => {
          span.style.display = '';
        });
        inspectButton.disabled = true;
        challengeStatus.textContent = 'Evidence reviewed. Route projections are now available.';
        completeChallenge('complete');
      } else {
        challengeStatus.textContent = `${profile.evidenceRequired - evidenceCount} more public clue${profile.evidenceRequired - evidenceCount === 1 ? '' : 's'} to review.`;
      }
    });
  } else if (profile.mode === 'precision') {
    const precisionMeter = document.createElement('div');
    precisionMeter.className = 'precision-meter';
    const precisionTarget = document.createElement('span');
    precisionTarget.className = 'precision-target';
    const precisionMarker = document.createElement('span');
    precisionMarker.className = 'precision-marker';
    precisionMeter.append(precisionTarget, precisionMarker);
    const precisionButton = document.createElement('button');
    precisionButton.type = 'button';
    precisionButton.className = 'btn btn-ghost mechanic-action';
    precisionButton.textContent = 'Test timing';
    challengeStatus.textContent = 'Stop the marker inside the blue window for a precision bonus.';
    mechanicPanel.append(precisionMeter, precisionButton, challengeStatus);
    precisionTimer = window.setInterval(() => {
      const progress = (performance.now() % 1600) / 1600;
      precisionMarker.style.left = `${progress * 100}%`;
    }, 50);
    precisionButton.addEventListener('click', () => {
      const progress = (performance.now() % 1600) / 1600;
      const distance = Math.abs(progress - 0.52);
      const result: ChallengeResult = distance <= 0.1 ? 'perfect' : distance <= 0.22 ? 'close' : 'missed';
      precisionButton.disabled = true;
      challengeStatus.textContent =
        result === 'perfect'
          ? 'Precision confirmed. Clean intervention recorded.'
          : result === 'close'
            ? 'Close timing. The intervention is still available.'
            : 'Missed window. The authored decision remains available.';
      completeChallenge(result);
    });
  } else if (profile.mode === 'sequence') {
    const sequenceList = document.createElement('ol');
    sequenceList.className = 'sequence-list';
    ['Set the route', 'Check the downstream track', 'Lock the operation'].forEach((step) => {
      const item = document.createElement('li');
      item.textContent = step;
      sequenceList.appendChild(item);
    });
    const confirmSequenceButton = document.createElement('button');
    confirmSequenceButton.type = 'button';
    confirmSequenceButton.className = 'btn btn-ghost mechanic-action sequence-confirm';
    confirmSequenceButton.textContent = 'Confirm sequence';
    confirmSequenceButton.disabled = true;
    challengeStatus.textContent = 'Choose a route first, then confirm the operation in order.';
    mechanicPanel.append(sequenceList, confirmSequenceButton, challengeStatus);
    confirmSequenceButton.addEventListener('click', () => {
      sequenceReady = true;
      sequenceList.children[0]?.classList.add('complete');
      sequenceList.children[1]?.classList.add('complete');
      sequenceList.children[2]?.classList.add('complete');
      confirmSequenceButton.disabled = true;
      challengeStatus.textContent = 'Sequence locked. Click the selected route again to commit.';
      completeChallenge('complete');
    });
  } else if (profile.mode === 'resource') {
    const resourceCharges = callbacks.resourceCharges ?? 0;
    const resourceButton = document.createElement('button');
    resourceButton.type = 'button';
    resourceButton.className = 'btn btn-ghost mechanic-action';
    resourceButton.textContent = `Use field kit (+8s) · ${resourceCharges} left`;
    challengeStatus.textContent = 'One kit charge buys breathing room without changing the authored outcome.';
    mechanicPanel.append(resourceButton, challengeStatus);
    resourceButton.addEventListener('click', () => {
      if (resourceUsed || !callbacks.onUseResource) return;
      if (callbacks.onUseResource()) {
        resourceUsed = true;
        resourceButton.disabled = true;
        resourceButton.textContent = 'Field kit used · +8 seconds';
        challengeStatus.textContent = 'Time extended. Spend the remaining window deliberately.';
        completeChallenge('complete');
      } else {
        challengeStatus.textContent = 'No field-kit charges remain this campaign.';
      }
    });
  } else {
    challengeStatus.textContent = 'Preview either route, then commit when ready.';
    mechanicPanel.appendChild(challengeStatus);
  }
  container.appendChild(mechanicPanel);

  // 1. Timer & status region
  const timerBarWrapper = document.createElement('div');
  timerBarWrapper.className = 'timer-wrapper';

  const timerHeader = document.createElement('div');
  timerHeader.className = 'timer-header';

  const timerHeading = document.createElement('span');
  timerHeading.className = 'timer-heading';
  timerHeading.textContent = 'Decision window';
  timerHeader.appendChild(timerHeading);

  const timerLabel = document.createElement('span');
  timerLabel.className = 'timer-label';
  timerLabel.id = 'timer-label-text';
  timerLabel.textContent = '30s remaining';
  timerHeader.appendChild(timerLabel);

  const progressBar = document.createElement('progress');
  progressBar.className = 'timer-progress';
  progressBar.setAttribute('max', '100');
  progressBar.setAttribute('value', '100');
  progressBar.setAttribute('aria-labelledby', 'timer-label-text');

  timerBarWrapper.appendChild(timerHeader);
  timerBarWrapper.appendChild(progressBar);
  container.appendChild(timerBarWrapper);

  // Live announcer for accessibility warnings (e.g., 10s remaining)
  const srAnnouncer = document.createElement('div');
  srAnnouncer.className = 'sr-only';
  srAnnouncer.setAttribute('aria-live', 'assertive');
  container.appendChild(srAnnouncer);
  let announcedTenSeconds = false;

  // 2. Choice Buttons Group
  const choicesGroup = document.createElement('div');
  choicesGroup.className = 'choices-group';
  choicesGroup.setAttribute('role', 'group');
  choicesGroup.setAttribute('aria-label', 'Choice Options');

  const choiceButtonMap = new Map<ChoiceId, HTMLButtonElement>();
  let lastClickedChoice: ChoiceId | null = null;

  level.choices.forEach((c) => {
    const btn = document.createElement('button');
    btn.type = 'button';
    btn.className = `choice-btn choice-btn-${c.id}`;
    btn.setAttribute('aria-pressed', c.id === 'A' ? 'true' : 'false');
    btn.dataset.choiceId = c.id;

    // Header with badge and label
    const btnHeader = document.createElement('div');
    btnHeader.className = 'choice-btn-header';

    const badge = document.createElement('span');
    badge.className = 'choice-badge';
    badge.textContent = c.id;
    btnHeader.appendChild(badge);

    const labelSpan = document.createElement('strong');
    labelSpan.className = 'choice-label';
    labelSpan.textContent = c.label;
    btnHeader.appendChild(labelSpan);
    btn.appendChild(btnHeader);

    // Preview
    const previewSpan = document.createElement('span');
    previewSpan.className = 'choice-preview';
    previewSpan.textContent = c.preview;
    if (profile.mode === 'investigation') previewSpan.style.display = 'none';
    btn.appendChild(previewSpan);
    choicePreviewSpans.push(previewSpan);

    // Armed status indicator
    const armedStatus = document.createElement('span');
    armedStatus.className = 'choice-status';
    armedStatus.textContent = 'Selected · click again to commit';
    btn.appendChild(armedStatus);

    btn.addEventListener('click', () => {
      sound.playClick();
      if (lastClickedChoice === c.id) {
        if (profile.mode === 'sequence' && !sequenceReady) {
          challengeStatus.textContent = 'Confirm the sequence checklist before committing this route.';
          return;
        }
        callbacks.onResolveNow();
        lastClickedChoice = null;
        return;
      }

      lastClickedChoice = c.id;
      callbacks.onSelectChoice(c.id);
      if (profile.mode === 'sequence') {
        const sequenceConfirm = mechanicPanel.querySelector('.sequence-confirm') as HTMLButtonElement | null;
        if (sequenceConfirm) sequenceConfirm.disabled = false;
        challengeStatus.textContent = 'Route set. Check the downstream track, then confirm the sequence.';
      }
    });

    choicesGroup.appendChild(btn);
    choiceButtonMap.set(c.id, btn);
  });

  container.appendChild(choicesGroup);

  // 3. Pause/Resume control. A second click on the selected choice resolves.
  const actionControls = document.createElement('div');
  actionControls.className = 'action-controls';

  const pauseBtn = document.createElement('button');
  pauseBtn.type = 'button';
  pauseBtn.className = 'btn btn-secondary btn-pause';
  pauseBtn.textContent = 'Pause';
  pauseBtn.addEventListener('click', () => {
    if (pauseBtn.dataset.paused === 'true') {
      callbacks.onResume();
    } else {
      callbacks.onPause();
    }
  });
  actionControls.appendChild(pauseBtn);

  container.appendChild(actionControls);

  // Keyboard shortcut listener
  const onKeyDown = (e: KeyboardEvent) => {
    // Ignore modifier combinations
    if (e.ctrlKey || e.altKey || e.metaKey || e.shiftKey) return;
    if (e.repeat) return;

    // Ignore when typing in an input/textarea/select
    const activeEl = document.activeElement;
    if (activeEl && (activeEl.tagName === 'INPUT' || activeEl.tagName === 'TEXTAREA' || activeEl.tagName === 'SELECT')) {
      return;
    }

    const key = e.key.toUpperCase();

    // Pause toggle: P or Escape
    if (key === 'P' || e.key === 'Escape') {
      e.preventDefault();
      if (pauseBtn.dataset.paused === 'true') {
        callbacks.onResume();
      } else {
        callbacks.onPause();
      }
      return;
    }

    // Choice shortcuts: A, B, C or 1, 2, 3
    if (key === 'A' || key === '1') {
      sound.playClick();
      callbacks.onSelectChoice('A');
    } else if (key === 'B' || key === '2') {
      sound.playClick();
      callbacks.onSelectChoice('B');
    } else if ((key === 'C' || key === '3') && level.choices.length > 2) {
      sound.playClick();
      callbacks.onSelectChoice('C');
    }
  };

  window.addEventListener('keydown', onKeyDown);

  return {
    element: container,
    update(session: EngineSession): void {
      const isRunning = session.phaseBeforePause === null && session.committed === null;
      const isPaused = session.pauseReason !== null;

      // Update timer progress and labels
      if (session.timingMode === 'untimed') {
        progressBar.style.display = 'none';
        timerLabel.textContent = isPaused ? 'Paused (Untimed)' : 'Untimed — Decision armed';
      } else {
        progressBar.style.display = 'block';
        const remainingMs = Math.max(0, session.deadlineMs - session.activeElapsedMs);
        const remainingSec = Math.ceil(remainingMs / 1000);
        const percent = session.deadlineMs > 0 ? (remainingMs / session.deadlineMs) * 100 : 0;

        progressBar.setAttribute('value', String(percent));
        timerLabel.textContent = isPaused ? `Paused (${remainingSec}s remaining)` : `${remainingSec}s remaining`;

        // Announcement at 10s mark
        if (remainingSec <= 10 && !announcedTenSeconds && isRunning) {
          sound.playWarning();
          srAnnouncer.textContent = '10 seconds remaining';
          announcedTenSeconds = true;
        }
      }

      // Update choice buttons
      level.choices.forEach((c) => {
        const btn = choiceButtonMap.get(c.id);
        if (!btn) return;

        const isSelected = session.selectedChoiceId === c.id;
        btn.setAttribute('aria-pressed', isSelected ? 'true' : 'false');
        if (isSelected) {
          btn.classList.add('selected');
        } else {
          btn.classList.remove('selected');
        }

        // Disable choices if committed or resolving
        btn.disabled = session.committed !== null;
      });

      if (session.committed !== null) {
        mechanicPanel.querySelectorAll('button').forEach((button) => {
          button.disabled = true;
        });
      }

      // Update action buttons
      if (isPaused) {
        pauseBtn.textContent = 'Resume';
        pauseBtn.dataset.paused = 'true';
      } else {
        pauseBtn.textContent = 'Pause';
        pauseBtn.dataset.paused = 'false';
      }

      pauseBtn.disabled = false;
    },
    destroy(): void {
      window.removeEventListener('keydown', onKeyDown);
      if (precisionTimer !== null) window.clearInterval(precisionTimer);
      container.remove();
    }
  };
}
