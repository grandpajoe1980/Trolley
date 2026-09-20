# Trolley status

Updated 2026-09-20 from the `main` checkout.

## Current verification

| Check | Result | Scope |
|---|---|---|
| `npm run typecheck` | PASS | Strict TypeScript, including Playwright tests |
| `npm test` | PASS | 8 Vitest files, 57 tests |
| `py -3 tools/validate_catalog.py` | PASS | 88,744 catalog/schema/arithmetic assertions; 200 levels, 423 outcomes |
| `npx vite build` | PASS | Vite production bundle after the separate typecheck/content-validation gates |
| `npm run test:e2e` | PASS | 8 Playwright tests in Chromium, 13.8 seconds |

## Phase 6 polish checkpoint

PASS — the active decision screen now has a clear “Your turn” instruction, a labeled decision window, grouped controls, plain-language commit guidance, stronger campaign metrics hierarchy, and an active Campaign navigation state. The controls remain usable at 1280×800, 390×844, and 320×844 with no horizontal overflow.

The post-change browser gut-check found no error overlay or page errors. The only console messages were normal Vite development connection/debug messages.

The Playwright smoke suite covers campaign completion and reload persistence, pause/resume, extended timing settings, narrow mobile layout, and pre-commit protection against outcome-only information leaking into the DOM for levels 102, 115, 184, and 195.

The suite currently runs Chromium only. The broader handoff matrix—Firefox/WebKit, every default choice across all 200 levels, touch/keyboard scene coverage, narrow/zoomed visual checks, multi-tab ownership, storage failure recovery, and subdirectory production hosting—still needs separate verification.

On this Windows environment, `npm run build` currently stops before Vite because its existing `python3` script name is not available; the equivalent `py -3 tools/validate_catalog.py` command and `npx vite build` both pass.
