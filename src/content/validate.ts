import Ajv2020 from 'ajv/dist/2020.js';
import type { Catalog, Level, Outcome } from './types';

export interface ValidationReport {
  status: 'PASS' | 'FAIL';
  checks: number;
  errors: string[];
}

export function validateCatalog(catalog: Catalog, schema: object): ValidationReport {
  let checks = 0;
  const errors: string[] = [];

  function ok(condition: boolean, msg: string): void {
    checks++;
    if (!condition) {
      errors.push(msg);
    }
  }

  // 1. Ajv 2020 schema validation
  const ajv = new Ajv2020({ allErrors: true, strict: false });
  const validateSchema = ajv.compile(schema);
  const isValid = validateSchema(catalog);
  ok(Boolean(isValid), `Ajv schema validation: ${ajv.errorsText(validateSchema.errors)}`);

  const levels = catalog.levels;
  ok(levels.length === 200, `Expected 200 levels, got ${levels.length}`);

  // Ordered 1..200
  const ids = levels.map((l) => l.id);
  const expectedIds = Array.from({ length: 200 }, (_, i) => i + 1);
  ok(JSON.stringify(ids) === JSON.stringify(expectedIds), 'IDs must be exactly ordered 1..200');

  // Unique titles & premises
  const titles = new Set(levels.map((l) => l.title));
  ok(titles.size === 200, `Duplicate titles: found ${titles.size}/200`);

  const premises = new Set(levels.map((l) => l.premise));
  ok(premises.size === 200, `Duplicate premises: found ${premises.size}/200`);

  // Chapters check
  ok(catalog.chapters.length === 10, 'Must have exactly 10 chapters');
  catalog.chapters.forEach((ch, idx) => {
    const i = idx + 1;
    ok(
      ch.id === i && ch.firstLevel === (i - 1) * 20 + 1 && ch.lastLevel === i * 20,
      `Chapter ${i} bounds mismatch: ${JSON.stringify(ch)}`
    );
  });

  const outcomes: Outcome[] = [];

  for (const l of levels) {
    const n = l.id;
    const cs = l.choices;
    const expectedChapter = Math.floor((n - 1) / 20) + 1;
    ok(l.chapter === expectedChapter, `Level ${n}: expected chapter ${expectedChapter}, got ${l.chapter}`);

    const chapterDef = catalog.chapters[expectedChapter - 1];
    ok(chapterDef !== undefined && l.domain === chapterDef.title, `Level ${n}: domain mismatch with chapter title`);

    const expectedChoiceIds = cs.length === 3 ? ['A', 'B', 'C'] : ['A', 'B'];
    ok(JSON.stringify(cs.map((c) => c.id)) === JSON.stringify(expectedChoiceIds), `Level ${n}: choice IDs order`);
    ok(JSON.stringify(cs.map((c) => c.slot)) === JSON.stringify(cs.map((_, i) => i)), `Level ${n}: choice slots`);

    const firstChoice = cs[0];
    ok(firstChoice !== undefined && firstChoice.id === l.defaultChoiceId && firstChoice.control === 'default', `Level ${n}: default choice mismatch`);

    if (firstChoice) {
      const expectedDisclosure = `If you do nothing: ${firstChoice.label}. ${firstChoice.preview}`;
      ok(l.defaultDisclosure === expectedDisclosure, `Level ${n}: defaultDisclosure mismatch`);
    }

    ok(JSON.stringify(l.layout.routeLabels) === JSON.stringify(cs.map((c) => c.label)), `Level ${n}: routeLabels mismatch`);
    ok(l.layout.sceneCaption === l.premise, `Level ${n}: sceneCaption must match premise`);

    for (const srcId of l.provenance.sourceIds) {
      ok(Boolean(catalog.sources[srcId]), `Level ${n}: unknown sourceId ${srcId}`);
    }

    const template = l.layout.template;
    const expectedArity = template.endsWith('3') ? 3 : 2;
    ok(cs.length === expectedArity, `Level ${n}: template ${template} requires ${expectedArity} choices, got ${cs.length}`);

    ok(l.layout.fogOverlay === (l.knowledge.mode === 'epistemic-fixed'), `Level ${n}: fogOverlay policy mismatch`);

    for (const c of cs) {
      const o = c.outcome;
      outcomes.push(o);
      const d = o.deaths;
      const key = `L${String(n).padStart(3, '0')}-${c.id}`;

      ok(o.id === key && key === c.outcomeId, `${key}: outcome reference id mismatch`);

      const outcomeLenses = Object.keys(o.ratings).sort();
      const levelLenses = [...l.applicableLenses].sort();
      ok(JSON.stringify(outcomeLenses) === JSON.stringify(levelLenses), `${key}: ratings lens keys mismatch`);

      const raw = d.humans + d.cockroaches + d.butterflies;
      ok(o.rawDeaths === raw, `${key}: rawDeaths calculation mismatch`);

      const weighted = d.humans * 10 + d.cockroaches + 2 * d.butterflies;
      ok(o.weightedImpactTenths === weighted, `${key}: weightedImpactTenths mismatch`);

      ok(o.delayedHumanDeaths <= d.humans, `${key}: delayedHumanDeaths (${o.delayedHumanDeaths}) exceeds humans (${d.humans})`);

      const ratingValues = Object.values(o.ratings) as number[];
      const sumRatings = ratingValues.reduce((acc, r) => acc + r, 0);
      ok(o.scoreNumerator === sumRatings, `${key}: scoreNumerator calculation mismatch`);
      ok(o.scoreDenominator === ratingValues.length, `${key}: scoreDenominator calculation mismatch`);
      ok(12 % o.scoreDenominator === 0, `${key}: scoreDenominator (${o.scoreDenominator}) does not divide 12`);

      ok(o.reflection.outcome === o.summary, `${key}: reflection.outcome must match outcome.summary`);
      ok(
        o.reflection.outcome.length > 5 &&
          o.reflection.strongestReason.length > 20 &&
          o.reflection.ethicalTension.length > 20,
        `${key}: reflection content too short or missing`
      );

      if (l.knowledge.mode === 'epistemic-fixed') {
        ok(c.preview !== o.summary, `${key}: preview leaks hidden summary in epistemic-fixed mode`);
      }
    }
  }

  // Outcome IDs uniqueness
  const outcomeIds = new Set(outcomes.map((o) => o.id));
  ok(outcomeIds.size === outcomes.length, `Duplicate outcome IDs: found ${outcomeIds.size}/${outcomes.length}`);

  // Fixtures from technical handoff
  function getOutcome(levelId: number, choiceId: 'A' | 'B' | 'C'): Outcome {
    const lvl = levels[levelId - 1];
    if (!lvl) throw new Error(`Level ${levelId} not found`);
    const choice = lvl.choices.find((c) => c.id === choiceId);
    if (!choice) throw new Error(`Choice ${choiceId} not found in level ${levelId}`);
    return choice.outcome;
  }

  // Opening fixtures (1, 2, 3)
  for (const n of [1, 2, 3]) {
    const oA = getOutcome(n, 'A');
    ok(
      oA.deaths.humans === 1 && oA.deaths.cockroaches === 0 && oA.deaths.butterflies === 0,
      `Opening fixture Level ${n} Choice A default must kill exactly 1 human`
    );
  }

  const out1B = getOutcome(1, 'B');
  ok(out1B.rawDeaths === 0, 'Level 1 Choice B empty siding raw deaths must be 0');

  const out2B = getOutcome(2, 'B');
  ok(out2B.rawDeaths === 1 && out2B.weightedImpactTenths === 1, 'Level 2 Choice B cockroach fixture');

  const out3B = getOutcome(3, 'B');
  ok(out3B.rawDeaths === 1 && out3B.weightedImpactTenths === 2, 'Level 3 Choice B butterfly fixture');

  // Future deaths fixtures
  const out163B = getOutcome(163, 'B');
  ok(out163B.rawDeaths === 4 && out163B.delayedHumanDeaths === 3, 'Level 163 Choice B future-death fixture');

  const out153B = getOutcome(153, 'B');
  ok(out153B.rawDeaths === 2 && out153B.delayedHumanDeaths === 2, 'Level 153 Choice B ramp fixture');

  // Luck fixtures
  const out114B = getOutcome(114, 'B');
  ok(out114B.ratings.consequences === 95 && out114B.rawDeaths === 3, 'Level 114 Choice B bad luck fixture');

  const out115B = getOutcome(115, 'B');
  ok(out115B.ratings.consequences === 15 && out115B.rawDeaths === 0, 'Level 115 Choice B good luck fixture');

  // Premise spoiler checks
  const spoilers: Array<[number, string]> = [
    [102, 'hidden fixed scene'],
    [115, 'gimmick succeeds'],
    [184, 'works in this fixed'],
    [195, 'actually holds three']
  ];
  for (const [lvlId, phrase] of spoilers) {
    const lvl = levels[lvlId - 1] as Level;
    ok(!lvl.premise.toLowerCase().includes(phrase), `Level ${lvlId} premise spoiler: contains "${phrase}"`);
  }

  // Key template checks
  const lvl32 = levels[31] as Level;
  ok(lvl32.layout.template === 'footbridge', 'Level 32 must use footbridge layout');

  const lvl41 = levels[40] as Level;
  ok(lvl41.layout.template === 'loop', 'Level 41 must use loop layout');

  return {
    status: errors.length === 0 ? 'PASS' : 'FAIL',
    checks,
    errors
  };
}
