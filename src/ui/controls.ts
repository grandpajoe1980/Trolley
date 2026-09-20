import type { ChoiceId, PlayerLevel } from '../content/types';
import type { EngineSession } from '../engine/state';
import { sound } from '../audio/sound';

export interface ControlsCallbacks {
  onSelectChoice: (id: ChoiceId) => void;
  onResolveNow: () => void;
  onPause: () => void;
  onResume: () => void;
}

export interface ControlsComponent {
  element: HTMLElement;
  update: (session: EngineSession) => void;
  destroy: () => void;
}

export function createControls(level: PlayerLevel, callbacks: ControlsCallbacks): ControlsComponent {
  const container = document.createElement('section');
  container.className = 'controls-panel';
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
    btn.appendChild(previewSpan);

    // Armed status indicator
    const armedStatus = document.createElement('span');
    armedStatus.className = 'choice-status';
    armedStatus.textContent = 'Selected · click again to commit';
    btn.appendChild(armedStatus);

    btn.addEventListener('click', () => {
      sound.playClick();
      if (lastClickedChoice === c.id) {
        callbacks.onResolveNow();
        lastClickedChoice = null;
        return;
      }

      lastClickedChoice = c.id;
      callbacks.onSelectChoice(c.id);
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
      container.remove();
    }
  };
}
