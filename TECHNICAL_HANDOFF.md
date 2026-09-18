# Trolley — implementation contract for Luna

Version 1.0.0. Implement the game described here using the complete catalog; do not redesign the scoring or invent missing scenarios. The repository currently contains a design package, not application code. Read README, PRD, this document, then representative catalog entries before beginning. Data and the JSON Schema are authoritative for per-level content. PRD is authoritative for product behavior. If text and derived catalog conflict, fix the authoring source and rebuild rather than patching the generated Markdown alone.

## 1. Concrete stack and setup

Use Vite's `vanilla-ts` template, strict TypeScript, plain CSS, semantic HTML, and inline SVG. No React, canvas engine, router package, state framework, CSS framework, backend, database, auth SDK, model API, or runtime third-party network calls are needed. Native DOM components are functions returning elements with explicit update/dispose methods. Treat SVG as a visual projection of state, never the source of rules. Dev-only tools: Vitest, Playwright, and Ajv 2020 for catalog-schema validation. Use npm and a committed lockfile.

Choose a supported Node 22 patch release >=22.12 or a supported newer LTS; record it in `.nvmrc` and `package.json.engines`. Official versions/constraints are linked in RESEARCH.md. Resolve mutually compatible stable packages when implementation starts, then pin/lock actual versions. Do not pick an old version from memory. Scaffold into a temporary directory and copy the app files into this existing repository without overwriting the design README/data/tools. Put source under `src/`. Preserve handoff files. Add scripts `dev`, `typecheck` (`tsc --noEmit`), `validate:content`, `test` (Vitest run), `test:e2e`, `build` (typecheck + content validation + vite build), and `preview`.

Set Vite `base: './'` so generated assets work under a repository subpath without guessing a host. Use fragment navigation only: `#/`, `#/campaign`, `#/library`, `#/level/001`, `#/settings`. Parse and clamp route IDs; a direct link never bypasses progression. Render a locked explanation or return to the next unlocked level. No server rewrite is required. External research links use ordinary anchors; game operation does not depend on loading them. Bundle original SVG art and system fonts locally. Avoid innerHTML for content strings; use textContent and createElementNS.

## 2. File boundaries

| Proposed path | Responsibility |
|---|---|
| `src/main.ts` | Bootstrap, validate catalog, load save, mount app, register visibility/storage listeners. |
| `src/app.ts` | Route screens; own one active session; dispose listeners/RAF on navigation. |
| `src/content/catalog.ts` | Import `data/levels.json`, typed lookup, player-safe projection, references to source links. |
| `src/content/types.ts` | Types generated/checked against the supplied schema; no duplicate narrative data. |
| `src/content/validate.ts` | Cross-field validation matching the supplied Python audit; run at build, fail closed at runtime. |
| `src/engine/state.ts` | Discriminated states, events, pure transition reducer. |
| `src/engine/clock.ts` | Active elapsed time, monotonic timestamps, pause/resume and deadline boundaries. |
| `src/engine/resolve.ts` | Selected/default choice lookup, immutable committed outcome, no physics decisions. |
| `src/engine/scoring.ts` | Integer impacts, rational level means, campaign aggregate, lens summaries. |
| `src/engine/session.ts` | Orchestrate reducer, clock, persistence and render; injected clock for tests. |
| `src/storage/save.ts` | Versioned load/validate/write, transaction revision, denied/corrupt storage handling. |
| `src/storage/migrate.ts` | Explicit migrations only; v1 has no older production save to migrate. |
| `src/render/scene.ts` | SVG creation and pose projection from state. |
| `src/render/templates.ts` | Six layout templates and fixed control/action target positions. |
| `src/render/glyphs.ts` | Original person/insect/trolley/object glyphs and unknown tokens. |
| `src/ui/controls.ts` | HTML action buttons, selection, Resolve, Pause, accessible key mapping. |
| `src/ui/facts.ts` | Premise, default and forecasts from the safe projection. |
| `src/ui/result.ts` | Reflection, exact counts, score breakdown, compare alternatives, Next/practice. |
| `src/ui/menu.ts`, `settings.ts`, `summary.ts` | Navigation, options, reset and campaign summary. |
| `src/styles.css` | Responsive stage, focus, contrast, text sizing, reduced motion. |
| `tests/unit/`, `tests/e2e/` | Meaningful boundary, persistence, browser and content tests described below. |

