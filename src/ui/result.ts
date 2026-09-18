import type { ChoiceId, Level, Outcome } from '../content/types';
import { formatDecimal1 } from '../engine/scoring';

export interface ResultCallbacks {
  onNextLevel: () => void;
  onReplayPractice: () => void;
  onReturnToCampaign: () => void;
  onViewSummary: () => void;
}

export function createResultPanel(
  level: Level,
  committedChoiceId: ChoiceId,
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

  const summaryP = document.createElement('p');
  summaryP.className = 'outcome-summary';
  summaryP.textContent = outcome.summary;
  header.appendChild(summaryP);

  container.appendChild(header);

  // 2. Metrics Card (Raw Deaths, Weighted Impact, Exact Rational Score)
  const metricsCard = document.createElement('div');
  metricsCard.className = 'card metrics-card';

  const metricsGrid = document.createElement('div');
  metricsGrid.className = 'metrics-grid';

  // Raw Deaths block
  const rawBlock = document.createElement('div');
  rawBlock.className = 'metric-item';
  rawBlock.innerHTML = `
    <span class="metric-label">Raw Fatalities</span>
    <span class="metric-value raw-value">${outcome.rawDeaths}</span>
    <span class="metric-detail">Humans: ${outcome.deaths.humans}, Roaches: ${outcome.deaths.cockroaches}, Butterflies: ${outcome.deaths.butterflies}</span>
  `;
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

  // 3. Epilogue Timeline (for delayed human deaths)
  if (outcome.delayedHumanDeaths > 0) {
    const epilogue = document.createElement('div');
    epilogue.className = 'callout epilogue-callout';
    epilogue.innerHTML = `
      <strong>Later Epilogue:</strong>
      Includes <em>${outcome.delayedHumanDeaths}</em> delayed human ${outcome.delayedHumanDeaths === 1 ? 'death' : 'deaths'} occurring subsequent to the immediate event. (Already counted in the ${outcome.deaths.humans} human total; not double-counted).
    `;
    container.appendChild(epilogue);
  }

  // 4. Ethical Lens Breakdown
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

  // 5. Three-Part Reflection
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

  // 6. Compare Alternatives Accordion
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
        <th>Raw Deaths</th>
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

  // 7. Navigation Actions
  const navActions = document.createElement('footer');
  navActions.className = 'result-actions';

  if (mode === 'campaign') {
    if (level.id < 200) {
      const nextBtn = document.createElement('button');
      nextBtn.type = 'button';
      nextBtn.className = 'btn btn-primary btn-next';
      nextBtn.textContent = `Next: Level ${level.id + 1}`;
      nextBtn.addEventListener('click', () => callbacks.onNextLevel());
      navActions.appendChild(nextBtn);
    } else {
      const summaryBtn = document.createElement('button');
      summaryBtn.type = 'button';
      summaryBtn.className = 'btn btn-primary btn-summary';
      summaryBtn.textContent = 'Complete Campaign — View Final Summary';
      summaryBtn.addEventListener('click', () => callbacks.onViewSummary());
      navActions.appendChild(summaryBtn);
    }
  } else {
    // Practice mode
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

  container.appendChild(navActions);

  // Focus the heading on creation for screen readers
  setTimeout(() => {
    heading.focus();
  }, 0);

  return container;
}
