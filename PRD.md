# Trolley — product requirements

Version 1.0.0 · Design handoff · 18 September 2026

## Product promise

Trolley is a visual browser game about making and examining difficult choices while a cartoon trolley keeps moving. The player encounters exactly 200 authored dilemmas, makes one decision per level, watches a non-graphic consequence, and receives a short, choice-specific reflection. Doing nothing is a disclosed action with a concrete result. Increasing difficulty means richer ethical conflicts, not faster clicks or obscure puzzles.

The audience is curious general players, friends discussing thought experiments, and educators who can contextualize the material. This is a game interpretation of choices, not a personality test, philosophical consensus, clinical assessment, or certification of goodness. No score is a passing grade. No outcome blocks progression.

## Locked scope and assumptions

- Exactly 200 levels in ten ordered chapters of twenty. Each level has one commitment and two or three alternatives, including the default. Binary levers, route selectors, and scene actions share a small engine.
- Level 1 defaults toward one human and offers an empty siding. Level 2 defaults toward one human and offers one cockroach. Level 3 replaces the cockroach with one butterfly and also defaults toward the human. These are explicit interpretations of the opening request.
- A level starts when the player selects Start or Next from the menu/result screen. At that moment the scene appears and movement begins immediately; there is no extra instruction modal after starting. The full premise and default remain visible alongside the moving scene.
- Standard decision time is 30 active seconds at every level. Complexity increases through concepts, not shrinking time. Extended time is 120 seconds. An untimed accessibility mode keeps the trolley moving on an approach loop until Resolve. Pause is always available. Scores never depend on speed or timing mode.
- No accounts, login, database, backend, ads, payments, analytics, multiplayer, live AI, or remote scoring. Browser-local persistence is optional and works without sign-in. No game implementation is part of this handoff.
- Use static Vite + TypeScript + SVG + semantic HTML. All scenario text, ratings, layouts, and outcomes live in versioned content separate from engine and renderer.
- No demographic value tables, occupations-as-human-worth multipliers, or species encyclopedia. Human deaths all contribute equally to the raw count and the impact tally. Relationship, consent, role, and evidence may affect reflections; identity categories never change the weight of a human life.

## Player journey

Home provides New campaign, Continue when available, Chapter/level library, How it works, and Settings. A brief first-use panel explains that the trolley moves as soon as a level begins, the default resolves inaction, and Pause is available. It also discloses the score interpretation and the fictional, non-graphic deaths. The player dismisses it before starting, not while the clock runs.

During play the top bar shows chapter, level, raw body count, weighted impact, and morality score (initially “Not yet rated”). The central stage uses a warm paper background, dark tracks, a bright trolley, simple human/insect glyphs, and clear route labels. A compact fact panel contains the entire premise and the current default. The lower control bar contains large named choices, a visible current selection, Pause, and Resolve now. Each route also has a matching shape/letter so color is redundant. For scene actions, a highlighted bridge, brake, gate, or console corresponds to the ordinary HTML button. Nobody must drag or click a tiny sprite.

At commitment the controls become inactive, a short animation plays, and a consequence card appears. Death is shown by a quiet fade and an outcome plaque; there is no blood, collision close-up, screaming, or celebratory death effect. The result clearly names the chosen action and whether it was selected by the player or left as the default. It presents the actual outcome, strongest supporting reason, ethical tension, count changes, and authored lens breakdown. Reflection remains until the player continues. Next unlocks regardless of score. After level 200, a campaign summary replaces Next.

The summary presents first-completion totals, the campaign score, four lens averages with their sample counts, choices by chapter, and selected reflective questions. It does not diagnose the player's ideology or morality. A low score is not an insult; a high score is not a certificate. Practice opens any already completed level, shows all the same reflections, and visibly says “Practice — campaign totals unchanged.” New campaign explicitly confirms the reset and clears the counted decisions.

## Metrics

**Raw body count** counts actual human, cockroach, and butterfly deaths, one per individual. Stipulated later deaths are included in the same level once, with a visible “includes later deaths” note. It does not count hypothetical risks, people who were never conceived, damaged property, or destroyed robots as biological deaths. Robot destruction and other significant nonfatal losses remain explicit in text; zero bodies does not mean zero moral loss.

**Weighted impact** is a separate playful tally: human 1.0, cockroach 0.1, butterfly 0.2. Internally store tenths as integers. Display a one-decimal number and a short explanation: “Playful author weights, not scientific facts or moral exchange rates.” Never label this number morality. Twenty cockroaches produce raw 20 and weighted 2.0, without asserting equivalence to two human lives.

**Morality score** uses applicable authored ratings in consequences, rights/duties, autonomy, and fairness. Average applicable lenses equally for that level; then average completed level scores equally for the campaign. Do not average every raw lens rating across the campaign, because levels with more lenses would receive extra weight. Keep full precision until display (one decimal). The score before the first completion is null, displayed “Not yet rated.” Its persistent adjacent explanation reads “A game interpretation of this choice, not an objective judgment of your character.” Ratings assess the choice given disclosed information; lucky and unlucky fixed outcomes do not retroactively change the ratings. All alternative ratings can be inspected after the result through “Compare choices,” never required to progress.

