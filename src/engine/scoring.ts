import type { Counts, Lens, Outcome } from '../content/types';

export interface LensSummary {
  lens: Lens;
  count: number;
  average: number | null;
  displayAverage: string;
}

export interface CampaignMetrics {
  completedCount: number;
  rawDeaths: number;
  weightedImpactTenths: number;
  campaignScore: number | null;
  displayScore: string;
  lensSummaries: Record<Lens, LensSummary>;
}

/**
 * Half-up rounding to one decimal place for nonnegative numbers.
 * e.g., 83.3333... -> 83.3, 83.35 -> 83.4
 */
export function roundHalfUp1(value: number): number {
  if (value < 0) {
    return -roundHalfUp1(-value);
  }
  return Math.floor(value * 10 + 0.5) / 10;
}

export function formatDecimal1(value: number | null): string {
  if (value === null || Number.isNaN(value)) {
    return '—';
  }
  return roundHalfUp1(value).toFixed(1);
}

export function calculateRawDeaths(deaths: Counts): number {
  return deaths.humans + deaths.cockroaches + deaths.butterflies;
}

export function calculateWeightedImpactTenths(deaths: Counts): number {
  return deaths.humans * 10 + deaths.cockroaches * 1 + deaths.butterflies * 2;
}

/**
 * Integer twelfths calculation:
 * Since all catalog lens denominators are 3 or 4 (and 12 is divisible by 1, 2, 3, 4),
 * integer twelfths avoid floating point drift when aggregating level scores.
 */
export function calculateScoreTwelfths(scoreNumerator: number, scoreDenominator: number): number {
  if (12 % scoreDenominator !== 0) {
    throw new Error(`Score denominator ${scoreDenominator} does not divide 12`);
  }
  return scoreNumerator * (12 / scoreDenominator);
}

export function computeCampaignMetrics(firstCompletionOutcomes: Outcome[]): CampaignMetrics {
  const completedCount = firstCompletionOutcomes.length;

  if (completedCount === 0) {
    return {
      completedCount: 0,
      rawDeaths: 0,
      weightedImpactTenths: 0,
      campaignScore: null,
      displayScore: '—',
      lensSummaries: {
        consequences: { lens: 'consequences', count: 0, average: null, displayAverage: '—' },
        rightsDuties: { lens: 'rightsDuties', count: 0, average: null, displayAverage: '—' },
        autonomy: { lens: 'autonomy', count: 0, average: null, displayAverage: '—' },
        fairness: { lens: 'fairness', count: 0, average: null, displayAverage: '—' }
      }
    };
  }

  let totalRawDeaths = 0;
  let totalWeightedImpactTenths = 0;
  let totalScoreTwelfths = 0;

  const lensTotals: Record<Lens, { sum: number; count: number }> = {
    consequences: { sum: 0, count: 0 },
    rightsDuties: { sum: 0, count: 0 },
    autonomy: { sum: 0, count: 0 },
    fairness: { sum: 0, count: 0 }
  };

  for (const outcome of firstCompletionOutcomes) {
    totalRawDeaths += outcome.rawDeaths;
    totalWeightedImpactTenths += outcome.weightedImpactTenths;
    totalScoreTwelfths += calculateScoreTwelfths(outcome.scoreNumerator, outcome.scoreDenominator);

    const lenses: Lens[] = ['consequences', 'rightsDuties', 'autonomy', 'fairness'];
    for (const lens of lenses) {
      const rating = outcome.ratings[lens];
      if (rating !== undefined) {
        lensTotals[lens].sum += rating;
        lensTotals[lens].count += 1;
      }
    }
  }

  const campaignScore = totalScoreTwelfths / (12 * completedCount);
  const displayScore = formatDecimal1(campaignScore);

  const lensSummaries: Record<Lens, LensSummary> = {
    consequences: {
      lens: 'consequences',
      count: lensTotals.consequences.count,
      average: lensTotals.consequences.count > 0 ? lensTotals.consequences.sum / lensTotals.consequences.count : null,
      displayAverage: formatDecimal1(
        lensTotals.consequences.count > 0 ? lensTotals.consequences.sum / lensTotals.consequences.count : null
      )
    },
    rightsDuties: {
      lens: 'rightsDuties',
      count: lensTotals.rightsDuties.count,
      average: lensTotals.rightsDuties.count > 0 ? lensTotals.rightsDuties.sum / lensTotals.rightsDuties.count : null,
      displayAverage: formatDecimal1(
        lensTotals.rightsDuties.count > 0 ? lensTotals.rightsDuties.sum / lensTotals.rightsDuties.count : null
      )
    },
    autonomy: {
      lens: 'autonomy',
      count: lensTotals.autonomy.count,
      average: lensTotals.autonomy.count > 0 ? lensTotals.autonomy.sum / lensTotals.autonomy.count : null,
      displayAverage: formatDecimal1(
        lensTotals.autonomy.count > 0 ? lensTotals.autonomy.sum / lensTotals.autonomy.count : null
      )
    },
    fairness: {
      lens: 'fairness',
      count: lensTotals.fairness.count,
      average: lensTotals.fairness.count > 0 ? lensTotals.fairness.sum / lensTotals.fairness.count : null,
      displayAverage: formatDecimal1(
        lensTotals.fairness.count > 0 ? lensTotals.fairness.sum / lensTotals.fairness.count : null
      )
    }
  };

  return {
    completedCount,
    rawDeaths: totalRawDeaths,
    weightedImpactTenths: totalWeightedImpactTenths,
    campaignScore,
    displayScore,
    lensSummaries
  };
}