Never place executable JavaScript expressions, HTML, callback names, or external image URLs inside scenario data. Every choice maps directly to one stored outcome; there is no general-purpose scripting language to implement.

## 3. Catalog schema and authority

`data/levels.schema.json` is JSON Schema draft 2020-12. `data/levels.json` contains schemaVersion, catalogVersion, source links, ten chapter records, fixed rules, and exactly 200 levels. `data/authoring.txt` plus `tools/build_catalog.py` regenerate JSON and LEVEL_CATALOG.md. The DSL is an editorial input, not loaded by the game. Run `python3 tools/build_catalog.py` after a content edit, then `python3 tools/validate_catalog.py`.

Each level includes ID/title/chapter/domain, public premise, philosophical distinction, provenance, layout, timing, default disclosure, knowledge policy, applicable lenses, and two or three choices. Each choice includes stable A/B/C ID, label, input kind, slot, pre-choice forecast, outcomeId, and a complete outcome. Outcome stores species counts, delayed-human subset, raw total, weighted tenths, authored ratings, exact numerator/denominator, and the three reflection fields. The precomputed totals are auditable redundancies; engine recomputation must match before play.

Minimal TypeScript shape (consult schema for every field):

```ts
type Lens = 'consequences' | 'rightsDuties' | 'autonomy' | 'fairness';
type ChoiceId = 'A' | 'B' | 'C';
type Counts = { humans: number; cockroaches: number; butterflies: number };
type Outcome = {
  id: string; summary: string; deaths: Counts; delayedHumanDeaths: number;
  rawDeaths: number; weightedImpactTenths: number;
  ratings: Partial<Record<Lens, number>>;
  scoreNumerator: number; scoreDenominator: number;
  reflection: { outcome: string; strongestReason: string; ethicalTension: string };
};
```

Autonomy is absent in some levels. Absence is not a rating of zero. Every choice in a given level has exactly the level's lens set, nonempty. Ratings are integers from 0 through 100. Count fields are nonnegative integers. Delayed deaths are already included in `deaths.humans`; never add the subset again. Outcome IDs use `L001-A` through `L200-C` where C exists. Choices are mutually exclusive. Chapter = floor((id-1)/20)+1. Level N unlocks N+1; level 200 ends the campaign. No scenario branches campaign content.

`knowledge.authorOnlyPremise` can contain the fixed hidden realization. It is for authoring/review only. Build a `PlayerLevel` object containing only title/chapter/public premise, default disclosure, layout public fields, timing, choice IDs/labels/forecasts and source labels. Do not pass outcome, ratings, authorOnlyPremise, or actual counts into the uncommitted UI, ARIA text, tooltips, hidden DOM, or SVG. For all knowledge modes this projection is simpler and safer than ad hoc rendering. A static game's source can be inspected; preventing deliberate source inspection is outside scope.

## 4. Scene layout and rendering contract

The catalog selects one of six reusable templates. Every scene uses `viewBox="0 0 1000 600"`, with generous margins. HTML fact and choice cards are outside the SVG so text can wrap. SVG uses brief route labels or A/B/C plus visually adjacent HTML legends; never cram the entire premise into a tiny diagram. Use a fixed common approach from (60,300) to commitment point (430,300). For fork/loop scenes, choices use slots 0,1,2 in this stable order, with terminal x=900 and y positions [220,420] or [150,300,450]. The default always has a solid marked route; selection adds a thicker line and a letter marker. At start slot 0 is selected.