Only a level's first campaign completion counts. Practice cannot improve or worsen a score. Reloading a committed result cannot count it again. The campaign has exactly 200 counted entries when complete. New campaign resets both count tallies, all scores, and unlocks. Settings may be retained.

The four lenses are a deliberately incomplete pluralist model. Consequences rates rescue prospects and relevant costs given the facts; rights/duties rates protections and commitments; autonomy rates consent, agency, and coercion; fairness rates equal standing and distribution of burdens. The numbers are editorial, not inferred from a formula or attributed to the sources. A dash/omitted lens means not applicable, not zero. Within a level every choice uses the same applicable set. See research notes for calibration limits.

## Campaign progression

| Chapter | Levels | New work for the player |
|---|---:|---|
| Basic tradeoffs | 1–20 | Notice defaults, equal standing, small costs, species weights, and false dilemmas. |
| Doing and allowing | 21–40 | Separate physical action, omission, role, withdrawal, and delegation. |
| Intention and means | 41–60 | Ask whether harm is the rescue mechanism or a side effect. |
| Consent | 61–80 | Examine understanding, pressure, scope, revocation, and proxies. |
| Loyalties and promises | 81–100 | Weigh partial duties without changing human worth. |
| Uncertainty | 101–120 | Judge evidence and risk without rewarding hindsight. |
| Responsibility and authority | 121–140 | Consider orders, rules, transparency, shared control, and repair. |
| Fairness and rights | 141–160 | Examine access, repeated burdens, equal procedures, and entitlements. |
| Future effects and precedent | 161–180 | Follow full causal horizons without inventing speculative casualties. |
| Synthesis | 181–200 | Combine distinctions and look for ethically relevant alternatives. |

Many scenarios are comic: porcelain ducks, trophy bureaucracy, a gold-caped expert, a liability umbrella, a coupon purporting to compensate death, and an intention checkbox. Humor targets institutions, framing, and absurd constraints. Victims, disability, poverty, and grief are not punchlines. Quiet cases between comic ones preserve emotional range. Neighboring matched contrasts intentionally reuse a structure while changing a substantive ethical variable; they are not random cosmetic reskins.

## Information policy

Everything required to understand the dilemma is available immediately in plain text; there are no hidden buttons or surprise alternate rescues. A player may discover consequences only when uncertainty is explicitly part of the premise. Such levels disclose the available probabilities or absence of a justified probability. Their actual world is fixed by the authored outcome, not sampled at runtime. This lets unlucky choices be discussed consistently. The pre-choice UI must never expose author-only world notes, actual counts, reflection text, or score ratings for those levels. Static source files remain inspectable; this is a single-player reflection game, not an anti-cheat system.

Outcomes include distant or later consequences only when the premise expressly stipulates them. They appear on an epilogue timeline and in the count breakdown, not as extra levels or choices. Each level is a self-contained world; repeated numbers in later levels never refer to the same people unless the level itself says so. No campaign branching changes the other 199 scenarios.

## Accessibility and visual requirements

Use responsive SVG with HTML controls and readable HTML equivalents for every visual fact. Minimum control target 44×44 CSS pixels; a vertical control stack on narrow screens. Preserve usable layout at 320 CSS pixels and at 200% zoom; page scrolling is allowed, clipped choices are not. No color-only distinction, audio-only instruction, pointer-only interaction, or time-critical precision. Use strong visible focus, predictable tab order, keyboard shortcuts that avoid inputs, descriptive accessible names, and a concise live result announcement. A low-motion mode uses discrete movement markers instead of smooth travel; the active clock and route logic remain identical. Do not announce every frame or every second to assistive technology. Sound defaults off, is optional, and never conveys unique information.

Settings available before and during a level: standard/extended/untimed timing (changing timing restarts the uncommitted level without penalty after clear notice), reduced motion, mute, high contrast, and local saving. Automatically pause when hidden; returning requires explicit Resume. Manual pause keeps the premise readable. The design permits deliberation deliberately; it is not a reflex test.

## Shipping acceptance

1. All 200 validated levels are reachable in order; no score locks, missing outcomes, placeholder text, or unimplemented template.
2. Starting a level visibly moves the trolley immediately. Waiting resolves the disclosed default. A change before commitment wins; a change at/after commitment does not.
3. All 423 outcomes have a tailored three-part reflection, accurate actual counts, and applicable lens ratings. Opening insect outcomes and later deaths match the catalog exactly.
4. Pause, hidden tabs, refresh recovery, practice, repeated result delivery, storage denial, and a new campaign do not silently double-count or change saved totals.
5. Keyboard and touch users can make every choice. Motion reduction and untimed mode preserve access to the same content and scoring.
6. A production static build works at a root URL and a repository subpath, without external services. No secrets, accounts, network-dependent art, or telemetry are required.
7. Visual and browser acceptance tests in the technical guide pass. Content/schema validation is a build gate.

## Deliberate exclusions

No multiplayer voting, user-authored scenarios, online leaderboard, continuous moral personality inference, generated dialogue, randomized level generation, real medical decision support, or physics simulation. No medals for deaths or special “perfect moral” ending. These exclusions keep a complete, reviewable first version feasible for Luna.
