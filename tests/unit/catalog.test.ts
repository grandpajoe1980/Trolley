import { describe, expect, it } from 'vitest';
import { catalog, getLevel, getOutcome, getPlayerLevel, getValidationReport, schema } from '../../src/content/catalog';
import { validateCatalog } from '../../src/content/validate';

describe('Catalog and Content Validation', () => {
  it('validates catalog against JSON schema and cross-field invariants', () => {
    const report = validateCatalog(catalog, schema);
    expect(report.errors).toEqual([]);
    expect(report.status).toBe('PASS');
    expect(report.checks).toBeGreaterThan(5000);
  });

  it('provides cached validation report', () => {
    const report = getValidationReport();
    expect(report.status).toBe('PASS');
  });

  it('loads all 200 levels properly', () => {
    expect(catalog.levels.length).toBe(200);
    const lvl1 = getLevel(1);
    expect(lvl1?.id).toBe(1);
    expect(lvl1?.title).toBeDefined();

    const lvl200 = getLevel(200);
    expect(lvl200?.id).toBe(200);
  });

  it('projects safe PlayerLevel without leaking hidden fields', () => {
    // Level 102 is epistemic-fixed with author-only premise
    const lvl102 = getLevel(102);
    expect(lvl102?.knowledge.authorOnlyPremise).toBeDefined();

    const playerLvl102 = getPlayerLevel(102);
    expect(playerLvl102).toBeDefined();
    // Verify no authorOnlyPremise
    expect((playerLvl102?.knowledge as unknown as Record<string, unknown>)['authorOnlyPremise']).toBeUndefined();

    // Verify no outcome in choices
    for (const c of playerLvl102!.choices) {
      expect((c as unknown as Record<string, unknown>)['outcome']).toBeUndefined();
      expect((c as unknown as Record<string, unknown>)['outcomeId']).toBeUndefined();
      expect((c as unknown as Record<string, unknown>)['ratings']).toBeUndefined();
    }
  });

  it('correctly retrieves specific outcomes', () => {
    const outcome1A = getOutcome(1, 'A');
    expect(outcome1A).toBeDefined();
    expect(outcome1A?.deaths.humans).toBe(1);
    expect(outcome1A?.deaths.cockroaches).toBe(0);

    const outcome1B = getOutcome(1, 'B');
    expect(outcome1B?.deaths.humans).toBe(0);
    expect(outcome1B?.rawDeaths).toBe(0);
  });
});