| Template | Visual specification | Input and resolved motion |
|---|---|---|
| `fork2` | Common approach, one junction, two curved branches to labeled result zones. | Two ordinary choice buttons act as explicit lever positions; B changes the route and A restores it. Resolve follows the selected branch. |
| `fork3` | Same approach, three distinct labeled branches. | Three explicit route buttons; never rapid multi-junction input. |
| `action2` | Straight track across stage; two option plaques above a prominent console/brake/gate. A continuation arrow lies below. | A leaves/continues the default; B arms the named action. After commitment, play console pulse then travel/stop, display exact outcome plaque. |
| `action3` | Same stage with three named plaques, including A default and two action targets. | One selected action, not two sequential actions. |
| `footbridge` | Straight main track, bridge at x=550, person above track, five-person group downstream. At level 31 show trapdoor control; at 32 show person target. | B arms opening/pushing through the named HTML button; at commitment fade bridge person behind an opaque non-graphic impact cloud, stop trolley; A continues toward main group. No drag gesture. |
| `loop` | Main line toward five; siding curves up and rejoins. Level 41 shows person as stopping point; 42 shows an independent buffer beyond the person. | A main, B loop; chosen outcome is data-driven. Never simulate collision force. |

All templates are schematics, not realistic physics. Action templates may show a hospital, office, or barrier icon atop the same track. The exact mechanism is stated in the fact panel and action label. The renderer must not silently claim every `action2` stops the trolley safely: the outcome plaque and the selected action determine whether it reaches the impact zone, fades, or stops. Use a neutral console pulse for generic action resolution rather than inventing unprovided physical details. Specific mandatory scene effects are only footbridge and loop; generic actions remain a complete supported template for every authored variant.

`routeLabels` are exact choice labels in slot order. `actionTarget` is bridge-person, trapdoor-control, control-console, or rail-switch. `theme` selects restrained decorative furniture, never outcome logic. `sceneCaption` repeats the public premise for a schematic description. `fogOverlay` means unknown route zones show a question-mark token and the disclosed forecast in HTML. Never derive visible occupant counts from the hidden outcome. For deterministic ordinary forks, the simplest faithful rendering uses route plaques containing `choice.preview` rather than assuming that the number of deaths equals bodies physically on that route. This matters for medicine delivery, remote fatalities, and property damage. Human/insect illustrations are decorative alongside these precise text plaques unless manually authored, publicly justified occupant metadata is later added in a schema revision.

Large groups use a group glyph and explicit multiplier, never 200 tiny sprites. Future deaths appear after the immediate scene on a small epilogue timeline labeled with the exact summary and later-death subtotal. Robot destruction uses a separate object-destruction icon; its 0 biological deaths label is accompanied by the actual loss description. Alternate comparisons use the result table, not imaginary new physics.

## 5. One clock, one commitment

States: `menu`, `running`, `paused`, `committed`, `resolving`, `result`, `campaignComplete`, `contentError`. A session includes levelId, mode campaign/practice, selectedChoiceId, selectionOrigin default/player, timingMode, activeElapsedMs, resolutionElapsedMs, sessionId, campaignId, and an immutable committed snapshot when applicable. Use one monotonic clock (`performance.now`) injected in tests. Do not use Date.now for elapsed time; wall time is only metadata.

Transitions:

1. Start/Next validates the requested unlocked level, mounts the public scene, initializes selected=A and activeElapsed=0, and enters running in the same task. Start the RAF immediately after mounting; first paint shows movement from the starting position. There is no loading/network step during the decision.
2. While running, synchronize active time before processing any selection/Resolve/Pause event. If elapsed >= deadline, commit first and reject the new selection. Otherwise selection changes only the armed choice; no irreversible outcome happens until commitment. Scene action buttons are explicitly labeled “Selected; resolves at the marker.” This avoids a surprise distinction between a lever and a push button.
3. Resolve now synchronizes time, then commits the current choice immediately if still running. In untimed mode this is the only automatic-outcome trigger besides explicit user selection of Resolve; inaction continues indefinitely with a disclosed default waiting to resolve.
4. Standard deadline is catalog decisionMs=30000; extended is 120000. At equality, commitment wins. Event ordering uses processing-time monotonic synchronization, not a stale browser event timestamp. Delayed input cannot retroactively change a passed junction.
5. Commit freezes choice/outcome, creates an idempotent completion record, and attempts persistence before animation. Count first completion once at commitment, but show the delta on result. Move into resolving; duration 2400 active ms. A reduced-motion user sees a short static sequence with the same result. Skip animation may jump to result without another commit.
6. Resolve ends at result. All choice controls remain disabled. Next opens the newly unlocked level; no automatic countdown begins while reading reflection. Result for 200 links to campaignComplete. Practice result offers Replay, another completed level, and Return to campaign, with no progression write.

