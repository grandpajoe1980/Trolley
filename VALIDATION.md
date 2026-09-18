# Handoff validation

**PASS** — 88744 content/schema assertions; 200 levels, 423 outcomes, ten chapters of twenty.

Validated the supplied schema using a dependency-free checker that rejects unknown schema keywords; checked IDs, references, defaults, layout arity, applicable lens sets, raw and weighted counts, exact score fractions, delayed-death subsets, readable-catalog coverage, and selected hidden-information fixtures. Critical opening, future-death, and luck fixtures are independent assertions.

Catalog SHA-256: `038195cc2fffc4118184770c458a3dcd0bddabd440ff6f2e1b66e0c02bda9d9c`.

Run `python3 tools/build_catalog.py` then `python3 tools/validate_catalog.py` from the repository root. The validator works from other directories too. Luna should also run a standard Ajv 2020 validation in the future app build.

This validates handoff content, not the future browser application. Engine, persistence, accessibility and end-to-end tests are specified in TECHNICAL_HANDOFF.md and remain implementation work. Authored moral ratings are editorial judgments; arithmetic tests do not establish philosophical truth.
