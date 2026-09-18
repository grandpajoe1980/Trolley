import { catalog } from '../content/catalog';
import type { SaveManager } from '../storage/save';

export interface MenuCallbacks {
  onContinueCampaign: (levelId: number) => void;
  onOpenLibrary: () => void;
  onOpenSettings: () => void;
  onOpenSummary: () => void;
  onResetCampaign: () => void;
}

export function createMenuScreen(saveManager: SaveManager, callbacks: MenuCallbacks): HTMLElement {
  const container = document.createElement('main');
  container.className = 'level-container menu-container';

  const card = document.createElement('div');
  card.className = 'card menu-card';

  const heading = document.createElement('h1');
  heading.className = 'menu-title';
  heading.textContent = 'Trolley';
  card.appendChild(heading);

  const subtitle = document.createElement('p');
  subtitle.className = 'menu-subtitle';
  subtitle.textContent =
    'A visual browser game of philosophical dilemmas across 200 authored levels, 423 choice outcomes, and ten chapters.';
  card.appendChild(subtitle);

  // Status & Progress summary
  const save = saveManager.getSave();
  const completedCount = save.completions.length;
  const nextLevelId = saveManager.getNextUnlockedLevel();

  const progressBox = document.createElement('div');
  progressBox.className = 'callout default-disclosure';
  progressBox.innerHTML = `
    <strong>Campaign Progress:</strong> ${completedCount} of 200 levels completed.
    ${completedCount === 200 ? 'Campaign fully completed!' : `Next up: Level ${nextLevelId}.`}
  `;
  card.appendChild(progressBox);

  // Buttons group
  const btnGroup = document.createElement('div');
  btnGroup.className = 'action-controls';
  btnGroup.style.marginTop = '1.5rem';

  if (completedCount < 200) {
    const continueBtn = document.createElement('button');
    continueBtn.type = 'button';
    continueBtn.className = 'btn btn-primary';
    continueBtn.textContent = completedCount === 0 ? 'Start Campaign' : `Continue Level ${nextLevelId}`;
    continueBtn.addEventListener('click', () => {
      callbacks.onContinueCampaign(nextLevelId);
    });
    btnGroup.appendChild(continueBtn);
  } else {
    const viewSummaryBtn = document.createElement('button');
    viewSummaryBtn.type = 'button';
    viewSummaryBtn.className = 'btn btn-primary';
    viewSummaryBtn.textContent = 'View Final Campaign Summary';
    viewSummaryBtn.addEventListener('click', () => {
      callbacks.onOpenSummary();
    });
    btnGroup.appendChild(viewSummaryBtn);
  }

  const libraryBtn = document.createElement('button');
  libraryBtn.type = 'button';
  libraryBtn.className = 'btn btn-secondary';
  libraryBtn.textContent = 'Level Library & Practice';
  libraryBtn.addEventListener('click', () => {
    callbacks.onOpenLibrary();
  });
  btnGroup.appendChild(libraryBtn);

  const settingsBtn = document.createElement('button');
  settingsBtn.type = 'button';
  settingsBtn.className = 'btn btn-secondary';
  settingsBtn.textContent = 'Settings & Accessibility';
  settingsBtn.addEventListener('click', () => {
    callbacks.onOpenSettings();
  });
  btnGroup.appendChild(settingsBtn);

  card.appendChild(btnGroup);

  // Reset option
  if (completedCount > 0) {
    const resetWrapper = document.createElement('div');
    resetWrapper.style.marginTop = '2rem';
    resetWrapper.style.borderTop = '1px solid var(--border-subtle)';
    resetWrapper.style.paddingTop = '1rem';

    const resetBtn = document.createElement('button');
    resetBtn.type = 'button';
    resetBtn.className = 'btn btn-ghost';
    resetBtn.style.color = 'var(--danger-color)';
    resetBtn.textContent = 'Start New Campaign (Reset)';
    resetBtn.addEventListener('click', () => {
      if (
        window.confirm(
          'Are you sure you want to reset the campaign? All completion history and scores will be cleared, and Level 1 unlocked.'
        )
      ) {
        callbacks.onResetCampaign();
      }
    });
    resetWrapper.appendChild(resetBtn);
    card.appendChild(resetWrapper);
  }

  // Chapters list preview
  const chaptersSection = document.createElement('section');
  chaptersSection.style.marginTop = '2rem';

  const chHeading = document.createElement('h2');
  chHeading.style.fontSize = '1.25rem';
  chHeading.textContent = 'Chapters';
  chaptersSection.appendChild(chHeading);

  const chList = document.createElement('ol');
  chList.style.paddingLeft = '1.25rem';
  chList.style.lineHeight = '1.8';

  catalog.chapters.forEach((ch) => {
    const li = document.createElement('li');
    li.textContent = `${ch.title} (Levels ${ch.firstLevel}–${ch.lastLevel})`;
    chList.appendChild(li);
  });
  chaptersSection.appendChild(chList);
  card.appendChild(chaptersSection);

  container.appendChild(card);
  return container;
}