Clock representation: maintain accumulated active milliseconds plus anchor timestamp when running/resolving. `sync(now)` adds max(0,now-anchor), sets anchor=now, and crosses due boundaries exactly once. Do not cap a long visible-frame delta: frame loss must not give extra decision time. If it crosses both decision and resolution boundaries, preserve the overshoot and present result immediately after recording commitment. At a mid-frame deadline, choice commits at the threshold, not at the later visual position. The animation uses the same elapsed value and clamps coordinates. No independent CSS transition or setTimeout may determine commitment.

Decision motion: standard/extended approach parameter u=min(activeElapsed/deadline,1); interpolate along the common approach path using getPointAtLength or a deterministic sampled path. Route never diverges before commitment. Untimed mode travels a clearly marked approach loop, using active elapsed modulo a 6000 ms loop period; it never silently crosses the junction. On Resolve, animate from the current loop pose to the junction as the first segment of resolution. Resolution traverses the committed branch/action sequence using v=clamp(resolutionElapsed/2400,0,1). The cart cannot visually pass the branch before the engine commits. Reduced motion uses start, mid-approach, committed, result markers with an explicit remaining-time label instead of smooth movement.

## 6. Pause, visibility, navigation, recovery

Pause first synchronizes the clock, then freezes both movement and active timers, disables choice mutation, and shows Resume. The premise remains readable. Pausing at/after the deadline produces commitment rather than a last-moment loophole. Visibilitychange to hidden invokes the same pause path with reason hidden; this must be explicit because RAF suspension alone does not define elapsed behavior. Persist the paused session. On return remain paused until Resume, reset anchor to current monotonic time, and do not charge background time. Window blur alone need not pause; visibility does. Closing a modal restores focus to its origin.

Before navigation away from a running level, pause and save an uncommitted checkpoint. Returning resumes from that checkpoint only after Resume. Refresh restores an uncommitted session as paused. Never let wall time while closed advance the trolley. A committed session reloads into result with the same choice and existing record; do not replay commitment. If storage was unavailable, explain that refreshing will lose the session; no simulated recovery promise.

Persist checkpoints on select, pause, navigation, visibility change, and every 1000 active ms (throttled), not every frame. Abrupt process termination can roll an uncommitted session back by up to one checkpoint interval; this is disclosed and is acceptable because there is no competitive integrity requirement. There is no reroll benefit because outcomes are fixed. Once committed, the save contains the result and is idempotent. If a write fails, maintain the committed in-memory result and a visible “Progress not saved on this device” notice.

## 7. Determinism and scoring

No runtime randomness exists in v1. `epistemic-fixed` means the player has uncertain evidence but the author chose a definite world; each action maps to its fixed outcome. Probabilities describe the stipulated evidence-generating situation, not a promise that repeated practice samples that distribution. Clearly explain this in How it works and practice mode: “These are fixed stories with uncertain information, not repeated random trials.” Do not seed a PRNG or let date, campaign ID, or prior choices alter hidden worlds. Ratings depend on pre-choice evidence, not hindsight. Actual outcomes remain internally coherent per level across all choices.

For outcome o:

```text
raw(o) = humans + cockroaches + butterflies
impactTenths(o) = 10*humans + cockroaches + 2*butterflies
levelScore(o) = sum(ratings for applicable lenses) / applicableLensCount
campaignScore = sum(levelScore(first outcome of each completed level)) / completedCount
```

To avoid summing rounded means, use integer twelfths (all catalog lens counts are 3 or 4, and 12 supports any future count 1..4): `scoreTwelfths = scoreNumerator * (12 / scoreDenominator)`. Aggregate integer twelfths; campaign score = sumTwelfths/(12*completedCount). Round only the formatted display using a documented half-up one-decimal routine for nonnegative numbers. Raw and impact are integers in storage. Before completion, campaign score=null; never divide by zero. A separate per-lens summary averages that lens over only completed levels where it applies, with a displayed sample count. It is explanatory and not another campaign score.

