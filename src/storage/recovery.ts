export interface RecoveryCallbacks {
  onPlayTemporary: () => void;
  onResetSave: () => void;
}

export function createRecoveryScreen(
  rawSaveText: string | null,
  errorMessage: string,
  callbacks: RecoveryCallbacks
): HTMLElement {
  const container = document.createElement('main');
  container.className = 'level-container recovery-container';
  container.setAttribute('role', 'alert');

  const card = document.createElement('div');
  card.className = 'card';

  const heading = document.createElement('h1');
  heading.style.color = 'var(--danger-color)';
  heading.textContent = 'Save File Incompatible or Corrupt';
  card.appendChild(heading);

  const desc = document.createElement('p');
  desc.textContent =
    'Your stored local save cannot be verified by the current game catalog. To preserve your existing data, it has not been overwritten automatically.';
  card.appendChild(desc);

  const errBox = document.createElement('pre');
  errBox.className = 'callout';
  errBox.style.backgroundColor = '#fef2f2';
  errBox.style.borderColor = '#fecaca';
  errBox.style.color = '#991b1b';
  errBox.style.whiteSpace = 'pre-wrap';
  errBox.textContent = errorMessage;
  card.appendChild(errBox);

  const actions = document.createElement('div');
  actions.style.display = 'flex';
  actions.style.gap = '1rem';
  actions.style.marginTop = '1.5rem';
  actions.style.flexWrap = 'wrap';

  // Download raw save button
  if (rawSaveText) {
    const downloadBtn = document.createElement('button');
    downloadBtn.type = 'button';
    downloadBtn.className = 'btn btn-secondary';
    downloadBtn.textContent = 'Download Raw Save';
    downloadBtn.addEventListener('click', () => {
      const blob = new Blob([rawSaveText], { type: 'application/json' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `trolley-corrupt-save-${new Date().toISOString()}.json`;
      a.click();
      URL.revokeObjectURL(url);
    });
    actions.appendChild(downloadBtn);
  }

  // Play temporary campaign
  const tempBtn = document.createElement('button');
  tempBtn.type = 'button';
  tempBtn.className = 'btn btn-secondary';
  tempBtn.textContent = 'Play Temporary Session (In-Memory)';
  tempBtn.addEventListener('click', () => {
    callbacks.onPlayTemporary();
  });
  actions.appendChild(tempBtn);

  // Reset local save
  const resetBtn = document.createElement('button');
  resetBtn.type = 'button';
  resetBtn.className = 'btn btn-primary';
  resetBtn.style.backgroundColor = 'var(--danger-color)';
  resetBtn.textContent = 'Reset Local Save & Start Fresh';
  resetBtn.addEventListener('click', () => {
    if (window.confirm('Are you sure you want to reset your local save? This will restart the campaign from Level 1.')) {
      callbacks.onResetSave();
    }
  });
  actions.appendChild(resetBtn);

  card.appendChild(actions);
  container.appendChild(card);
  return container;
}
