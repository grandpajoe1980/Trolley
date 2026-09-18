# Research and editorial notes

Research checked 18 September 2026. These are sources for distinctions and established examples, not empirical popularity rankings. No claim is made that these are the “top” or most commonly played variants. All game language, comic settings, numeric lens ratings, and cross-species weights are original editorial choices. This document paraphrases; it does not reproduce source passages.

## Philosophical grounding

| Source | Narrow takeaway used here | Application |
|---|---|---|
| [Stanford Encyclopedia of Philosophy: Doing vs. Allowing Harm](https://plato.stanford.edu/entries/doing-allowing/) | Doing/allowing, action/inaction, intention, and responsibility do not simply coincide. Its trolley discussion traces the driver/bystander contrast and objections to simple rules. | Chapter 2; the classic switch structure in level 4. |
| [Stanford Encyclopedia of Philosophy: Doctrine of Double Effect](https://plato.stanford.edu/entries/double-effect/) | The intended/foreseen distinction is debated. Calling a harm unintended is not sufficient by itself; proportionality and alternatives matter. | Chapter 3; the transplant analogy in level 45; less harmful alternatives in synthesis. |
| [BioScience: Clarifying ethical stances in conservation: a trolley problem thought experiment](https://academic.oup.com/bioscience/article/75/9/722/8164492) | Its illustrated discussion identifies footbridge and loop structures in which the person stops the trolley. | Canonical adaptations at 32 and 41; compare the independently buffered loop at 42. |
| [Stanford Encyclopedia of Philosophy: Informed Consent](https://plato.stanford.edu/entries/informed-consent/) | Informed, voluntary authorization has a scope; coercion, misunderstanding, and refusal complicate it. | Chapter 4. Applying these distinctions to a fictional railway is our adaptation, not clinical advice from the entry. |
| [Stanford Encyclopedia of Philosophy: Special Obligations](https://plato.stanford.edu/entries/special-obligations/) | Relationships and undertakings can ground duties not owed identically to everyone; their basis and limits are contested. | Chapter 5 and institutional duties in chapter 7. |
| [Stanford Encyclopedia of Philosophy: Moral Luck](https://plato.stanford.edu/entries/moral-luck/) | Outcome and other circumstances outside control complicate moral assessment. | Chapter 6 separates evidence at decision time from realized outcome. It does not claim the entry endorses our probability choices or scores. |
| [Stanford Encyclopedia of Philosophy: Distributive Justice](https://plato.stanford.edu/entries/justice-distributive/) | Competing principles concern how benefits and burdens are distributed; there is no single uncontested numerical rule. | Chapter 8's original rescue-allocation scenarios. |
| [Stanford Encyclopedia of Philosophy: Intergenerational Justice](https://plato.stanford.edu/entries/justice-intergenerational/) | Present choices can affect future people's interests and opportunities; scope and justification of duties are debated. | Chapter 9's stipulated future effects and limits of present authorization. |

Sources are conceptual background only except where a record is explicitly marked `canonical-adaptation`. The four such records are 4 (standard switch), 32 (footbridge), 41 (loop), and 45 (transplant analogy). Canonical-adaptation means a recognizable structure, rewritten and simplified; it does not mean our exact text or mechanics appeared in an original paper. The other 196 are labeled original, including variations that deliberately contrast with those structures. A source attached to an original record must be displayed as “Conceptual background,” never “Source of this exact dilemma.”

The hospital trolley in level 45 is an abstract comparison, not a medical simulation. Footbridge and loop stopping physics are explicitly stipulated; no real-world claim about bodies stopping vehicles is intended. The design avoids body-size jokes while preserving the causal feature being tested.

## How research shaped the design

The progression repeatedly asks the player to change one morally relevant fact: a driver becomes a bystander; a net is already deployed rather than packed; an independent buffer replaces a victim as the stopping mechanism; voluntary consent becomes coerced or expired; equal immediate losses acquire unequal histories; a current benefit causes certain later deaths. Later chapters combine these features. This is an original pedagogical arrangement, not a ranking of philosophical sophistication or a claim that one ethical theory wins.

Comic variants are authored rather than described as popular memes. A public-domain philosophical setup does not license copying a commercial game's wording, art, UI, level sequence, or jokes. This handoff supplies original prose and calls for original simple SVG assets. No source illustrations are included or licensed for reuse.

## Score calibration and limitations

The four lenses are useful editorial lenses, not an exhaustive account of ethics. Care, virtue, moral uncertainty, and institutional context appear in prose without pretending every tradition maps cleanly into these four columns. Ratings use a rough 0–100 scale: 0–20 severe unresolved violation, 25–45 weak support or major competing claims, 50–70 mixed support, 75–90 strong support with acknowledged costs, 95–100 unusually strong support in the stipulated case. These bands are design conventions. They are not scientific intervals and a five-point difference should not be narrated as a discovered moral fact.

Consequences is rated using disclosed evidence, including probabilities and nonfatal costs, rather than automatically inverting raw deaths. Level 114 therefore rates a good rescue attempt highly even when it fails; level 115 does not award a lucky risky gimmick a high score. Rights/duties can favor restraint; autonomy can favor a valid voluntary rescue; fairness can favor impartial or reciprocal treatment. A numerical average compresses unresolved disagreement, so the breakdown and tension must remain available. The UI must not sort philosophical schools by correctness or assign the player a character label.

Basic matched cases deliberately retain equal ratings when only irrelevant labels change. Differences reflect a stated scenario fact rather than the author's estimate of a person's worth. Apparent outliers should be edited through an explicit content-version change, not silently altered by the engine. A future philosophy editor may reasonably disagree with these numbers; that disagreement is not a software defect.

The default is generally the first nonintervention/continuation option, and always disclosed. This creates meaningful framing pressure; it is not presented as ethically neutral. Scores do not infer whether the player acted from revenge, compassion, confusion, or interruption. The reflection sometimes raises a possible motive but never claims to know it.

## Technical sources checked

- [Vite getting started](https://vite.dev/guide/): the official `vanilla-ts` template supports the selected lightweight stack; current documentation lists Node 20.19+ or 22.12+ requirements. The handoff standardizes on a supported Node 22 release at least 22.12, or a supported newer LTS validated during setup.
- [Vite features](https://vite.dev/guide/features): transpilation is not a replacement for TypeScript checking. Run `tsc --noEmit` separately in validation/build scripts.
- [TypeScript strict](https://www.typescriptlang.org/tsconfig/strict.html): strict mode enables stronger checking; upgrades can add stricter checks. Pin actual resolved packages and lockfile when implementation starts.
- [MDN requestAnimationFrame](https://developer.mozilla.org/en-US/docs/Web/API/Window/requestAnimationFrame): use timestamps rather than frame counts; background behavior cannot serve as the game's clock policy.
- [MDN Page Visibility API](https://developer.mozilla.org/en-US/docs/Web/API/Page_Visibility_API): visibility events support explicit suspension. The handoff chooses pause-on-hidden and explicit resume as product behavior.
- [MDN localStorage](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage): storage is origin-scoped and can be unavailable. Guard reads/writes and permit in-memory play.
- [Vitest guide](https://vitest.dev/guide/): current documentation requires Vite >=6.4.0 and Node >=22.12.0. Use Vitest for pure engine/scoring/content tests.
- [Playwright installation](https://playwright.dev/docs/intro): use its browser projects for end-to-end checks. The proposed test matrix is this handoff's requirement.

Exact package versions are intentionally not invented from search results. Luna should resolve a mutually compatible stable Vite/TypeScript/Vitest/Playwright set on setup, commit the lockfile, record versions, and use `npm ci` thereafter. This is a concrete stack choice, not an instruction to reconsider frameworks.