Example: outcome L001-B rates 100/100/100 =100; L002-B rates 90/70/65=75. After these two, campaign score=87.5, raw=1, impact=0.1. L003-B adds one butterfly: raw=2, impact=0.3, campaign score=(100+75+75)/3=83.333… displayed 83.3. The insect raw totals never become 0.1 or 0.2. Level 114-B has three deaths but a high evidence-based score. Level 163-B counts one immediate + three later =four total, not seven.

The engine must never guess morality from raw counts, selected button index, player motives, elapsed time, or number of clicks. The numeric data is the editorial authority. Display the strongest supporting reason even for low-rated choices; it may be weak in context, and the tension explains why. Never call it proof that the choice was correct.

## 8. Persistence and reset contract

Default local saving on, with an immediately available off switch. Key `trolley.save.v1`; settings may use `trolley.settings.v1`. Save JSON:

```ts
type SaveV1 = {
 schemaVersion: 1; catalogVersion: '1.0.0'; campaignId: string;
 revision: number; updatedAt: string;
 completions: Array<{levelId:number; choiceId:ChoiceId; outcomeId:string;
   catalogVersion:string; sessionId:string; committedAt:string}>;
 checkpoint: null | {levelId:number; mode:'campaign'|'practice'; sessionId:string;
   phase:'running'|'paused'|'result'; selectedChoiceId:ChoiceId;
   selectionOrigin:'default'|'player'; timingMode:'standard'|'extended'|'untimed';
   activeElapsedMs:number; committedOutcomeId:string|null};
};
```

Settings separately store timing, reducedMotion (initially follow media query), highContrast, sound=false, and saveEnabled. IDs use crypto.randomUUID when available with a local collision-resistant fallback; this is not an auth identifier. Never transmit them. Store decisions rather than trusted totals; recompute totals from the matching pinned catalog on load. Write the entire save in one setItem after constructing and validating it in memory. Use monotonically increasing revision. Completions are unique by level and form contiguous IDs 1..N; practice is absent. At commit, if level already exists, treat as practice/idempotent replay and never replace it. First wins within the campaign.

Validation: catch access, parse, quota and security failures. Validate all IDs, choices, outcomes, versions, finite nonnegative times, contiguous completion sequence, and checkpoint consistency. A committed result must match its completion when mode=campaign. A running campaign checkpoint must be the next uncompleted level; a practice checkpoint must refer to an already completed level. Reject extra/incompatible fields through a save schema. Clamp neither impossible outcome IDs nor contradictory counts into plausible data. Unknown future save/catalog version is incompatible, not empty progress.

On corrupt or incompatible data, show a recovery screen with “Play temporary campaign” and “Reset local save”; permit downloading the original raw save as plain text for support. Do not overwrite the only corrupt record automatically. If a write to a quarantine key succeeds, keep a backup, but failure to back up must not prevent temporary play. Reset is an explicit user confirmation that removes the campaign record and checkpoints, generates a new campaignId, resets totals/unlocks, and preserves chosen settings. Saving off switches to memory and removes this app's persisted campaign only after explaining that action in the toggle UI; never clear unrelated origin storage.

Multi-tab policy: only one writable campaign tab. Use Web Locks when available for an exclusive campaign writer lock; other tabs offer read-only summary or an explicit takeover after the first tab is closed. Also listen to storage events: a newer revision/campaignId pauses the active tab and requires reload before another write. On browsers without Web Locks, use storage-event detection plus read-before-write revision checking and explicitly discourage parallel active campaigns; a race cannot be perfectly prevented by localStorage alone. To meet reliable first-completion behavior everywhere, disable campaign writing in a second tab when a BroadcastChannel handshake detects an active writer; fall back to session-only play if exclusive ownership cannot be established. Do not pretend localStorage provides compare-and-swap transactions. Test the supported lock path and fallback behavior. A crashed lock holder releases Web Locks automatically; a fallback ownership lease uses timestamp/heartbeat and only permits takeover with explicit reload, never merging competing decisions.

