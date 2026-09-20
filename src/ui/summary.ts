import { getOutcome } from '../content/catalog';
import type { Outcome } from '../content/types';
import { computeCampaignMetrics } from '../engine/scoring';
import type { SaveManager } from '../storage/save';

export interface SummaryCallbacks {
  onBackToMenu: () => void;
  onOpenLibrary: () => void;
  onResetCampaign: () => void;
}

export function createSummaryScreen(saveManager: SaveManager, callbacks: SummaryCallbacks): HTMLElement {
  const container = document.createElement('main');
  container.className = 'level-container summary-container';

  const card = document.createElement('div');
  card.className = 'card';

  const heading = document.createElement('h1');
  heading.textContent = 'Campaign Complete — Final Ethical Ledger';
  card.appendChild(heading);

  const introP = document.createElement('p');
  introP.textContent =
    'You have completed the campaign dilemmas. Below is your cumulative moral ledger recomputed from your first completed choices.';
  card.appendChild(introP);

  // Compute metrics from first completions
  const save = saveManager.getSave();
  const outcomes: Outcome[] = [];
  for (const comp of save.completions) {
    const o = getOutcome(comp.levelId, comp.choiceId);
    if (o) outcomes.push(o);
  }

  const metrics = computeCampaignMetrics(outcomes);

  // Big summary metrics
  const metricsGrid = document.createElement('div');
  metricsGrid.className = 'metrics-grid';
  metricsGrid.style.margin = '1.5rem 0';

  // Total Completed
  const countBlock = document.createElement('div');
  countBlock.className = 'metric-item';
  countBlock.innerHTML = `
    <span class="metric-label">Levels Completed</span>
    <span class="metric-value">${metrics.completedCount} / 200</span>
  `;
  metricsGrid.appendChild(countBlock);

  // Overall Campaign Score
  const scoreBlock = document.createElement('div');
  scoreBlock.className = 'metric-item';
  scoreBlock.innerHTML = `
    <span class="metric-label">Campaign Score</span>
    <span class="metric-value" style="color: var(--primary-color);">${metrics.displayScore} / 100</span>
    <span class="metric-detail">Equal rational average of first-completion level means</span>
  `;
  metricsGrid.appendChild(scoreBlock);

  // Combined fatalities
  const rawBlock = document.createElement('div');
  rawBlock.className = 'metric-item';
  rawBlock.innerHTML = `
    <span class="metric-label">Fatalities</span>
    <span class="metric-value raw-value">${metrics.rawDeaths}</span>
  `;
  metricsGrid.appendChild(rawBlock);

  // Weighted Impact
  const weightedValue = (metrics.weightedImpactTenths / 10).toFixed(1);
  const weightedBlock = document.createElement('div');
  weightedBlock.className = 'metric-item';
  weightedBlock.innerHTML = `
    <span class="metric-label">Weighted Impact</span>
    <span class="metric-value weighted-value">${weightedValue}</span>
    <span class="metric-detail">Human 1.0, Roach 0.1, Butterfly 0.2</span>
  `;
  metricsGrid.appendChild(weightedBlock);

  card.appendChild(metricsGrid);

  const masteryCard = document.createElement('section');
  masteryCard.className = 'card aftermath-card';
  const masteryHeading = document.createElement('h2');
  masteryHeading.className = 'section-title';
  masteryHeading.textContent = 'Operational Mastery';
  masteryCard.appendChild(masteryHeading);
  const masteryText = document.createElement('p');
  masteryText.className = 'aftermath-text';
  masteryText.textContent =
    `${save.campaignState.evidenceReviewed} evidence reviews · ${save.campaignState.precisionHits} precision bonuses · ${save.campaignState.sequencesCompleted} sequences completed · ${save.campaignState.fieldKitCharges} field-kit charges remaining.`;
  masteryCard.appendChild(masteryText);
  card.appendChild(masteryCard);

  // Lens Breakdown
  const lensSection = document.createElement('section');
  lensSection.style.marginTop = '2rem';

  const lensHeading = document.createElement('h2');
  lensHeading.style.fontSize = '1.25rem';
  lensHeading.textContent = 'Ethical Lens Breakdown';
  lensSection.appendChild(lensHeading);

  const lensTable = document.createElement('table');
  lensTable.className = 'compare-table';
  lensTable.innerHTML = `
    <thead>
      <tr>
        <th>Ethical Lens</th>
        <th>Applicable Levels</th>
        <th>Average Rating (0–100)</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><strong>Consequences</strong> (Disclosed Evidence)</td>
        <td>${metrics.lensSummaries.consequences.count}</td>
        <td><strong>${metrics.lensSummaries.consequences.displayAverage}</strong></td>
      </tr>
      <tr>
        <td><strong>Rights & Duties</strong></td>
        <td>${metrics.lensSummaries.rightsDuties.count}</td>
        <td><strong>${metrics.lensSummaries.rightsDuties.displayAverage}</strong></td>
      </tr>
      <tr>
        <td><strong>Autonomy & Consent</strong></td>
        <td>${metrics.lensSummaries.autonomy.count}</td>
        <td><strong>${metrics.lensSummaries.autonomy.displayAverage}</strong></td>
      </tr>
      <tr>
        <td><strong>Fairness & Impartiality</strong></td>
        <td>${metrics.lensSummaries.fairness.count}</td>
        <td><strong>${metrics.lensSummaries.fairness.displayAverage}</strong></td>
      </tr>
    </tbody>
  `;
  lensSection.appendChild(lensTable);
  card.appendChild(lensSection);

  // Editorial Disclaimer Callout
  const disclaimer = document.createElement('div');
  disclaimer.className = 'callout epistemic-notice';
  disclaimer.style.marginTop = '1.5rem';
  disclaimer.innerHTML = `
    <strong>Philosophical Disclaimer:</strong>
    Scores express a game interpretation and editorial calibration, not an objective scientific assessment of character or morality.
  `;
  card.appendChild(disclaimer);

  // Action Buttons
  const actions = document.createElement('div');
  actions.className = 'action-controls';
  actions.style.marginTop = '2rem';

  const libraryBtn = document.createElement('button');
  libraryBtn.type = 'button';
  libraryBtn.className = 'btn btn-primary';
  libraryBtn.textContent = 'Explore All Levels in Practice Mode';
  libraryBtn.addEventListener('click', () => callbacks.onOpenLibrary());
  actions.appendChild(libraryBtn);

  const menuBtn = document.createElement('button');
  menuBtn.type = 'button';
  menuBtn.className = 'btn btn-secondary';
  menuBtn.textContent = 'Main Menu';
  menuBtn.addEventListener('click', () => callbacks.onBackToMenu());
  actions.appendChild(menuBtn);

  const resetBtn = document.createElement('button');
  resetBtn.type = 'button';
  resetBtn.className = 'btn btn-ghost';
  resetBtn.style.color = 'var(--danger-color)';
  resetBtn.textContent = 'Start New Campaign (Reset)';
  resetBtn.addEventListener('click', () => {
    if (
      window.confirm(
        'Are you sure you want to reset your campaign? All 200 completion records and scores will be cleared.'
      )
    ) {
      callbacks.onResetCampaign();
    }
  });
  actions.appendChild(resetBtn);

  card.appendChild(actions);
  container.appendChild(card);
  return container;
}
