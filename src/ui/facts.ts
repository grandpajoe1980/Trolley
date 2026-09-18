import type { PlayerLevel } from '../content/types';

export function createFactsPanel(level: PlayerLevel): HTMLElement {
  const container = document.createElement('section');
  container.className = 'facts-panel';
  container.setAttribute('aria-label', 'Level Premise and Information');

  // Chapter & Domain Header
  const header = document.createElement('header');
  header.className = 'facts-header';

  const chapterTag = document.createElement('span');
  chapterTag.className = 'badge chapter-badge';
  chapterTag.textContent = `Chapter ${level.chapter}: ${level.domain}`;
  header.appendChild(chapterTag);

  const title = document.createElement('h1');
  title.className = 'level-title';
  title.textContent = `Level ${level.id}: ${level.title}`;
  header.appendChild(title);

  const distinction = document.createElement('p');
  distinction.className = 'philosophical-distinction';
  distinction.textContent = level.philosophicalDistinction;
  header.appendChild(distinction);

  container.appendChild(header);

  // Premise narrative card
  const premiseCard = document.createElement('div');
  premiseCard.className = 'card premise-card';

  const premiseHeading = document.createElement('h2');
  premiseHeading.className = 'sr-only';
  premiseHeading.textContent = 'Scenario Premise';
  premiseCard.appendChild(premiseHeading);

  const premiseText = document.createElement('p');
  premiseText.className = 'premise-text';
  premiseText.textContent = level.premise;
  premiseCard.appendChild(premiseText);

  container.appendChild(premiseCard);

  // Default Disclosure Callout
  const disclosureBox = document.createElement('div');
  disclosureBox.className = 'callout default-disclosure';
  disclosureBox.setAttribute('role', 'status');

  const disclosureStrong = document.createElement('strong');
  disclosureStrong.textContent = 'Default Path: ';
  disclosureBox.appendChild(disclosureStrong);

  const disclosureSpan = document.createElement('span');
  disclosureSpan.textContent = level.defaultDisclosure;
  disclosureBox.appendChild(disclosureSpan);

  container.appendChild(disclosureBox);

  // Epistemic Uncertainty Notice if applicable
  if (level.knowledge.mode === 'epistemic-fixed') {
    const notice = document.createElement('div');
    notice.className = 'callout epistemic-notice';
    notice.innerHTML = `
      <strong>Fixed Story with Uncertain Information:</strong>
      Ratings judge the evidence available at the decision, not hindsight after the outcome unfolds.
    `;
    container.appendChild(notice);
  }

  // Provenance & Source References
  const footer = document.createElement('footer');
  footer.className = 'facts-footer';

  const provTag = document.createElement('span');
  provTag.className = 'badge prov-badge';
  provTag.textContent =
    level.provenance.kind === 'canonical-adaptation' ? 'Canonical adaptation' : 'Conceptual background';
  footer.appendChild(provTag);

  if (level.provenance.sources.length > 0) {
    const sourcesSpan = document.createElement('span');
    sourcesSpan.className = 'source-links';
    sourcesSpan.textContent = 'Source: ';

    level.provenance.sources.forEach((src, idx) => {
      const link = document.createElement('a');
      link.href = src.url;
      link.target = '_blank';
      link.rel = 'noopener noreferrer';
      link.textContent = src.id;
      sourcesSpan.appendChild(link);
      if (idx < level.provenance.sources.length - 1) {
        sourcesSpan.appendChild(document.createTextNode(', '));
      }
    });
    footer.appendChild(sourcesSpan);
  }

  container.appendChild(footer);

  return container;
}
