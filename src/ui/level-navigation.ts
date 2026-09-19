import type { PlayerLevel } from '../content/types';
import { RESOLUTION_DURATION_MS, type EngineSession } from '../engine/state';

export interface LevelNavigationCallbacks {
  onPrevious: () => void;
  onNext: () => void;
}

export interface LevelNavigationComponent {
  element: HTMLElement;
  update: (session: EngineSession) => void;
  destroy: () => void;
}

export function createLevelNavigation(
  level: PlayerLevel,
  callbacks: LevelNavigationCallbacks
): LevelNavigationComponent {
  const nav = document.createElement('nav');
  nav.className = 'level-navigation';
  nav.setAttribute('aria-label', 'Level navigation');

  const previousButton = document.createElement('button');
  previousButton.type = 'button';
  previousButton.className = 'btn btn-secondary level-nav-button level-nav-previous';
  previousButton.textContent = '← Previous';
  previousButton.disabled = level.id === 1;
  previousButton.addEventListener('click', () => callbacks.onPrevious());
  nav.appendChild(previousButton);

  const current = document.createElement('div');
  current.className = 'level-nav-current';
  current.setAttribute('aria-current', 'page');

  const currentLabel = document.createElement('strong');
  currentLabel.className = 'level-nav-current-label';
  currentLabel.textContent = `Level ${level.id}`;
  current.appendChild(currentLabel);

  const currentTitle = document.createElement('span');
  currentTitle.className = 'level-nav-current-title';
  currentTitle.textContent = level.title;
  current.appendChild(currentTitle);
  nav.appendChild(current);

  const nextButton = document.createElement('button');
  nextButton.type = 'button';
  nextButton.className = 'btn btn-primary level-nav-button level-nav-next';
  nextButton.textContent = level.id === 200 ? 'Final level' : `Next: Level ${level.id + 1} →`;
  nextButton.disabled = true;
  nextButton.addEventListener('click', () => callbacks.onNext());
  nav.appendChild(nextButton);

  return {
    element: nav,
    update(session: EngineSession): void {
      const isFinished =
        session.committed !== null && session.resolutionElapsedMs >= RESOLUTION_DURATION_MS;
      const canAdvance = isFinished && level.id < 200;
      nextButton.disabled = !canAdvance;
      nextButton.setAttribute('aria-disabled', canAdvance ? 'false' : 'true');
    },
    destroy(): void {
      nav.remove();
    }
  };
}