Content updates: changing any outcome/count/rating increments catalogVersion. V1 does not migrate scores silently. Preserve a matching old catalog for an ongoing campaign or show incompatible-save recovery with a new-campaign option; implement one explicit policy, preferably bundling the previous catalog for one release. schemaVersion changes only for structural changes with a tested migration. The current package is the sole initial version, so no invented historical migration is needed.

## 9. Interaction and accessibility details

All controls are native buttons. A/B/C or 1/2/3 shortcuts select only while running; Enter activates a focused button through native semantics; do not globally hijack Space/Enter. P toggles pause except in text/editable fields. Escape pauses/closes the top modal without resolving. Keydown shortcuts ignore repeat and modifier keys. A selection does not move focus. Resolve is a separate clearly named button. Scene targets proxy the same selection event and have no unique capability. Pointerup/click is sufficient; touch does not require hover, double tap, or dragging. A selected action exposes aria-pressed=true; label includes the exact catalog wording.

At level start focus the heading or main region and provide a single concise announcement of the title/default, not the entire score history. Keep the full premise in ordinary readable DOM. Provide a timer progressbar with a textual remaining label; announce only meaningful warnings (10 seconds remaining once) and state changes. Because time is adjustable and pausable, users can read all content. At commitment announce “Choice committed”; at result focus the result heading and announce outcome/count delta once. Do not announce hundreds of sprites or every animation frame. SVG is aria-hidden when its equivalent description/facts are present. High contrast must preserve selected route and disabled state without color alone.

Maintain a >=44px tap area, visible keyboard focus, high text/background contrast, 16px minimum body text, reflowing cards and no absolute-positioned text over narrow SVG regions. On mobile, show facts first, compact stage second, sticky controls only if they do not obscure content. A Pause control must stay reachable. Test reduced motion, zoom, long labels, and dynamic text wrapping on the longest premises. No autoplay audio; sound setting is user initiated and persists locally.

## 10. Edge cases and invariants

- Starting 001 and touching nothing kills one human; 002/003 default each kill a human. Never auto-select the lower-count route.
- Restore A after selecting B: result remains A but origin=player, so do not falsely say the player did nothing. Repeated same-choice clicks have no outcome effect.
- At exactly deadline, deadline wins; after deadline, controls cannot mutate the committed snapshot even if a RAF has not rendered yet.
- Hidden before commitment pauses; hidden after commitment pauses animation only, preserving its record. Resume never creates a second record.
- Fast Next double-click opens one next session. Use state gating, not just a visual disabled style.
- Manual Resolve during a visible-frame stall first synchronizes and respects an already passed deadline.
- A 0-death result may include property loss, coercion, robot destruction, or privacy loss; always show the narrative.
- Delayed fatalities count at this level's commitment and are labeled as later. Future possibilities with no actual deaths are not counted.
- A local save change cannot unlock future levels with arbitrary completion IDs. A tampered score field is ignored/rejected; no claims of cheat-proof storage.
- Reload at result, replay via history navigation, and result rerender are reads, never score mutations.
- Data load/validation failure shows contentError with a retry path; never silently substitute placeholder levels or a default death count.
- Optional local storage denied does not prevent starting, playing all levels, or reaching the final summary in the same tab.
- Restart of an uncommitted level is allowed from Pause. Committed choices cannot be overwritten; subsequent attempts are practice.
- External links open separately without exposing game state. Any hidden tab pauses the current decision.

## 11. Implementation phases and review gates

