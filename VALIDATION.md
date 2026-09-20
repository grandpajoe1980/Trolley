# Handoff validation

**PASS** - 88744 content/schema assertions; 200 levels, 423 outcomes, ten chapters of twenty.

Validated the supplied schema using a dependency-free checker that rejects unknown schema keywords; checked IDs, references, defaults, layout arity, applicable lens sets, raw and weighted counts, exact score fractions, delayed-death subsets, readable-catalog coverage, and selected hidden-information fixtures. Critical opening, future-death, and luck fixtures are independent assertions.

Catalog SHA-256: `3f32abffc70b7c490b226f9caa235bae8965b08dca53121d0413a0b3dafc86ae`.

Run `python3 tools/build_catalog.py` then `python3 tools/validate_catalog.py` from the repository root. The validator works from other directories too. Standard Ajv 2020 validation also runs in the TypeScript catalog validator.

This is the content/schema/arithmetic report only. It does not execute the browser application; current implementation, unit, build, and Playwright evidence is tracked in [STATUS.md](STATUS.md). Authored moral ratings are editorial judgments; arithmetic tests do not establish philosophical truth.
