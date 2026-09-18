import { describe, expect, it } from 'vitest';
import { catalog, getOutcome } from '../../src/content/catalog';
import {
  calculateRawDeaths,
  calculateScoreTwelfths,
  calculateWeightedImpactTenths,
  computeCampaignMetrics,
  formatDecimal1,
  roundHalfUp1
} from '../../src/engine/scoring';

describe('Engine Scoring', () => {
  it('correctly rounds half-up to one decimal place', () => {
    expect(roundHalfUp1(83.33333333333333)).toBe(83.3);
    expect(roundHalfUp1(83.35)).toBe(83.4);
    expect(roundHalfUp1(0)).toBe(0);
    expect(roundHalfUp1(100)).toBe(100);
    expect(formatDecimal1(null)).toBe('—');
    expect(formatDecimal1(83.3333)).toBe('83.3');
  });

  it('calculates raw and weighted deaths correctly', () => {
    // Human only
    expect(calculateRawDeaths({ humans: 1, cockroaches: 0, butterflies: 0 })).toBe(1);
    expect(calculateWeightedImpactTenths({ humans: 1, cockroaches: 0, butterflies: 0 })).toBe(10);

    // Cockroach only
    expect(calculateRawDeaths({ humans: 0, cockroaches: 1, butterflies: 0 })).toBe(1);
    expect(calculateWeightedImpactTenths({ humans: 0, cockroaches: 1, butterflies: 0 })).toBe(1);

    // Butterfly only
    expect(calculateRawDeaths({ humans: 0, cockroaches: 0, butterflies: 1 })).toBe(1);
    expect(calculateWeightedImpactTenths({ humans: 0, cockroaches: 0, butterflies: 1 })).toBe(2);

    // Mixed
    expect(calculateRawDeaths({ humans: 2, cockroaches: 3, butterflies: 4 })).toBe(9);
    expect(calculateWeightedImpactTenths({ humans: 2, cockroaches: 3, butterflies: 4 })).toBe(20 + 3 + 8);
  });

  it('matches the opening 3-level fixture: L001-B + L002-B + L003-B -> raw 2, impactTenths 3, display 83.3', () => {
    const o1 = getOutcome(1, 'B')!;
    const o2 = getOutcome(2, 'B')!;
    const o3 = getOutcome(3, 'B')!;

    const metrics = computeCampaignMetrics([o1, o2, o3]);

    expect(metrics.completedCount).toBe(3);
    expect(metrics.rawDeaths).toBe(2);
    expect(metrics.weightedImpactTenths).toBe(3);
    expect(metrics.displayScore).toBe('83.3');
  });

  it('calculates future/delayed deaths without double counting', () => {
    const o163 = getOutcome(163, 'B')!;
    expect(o163.rawDeaths).toBe(4);
    expect(o163.deaths.humans).toBe(4);
    expect(o163.delayedHumanDeaths).toBe(3);

    const o153 = getOutcome(153, 'B')!;
    expect(o153.rawDeaths).toBe(2);
    expect(o153.deaths.humans).toBe(2);
    expect(o153.delayedHumanDeaths).toBe(2);
  });

  it('keeps evidence-based scoring for luck fixtures (L114-B and L115-B)', () => {
    const o114 = getOutcome(114, 'B')!;
    expect(o114.ratings.consequences).toBe(95);
    expect(o114.rawDeaths).toBe(3);

    const o115 = getOutcome(115, 'B')!;
    expect(o115.ratings.consequences).toBe(15);
    expect(o115.rawDeaths).toBe(0);
  });

  it('weights 3-lens and 4-lens levels equally in twelfths aggregation', () => {
    // Find a 3-lens level and a 4-lens level
    const lvl3Lens = catalog.levels.find((l) => l.applicableLenses.length === 3)!;
    const lvl4Lens = catalog.levels.find((l) => l.applicableLenses.length === 4)!;

    const o3 = lvl3Lens.choices[0]!.outcome;
    const o4 = lvl4Lens.choices[0]!.outcome;

    expect(o3.scoreDenominator).toBe(3);
    expect(o4.scoreDenominator).toBe(4);

    const twelfths3 = calculateScoreTwelfths(o3.scoreNumerator, o3.scoreDenominator);
    const twelfths4 = calculateScoreTwelfths(o4.scoreNumerator, o4.scoreDenominator);

    expect(twelfths3).toBe(o3.scoreNumerator * 4);
    expect(twelfths4).toBe(o4.scoreNumerator * 3);

    const metrics = computeCampaignMetrics([o3, o4]);
    const expectedCampaignScore = (o3.scoreNumerator / 3 + o4.scoreNumerator / 4) / 2;
    expect(metrics.campaignScore).toBeCloseTo(expectedCampaignScore, 5);
  });

  it('returns empty metrics when no levels completed', () => {
    const metrics = computeCampaignMetrics([]);
    expect(metrics.completedCount).toBe(0);
    expect(metrics.campaignScore).toBeNull();
    expect(metrics.displayScore).toBe('—');
  });
});