1. **Content contract and shell.** Preserve handoff, set up stack/lockfile, types, schema/build validation, lookup, player-safe projections and empty menu. Gate: all 200/423 records validate; no hidden outcome fields in projected objects.
2. **Pure engine.** Implement reducer, clock, deadline, resolve, scoring, campaign progression with injected time. Gate: deterministic boundary and idempotency tests pass before rendering.
3. **First playable vertical slice.** Implement fork2 and levels 1–4, facts, controls, reflection and raw/impact/morality displays. Gate: opening defaults and insect arithmetic work using mouse, touch and keyboard.
4. **All layouts/content.** Add fork3/action2/action3/footbridge/loop, uncertainty forecasts, epilogues, compare choices and all chapters. Gate: no unhandled template; representative levels 19,32,41,45,114,153,180,200 work.
5. **Persistence/accessibility.** Add guarded save/recovery/reset, checkpoint restore, practice, tab ownership, pause/visibility and timing modes. Gate: denied storage, reload, duplicate completion and accessibility tests pass.
6. **Polish and complete verification.** Responsive original visuals, subtle sound if desired, final campaign summary, static build/subpath checks, content review. Gate: production build and complete acceptance matrix pass. No deployment or external service is required by this handoff.

Luna should finish each gate before broad styling. Do not stop with a four-level demo or generate the remaining scenarios at runtime. The supplied catalog is already complete.

## 12. Test matrix

Unit tests should inject a fake monotonic clock and in-memory save adapter; never wait real 30-second intervals. Browser tests may use a test-only clock adapter/build flag that cannot change production content or outcomes. Verify the full flow, not snapshots that merely mirror function bodies.

| Test | Required assertion |
|---|---|
| Catalog integrity | Exactly IDs 1–200, twenty per chapter, unique titles/outcomes, valid schema, all cross references, defaults A, no missing reflections, ratings/rational sums/count arithmetic. |
| Selection boundary | B at 29999 ms commits B; B at 30000 ms is rejected and default A commits; RAF absence cannot alter this. |
| Early Resolve | Selecting C then Resolve at 1000 ms commits C once and locks further input. |
| No-input defaults | Run every level to deadline with no input; expected A outcome and next unlock for all 200. |
| Pause/visibility | 10 seconds active + one hour hidden + resume +20 seconds yields exactly one 30-second commitment; no hidden-time charge. |
| Frame rates | 30,60,144 Hz and one long visible stall produce identical choice/count/score. Pose reaches commitment consistently. |
| Untimed | After arbitrarily long active time no automatic commitment; Resolve uses current selection/default and same ratings. |
| Raw/impact | L001-B + L002-B + L003-B -> raw2, impactTenths3, score83.3 display; insects individually count one. |
| Later deaths | L163-B -> human4, delayed3; aggregate raw4. L153-B -> human2, delayed2. No double addition. |
| Evidence score | L114-B and L115-B keep authored ratings regardless of favorable/unfavorable realization; practice yields the same outcome. |
| Score weighting | A 3-lens level and a 4-lens level each contribute half to their two-level campaign; no rounding before aggregation. |
| First completion | Duplicate COMMIT/result/reload does not add counts or replace a choice. Practice changes neither totals nor unlocks. |
| Save recovery | Valid running checkpoint restores paused; valid committed checkpoint restores result; malformed/unknown versions prompt recovery without overwrite. |
| Storage unavailable | Throw on getItem/setItem; play and summary still work in memory with honest unsaved notice. |
| Two tabs | One writer, second read-only/session-only; storage revision changes pause stale session; no stale overwrite on supported lock path. |
| Reset | Confirmed reset removes this campaign only; totals null/zero; level1 unlocked; unrelated keys and settings retained. Cancel changes nothing. |
| Hidden data | Before commitment, DOM/ARIA/SVG contain forecasts only; never authorOnlyPremise, actual hidden outcome or ratings. Test levels102,115,184,195. |
| Input access | Complete footbridge, three-route, and action scenes by keyboard only and touch emulation; focus visible; no drag-only action. |
| Visual coverage | Chromium/Firefox/WebKit; desktop 1280×800, mobile390×844, narrow320px, 200% zoom, reduced motion/high contrast. No clipped control or unreadable overlay. |
| Full campaign | Automated fast-clock run reaches 200 and final summary with exactly200 completions, then practice and New campaign behave correctly. |
| Production hosting | Build, serve root and a subdirectory, navigate hash routes, reload, open source links, and confirm no backend/model/auth request. |

The supplied Python validator verifies handoff content only. Its PASS is not evidence that the future app, browser behavior, or accessibility has been implemented or tested.
