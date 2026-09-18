import type { TimingMode } from '../engine/clock';
import type { SaveManager } from '../storage/save';

export interface SettingsCallbacks {
  onBackToMenu: () => void;
  onResetSave: () => void;
}

export function createSettingsScreen(saveManager: SaveManager, callbacks: SettingsCallbacks): HTMLElement {
  const container = document.createElement('main');
  container.className = 'level-container settings-container';

  const card = document.createElement('div');
  card.className = 'card';

  const header = document.createElement('div');
  header.style.display = 'flex';
  header.style.justifyContent = 'space-between';
  header.style.alignItems = 'center';
  header.style.marginBottom = '1.5rem';

  const heading = document.createElement('h1');
  heading.textContent = 'Settings & Accessibility';
  heading.style.margin = '0';
  header.appendChild(heading);

  const backBtn = document.createElement('button');
  backBtn.type = 'button';
  backBtn.className = 'btn btn-secondary';
  backBtn.textContent = 'Main Menu';
  backBtn.addEventListener('click', () => callbacks.onBackToMenu());
  header.appendChild(backBtn);

  card.appendChild(header);

  const currentSettings = saveManager.getSettings();

  // 1. Timing Mode Selection
  const timingFieldset = document.createElement('fieldset');
  timingFieldset.style.border = '1px solid var(--border-main)';
  timingFieldset.style.borderRadius = 'var(--radius-md)';
  timingFieldset.style.padding = '1rem';
  timingFieldset.style.marginBottom = '1.5rem';

  const timingLegend = document.createElement('legend');
  timingLegend.textContent = 'Timing Mode';
  timingLegend.style.fontWeight = '700';
  timingFieldset.appendChild(timingLegend);

  const modes: Array<{ mode: TimingMode; label: string; desc: string }> = [
    { mode: 'standard', label: 'Standard (30 seconds)', desc: 'Standard authored decision window with pause support.' },
    { mode: 'extended', label: 'Extended (120 seconds)', desc: 'More time to read and deliberate before automatic resolution.' },
    { mode: 'untimed', label: 'Untimed (Manual Resolve)', desc: 'Trolley loops indefinitely until you choose to click Resolve.' }
  ];

  modes.forEach(({ mode, label, desc }) => {
    const row = document.createElement('div');
    row.style.marginBottom = '0.75rem';

    const labelEl = document.createElement('label');
    labelEl.style.display = 'flex';
    labelEl.style.alignItems = 'flex-start';
    labelEl.style.gap = '0.5rem';
    labelEl.style.cursor = 'pointer';

    const radio = document.createElement('input');
    radio.type = 'radio';
    radio.name = 'timingMode';
    radio.value = mode;
    radio.checked = currentSettings.timingMode === mode;
    radio.addEventListener('change', () => {
      saveManager.updateSettings({ timingMode: mode });
    });

    const textSpan = document.createElement('div');
    textSpan.innerHTML = `<strong>${label}</strong><br><small style="color: var(--text-muted);">${desc}</small>`;

    labelEl.appendChild(radio);
    labelEl.appendChild(textSpan);
    row.appendChild(labelEl);
    timingFieldset.appendChild(row);
  });

  card.appendChild(timingFieldset);

  // 2. Accessibility Options
  const a11yFieldset = document.createElement('fieldset');
  a11yFieldset.style.border = '1px solid var(--border-main)';
  a11yFieldset.style.borderRadius = 'var(--radius-md)';
  a11yFieldset.style.padding = '1rem';
  a11yFieldset.style.marginBottom = '1.5rem';

  const a11yLegend = document.createElement('legend');
  a11yLegend.textContent = 'Visual & Audio Accessibility';
  a11yLegend.style.fontWeight = '700';
  a11yFieldset.appendChild(a11yLegend);

  // Reduced motion
  const motionRow = document.createElement('div');
  motionRow.style.marginBottom = '0.75rem';
  const motionLabel = document.createElement('label');
  motionLabel.style.display = 'flex';
  motionLabel.style.alignItems = 'center';
  motionLabel.style.gap = '0.5rem';
  motionLabel.style.cursor = 'pointer';

  const motionCheck = document.createElement('input');
  motionCheck.type = 'checkbox';
  motionCheck.checked = currentSettings.reducedMotion;
  motionCheck.addEventListener('change', () => {
    saveManager.updateSettings({ reducedMotion: motionCheck.checked });
  });

  motionLabel.appendChild(motionCheck);
  motionLabel.appendChild(
    document.createTextNode('Reduced Motion (Step markers and instant transitions instead of continuous movement)')
  );
  motionRow.appendChild(motionLabel);
  a11yFieldset.appendChild(motionRow);

  // High contrast
  const contrastRow = document.createElement('div');
  contrastRow.style.marginBottom = '0.75rem';
  const contrastLabel = document.createElement('label');
  contrastLabel.style.display = 'flex';
  contrastLabel.style.alignItems = 'center';
  contrastLabel.style.gap = '0.5rem';
  contrastLabel.style.cursor = 'pointer';

  const contrastCheck = document.createElement('input');
  contrastCheck.type = 'checkbox';
  contrastCheck.checked = currentSettings.highContrast;
  contrastCheck.addEventListener('change', () => {
    saveManager.updateSettings({ highContrast: contrastCheck.checked });
  });

  contrastLabel.appendChild(contrastCheck);
  contrastLabel.appendChild(document.createTextNode('High Contrast (Reinforced borders and route indicators)'));
  contrastRow.appendChild(contrastLabel);
  a11yFieldset.appendChild(contrastRow);

  // Sound effects
  const soundRow = document.createElement('div');
  soundRow.style.marginBottom = '0.75rem';
  const soundLabel = document.createElement('label');
  soundLabel.style.display = 'flex';
  soundLabel.style.alignItems = 'center';
  soundLabel.style.gap = '0.5rem';
  soundLabel.style.cursor = 'pointer';

  const soundCheck = document.createElement('input');
  soundCheck.type = 'checkbox';
  soundCheck.checked = currentSettings.sound;
  soundCheck.addEventListener('change', () => {
    saveManager.updateSettings({ sound: soundCheck.checked });
  });

  soundLabel.appendChild(soundCheck);
  soundLabel.appendChild(document.createTextNode('Sound Effects (Disabled by default; no automatic audio playback)'));
  soundRow.appendChild(soundLabel);
  a11yFieldset.appendChild(soundRow);

  card.appendChild(a11yFieldset);

  // 3. Local Storage Management
  const storageFieldset = document.createElement('fieldset');
  storageFieldset.style.border = '1px solid var(--border-main)';
  storageFieldset.style.borderRadius = 'var(--radius-md)';
  storageFieldset.style.padding = '1rem';
  storageFieldset.style.marginBottom = '1.5rem';

  const storageLegend = document.createElement('legend');
  storageLegend.textContent = 'Local Save Storage';
  storageLegend.style.fontWeight = '700';
  storageFieldset.appendChild(storageLegend);

  const saveRow = document.createElement('div');
  saveRow.style.marginBottom = '0.75rem';
  const saveLabel = document.createElement('label');
  saveLabel.style.display = 'flex';
  saveLabel.style.alignItems = 'flex-start';
  saveLabel.style.gap = '0.5rem';
  saveLabel.style.cursor = 'pointer';

  const saveCheck = document.createElement('input');
  saveCheck.type = 'checkbox';
  saveCheck.checked = currentSettings.saveEnabled;
  saveCheck.addEventListener('change', () => {
    if (!saveCheck.checked) {
      if (
        window.confirm(
          'Disabling local saving switches to in-memory mode and clears this app’s stored campaign data on this device. Continue?'
        )
      ) {
        saveManager.updateSettings({ saveEnabled: false });
        saveManager.resetSave();
      } else {
        saveCheck.checked = true;
      }
    } else {
      saveManager.updateSettings({ saveEnabled: true });
    }
  });

  saveLabel.appendChild(saveCheck);
  saveLabel.appendChild(
    document.createTextNode(
      'Persist progress in local storage (If unchecked, game runs strictly in memory for this session).'
    )
  );
  saveRow.appendChild(saveLabel);
  storageFieldset.appendChild(saveRow);

  // Storage status indicator
  const statusP = document.createElement('p');
  statusP.style.fontSize = '0.9rem';
  statusP.style.color = 'var(--text-muted)';
  statusP.textContent = saveManager.isMemoryOnly
    ? 'Status: Currently operating in In-Memory mode (Storage disabled or denied).'
    : 'Status: Local storage active.';
  storageFieldset.appendChild(statusP);

  card.appendChild(storageFieldset);

  // 4. Reset Button
  const resetSection = document.createElement('div');
  resetSection.style.borderTop = '1px solid var(--border-subtle)';
  resetSection.style.paddingTop = '1rem';

  const resetBtn = document.createElement('button');
  resetBtn.type = 'button';
  resetBtn.className = 'btn btn-ghost';
  resetBtn.style.color = 'var(--danger-color)';
  resetBtn.textContent = 'Reset Campaign Save';
  resetBtn.addEventListener('click', () => {
    if (
      window.confirm(
        'Are you sure you want to reset your campaign save? All 200 level progressions will be cleared.'
      )
    ) {
      callbacks.onResetSave();
    }
  });
  resetSection.appendChild(resetBtn);
  card.appendChild(resetSection);

  container.appendChild(card);
  return container;
}
