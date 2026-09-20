import type { ChoiceId, Level, Outcome } from '../content/types';
import { formatDecimal1 } from '../engine/scoring';
import type { CampaignState } from '../storage/types';
import type { ChallengeResult } from './controls';
import type { ScenarioMode } from '../gameplay/profile';

export interface ResultCallbacks {
  onReplayPractice: () => void;
  onReturnToCampaign: () => void;
  onViewSummary: () => void;
  challengeResult?: { mode: ScenarioMode; result: ChallengeResult } | null;
  campaignState?: CampaignState;
}

export function createResultPanel(
  level: Level,
  committedChoiceId: ChoiceId,
  selectionOrigin: 'default' | 'player',
  mode: 'campaign' | 'practice',
  callbacks: ResultCallbacks
): HTMLElement {
  const container = document.createElement('section');
  container.className = 'result-panel';
  container.setAttribute('aria-label', 'Level Results and Ethical Reflection');

  const choice = level.choices.find((c) => c.id === committedChoiceId);
  if (!choice) return container;
  const outcome: Outcome = choice.outcome;

  // 1. Result Header
  const header = document.createElement('header');
  header.className = 'result-header';

  const heading = document.createElement('h2');
  heading.tabIndex = -1;
  heading.className = 'result-title';
  heading.textContent = `Choice ${choice.id} Committed: ${choice.label}`;
  header.appendChild(heading);

  const origin = document.createElement('p');
  origin.className = 'selection-origin';
  origin.textContent = selectionOrigin === 'default' ? 'Selected by the disclosed default.' : 'Selected by you.';
  header.appendChild(origin);

  const summaryP = document.createElement('p');
  summaryP.className = 'outcome-summary';
  summaryP.textContent = outcome.summary;
  header.appendChild(summaryP);

  container.appendChild(header);

  // 2. Secondary result actions. Campaign progression uses the level
  // navigator under the game; only practice actions and the final summary
  // remain here.
  const navActions = document.createElement('footer');
  navActions.className = 'result-actions result-actions-top';

  if (mode === 'campaign') {
    if (level.id === 200) {
      const summaryBtn = document.createElement('button');
      summaryBtn.type = 'button';
      summaryBtn.className = 'btn btn-primary btn-summary';
      summaryBtn.textContent = 'Complete Campaign — View Final Summary';
      summaryBtn.addEventListener('click', () => callbacks.onViewSummary());
      navActions.appendChild(summaryBtn);
    }
  } else {
    const replayBtn = document.createElement('button');
    replayBtn.type = 'button';
    replayBtn.className = 'btn btn-secondary';
    replayBtn.textContent = 'Replay Level';
    replayBtn.addEventListener('click', () => callbacks.onReplayPractice());
    navActions.appendChild(replayBtn);

    const returnBtn = document.createElement('button');
    returnBtn.type = 'button';
    returnBtn.className = 'btn btn-primary';
    returnBtn.textContent = 'Return to Campaign';
    returnBtn.addEventListener('click', () => callbacks.onReturnToCampaign());
    navActions.appendChild(returnBtn);
  }

  if (navActions.childElementCount > 0) {
    container.appendChild(navActions);
  }

  // 3. Metrics Card (Fatalities, Weighted Impact, Exact Rational Score)
  const metricsCard = document.createElement('div');
  metricsCard.className = 'card metrics-card';

  const metricsGrid = document.createElement('div');
  metricsGrid.className = 'metrics-grid';

  // Combined fatalities block. Species-specific counts remain authoring data,
  // but the player-facing tally is intentionally one combined number.
  const rawBlock = document.createElement('div');
  rawBlock.className = 'metric-item';
  const rawLabel = document.createElement('span');
  rawLabel.className = 'metric-label';
  rawLabel.textContent = 'Fatalities';
  const rawValue = document.createElement('span');
  rawValue.className = 'metric-value raw-value';
  rawValue.textContent = String(outcome.rawDeaths);
  rawBlock.append(rawLabel, rawValue);
  metricsGrid.appendChild(rawBlock);

  // Weighted Impact block
  const weightedValue = (outcome.weightedImpactTenths / 10).toFixed(1);
  const impactBlock = document.createElement('div');
  impactBlock.className = 'metric-item';
  impactBlock.innerHTML = `
    <span class="metric-label">Weighted Impact</span>
    <span class="metric-value weighted-value">${weightedValue}</span>
    <span class="metric-detail">Human 1.0, Roach 0.1, Butterfly 0.2</span>
  `;
  metricsGrid.appendChild(impactBlock);

  // Level Score block
  const levelScoreNum = outcome.scoreNumerator / outcome.scoreDenominator;
  const scoreBlock = document.createElement('div');
  scoreBlock.className = 'metric-item';
  scoreBlock.innerHTML = `
    <span class="metric-label">Level Score</span>
    <span class="metric-value score-value">${formatDecimal1(levelScoreNum)}</span>
    <span class="metric-detail">Exact: ${outcome.scoreNumerator}/${outcome.scoreDenominator} across ${outcome.scoreDenominator} lenses</span>
  `;
  metricsGrid.appendChild(scoreBlock);

  metricsCard.appendChild(metricsGrid);
  container.appendChild(metricsCard);

  const aftermathCard = document.createElement('section');
  aftermathCard.className = 'card aftermath-card';
  const aftermathHeading = document.createElement('h3');
  aftermathHeading.className = 'section-title';
  aftermathHeading.textContent = level.id % 20 === 0 ? 'Chapter debrief' : 'After-action report';
  aftermathCard.appendChild(aftermathHeading);

  const aftermathText = document.createElement('p');
  aftermathText.className = 'aftermath-text';
  if (level.id % 20 === 0) {
    aftermathText.textContent = `Chapter ${level.chapter} is complete. The next shift will introduce a new kind of decision pressure.`;
  } else {
    aftermathText.textContent = `The decision is logged. Level ${level.id + 1} will carry the campaign forward with a fresh operating problem.`;
  }
  aftermathCard.appendChild(aftermathText);

  if (callbacks.challengeResult) {
    const challengeLine = document.createElement('p');
    challengeLine.className = 'challenge-result';
    const modeLabel = callbacks.challengeResult.mode === 'investigation'
      ? 'Evidence review'
      : callbacks.challengeResult.mode === 'precision'
        ? 'Precision window'
        : callbacks.challengeResult.mode === 'sequence'
          ? 'Multi-step operation'
          : 'Field kit';
    const resultLabel = callbacks.challengeResult.result === 'perfect'
      ? 'Perfect timing'
      : callbacks.challengeResult.result === 'complete'
        ? 'Completed'
        : callbacks.challengeResult.result === 'close'
          ? 'Close timing'
          : callbacks.challengeResult.result === 'missed'
            ? 'Missed window'
            : 'Skipped';
    challengeLine.textContent = `${modeLabel}: ${resultLabel}.`;
    aftermathCard.appendChild(challengeLine);
  }

  if (callbacks.campaignState) {
    const readinessLine = document.createElement('p');
    readinessLine.className = 'readiness-line';
    readinessLine.textContent = `Campaign readiness: ${callbacks.campaignState.fieldKitCharges} field-kit charges · ${callbacks.campaignState.precisionHits} precision bonuses.`;
    aftermathCard.appendChild(readinessLine);
  }
  container.appendChild(aftermathCard);

  // 4. Epilogue Timeline (for delayed human deaths)
  if (outcome.delayedHumanDeaths > 0) {
    const epilogue = document.createElement('div');
    epilogue.className = 'callout epilogue-callout';
    epilogue.innerHTML = `
      <strong>Later Epilogue:</strong>
      Includes <em>${outcome.delayedHumanDeaths}</em> delayed human ${outcome.delayedHumanDeaths === 1 ? 'death' : 'deaths'} occurring subsequent to the immediate event. (Already counted in the ${outcome.deaths.humans} human total; not double-counted).
    `;
    container.appendChild(epilogue);
  }

  // 5. Ethical Lens Breakdown
  const lensSection = document.createElement('div');
  lensSection.className = 'card lens-breakdown';

  const lensHeading = document.createElement('h3');
  lensHeading.className = 'section-title';
  lensHeading.textContent = 'Ethical Lens Ratings (0–100)';
  lensSection.appendChild(lensHeading);

  const lensList = document.createElement('dl');
  lensList.className = 'lens-list';

  const lensLabels: Record<string, string> = {
    consequences: 'Consequences (Disclosed Evidence)',
    rightsDuties: 'Rights & Duties',
    autonomy: 'Autonomy & Consent',
    fairness: 'Fairness & Impartiality'
  };

  for (const lens of level.applicableLenses) {
    const rating = outcome.ratings[lens];
    if (rating !== undefined) {
      const dt = document.createElement('dt');
      dt.textContent = lensLabels[lens] ?? lens;
      const dd = document.createElement('dd');
      dd.textContent = `${rating} / 100`;
      lensList.appendChild(dt);
      lensList.appendChild(dd);
    }
  }
  lensSection.appendChild(lensList);
  container.appendChild(lensSection);

  // 6. Three-Part Reflection
  const reflectionSection = document.createElement('div');
  reflectionSection.className = 'card reflection-card';

  const refHeading = document.createElement('h3');
  refHeading.className = 'section-title';
  refHeading.textContent = 'Philosophical Reflection';
  reflectionSection.appendChild(refHeading);

  const reasonBlock = document.createElement('div');
  reasonBlock.className = 'reflection-item';
  reasonBlock.innerHTML = `
    <strong>Strongest Supporting Reason:</strong>
    <p>${outcome.reflection.strongestReason}</p>
  `;
  reflectionSection.appendChild(reasonBlock);

  const tensionBlock = document.createElement('div');
  tensionBlock.className = 'reflection-item';
  tensionBlock.innerHTML = `
    <strong>Ethical Tension & Competing Claims:</strong>
    <p>${outcome.reflection.ethicalTension}</p>
  `;
  reflectionSection.appendChild(tensionBlock);

  container.appendChild(reflectionSection);

  // 7. Compare Alternatives Accordion
  const compareDetails = document.createElement('details');
  compareDetails.className = 'card compare-details';

  const compareSummary = document.createElement('summary');
  compareSummary.textContent = 'Compare with Alternative Choices';
  compareDetails.appendChild(compareSummary);

  const compareTable = document.createElement('table');
  compareTable.className = 'compare-table';
  compareTable.innerHTML = `
    <thead>
      <tr>
        <th>Choice</th>
        <th>Fatalities</th>
        <th>Weighted Impact</th>
        <th>Score</th>
        <th>Summary</th>
      </tr>
    </thead>
    <tbody>
      ${level.choices
        .map((c) => {
          const o = c.outcome;
          const isChosen = c.id === committedChoiceId;
          const sVal = formatDecimal1(o.scoreNumerator / o.scoreDenominator);
          const wVal = (o.weightedImpactTenths / 10).toFixed(1);
          return `
          <tr class="${isChosen ? 'chosen-row' : ''}">
            <td><strong>[${c.id}] ${c.label}</strong>${isChosen ? ' <em>(Committed)</em>' : ''}</td>
            <td>${o.rawDeaths}</td>
            <td>${wVal}</td>
            <td>${sVal}</td>
            <td>${o.summary}</td>
          </tr>
        `;
        })
        .join('')}
    </tbody>
  `;
  compareDetails.appendChild(compareTable);
  container.appendChild(compareDetails);

  // Focus the heading on creation for screen readers
  setTimeout(() => {
    // Keep focus accessible without moving the player away from the game and
    // the level navigation row when the result is added below it.
    heading.focus({ preventScroll: true });
  }, 0);

  return container;
}
