# Trolley

A visual browser game of philosophical dilemmas with **exactly 200 levels, 423 fully specified choice outcomes, and ten chapters**. This repository contains the authored catalog, implementation, automated tests, and current verification status.

## Start here, Luna

1. Read [PRD.md](PRD.md) for the product, locked behavior, scoring, and scope.
2. Read [TECHNICAL_HANDOFF.md](TECHNICAL_HANDOFF.md) for stack, component boundaries, schema, clock/state transitions, SVG templates, persistence, accessibility, phases, and tests.
3. Read [RESEARCH.md](RESEARCH.md) for sources, canonical versus original provenance, and limits of the scoring model.
4. Use [data/levels.json](data/levels.json) as the complete machine-readable catalog and [data/levels.schema.json](data/levels.schema.json) as its structural contract. [LEVEL_CATALOG.md](LEVEL_CATALOG.md) is the full readable, spoiler-containing version.
5. Run the content commands below, then use [STATUS.md](STATUS.md) and the six phases in the technical guide to continue development. Complete all 200 levels; do not substitute runtime-generated content or stop with a demo.

```sh
python3 tools/build_catalog.py
python3 tools/validate_catalog.py
```

The tools require only Python 3's standard library. `data/authoring.txt` is the compact editorial source; the builder produces JSON and Markdown. The validator audits every keyword used by the supplied schema plus cross-field consistency and independent critical fixtures. See [VALIDATION.md](VALIDATION.md) and [VALIDATION.json](VALIDATION.json) for content results, and [STATUS.md](STATUS.md) for current implementation and browser-test evidence.

## Key decisions

- Static Vite + strict TypeScript + semantic HTML + SVG. No backend, accounts, database, or live AI.
- The trolley moves immediately when a level starts. One decision per level; the visible default resolves inaction. Standard 30-second active window, with pause, extended and untimed accessibility options.
- Opening tracks: empty versus human; cockroach versus human; butterfly versus human. All three default to the human.
- Raw deaths count each human/insect as one. Separate playful weighted impact uses human 1.0, cockroach 0.1, butterfly 0.2. Neither tally defines morality.
- Morality is the equal average of applicable authored lens ratings, then the equal average of first-completion level scores. No passing score; every outcome unlocks the next level. First completion counts; practice does not change totals; New campaign resets.
- Fixed stories include explicitly uncertain information. They do not sample new random outcomes on replay. Rates and reflections judge the evidence available at the decision, while counts record the authored realized result.
- Scenario profiles add evidence review, precision timing, ordered operations, and limited-equipment decisions without adding a social/reputation system or changing authored outcomes.
- Non-graphic cartoon treatment. Humor targets absurd circumstances and institutions. Scores express a game interpretation, not an objective judgment of character.

## Package map

| File | Purpose |
|---|---|
| PRD.md | Product requirements and acceptance criteria |
| TECHNICAL_HANDOFF.md | Implementation-ready architecture and behavior contract |
| RESEARCH.md | Research links, provenance, editorial methodology |
| LEVEL_CATALOG.md | All 200 levels and all 423 outcome/reflection/score specifications |
| data/levels.json | Complete runtime-authoring data |
| data/levels.schema.json | JSON Schema draft 2020-12 |
| data/authoring.txt | Editable catalog source, not runtime input |
| tools/build_catalog.py | Rebuild JSON and readable catalog |
| tools/validate_catalog.py | Content/schema/arithmetic audit |
| VALIDATION.md / VALIDATION.json | Generated validation results and scope limits |
| STATUS.md | Current implementation, automated-test, and browser-verification status |
| src/gameplay/profile.ts | Public-copy-only scenario mechanics and pacing profiles |
| playwright.config.ts / tests/e2e/ | Chromium browser test configuration and smoke coverage |
| HANDOFF_CHECKLIST.md | Implementation gates and editorial assumptions |

Sources are linked near their use. Four recognizable thought-experiment structures are marked canonical adaptations; 196 scenarios are original, sometimes constructed as deliberate contrasts. No popularity ranking or philosophical consensus is claimed. No source art is bundled.
