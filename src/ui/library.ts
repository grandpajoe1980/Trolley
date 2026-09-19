import { catalog } from '../content/catalog';
import type { SaveManager } from '../storage/save';

export interface LibraryCallbacks {
  onSelectLevel: (levelId: number, mode: 'campaign' | 'practice') => void;
  onBackToMenu: () => void;
}

export function createLibraryScreen(saveManager: SaveManager, callbacks: LibraryCallbacks): HTMLElement {
  const container = document.createElement('main');
  container.className = 'level-container library-container';

  const card = document.createElement('div');
  card.className = 'card';

  const header = document.createElement('div');
  header.style.display = 'flex';
  header.style.justifyContent = 'space-between';
  header.style.alignItems = 'center';
  header.style.marginBottom = '1.5rem';

  const heading = document.createElement('h1');
  heading.textContent = 'Level Library';
  heading.style.margin = '0';
  header.appendChild(heading);

  const backBtn = document.createElement('button');
  backBtn.type = 'button';
  backBtn.className = 'btn btn-secondary';
  backBtn.textContent = 'Main Menu';
  backBtn.addEventListener('click', () => callbacks.onBackToMenu());
  header.appendChild(backBtn);

  card.appendChild(header);

  const save = saveManager.getSave();
  const nextUnlocked = saveManager.getNextUnlockedLevel();

  // 10 chapters
  catalog.chapters.forEach((ch) => {
    const chDetails = document.createElement('details');
    chDetails.className = 'card';
    chDetails.style.marginBottom = '1rem';
    chDetails.open = nextUnlocked >= ch.firstLevel && nextUnlocked <= ch.lastLevel;

    const chSummary = document.createElement('summary');
    chSummary.style.fontWeight = '700';
    chSummary.style.fontSize = '1.1rem';
    chSummary.style.cursor = 'pointer';
    chSummary.textContent = `Chapter ${ch.id}: ${ch.title} (Levels ${ch.firstLevel}–${ch.lastLevel})`;
    chDetails.appendChild(chSummary);

    const levelsGrid = document.createElement('div');
    levelsGrid.style.display = 'grid';
    levelsGrid.style.gridTemplateColumns = 'repeat(auto-fill, minmax(240px, 1fr))';
    levelsGrid.style.gap = '0.75rem';
    levelsGrid.style.marginTop = '1rem';

    for (let lvlId = ch.firstLevel; lvlId <= ch.lastLevel; lvlId++) {
      const lvl = catalog.levels[lvlId - 1]!;
      const isCompleted = lvlId < nextUnlocked;
      const isCurrent = lvlId === nextUnlocked;
      const isFuture = lvlId > nextUnlocked;

      const item = document.createElement('div');
      item.className = 'card library-level-item';
      item.style.padding = '0.75rem';
      item.style.backgroundColor = '#ffffff';
      item.style.border = isCurrent ? '2px solid var(--primary-color)' : '1px solid var(--border-main)';

      const titleLine = document.createElement('strong');
      titleLine.textContent = `${lvl.id}. ${lvl.title}`;
      titleLine.style.display = 'block';
      titleLine.style.fontSize = '0.95rem';
      item.appendChild(titleLine);

      const statusLine = document.createElement('span');
      statusLine.style.fontSize = '0.85rem';
      statusLine.style.color = 'var(--text-muted)';
      statusLine.style.display = 'block';
      statusLine.style.margin = '0.25rem 0 0.5rem';

      if (isCompleted) {
        const completion = save.completions[lvlId - 1];
        statusLine.textContent = `Completed: Choice [${completion?.choiceId}]`;
      } else if (isCurrent) {
        statusLine.textContent = 'Next Campaign Level';
        statusLine.style.color = 'var(--primary-color)';
        statusLine.style.fontWeight = '600';
      } else if (isFuture) {
        statusLine.textContent = 'Available in Practice Mode';
      } else {
        statusLine.textContent = 'Available in Practice Mode';
      }
      item.appendChild(statusLine);

      const btn = document.createElement('button');
      btn.type = 'button';
      btn.className = `${isCurrent ? 'btn btn-primary' : 'btn btn-secondary'} library-level-action`;
      btn.style.fontSize = '0.85rem';
      btn.style.padding = '0.4rem 0.8rem';
      btn.style.minHeight = '36px';
      btn.textContent = isCurrent ? 'Play Campaign' : isCompleted ? 'Practice Again' : 'Practice';
      btn.addEventListener('click', () => {
        callbacks.onSelectLevel(lvlId, isCurrent ? 'campaign' : 'practice');
      });
      item.appendChild(btn);

      levelsGrid.appendChild(item);
    }

    chDetails.appendChild(levelsGrid);
    card.appendChild(chDetails);
  });

  container.appendChild(card);
  return container;
}
