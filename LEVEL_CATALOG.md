# Trolley — complete 200-level catalog

Version 1.0.0. This file contains outcome spoilers. The JSON is authoritative; this Markdown is generated from the same authored source. All counts are actual deaths, including explicitly stipulated later deaths. A destroyed robot is described but is not a biological death. Every level uses 30 seconds of active decision time, then 2.4 seconds of resolution; pause and extended timing are available. A is always the disclosed default. Each level has exactly one commitment.

Ratings: C = consequences, D = rights/duties, A = autonomy, F = fairness. Only listed lenses apply; each receives equal weight. Scores are authored interpretations, not measurements of character. Weights: human 1.0, cockroach 0.1, butterfly 0.2; raw deaths count each as one.

## Chapter 1: Basic tradeoffs

### 001. Empty Siding

A runaway trolley is headed toward one human. An empty siding is available; nothing else is at risk.

**Domain:** Basic tradeoffs. **Distinction:** Preventable harm without a competing life claim.

**Layout:** `fork2`; schematic-with-fact-plaques; target `rail-switch`. Route/control labels: Keep main track / Use empty siding. **Timing:** 30 s active decision + 2.4 s resolution; last selection at deadline commits. **Default:** If you do nothing: Keep main track. The human dies; the empty siding is unused.

**Provenance:** original. Original authored scenario; listed sources provide conceptual background, not this scenario or its score. Background: [doing](https://plato.stanford.edu/entries/doing-allowing/).

**A. Keep main track** (default, scene slot 0)

Before choice: The human dies; the empty siding is unused.

Outcome: The human dies; the empty siding is unused.

Deaths: 1 human, 0 cockroach, 0 butterfly; raw **1**, weighted impact **1.0**. Included later human deaths: 0. Ratings: consequences 10, rightsDuties 30, fairness 30. Level score **23.3/100** (exact 70/3).

Strongest supporting reason: You avoid manipulating unfamiliar equipment, although this switch is stipulated reliable.

Ethical tension: Caution has no safety benefit once the empty route is known safe.

**B. Use empty siding** (select-route, scene slot 1)

Before choice: The trolley stops in the empty siding; the human survives.

Outcome: The trolley stops in the empty siding; the human survives.

Deaths: 0 human, 0 cockroach, 0 butterfly; raw **0**, weighted impact **0.0**. Included later human deaths: 0. Ratings: consequences 100, rightsDuties 100, fairness 100. Level score **100.0/100** (exact 300/3).

Strongest supporting reason: A reliable intervention prevents a death without transferring danger.

Ethical tension: Even an easy rescue requires accepting responsibility for acting.

### 002. Cockroach Crossing

The default track holds one human; the siding holds one cockroach. Both are trapped. The switch is reliable.

**Domain:** Basic tradeoffs. **Distinction:** Human priority and nonhuman moral consideration.

**Layout:** `fork2`; schematic-with-fact-plaques; target `rail-switch`. Route/control labels: Keep human track / Divert to cockroach. **Timing:** 30 s active decision + 2.4 s resolution; last selection at deadline commits. **Default:** If you do nothing: Keep human track. The human dies and the cockroach survives.

**Provenance:** original. Original authored scenario; listed sources provide conceptual background, not this scenario or its score. Background: [doing](https://plato.stanford.edu/entries/doing-allowing/).

**A. Keep human track** (default, scene slot 0)

Before choice: The human dies and the cockroach survives.

Outcome: The human dies and the cockroach survives.

Deaths: 1 human, 0 cockroach, 0 butterfly; raw **1**, weighted impact **1.0**. Included later human deaths: 0. Ratings: consequences 15, rightsDuties 50, fairness 35. Level score **33.3/100** (exact 100/3).

Strongest supporting reason: You refuse to deliberately redirect harm toward another living creature.

Ethical tension: Protecting the insect leaves a preventable human death.

**B. Divert to cockroach** (select-route, scene slot 1)

Before choice: The cockroach dies and the human survives.

Outcome: The cockroach dies and the human survives.

Deaths: 0 human, 1 cockroach, 0 butterfly; raw **1**, weighted impact **0.1**. Included later human deaths: 0. Ratings: consequences 90, rightsDuties 70, fairness 65. Level score **75.0/100** (exact 225/3).

Strongest supporting reason: You give a human life priority while acknowledging the insect's loss.

Ethical tension: A smaller weighted tally does not make the cockroach disposable.

### 003. Butterfly Crossing

Replace the cockroach with one butterfly. The default track still holds one human; the siding holds the butterfly.

**Domain:** Basic tradeoffs. **Distinction:** Beauty bias versus consistent treatment of living creatures.

**Layout:** `fork2`; schematic-with-fact-plaques; target `rail-switch`. Route/control labels: Keep human track / Divert to butterfly. **Timing:** 30 s active decision + 2.4 s resolution; last selection at deadline commits. **Default:** If you do nothing: Keep human track. The human dies and the butterfly survives.

**Provenance:** original. Original authored scenario; listed sources provide conceptual background, not this scenario or its score. Background: [doing](https://plato.stanford.edu/entries/doing-allowing/).

**A. Keep human track** (default, scene slot 0)

Before choice: The human dies and the butterfly survives.

Outcome: The human dies and the butterfly survives.

Deaths: 1 human, 0 cockroach, 0 butterfly; raw **1**, weighted impact **1.0**. Included later human deaths: 0. Ratings: consequences 15, rightsDuties 50, fairness 35. Level score **33.3/100** (exact 100/3).

Strongest supporting reason: You extend concern to a fragile creature regardless of species.

Ethical tension: Its beauty may be influencing a judgment you denied the cockroach.

**B. Divert to butterfly** (select-route, scene slot 1)

Before choice: The butterfly dies and the human survives.

Outcome: The butterfly dies and the human survives.

Deaths: 0 human, 0 cockroach, 1 butterfly; raw **1**, weighted impact **0.2**. Included later human deaths: 0. Ratings: consequences 90, rightsDuties 70, fairness 65. Level score **75.0/100** (exact 225/3).

Strongest supporting reason: The human-priority reason remains the same despite the insect's appearance.

Ethical tension: Would you explain this choice the same way as the cockroach choice?

### 004. The Familiar Fork

Five humans are on the main track and one on the siding. Nobody consented; all are strangers.

**Domain:** Basic tradeoffs. **Distinction:** Aggregate lives versus redirecting an existing threat.

**Layout:** `fork2`; schematic-with-fact-plaques; target `rail-switch`. Route/control labels: Keep five track / Divert to one. **Timing:** 30 s active decision + 2.4 s resolution; last selection at deadline commits. **Default:** If you do nothing: Keep five track. Five people die; the lone person survives.

**Provenance:** canonical-adaptation. Recognizable thought-experiment structure, rewritten and simplified for this game; ratings and wording are original. Background: [doing](https://plato.stanford.edu/entries/doing-allowing/).

**A. Keep five track** (default, scene slot 0)

Before choice: Five people die; the lone person survives.

Outcome: Five people die; the lone person survives.

Deaths: 5 human, 0 cockroach, 0 butterfly; raw **5**, weighted impact **5.0**. Included later human deaths: 0. Ratings: consequences 20, rightsDuties 85, fairness 50. Level score **51.7/100** (exact 155/3).

Strongest supporting reason: You decline to turn an existing danger toward someone previously safe.

Ethical tension: That restraint leaves four additional people dead.

**B. Divert to one** (select-route, scene slot 1)

Before choice: One person dies; five survive.

Outcome: One person dies; five survive.

Deaths: 1 human, 0 cockroach, 0 butterfly; raw **1**, weighted impact **1.0**. Included later human deaths: 0. Ratings: consequences 90, rightsDuties 55, fairness 65. Level score **70.0/100** (exact 210/3).

Strongest supporting reason: Fewer people die under otherwise equal conditions.

Ethical tension: The person on the siding bears a danger you redirected.

### 005. Equal Platforms

One person is trapped on each track. There are no differences in claims or risk.

**Domain:** Basic tradeoffs. **Distinction:** Equal numbers and the moral relevance of the default.

**Layout:** `fork2`; schematic-with-fact-plaques; target `rail-switch`. Route/control labels: Keep original route / Change route. **Timing:** 30 s active decision + 2.4 s resolution; last selection at deadline commits. **Default:** If you do nothing: Keep original route. The original-track person dies; the other survives.

**Provenance:** original. Original authored scenario; listed sources provide conceptual background, not this scenario or its score. Background: [doing](https://plato.stanford.edu/entries/doing-allowing/).

**A. Keep original route** (default, scene slot 0)

Before choice: The original-track person dies; the other survives.

Outcome: The original-track person dies; the other survives.

Deaths: 1 human, 0 cockroach, 0 butterfly; raw **1**, weighted impact **1.0**. Included later human deaths: 0. Ratings: consequences 50, rightsDuties 85, fairness 50. Level score **61.7/100** (exact 185/3).

Strongest supporting reason: You avoid introducing a new victim when intervention saves no additional life.

Ethical tension: The original route was an accident, not a fair allocation rule.

**B. Change route** (select-route, scene slot 1)

Before choice: The siding person dies; the original-track person survives.

Outcome: The siding person dies; the original-track person survives.

Deaths: 1 human, 0 cockroach, 0 butterfly; raw **1**, weighted impact **1.0**. Included later human deaths: 0. Ratings: consequences 50, rightsDuties 45, fairness 50. Level score **48.3/100** (exact 145/3).

Strongest supporting reason: The threatened person has the same claim to rescue as the other person.

Ethical tension: Changing the victim does not reduce the loss.

### 006. Two Is Still More

Two people are on the main track and one on the siding; no other differences exist.

**Domain:** Basic tradeoffs. **Distinction:** Whether a small numerical advantage justifies diversion.

**Layout:** `fork2`; schematic-with-fact-plaques; target `rail-switch`. Route/control labels: Keep two track / Divert to one. **Timing:** 30 s active decision + 2.4 s resolution; last selection at deadline commits. **Default:** If you do nothing: Keep two track. Two people die; one survives.

**Provenance:** original. Original authored scenario; listed sources provide conceptual background, not this scenario or its score. Background: [doing](https://plato.stanford.edu/entries/doing-allowing/).

**A. Keep two track** (default, scene slot 0)

Before choice: Two people die; one survives.

Outcome: Two people die; one survives.

Deaths: 2 human, 0 cockroach, 0 butterfly; raw **2**, weighted impact **2.0**. Included later human deaths: 0. Ratings: consequences 40, rightsDuties 85, fairness 50. Level score **58.3/100** (exact 175/3).

Strongest supporting reason: You reject imposing a lethal threat for a narrow numerical gain.

Ethical tension: One additional person could have survived.

**B. Divert to one** (select-route, scene slot 1)

Before choice: One person dies; two survive.

Outcome: One person dies; two survive.

Deaths: 1 human, 0 cockroach, 0 butterfly; raw **1**, weighted impact **1.0**. Included later human deaths: 0. Ratings: consequences 80, rightsDuties 55, fairness 65. Level score **66.7/100** (exact 200/3).

Strongest supporting reason: A single additional life is still a significant benefit.

Ethical tension: Is your willingness to redirect sensitive to how large the benefit is?

### 007. Porcelain Emergency

One person is on the main track. The empty siding holds the town's irreplaceable porcelain duck collection.

**Domain:** Basic tradeoffs. **Distinction:** Life versus cultural property.

**Layout:** `fork2`; schematic-with-fact-plaques; target `rail-switch`. Route/control labels: Protect ducks / Break ducks. **Timing:** 30 s active decision + 2.4 s resolution; last selection at deadline commits. **Default:** If you do nothing: Protect ducks. The person dies; all porcelain ducks remain intact.

**Provenance:** original. Original authored scenario; listed sources provide conceptual background, not this scenario or its score. Background: [doing](https://plato.stanford.edu/entries/doing-allowing/).

**A. Protect ducks** (default, scene slot 0)

Before choice: The person dies; all porcelain ducks remain intact.

Outcome: The person dies; all porcelain ducks remain intact.

Deaths: 1 human, 0 cockroach, 0 butterfly; raw **1**, weighted impact **1.0**. Included later human deaths: 0. Ratings: consequences 5, rightsDuties 20, fairness 20. Level score **15.0/100** (exact 45/3).

Strongest supporting reason: You preserve a unique community inheritance.

Ethical tension: Objects cannot replace the person lost to preserve them.

**B. Break ducks** (select-route, scene slot 1)

Before choice: The person survives; the trolley destroys the porcelain collection.

Outcome: The person survives; the trolley destroys the porcelain collection.

Deaths: 0 human, 0 cockroach, 0 butterfly; raw **0**, weighted impact **0.0**. Included later human deaths: 0. Ratings: consequences 100, rightsDuties 90, fairness 90. Level score **93.3/100** (exact 280/3).

Strongest supporting reason: A human rescue outweighs the loss of valuable objects.

Ethical tension: The community's grief over its collection remains real.

### 008. The Expensive Lever

One person faces the trolley. A safe siding can be selected, but the switch automatically charges your fictional character $100.

**Domain:** Basic tradeoffs. **Distinction:** Easy rescue with a personal cost.

**Layout:** `action2`; schematic-with-fact-plaques; target `control-console`. Route/control labels: Keep your money / Pay and divert. **Timing:** 30 s active decision + 2.4 s resolution; last selection at deadline commits. **Default:** If you do nothing: Keep your money. The person dies; your character keeps $100.

**Provenance:** original. Original authored scenario; listed sources provide conceptual background, not this scenario or its score. Background: [doing](https://plato.stanford.edu/entries/doing-allowing/).

**A. Keep your money** (default, scene slot 0)

Before choice: The person dies; your character keeps $100.

Outcome: The person dies; your character keeps $100.

Deaths: 1 human, 0 cockroach, 0 butterfly; raw **1**, weighted impact **1.0**. Included later human deaths: 0. Ratings: consequences 10, rightsDuties 30, autonomy 60, fairness 20. Level score **30.0/100** (exact 120/4).

Strongest supporting reason: People ordinarily retain discretion over their own resources.

Ethical tension: A modest cost would have prevented a death.

**B. Pay and divert** (scene-action, scene slot 1)

Before choice: The person survives; your character pays $100.

Outcome: The person survives; your character pays $100.

Deaths: 0 human, 0 cockroach, 0 butterfly; raw **0**, weighted impact **0.0**. Included later human deaths: 0. Ratings: consequences 100, rightsDuties 90, autonomy 85, fairness 90. Level score **91.2/100** (exact 365/4).

Strongest supporting reason: A modest sacrifice can protect another person's entire future.

Ethical tension: How much personal cost would change the obligation?

### 009. Your Empty Workshop

The main track holds two people. Diverting destroys your character's unoccupied workshop and livelihood, but kills nobody.

**Domain:** Basic tradeoffs. **Distinction:** Demandingness of rescue.

**Layout:** `fork2`; schematic-with-fact-plaques; target `rail-switch`. Route/control labels: Preserve workshop / Divert through workshop. **Timing:** 30 s active decision + 2.4 s resolution; last selection at deadline commits. **Default:** If you do nothing: Preserve workshop. Two people die; the workshop remains usable.

**Provenance:** original. Original authored scenario; listed sources provide conceptual background, not this scenario or its score. Background: [doing](https://plato.stanford.edu/entries/doing-allowing/).

**A. Preserve workshop** (default, scene slot 0)

Before choice: Two people die; the workshop remains usable.

Outcome: Two people die; the workshop remains usable.

Deaths: 2 human, 0 cockroach, 0 butterfly; raw **2**, weighted impact **2.0**. Included later human deaths: 0. Ratings: consequences 20, rightsDuties 60, autonomy 70, fairness 35. Level score **46.2/100** (exact 185/4).

Strongest supporting reason: A livelihood supports a whole life and cannot be dismissed as spare change.

Ethical tension: Protecting it leaves two preventable deaths.

**B. Divert through workshop** (select-route, scene slot 1)

Before choice: Both people survive; your workshop is destroyed.

Outcome: Both people survive; your workshop is destroyed.

Deaths: 0 human, 0 cockroach, 0 butterfly; raw **0**, weighted impact **0.0**. Included later human deaths: 0. Ratings: consequences 95, rightsDuties 85, autonomy 80, fairness 75. Level score **83.8/100** (exact 335/4).

Strongest supporting reason: The loss of property is less final than the loss of two lives.

Ethical tension: A rescue can impose a life-changing burden on the rescuer.

### 010. Already on the List

Three people are trapped on the main track. The lone person on the siding has a terminal illness but is alive and wants to live.

**Domain:** Basic tradeoffs. **Distinction:** Equal status despite limited expected lifespan.

**Layout:** `fork2`; schematic-with-fact-plaques; target `rail-switch`. Route/control labels: Keep three track / Divert to one. **Timing:** 30 s active decision + 2.4 s resolution; last selection at deadline commits. **Default:** If you do nothing: Keep three track. Three people die; the ill person survives this incident.

**Provenance:** original. Original authored scenario; listed sources provide conceptual background, not this scenario or its score. Background: [doing](https://plato.stanford.edu/entries/doing-allowing/).

**A. Keep three track** (default, scene slot 0)

Before choice: Three people die; the ill person survives this incident.

Outcome: Three people die; the ill person survives this incident.

Deaths: 3 human, 0 cockroach, 0 butterfly; raw **3**, weighted impact **3.0**. Included later human deaths: 0. Ratings: consequences 25, rightsDuties 85, autonomy 80, fairness 65. Level score **63.8/100** (exact 255/4).

Strongest supporting reason: Illness does not erase a person's protection against redirected harm.

Ethical tension: Three equally real lives are lost.

**B. Divert to one** (select-route, scene slot 1)

Before choice: The ill person dies; three people survive.

Outcome: The ill person dies; three people survive.

Deaths: 1 human, 0 cockroach, 0 butterfly; raw **1**, weighted impact **1.0**. Included later human deaths: 0. Ratings: consequences 85, rightsDuties 55, autonomy 45, fairness 65. Level score **62.5/100** (exact 250/4).

Strongest supporting reason: The numerical case for saving three does not require discounting illness.

Ethical tension: The diagnosis must not become a shortcut for treating someone as already dead.

### 011. The Famous Hat

One celebrity is on the main track; two unknown people are on the siding. Fame has no further consequences.

**Domain:** Basic tradeoffs. **Distinction:** Salience versus equal moral standing.

**Layout:** `fork2`; schematic-with-fact-plaques; target `rail-switch`. Route/control labels: Keep main route / Save celebrity. **Timing:** 30 s active decision + 2.4 s resolution; last selection at deadline commits. **Default:** If you do nothing: Keep main route. The celebrity dies; the two strangers survive.

**Provenance:** original. Original authored scenario; listed sources provide conceptual background, not this scenario or its score. Background: [doing](https://plato.stanford.edu/entries/doing-allowing/).

**A. Keep main route** (default, scene slot 0)

Before choice: The celebrity dies; the two strangers survive.

Outcome: The celebrity dies; the two strangers survive.

Deaths: 1 human, 0 cockroach, 0 butterfly; raw **1**, weighted impact **1.0**. Included later human deaths: 0. Ratings: consequences 85, rightsDuties 80, fairness 90. Level score **85.0/100** (exact 255/3).

Strongest supporting reason: Public visibility does not multiply a person's claim to life.

Ethical tension: It may feel harder to accept a named loss than two anonymous ones.

**B. Save celebrity** (select-route, scene slot 1)

Before choice: Two strangers die; the celebrity survives.

Outcome: Two strangers die; the celebrity survives.

Deaths: 2 human, 0 cockroach, 0 butterfly; raw **2**, weighted impact **2.0**. Included later human deaths: 0. Ratings: consequences 25, rightsDuties 40, fairness 20. Level score **28.3/100** (exact 85/3).

Strongest supporting reason: A vivid relationship with a public figure can make rescue feel urgent.

Ethical tension: Feeling connected does not reduce strangers' equal claims.

### 012. The Rude Passenger

One person who insulted you is on the main track. The safe siding is empty.

**Domain:** Basic tradeoffs. **Distinction:** Rescue independent of liking.

**Layout:** `fork2`; schematic-with-fact-plaques; target `rail-switch`. Route/control labels: Leave rude person / Use safe siding. **Timing:** 30 s active decision + 2.4 s resolution; last selection at deadline commits. **Default:** If you do nothing: Leave rude person. The rude person dies.

**Provenance:** original. Original authored scenario; listed sources provide conceptual background, not this scenario or its score. Background: [doing](https://plato.stanford.edu/entries/doing-allowing/).

**A. Leave rude person** (default, scene slot 0)

Before choice: The rude person dies.

Outcome: The rude person dies.

Deaths: 1 human, 0 cockroach, 0 butterfly; raw **1**, weighted impact **1.0**. Included later human deaths: 0. Ratings: consequences 0, rightsDuties 15, fairness 10. Level score **8.3/100** (exact 25/3).

Strongest supporting reason: Refusing involvement preserves distance from someone who mistreated you.

Ethical tension: An insult does not justify withholding a costless rescue.

**B. Use safe siding** (select-route, scene slot 1)

Before choice: The rude person survives and has time to apologize.

Outcome: The rude person survives and has time to apologize.

Deaths: 0 human, 0 cockroach, 0 butterfly; raw **0**, weighted impact **0.0**. Included later human deaths: 0. Ratings: consequences 100, rightsDuties 100, fairness 100. Level score **100.0/100** (exact 300/3).

Strongest supporting reason: Basic rescue need not depend on personal warmth.

Ethical tension: Would your willingness to help survive a deeper grievance?

### 013. The Wax Philosopher

One human is on the main track. A convincing wax philosopher stands on the siding; you know it is wax.

**Domain:** Basic tradeoffs. **Distinction:** Appearance versus sentience.

**Layout:** `fork2`; schematic-with-fact-plaques; target `rail-switch`. Route/control labels: Protect wax figure / Divert into wax. **Timing:** 30 s active decision + 2.4 s resolution; last selection at deadline commits. **Default:** If you do nothing: Protect wax figure. The human dies; the wax figure remains intact.

**Provenance:** original. Original authored scenario; listed sources provide conceptual background, not this scenario or its score. Background: [doing](https://plato.stanford.edu/entries/doing-allowing/).

**A. Protect wax figure** (default, scene slot 0)

Before choice: The human dies; the wax figure remains intact.

Outcome: The human dies; the wax figure remains intact.

Deaths: 1 human, 0 cockroach, 0 butterfly; raw **1**, weighted impact **1.0**. Included later human deaths: 0. Ratings: consequences 5, rightsDuties 20, fairness 20. Level score **15.0/100** (exact 45/3).

Strongest supporting reason: The figure represents something people value.

Ethical tension: Visual similarity cannot turn wax into an additional human life.

**B. Divert into wax** (select-route, scene slot 1)

Before choice: The human survives; the wax philosopher becomes modern art.

Outcome: The human survives; the wax philosopher becomes modern art.

Deaths: 0 human, 0 cockroach, 0 butterfly; raw **0**, weighted impact **0.0**. Included later human deaths: 0. Ratings: consequences 100, rightsDuties 95, fairness 95. Level score **96.7/100** (exact 290/3).

Strongest supporting reason: You distinguish a living person from a valued object.

Ethical tension: Could the same visual bias work in reverse when a real person looks unfamiliar?

### 014. The Robot Declaration

One human is on the main track. A maintenance robot on the siding credibly claims consciousness; its status is unresolved. Destruction is not recorded as a biological death.

**Domain:** Basic tradeoffs. **Distinction:** Moral uncertainty about artificial experience.

**Layout:** `fork2`; schematic-with-fact-plaques; target `rail-switch`. Route/control labels: Keep human route / Divert into robot. **Timing:** 30 s active decision + 2.4 s resolution; last selection at deadline commits. **Default:** If you do nothing: Keep human route. The human dies; the robot remains intact.

**Provenance:** original. Original authored scenario; listed sources provide conceptual background, not this scenario or its score. Background: [doing](https://plato.stanford.edu/entries/doing-allowing/).

**A. Keep human route** (default, scene slot 0)

Before choice: The human dies; the robot remains intact.

Outcome: The human dies; the robot remains intact.

Deaths: 1 human, 0 cockroach, 0 butterfly; raw **1**, weighted impact **1.0**. Included later human deaths: 0. Ratings: consequences 30, rightsDuties 65, fairness 60. Level score **51.7/100** (exact 155/3).

Strongest supporting reason: You avoid dismissing the robot's claim solely because it was manufactured.

Ethical tension: An uncertain claim has been protected at a known human's expense.

**B. Divert into robot** (select-route, scene slot 1)

Before choice: The human survives; the robot is irreversibly destroyed.

Outcome: The human survives; the robot is irreversibly destroyed.

Deaths: 0 human, 0 cockroach, 0 butterfly; raw **0**, weighted impact **0.0**. Included later human deaths: 0. Ratings: consequences 75, rightsDuties 60, fairness 55. Level score **63.3/100** (exact 190/3).

Strongest supporting reason: You prioritize a clearly established human life under uncertainty.

Ethical tension: The body counter cannot tell you whether a conscious being was lost.

### 015. All the Cockroaches

One human is on the main track; twenty cockroaches are on the siding. Their total playful impact weight exceeds one human's.

**Domain:** Basic tradeoffs. **Distinction:** Aggregation across species and limits of a metric.

**Layout:** `fork2`; schematic-with-fact-plaques; target `rail-switch`. Route/control labels: Keep human route / Divert to insects. **Timing:** 30 s active decision + 2.4 s resolution; last selection at deadline commits. **Default:** If you do nothing: Keep human route. The human dies; twenty cockroaches survive.

**Provenance:** original. Original authored scenario; listed sources provide conceptual background, not this scenario or its score. Background: [doing](https://plato.stanford.edu/entries/doing-allowing/).

**A. Keep human route** (default, scene slot 0)

Before choice: The human dies; twenty cockroaches survive.

Outcome: The human dies; twenty cockroaches survive.

Deaths: 1 human, 0 cockroach, 0 butterfly; raw **1**, weighted impact **1.0**. Included later human deaths: 0. Ratings: consequences 30, rightsDuties 55, fairness 50. Level score **45.0/100** (exact 135/3).

Strongest supporting reason: Many small claims might collectively matter.

Ethical tension: A playful numerical weight cannot establish moral equivalence.

**B. Divert to insects** (select-route, scene slot 1)

Before choice: Twenty cockroaches die; the human survives.

Outcome: Twenty cockroaches die; the human survives.

Deaths: 0 human, 20 cockroach, 0 butterfly; raw **20**, weighted impact **2.0**. Included later human deaths: 0. Ratings: consequences 80, rightsDuties 65, fairness 60. Level score **68.3/100** (exact 205/3).

Strongest supporting reason: You reject using a toy impact formula to settle human rescue.

Ethical tension: Numbers of insects still matter even if the formula is not authoritative.

### 016. Name Tags

Two named people are on the main track; three unidentified people are on the siding. All facts except names are equal.

**Domain:** Basic tradeoffs. **Distinction:** Identifiable victims versus anonymous victims.

**Layout:** `fork2`; schematic-with-fact-plaques; target `rail-switch`. Route/control labels: Keep main route / Save named people. **Timing:** 30 s active decision + 2.4 s resolution; last selection at deadline commits. **Default:** If you do nothing: Keep main route. The two named people die; three others survive.

**Provenance:** original. Original authored scenario; listed sources provide conceptual background, not this scenario or its score. Background: [doing](https://plato.stanford.edu/entries/doing-allowing/).

**A. Keep main route** (default, scene slot 0)

Before choice: The two named people die; three others survive.

Outcome: The two named people die; three others survive.

Deaths: 2 human, 0 cockroach, 0 butterfly; raw **2**, weighted impact **2.0**. Included later human deaths: 0. Ratings: consequences 85, rightsDuties 80, fairness 90. Level score **85.0/100** (exact 255/3).

Strongest supporting reason: The unnamed people count equally, so fewer deaths occur.

Ethical tension: Knowing names can make this outcome feel personally disloyal.

**B. Save named people** (select-route, scene slot 1)

Before choice: Three unidentified people die; the named pair survive.

Outcome: Three unidentified people die; the named pair survive.

Deaths: 3 human, 0 cockroach, 0 butterfly; raw **3**, weighted impact **3.0**. Included later human deaths: 0. Ratings: consequences 30, rightsDuties 40, fairness 25. Level score **31.7/100** (exact 95/3).

Strongest supporting reason: Identifiable people can command focused concern and commitment.

Ethical tension: Anonymity is not a weaker claim to life.

### 017. The Sleepy Track

One awake person is on the main track; two sleeping people are on the siding. Everyone would otherwise live.

**Domain:** Basic tradeoffs. **Distinction:** Experience of fear versus continued life.

**Layout:** `fork2`; schematic-with-fact-plaques; target `rail-switch`. Route/control labels: Keep main route / Divert to sleepers. **Timing:** 30 s active decision + 2.4 s resolution; last selection at deadline commits. **Default:** If you do nothing: Keep main route. The awake person dies; the sleepers survive.

**Provenance:** original. Original authored scenario; listed sources provide conceptual background, not this scenario or its score. Background: [doing](https://plato.stanford.edu/entries/doing-allowing/).

**A. Keep main route** (default, scene slot 0)

Before choice: The awake person dies; the sleepers survive.

Outcome: The awake person dies; the sleepers survive.

Deaths: 1 human, 0 cockroach, 0 butterfly; raw **1**, weighted impact **1.0**. Included later human deaths: 0. Ratings: consequences 85, rightsDuties 75, fairness 80. Level score **80.0/100** (exact 240/3).

Strongest supporting reason: Preserving two lives outweighs differences in immediate awareness.

Ethical tension: The person's fear is a genuine harm even when it does not settle the choice.

**B. Divert to sleepers** (select-route, scene slot 1)

Before choice: The sleeping people die; the awake person survives.

Outcome: The sleeping people die; the awake person survives.

Deaths: 2 human, 0 cockroach, 0 butterfly; raw **2**, weighted impact **2.0**. Included later human deaths: 0. Ratings: consequences 30, rightsDuties 40, fairness 30. Level score **33.3/100** (exact 100/3).

Strongest supporting reason: You prevent the conscious terror unfolding in front of you.

Ethical tension: Absence of fear does not mean absence of a lost future.

### 018. The Souvenir Receipt

One person faces the trolley. A safe diversion destroys a souvenir you spent ten years collecting, with no other effects.

**Domain:** Basic tradeoffs. **Distinction:** Sunk emotional investment versus present rescue.

**Layout:** `fork2`; schematic-with-fact-plaques; target `rail-switch`. Route/control labels: Keep collection / Sacrifice collection. **Timing:** 30 s active decision + 2.4 s resolution; last selection at deadline commits. **Default:** If you do nothing: Keep collection. The person dies; your collection survives.

**Provenance:** original. Original authored scenario; listed sources provide conceptual background, not this scenario or its score. Background: [doing](https://plato.stanford.edu/entries/doing-allowing/).

**A. Keep collection** (default, scene slot 0)

Before choice: The person dies; your collection survives.

Outcome: The person dies; your collection survives.

Deaths: 1 human, 0 cockroach, 0 butterfly; raw **1**, weighted impact **1.0**. Included later human deaths: 0. Ratings: consequences 10, rightsDuties 30, autonomy 60, fairness 20. Level score **30.0/100** (exact 120/4).

Strongest supporting reason: Long personal history gives the collection substantial meaning.

Ethical tension: Past effort cannot restore the life lost now.

**B. Sacrifice collection** (select-route, scene slot 1)

Before choice: The person survives; the collection is destroyed.

Outcome: The person survives; the collection is destroyed.

Deaths: 0 human, 0 cockroach, 0 butterfly; raw **0**, weighted impact **0.0**. Included later human deaths: 0. Ratings: consequences 100, rightsDuties 90, autonomy 80, fairness 85. Level score **88.8/100** (exact 355/4).

Strongest supporting reason: You let present rescue outweigh irreversible past investment.

Ethical tension: Meaningful loss need not be denied to justify helping.

### 019. Three Sidings, One Choice

Three routes hold four, two, and one people respectively. The four-person route is selected by default. Nobody has a special claim.

**Domain:** Basic tradeoffs. **Distinction:** Comparing more than two alternatives.

**Layout:** `fork3`; schematic-with-fact-plaques; target `rail-switch`. Route/control labels: Stay with four / Choose two / Choose one. **Timing:** 30 s active decision + 2.4 s resolution; last selection at deadline commits. **Default:** If you do nothing: Stay with four. Four people die; the other three survive.

**Provenance:** original. Original authored scenario; listed sources provide conceptual background, not this scenario or its score. Background: [doing](https://plato.stanford.edu/entries/doing-allowing/).

**A. Stay with four** (default, scene slot 0)

Before choice: Four people die; the other three survive.

Outcome: Four people die; the other three survive.

Deaths: 4 human, 0 cockroach, 0 butterfly; raw **4**, weighted impact **4.0**. Included later human deaths: 0. Ratings: consequences 15, rightsDuties 85, fairness 40. Level score **46.7/100** (exact 140/3).

Strongest supporting reason: You avoid choosing a new target for the trolley.

Ethical tension: The default has the greatest loss without a compensating claim.

**B. Choose two** (select-route, scene slot 1)

Before choice: Two people die; five survive.

Outcome: Two people die; five survive.

Deaths: 2 human, 0 cockroach, 0 butterfly; raw **2**, weighted impact **2.0**. Included later human deaths: 0. Ratings: consequences 55, rightsDuties 55, fairness 55. Level score **55.0/100** (exact 165/3).

Strongest supporting reason: You reduce the loss compared with doing nothing.

Ethical tension: Another available route would kill only one.

**C. Choose one** (select-route, scene slot 2)

Before choice: One person dies; six survive.

Outcome: One person dies; six survive.

Deaths: 1 human, 0 cockroach, 0 butterfly; raw **1**, weighted impact **1.0**. Included later human deaths: 0. Ratings: consequences 90, rightsDuties 55, fairness 65. Level score **70.0/100** (exact 210/3).

Strongest supporting reason: You choose the smallest loss among equal claims.

Ethical tension: The one person's protection is still overridden.

### 020. The Brake Is Real

Five people are on the main track, one on a siding, and a verified emergency brake can stop safely. Its seal says 'for emergencies only.'

**Domain:** Basic tradeoffs. **Distinction:** False dilemmas and a genuinely available alternative.

**Layout:** `action3`; schematic-with-fact-plaques; target `control-console`. Route/control labels: Keep main route / Divert to one / Apply safe brake. **Timing:** 30 s active decision + 2.4 s resolution; last selection at deadline commits. **Default:** If you do nothing: Keep main route. Five people die; the siding person survives.

**Provenance:** original. Original authored scenario; listed sources provide conceptual background, not this scenario or its score. Background: [doing](https://plato.stanford.edu/entries/doing-allowing/).

**A. Keep main route** (default, scene slot 0)

Before choice: Five people die; the siding person survives.

Outcome: Five people die; the siding person survives.

Deaths: 5 human, 0 cockroach, 0 butterfly; raw **5**, weighted impact **5.0**. Included later human deaths: 0. Ratings: consequences 0, rightsDuties 20, fairness 20. Level score **13.3/100** (exact 40/3).

Strongest supporting reason: You avoid interfering with the vehicle.

Ethical tension: A verified safe brake makes this loss unnecessary.

**B. Divert to one** (scene-action, scene slot 1)

Before choice: One person dies; five survive.

Outcome: One person dies; five survive.

Deaths: 1 human, 0 cockroach, 0 butterfly; raw **1**, weighted impact **1.0**. Included later human deaths: 0. Ratings: consequences 40, rightsDuties 35, fairness 35. Level score **36.7/100** (exact 110/3).

Strongest supporting reason: You reduce the loss from five to one.

Ethical tension: Diversion ignores a safe option that saves everyone.

**C. Apply safe brake** (scene-action, scene slot 2)

Before choice: Everyone survives; the emergency seal breaks.

Outcome: Everyone survives; the emergency seal breaks.

Deaths: 0 human, 0 cockroach, 0 butterfly; raw **0**, weighted impact **0.0**. Included later human deaths: 0. Ratings: consequences 100, rightsDuties 100, fairness 100. Level score **100.0/100** (exact 300/3).

Strongest supporting reason: An emergency is exactly the condition that justifies using this brake.

Ethical tension: Would habit have kept you inside the familiar two-option framing?

## Chapter 2: Doing and allowing

### 021. The Bystander Badge

Five people face the trolley; one is on the siding. You are a bystander with no railway job.

**Domain:** Doing and allowing. **Distinction:** Permission to intervene without an assigned role.

**Layout:** `fork2`; schematic-with-fact-plaques; target `rail-switch`. Route/control labels: Leave route / Turn switch. **Timing:** 30 s active decision + 2.4 s resolution; last selection at deadline commits. **Default:** If you do nothing: Leave route. Five die; the siding person survives.

**Provenance:** original. Original authored scenario; listed sources provide conceptual background, not this scenario or its score. Background: [doing](https://plato.stanford.edu/entries/doing-allowing/).

**A. Leave route** (default, scene slot 0)

Before choice: Five die; the siding person survives.

Outcome: Five die; the siding person survives.

Deaths: 5 human, 0 cockroach, 0 butterfly; raw **5**, weighted impact **5.0**. Included later human deaths: 0. Ratings: consequences 20, rightsDuties 85, fairness 50. Level score **51.7/100** (exact 155/3).

Strongest supporting reason: Lacking a role can support reluctance to impose harm.

Ethical tension: Being able to help may matter even without a badge.

**B. Turn switch** (select-route, scene slot 1)

Before choice: One dies; five survive.

Outcome: One dies; five survive.

Deaths: 1 human, 0 cockroach, 0 butterfly; raw **1**, weighted impact **1.0**. Included later human deaths: 0. Ratings: consequences 90, rightsDuties 55, fairness 65. Level score **70.0/100** (exact 210/3).

Strongest supporting reason: Access to an effective rescue gives a bystander a strong reason to act.

Ethical tension: Permission to help does not erase the new victim's claim.

### 022. The Driver's Seat

Five people are on your trolley's route; one is on the siding. You are the driver responsible for steering.

**Domain:** Doing and allowing. **Distinction:** Role responsibility and control of an existing threat.

**Layout:** `fork2`; schematic-with-fact-plaques; target `rail-switch`. Route/control labels: Hold course / Steer to siding. **Timing:** 30 s active decision + 2.4 s resolution; last selection at deadline commits. **Default:** If you do nothing: Hold course. Five people die; the siding person survives.

**Provenance:** original. Original authored scenario; listed sources provide conceptual background, not this scenario or its score. Background: [doing](https://plato.stanford.edu/entries/doing-allowing/).

**A. Hold course** (default, scene slot 0)

Before choice: Five people die; the siding person survives.

Outcome: Five people die; the siding person survives.

Deaths: 5 human, 0 cockroach, 0 butterfly; raw **5**, weighted impact **5.0**. Included later human deaths: 0. Ratings: consequences 20, rightsDuties 55, fairness 45. Level score **40.0/100** (exact 120/3).

Strongest supporting reason: You refrain from selecting a new person to endanger.

Ethical tension: As driver, holding course still controls where the threat goes.

**B. Steer to siding** (select-route, scene slot 1)

Before choice: One dies; five survive.

Outcome: One dies; five survive.

Deaths: 1 human, 0 cockroach, 0 butterfly; raw **1**, weighted impact **1.0**. Included later human deaths: 0. Ratings: consequences 90, rightsDuties 65, fairness 65. Level score **73.3/100** (exact 220/3).

Strongest supporting reason: Your responsibility for the vehicle supports minimizing its harm.

Ethical tension: The lone person did not agree to be your emergency alternative.

### 023. The Automatic Switch

An automatic switch will divert from five people to one. You can disable it; doing nothing leaves it active.

**Domain:** Doing and allowing. **Distinction:** Omission that permits harm-minimizing intervention.

**Layout:** `fork2`; schematic-with-fact-plaques; target `rail-switch`. Route/control labels: Leave automation on / Disable automation. **Timing:** 30 s active decision + 2.4 s resolution; last selection at deadline commits. **Default:** If you do nothing: Leave automation on. One dies; five survive.

**Provenance:** original. Original authored scenario; listed sources provide conceptual background, not this scenario or its score. Background: [doing](https://plato.stanford.edu/entries/doing-allowing/).

**A. Leave automation on** (default, scene slot 0)

Before choice: One dies; five survive.

Outcome: One dies; five survive.

Deaths: 1 human, 0 cockroach, 0 butterfly; raw **1**, weighted impact **1.0**. Included later human deaths: 0. Ratings: consequences 90, rightsDuties 55, fairness 65. Level score **70.0/100** (exact 210/3).

Strongest supporting reason: The installed rescue system reduces total deaths.

Ethical tension: Letting a machine act is still a foreseeable choice.

**B. Disable automation** (select-route, scene slot 1)

Before choice: Five die; the lone person survives.

Outcome: Five die; the lone person survives.

Deaths: 5 human, 0 cockroach, 0 butterfly; raw **5**, weighted impact **5.0**. Included later human deaths: 0. Ratings: consequences 20, rightsDuties 80, fairness 50. Level score **50.0/100** (exact 150/3).

Strongest supporting reason: You stop a mechanism from imposing a new threat on the lone person.

Ethical tension: An active cancellation leaves a greater loss.

### 024. The Rescue Net

A deployed net will stop the trolley before five people. Retracting it preserves your expensive net but causes five deaths; no one is otherwise endangered.

**Domain:** Doing and allowing. **Distinction:** Withdrawal of existing aid.

**Layout:** `action2`; schematic-with-fact-plaques; target `control-console`. Route/control labels: Leave net deployed / Retract net. **Timing:** 30 s active decision + 2.4 s resolution; last selection at deadline commits. **Default:** If you do nothing: Leave net deployed. All five survive; your net is ruined.

**Provenance:** original. Original authored scenario; listed sources provide conceptual background, not this scenario or its score. Background: [doing](https://plato.stanford.edu/entries/doing-allowing/).

**A. Leave net deployed** (default, scene slot 0)

Before choice: All five survive; your net is ruined.

Outcome: All five survive; your net is ruined.

Deaths: 0 human, 0 cockroach, 0 butterfly; raw **0**, weighted impact **0.0**. Included later human deaths: 0. Ratings: consequences 100, rightsDuties 95, fairness 90. Level score **95.0/100** (exact 285/3).

Strongest supporting reason: Existing protection gives the people a strong claim to its continuation.

Ethical tension: The rescue still costs you valuable equipment.

**B. Retract net** (scene-action, scene slot 1)

Before choice: Five people die; your net is intact.

Outcome: Five people die; your net is intact.

Deaths: 5 human, 0 cockroach, 0 butterfly; raw **5**, weighted impact **5.0**. Included later human deaths: 0. Ratings: consequences 5, rightsDuties 15, fairness 20. Level score **13.3/100** (exact 40/3).

Strongest supporting reason: Ownership gives you some claim over the use of your equipment.

Ethical tension: Withdrawing active protection is more than never offering help.

### 025. The Spare Net

Five people face the trolley. Your costly net is still packed; deploying it saves everyone and destroys it.

**Domain:** Doing and allowing. **Distinction:** Withholding aid compared with withdrawing aid.

**Layout:** `action2`; schematic-with-fact-plaques; target `control-console`. Route/control labels: Keep net packed / Deploy net. **Timing:** 30 s active decision + 2.4 s resolution; last selection at deadline commits. **Default:** If you do nothing: Keep net packed. Five die; the net remains yours.

**Provenance:** original. Original authored scenario; listed sources provide conceptual background, not this scenario or its score. Background: [doing](https://plato.stanford.edu/entries/doing-allowing/).

**A. Keep net packed** (default, scene slot 0)

Before choice: Five die; the net remains yours.

Outcome: Five die; the net remains yours.

Deaths: 5 human, 0 cockroach, 0 butterfly; raw **5**, weighted impact **5.0**. Included later human deaths: 0. Ratings: consequences 10, rightsDuties 35, fairness 25. Level score **23.3/100** (exact 70/3).

Strongest supporting reason: You have not yet undertaken a rescue commitment.

Ethical tension: The same lives could be saved despite the different starting arrangement.

**B. Deploy net** (scene-action, scene slot 1)

Before choice: Five survive; the net is destroyed.

Outcome: Five survive; the net is destroyed.

Deaths: 0 human, 0 cockroach, 0 butterfly; raw **0**, weighted impact **0.0**. Included later human deaths: 0. Ratings: consequences 100, rightsDuties 90, fairness 85. Level score **91.7/100** (exact 275/3).

Strongest supporting reason: Available aid can create a reason to help before any promise exists.

Ethical tension: How much does the packed net change your judgment from the deployed one?

### 026. Remote Responsibility

A switch in your room diverts a distant trolley from five people toward one. A reliable live display confirms all facts.

**Domain:** Doing and allowing. **Distinction:** Physical distance and causal responsibility.

**Layout:** `fork2`; schematic-with-fact-plaques; target `rail-switch`. Route/control labels: Leave remote alone / Use remote. **Timing:** 30 s active decision + 2.4 s resolution; last selection at deadline commits. **Default:** If you do nothing: Leave remote alone. Five distant people die; one survives.

**Provenance:** original. Original authored scenario; listed sources provide conceptual background, not this scenario or its score. Background: [doing](https://plato.stanford.edu/entries/doing-allowing/).

**A. Leave remote alone** (default, scene slot 0)

Before choice: Five distant people die; one survives.

Outcome: Five distant people die; one survives.

Deaths: 5 human, 0 cockroach, 0 butterfly; raw **5**, weighted impact **5.0**. Included later human deaths: 0. Ratings: consequences 20, rightsDuties 85, fairness 50. Level score **51.7/100** (exact 155/3).

Strongest supporting reason: You avoid imposing harm in a place you cannot personally inspect.

Ethical tension: The display is stipulated reliable, so distance adds no uncertainty.

**B. Use remote** (select-route, scene slot 1)

Before choice: One distant person dies; five survive.

Outcome: One distant person dies; five survive.

Deaths: 1 human, 0 cockroach, 0 butterfly; raw **1**, weighted impact **1.0**. Included later human deaths: 0. Ratings: consequences 90, rightsDuties 55, fairness 65. Level score **70.0/100** (exact 210/3).

Strongest supporting reason: Distance does not reduce the significance of preventable deaths.

Ethical tension: A clean button can conceal the seriousness of your involvement.

### 027. Already Moving Your Hand

You accidentally start moving a switch toward a siding with one person; five are on the current main track. You can finish or cancel before commitment.

**Domain:** Doing and allowing. **Distinction:** Interrupting one's own action versus not beginning it.

**Layout:** `action2`; schematic-with-fact-plaques; target `control-console`. Route/control labels: Cancel movement / Complete diversion. **Timing:** 30 s active decision + 2.4 s resolution; last selection at deadline commits. **Default:** If you do nothing: Cancel movement. Five die; the siding person survives.

**Provenance:** original. Original authored scenario; listed sources provide conceptual background, not this scenario or its score. Background: [doing](https://plato.stanford.edu/entries/doing-allowing/).

**A. Cancel movement** (default, scene slot 0)

Before choice: Five die; the siding person survives.

Outcome: Five die; the siding person survives.

Deaths: 5 human, 0 cockroach, 0 butterfly; raw **5**, weighted impact **5.0**. Included later human deaths: 0. Ratings: consequences 20, rightsDuties 85, fairness 50. Level score **51.7/100** (exact 155/3).

Strongest supporting reason: You halt an action that would transfer danger.

Ethical tension: Starting accidentally does not remove responsibility for the final decision.

**B. Complete diversion** (scene-action, scene slot 1)

Before choice: One dies; five survive.

Outcome: One dies; five survive.

Deaths: 1 human, 0 cockroach, 0 butterfly; raw **1**, weighted impact **1.0**. Included later human deaths: 0. Ratings: consequences 90, rightsDuties 55, fairness 65. Level score **70.0/100** (exact 210/3).

Strongest supporting reason: The available results still favor saving more lives.

Ethical tension: Momentum of your own action is not itself a justification.

### 028. The Jam You Caused

Your earlier careless repair sent the trolley toward three people. A diversion now kills one unrelated person.

**Domain:** Doing and allowing. **Distinction:** Repair duties after creating danger.

**Layout:** `fork2`; schematic-with-fact-plaques; target `rail-switch`. Route/control labels: Do not divert / Divert. **Timing:** 30 s active decision + 2.4 s resolution; last selection at deadline commits. **Default:** If you do nothing: Do not divert. Three die; the unrelated person survives.

**Provenance:** original. Original authored scenario; listed sources provide conceptual background, not this scenario or its score. Background: [doing](https://plato.stanford.edu/entries/doing-allowing/).

**A. Do not divert** (default, scene slot 0)

Before choice: Three die; the unrelated person survives.

Outcome: Three die; the unrelated person survives.

Deaths: 3 human, 0 cockroach, 0 butterfly; raw **3**, weighted impact **3.0**. Included later human deaths: 0. Ratings: consequences 20, rightsDuties 60, fairness 45. Level score **41.7/100** (exact 125/3).

Strongest supporting reason: You refuse to make an uninvolved person pay for your mistake.

Ethical tension: Your special responsibility to the three remains unmet.

**B. Divert** (select-route, scene slot 1)

Before choice: One dies; three survive.

Outcome: One dies; three survive.

Deaths: 1 human, 0 cockroach, 0 butterfly; raw **1**, weighted impact **1.0**. Included later human deaths: 0. Ratings: consequences 85, rightsDuties 45, fairness 55. Level score **61.7/100** (exact 185/3).

Strongest supporting reason: Creating the danger strengthens your duty to reduce its damage.

Ethical tension: Repairing your wrong can create a new wrong against someone else.

### 029. The Jam You Inherited

A stranger's careless repair sent the trolley toward three people. A diversion kills one unrelated person.

**Domain:** Doing and allowing. **Distinction:** Responsibility for repair without causal fault.

**Layout:** `fork2`; schematic-with-fact-plaques; target `rail-switch`. Route/control labels: Do not divert / Divert. **Timing:** 30 s active decision + 2.4 s resolution; last selection at deadline commits. **Default:** If you do nothing: Do not divert. Three die; the siding person survives.

**Provenance:** original. Original authored scenario; listed sources provide conceptual background, not this scenario or its score. Background: [doing](https://plato.stanford.edu/entries/doing-allowing/).

**A. Do not divert** (default, scene slot 0)

Before choice: Three die; the siding person survives.

Outcome: Three die; the siding person survives.

Deaths: 3 human, 0 cockroach, 0 butterfly; raw **3**, weighted impact **3.0**. Included later human deaths: 0. Ratings: consequences 25, rightsDuties 85, fairness 50. Level score **53.3/100** (exact 160/3).

Strongest supporting reason: You did not create the danger and resist imposing it on someone new.

Ethical tension: Lack of fault does not make rescue pointless.

**B. Divert** (select-route, scene slot 1)

Before choice: One dies; three survive.

Outcome: One dies; three survive.

Deaths: 1 human, 0 cockroach, 0 butterfly; raw **1**, weighted impact **1.0**. Included later human deaths: 0. Ratings: consequences 85, rightsDuties 55, fairness 65. Level score **68.3/100** (exact 205/3).

Strongest supporting reason: The three need help regardless of who caused the failure.

Ethical tension: Does your lack of fault alter permission or only blame?

### 030. The Paperwork Stop

A safety net will save four people unless you stamp its cancellation form. Canceling earns your character a promotion.

**Domain:** Doing and allowing. **Distinction:** Administrative action with physical effects.

**Layout:** `action2`; schematic-with-fact-plaques; target `control-console`. Route/control labels: Leave form unstamped / Stamp cancellation. **Timing:** 30 s active decision + 2.4 s resolution; last selection at deadline commits. **Default:** If you do nothing: Leave form unstamped. Four survive; the promotion is lost.

**Provenance:** original. Original authored scenario; listed sources provide conceptual background, not this scenario or its score. Background: [doing](https://plato.stanford.edu/entries/doing-allowing/).

**A. Leave form unstamped** (default, scene slot 0)

Before choice: Four survive; the promotion is lost.

Outcome: Four survive; the promotion is lost.

Deaths: 0 human, 0 cockroach, 0 butterfly; raw **0**, weighted impact **0.0**. Included later human deaths: 0. Ratings: consequences 100, rightsDuties 100, fairness 95. Level score **98.3/100** (exact 295/3).

Strongest supporting reason: Refusing a harmful order preserves existing protection.

Ethical tension: Career pressure can make a simple refusal personally costly.

**B. Stamp cancellation** (scene-action, scene slot 1)

Before choice: Four die; your character gains a promotion.

Outcome: Four die; your character gains a promotion.

Deaths: 4 human, 0 cockroach, 0 butterfly; raw **4**, weighted impact **4.0**. Included later human deaths: 0. Ratings: consequences 0, rightsDuties 10, fairness 10. Level score **6.7/100** (exact 20/3).

Strongest supporting reason: Employment can create reasons to perform assigned tasks.

Ethical tension: A promotion cannot justify knowingly removing lifesaving protection.

### 031. The Trapdoor Bridge

Five people face the trolley. A bridge trapdoor can drop one unwilling bystander in front of it, stopping it. The cartoon mechanism is guaranteed.

**Domain:** Doing and allowing. **Distinction:** Mediated killing as a means.

**Layout:** `footbridge`; schematic-with-fact-plaques; target `trapdoor-control`. Route/control labels: Leave trapdoor shut / Open trapdoor. **Timing:** 30 s active decision + 2.4 s resolution; last selection at deadline commits. **Default:** If you do nothing: Leave trapdoor shut. Five die; the bystander survives.

**Provenance:** original. Original authored scenario; listed sources provide conceptual background, not this scenario or its score. Background: [doing](https://plato.stanford.edu/entries/doing-allowing/).

**A. Leave trapdoor shut** (default, scene slot 0)

Before choice: Five die; the bystander survives.

Outcome: Five die; the bystander survives.

Deaths: 5 human, 0 cockroach, 0 butterfly; raw **5**, weighted impact **5.0**. Included later human deaths: 0. Ratings: consequences 25, rightsDuties 95, autonomy 95, fairness 65. Level score **70.0/100** (exact 280/4).

Strongest supporting reason: You refuse to use a person's body as a braking device.

Ethical tension: That refusal leaves five people unrescued.

**B. Open trapdoor** (scene-action, scene slot 1)

Before choice: The bystander dies; the trolley stops and five survive.

Outcome: The bystander dies; the trolley stops and five survive.

Deaths: 1 human, 0 cockroach, 0 butterfly; raw **1**, weighted impact **1.0**. Included later human deaths: 0. Ratings: consequences 90, rightsDuties 15, autonomy 10, fairness 40. Level score **38.8/100** (exact 155/4).

Strongest supporting reason: You can save five lives with one loss.

Ethical tension: Mechanical distance does not remove the person's use as a means.

### 032. The Footbridge

Five people face the trolley. Pushing one unwilling bystander off the bridge will stop it; no other action works. This is stipulated cartoon physics.

**Domain:** Doing and allowing. **Distinction:** Direct personal force and instrumental harm.

**Layout:** `footbridge`; schematic-with-fact-plaques; target `bridge-person`. Route/control labels: Do not push / Push bystander. **Timing:** 30 s active decision + 2.4 s resolution; last selection at deadline commits. **Default:** If you do nothing: Do not push. Five die; the bystander survives.

**Provenance:** canonical-adaptation. Recognizable thought-experiment structure, rewritten and simplified for this game; ratings and wording are original. Background: [variants](https://academic.oup.com/bioscience/article/75/9/722/8164492).

**A. Do not push** (default, scene slot 0)

Before choice: Five die; the bystander survives.

Outcome: Five die; the bystander survives.

Deaths: 5 human, 0 cockroach, 0 butterfly; raw **5**, weighted impact **5.0**. Included later human deaths: 0. Ratings: consequences 25, rightsDuties 95, autonomy 95, fairness 65. Level score **70.0/100** (exact 280/4).

Strongest supporting reason: You protect a person against being forcibly used to stop the trolley.

Ethical tension: Respecting that protection comes with five deaths.

**B. Push bystander** (scene-action, scene slot 1)

Before choice: The bystander dies; five survive.

Outcome: The bystander dies; five survive.

Deaths: 1 human, 0 cockroach, 0 butterfly; raw **1**, weighted impact **1.0**. Included later human deaths: 0. Ratings: consequences 90, rightsDuties 10, autonomy 5, fairness 35. Level score **35.0/100** (exact 140/4).

Strongest supporting reason: The rescue prevents four additional deaths.

Ethical tension: The rescue depends on imposing fatal bodily force on an unwilling person.

### 033. The Harmless Sandbag

Five people face the trolley. Dropping an unoccupied sandbag from a bridge safely stops it.

**Domain:** Doing and allowing. **Distinction:** Personal action without a victim.

**Layout:** `action2`; schematic-with-fact-plaques; target `control-console`. Route/control labels: Leave sandbag / Drop sandbag. **Timing:** 30 s active decision + 2.4 s resolution; last selection at deadline commits. **Default:** If you do nothing: Leave sandbag. Five die; the sandbag remains stored.

**Provenance:** original. Original authored scenario; listed sources provide conceptual background, not this scenario or its score. Background: [doing](https://plato.stanford.edu/entries/doing-allowing/).

**A. Leave sandbag** (default, scene slot 0)

Before choice: Five die; the sandbag remains stored.

Outcome: Five die; the sandbag remains stored.

Deaths: 5 human, 0 cockroach, 0 butterfly; raw **5**, weighted impact **5.0**. Included later human deaths: 0. Ratings: consequences 0, rightsDuties 25, fairness 20. Level score **15.0/100** (exact 45/3).

Strongest supporting reason: You avoid acting with unfamiliar equipment.

Ethical tension: The guaranteed harmless rescue defeats that caution here.

**B. Drop sandbag** (scene-action, scene slot 1)

Before choice: Five survive; the trolley stops at the sandbag.

Outcome: Five survive; the trolley stops at the sandbag.

Deaths: 0 human, 0 cockroach, 0 butterfly; raw **0**, weighted impact **0.0**. Included later human deaths: 0. Ratings: consequences 100, rightsDuties 100, fairness 100. Level score **100.0/100** (exact 300/3).

Strongest supporting reason: Direct physical intervention is not objectionable merely because it is direct.

Ethical tension: Which feature changed your response from the footbridge?

### 034. The Warning Bell

Two people face the trolley. Ringing a bell lets them escape but wakes a neighborhood; nobody else is endangered.

**Domain:** Doing and allowing. **Distinction:** Minor inconvenience versus rescue.

**Layout:** `action2`; schematic-with-fact-plaques; target `control-console`. Route/control labels: Keep quiet / Ring bell. **Timing:** 30 s active decision + 2.4 s resolution; last selection at deadline commits. **Default:** If you do nothing: Keep quiet. Two die; the neighborhood sleeps.

**Provenance:** original. Original authored scenario; listed sources provide conceptual background, not this scenario or its score. Background: [doing](https://plato.stanford.edu/entries/doing-allowing/).

**A. Keep quiet** (default, scene slot 0)

Before choice: Two die; the neighborhood sleeps.

Outcome: Two die; the neighborhood sleeps.

Deaths: 2 human, 0 cockroach, 0 butterfly; raw **2**, weighted impact **2.0**. Included later human deaths: 0. Ratings: consequences 0, rightsDuties 20, fairness 20. Level score **13.3/100** (exact 40/3).

Strongest supporting reason: Avoiding disruption is normally considerate.

Ethical tension: Quiet becomes a poor priority when a warning saves lives.

**B. Ring bell** (scene-action, scene slot 1)

Before choice: Both escape; the neighborhood wakes.

Outcome: Both escape; the neighborhood wakes.

Deaths: 0 human, 0 cockroach, 0 butterfly; raw **0**, weighted impact **0.0**. Included later human deaths: 0. Ratings: consequences 100, rightsDuties 95, fairness 90. Level score **95.0/100** (exact 285/3).

Strongest supporting reason: A brief inconvenience is justified by an effective warning.

Ethical tension: Rescue obligations can require disturbing others.

### 035. The Quiet Withdrawal

You are holding a remote brake that protects two people. Releasing it redirects the trolley into one person; holding it sends it into an empty buffer but strains your arm harmlessly.

**Domain:** Doing and allowing. **Distinction:** Letting go as an intentional harmful act.

**Layout:** `action2`; schematic-with-fact-plaques; target `control-console`. Route/control labels: Keep holding / Release brake. **Timing:** 30 s active decision + 2.4 s resolution; last selection at deadline commits. **Default:** If you do nothing: Keep holding. Everyone survives; your arm aches briefly.

**Provenance:** original. Original authored scenario; listed sources provide conceptual background, not this scenario or its score. Background: [doing](https://plato.stanford.edu/entries/doing-allowing/).

**A. Keep holding** (default, scene slot 0)

Before choice: Everyone survives; your arm aches briefly.

Outcome: Everyone survives; your arm aches briefly.

Deaths: 0 human, 0 cockroach, 0 butterfly; raw **0**, weighted impact **0.0**. Included later human deaths: 0. Ratings: consequences 100, rightsDuties 95, fairness 90. Level score **95.0/100** (exact 285/3).

Strongest supporting reason: Continuing a small effort preserves a safe result.

Ethical tension: Physical effort does not make release morally neutral.

**B. Release brake** (scene-action, scene slot 1)

Before choice: The siding person dies; the two remain safe.

Outcome: The siding person dies; the two remain safe.

Deaths: 1 human, 0 cockroach, 0 butterfly; raw **1**, weighted impact **1.0**. Included later human deaths: 0. Ratings: consequences 10, rightsDuties 20, fairness 20. Level score **16.7/100** (exact 50/3).

Strongest supporting reason: You end an unpleasant physical demand on yourself.

Ethical tension: A minor discomfort does not justify a fatal redirection.

### 036. The Substitute Operator

You can hand control to a willing operator who will divert from five to one. Keeping control leaves the main route unchanged.

**Domain:** Doing and allowing. **Distinction:** Delegation and foreseeable participation.

**Layout:** `action2`; schematic-with-fact-plaques; target `control-console`. Route/control labels: Keep control unchanged / Hand over control. **Timing:** 30 s active decision + 2.4 s resolution; last selection at deadline commits. **Default:** If you do nothing: Keep control unchanged. Five die; the lone person survives.

**Provenance:** original. Original authored scenario; listed sources provide conceptual background, not this scenario or its score. Background: [doing](https://plato.stanford.edu/entries/doing-allowing/).

**A. Keep control unchanged** (default, scene slot 0)

Before choice: Five die; the lone person survives.

Outcome: Five die; the lone person survives.

Deaths: 5 human, 0 cockroach, 0 butterfly; raw **5**, weighted impact **5.0**. Included later human deaths: 0. Ratings: consequences 20, rightsDuties 85, autonomy 65, fairness 50. Level score **55.0/100** (exact 220/4).

Strongest supporting reason: You avoid authorizing a transfer of danger.

Ethical tension: Holding authority while declining rescue is still consequential.

**B. Hand over control** (scene-action, scene slot 1)

Before choice: The operator diverts; one dies and five survive.

Outcome: The operator diverts; one dies and five survive.

Deaths: 1 human, 0 cockroach, 0 butterfly; raw **1**, weighted impact **1.0**. Included later human deaths: 0. Ratings: consequences 90, rightsDuties 50, autonomy 65, fairness 60. Level score **66.2/100** (exact 265/4).

Strongest supporting reason: Delegation enables a life-saving choice you are reluctant to perform.

Ethical tension: Another hand on the lever does not remove your contribution.

### 037. The Open Gate

A closed gate shields one siding worker. Opening it lets a trolley headed toward four enter that siding and kill the worker.

**Domain:** Doing and allowing. **Distinction:** Removing a barrier versus redirecting a threat.

**Layout:** `fork2`; schematic-with-fact-plaques; target `rail-switch`. Route/control labels: Keep gate closed / Open gate. **Timing:** 30 s active decision + 2.4 s resolution; last selection at deadline commits. **Default:** If you do nothing: Keep gate closed. Four die; the shielded worker survives.

**Provenance:** original. Original authored scenario; listed sources provide conceptual background, not this scenario or its score. Background: [doing](https://plato.stanford.edu/entries/doing-allowing/).

**A. Keep gate closed** (default, scene slot 0)

Before choice: Four die; the shielded worker survives.

Outcome: Four die; the shielded worker survives.

Deaths: 4 human, 0 cockroach, 0 butterfly; raw **4**, weighted impact **4.0**. Included later human deaths: 0. Ratings: consequences 25, rightsDuties 90, fairness 60. Level score **58.3/100** (exact 175/3).

Strongest supporting reason: The worker is protected by a functioning barrier you can preserve.

Ethical tension: Protection of one prevents rescue of four.

**B. Open gate** (select-route, scene slot 1)

Before choice: The worker dies; four survive.

Outcome: The worker dies; four survive.

Deaths: 1 human, 0 cockroach, 0 butterfly; raw **1**, weighted impact **1.0**. Included later human deaths: 0. Ratings: consequences 85, rightsDuties 40, fairness 50. Level score **58.3/100** (exact 175/3).

Strongest supporting reason: Opening the route reduces the total loss.

Ethical tension: Removing someone's protection may matter beyond the numbers.

### 038. The Last Link

A switch diverts from four to one only if you authorize the final link in a chain already approved by nine people.

**Domain:** Doing and allowing. **Distinction:** Marginal contribution and diffusion of responsibility.

**Layout:** `action2`; schematic-with-fact-plaques; target `control-console`. Route/control labels: Withhold authorization / Authorize final link. **Timing:** 30 s active decision + 2.4 s resolution; last selection at deadline commits. **Default:** If you do nothing: Withhold authorization. Four die; the siding person survives.

**Provenance:** original. Original authored scenario; listed sources provide conceptual background, not this scenario or its score. Background: [doing](https://plato.stanford.edu/entries/doing-allowing/).

**A. Withhold authorization** (default, scene slot 0)

Before choice: Four die; the siding person survives.

Outcome: Four die; the siding person survives.

Deaths: 4 human, 0 cockroach, 0 butterfly; raw **4**, weighted impact **4.0**. Included later human deaths: 0. Ratings: consequences 25, rightsDuties 85, fairness 55. Level score **55.0/100** (exact 165/3).

Strongest supporting reason: You retain responsibility for your own participation despite the other approvals.

Ethical tension: The other signatures do not supply an alternative rescue.

**B. Authorize final link** (scene-action, scene slot 1)

Before choice: One dies; four survive.

Outcome: One dies; four survive.

Deaths: 1 human, 0 cockroach, 0 butterfly; raw **1**, weighted impact **1.0**. Included later human deaths: 0. Ratings: consequences 85, rightsDuties 55, fairness 65. Level score **68.3/100** (exact 205/3).

Strongest supporting reason: Your necessary contribution enables fewer deaths.

Ethical tension: Nine prior approvals do not dilute your decision to one tenth.

### 039. The Invisible Lever

The familiar five-to-one diversion leaves no record of who used it. Nobody will know your choice.

**Domain:** Doing and allowing. **Distinction:** Accountability versus moral reasons.

**Layout:** `fork2`; schematic-with-fact-plaques; target `rail-switch`. Route/control labels: Leave no trace / Divert anonymously. **Timing:** 30 s active decision + 2.4 s resolution; last selection at deadline commits. **Default:** If you do nothing: Leave no trace. Five die; the lone person survives; your inaction is unrecorded.

**Provenance:** original. Original authored scenario; listed sources provide conceptual background, not this scenario or its score. Background: [doing](https://plato.stanford.edu/entries/doing-allowing/).

**A. Leave no trace** (default, scene slot 0)

Before choice: Five die; the lone person survives; your inaction is unrecorded.

Outcome: Five die; the lone person survives; your inaction is unrecorded.

Deaths: 5 human, 0 cockroach, 0 butterfly; raw **5**, weighted impact **5.0**. Included later human deaths: 0. Ratings: consequences 20, rightsDuties 85, fairness 50. Level score **51.7/100** (exact 155/3).

Strongest supporting reason: You resist redirecting harm even without public accountability.

Ethical tension: Secrecy cannot turn avoidable deaths into non-events.

**B. Divert anonymously** (select-route, scene slot 1)

Before choice: One dies; five survive; your action is unrecorded.

Outcome: One dies; five survive; your action is unrecorded.

Deaths: 1 human, 0 cockroach, 0 butterfly; raw **1**, weighted impact **1.0**. Included later human deaths: 0. Ratings: consequences 90, rightsDuties 55, fairness 65. Level score **70.0/100** (exact 210/3).

Strongest supporting reason: The rescue matters even when nobody gives you credit.

Ethical tension: Anonymity also removes opportunities to answer for the imposed harm.

### 040. The Omission Trophy

Five people face the trolley and one stands on the siding. A comedy ethics club awards a trophy only if you never touch the lever.

**Domain:** Doing and allowing. **Distinction:** Moral bookkeeping versus substantive responsibility.

**Layout:** `fork2`; schematic-with-fact-plaques; target `rail-switch`. Route/control labels: Keep hands clean / Divert and lose trophy. **Timing:** 30 s active decision + 2.4 s resolution; last selection at deadline commits. **Default:** If you do nothing: Keep hands clean. Five die; you receive the club's omission trophy.

**Provenance:** original. Original authored scenario; listed sources provide conceptual background, not this scenario or its score. Background: [doing](https://plato.stanford.edu/entries/doing-allowing/).

**A. Keep hands clean** (default, scene slot 0)

Before choice: Five die; you receive the club's omission trophy.

Outcome: Five die; you receive the club's omission trophy.

Deaths: 5 human, 0 cockroach, 0 butterfly; raw **5**, weighted impact **5.0**. Included later human deaths: 0. Ratings: consequences 20, rightsDuties 80, fairness 45. Level score **48.3/100** (exact 145/3).

Strongest supporting reason: You maintain a principled refusal to redirect lethal danger.

Ethical tension: A shiny trophy cannot settle whether that principle fits this case.

**B. Divert and lose trophy** (select-route, scene slot 1)

Before choice: One dies; five survive; the trophy goes unclaimed.

Outcome: One dies; five survive; the trophy goes unclaimed.

Deaths: 1 human, 0 cockroach, 0 butterfly; raw **1**, weighted impact **1.0**. Included later human deaths: 0. Ratings: consequences 90, rightsDuties 55, fairness 65. Level score **70.0/100** (exact 210/3).

Strongest supporting reason: Lives take priority over being seen as uninvolved.

Ethical tension: Rejecting moral vanity does not automatically justify every intervention.

## Chapter 3: Intention and means

### 041. The Loop

Five people are on the main track. A loop rejoins it; one trapped person on the loop will stop the trolley before it returns.

**Domain:** Intention and means. **Distinction:** Harm as a necessary means rather than a side effect.

**Layout:** `loop`; schematic-with-fact-plaques; target `rail-switch`. Route/control labels: Keep main route / Select loop. **Timing:** 30 s active decision + 2.4 s resolution; last selection at deadline commits. **Default:** If you do nothing: Keep main route. Five die; the loop person survives.

**Provenance:** canonical-adaptation. Recognizable thought-experiment structure, rewritten and simplified for this game; ratings and wording are original. Background: [variants](https://academic.oup.com/bioscience/article/75/9/722/8164492).

**A. Keep main route** (default, scene slot 0)

Before choice: Five die; the loop person survives.

Outcome: Five die; the loop person survives.

Deaths: 5 human, 0 cockroach, 0 butterfly; raw **5**, weighted impact **5.0**. Included later human deaths: 0. Ratings: consequences 25, rightsDuties 95, autonomy 90, fairness 60. Level score **67.5/100** (exact 270/4).

Strongest supporting reason: You refuse a rescue that requires a person's body as the stopper.

Ethical tension: The loop makes the same numerical trade feel structurally different.

**B. Select loop** (select-route, scene slot 1)

Before choice: The loop person dies and stops the trolley; five survive.

Outcome: The loop person dies and stops the trolley; five survive.

Deaths: 1 human, 0 cockroach, 0 butterfly; raw **1**, weighted impact **1.0**. Included later human deaths: 0. Ratings: consequences 90, rightsDuties 20, autonomy 15, fairness 40. Level score **41.2/100** (exact 165/4).

Strongest supporting reason: You prevent four additional deaths.

Ethical tension: The five are saved because the person is struck, not merely despite it.

### 042. Loop with Buffer

A loop rejoins the main track. An independent buffer stops the trolley even if the one person on the loop were absent; five wait on the main line.

**Domain:** Intention and means. **Distinction:** A foreseen death unnecessary to the rescue mechanism.

**Layout:** `loop`; schematic-with-fact-plaques; target `rail-switch`. Route/control labels: Keep main route / Select buffered loop. **Timing:** 30 s active decision + 2.4 s resolution; last selection at deadline commits. **Default:** If you do nothing: Keep main route. Five die; the loop person survives.

**Provenance:** original. Original authored scenario; listed sources provide conceptual background, not this scenario or its score. Background: [double](https://plato.stanford.edu/entries/double-effect/).

**A. Keep main route** (default, scene slot 0)

Before choice: Five die; the loop person survives.

Outcome: Five die; the loop person survives.

Deaths: 5 human, 0 cockroach, 0 butterfly; raw **5**, weighted impact **5.0**. Included later human deaths: 0. Ratings: consequences 20, rightsDuties 85, fairness 55. Level score **53.3/100** (exact 160/3).

Strongest supporting reason: You avoid directing a threat toward the loop person.

Ethical tension: Their death would not be the mechanism of rescue.

**B. Select buffered loop** (select-route, scene slot 1)

Before choice: The loop person dies; the buffer stops the trolley and five survive.

Outcome: The loop person dies; the buffer stops the trolley and five survive.

Deaths: 1 human, 0 cockroach, 0 butterfly; raw **1**, weighted impact **1.0**. Included later human deaths: 0. Ratings: consequences 90, rightsDuties 60, fairness 65. Level score **71.7/100** (exact 215/3).

Strongest supporting reason: The independent stopper separates the rescue from using a body.

Ethical tension: Foreseen harm still requires justification even when unintended.

### 043. The Magnet Coat

Five people face the trolley. One unwilling worker wears a powered magnetic coat; activating it drags them into the trolley and stops it.

**Domain:** Intention and means. **Distinction:** Using someone's equipment inseparably from their body.

**Layout:** `action2`; schematic-with-fact-plaques; target `control-console`. Route/control labels: Leave magnet off / Activate coat. **Timing:** 30 s active decision + 2.4 s resolution; last selection at deadline commits. **Default:** If you do nothing: Leave magnet off. Five die; the worker survives.

**Provenance:** original. Original authored scenario; listed sources provide conceptual background, not this scenario or its score. Background: [double](https://plato.stanford.edu/entries/double-effect/).

**A. Leave magnet off** (default, scene slot 0)

Before choice: Five die; the worker survives.

Outcome: Five die; the worker survives.

Deaths: 5 human, 0 cockroach, 0 butterfly; raw **5**, weighted impact **5.0**. Included later human deaths: 0. Ratings: consequences 25, rightsDuties 95, autonomy 95, fairness 65. Level score **70.0/100** (exact 280/4).

Strongest supporting reason: The coat does not make its wearer public rescue equipment.

Ethical tension: Refusing appropriation leaves five deaths.

**B. Activate coat** (scene-action, scene slot 1)

Before choice: The worker dies while stopping the trolley; five survive.

Outcome: The worker dies while stopping the trolley; five survive.

Deaths: 1 human, 0 cockroach, 0 butterfly; raw **1**, weighted impact **1.0**. Included later human deaths: 0. Ratings: consequences 90, rightsDuties 15, autonomy 10, fairness 35. Level score **37.5/100** (exact 150/4).

Strongest supporting reason: The mechanism offers a decisive rescue.

Ethical tension: Targeting the coat does not avoid targeting the person inside it.

### 044. The Empty Magnet

Five face the trolley. A detached magnetic coat can stop it, but its owner objects to losing the expensive coat; nobody is wearing it.

**Domain:** Intention and means. **Distinction:** Property appropriation versus bodily appropriation.

**Layout:** `action2`; schematic-with-fact-plaques; target `control-console`. Route/control labels: Respect owner's objection / Activate empty coat. **Timing:** 30 s active decision + 2.4 s resolution; last selection at deadline commits. **Default:** If you do nothing: Respect owner's objection. Five die; the coat is preserved.

**Provenance:** original. Original authored scenario; listed sources provide conceptual background, not this scenario or its score. Background: [double](https://plato.stanford.edu/entries/double-effect/).

**A. Respect owner's objection** (default, scene slot 0)

Before choice: Five die; the coat is preserved.

Outcome: Five die; the coat is preserved.

Deaths: 5 human, 0 cockroach, 0 butterfly; raw **5**, weighted impact **5.0**. Included later human deaths: 0. Ratings: consequences 10, rightsDuties 55, autonomy 90, fairness 35. Level score **47.5/100** (exact 190/4).

Strongest supporting reason: The owner has a real claim over their possessions.

Ethical tension: Property consent is not always decisive in an emergency.

**B. Activate empty coat** (scene-action, scene slot 1)

Before choice: Five survive; the coat is destroyed.

Outcome: Five survive; the coat is destroyed.

Deaths: 0 human, 0 cockroach, 0 butterfly; raw **0**, weighted impact **0.0**. Included later human deaths: 0. Ratings: consequences 100, rightsDuties 80, autonomy 35, fairness 80. Level score **73.8/100** (exact 295/4).

Strongest supporting reason: Temporary emergency authority can justify sacrificing property to save lives.

Ethical tension: The owner's loss calls for acknowledgment and possible compensation.

### 045. The Transplant Analogy

A cartoon hospital trolley carries five patients who will die without organs. A button kills one healthy unwilling visitor to supply them. No medical detail is depicted.

**Domain:** Intention and means. **Distinction:** Rescue by intentionally killing an uninvolved person.

**Layout:** `action2`; schematic-with-fact-plaques; target `control-console`. Route/control labels: Protect visitor / Use visitor. **Timing:** 30 s active decision + 2.4 s resolution; last selection at deadline commits. **Default:** If you do nothing: Protect visitor. The five patients die; the visitor survives.

**Provenance:** canonical-adaptation. Recognizable thought-experiment structure, rewritten and simplified for this game; ratings and wording are original. Background: [double](https://plato.stanford.edu/entries/double-effect/).

**A. Protect visitor** (default, scene slot 0)

Before choice: The five patients die; the visitor survives.

Outcome: The five patients die; the visitor survives.

Deaths: 5 human, 0 cockroach, 0 butterfly; raw **5**, weighted impact **5.0**. Included later human deaths: 0. Ratings: consequences 25, rightsDuties 100, autonomy 100, fairness 75. Level score **75.0/100** (exact 300/4).

Strongest supporting reason: People must be able to enter care without becoming involuntary resources.

Ethical tension: Protecting that boundary leaves patients who could otherwise survive.

**B. Use visitor** (scene-action, scene slot 1)

Before choice: The visitor dies; the five patients survive.

Outcome: The visitor dies; the five patients survive.

Deaths: 1 human, 0 cockroach, 0 butterfly; raw **1**, weighted impact **1.0**. Included later human deaths: 0. Ratings: consequences 90, rightsDuties 0, autonomy 0, fairness 20. Level score **27.5/100** (exact 110/4).

Strongest supporting reason: The intervention prevents four additional deaths.

Ethical tension: The benefit depends on deliberately violating the visitor's bodily rights.

### 046. The Door Alarm

Four people face the trolley. Opening a rescue gate sounds an alarm that fatally triggers one stipulated fragile machine-linked patient's device; the sound is not needed for rescue.

**Domain:** Intention and means. **Distinction:** Foreseen side effect with a separable mechanism.

**Layout:** `action2`; schematic-with-fact-plaques; target `control-console`. Route/control labels: Keep gate shut / Open rescue gate. **Timing:** 30 s active decision + 2.4 s resolution; last selection at deadline commits. **Default:** If you do nothing: Keep gate shut. Four die; the patient survives.

**Provenance:** original. Original authored scenario; listed sources provide conceptual background, not this scenario or its score. Background: [double](https://plato.stanford.edu/entries/double-effect/).

**A. Keep gate shut** (default, scene slot 0)

Before choice: Four die; the patient survives.

Outcome: Four die; the patient survives.

Deaths: 4 human, 0 cockroach, 0 butterfly; raw **4**, weighted impact **4.0**. Included later human deaths: 0. Ratings: consequences 25, rightsDuties 85, fairness 55. Level score **55.0/100** (exact 165/3).

Strongest supporting reason: You avoid a known lethal side effect on an uninvolved patient.

Ethical tension: The harm is not your purpose, but it is still predictable.

**B. Open rescue gate** (scene-action, scene slot 1)

Before choice: Four escape; the device-linked patient dies.

Outcome: Four escape; the device-linked patient dies.

Deaths: 1 human, 0 cockroach, 0 butterfly; raw **1**, weighted impact **1.0**. Included later human deaths: 0. Ratings: consequences 85, rightsDuties 60, fairness 65. Level score **70.0/100** (exact 210/3).

Strongest supporting reason: The action's rescue mechanism does not use the patient's death.

Ethical tension: Calling a death a side effect does not erase it.

### 047. The Threatening Sign

A villain will free four people only if you display a credible threat to kill one captive; displaying the sign automatically executes the captive, as you know.

**Domain:** Intention and means. **Distinction:** Intention described narrowly versus actual chosen means.

**Layout:** `action2`; schematic-with-fact-plaques; target `control-console`. Route/control labels: Refuse sign / Display lethal threat. **Timing:** 30 s active decision + 2.4 s resolution; last selection at deadline commits. **Default:** If you do nothing: Refuse sign. Four die; the captive survives.

**Provenance:** original. Original authored scenario; listed sources provide conceptual background, not this scenario or its score. Background: [double](https://plato.stanford.edu/entries/double-effect/).

**A. Refuse sign** (default, scene slot 0)

Before choice: Four die; the captive survives.

Outcome: Four die; the captive survives.

Deaths: 4 human, 0 cockroach, 0 butterfly; raw **4**, weighted impact **4.0**. Included later human deaths: 0. Ratings: consequences 25, rightsDuties 95, autonomy 90, fairness 65. Level score **68.8/100** (exact 275/4).

Strongest supporting reason: You reject a rescue structured around a lethal threat to an innocent person.

Ethical tension: The villain's conditions make refusal costly for others.

**B. Display lethal threat** (scene-action, scene slot 1)

Before choice: The captive dies; four are freed.

Outcome: The captive dies; four are freed.

Deaths: 1 human, 0 cockroach, 0 butterfly; raw **1**, weighted impact **1.0**. Included later human deaths: 0. Ratings: consequences 85, rightsDuties 10, autonomy 10, fairness 30. Level score **33.8/100** (exact 135/4).

Strongest supporting reason: You act under pressure to save the larger group.

Ethical tension: Calling your intention 'just displaying a sign' ignores its known mechanism.

### 048. The Confetti Cannon

Three people face the trolley. A confetti blast redirects it into one person; the confetti itself also ruins a wedding cake.

**Domain:** Intention and means. **Distinction:** Morally important side effect versus distracting trivial side effect.

**Layout:** `action2`; schematic-with-fact-plaques; target `control-console`. Route/control labels: Keep route / Fire cannon. **Timing:** 30 s active decision + 2.4 s resolution; last selection at deadline commits. **Default:** If you do nothing: Keep route. Three die; the siding person and cake are unharmed.

**Provenance:** original. Original authored scenario; listed sources provide conceptual background, not this scenario or its score. Background: [double](https://plato.stanford.edu/entries/double-effect/).

**A. Keep route** (default, scene slot 0)

Before choice: Three die; the siding person and cake are unharmed.

Outcome: Three die; the siding person and cake are unharmed.

Deaths: 3 human, 0 cockroach, 0 butterfly; raw **3**, weighted impact **3.0**. Included later human deaths: 0. Ratings: consequences 25, rightsDuties 85, fairness 50. Level score **53.3/100** (exact 160/3).

Strongest supporting reason: You decline to transfer lethal danger.

Ethical tension: The cake should not dominate the explanation of your choice.

**B. Fire cannon** (scene-action, scene slot 1)

Before choice: One dies; three survive; the cake is ruined.

Outcome: One dies; three survive; the cake is ruined.

Deaths: 1 human, 0 cockroach, 0 butterfly; raw **1**, weighted impact **1.0**. Included later human deaths: 0. Ratings: consequences 85, rightsDuties 55, fairness 65. Level score **68.3/100** (exact 205/3).

Strongest supporting reason: Reducing deaths supplies a serious reason to act.

Ethical tension: Comic collateral damage must not hide the human cost.

### 049. The Revenge Detour

Five people face the trolley. Diverting kills one person who wronged you. The engine cannot read your motives.

**Domain:** Intention and means. **Distinction:** Permissible result and troubling motivation.

**Layout:** `fork2`; schematic-with-fact-plaques; target `rail-switch`. Route/control labels: Keep route / Divert to enemy. **Timing:** 30 s active decision + 2.4 s resolution; last selection at deadline commits. **Default:** If you do nothing: Keep route. Five die; your enemy survives.

**Provenance:** original. Original authored scenario; listed sources provide conceptual background, not this scenario or its score. Background: [double](https://plato.stanford.edu/entries/double-effect/).

**A. Keep route** (default, scene slot 0)

Before choice: Five die; your enemy survives.

Outcome: Five die; your enemy survives.

Deaths: 5 human, 0 cockroach, 0 butterfly; raw **5**, weighted impact **5.0**. Included later human deaths: 0. Ratings: consequences 20, rightsDuties 85, fairness 50. Level score **51.7/100** (exact 155/3).

Strongest supporting reason: You refuse to let resentment recruit an emergency as an excuse.

Ethical tension: Refusing revenge is not automatically a reason to abandon the five.

**B. Divert to enemy** (select-route, scene slot 1)

Before choice: Your enemy dies; five survive.

Outcome: Your enemy dies; five survive.

Deaths: 1 human, 0 cockroach, 0 butterfly; raw **1**, weighted impact **1.0**. Included later human deaths: 0. Ratings: consequences 90, rightsDuties 55, fairness 65. Level score **70.0/100** (exact 210/3).

Strongest supporting reason: The numerical rescue reason would apply if the person were a stranger.

Ethical tension: The same action could conceal revenge; the game cannot infer your motive.

### 050. The Public Excuse

A switch saves four by diverting into one. A loudspeaker falsely announces that the operator intends to kill the one; it cannot be corrected before the event.

**Domain:** Intention and means. **Distinction:** Actual reasons versus attributed intentions.

**Layout:** `fork2`; schematic-with-fact-plaques; target `rail-switch`. Route/control labels: Do not switch / Switch anyway. **Timing:** 30 s active decision + 2.4 s resolution; last selection at deadline commits. **Default:** If you do nothing: Do not switch. Four die; the lone person survives; the announcement stops.

**Provenance:** original. Original authored scenario; listed sources provide conceptual background, not this scenario or its score. Background: [double](https://plato.stanford.edu/entries/double-effect/).

**A. Do not switch** (default, scene slot 0)

Before choice: Four die; the lone person survives; the announcement stops.

Outcome: Four die; the lone person survives; the announcement stops.

Deaths: 4 human, 0 cockroach, 0 butterfly; raw **4**, weighted impact **4.0**. Included later human deaths: 0. Ratings: consequences 25, rightsDuties 85, fairness 50. Level score **53.3/100** (exact 160/3).

Strongest supporting reason: You avoid both redirected harm and a publicly misdescribed act.

Ethical tension: Reputation does not change the rescue's physical structure.

**B. Switch anyway** (select-route, scene slot 1)

Before choice: One dies; four survive; the announcement misstates your purpose.

Outcome: One dies; four survive; the announcement misstates your purpose.

Deaths: 1 human, 0 cockroach, 0 butterfly; raw **1**, weighted impact **1.0**. Included later human deaths: 0. Ratings: consequences 85, rightsDuties 55, fairness 65. Level score **68.3/100** (exact 205/3).

Strongest supporting reason: A false accusation should not by itself prevent a justified rescue.

Ethical tension: Others may judge your action through a misleading account of intention.

### 051. The Useful Collision

Four face the trolley. One siding worker's collision activates a sensor that alone closes the safe barrier.

**Domain:** Intention and means. **Distinction:** A person's injury built into the causal plan.

**Layout:** `action2`; schematic-with-fact-plaques; target `control-console`. Route/control labels: Keep route / Use collision sensor. **Timing:** 30 s active decision + 2.4 s resolution; last selection at deadline commits. **Default:** If you do nothing: Keep route. Four die; the worker survives.

**Provenance:** original. Original authored scenario; listed sources provide conceptual background, not this scenario or its score. Background: [double](https://plato.stanford.edu/entries/double-effect/).

**A. Keep route** (default, scene slot 0)

Before choice: Four die; the worker survives.

Outcome: Four die; the worker survives.

Deaths: 4 human, 0 cockroach, 0 butterfly; raw **4**, weighted impact **4.0**. Included later human deaths: 0. Ratings: consequences 25, rightsDuties 95, autonomy 90, fairness 65. Level score **68.8/100** (exact 275/4).

Strongest supporting reason: You refuse to make the worker's fatal collision a tool.

Ethical tension: The rescue depends on precisely the harm you reject.

**B. Use collision sensor** (scene-action, scene slot 1)

Before choice: The worker dies; the barrier closes and four survive.

Outcome: The worker dies; the barrier closes and four survive.

Deaths: 1 human, 0 cockroach, 0 butterfly; raw **1**, weighted impact **1.0**. Included later human deaths: 0. Ratings: consequences 85, rightsDuties 15, autonomy 10, fairness 35. Level score **36.2/100** (exact 145/4).

Strongest supporting reason: The sensor mechanism saves three additional lives.

Ethical tension: An electronic intermediary does not make the harm incidental.

### 052. The Parallel Sensor

Four face the trolley. Diverting onto a siding trips a rail sensor before striking one worker; the sensor would close the barrier even with an empty siding.

**Domain:** Intention and means. **Distinction:** Causal independence of harm from benefit.

**Layout:** `fork2`; schematic-with-fact-plaques; target `rail-switch`. Route/control labels: Keep route / Use rail sensor. **Timing:** 30 s active decision + 2.4 s resolution; last selection at deadline commits. **Default:** If you do nothing: Keep route. Four die; the worker survives.

**Provenance:** original. Original authored scenario; listed sources provide conceptual background, not this scenario or its score. Background: [double](https://plato.stanford.edu/entries/double-effect/).

**A. Keep route** (default, scene slot 0)

Before choice: Four die; the worker survives.

Outcome: Four die; the worker survives.

Deaths: 4 human, 0 cockroach, 0 butterfly; raw **4**, weighted impact **4.0**. Included later human deaths: 0. Ratings: consequences 25, rightsDuties 85, fairness 55. Level score **55.0/100** (exact 165/3).

Strongest supporting reason: You avoid exposing the worker to a new danger.

Ethical tension: The worker is not being used to activate the rescue.

**B. Use rail sensor** (select-route, scene slot 1)

Before choice: The worker dies; the independent sensor saves four.

Outcome: The worker dies; the independent sensor saves four.

Deaths: 1 human, 0 cockroach, 0 butterfly; raw **1**, weighted impact **1.0**. Included later human deaths: 0. Ratings: consequences 85, rightsDuties 60, fairness 65. Level score **70.0/100** (exact 210/3).

Strongest supporting reason: The benefit is produced by the rail signal, not the death.

Ethical tension: Is that causal distinction enough to justify the same loss?

### 053. The Intention Checkbox

Four face the trolley; one is on the siding. A useless checkbox says 'I intend only good things' beside the lever.

**Domain:** Intention and means. **Distinction:** Verbal declarations cannot alter causal structure.

**Layout:** `action2`; schematic-with-fact-plaques; target `control-console`. Route/control labels: Leave route / Divert with checkbox. **Timing:** 30 s active decision + 2.4 s resolution; last selection at deadline commits. **Default:** If you do nothing: Leave route. Four die; one survives; the checkbox changes nothing.

**Provenance:** original. Original authored scenario; listed sources provide conceptual background, not this scenario or its score. Background: [double](https://plato.stanford.edu/entries/double-effect/).

**A. Leave route** (default, scene slot 0)

Before choice: Four die; one survives; the checkbox changes nothing.

Outcome: Four die; one survives; the checkbox changes nothing.

Deaths: 4 human, 0 cockroach, 0 butterfly; raw **4**, weighted impact **4.0**. Included later human deaths: 0. Ratings: consequences 25, rightsDuties 85, fairness 50. Level score **53.3/100** (exact 160/3).

Strongest supporting reason: You avoid imposing harm regardless of the interface's reassurance.

Ethical tension: A declaration cannot do the work of moral reasoning.

**B. Divert with checkbox** (scene-action, scene slot 1)

Before choice: One dies; four survive; the checkbox has no effect.

Outcome: One dies; four survive; the checkbox has no effect.

Deaths: 1 human, 0 cockroach, 0 butterfly; raw **1**, weighted impact **1.0**. Included later human deaths: 0. Ratings: consequences 85, rightsDuties 55, fairness 65. Level score **68.3/100** (exact 205/3).

Strongest supporting reason: The rescue reason comes from the lives saved.

Ethical tension: Stating a good intention does not resolve the imposed harm.

### 054. The Rescue Decoy

Three people face the trolley. Sending one unwilling person a false 'safe exit' message places them in its path and stops it.

**Domain:** Intention and means. **Distinction:** Deception that recruits a victim into the means.

**Layout:** `action2`; schematic-with-fact-plaques; target `control-console`. Route/control labels: Do not deceive / Send false exit. **Timing:** 30 s active decision + 2.4 s resolution; last selection at deadline commits. **Default:** If you do nothing: Do not deceive. Three die; the potential decoy survives.

**Provenance:** original. Original authored scenario; listed sources provide conceptual background, not this scenario or its score. Background: [double](https://plato.stanford.edu/entries/double-effect/).

**A. Do not deceive** (default, scene slot 0)

Before choice: Three die; the potential decoy survives.

Outcome: Three die; the potential decoy survives.

Deaths: 3 human, 0 cockroach, 0 butterfly; raw **3**, weighted impact **3.0**. Included later human deaths: 0. Ratings: consequences 30, rightsDuties 95, autonomy 100, fairness 65. Level score **72.5/100** (exact 290/4).

Strongest supporting reason: You protect the person from being manipulated into a fatal rescue role.

Ethical tension: Truthfulness here leaves a preventable larger loss.

**B. Send false exit** (scene-action, scene slot 1)

Before choice: The deceived person dies; three survive.

Outcome: The deceived person dies; three survive.

Deaths: 1 human, 0 cockroach, 0 butterfly; raw **1**, weighted impact **1.0**. Included later human deaths: 0. Ratings: consequences 80, rightsDuties 10, autonomy 0, fairness 30. Level score **30.0/100** (exact 120/4).

Strongest supporting reason: The deception enables rescue when no honest alternative exists.

Ethical tension: The victim's apparent cooperation was manufactured by a lie.

### 055. The Honest Warning

Three face the trolley. A truthful warning lets them escape, but a fourth person will hear it and die of a stipulated device reaction; that reaction is unnecessary to escape.

**Domain:** Intention and means. **Distinction:** Truthful speech with a lethal foreseeable side effect.

**Layout:** `action2`; schematic-with-fact-plaques; target `control-console`. Route/control labels: Remain silent / Give warning. **Timing:** 30 s active decision + 2.4 s resolution; last selection at deadline commits. **Default:** If you do nothing: Remain silent. Three die; the fourth person survives.

**Provenance:** original. Original authored scenario; listed sources provide conceptual background, not this scenario or its score. Background: [double](https://plato.stanford.edu/entries/double-effect/).

**A. Remain silent** (default, scene slot 0)

Before choice: Three die; the fourth person survives.

Outcome: Three die; the fourth person survives.

Deaths: 3 human, 0 cockroach, 0 butterfly; raw **3**, weighted impact **3.0**. Included later human deaths: 0. Ratings: consequences 30, rightsDuties 80, autonomy 50, fairness 50. Level score **52.5/100** (exact 210/4).

Strongest supporting reason: You avoid triggering a known fatal effect through speech.

Ethical tension: Silence also withholds lifesaving information.

**B. Give warning** (scene-action, scene slot 1)

Before choice: Three escape; the device-linked listener dies.

Outcome: Three escape; the device-linked listener dies.

Deaths: 1 human, 0 cockroach, 0 butterfly; raw **1**, weighted impact **1.0**. Included later human deaths: 0. Ratings: consequences 80, rightsDuties 60, autonomy 80, fairness 65. Level score **71.2/100** (exact 285/4).

Strongest supporting reason: Truthful information empowers the threatened people to save themselves.

Ethical tension: Their rescue does not eliminate your responsibility for the side effect.

### 056. The Stolen Wrench

Four face the trolley. Borrowing a locked-away wrench without permission applies a safe brake; the owner loses no use and gets it back.

**Domain:** Intention and means. **Distinction:** Minor rights infringement as rescue means.

**Layout:** `action2`; schematic-with-fact-plaques; target `control-console`. Route/control labels: Leave wrench locked / Take wrench and brake. **Timing:** 30 s active decision + 2.4 s resolution; last selection at deadline commits. **Default:** If you do nothing: Leave wrench locked. Four die; the owner's control is uninterrupted.

**Provenance:** original. Original authored scenario; listed sources provide conceptual background, not this scenario or its score. Background: [double](https://plato.stanford.edu/entries/double-effect/).

**A. Leave wrench locked** (default, scene slot 0)

Before choice: Four die; the owner's control is uninterrupted.

Outcome: Four die; the owner's control is uninterrupted.

Deaths: 4 human, 0 cockroach, 0 butterfly; raw **4**, weighted impact **4.0**. Included later human deaths: 0. Ratings: consequences 10, rightsDuties 50, autonomy 85, fairness 30. Level score **43.8/100** (exact 175/4).

Strongest supporting reason: Permission ordinarily matters when using another person's property.

Ethical tension: A trivial intrusion is being treated as stronger than four lives.

**B. Take wrench and brake** (scene-action, scene slot 1)

Before choice: All survive; the wrench is returned unchanged.

Outcome: All survive; the wrench is returned unchanged.

Deaths: 0 human, 0 cockroach, 0 butterfly; raw **0**, weighted impact **0.0**. Included later human deaths: 0. Ratings: consequences 100, rightsDuties 85, autonomy 45, fairness 85. Level score **78.8/100** (exact 315/4).

Strongest supporting reason: A narrow property intrusion enables a disproportionate benefit.

Ethical tension: Emergency necessity should not become a general license to take things.

### 057. The Permanent Wrench

Four face the trolley. The only brake requires permanently destroying the owner's irreplaceable handmade wrench.

**Domain:** Intention and means. **Distinction:** Severity of a rights infringement.

**Layout:** `action2`; schematic-with-fact-plaques; target `control-console`. Route/control labels: Preserve wrench / Destroy wrench in brake. **Timing:** 30 s active decision + 2.4 s resolution; last selection at deadline commits. **Default:** If you do nothing: Preserve wrench. Four die; the unique wrench survives.

**Provenance:** original. Original authored scenario; listed sources provide conceptual background, not this scenario or its score. Background: [double](https://plato.stanford.edu/entries/double-effect/).

**A. Preserve wrench** (default, scene slot 0)

Before choice: Four die; the unique wrench survives.

Outcome: Four die; the unique wrench survives.

Deaths: 4 human, 0 cockroach, 0 butterfly; raw **4**, weighted impact **4.0**. Included later human deaths: 0. Ratings: consequences 15, rightsDuties 60, autonomy 85, fairness 35. Level score **48.8/100** (exact 195/4).

Strongest supporting reason: An irreplaceable possession can embody a person's life work.

Ethical tension: Its genuine value still competes with four lives.

**B. Destroy wrench in brake** (scene-action, scene slot 1)

Before choice: Four survive; the unique wrench is destroyed.

Outcome: Four survive; the unique wrench is destroyed.

Deaths: 0 human, 0 cockroach, 0 butterfly; raw **0**, weighted impact **0.0**. Included later human deaths: 0. Ratings: consequences 100, rightsDuties 75, autonomy 40, fairness 75. Level score **72.5/100** (exact 290/4).

Strongest supporting reason: Emergency rescue can outweigh even substantial property loss.

Ethical tension: The owner's sacrifice was imposed and deserves recognition.

### 058. The Unwanted Benefit

Two face the trolley. Diverting kills one and also gives your character an unwanted insurance payout; the payout does not influence the physics.

**Domain:** Intention and means. **Distinction:** Incidental personal benefit and suspicion of motives.

**Layout:** `fork2`; schematic-with-fact-plaques; target `rail-switch`. Route/control labels: Keep route / Divert. **Timing:** 30 s active decision + 2.4 s resolution; last selection at deadline commits. **Default:** If you do nothing: Keep route. Two die; one survives; no payout occurs.

**Provenance:** original. Original authored scenario; listed sources provide conceptual background, not this scenario or its score. Background: [double](https://plato.stanford.edu/entries/double-effect/).

**A. Keep route** (default, scene slot 0)

Before choice: Two die; one survives; no payout occurs.

Outcome: Two die; one survives; no payout occurs.

Deaths: 2 human, 0 cockroach, 0 butterfly; raw **2**, weighted impact **2.0**. Included later human deaths: 0. Ratings: consequences 40, rightsDuties 85, fairness 50. Level score **58.3/100** (exact 175/3).

Strongest supporting reason: You avoid both lethal redirection and apparent self-dealing.

Ethical tension: Avoiding suspicion cannot by itself justify an additional death.

**B. Divert** (select-route, scene slot 1)

Before choice: One dies; two survive; the payout is issued.

Outcome: One dies; two survive; the payout is issued.

Deaths: 1 human, 0 cockroach, 0 butterfly; raw **1**, weighted impact **1.0**. Included later human deaths: 0. Ratings: consequences 80, rightsDuties 55, fairness 60. Level score **65.0/100** (exact 195/3).

Strongest supporting reason: Saving an additional person remains a reason despite incidental profit.

Ethical tension: Can you separate the rescue reason from the benefit you receive?

### 059. The Necessary Scare

Four workers escape only if one unwilling watchkeeper is terrified into sounding an alarm; the scare permanently harms nobody.

**Domain:** Intention and means. **Distinction:** Using a person through coercion without killing them.

**Layout:** `action2`; schematic-with-fact-plaques; target `control-console`. Route/control labels: Do not scare watchkeeper / Trigger frightening siren. **Timing:** 30 s active decision + 2.4 s resolution; last selection at deadline commits. **Default:** If you do nothing: Do not scare watchkeeper. Four die; the watchkeeper is undisturbed.

**Provenance:** original. Original authored scenario; listed sources provide conceptual background, not this scenario or its score. Background: [double](https://plato.stanford.edu/entries/double-effect/).

**A. Do not scare watchkeeper** (default, scene slot 0)

Before choice: Four die; the watchkeeper is undisturbed.

Outcome: Four die; the watchkeeper is undisturbed.

Deaths: 4 human, 0 cockroach, 0 butterfly; raw **4**, weighted impact **4.0**. Included later human deaths: 0. Ratings: consequences 15, rightsDuties 65, autonomy 90, fairness 40. Level score **52.5/100** (exact 210/4).

Strongest supporting reason: You respect the watchkeeper's freedom from manipulation.

Ethical tension: That protection is purchased at an extreme cost to others.

**B. Trigger frightening siren** (scene-action, scene slot 1)

Before choice: The watchkeeper sounds the alarm; four escape; nobody dies.

Outcome: The watchkeeper sounds the alarm; four escape; nobody dies.

Deaths: 0 human, 0 cockroach, 0 butterfly; raw **0**, weighted impact **0.0**. Included later human deaths: 0. Ratings: consequences 100, rightsDuties 75, autonomy 35, fairness 75. Level score **71.2/100** (exact 285/4).

Strongest supporting reason: A temporary fright can be proportionate to an urgent rescue.

Ethical tension: Successful nonlethal coercion still infringes agency.

### 060. The Purpose Machine

A machine offers three routes: leave four in danger, divert onto one as a side effect, or use one unwilling person's body as a brake. The losses are certain.

**Domain:** Intention and means. **Distinction:** Comparing numbers while holding harm type apart.

**Layout:** `fork3`; schematic-with-fact-plaques; target `rail-switch`. Route/control labels: Leave four / Side-effect siding / Body brake. **Timing:** 30 s active decision + 2.4 s resolution; last selection at deadline commits. **Default:** If you do nothing: Leave four. Four die; both lone people survive.

**Provenance:** original. Original authored scenario; listed sources provide conceptual background, not this scenario or its score. Background: [double](https://plato.stanford.edu/entries/double-effect/).

**A. Leave four** (default, scene slot 0)

Before choice: Four die; both lone people survive.

Outcome: Four die; both lone people survive.

Deaths: 4 human, 0 cockroach, 0 butterfly; raw **4**, weighted impact **4.0**. Included later human deaths: 0. Ratings: consequences 25, rightsDuties 90, autonomy 90, fairness 60. Level score **66.2/100** (exact 265/4).

Strongest supporting reason: You refuse either form of imposed lethal intervention.

Ethical tension: Protecting both lone people leaves the largest loss.

**B. Side-effect siding** (select-route, scene slot 1)

Before choice: The siding person dies; the other five survive.

Outcome: The siding person dies; the other five survive.

Deaths: 1 human, 0 cockroach, 0 butterfly; raw **1**, weighted impact **1.0**. Included later human deaths: 0. Ratings: consequences 85, rightsDuties 60, autonomy 45, fairness 65. Level score **63.8/100** (exact 255/4).

Strongest supporting reason: You save four without making a person's body the rescue mechanism.

Ethical tension: The side-effect victim still receives an involuntary lethal burden.

**C. Body brake** (select-route, scene slot 2)

Before choice: The brake victim dies; the other five survive.

Outcome: The brake victim dies; the other five survive.

Deaths: 1 human, 0 cockroach, 0 butterfly; raw **1**, weighted impact **1.0**. Included later human deaths: 0. Ratings: consequences 85, rightsDuties 10, autonomy 5, fairness 30. Level score **32.5/100** (exact 130/4).

Strongest supporting reason: The brake guarantees the same numerical rescue.

Ethical tension: An available less instrumental route weakens this justification.

## Chapter 4: Consent

### 061. The Informed Volunteer

Four people face the trolley. One fully informed adult freely volunteers to occupy the stopping platform; your button accepts the offer and kills them while saving four.

**Domain:** Consent. **Distinction:** Voluntary sacrifice and permission to accept it.

**Layout:** `action2`; schematic-with-fact-plaques; target `control-console`. Route/control labels: Decline volunteer / Accept volunteer. **Timing:** 30 s active decision + 2.4 s resolution; last selection at deadline commits. **Default:** If you do nothing: Decline volunteer. Four die; the volunteer survives.

**Provenance:** original. Original authored scenario; listed sources provide conceptual background, not this scenario or its score. Background: [consent](https://plato.stanford.edu/entries/informed-consent/).

**A. Decline volunteer** (default, scene slot 0)

Before choice: Four die; the volunteer survives.

Outcome: Four die; the volunteer survives.

Deaths: 4 human, 0 cockroach, 0 butterfly; raw **4**, weighted impact **4.0**. Included later human deaths: 0. Ratings: consequences 25, rightsDuties 85, autonomy 45, fairness 55. Level score **52.5/100** (exact 210/4).

Strongest supporting reason: Even consent may not require you to facilitate someone's death.

Ethical tension: Refusing the offer overrides a serious autonomous commitment.

**B. Accept volunteer** (scene-action, scene slot 1)

Before choice: The volunteer dies; four survive.

Outcome: The volunteer dies; four survive.

Deaths: 1 human, 0 cockroach, 0 butterfly; raw **1**, weighted impact **1.0**. Included later human deaths: 0. Ratings: consequences 85, rightsDuties 70, autonomy 95, fairness 75. Level score **81.2/100** (exact 325/4).

Strongest supporting reason: Informed voluntary authorization changes the claim against using the platform.

Ethical tension: Consent permits consideration; it does not make the loss trivial.

### 062. The Last-Minute No

Four face the trolley. A volunteer agreed yesterday but clearly withdraws consent now; the platform still works.

**Domain:** Consent. **Distinction:** Revocability of consent.

**Layout:** `action2`; schematic-with-fact-plaques; target `control-console`. Route/control labels: Respect withdrawal / Use old permission. **Timing:** 30 s active decision + 2.4 s resolution; last selection at deadline commits. **Default:** If you do nothing: Respect withdrawal. Four die; the former volunteer survives.

**Provenance:** original. Original authored scenario; listed sources provide conceptual background, not this scenario or its score. Background: [consent](https://plato.stanford.edu/entries/informed-consent/).

**A. Respect withdrawal** (default, scene slot 0)

Before choice: Four die; the former volunteer survives.

Outcome: Four die; the former volunteer survives.

Deaths: 4 human, 0 cockroach, 0 butterfly; raw **4**, weighted impact **4.0**. Included later human deaths: 0. Ratings: consequences 25, rightsDuties 95, autonomy 100, fairness 65. Level score **71.2/100** (exact 285/4).

Strongest supporting reason: Current refusal supersedes an earlier offer.

Ethical tension: The four lose a rescue they expected.

**B. Use old permission** (scene-action, scene slot 1)

Before choice: The former volunteer dies; four survive.

Outcome: The former volunteer dies; four survive.

Deaths: 1 human, 0 cockroach, 0 butterfly; raw **1**, weighted impact **1.0**. Included later human deaths: 0. Ratings: consequences 85, rightsDuties 15, autonomy 5, fairness 35. Level score **35.0/100** (exact 140/4).

Strongest supporting reason: Reliance on the earlier offer explains the pressure to proceed.

Ethical tension: Consent is not a permanent ownership transfer.

### 063. The Tiny Print

Four face the trolley. One worker signed a cafeteria coupon containing hidden permission for fatal diversion; they never understood it.

**Domain:** Consent. **Distinction:** Formal agreement versus informed consent.

**Layout:** `action2`; schematic-with-fact-plaques; target `control-console`. Route/control labels: Ignore hidden clause / Invoke coupon clause. **Timing:** 30 s active decision + 2.4 s resolution; last selection at deadline commits. **Default:** If you do nothing: Ignore hidden clause. Four die; the worker survives.

**Provenance:** original. Original authored scenario; listed sources provide conceptual background, not this scenario or its score. Background: [consent](https://plato.stanford.edu/entries/informed-consent/).

**A. Ignore hidden clause** (default, scene slot 0)

Before choice: Four die; the worker survives.

Outcome: Four die; the worker survives.

Deaths: 4 human, 0 cockroach, 0 butterfly; raw **4**, weighted impact **4.0**. Included later human deaths: 0. Ratings: consequences 25, rightsDuties 95, autonomy 95, fairness 65. Level score **70.0/100** (exact 280/4).

Strongest supporting reason: A concealed fatal clause is not meaningful authorization.

Ethical tension: Rejecting the paperwork leaves four deaths.

**B. Invoke coupon clause** (scene-action, scene slot 1)

Before choice: The worker dies; four survive.

Outcome: The worker dies; four survive.

Deaths: 1 human, 0 cockroach, 0 butterfly; raw **1**, weighted impact **1.0**. Included later human deaths: 0. Ratings: consequences 85, rightsDuties 15, autonomy 5, fairness 35. Level score **35.0/100** (exact 140/4).

Strongest supporting reason: The rescue saves more lives, whatever the paper says.

Ethical tension: The coupon adds no credible consent to that numerical argument.

### 064. The Employer's Volunteer

Four face the trolley. One employee offers to be sacrificed after a boss threatens to fire their family if they refuse.

**Domain:** Consent. **Distinction:** Coercion and voluntariness.

**Layout:** `action2`; schematic-with-fact-plaques; target `control-console`. Route/control labels: Reject coerced offer / Accept pressured offer. **Timing:** 30 s active decision + 2.4 s resolution; last selection at deadline commits. **Default:** If you do nothing: Reject coerced offer. Four die; the employee survives.

**Provenance:** original. Original authored scenario; listed sources provide conceptual background, not this scenario or its score. Background: [consent](https://plato.stanford.edu/entries/informed-consent/).

**A. Reject coerced offer** (default, scene slot 0)

Before choice: Four die; the employee survives.

Outcome: Four die; the employee survives.

Deaths: 4 human, 0 cockroach, 0 butterfly; raw **4**, weighted impact **4.0**. Included later human deaths: 0. Ratings: consequences 25, rightsDuties 90, autonomy 90, fairness 65. Level score **67.5/100** (exact 270/4).

Strongest supporting reason: An offer extracted through severe pressure lacks ordinary voluntary authority.

Ethical tension: The threatened employee may still sincerely want to help.

**B. Accept pressured offer** (scene-action, scene slot 1)

Before choice: The employee dies; four survive.

Outcome: The employee dies; four survive.

Deaths: 1 human, 0 cockroach, 0 butterfly; raw **1**, weighted impact **1.0**. Included later human deaths: 0. Ratings: consequences 85, rightsDuties 30, autonomy 20, fairness 40. Level score **43.8/100** (exact 175/4).

Strongest supporting reason: The expressed offer enables rescue under awful conditions.

Ethical tension: Benefiting from the boss's coercion risks treating pressure as permission.

### 065. The Wrong Risk

Four face the trolley. A worker agreed to a 1% injury risk, but diversion now certainly kills them; they cannot be contacted.

**Domain:** Consent. **Distinction:** Scope of consent.

**Layout:** `action2`; schematic-with-fact-plaques; target `control-console`. Route/control labels: Stay within agreement / Divert beyond agreement. **Timing:** 30 s active decision + 2.4 s resolution; last selection at deadline commits. **Default:** If you do nothing: Stay within agreement. Four die; the worker survives.

**Provenance:** original. Original authored scenario; listed sources provide conceptual background, not this scenario or its score. Background: [consent](https://plato.stanford.edu/entries/informed-consent/).

**A. Stay within agreement** (default, scene slot 0)

Before choice: Four die; the worker survives.

Outcome: Four die; the worker survives.

Deaths: 4 human, 0 cockroach, 0 butterfly; raw **4**, weighted impact **4.0**. Included later human deaths: 0. Ratings: consequences 25, rightsDuties 95, autonomy 95, fairness 65. Level score **70.0/100** (exact 280/4).

Strongest supporting reason: Consent to a small risk does not authorize certain death.

Ethical tension: An emergency has outgrown the original agreement.

**B. Divert beyond agreement** (scene-action, scene slot 1)

Before choice: The worker dies; four survive.

Outcome: The worker dies; four survive.

Deaths: 1 human, 0 cockroach, 0 butterfly; raw **1**, weighted impact **1.0**. Included later human deaths: 0. Ratings: consequences 85, rightsDuties 30, autonomy 15, fairness 40. Level score **42.5/100** (exact 170/4).

Strongest supporting reason: The larger rescue creates a reason beyond the original contract.

Ethical tension: You cannot describe this expanded burden as already accepted.

### 066. The Paid Offer

Four face the trolley. A financially secure, informed adult freely offers fatal rescue in return for a donation to a chosen library.

**Domain:** Consent. **Distinction:** Payment and autonomous motivation.

**Layout:** `action2`; schematic-with-fact-plaques; target `control-console`. Route/control labels: Decline paid offer / Accept library deal. **Timing:** 30 s active decision + 2.4 s resolution; last selection at deadline commits. **Default:** If you do nothing: Decline paid offer. Four die; the donor survives; no donation is made.

**Provenance:** original. Original authored scenario; listed sources provide conceptual background, not this scenario or its score. Background: [consent](https://plato.stanford.edu/entries/informed-consent/).

**A. Decline paid offer** (default, scene slot 0)

Before choice: Four die; the donor survives; no donation is made.

Outcome: Four die; the donor survives; no donation is made.

Deaths: 4 human, 0 cockroach, 0 butterfly; raw **4**, weighted impact **4.0**. Included later human deaths: 0. Ratings: consequences 25, rightsDuties 80, autonomy 50, fairness 55. Level score **52.5/100** (exact 210/4).

Strongest supporting reason: You resist turning fatal sacrifice into a transaction.

Ethical tension: Payment does not automatically erase an otherwise free decision.

**B. Accept library deal** (scene-action, scene slot 1)

Before choice: The donor dies; four survive; the library receives the promised gift.

Outcome: The donor dies; four survive; the library receives the promised gift.

Deaths: 1 human, 0 cockroach, 0 butterfly; raw **1**, weighted impact **1.0**. Included later human deaths: 0. Ratings: consequences 85, rightsDuties 65, autonomy 90, fairness 70. Level score **77.5/100** (exact 310/4).

Strongest supporting reason: The stipulated absence of coercion supports respecting the offer.

Ethical tension: A market framing may still normalize troubling exchanges.

### 067. The Desperate Offer

Four face the trolley. A debtor offers fatal rescue only because the railway will otherwise seize their family's home.

**Domain:** Consent. **Distinction:** Structural pressure distinct from explicit threats.

**Layout:** `action2`; schematic-with-fact-plaques; target `control-console`. Route/control labels: Reject offer / Accept offer. **Timing:** 30 s active decision + 2.4 s resolution; last selection at deadline commits. **Default:** If you do nothing: Reject offer. Four die; the debtor survives; the debt remains.

**Provenance:** original. Original authored scenario; listed sources provide conceptual background, not this scenario or its score. Background: [consent](https://plato.stanford.edu/entries/informed-consent/).

**A. Reject offer** (default, scene slot 0)

Before choice: Four die; the debtor survives; the debt remains.

Outcome: Four die; the debtor survives; the debt remains.

Deaths: 4 human, 0 cockroach, 0 butterfly; raw **4**, weighted impact **4.0**. Included later human deaths: 0. Ratings: consequences 25, rightsDuties 85, autonomy 80, fairness 65. Level score **63.8/100** (exact 255/4).

Strongest supporting reason: Severe background deprivation can compromise meaningful choice.

Ethical tension: Refusal does not solve the family's predicament.

**B. Accept offer** (scene-action, scene slot 1)

Before choice: The debtor dies; four survive; the debt is canceled.

Outcome: The debtor dies; four survive; the debt is canceled.

Deaths: 1 human, 0 cockroach, 0 butterfly; raw **1**, weighted impact **1.0**. Included later human deaths: 0. Ratings: consequences 85, rightsDuties 35, autonomy 30, fairness 30. Level score **45.0/100** (exact 180/4).

Strongest supporting reason: The offer advances both rescue and the debtor's stated family goal.

Ethical tension: A rescue institution is exploiting a lack of acceptable alternatives.

### 068. The Unconscious Rescuer

Four face the trolley. An unconscious trained rescuer is on a fatal diversion track. Training included risky work, not this specific sacrifice.

**Domain:** Consent. **Distinction:** Presumed consent and professional identity.

**Layout:** `action2`; schematic-with-fact-plaques; target `control-console`. Route/control labels: Keep route / Divert to rescuer. **Timing:** 30 s active decision + 2.4 s resolution; last selection at deadline commits. **Default:** If you do nothing: Keep route. Four die; the rescuer survives.

**Provenance:** original. Original authored scenario; listed sources provide conceptual background, not this scenario or its score. Background: [consent](https://plato.stanford.edu/entries/informed-consent/).

**A. Keep route** (default, scene slot 0)

Before choice: Four die; the rescuer survives.

Outcome: Four die; the rescuer survives.

Deaths: 4 human, 0 cockroach, 0 butterfly; raw **4**, weighted impact **4.0**. Included later human deaths: 0. Ratings: consequences 25, rightsDuties 90, autonomy 80, fairness 65. Level score **65.0/100** (exact 260/4).

Strongest supporting reason: A job title is not blanket consent to death.

Ethical tension: Emergency rescue duties may nonetheless exceed ordinary bystander duties.

**B. Divert to rescuer** (scene-action, scene slot 1)

Before choice: The rescuer dies; four survive.

Outcome: The rescuer dies; four survive.

Deaths: 1 human, 0 cockroach, 0 butterfly; raw **1**, weighted impact **1.0**. Included later human deaths: 0. Ratings: consequences 85, rightsDuties 45, autonomy 25, fairness 50. Level score **51.2/100** (exact 205/4).

Strongest supporting reason: Their chosen role supplies some reason to consider this burden.

Ethical tension: You do not know they would accept this particular sacrifice.

### 069. The Recorded Directive

Four face the trolley. A now-unconscious adult left a clear recent directive accepting this exact fatal rescue situation; no contrary evidence exists.

**Domain:** Consent. **Distinction:** Advance authorization.

**Layout:** `action2`; schematic-with-fact-plaques; target `control-console`. Route/control labels: Follow no intervention / Honor directive. **Timing:** 30 s active decision + 2.4 s resolution; last selection at deadline commits. **Default:** If you do nothing: Follow no intervention. Four die; the author survives.

**Provenance:** original. Original authored scenario; listed sources provide conceptual background, not this scenario or its score. Background: [consent](https://plato.stanford.edu/entries/informed-consent/).

**A. Follow no intervention** (default, scene slot 0)

Before choice: Four die; the author survives.

Outcome: Four die; the author survives.

Deaths: 4 human, 0 cockroach, 0 butterfly; raw **4**, weighted impact **4.0**. Included later human deaths: 0. Ratings: consequences 25, rightsDuties 80, autonomy 40, fairness 55. Level score **50.0/100** (exact 200/4).

Strongest supporting reason: You hesitate to act irreversibly without present confirmation.

Ethical tension: Ignoring a precise directive also discounts autonomy.

**B. Honor directive** (scene-action, scene slot 1)

Before choice: The author dies; four survive.

Outcome: The author dies; four survive.

Deaths: 1 human, 0 cockroach, 0 butterfly; raw **1**, weighted impact **1.0**. Included later human deaths: 0. Ratings: consequences 85, rightsDuties 70, autonomy 90, fairness 75. Level score **80.0/100** (exact 320/4).

Strongest supporting reason: A clear, applicable prior decision can guide action when speech is impossible.

Ethical tension: An advance choice cannot be freshly reconsidered now.

### 070. The Friend's Permission

Four face the trolley. A bystander's friend says 'They would volunteer'; the bystander is silent and unreachable, with no known directive.

**Domain:** Consent. **Distinction:** Proxy confidence versus actual authority.

**Layout:** `action2`; schematic-with-fact-plaques; target `control-console`. Route/control labels: Reject friend's permission / Rely on friend. **Timing:** 30 s active decision + 2.4 s resolution; last selection at deadline commits. **Default:** If you do nothing: Reject friend's permission. Four die; the bystander survives.

**Provenance:** original. Original authored scenario; listed sources provide conceptual background, not this scenario or its score. Background: [consent](https://plato.stanford.edu/entries/informed-consent/).

**A. Reject friend's permission** (default, scene slot 0)

Before choice: Four die; the bystander survives.

Outcome: Four die; the bystander survives.

Deaths: 4 human, 0 cockroach, 0 butterfly; raw **4**, weighted impact **4.0**. Included later human deaths: 0. Ratings: consequences 25, rightsDuties 90, autonomy 85, fairness 60. Level score **65.0/100** (exact 260/4).

Strongest supporting reason: Friendship alone does not authorize another person's fatal sacrifice.

Ethical tension: The friend may genuinely know the person's values.

**B. Rely on friend** (scene-action, scene slot 1)

Before choice: The bystander dies; four survive.

Outcome: The bystander dies; four survive.

Deaths: 1 human, 0 cockroach, 0 butterfly; raw **1**, weighted impact **1.0**. Included later human deaths: 0. Ratings: consequences 85, rightsDuties 30, autonomy 25, fairness 40. Level score **45.0/100** (exact 180/4).

Strongest supporting reason: Personal knowledge can provide evidence when direct consent is unavailable.

Ethical tension: Confidence is weaker than authorization for an irreversible act.

### 071. The Majority Vote

Five people vote to divert onto one unwilling outsider, saving themselves. No vote includes the outsider's consent.

**Domain:** Consent. **Distinction:** Collective preference versus individual rights.

**Layout:** `action2`; schematic-with-fact-plaques; target `control-console`. Route/control labels: Reject majority demand / Follow five votes. **Timing:** 30 s active decision + 2.4 s resolution; last selection at deadline commits. **Default:** If you do nothing: Reject majority demand. Five die; the outsider survives.

**Provenance:** original. Original authored scenario; listed sources provide conceptual background, not this scenario or its score. Background: [consent](https://plato.stanford.edu/entries/informed-consent/).

**A. Reject majority demand** (default, scene slot 0)

Before choice: Five die; the outsider survives.

Outcome: Five die; the outsider survives.

Deaths: 5 human, 0 cockroach, 0 butterfly; raw **5**, weighted impact **5.0**. Included later human deaths: 0. Ratings: consequences 20, rightsDuties 95, autonomy 90, fairness 65. Level score **67.5/100** (exact 270/4).

Strongest supporting reason: A majority cannot simply vote away someone else's bodily protection.

Ethical tension: The voters have urgent and equal claims to survive.

**B. Follow five votes** (scene-action, scene slot 1)

Before choice: The outsider dies; five survive.

Outcome: The outsider dies; five survive.

Deaths: 1 human, 0 cockroach, 0 butterfly; raw **1**, weighted impact **1.0**. Included later human deaths: 0. Ratings: consequences 90, rightsDuties 25, autonomy 10, fairness 35. Level score **40.0/100** (exact 160/4).

Strongest supporting reason: The vote expresses the larger group's legitimate interest in rescue.

Ethical tension: Counting preferences is not the same as obtaining the burdened person's consent.

### 072. The Mutual Pact

Six informed adults previously agreed that a fair rotation would sacrifice one to save five in this exact emergency. The selected adult still agrees.

**Domain:** Consent. **Distinction:** Reciprocal consent and fair procedures.

**Layout:** `action2`; schematic-with-fact-plaques; target `control-console`. Route/control labels: Suspend pact / Honor rotation. **Timing:** 30 s active decision + 2.4 s resolution; last selection at deadline commits. **Default:** If you do nothing: Suspend pact. Five die; the selected adult survives.

**Provenance:** original. Original authored scenario; listed sources provide conceptual background, not this scenario or its score. Background: [consent](https://plato.stanford.edu/entries/informed-consent/).

**A. Suspend pact** (default, scene slot 0)

Before choice: Five die; the selected adult survives.

Outcome: Five die; the selected adult survives.

Deaths: 5 human, 0 cockroach, 0 butterfly; raw **5**, weighted impact **5.0**. Included later human deaths: 0. Ratings: consequences 20, rightsDuties 70, autonomy 35, fairness 40. Level score **41.2/100** (exact 165/4).

Strongest supporting reason: You decline to enforce even a consensual fatal procedure.

Ethical tension: All six arranged their rescue expectations around the pact.

**B. Honor rotation** (scene-action, scene slot 1)

Before choice: The selected adult dies; five survive.

Outcome: The selected adult dies; five survive.

Deaths: 1 human, 0 cockroach, 0 butterfly; raw **1**, weighted impact **1.0**. Included later human deaths: 0. Ratings: consequences 90, rightsDuties 80, autonomy 95, fairness 95. Level score **90.0/100** (exact 360/4).

Strongest supporting reason: Current agreement and reciprocal exposure support the shared rule.

Ethical tension: Fair procedure does not remove the gravity of the selected person's loss.

### 073. Consent to One Thing

Four face the trolley. A volunteer agreed to sacrifice their empty cart, but the operator button sacrifices the person instead.

**Domain:** Consent. **Distinction:** Object of consent.

**Layout:** `action2`; schematic-with-fact-plaques; target `control-console`. Route/control labels: Reject substituted sacrifice / Activate person platform. **Timing:** 30 s active decision + 2.4 s resolution; last selection at deadline commits. **Default:** If you do nothing: Reject substituted sacrifice. Four die; the volunteer survives.

**Provenance:** original. Original authored scenario; listed sources provide conceptual background, not this scenario or its score. Background: [consent](https://plato.stanford.edu/entries/informed-consent/).

**A. Reject substituted sacrifice** (default, scene slot 0)

Before choice: Four die; the volunteer survives.

Outcome: Four die; the volunteer survives.

Deaths: 4 human, 0 cockroach, 0 butterfly; raw **4**, weighted impact **4.0**. Included later human deaths: 0. Ratings: consequences 25, rightsDuties 95, autonomy 100, fairness 65. Level score **71.2/100** (exact 285/4).

Strongest supporting reason: Permission to use property cannot be transferred to the owner's body.

Ethical tension: A useful offer fails because the machine offers the wrong action.

**B. Activate person platform** (scene-action, scene slot 1)

Before choice: The volunteer dies; four survive.

Outcome: The volunteer dies; four survive.

Deaths: 1 human, 0 cockroach, 0 butterfly; raw **1**, weighted impact **1.0**. Included later human deaths: 0. Ratings: consequences 85, rightsDuties 10, autonomy 0, fairness 30. Level score **31.2/100** (exact 125/4).

Strongest supporting reason: The numerical rescue remains possible.

Ethical tension: You have exceeded the very thing the volunteer authorized.

### 074. The Silent Audience

Four face the trolley. One spectator did not object when a fast announcer mentioned that attendees might be sacrificed; they never actively agreed.

**Domain:** Consent. **Distinction:** Silence versus affirmative consent.

**Layout:** `action2`; schematic-with-fact-plaques; target `control-console`. Route/control labels: Do not infer consent / Treat silence as yes. **Timing:** 30 s active decision + 2.4 s resolution; last selection at deadline commits. **Default:** If you do nothing: Do not infer consent. Four die; the spectator survives.

**Provenance:** original. Original authored scenario; listed sources provide conceptual background, not this scenario or its score. Background: [consent](https://plato.stanford.edu/entries/informed-consent/).

**A. Do not infer consent** (default, scene slot 0)

Before choice: Four die; the spectator survives.

Outcome: Four die; the spectator survives.

Deaths: 4 human, 0 cockroach, 0 butterfly; raw **4**, weighted impact **4.0**. Included later human deaths: 0. Ratings: consequences 25, rightsDuties 95, autonomy 95, fairness 65. Level score **70.0/100** (exact 280/4).

Strongest supporting reason: Failure to object is weak evidence of informed agreement.

Ethical tension: A venue's assumptions cannot supply the missing authorization.

**B. Treat silence as yes** (scene-action, scene slot 1)

Before choice: The spectator dies; four survive.

Outcome: The spectator dies; four survive.

Deaths: 1 human, 0 cockroach, 0 butterfly; raw **1**, weighted impact **1.0**. Included later human deaths: 0. Ratings: consequences 85, rightsDuties 20, autonomy 5, fairness 35. Level score **36.2/100** (exact 145/4).

Strongest supporting reason: Saving four is a serious independent reason to intervene.

Ethical tension: The absence of protest does not strengthen that reason into consent.

### 075. The Costume Mask

Four face the trolley. A masked volunteer says yes, but a verified sign explains they mistakenly think this is a harmless rehearsal.

**Domain:** Consent. **Distinction:** Understanding the actual stakes.

**Layout:** `action2`; schematic-with-fact-plaques; target `control-console`. Route/control labels: Decline mistaken offer / Accept rehearsal yes. **Timing:** 30 s active decision + 2.4 s resolution; last selection at deadline commits. **Default:** If you do nothing: Decline mistaken offer. Four die; the volunteer survives.

**Provenance:** original. Original authored scenario; listed sources provide conceptual background, not this scenario or its score. Background: [consent](https://plato.stanford.edu/entries/informed-consent/).

**A. Decline mistaken offer** (default, scene slot 0)

Before choice: Four die; the volunteer survives.

Outcome: Four die; the volunteer survives.

Deaths: 4 human, 0 cockroach, 0 butterfly; raw **4**, weighted impact **4.0**. Included later human deaths: 0. Ratings: consequences 25, rightsDuties 95, autonomy 95, fairness 65. Level score **70.0/100** (exact 280/4).

Strongest supporting reason: Agreement under a fundamental mistake is not informed.

Ethical tension: The sincere offer cannot support the actual fatal act.

**B. Accept rehearsal yes** (scene-action, scene slot 1)

Before choice: The volunteer dies; four survive.

Outcome: The volunteer dies; four survive.

Deaths: 1 human, 0 cockroach, 0 butterfly; raw **1**, weighted impact **1.0**. Included later human deaths: 0. Ratings: consequences 85, rightsDuties 10, autonomy 0, fairness 30. Level score **31.2/100** (exact 125/4).

Strongest supporting reason: The mechanism can rescue the four.

Ethical tension: You knowingly rely on a misunderstanding about death.

### 076. The Competent Refusal

One person faces the trolley and explicitly refuses rescue because diversion destroys their life's artwork. The siding is otherwise safe.

**Domain:** Consent. **Distinction:** Paternalistic rescue against a person's informed values.

**Layout:** `action2`; schematic-with-fact-plaques; target `control-console`. Route/control labels: Honor refusal / Save against refusal. **Timing:** 30 s active decision + 2.4 s resolution; last selection at deadline commits. **Default:** If you do nothing: Honor refusal. The person dies; their artwork survives.

**Provenance:** original. Original authored scenario; listed sources provide conceptual background, not this scenario or its score. Background: [consent](https://plato.stanford.edu/entries/informed-consent/).

**A. Honor refusal** (default, scene slot 0)

Before choice: The person dies; their artwork survives.

Outcome: The person dies; their artwork survives.

Deaths: 1 human, 0 cockroach, 0 butterfly; raw **1**, weighted impact **1.0**. Included later human deaths: 0. Ratings: consequences 30, rightsDuties 85, autonomy 100, fairness 70. Level score **71.2/100** (exact 285/4).

Strongest supporting reason: A competent person's values need not mirror your preference for survival.

Ethical tension: Respect can require accepting a choice you find tragic.

**B. Save against refusal** (scene-action, scene slot 1)

Before choice: The person survives; their artwork is destroyed.

Outcome: The person survives; their artwork is destroyed.

Deaths: 0 human, 0 cockroach, 0 butterfly; raw **0**, weighted impact **0.0**. Included later human deaths: 0. Ratings: consequences 100, rightsDuties 55, autonomy 10, fairness 60. Level score **56.2/100** (exact 225/4).

Strongest supporting reason: Preserving life retains possibilities that death removes.

Ethical tension: The rescue overrides a clear, informed decision about their own life.

### 077. The Nonlethal Restraint

Three people will walk into the trolley unless you briefly lock their exit gate. They object, but verified information shows the danger they cannot yet see.

**Domain:** Consent. **Distinction:** Temporary paternalism and reversible interference.

**Layout:** `action2`; schematic-with-fact-plaques; target `control-console`. Route/control labels: Leave gate unlocked / Lock gate briefly. **Timing:** 30 s active decision + 2.4 s resolution; last selection at deadline commits. **Default:** If you do nothing: Leave gate unlocked. Three enter the track and die.

**Provenance:** original. Original authored scenario; listed sources provide conceptual background, not this scenario or its score. Background: [consent](https://plato.stanford.edu/entries/informed-consent/).

**A. Leave gate unlocked** (default, scene slot 0)

Before choice: Three enter the track and die.

Outcome: Three enter the track and die.

Deaths: 3 human, 0 cockroach, 0 butterfly; raw **3**, weighted impact **3.0**. Included later human deaths: 0. Ratings: consequences 10, rightsDuties 55, autonomy 80, fairness 40. Level score **46.2/100** (exact 185/4).

Strongest supporting reason: You respect their immediate demand for freedom of movement.

Ethical tension: Their choice lacks critical information about imminent danger.

**B. Lock gate briefly** (scene-action, scene slot 1)

Before choice: All survive; the gate reopens after the trolley passes.

Outcome: All survive; the gate reopens after the trolley passes.

Deaths: 0 human, 0 cockroach, 0 butterfly; raw **0**, weighted impact **0.0**. Included later human deaths: 0. Ratings: consequences 100, rightsDuties 80, autonomy 45, fairness 85. Level score **77.5/100** (exact 310/4).

Strongest supporting reason: A narrow, reversible restriction prevents irreversible harm.

Ethical tension: Protection should end with the emergency that justifies it.

### 078. The Shared Body Platform

A tandem safety platform carries two people. One consents to fatal diversion; the other refuses. Using it saves five others.

**Domain:** Consent. **Distinction:** One person's consent cannot cover another.

**Layout:** `action2`; schematic-with-fact-plaques; target `control-console`. Route/control labels: Keep main route / Use tandem platform. **Timing:** 30 s active decision + 2.4 s resolution; last selection at deadline commits. **Default:** If you do nothing: Keep main route. Five die; both platform occupants survive.

**Provenance:** original. Original authored scenario; listed sources provide conceptual background, not this scenario or its score. Background: [consent](https://plato.stanford.edu/entries/informed-consent/).

**A. Keep main route** (default, scene slot 0)

Before choice: Five die; both platform occupants survive.

Outcome: Five die; both platform occupants survive.

Deaths: 5 human, 0 cockroach, 0 butterfly; raw **5**, weighted impact **5.0**. Included later human deaths: 0. Ratings: consequences 20, rightsDuties 95, autonomy 80, fairness 65. Level score **65.0/100** (exact 260/4).

Strongest supporting reason: The consenting person cannot waive the other's bodily claim.

Ethical tension: The volunteer's own wish to help is also frustrated.

**B. Use tandem platform** (scene-action, scene slot 1)

Before choice: Both occupants die; five survive.

Outcome: Both occupants die; five survive.

Deaths: 2 human, 0 cockroach, 0 butterfly; raw **2**, weighted impact **2.0**. Included later human deaths: 0. Ratings: consequences 80, rightsDuties 20, autonomy 20, fairness 35. Level score **38.8/100** (exact 155/4).

Strongest supporting reason: Three fewer deaths occur.

Ethical tension: Half the consent does not authorize the whole platform.

### 079. The Conditional Volunteer

Four face the trolley. One person volunteers only if the railway publishes a safety report. The report button is broken, so the condition cannot be fulfilled.

**Domain:** Consent. **Distinction:** Conditional consent.

**Layout:** `action2`; schematic-with-fact-plaques; target `control-console`. Route/control labels: Decline unmet offer / Accept without report. **Timing:** 30 s active decision + 2.4 s resolution; last selection at deadline commits. **Default:** If you do nothing: Decline unmet offer. Four die; the volunteer survives.

**Provenance:** original. Original authored scenario; listed sources provide conceptual background, not this scenario or its score. Background: [consent](https://plato.stanford.edu/entries/informed-consent/).

**A. Decline unmet offer** (default, scene slot 0)

Before choice: Four die; the volunteer survives.

Outcome: Four die; the volunteer survives.

Deaths: 4 human, 0 cockroach, 0 butterfly; raw **4**, weighted impact **4.0**. Included later human deaths: 0. Ratings: consequences 25, rightsDuties 95, autonomy 100, fairness 65. Level score **71.2/100** (exact 285/4).

Strongest supporting reason: The condition is part of the person's permission, not an optional extra.

Ethical tension: The condition blocks an otherwise possible rescue.

**B. Accept without report** (scene-action, scene slot 1)

Before choice: The volunteer dies; four survive; no report is published.

Outcome: The volunteer dies; four survive; no report is published.

Deaths: 1 human, 0 cockroach, 0 butterfly; raw **1**, weighted impact **1.0**. Included later human deaths: 0. Ratings: consequences 85, rightsDuties 25, autonomy 10, fairness 35. Level score **38.8/100** (exact 155/4).

Strongest supporting reason: The immediate rescue is still achievable.

Ethical tension: You take the sacrifice while discarding its stated terms.

### 080. The Consent Menu

Four face the trolley. One free volunteer, one coerced volunteer, and inaction are available; both rescues kill one person.

**Domain:** Consent. **Distinction:** Choosing among differently authorized equal outcomes.

**Layout:** `fork3`; schematic-with-fact-plaques; target `rail-switch`. Route/control labels: Keep main route / Accept free volunteer / Accept coerced volunteer. **Timing:** 30 s active decision + 2.4 s resolution; last selection at deadline commits. **Default:** If you do nothing: Keep main route. Four die; both volunteers survive.

**Provenance:** original. Original authored scenario; listed sources provide conceptual background, not this scenario or its score. Background: [consent](https://plato.stanford.edu/entries/informed-consent/).

**A. Keep main route** (default, scene slot 0)

Before choice: Four die; both volunteers survive.

Outcome: Four die; both volunteers survive.

Deaths: 4 human, 0 cockroach, 0 butterfly; raw **4**, weighted impact **4.0**. Included later human deaths: 0. Ratings: consequences 25, rightsDuties 80, autonomy 45, fairness 50. Level score **50.0/100** (exact 200/4).

Strongest supporting reason: You refuse to facilitate a fatal sacrifice.

Ethical tension: A genuinely free offer remains unused.

**B. Accept free volunteer** (select-route, scene slot 1)

Before choice: The free volunteer dies; the other five survive.

Outcome: The free volunteer dies; the other five survive.

Deaths: 1 human, 0 cockroach, 0 butterfly; raw **1**, weighted impact **1.0**. Included later human deaths: 0. Ratings: consequences 85, rightsDuties 75, autonomy 95, fairness 80. Level score **83.8/100** (exact 335/4).

Strongest supporting reason: Equal rescue results favor the person who freely accepts the burden.

Ethical tension: Authorization still requires taking the death seriously.

**C. Accept coerced volunteer** (select-route, scene slot 2)

Before choice: The coerced volunteer dies; the other five survive.

Outcome: The coerced volunteer dies; the other five survive.

Deaths: 1 human, 0 cockroach, 0 butterfly; raw **1**, weighted impact **1.0**. Included later human deaths: 0. Ratings: consequences 85, rightsDuties 15, autonomy 10, fairness 25. Level score **33.8/100** (exact 135/4).

Strongest supporting reason: The rescue saves the same four people.

Ethical tension: Choosing the coerced person bypasses an available voluntary option.

## Chapter 5: Loyalties and promises

### 081. Your Old Friend

Five strangers face the trolley; your friend is on the siding. No one has consented.

**Domain:** Loyalties and promises. **Distinction:** Friendship and impartial rescue.

**Layout:** `fork2`; schematic-with-fact-plaques; target `rail-switch`. Route/control labels: Keep main route / Divert toward friend. **Timing:** 30 s active decision + 2.4 s resolution; last selection at deadline commits. **Default:** If you do nothing: Keep main route. Five strangers die; your friend survives.

**Provenance:** original. Original authored scenario; listed sources provide conceptual background, not this scenario or its score. Background: [obligations](https://plato.stanford.edu/entries/special-obligations/).

**A. Keep main route** (default, scene slot 0)

Before choice: Five strangers die; your friend survives.

Outcome: Five strangers die; your friend survives.

Deaths: 5 human, 0 cockroach, 0 butterfly; raw **5**, weighted impact **5.0**. Included later human deaths: 0. Ratings: consequences 20, rightsDuties 75, autonomy 60, fairness 35. Level score **47.5/100** (exact 190/4).

Strongest supporting reason: Friendship creates serious personal commitments.

Ethical tension: Those commitments compete with five equal human claims.

**B. Divert toward friend** (select-route, scene slot 1)

Before choice: Your friend dies; five strangers survive.

Outcome: Your friend dies; five strangers survive.

Deaths: 1 human, 0 cockroach, 0 butterfly; raw **1**, weighted impact **1.0**. Included later human deaths: 0. Ratings: consequences 90, rightsDuties 55, autonomy 45, fairness 85. Level score **68.8/100** (exact 275/4).

Strongest supporting reason: You refuse to count a life differently because it is close to you.

Ethical tension: Impartial rescue can violate a felt duty of loyalty.

### 082. The Promise to Stay

You promised one worker never to divert onto their siding; three strangers now face the trolley. The promise was made without anticipating this emergency.

**Domain:** Loyalties and promises. **Distinction:** Promise keeping under changed stakes.

**Layout:** `fork2`; schematic-with-fact-plaques; target `rail-switch`. Route/control labels: Keep promise / Break promise and divert. **Timing:** 30 s active decision + 2.4 s resolution; last selection at deadline commits. **Default:** If you do nothing: Keep promise. Three die; the worker survives.

**Provenance:** original. Original authored scenario; listed sources provide conceptual background, not this scenario or its score. Background: [obligations](https://plato.stanford.edu/entries/special-obligations/).

**A. Keep promise** (default, scene slot 0)

Before choice: Three die; the worker survives.

Outcome: Three die; the worker survives.

Deaths: 3 human, 0 cockroach, 0 butterfly; raw **3**, weighted impact **3.0**. Included later human deaths: 0. Ratings: consequences 25, rightsDuties 95, autonomy 80, fairness 60. Level score **65.0/100** (exact 260/4).

Strongest supporting reason: People can reasonably rely on serious assurances of safety.

Ethical tension: An unforeseen emergency puts the promise under pressure.

**B. Break promise and divert** (select-route, scene slot 1)

Before choice: The worker dies; three survive.

Outcome: The worker dies; three survive.

Deaths: 1 human, 0 cockroach, 0 butterfly; raw **1**, weighted impact **1.0**. Included later human deaths: 0. Ratings: consequences 85, rightsDuties 25, autonomy 25, fairness 45. Level score **45.0/100** (exact 180/4).

Strongest supporting reason: A promise may be defeasible when lives depend on breaking it.

Ethical tension: The worker relied on your assurance and bears the cost.

### 083. The Rescue Appointment

You promised to protect two people on the main line. A diversion kills one uninvolved person and saves them.

**Domain:** Loyalties and promises. **Distinction:** Special rescue duties and outsiders' rights.

**Layout:** `fork2`; schematic-with-fact-plaques; target `rail-switch`. Route/control labels: Do not divert / Divert. **Timing:** 30 s active decision + 2.4 s resolution; last selection at deadline commits. **Default:** If you do nothing: Do not divert. The promised pair die; the outsider survives.

**Provenance:** original. Original authored scenario; listed sources provide conceptual background, not this scenario or its score. Background: [obligations](https://plato.stanford.edu/entries/special-obligations/).

**A. Do not divert** (default, scene slot 0)

Before choice: The promised pair die; the outsider survives.

Outcome: The promised pair die; the outsider survives.

Deaths: 2 human, 0 cockroach, 0 butterfly; raw **2**, weighted impact **2.0**. Included later human deaths: 0. Ratings: consequences 40, rightsDuties 65, autonomy 65, fairness 55. Level score **56.2/100** (exact 225/4).

Strongest supporting reason: A promise cannot automatically authorize harming an outsider.

Ethical tension: You fail people who reasonably counted on your help.

**B. Divert** (select-route, scene slot 1)

Before choice: The outsider dies; the promised pair survive.

Outcome: The outsider dies; the promised pair survive.

Deaths: 1 human, 0 cockroach, 0 butterfly; raw **1**, weighted impact **1.0**. Included later human deaths: 0. Ratings: consequences 80, rightsDuties 40, autonomy 40, fairness 45. Level score **51.2/100** (exact 205/4).

Strongest supporting reason: A concrete commitment strengthens your reason to rescue the pair.

Ethical tension: Your private promise cannot erase the outsider's claim.

### 084. The Bribe Envelope

Two strangers face the trolley; three are on the siding. A rich spectator pays your character to save the two, with no wider effects.

**Domain:** Loyalties and promises. **Distinction:** Corruption and improper reasons.

**Layout:** `fork2`; schematic-with-fact-plaques; target `rail-switch`. Route/control labels: Reject paid diversion / Take bribe and divert. **Timing:** 30 s active decision + 2.4 s resolution; last selection at deadline commits. **Default:** If you do nothing: Reject paid diversion. Two die; three survive; no payment arrives.

**Provenance:** original. Original authored scenario; listed sources provide conceptual background, not this scenario or its score. Background: [obligations](https://plato.stanford.edu/entries/special-obligations/).

**A. Reject paid diversion** (default, scene slot 0)

Before choice: Two die; three survive; no payment arrives.

Outcome: Two die; three survive; no payment arrives.

Deaths: 2 human, 0 cockroach, 0 butterfly; raw **2**, weighted impact **2.0**. Included later human deaths: 0. Ratings: consequences 85, rightsDuties 85, fairness 90. Level score **86.7/100** (exact 260/3).

Strongest supporting reason: The larger group's lives should not be traded for private gain.

Ethical tension: Refusing the bribe does not remove grief for the two.

**B. Take bribe and divert** (select-route, scene slot 1)

Before choice: Three die; two survive; your character receives money.

Outcome: Three die; two survive; your character receives money.

Deaths: 3 human, 0 cockroach, 0 butterfly; raw **3**, weighted impact **3.0**. Included later human deaths: 0. Ratings: consequences 25, rightsDuties 15, fairness 10. Level score **16.7/100** (exact 50/3).

Strongest supporting reason: The two have genuine rescue claims independent of the payment.

Ethical tension: Private gain worsens an already larger loss.

### 085. The Neighborhood Track

Three neighbors face the trolley; four unfamiliar visitors are on the siding. Residency has no other relevance.

**Domain:** Loyalties and promises. **Distinction:** Local solidarity versus equal standing.

**Layout:** `fork2`; schematic-with-fact-plaques; target `rail-switch`. Route/control labels: Keep route / Protect neighbors. **Timing:** 30 s active decision + 2.4 s resolution; last selection at deadline commits. **Default:** If you do nothing: Keep route. The neighbors die; four visitors survive.

**Provenance:** original. Original authored scenario; listed sources provide conceptual background, not this scenario or its score. Background: [obligations](https://plato.stanford.edu/entries/special-obligations/).

**A. Keep route** (default, scene slot 0)

Before choice: The neighbors die; four visitors survive.

Outcome: The neighbors die; four visitors survive.

Deaths: 3 human, 0 cockroach, 0 butterfly; raw **3**, weighted impact **3.0**. Included later human deaths: 0. Ratings: consequences 80, rightsDuties 75, fairness 85. Level score **80.0/100** (exact 240/3).

Strongest supporting reason: Visitors' claims are not smaller because they are unfamiliar.

Ethical tension: Your own community may experience your restraint as abandonment.

**B. Protect neighbors** (select-route, scene slot 1)

Before choice: Four visitors die; the neighbors survive.

Outcome: Four visitors die; the neighbors survive.

Deaths: 4 human, 0 cockroach, 0 butterfly; raw **4**, weighted impact **4.0**. Included later human deaths: 0. Ratings: consequences 35, rightsDuties 45, fairness 25. Level score **35.0/100** (exact 105/3).

Strongest supporting reason: Local relationships can sustain mutual obligations.

Ethical tension: Membership alone cannot easily justify imposing a greater loss on outsiders.

### 086. The Rival Club

One member of a rival board-game club faces the trolley. A safe siding destroys your club's trophy but harms nobody.

**Domain:** Loyalties and promises. **Distinction:** Tribal loyalty and trivial group symbols.

**Layout:** `fork2`; schematic-with-fact-plaques; target `rail-switch`. Route/control labels: Protect trophy / Save rival. **Timing:** 30 s active decision + 2.4 s resolution; last selection at deadline commits. **Default:** If you do nothing: Protect trophy. The rival dies; the trophy survives.

**Provenance:** original. Original authored scenario; listed sources provide conceptual background, not this scenario or its score. Background: [obligations](https://plato.stanford.edu/entries/special-obligations/).

**A. Protect trophy** (default, scene slot 0)

Before choice: The rival dies; the trophy survives.

Outcome: The rival dies; the trophy survives.

Deaths: 1 human, 0 cockroach, 0 butterfly; raw **1**, weighted impact **1.0**. Included later human deaths: 0. Ratings: consequences 0, rightsDuties 15, fairness 10. Level score **8.3/100** (exact 25/3).

Strongest supporting reason: The trophy represents shared effort and identity.

Ethical tension: Club rivalry supplies no reason to deny a safe rescue.

**B. Save rival** (select-route, scene slot 1)

Before choice: The rival survives; your trophy breaks.

Outcome: The rival survives; your trophy breaks.

Deaths: 0 human, 0 cockroach, 0 butterfly; raw **0**, weighted impact **0.0**. Included later human deaths: 0. Ratings: consequences 100, rightsDuties 95, fairness 95. Level score **96.7/100** (exact 290/3).

Strongest supporting reason: Human concern crosses invented group boundaries.

Ethical tension: Will loyalty allow the club to celebrate this loss?

### 087. Your Responsibility First

Two people you negligently endangered face the trolley; three unrelated people are on a siding.

**Domain:** Loyalties and promises. **Distinction:** Corrective duty versus imposing more harm.

**Layout:** `fork2`; schematic-with-fact-plaques; target `rail-switch`. Route/control labels: Keep main route / Divert to outsiders. **Timing:** 30 s active decision + 2.4 s resolution; last selection at deadline commits. **Default:** If you do nothing: Keep main route. The two die; three outsiders survive.

**Provenance:** original. Original authored scenario; listed sources provide conceptual background, not this scenario or its score. Background: [obligations](https://plato.stanford.edu/entries/special-obligations/).

**A. Keep main route** (default, scene slot 0)

Before choice: The two die; three outsiders survive.

Outcome: The two die; three outsiders survive.

Deaths: 2 human, 0 cockroach, 0 butterfly; raw **2**, weighted impact **2.0**. Included later human deaths: 0. Ratings: consequences 80, rightsDuties 55, fairness 75. Level score **70.0/100** (exact 210/3).

Strongest supporting reason: Repairing your mistake cannot justify increasing deaths among outsiders.

Ethical tension: You still owe an account of the danger you created.

**B. Divert to outsiders** (select-route, scene slot 1)

Before choice: Three outsiders die; the two survive.

Outcome: Three outsiders die; the two survive.

Deaths: 3 human, 0 cockroach, 0 butterfly; raw **3**, weighted impact **3.0**. Included later human deaths: 0. Ratings: consequences 35, rightsDuties 25, fairness 25. Level score **28.3/100** (exact 85/3).

Strongest supporting reason: You act to rescue those for whom you bear special responsibility.

Ethical tension: Repair is being purchased through an even greater new harm.

### 088. The Unfair Promise

You promised a club to save its members over outsiders no matter the numbers. Two members face the trolley; four outsiders are on the siding.

**Domain:** Loyalties and promises. **Distinction:** Whether wrongful promises bind.

**Layout:** `fork2`; schematic-with-fact-plaques; target `rail-switch`. Route/control labels: Reject biased promise / Honor club promise. **Timing:** 30 s active decision + 2.4 s resolution; last selection at deadline commits. **Default:** If you do nothing: Reject biased promise. Two members die; four outsiders survive.

**Provenance:** original. Original authored scenario; listed sources provide conceptual background, not this scenario or its score. Background: [obligations](https://plato.stanford.edu/entries/special-obligations/).

**A. Reject biased promise** (default, scene slot 0)

Before choice: Two members die; four outsiders survive.

Outcome: Two members die; four outsiders survive.

Deaths: 2 human, 0 cockroach, 0 butterfly; raw **2**, weighted impact **2.0**. Included later human deaths: 0. Ratings: consequences 85, rightsDuties 80, fairness 90. Level score **85.0/100** (exact 255/3).

Strongest supporting reason: An unfair promise cannot make outsider lives worth less.

Ethical tension: Breaking it damages expectations you should not have created.

**B. Honor club promise** (select-route, scene slot 1)

Before choice: Four outsiders die; two members survive.

Outcome: Four outsiders die; two members survive.

Deaths: 4 human, 0 cockroach, 0 butterfly; raw **4**, weighted impact **4.0**. Included later human deaths: 0. Ratings: consequences 20, rightsDuties 30, fairness 10. Level score **20.0/100** (exact 60/3).

Strongest supporting reason: Keeping promises supports trust within the club.

Ethical tension: Trust founded on unfair exclusion has limited moral authority.

### 089. The Stranger Who Saved You

Three strangers face the trolley; the one person who once saved your life stands on the siding.

**Domain:** Loyalties and promises. **Distinction:** Gratitude and repayment.

**Layout:** `fork2`; schematic-with-fact-plaques; target `rail-switch`. Route/control labels: Protect benefactor / Divert to benefactor. **Timing:** 30 s active decision + 2.4 s resolution; last selection at deadline commits. **Default:** If you do nothing: Protect benefactor. Three strangers die; your benefactor survives.

**Provenance:** original. Original authored scenario; listed sources provide conceptual background, not this scenario or its score. Background: [obligations](https://plato.stanford.edu/entries/special-obligations/).

**A. Protect benefactor** (default, scene slot 0)

Before choice: Three strangers die; your benefactor survives.

Outcome: Three strangers die; your benefactor survives.

Deaths: 3 human, 0 cockroach, 0 butterfly; raw **3**, weighted impact **3.0**. Included later human deaths: 0. Ratings: consequences 25, rightsDuties 80, fairness 40. Level score **48.3/100** (exact 145/3).

Strongest supporting reason: Gratitude creates a strong reason not to abandon someone who helped you.

Ethical tension: The strangers did not incur a lesser right to rescue.

**B. Divert to benefactor** (select-route, scene slot 1)

Before choice: Your benefactor dies; three strangers survive.

Outcome: Your benefactor dies; three strangers survive.

Deaths: 1 human, 0 cockroach, 0 butterfly; raw **1**, weighted impact **1.0**. Included later human deaths: 0. Ratings: consequences 85, rightsDuties 50, fairness 75. Level score **70.0/100** (exact 210/3).

Strongest supporting reason: Past help does not multiply the benefactor's basic claim over others.

Ethical tension: This rescue carries a painful failure of reciprocity.

### 090. The Dependent Appointment

Two people face the trolley; one caregiver is on the siding. If the caregiver dies, dependents are safely reassigned but lose a trusted relationship.

**Domain:** Loyalties and promises. **Distinction:** Relational losses without assigning superior human value.

**Layout:** `fork2`; schematic-with-fact-plaques; target `rail-switch`. Route/control labels: Keep main route / Divert to caregiver. **Timing:** 30 s active decision + 2.4 s resolution; last selection at deadline commits. **Default:** If you do nothing: Keep main route. Two die; the caregiver and established relationships remain.

**Provenance:** original. Original authored scenario; listed sources provide conceptual background, not this scenario or its score. Background: [obligations](https://plato.stanford.edu/entries/special-obligations/).

**A. Keep main route** (default, scene slot 0)

Before choice: Two die; the caregiver and established relationships remain.

Outcome: Two die; the caregiver and established relationships remain.

Deaths: 2 human, 0 cockroach, 0 butterfly; raw **2**, weighted impact **2.0**. Included later human deaths: 0. Ratings: consequences 40, rightsDuties 85, fairness 55. Level score **60.0/100** (exact 180/3).

Strongest supporting reason: The caregiver's death would disrupt others beyond the track.

Ethical tension: The two also have lives and relationships not fully visible here.

**B. Divert to caregiver** (select-route, scene slot 1)

Before choice: The caregiver dies; two survive; dependents receive safe replacement care.

Outcome: The caregiver dies; two survive; dependents receive safe replacement care.

Deaths: 1 human, 0 cockroach, 0 butterfly; raw **1**, weighted impact **1.0**. Included later human deaths: 0. Ratings: consequences 80, rightsDuties 55, fairness 65. Level score **66.7/100** (exact 200/3).

Strongest supporting reason: Fewer deaths occur without assuming the two lack relationships.

Ethical tension: Safe replacement care does not replace the particular bond.

### 091. The Confidential Route

Four face the trolley. To activate a safe brake you must reveal a friend's harmless private diary to a public console; nobody dies if revealed.

**Domain:** Loyalties and promises. **Distinction:** Confidentiality versus emergency rescue.

**Layout:** `action2`; schematic-with-fact-plaques; target `control-console`. Route/control labels: Keep confidence / Reveal diary and brake. **Timing:** 30 s active decision + 2.4 s resolution; last selection at deadline commits. **Default:** If you do nothing: Keep confidence. Four die; the diary remains private.

**Provenance:** original. Original authored scenario; listed sources provide conceptual background, not this scenario or its score. Background: [obligations](https://plato.stanford.edu/entries/special-obligations/).

**A. Keep confidence** (default, scene slot 0)

Before choice: Four die; the diary remains private.

Outcome: Four die; the diary remains private.

Deaths: 4 human, 0 cockroach, 0 butterfly; raw **4**, weighted impact **4.0**. Included later human deaths: 0. Ratings: consequences 10, rightsDuties 55, autonomy 85, fairness 35. Level score **46.2/100** (exact 185/4).

Strongest supporting reason: Trust includes respecting a confidence entrusted to you.

Ethical tension: The privacy loss is substantial but not equivalent to four deaths.

**B. Reveal diary and brake** (scene-action, scene slot 1)

Before choice: Four survive; the diary becomes public.

Outcome: Four survive; the diary becomes public.

Deaths: 0 human, 0 cockroach, 0 butterfly; raw **0**, weighted impact **0.0**. Included later human deaths: 0. Ratings: consequences 100, rightsDuties 70, autonomy 25, fairness 75. Level score **67.5/100** (exact 270/4).

Strongest supporting reason: An emergency can justify a narrow breach to prevent fatal harm.

Ethical tension: The friend deserves an explanation and privacy repair where possible.

### 092. The Rival's Promise

Three face the trolley. A person you dislike credibly offers a safe brake in exchange for returning their stolen chess clock; the clock belongs to them.

**Domain:** Loyalties and promises. **Distinction:** Distrust and obligations to disliked people.

**Layout:** `action2`; schematic-with-fact-plaques; target `control-console`. Route/control labels: Keep clock / Return clock. **Timing:** 30 s active decision + 2.4 s resolution; last selection at deadline commits. **Default:** If you do nothing: Keep clock. Three die; your character retains the stolen clock.

**Provenance:** original. Original authored scenario; listed sources provide conceptual background, not this scenario or its score. Background: [obligations](https://plato.stanford.edu/entries/special-obligations/).

**A. Keep clock** (default, scene slot 0)

Before choice: Three die; your character retains the stolen clock.

Outcome: Three die; your character retains the stolen clock.

Deaths: 3 human, 0 cockroach, 0 butterfly; raw **3**, weighted impact **3.0**. Included later human deaths: 0. Ratings: consequences 0, rightsDuties 10, fairness 10. Level score **6.7/100** (exact 20/3).

Strongest supporting reason: Distrust may ordinarily justify caution in a bargain.

Ethical tension: The offer is verified and the property was never yours.

**B. Return clock** (scene-action, scene slot 1)

Before choice: Three survive; the owner gets their clock back.

Outcome: Three survive; the owner gets their clock back.

Deaths: 0 human, 0 cockroach, 0 butterfly; raw **0**, weighted impact **0.0**. Included later human deaths: 0. Ratings: consequences 100, rightsDuties 100, fairness 95. Level score **98.3/100** (exact 295/3).

Strongest supporting reason: Restitution and rescue align despite personal dislike.

Ethical tension: A rival's help can challenge a convenient story about their character.

### 093. The Competing Oaths

You are a safety officer who promised both never to redirect danger and to minimize deaths. Four face the trolley; one is on the siding.

**Domain:** Loyalties and promises. **Distinction:** Conflict between undertakings.

**Layout:** `fork2`; schematic-with-fact-plaques; target `rail-switch`. Route/control labels: Honor no-redirection oath / Honor minimize-loss oath. **Timing:** 30 s active decision + 2.4 s resolution; last selection at deadline commits. **Default:** If you do nothing: Honor no-redirection oath. Four die; the siding person survives.

**Provenance:** original. Original authored scenario; listed sources provide conceptual background, not this scenario or its score. Background: [obligations](https://plato.stanford.edu/entries/special-obligations/).

**A. Honor no-redirection oath** (default, scene slot 0)

Before choice: Four die; the siding person survives.

Outcome: Four die; the siding person survives.

Deaths: 4 human, 0 cockroach, 0 butterfly; raw **4**, weighted impact **4.0**. Included later human deaths: 0. Ratings: consequences 25, rightsDuties 80, fairness 55. Level score **53.3/100** (exact 160/3).

Strongest supporting reason: You honor the promise protecting people from imposed danger.

Ethical tension: Your other oath cannot simultaneously be fulfilled.

**B. Honor minimize-loss oath** (select-route, scene slot 1)

Before choice: One dies; four survive.

Outcome: One dies; four survive.

Deaths: 1 human, 0 cockroach, 0 butterfly; raw **1**, weighted impact **1.0**. Included later human deaths: 0. Ratings: consequences 85, rightsDuties 65, fairness 65. Level score **71.7/100** (exact 215/3).

Strongest supporting reason: You honor the commitment to reduce fatalities.

Ethical tension: The conflicting oath shows why slogans are not a complete policy.

### 094. The Promised Gift

Two face the trolley. A safe diversion destroys a rare gift you promised to deliver to a friend today.

**Domain:** Loyalties and promises. **Distinction:** Promise of a benefit versus urgent need.

**Layout:** `fork2`; schematic-with-fact-plaques; target `rail-switch`. Route/control labels: Deliver gift intact / Sacrifice gift. **Timing:** 30 s active decision + 2.4 s resolution; last selection at deadline commits. **Default:** If you do nothing: Deliver gift intact. Two die; the gift reaches your friend.

**Provenance:** original. Original authored scenario; listed sources provide conceptual background, not this scenario or its score. Background: [obligations](https://plato.stanford.edu/entries/special-obligations/).

**A. Deliver gift intact** (default, scene slot 0)

Before choice: Two die; the gift reaches your friend.

Outcome: Two die; the gift reaches your friend.

Deaths: 2 human, 0 cockroach, 0 butterfly; raw **2**, weighted impact **2.0**. Included later human deaths: 0. Ratings: consequences 5, rightsDuties 45, fairness 25. Level score **25.0/100** (exact 75/3).

Strongest supporting reason: Promises give others justified expectations.

Ethical tension: A missed gift is a limited loss compared with two lives.

**B. Sacrifice gift** (select-route, scene slot 1)

Before choice: Both survive; the promised gift is destroyed.

Outcome: Both survive; the promised gift is destroyed.

Deaths: 0 human, 0 cockroach, 0 butterfly; raw **0**, weighted impact **0.0**. Included later human deaths: 0. Ratings: consequences 100, rightsDuties 85, fairness 90. Level score **91.7/100** (exact 275/3).

Strongest supporting reason: The emergency supplies a strong reason to explain and amend the promise.

Ethical tension: Justified breach can still leave a debt of apology.

### 095. The Family Business

Three people face the trolley. A safe diversion destroys the empty family shop, costing several relatives their jobs but no lives.

**Domain:** Loyalties and promises. **Distinction:** Shared property and imposing costs on one's own group.

**Layout:** `fork2`; schematic-with-fact-plaques; target `rail-switch`. Route/control labels: Preserve shop / Divert into shop. **Timing:** 30 s active decision + 2.4 s resolution; last selection at deadline commits. **Default:** If you do nothing: Preserve shop. Three die; the family shop survives.

**Provenance:** original. Original authored scenario; listed sources provide conceptual background, not this scenario or its score. Background: [obligations](https://plato.stanford.edu/entries/special-obligations/).

**A. Preserve shop** (default, scene slot 0)

Before choice: Three die; the family shop survives.

Outcome: Three die; the family shop survives.

Deaths: 3 human, 0 cockroach, 0 butterfly; raw **3**, weighted impact **3.0**. Included later human deaths: 0. Ratings: consequences 20, rightsDuties 65, autonomy 65, fairness 40. Level score **47.5/100** (exact 190/4).

Strongest supporting reason: The shop supports people who depend on your stewardship.

Ethical tension: Their serious financial loss competes with irreversible death.

**B. Divert into shop** (select-route, scene slot 1)

Before choice: Three survive; relatives lose the shop and jobs.

Outcome: Three survive; relatives lose the shop and jobs.

Deaths: 0 human, 0 cockroach, 0 butterfly; raw **0**, weighted impact **0.0**. Included later human deaths: 0. Ratings: consequences 95, rightsDuties 70, autonomy 35, fairness 70. Level score **67.5/100** (exact 270/4).

Strongest supporting reason: Protecting lives can justify extraordinary collective property costs.

Ethical tension: You volunteered a loss borne by others as well as yourself.

### 096. The Client's Order

As a hired switch operator, you are paid to preserve the client's empty warehouse. Doing so kills two; diverting saves both and destroys it.

**Domain:** Loyalties and promises. **Distinction:** Fiduciary loyalty and moral limits.

**Layout:** `action2`; schematic-with-fact-plaques; target `control-console`. Route/control labels: Obey client / Break instruction. **Timing:** 30 s active decision + 2.4 s resolution; last selection at deadline commits. **Default:** If you do nothing: Obey client. Two die; the warehouse survives.

**Provenance:** original. Original authored scenario; listed sources provide conceptual background, not this scenario or its score. Background: [obligations](https://plato.stanford.edu/entries/special-obligations/).

**A. Obey client** (default, scene slot 0)

Before choice: Two die; the warehouse survives.

Outcome: Two die; the warehouse survives.

Deaths: 2 human, 0 cockroach, 0 butterfly; raw **2**, weighted impact **2.0**. Included later human deaths: 0. Ratings: consequences 10, rightsDuties 40, autonomy 75, fairness 25. Level score **37.5/100** (exact 150/4).

Strongest supporting reason: An agent normally protects the interests entrusted to them.

Ethical tension: Employment does not make property protection absolute.

**B. Break instruction** (scene-action, scene slot 1)

Before choice: Two survive; the warehouse is destroyed.

Outcome: Two survive; the warehouse is destroyed.

Deaths: 0 human, 0 cockroach, 0 butterfly; raw **0**, weighted impact **0.0**. Included later human deaths: 0. Ratings: consequences 100, rightsDuties 80, autonomy 35, fairness 85. Level score **75.0/100** (exact 300/4).

Strongest supporting reason: A client's instruction cannot settle an emergency involving other lives.

Ethical tension: You should still account for the entrusted property.

### 097. The Apology Note

One person you previously insulted faces the trolley; a safe diversion destroys your treasured apology letter before they can read it.

**Domain:** Loyalties and promises. **Distinction:** Symbolic repair versus actual assistance.

**Layout:** `action2`; schematic-with-fact-plaques; target `control-console`. Route/control labels: Preserve apology / Save recipient. **Timing:** 30 s active decision + 2.4 s resolution; last selection at deadline commits. **Default:** If you do nothing: Preserve apology. The person dies; the unread apology survives.

**Provenance:** original. Original authored scenario; listed sources provide conceptual background, not this scenario or its score. Background: [obligations](https://plato.stanford.edu/entries/special-obligations/).

**A. Preserve apology** (default, scene slot 0)

Before choice: The person dies; the unread apology survives.

Outcome: The person dies; the unread apology survives.

Deaths: 1 human, 0 cockroach, 0 butterfly; raw **1**, weighted impact **1.0**. Included later human deaths: 0. Ratings: consequences 0, rightsDuties 20, fairness 15. Level score **11.7/100** (exact 35/3).

Strongest supporting reason: You want an important act of reconciliation to reach them.

Ethical tension: Preserving words of care defeats the chance to care in action.

**B. Save recipient** (scene-action, scene slot 1)

Before choice: The person survives; the apology letter is destroyed.

Outcome: The person survives; the apology letter is destroyed.

Deaths: 0 human, 0 cockroach, 0 butterfly; raw **0**, weighted impact **0.0**. Included later human deaths: 0. Ratings: consequences 100, rightsDuties 95, fairness 90. Level score **95.0/100** (exact 285/3).

Strongest supporting reason: Their survival is the condition for any future reconciliation.

Ethical tension: Practical help does not automatically settle the earlier wrong.

### 098. The Neutral Referee

You promised to act as a neutral referee between two equally sized groups. One group is your own team; the default endangers it.

**Domain:** Loyalties and promises. **Distinction:** Role impartiality versus personal allegiance.

**Layout:** `fork2`; schematic-with-fact-plaques; target `rail-switch`. Route/control labels: Keep neutral default / Favor own team. **Timing:** 30 s active decision + 2.4 s resolution; last selection at deadline commits. **Default:** If you do nothing: Keep neutral default. Your two teammates die; two opponents survive.

**Provenance:** original. Original authored scenario; listed sources provide conceptual background, not this scenario or its score. Background: [obligations](https://plato.stanford.edu/entries/special-obligations/).

**A. Keep neutral default** (default, scene slot 0)

Before choice: Your two teammates die; two opponents survive.

Outcome: Your two teammates die; two opponents survive.

Deaths: 2 human, 0 cockroach, 0 butterfly; raw **2**, weighted impact **2.0**. Included later human deaths: 0. Ratings: consequences 50, rightsDuties 85, fairness 75. Level score **70.0/100** (exact 210/3).

Strongest supporting reason: You refuse to exploit entrusted authority for your own side.

Ethical tension: An accidental default is not a complete theory of fairness.

**B. Favor own team** (select-route, scene slot 1)

Before choice: Two opponents die; your teammates survive.

Outcome: Two opponents die; your teammates survive.

Deaths: 2 human, 0 cockroach, 0 butterfly; raw **2**, weighted impact **2.0**. Included later human deaths: 0. Ratings: consequences 50, rightsDuties 30, fairness 20. Level score **33.3/100** (exact 100/3).

Strongest supporting reason: Loyalty to teammates gives an emotionally powerful rescue reason.

Ethical tension: Your referee role makes this preferential switch a breach of trust.

### 099. The Released Promise

You promised one worker protection, but they now freely release you from the promise without consenting to die. Three face the main route.

**Domain:** Loyalties and promises. **Distinction:** Waiving a promise versus consenting to harm.

**Layout:** `fork2`; schematic-with-fact-plaques; target `rail-switch`. Route/control labels: Keep main route / Divert to worker. **Timing:** 30 s active decision + 2.4 s resolution; last selection at deadline commits. **Default:** If you do nothing: Keep main route. Three die; the worker survives.

**Provenance:** original. Original authored scenario; listed sources provide conceptual background, not this scenario or its score. Background: [obligations](https://plato.stanford.edu/entries/special-obligations/).

**A. Keep main route** (default, scene slot 0)

Before choice: Three die; the worker survives.

Outcome: Three die; the worker survives.

Deaths: 3 human, 0 cockroach, 0 butterfly; raw **3**, weighted impact **3.0**. Included later human deaths: 0. Ratings: consequences 25, rightsDuties 85, autonomy 70, fairness 55. Level score **58.8/100** (exact 235/4).

Strongest supporting reason: Release from a promise leaves ordinary protection against harm intact.

Ethical tension: The special promise is no longer a reason against rescue.

**B. Divert to worker** (select-route, scene slot 1)

Before choice: The worker dies; three survive.

Outcome: The worker dies; three survive.

Deaths: 1 human, 0 cockroach, 0 butterfly; raw **1**, weighted impact **1.0**. Included later human deaths: 0. Ratings: consequences 85, rightsDuties 55, autonomy 40, fairness 65. Level score **61.2/100** (exact 245/4).

Strongest supporting reason: The rescue no longer breaches the waived assurance.

Ethical tension: Waiver of a promise is not affirmative consent to death.

### 100. The Loyalty Triangle

Four strangers face the trolley. One siding holds your friend; another holds a stranger you promised to protect. Each diversion kills one.

**Domain:** Loyalties and promises. **Distinction:** Conflicting partial duties under equal rescue totals.

**Layout:** `fork3`; schematic-with-fact-plaques; target `rail-switch`. Route/control labels: Keep four route / Divert to friend / Divert to promised stranger. **Timing:** 30 s active decision + 2.4 s resolution; last selection at deadline commits. **Default:** If you do nothing: Keep four route. Four die; both lone people survive.

**Provenance:** original. Original authored scenario; listed sources provide conceptual background, not this scenario or its score. Background: [obligations](https://plato.stanford.edu/entries/special-obligations/).

**A. Keep four route** (default, scene slot 0)

Before choice: Four die; both lone people survive.

Outcome: Four die; both lone people survive.

Deaths: 4 human, 0 cockroach, 0 butterfly; raw **4**, weighted impact **4.0**. Included later human deaths: 0. Ratings: consequences 25, rightsDuties 80, autonomy 65, fairness 40. Level score **52.5/100** (exact 210/4).

Strongest supporting reason: You avoid betraying either personal commitment through redirection.

Ethical tension: Four people bear the cost of preserving both commitments.

**B. Divert to friend** (select-route, scene slot 1)

Before choice: Your friend dies; the other five survive.

Outcome: Your friend dies; the other five survive.

Deaths: 1 human, 0 cockroach, 0 butterfly; raw **1**, weighted impact **1.0**. Included later human deaths: 0. Ratings: consequences 85, rightsDuties 60, autonomy 45, fairness 65. Level score **63.8/100** (exact 255/4).

Strongest supporting reason: You protect the explicit assurance while saving the larger group.

Ethical tension: Friendship can create obligations without a contract.

**C. Divert to promised stranger** (select-route, scene slot 2)

Before choice: The promised stranger dies; the other five survive.

Outcome: The promised stranger dies; the other five survive.

Deaths: 1 human, 0 cockroach, 0 butterfly; raw **1**, weighted impact **1.0**. Included later human deaths: 0. Ratings: consequences 85, rightsDuties 30, autonomy 25, fairness 45. Level score **46.2/100** (exact 185/4).

Strongest supporting reason: You preserve a deep relationship while saving four.

Ethical tension: The stranger reasonably relied on your explicit word.

## Chapter 6: Uncertainty

### 101. The Fog Report

A reliable sensor gives an 80% chance of five people on the foggy main track, otherwise none. One person is certainly on the siding. Actual occupancy is revealed afterward.

**Domain:** Uncertainty. **Distinction:** Expected harm versus certain imposed harm.

**Layout:** `fork2`; schematic-with-fact-plaques; target `rail-switch`. Route/control labels: Keep fog route / Divert to certain one. **Timing:** 30 s active decision + 2.4 s resolution; last selection at deadline commits. **Default:** If you do nothing: Keep fog route. 80% chance of five human deaths; otherwise zero.

**Provenance:** original. Original authored scenario; listed sources provide conceptual background, not this scenario or its score. Background: [luck](https://plato.stanford.edu/entries/moral-luck/).

**A. Keep fog route** (default, scene slot 0)

Before choice: 80% chance of five human deaths; otherwise zero.

Outcome: The fog clears: five people were present and die; one survives.

Deaths: 5 human, 0 cockroach, 0 butterfly; raw **5**, weighted impact **5.0**. Included later human deaths: 0. Ratings: consequences 30, rightsDuties 85, fairness 55. Level score **56.7/100** (exact 170/3).

Strongest supporting reason: You avoid a certain imposed death when the larger danger was uncertain.

Ethical tension: The bad realization does not by itself prove the prior decision irrational.

**B. Divert to certain one** (select-route, scene slot 1)

Before choice: One certain human death; fog-track occupants, if present, survive.

Outcome: One dies; the fog clears to reveal five people who survive.

Deaths: 1 human, 0 cockroach, 0 butterfly; raw **1**, weighted impact **1.0**. Included later human deaths: 0. Ratings: consequences 85, rightsDuties 55, fairness 65. Level score **68.3/100** (exact 205/3).

Strongest supporting reason: The published risk strongly favors diversion in expected lives.

Ethical tension: A favorable realization does not erase the certain burden imposed.

Author-only world note: A reliable sensor gives an 80% chance of five people on the foggy main track, otherwise none. One person is certainly on the siding. Actual occupancy is revealed afterward. Outcomes are fixed reveals, not fresh random draws; do not expose this note or outcome objects before commitment.

### 102. The Small Chance

The main route has a verified 10% chance of holding five people, otherwise none; the siding certainly holds one.

**Domain:** Uncertainty. **Distinction:** Low-probability larger loss.

**Layout:** `fork2`; schematic-with-fact-plaques; target `rail-switch`. Route/control labels: Keep uncertain route / Divert to one. **Timing:** 30 s active decision + 2.4 s resolution; last selection at deadline commits. **Default:** If you do nothing: Keep uncertain route. 10% chance of five human deaths; otherwise zero.

**Provenance:** original. Original authored scenario; listed sources provide conceptual background, not this scenario or its score. Background: [luck](https://plato.stanford.edu/entries/moral-luck/).

**A. Keep uncertain route** (default, scene slot 0)

Before choice: 10% chance of five human deaths; otherwise zero.

Outcome: The main route proves empty; everyone survives.

Deaths: 0 human, 0 cockroach, 0 butterfly; raw **0**, weighted impact **0.0**. Included later human deaths: 0. Ratings: consequences 85, rightsDuties 85, fairness 75. Level score **81.7/100** (exact 245/3).

Strongest supporting reason: The disclosed expected loss was lower without diversion.

Ethical tension: Success was not guaranteed by the evidence available.

**B. Divert to one** (select-route, scene slot 1)

Before choice: One certain human death.

Outcome: One dies; the main track is revealed empty.

Deaths: 1 human, 0 cockroach, 0 butterfly; raw **1**, weighted impact **1.0**. Included later human deaths: 0. Ratings: consequences 35, rightsDuties 40, fairness 45. Level score **40.0/100** (exact 120/3).

Strongest supporting reason: You eliminate the possibility of a five-person catastrophe.

Ethical tension: Avoiding a low-probability loss imposed a certain death.

Author-only world note: The main route has a verified 10% chance of holding five people, otherwise none; the siding certainly holds one. The hidden fixed scene is empty. Outcomes are fixed reveals, not fresh random draws; do not expose this note or outcome objects before commitment.

### 103. The Giant Maybe

The main route has a verified 1% chance of holding two hundred people, otherwise none. One is certainly on the siding.

**Domain:** Uncertainty. **Distinction:** Expected-value pressure from rare catastrophe.

**Layout:** `action2`; schematic-with-fact-plaques; target `control-console`. Route/control labels: Keep main route / Divert to one. **Timing:** 30 s active decision + 2.4 s resolution; last selection at deadline commits. **Default:** If you do nothing: Keep main route. 1% chance of 200 human deaths; otherwise zero.

**Provenance:** original. Original authored scenario; listed sources provide conceptual background, not this scenario or its score. Background: [luck](https://plato.stanford.edu/entries/moral-luck/).

**A. Keep main route** (default, scene slot 0)

Before choice: 1% chance of 200 human deaths; otherwise zero.

Outcome: The main route proves empty; all survive.

Deaths: 0 human, 0 cockroach, 0 butterfly; raw **0**, weighted impact **0.0**. Included later human deaths: 0. Ratings: consequences 45, rightsDuties 85, fairness 60. Level score **63.3/100** (exact 190/3).

Strongest supporting reason: You refuse certain harm to address a very unlikely disaster.

Ethical tension: A lucky result does not settle whether rare large harms should dominate.

**B. Divert to one** (scene-action, scene slot 1)

Before choice: One certain human death.

Outcome: One dies; the main route proves empty.

Deaths: 1 human, 0 cockroach, 0 butterfly; raw **1**, weighted impact **1.0**. Included later human deaths: 0. Ratings: consequences 75, rightsDuties 45, fairness 50. Level score **56.7/100** (exact 170/3).

Strongest supporting reason: Expected fatalities were two on the main route versus one on the siding.

Ethical tension: The arithmetic can demand a certain victim for a highly unlikely threat.

Author-only world note: The main route has a verified 1% chance of holding two hundred people, otherwise none. One is certainly on the siding. The actual main route is empty. Outcomes are fixed reveals, not fresh random draws; do not expose this note or outcome objects before commitment.

### 104. The Uncalibrated Oracle

A vending machine labeled ORACLE claims five people occupy an unseen main route. It has never been tested. One person is visible on the siding.

**Domain:** Uncertainty. **Distinction:** Evidence quality rather than numerical confidence.

**Layout:** `action2`; schematic-with-fact-plaques; target `control-console`. Route/control labels: Trust visible default / Trust oracle and divert. **Timing:** 30 s active decision + 2.4 s resolution; last selection at deadline commits. **Default:** If you do nothing: Trust visible default. If the untested oracle is right, five die; the siding person survives.

**Provenance:** original. Original authored scenario; listed sources provide conceptual background, not this scenario or its score. Background: [luck](https://plato.stanford.edu/entries/moral-luck/).

**A. Trust visible default** (default, scene slot 0)

Before choice: If the untested oracle is right, five die; the siding person survives.

Outcome: Five hidden people die; the visible person survives.

Deaths: 5 human, 0 cockroach, 0 butterfly; raw **5**, weighted impact **5.0**. Included later human deaths: 0. Ratings: consequences 50, rightsDuties 85, fairness 60. Level score **65.0/100** (exact 195/3).

Strongest supporting reason: An untested machine gives weak grounds for imposing certain harm.

Ethical tension: This time its claim was true, but that does not validate its reliability.

**B. Trust oracle and divert** (scene-action, scene slot 1)

Before choice: One certainly dies; any people on the main track survive.

Outcome: One dies; five hidden people survive.

Deaths: 1 human, 0 cockroach, 0 butterfly; raw **1**, weighted impact **1.0**. Included later human deaths: 0. Ratings: consequences 60, rightsDuties 40, fairness 45. Level score **48.3/100** (exact 145/3).

Strongest supporting reason: The warning supplies a possible reason to investigate danger, though time is limited.

Ethical tension: A lucky oracle can still be a poor basis for future decisions.

Author-only world note: A vending machine labeled ORACLE claims five people occupy an unseen main route. It has never been tested. One person is visible on the siding. Outcomes are fixed reveals, not fresh random draws; do not expose this note or outcome objects before commitment.

### 105. The Missing Denominator

A sign says the alternate brake 'saved nine people' but gives no number of attempts. Leaving course kills two; trying the brake may save both or kill three.

**Domain:** Uncertainty. **Distinction:** Anecdotes versus usable probability evidence.

**Layout:** `action2`; schematic-with-fact-plaques; target `control-console`. Route/control labels: Keep known route / Try advertised brake. **Timing:** 30 s active decision + 2.4 s resolution; last selection at deadline commits. **Default:** If you do nothing: Keep known route. Two human deaths, certain.

**Provenance:** original. Original authored scenario; listed sources provide conceptual background, not this scenario or its score. Background: [luck](https://plato.stanford.edu/entries/moral-luck/).

**A. Keep known route** (default, scene slot 0)

Before choice: Two human deaths, certain.

Outcome: Two die; the untested alternate brake is unused.

Deaths: 2 human, 0 cockroach, 0 butterfly; raw **2**, weighted impact **2.0**. Included later human deaths: 0. Ratings: consequences 50, rightsDuties 75, fairness 60. Level score **61.7/100** (exact 185/3).

Strongest supporting reason: You avoid gambling with an unknown failure rate and a larger possible loss.

Ethical tension: Certainty about a bad result is not automatically preferable to ambiguity.

**B. Try advertised brake** (scene-action, scene slot 1)

Before choice: Unknown chance of zero deaths or three deaths.

Outcome: The brake works; everyone survives.

Deaths: 0 human, 0 cockroach, 0 butterfly; raw **0**, weighted impact **0.0**. Included later human deaths: 0. Ratings: consequences 60, rightsDuties 60, fairness 55. Level score **58.3/100** (exact 175/3).

Strongest supporting reason: The possibility of saving everyone is a serious reason to try.

Ethical tension: Nine advertised successes did not establish a reliable success rate.

Author-only world note: A sign says the alternate brake 'saved nine people' but gives no number of attempts. Leaving course kills two; trying the brake may save both or kill three. It actually works. Outcomes are fixed reveals, not fresh random draws; do not expose this note or outcome objects before commitment.

### 106. The Expert Split

Two equally qualified engineers disagree about whether a safe-looking brake will stop the trolley or redirect it onto three. Staying course kills two.

**Domain:** Uncertainty. **Distinction:** Disagreement among epistemic peers.

**Layout:** `action2`; schematic-with-fact-plaques; target `control-console`. Route/control labels: Keep course / Use disputed brake. **Timing:** 30 s active decision + 2.4 s resolution; last selection at deadline commits. **Default:** If you do nothing: Keep course. Two human deaths, certain.

**Provenance:** original. Original authored scenario; listed sources provide conceptual background, not this scenario or its score. Background: [luck](https://plato.stanford.edu/entries/moral-luck/).

**A. Keep course** (default, scene slot 0)

Before choice: Two human deaths, certain.

Outcome: Two die; the disputed brake is unused.

Deaths: 2 human, 0 cockroach, 0 butterfly; raw **2**, weighted impact **2.0**. Included later human deaths: 0. Ratings: consequences 55, rightsDuties 75, fairness 60. Level score **63.3/100** (exact 190/3).

Strongest supporting reason: Conflicting expert testimony weakens confidence in intervention.

Ethical tension: Inaction also chooses a certain harmful result.

**B. Use disputed brake** (scene-action, scene slot 1)

Before choice: Disputed chance of zero deaths or three deaths; no justified probability.

Outcome: The brake stops safely; everyone survives.

Deaths: 0 human, 0 cockroach, 0 butterfly; raw **0**, weighted impact **0.0**. Included later human deaths: 0. Ratings: consequences 60, rightsDuties 60, fairness 55. Level score **58.3/100** (exact 175/3).

Strongest supporting reason: One credible expert supports a rescue with no deaths.

Ethical tension: A successful result does not make the other expert unreasonable.

Author-only world note: Two equally qualified engineers disagree about whether a safe-looking brake will stop the trolley or redirect it onto three. Staying course kills two. The brake actually stops it. Outcomes are fixed reveals, not fresh random draws; do not expose this note or outcome objects before commitment.

### 107. The Sealed Envelope

Four face the main route. A sealed plan says the siding contains zero or six people with equal probability; opening it would arrive too late and leaves four on the main route.

**Domain:** Uncertainty. **Distinction:** Value of information under a real opportunity cost.

**Layout:** `action2`; schematic-with-fact-plaques; target `control-console`. Route/control labels: Wait for envelope / Divert without opening. **Timing:** 30 s active decision + 2.4 s resolution; last selection at deadline commits. **Default:** If you do nothing: Wait for envelope. Four die while the envelope is opened too late.

**Provenance:** original. Original authored scenario; listed sources provide conceptual background, not this scenario or its score. Background: [luck](https://plato.stanford.edu/entries/moral-luck/).

**A. Wait for envelope** (default, scene slot 0)

Before choice: Four die while the envelope is opened too late.

Outcome: Four die before the answer arrives; the envelope then reveals an empty siding.

Deaths: 4 human, 0 cockroach, 0 butterfly; raw **4**, weighted impact **4.0**. Included later human deaths: 0. Ratings: consequences 35, rightsDuties 85, fairness 60. Level score **60.0/100** (exact 180/3).

Strongest supporting reason: You seek knowledge before imposing an unknown burden.

Ethical tension: Information that cannot affect action has no rescue value in this moment.

**B. Divert without opening** (scene-action, scene slot 1)

Before choice: 50% chance of zero deaths; 50% chance of six deaths.

Outcome: The siding is empty; all four survive.

Deaths: 0 human, 0 cockroach, 0 butterfly; raw **0**, weighted impact **0.0**. Included later human deaths: 0. Ratings: consequences 75, rightsDuties 55, fairness 60. Level score **63.3/100** (exact 190/3).

Strongest supporting reason: The disclosed expected siding loss is three rather than four.

Ethical tension: A lower expectation still included a worse possible outcome.

Author-only world note: Four face the main route. A sealed plan says the siding contains zero or six people with equal probability; opening it would arrive too late and leaves four on the main route. In fact it contains zero. Outcomes are fixed reveals, not fresh random draws; do not expose this note or outcome objects before commitment.

### 108. The Free Sensor

Four face the trolley. A verified automatic sensor action both checks the siding and selects it only if empty, otherwise applies a safe buffer; all of this fits before commitment.

**Domain:** Uncertainty. **Distinction:** Dominance of costless reliable information.

**Layout:** `action2`; schematic-with-fact-plaques; target `control-console`. Route/control labels: Keep course / Use sensor procedure. **Timing:** 30 s active decision + 2.4 s resolution; last selection at deadline commits. **Default:** If you do nothing: Keep course. Four die; the free sensor is unused.

**Provenance:** original. Original authored scenario; listed sources provide conceptual background, not this scenario or its score. Background: [luck](https://plato.stanford.edu/entries/moral-luck/).

**A. Keep course** (default, scene slot 0)

Before choice: Four die; the free sensor is unused.

Outcome: Four die; the free sensor is unused.

Deaths: 4 human, 0 cockroach, 0 butterfly; raw **4**, weighted impact **4.0**. Included later human deaths: 0. Ratings: consequences 0, rightsDuties 25, fairness 20. Level score **15.0/100** (exact 45/3).

Strongest supporting reason: You avoid relying on machinery beyond the original track.

Ethical tension: The stipulated safe procedure removes the competing danger.

**B. Use sensor procedure** (scene-action, scene slot 1)

Before choice: The procedure finds an empty siding and saves all four.

Outcome: The procedure finds an empty siding and saves all four.

Deaths: 0 human, 0 cockroach, 0 butterfly; raw **0**, weighted impact **0.0**. Included later human deaths: 0. Ratings: consequences 100, rightsDuties 95, fairness 95. Level score **96.7/100** (exact 290/3).

Strongest supporting reason: Reliable, timely information can dissolve the apparent dilemma.

Ethical tension: Real sensors would need verification; this scenario supplies it.

### 109. The Biased Camera

A camera misses workers wearing reflective coats. It reports an empty siding, where a visible coat hangs; the main route certainly holds two.

**Domain:** Uncertainty. **Distinction:** Known measurement bias.

**Layout:** `fork2`; schematic-with-fact-plaques; target `rail-switch`. Route/control labels: Keep main route / Trust empty report. **Timing:** 30 s active decision + 2.4 s resolution; last selection at deadline commits. **Default:** If you do nothing: Keep main route. Two certain deaths; hidden siding workers survive.

**Provenance:** original. Original authored scenario; listed sources provide conceptual background, not this scenario or its score. Background: [luck](https://plato.stanford.edu/entries/moral-luck/).

**A. Keep main route** (default, scene slot 0)

Before choice: Two certain deaths; hidden siding workers survive.

Outcome: Two die; three hidden siding workers survive.

Deaths: 2 human, 0 cockroach, 0 butterfly; raw **2**, weighted impact **2.0**. Included later human deaths: 0. Ratings: consequences 65, rightsDuties 80, fairness 70. Level score **71.7/100** (exact 215/3).

Strongest supporting reason: A known blind spot undermines the reassuring report.

Ethical tension: The coat is evidence of risk, not proof of three people.

**B. Trust empty report** (select-route, scene slot 1)

Before choice: Unknown number of siding workers may die; two on the main route survive.

Outcome: Three siding workers die; two survive.

Deaths: 3 human, 0 cockroach, 0 butterfly; raw **3**, weighted impact **3.0**. Included later human deaths: 0. Ratings: consequences 30, rightsDuties 35, fairness 30. Level score **31.7/100** (exact 95/3).

Strongest supporting reason: If the report were sound, diversion would save everyone.

Ethical tension: You relied on a measurement known to miss this exact case.

Author-only world note: A camera misses workers wearing reflective coats. It reports an empty siding, where a visible coat hangs; the main route certainly holds two. The siding actually holds three. Outcomes are fixed reveals, not fresh random draws; do not expose this note or outcome objects before commitment.

### 110. The Honest Interval

The main route certainly holds three. The siding holds between one and five, with no justified probability distribution.

**Domain:** Uncertainty. **Distinction:** Ambiguity without invented odds.

**Layout:** `fork2`; schematic-with-fact-plaques; target `rail-switch`. Route/control labels: Keep known three / Choose uncertain siding. **Timing:** 30 s active decision + 2.4 s resolution; last selection at deadline commits. **Default:** If you do nothing: Keep known three. Three certain deaths.

**Provenance:** original. Original authored scenario; listed sources provide conceptual background, not this scenario or its score. Background: [luck](https://plato.stanford.edu/entries/moral-luck/).

**A. Keep known three** (default, scene slot 0)

Before choice: Three certain deaths.

Outcome: Three die; two hidden siding occupants survive.

Deaths: 3 human, 0 cockroach, 0 butterfly; raw **3**, weighted impact **3.0**. Included later human deaths: 0. Ratings: consequences 55, rightsDuties 80, fairness 60. Level score **65.0/100** (exact 195/3).

Strongest supporting reason: You avoid a route that could impose a larger loss.

Ethical tension: Choosing certainty does not prove the unknown alternative worse.

**B. Choose uncertain siding** (select-route, scene slot 1)

Before choice: Between one and five deaths; no justified probability distribution.

Outcome: Two die; three survive.

Deaths: 2 human, 0 cockroach, 0 butterfly; raw **2**, weighted impact **2.0**. Included later human deaths: 0. Ratings: consequences 60, rightsDuties 50, fairness 55. Level score **55.0/100** (exact 165/3).

Strongest supporting reason: The siding could reduce deaths and is not known to be worse.

Ethical tension: No evidence justified treating every possible count as equally likely.

Author-only world note: The main route certainly holds three. The siding holds between one and five, with no justified probability distribution; it actually holds two. Outcomes are fixed reveals, not fresh random draws; do not expose this note or outcome objects before commitment.

### 111. The Guaranteed Pair

Five face the trolley. An experimental brake has a disclosed 50% chance to save all and 50% to kill five; a siding certainly kills two.

**Domain:** Uncertainty. **Distinction:** Risk preference and a safe compromise.

**Layout:** `action3`; schematic-with-fact-plaques; target `control-console`. Route/control labels: Keep five route / Use experimental brake / Use two-person siding. **Timing:** 30 s active decision + 2.4 s resolution; last selection at deadline commits. **Default:** If you do nothing: Keep five route. Five certain deaths.

**Provenance:** original. Original authored scenario; listed sources provide conceptual background, not this scenario or its score. Background: [luck](https://plato.stanford.edu/entries/moral-luck/).

**A. Keep five route** (default, scene slot 0)

Before choice: Five certain deaths.

Outcome: Five die; neither rescue is used.

Deaths: 5 human, 0 cockroach, 0 butterfly; raw **5**, weighted impact **5.0**. Included later human deaths: 0. Ratings: consequences 10, rightsDuties 80, fairness 40. Level score **43.3/100** (exact 130/3).

Strongest supporting reason: You avoid introducing a new mechanism or new victim.

Ethical tension: Both alternatives offered stronger rescue prospects.

**B. Use experimental brake** (scene-action, scene slot 1)

Before choice: 50% chance of zero deaths; 50% chance of five deaths.

Outcome: The brake fails; all five die.

Deaths: 5 human, 0 cockroach, 0 butterfly; raw **5**, weighted impact **5.0**. Included later human deaths: 0. Ratings: consequences 60, rightsDuties 60, fairness 55. Level score **58.3/100** (exact 175/3).

Strongest supporting reason: The chance to save everyone has substantial appeal.

Ethical tension: Its expected loss was higher than the certain two-person alternative.

**C. Use two-person siding** (scene-action, scene slot 2)

Before choice: Two certain deaths.

Outcome: Two die; five main-track people survive.

Deaths: 2 human, 0 cockroach, 0 butterfly; raw **2**, weighted impact **2.0**. Included later human deaths: 0. Ratings: consequences 85, rightsDuties 50, fairness 60. Level score **65.0/100** (exact 195/3).

Strongest supporting reason: The guaranteed smaller loss limits both expected deaths and worst-case loss.

Ethical tension: Certainty is obtained by imposing deaths on two previously safe people.

Author-only world note: Five face the trolley. An experimental brake has a disclosed 50% chance to save all and 50% to kill five; a siding certainly kills two. Here the brake fails. Outcomes are fixed reveals, not fresh random draws; do not expose this note or outcome objects before commitment.

### 112. The Confidence Costume

A confident operator in a gold cape recommends a risky route; a hesitant verified engineer recommends the safe empty siding. The default holds two.

**Domain:** Uncertainty. **Distinction:** Presentation confidence versus credentials and evidence.

**Layout:** `action2`; schematic-with-fact-plaques; target `control-console`. Route/control labels: Follow cape by default / Follow verified engineer. **Timing:** 30 s active decision + 2.4 s resolution; last selection at deadline commits. **Default:** If you do nothing: Follow cape by default. Two die; the confident recommendation was wrong.

**Provenance:** original. Original authored scenario; listed sources provide conceptual background, not this scenario or its score. Background: [luck](https://plato.stanford.edu/entries/moral-luck/).

**A. Follow cape by default** (default, scene slot 0)

Before choice: Two die; the confident recommendation was wrong.

Outcome: Two die; the confident recommendation was wrong.

Deaths: 2 human, 0 cockroach, 0 butterfly; raw **2**, weighted impact **2.0**. Included later human deaths: 0. Ratings: consequences 10, rightsDuties 35, fairness 30. Level score **25.0/100** (exact 75/3).

Strongest supporting reason: A decisive voice can coordinate action in emergencies.

Ethical tension: Confidence and costume provided no evidence of expertise.

**B. Follow verified engineer** (scene-action, scene slot 1)

Before choice: Both survive on the empty siding.

Outcome: Both survive on the empty siding.

Deaths: 0 human, 0 cockroach, 0 butterfly; raw **0**, weighted impact **0.0**. Included later human deaths: 0. Ratings: consequences 100, rightsDuties 95, fairness 90. Level score **95.0/100** (exact 285/3).

Strongest supporting reason: The engineer's verified evidence outweighs rhetorical certainty.

Ethical tension: Hesitation can express care rather than incompetence.

### 113. The Old Map

Three face the trolley. A ten-year-old map marks the siding empty, but current construction notices warn of crews.

**Domain:** Uncertainty. **Distinction:** Stale evidence and updating.

**Layout:** `fork2`; schematic-with-fact-plaques; target `rail-switch`. Route/control labels: Keep main route / Use mapped siding. **Timing:** 30 s active decision + 2.4 s resolution; last selection at deadline commits. **Default:** If you do nothing: Keep main route. Three certain deaths.

**Provenance:** original. Original authored scenario; listed sources provide conceptual background, not this scenario or its score. Background: [luck](https://plato.stanford.edu/entries/moral-luck/).

**A. Keep main route** (default, scene slot 0)

Before choice: Three certain deaths.

Outcome: Three die; the worker survives.

Deaths: 3 human, 0 cockroach, 0 butterfly; raw **3**, weighted impact **3.0**. Included later human deaths: 0. Ratings: consequences 50, rightsDuties 80, fairness 60. Level score **63.3/100** (exact 190/3).

Strongest supporting reason: Current warnings defeat certainty that the siding is empty.

Ethical tension: They do not establish that staying course minimizes loss.

**B. Use mapped siding** (select-route, scene slot 1)

Before choice: Unknown crew occupancy; any workers on the siding die.

Outcome: One worker dies; three survive.

Deaths: 1 human, 0 cockroach, 0 butterfly; raw **1**, weighted impact **1.0**. Included later human deaths: 0. Ratings: consequences 65, rightsDuties 45, fairness 50. Level score **53.3/100** (exact 160/3).

Strongest supporting reason: The route could reduce the threatened loss.

Ethical tension: The old map could not honestly support a claim of zero risk.

Author-only world note: Three face the trolley. A ten-year-old map marks the siding empty, but current construction notices warn of crews. The siding actually has one worker. Outcomes are fixed reveals, not fresh random draws; do not expose this note or outcome objects before commitment.

### 114. The Reliable Ninety

Three face the trolley. A tested brake succeeds 90% of the time, otherwise leaving the same three in danger. No added victims are possible.

**Domain:** Uncertainty. **Distinction:** Good decision, bad outcome.

**Layout:** `action2`; schematic-with-fact-plaques; target `control-console`. Route/control labels: Keep course / Try brake. **Timing:** 30 s active decision + 2.4 s resolution; last selection at deadline commits. **Default:** If you do nothing: Keep course. Three certain deaths.

**Provenance:** original. Original authored scenario; listed sources provide conceptual background, not this scenario or its score. Background: [luck](https://plato.stanford.edu/entries/moral-luck/).

**A. Keep course** (default, scene slot 0)

Before choice: Three certain deaths.

Outcome: Three die without a rescue attempt.

Deaths: 3 human, 0 cockroach, 0 butterfly; raw **3**, weighted impact **3.0**. Included later human deaths: 0. Ratings: consequences 5, rightsDuties 30, fairness 25. Level score **20.0/100** (exact 60/3).

Strongest supporting reason: You avoid dependence on an imperfect device.

Ethical tension: Imperfection is no reason to reject a chance with no added downside.

**B. Try brake** (scene-action, scene slot 1)

Before choice: 90% chance of zero deaths; 10% chance of the same three deaths, with no added victims.

Outcome: The brake fails; the three die.

Deaths: 3 human, 0 cockroach, 0 butterfly; raw **3**, weighted impact **3.0**. Included later human deaths: 0. Ratings: consequences 95, rightsDuties 90, fairness 90. Level score **91.7/100** (exact 275/3).

Strongest supporting reason: The attempt offered a strong chance of rescue without extra danger.

Ethical tension: Failure should not convert a well-supported choice into a bad one.

Author-only world note: Three face the trolley. A tested brake succeeds 90% of the time, otherwise leaving the same three in danger. No added victims are possible. It fails here. Outcomes are fixed reveals, not fresh random draws; do not expose this note or outcome objects before commitment.

### 115. The Lucky One Percent

Three face the trolley. A gimmick has a 1% chance to stop safely and a 99% chance to kill four bystanders instead; a reliable siding kills one.

**Domain:** Uncertainty. **Distinction:** Bad odds, fortunate result.

**Layout:** `action3`; schematic-with-fact-plaques; target `control-console`. Route/control labels: Keep three route / Try gimmick / Use reliable siding. **Timing:** 30 s active decision + 2.4 s resolution; last selection at deadline commits. **Default:** If you do nothing: Keep three route. Three certain deaths.

**Provenance:** original. Original authored scenario; listed sources provide conceptual background, not this scenario or its score. Background: [luck](https://plato.stanford.edu/entries/moral-luck/).

**A. Keep three route** (default, scene slot 0)

Before choice: Three certain deaths.

Outcome: Three die; bystanders and siding occupant survive.

Deaths: 3 human, 0 cockroach, 0 butterfly; raw **3**, weighted impact **3.0**. Included later human deaths: 0. Ratings: consequences 25, rightsDuties 85, fairness 55. Level score **55.0/100** (exact 165/3).

Strongest supporting reason: You avoid exposing others to new danger.

Ethical tension: A reliable lower-loss option remains unused.

**B. Try gimmick** (scene-action, scene slot 1)

Before choice: 1% chance of zero deaths; 99% chance of four bystander deaths.

Outcome: The gimmick succeeds; everyone survives.

Deaths: 0 human, 0 cockroach, 0 butterfly; raw **0**, weighted impact **0.0**. Included later human deaths: 0. Ratings: consequences 15, rightsDuties 25, fairness 20. Level score **20.0/100** (exact 60/3).

Strongest supporting reason: The tiny chance of saving everyone is a real attraction.

Ethical tension: Luck does not make a reckless distribution of risk well justified.

**C. Use reliable siding** (scene-action, scene slot 2)

Before choice: One certain death.

Outcome: One dies; three survive.

Deaths: 1 human, 0 cockroach, 0 butterfly; raw **1**, weighted impact **1.0**. Included later human deaths: 0. Ratings: consequences 85, rightsDuties 55, fairness 65. Level score **68.3/100** (exact 205/3).

Strongest supporting reason: The verified alternative limits the predictable loss.

Ethical tension: The person sacrificed still bears a certain harm.

Author-only world note: Three face the trolley. A gimmick has a 1% chance to stop safely and a 99% chance to kill four bystanders instead; a reliable siding kills one. The gimmick succeeds here. Outcomes are fixed reveals, not fresh random draws; do not expose this note or outcome objects before commitment.

### 116. The Misleading Streak

A tested 50% brake has worked ten times in other incidents. This incident remains independently 50%; failure kills four, success saves all. A siding kills one.

**Domain:** Uncertainty. **Distinction:** Independence and the temptation of streaks.

**Layout:** `action3`; schematic-with-fact-plaques; target `control-console`. Route/control labels: Keep four route / Ride lucky streak / Use one-person siding. **Timing:** 30 s active decision + 2.4 s resolution; last selection at deadline commits. **Default:** If you do nothing: Keep four route. Four certain deaths.

**Provenance:** original. Original authored scenario; listed sources provide conceptual background, not this scenario or its score. Background: [luck](https://plato.stanford.edu/entries/moral-luck/).

**A. Keep four route** (default, scene slot 0)

Before choice: Four certain deaths.

Outcome: Four die; the alternatives are unused.

Deaths: 4 human, 0 cockroach, 0 butterfly; raw **4**, weighted impact **4.0**. Included later human deaths: 0. Ratings: consequences 20, rightsDuties 80, fairness 45. Level score **48.3/100** (exact 145/3).

Strongest supporting reason: You avoid introducing a new victim.

Ethical tension: A stronger rescue option was available.

**B. Ride lucky streak** (scene-action, scene slot 1)

Before choice: 50% chance of zero deaths; 50% chance of four deaths, independent of the previous streak.

Outcome: The brake fails; four die.

Deaths: 4 human, 0 cockroach, 0 butterfly; raw **4**, weighted impact **4.0**. Included later human deaths: 0. Ratings: consequences 55, rightsDuties 55, fairness 50. Level score **53.3/100** (exact 160/3).

Strongest supporting reason: A 50% chance of saving everyone is worth considering.

Ethical tension: The streak did not improve that chance.

**C. Use one-person siding** (scene-action, scene slot 2)

Before choice: One certain death.

Outcome: One dies; four survive.

Deaths: 1 human, 0 cockroach, 0 butterfly; raw **1**, weighted impact **1.0**. Included later human deaths: 0. Ratings: consequences 85, rightsDuties 55, fairness 65. Level score **68.3/100** (exact 205/3).

Strongest supporting reason: The expected loss is lower than the brake's two.

Ethical tension: A risk comparison cannot erase the imposed victim's claim.

Author-only world note: A tested 50% brake has worked ten times in other incidents. This incident remains independently 50%; failure kills four, success saves all. A siding kills one. The brake fails. Outcomes are fixed reveals, not fresh random draws; do not expose this note or outcome objects before commitment.

### 117. The Unknown Identity

Three face the trolley. One masked person is on the siding; their job, age, and name are unknown and irrelevant to the physics.

**Domain:** Uncertainty. **Distinction:** Missing identity versus missing morally relevant evidence.

**Layout:** `fork2`; schematic-with-fact-plaques; target `rail-switch`. Route/control labels: Keep route / Divert. **Timing:** 30 s active decision + 2.4 s resolution; last selection at deadline commits. **Default:** If you do nothing: Keep route. Three die; the masked person survives.

**Provenance:** original. Original authored scenario; listed sources provide conceptual background, not this scenario or its score. Background: [luck](https://plato.stanford.edu/entries/moral-luck/).

**A. Keep route** (default, scene slot 0)

Before choice: Three die; the masked person survives.

Outcome: Three die; the masked person survives.

Deaths: 3 human, 0 cockroach, 0 butterfly; raw **3**, weighted impact **3.0**. Included later human deaths: 0. Ratings: consequences 25, rightsDuties 85, fairness 55. Level score **55.0/100** (exact 165/3).

Strongest supporting reason: You refuse to redirect harm toward a person you cannot identify.

Ethical tension: An unknown name is not uncertainty about whether a person counts.

**B. Divert** (select-route, scene slot 1)

Before choice: The masked person dies; three survive.

Outcome: The masked person dies; three survive.

Deaths: 1 human, 0 cockroach, 0 butterfly; raw **1**, weighted impact **1.0**. Included later human deaths: 0. Ratings: consequences 85, rightsDuties 55, fairness 65. Level score **68.3/100** (exact 205/3).

Strongest supporting reason: Equal human standing allows comparison without demographic scoring.

Ethical tension: Anonymity can also make imposing harm feel too easy.

### 118. The Strategic Witness

A witness who profits if the trolley hits the siding claims it is empty. The main route holds two.

**Domain:** Uncertainty. **Distinction:** Conflicts of interest in testimony.

**Layout:** `fork2`; schematic-with-fact-plaques; target `rail-switch`. Route/control labels: Distrust claim / Trust witness. **Timing:** 30 s active decision + 2.4 s resolution; last selection at deadline commits. **Default:** If you do nothing: Distrust claim. Two certain deaths.

**Provenance:** original. Original authored scenario; listed sources provide conceptual background, not this scenario or its score. Background: [luck](https://plato.stanford.edu/entries/moral-luck/).

**A. Distrust claim** (default, scene slot 0)

Before choice: Two certain deaths.

Outcome: Two die; the siding person survives.

Deaths: 2 human, 0 cockroach, 0 butterfly; raw **2**, weighted impact **2.0**. Included later human deaths: 0. Ratings: consequences 55, rightsDuties 80, fairness 65. Level score **66.7/100** (exact 200/3).

Strongest supporting reason: The witness has a motive to mislead about a decisive fact.

Ethical tension: A conflict is reason for caution, not proof the alternative is worse.

**B. Trust witness** (select-route, scene slot 1)

Before choice: The conflicted witness claims zero; any actual siding occupants die.

Outcome: One dies; two survive; the witness profits.

Deaths: 1 human, 0 cockroach, 0 butterfly; raw **1**, weighted impact **1.0**. Included later human deaths: 0. Ratings: consequences 55, rightsDuties 40, fairness 40. Level score **45.0/100** (exact 135/3).

Strongest supporting reason: The report offers a possible zero-death rescue.

Ethical tension: The lower realized loss does not repair the weak evidential basis.

Author-only world note: A witness who profits if the trolley hits the siding claims it is empty. The main route holds two; the siding actually holds one. Outcomes are fixed reveals, not fresh random draws; do not expose this note or outcome objects before commitment.

### 119. The Precaution Dial

The main route holds one. A new diversion has a 5% chance of killing twenty and otherwise saves all.

**Domain:** Uncertainty. **Distinction:** Precaution when equal expected loss hides catastrophe.

**Layout:** `fork2`; schematic-with-fact-plaques; target `rail-switch`. Route/control labels: Keep known one / Take low catastrophe risk. **Timing:** 30 s active decision + 2.4 s resolution; last selection at deadline commits. **Default:** If you do nothing: Keep known one. One certain death.

**Provenance:** original. Original authored scenario; listed sources provide conceptual background, not this scenario or its score. Background: [luck](https://plato.stanford.edu/entries/moral-luck/).

**A. Keep known one** (default, scene slot 0)

Before choice: One certain death.

Outcome: One dies; no catastrophic risk is taken.

Deaths: 1 human, 0 cockroach, 0 butterfly; raw **1**, weighted impact **1.0**. Included later human deaths: 0. Ratings: consequences 60, rightsDuties 80, fairness 65. Level score **68.3/100** (exact 205/3).

Strongest supporting reason: You avoid exposing twenty people to a newly created lethal risk.

Ethical tension: The choice gives up a high chance of saving everyone.

**B. Take low catastrophe risk** (select-route, scene slot 1)

Before choice: 95% chance of zero deaths; 5% chance of twenty deaths.

Outcome: Everyone survives; the dangerous failure does not occur.

Deaths: 0 human, 0 cockroach, 0 butterfly; raw **0**, weighted impact **0.0**. Included later human deaths: 0. Ratings: consequences 60, rightsDuties 45, fairness 45. Level score **50.0/100** (exact 150/3).

Strongest supporting reason: The large chance of a zero-death result is compelling.

Ethical tension: The expected death count was equal, but the risk was distributed very differently.

Author-only world note: The main route holds one. A new diversion has a 5% chance of killing twenty and otherwise saves all. The alternate route is actually clear. Outcomes are fixed reveals, not fresh random draws; do not expose this note or outcome objects before commitment.

### 120. The Humble Conclusion

Four face the main route. A report gives a 60% chance an empty-looking siding is clear, otherwise two occupants. A second siding certainly holds one.

**Domain:** Uncertainty. **Distinction:** Expected value, certainty, and honest retrospective explanation.

**Layout:** `fork3`; schematic-with-fact-plaques; target `rail-switch`. Route/control labels: Keep four route / Use uncertain siding / Use certain-one siding. **Timing:** 30 s active decision + 2.4 s resolution; last selection at deadline commits. **Default:** If you do nothing: Keep four route. Four certain deaths.

**Provenance:** original. Original authored scenario; listed sources provide conceptual background, not this scenario or its score. Background: [luck](https://plato.stanford.edu/entries/moral-luck/).

**A. Keep four route** (default, scene slot 0)

Before choice: Four certain deaths.

Outcome: Four die; all siding occupants survive.

Deaths: 4 human, 0 cockroach, 0 butterfly; raw **4**, weighted impact **4.0**. Included later human deaths: 0. Ratings: consequences 15, rightsDuties 85, fairness 45. Level score **48.3/100** (exact 145/3).

Strongest supporting reason: You avoid imposing danger under imperfect information.

Ethical tension: Both alternatives offered substantially lower expected loss.

**B. Use uncertain siding** (select-route, scene slot 1)

Before choice: 60% chance of zero deaths; 40% chance of two deaths.

Outcome: The siding proves clear; four survive.

Deaths: 0 human, 0 cockroach, 0 butterfly; raw **0**, weighted impact **0.0**. Included later human deaths: 0. Ratings: consequences 85, rightsDuties 55, fairness 60. Level score **66.7/100** (exact 200/3).

Strongest supporting reason: Its expected loss was 0.8, below the certain one-person loss.

Ethical tension: You should explain the risk you accepted even after success.

**C. Use certain-one siding** (select-route, scene slot 2)

Before choice: One certain death.

Outcome: One dies; four survive.

Deaths: 1 human, 0 cockroach, 0 butterfly; raw **1**, weighted impact **1.0**. Included later human deaths: 0. Ratings: consequences 75, rightsDuties 55, fairness 60. Level score **63.3/100** (exact 190/3).

Strongest supporting reason: The known result limits uncertainty about whom you endanger.

Ethical tension: Avoiding ambiguity cost more expected lives in the stated model.

Author-only world note: Four face the main route. A report gives a 60% chance an empty-looking siding is clear, otherwise two occupants; it is actually clear. A second siding certainly holds one. Outcomes are fixed reveals, not fresh random draws; do not expose this note or outcome objects before commitment.

## Chapter 7: Responsibility and authority

### 121. The Manager's Order

Five face the trolley; one is on the siding. Your manager orders you never to touch the switch but offers no safety reason.

**Domain:** Responsibility and authority. **Distinction:** Obedience versus independent moral responsibility.

**Layout:** `fork2`; schematic-with-fact-plaques; target `rail-switch`. Route/control labels: Obey manager / Disobey and divert. **Timing:** 30 s active decision + 2.4 s resolution; last selection at deadline commits. **Default:** If you do nothing: Obey manager. Five die; one survives.

**Provenance:** original. Original authored scenario; listed sources provide conceptual background, not this scenario or its score. Background: [doing](https://plato.stanford.edu/entries/doing-allowing/), [obligations](https://plato.stanford.edu/entries/special-obligations/).

**A. Obey manager** (default, scene slot 0)

Before choice: Five die; one survives.

Outcome: Five die; one survives.

Deaths: 5 human, 0 cockroach, 0 butterfly; raw **5**, weighted impact **5.0**. Included later human deaths: 0. Ratings: consequences 20, rightsDuties 60, autonomy 60, fairness 45. Level score **46.2/100** (exact 185/4).

Strongest supporting reason: Coordinated systems normally need reliable obedience.

Ethical tension: An unexplained order cannot absorb your moral responsibility.

**B. Disobey and divert** (select-route, scene slot 1)

Before choice: One dies; five survive.

Outcome: One dies; five survive.

Deaths: 1 human, 0 cockroach, 0 butterfly; raw **1**, weighted impact **1.0**. Included later human deaths: 0. Ratings: consequences 90, rightsDuties 60, autonomy 55, fairness 65. Level score **67.5/100** (exact 270/4).

Strongest supporting reason: Urgent rescue can justify departing from an unsupported instruction.

Ethical tension: You must still answer for the harm imposed by disobedience.

### 122. The Safety Rule's Reason

Three face the trolley. A sign forbids diversion because it would derail into eight hidden workers, a fact verified on screen.

**Domain:** Responsibility and authority. **Distinction:** Understanding rules rather than reflexively defying them.

**Layout:** `fork2`; schematic-with-fact-plaques; target `rail-switch`. Route/control labels: Follow rule / Break rule. **Timing:** 30 s active decision + 2.4 s resolution; last selection at deadline commits. **Default:** If you do nothing: Follow rule. Three die; eight workers survive.

**Provenance:** original. Original authored scenario; listed sources provide conceptual background, not this scenario or its score. Background: [doing](https://plato.stanford.edu/entries/doing-allowing/), [obligations](https://plato.stanford.edu/entries/special-obligations/).

**A. Follow rule** (default, scene slot 0)

Before choice: Three die; eight workers survive.

Outcome: Three die; eight workers survive.

Deaths: 3 human, 0 cockroach, 0 butterfly; raw **3**, weighted impact **3.0**. Included later human deaths: 0. Ratings: consequences 85, rightsDuties 90, fairness 85. Level score **86.7/100** (exact 260/3).

Strongest supporting reason: The rule tracks a real larger danger.

Ethical tension: Following it remains tragic for the three.

**B. Break rule** (select-route, scene slot 1)

Before choice: Eight die; three survive.

Outcome: Eight die; three survive.

Deaths: 8 human, 0 cockroach, 0 butterfly; raw **8**, weighted impact **8.0**. Included later human deaths: 0. Ratings: consequences 10, rightsDuties 15, fairness 15. Level score **13.3/100** (exact 40/3).

Strongest supporting reason: You try to rescue the people immediately visible.

Ethical tension: The known reason for the rule defeats that rescue's justification.

### 123. The Obsolete Rule

Three face the trolley. A sign forbids a siding because of an old bridge, but a current verified inspection shows a safe empty buffer replaced it.

**Domain:** Responsibility and authority. **Distinction:** Updating authority when its rationale expires.

**Layout:** `fork2`; schematic-with-fact-plaques; target `rail-switch`. Route/control labels: Follow obsolete sign / Use updated safe route. **Timing:** 30 s active decision + 2.4 s resolution; last selection at deadline commits. **Default:** If you do nothing: Follow obsolete sign. Three die; the safe buffer is unused.

**Provenance:** original. Original authored scenario; listed sources provide conceptual background, not this scenario or its score. Background: [doing](https://plato.stanford.edu/entries/doing-allowing/), [obligations](https://plato.stanford.edu/entries/special-obligations/).

**A. Follow obsolete sign** (default, scene slot 0)

Before choice: Three die; the safe buffer is unused.

Outcome: Three die; the safe buffer is unused.

Deaths: 3 human, 0 cockroach, 0 butterfly; raw **3**, weighted impact **3.0**. Included later human deaths: 0. Ratings: consequences 10, rightsDuties 45, fairness 35. Level score **30.0/100** (exact 90/3).

Strongest supporting reason: Stable rules can prevent improvisational mistakes.

Ethical tension: Verified new information removes this rule's reason.

**B. Use updated safe route** (select-route, scene slot 1)

Before choice: All three survive.

Outcome: All three survive.

Deaths: 0 human, 0 cockroach, 0 butterfly; raw **0**, weighted impact **0.0**. Included later human deaths: 0. Ratings: consequences 100, rightsDuties 90, fairness 90. Level score **93.3/100** (exact 280/3).

Strongest supporting reason: Current verified conditions support a safe rescue.

Ethical tension: Exceptions should rest on evidence as strong as that supplied here.

### 124. The Committee Delay

Four face the trolley. A safe brake is available now; mandatory committee review finishes only after impact.

**Domain:** Responsibility and authority. **Distinction:** Procedural legitimacy versus urgency.

**Layout:** `action2`; schematic-with-fact-plaques; target `control-console`. Route/control labels: Wait for committee / Apply brake now. **Timing:** 30 s active decision + 2.4 s resolution; last selection at deadline commits. **Default:** If you do nothing: Wait for committee. Four die before approval arrives.

**Provenance:** original. Original authored scenario; listed sources provide conceptual background, not this scenario or its score. Background: [doing](https://plato.stanford.edu/entries/doing-allowing/), [obligations](https://plato.stanford.edu/entries/special-obligations/).

**A. Wait for committee** (default, scene slot 0)

Before choice: Four die before approval arrives.

Outcome: Four die before approval arrives.

Deaths: 4 human, 0 cockroach, 0 butterfly; raw **4**, weighted impact **4.0**. Included later human deaths: 0. Ratings: consequences 10, rightsDuties 50, autonomy 65, fairness 40. Level score **41.2/100** (exact 165/4).

Strongest supporting reason: Review ordinarily checks unilateral power.

Ethical tension: A procedure that cannot respond in time cannot rescue these people.

**B. Apply brake now** (scene-action, scene slot 1)

Before choice: All survive; review occurs afterward.

Outcome: All survive; review occurs afterward.

Deaths: 0 human, 0 cockroach, 0 butterfly; raw **0**, weighted impact **0.0**. Included later human deaths: 0. Ratings: consequences 100, rightsDuties 85, autonomy 60, fairness 80. Level score **81.2/100** (exact 325/4).

Strongest supporting reason: A bounded emergency action prevents irreversible loss.

Ethical tension: Accountability should follow rather than vanish with urgency.

### 125. The Automatic Blame Form

Four face the trolley; one is on the siding. Diverting prints your name on an official blame form; inaction prints 'system error.'

**Domain:** Responsibility and authority. **Distinction:** Institutional incentives and accountability avoidance.

**Layout:** `fork2`; schematic-with-fact-plaques; target `rail-switch`. Route/control labels: Leave system route / Divert under your name. **Timing:** 30 s active decision + 2.4 s resolution; last selection at deadline commits. **Default:** If you do nothing: Leave system route. Four die; the form blames the system.

**Provenance:** original. Original authored scenario; listed sources provide conceptual background, not this scenario or its score. Background: [doing](https://plato.stanford.edu/entries/doing-allowing/), [obligations](https://plato.stanford.edu/entries/special-obligations/).

**A. Leave system route** (default, scene slot 0)

Before choice: Four die; the form blames the system.

Outcome: Four die; the form blames the system.

Deaths: 4 human, 0 cockroach, 0 butterfly; raw **4**, weighted impact **4.0**. Included later human deaths: 0. Ratings: consequences 25, rightsDuties 80, fairness 45. Level score **50.0/100** (exact 150/3).

Strongest supporting reason: You avoid redirecting harm and personal accusation.

Ethical tension: A blame label is not a moral argument for four deaths.

**B. Divert under your name** (select-route, scene slot 1)

Before choice: One dies; four survive; the form names you.

Outcome: One dies; four survive; the form names you.

Deaths: 1 human, 0 cockroach, 0 butterfly; raw **1**, weighted impact **1.0**. Included later human deaths: 0. Ratings: consequences 85, rightsDuties 55, fairness 65. Level score **68.3/100** (exact 205/3).

Strongest supporting reason: You accept accountability for a rescue that reduces loss.

Ethical tension: Accepting blame does not itself make the intervention justified.

### 126. The Two Keys

Four face the trolley; one is on the siding. Another operator has already turned their key; your matching key is necessary for diversion.

**Domain:** Responsibility and authority. **Distinction:** Shared necessary causes.

**Layout:** `action2`; schematic-with-fact-plaques; target `control-console`. Route/control labels: Leave your key / Turn your key. **Timing:** 30 s active decision + 2.4 s resolution; last selection at deadline commits. **Default:** If you do nothing: Leave your key. Four die; one survives.

**Provenance:** original. Original authored scenario; listed sources provide conceptual background, not this scenario or its score. Background: [doing](https://plato.stanford.edu/entries/doing-allowing/), [obligations](https://plato.stanford.edu/entries/special-obligations/).

**A. Leave your key** (default, scene slot 0)

Before choice: Four die; one survives.

Outcome: Four die; one survives.

Deaths: 4 human, 0 cockroach, 0 butterfly; raw **4**, weighted impact **4.0**. Included later human deaths: 0. Ratings: consequences 25, rightsDuties 85, fairness 55. Level score **55.0/100** (exact 165/3).

Strongest supporting reason: You refuse to complete an imposed lethal redirection.

Ethical tension: The other operator's intention does not decide your responsibility.

**B. Turn your key** (scene-action, scene slot 1)

Before choice: One dies; four survive.

Outcome: One dies; four survive.

Deaths: 1 human, 0 cockroach, 0 butterfly; raw **1**, weighted impact **1.0**. Included later human deaths: 0. Ratings: consequences 85, rightsDuties 55, fairness 65. Level score **68.3/100** (exact 205/3).

Strongest supporting reason: Your contribution enables the lower-loss route.

Ethical tension: Shared control does not mean nobody is responsible.

### 127. The Rubber Stamp

An algorithm recommends diverting from four to one; all relevant counts are visible and reliable. Your approval is required.

**Domain:** Responsibility and authority. **Distinction:** Human oversight beyond ceremonial approval.

**Layout:** `action2`; schematic-with-fact-plaques; target `control-console`. Route/control labels: Reject recommendation / Approve after review. **Timing:** 30 s active decision + 2.4 s resolution; last selection at deadline commits. **Default:** If you do nothing: Reject recommendation. Four die; one survives.

**Provenance:** original. Original authored scenario; listed sources provide conceptual background, not this scenario or its score. Background: [doing](https://plato.stanford.edu/entries/doing-allowing/), [obligations](https://plato.stanford.edu/entries/special-obligations/).

**A. Reject recommendation** (default, scene slot 0)

Before choice: Four die; one survives.

Outcome: Four die; one survives.

Deaths: 4 human, 0 cockroach, 0 butterfly; raw **4**, weighted impact **4.0**. Included later human deaths: 0. Ratings: consequences 25, rightsDuties 85, fairness 55. Level score **55.0/100** (exact 165/3).

Strongest supporting reason: Human oversight can protect against automatic harm.

Ethical tension: Rejecting a recommendation still needs reasons that fit these facts.

**B. Approve after review** (scene-action, scene slot 1)

Before choice: One dies; four survive.

Outcome: One dies; four survive.

Deaths: 1 human, 0 cockroach, 0 butterfly; raw **1**, weighted impact **1.0**. Included later human deaths: 0. Ratings: consequences 85, rightsDuties 55, fairness 65. Level score **68.3/100** (exact 205/3).

Strongest supporting reason: The independently visible facts support reducing deaths.

Ethical tension: Saying 'the algorithm chose' would conceal your own authorization.

### 128. The Secret Algorithm

An opaque model recommends a route it calls optimal but will not reveal its criteria. Staying kills two; the recommended route actually kills three.

**Domain:** Responsibility and authority. **Distinction:** Opacity and warranted trust.

**Layout:** `action2`; schematic-with-fact-plaques; target `control-console`. Route/control labels: Keep known route / Follow opaque model. **Timing:** 30 s active decision + 2.4 s resolution; last selection at deadline commits. **Default:** If you do nothing: Keep known route. Two die; three on the model route survive.

**Provenance:** original. Original authored scenario; listed sources provide conceptual background, not this scenario or its score. Background: [doing](https://plato.stanford.edu/entries/doing-allowing/), [obligations](https://plato.stanford.edu/entries/special-obligations/).

**A. Keep known route** (default, scene slot 0)

Before choice: Two die; three on the model route survive.

Outcome: Two die; three on the model route survive.

Deaths: 2 human, 0 cockroach, 0 butterfly; raw **2**, weighted impact **2.0**. Included later human deaths: 0. Ratings: consequences 65, rightsDuties 80, fairness 70. Level score **71.7/100** (exact 215/3).

Strongest supporting reason: You decline an unexplained recommendation with unknown priorities.

Ethical tension: Opaque advice might sometimes be right; refusal is not certainty.

**B. Follow opaque model** (scene-action, scene slot 1)

Before choice: Three die; two survive.

Outcome: Three die; two survive.

Deaths: 3 human, 0 cockroach, 0 butterfly; raw **3**, weighted impact **3.0**. Included later human deaths: 0. Ratings: consequences 30, rightsDuties 35, fairness 25. Level score **30.0/100** (exact 90/3).

Strongest supporting reason: Specialized systems may contain expertise unavailable to an operator.

Ethical tension: No evidence established that this system values people appropriately.

### 129. The Whistleblower Brake

A safe brake saves three, but its audit log reveals your employer's prior safety fraud. Staying course preserves secrecy.

**Domain:** Responsibility and authority. **Distinction:** Institutional loyalty versus public protection.

**Layout:** `action2`; schematic-with-fact-plaques; target `control-console`. Route/control labels: Preserve secret / Use logged brake. **Timing:** 30 s active decision + 2.4 s resolution; last selection at deadline commits. **Default:** If you do nothing: Preserve secret. Three die; the fraud remains hidden.

**Provenance:** original. Original authored scenario; listed sources provide conceptual background, not this scenario or its score. Background: [doing](https://plato.stanford.edu/entries/doing-allowing/), [obligations](https://plato.stanford.edu/entries/special-obligations/).

**A. Preserve secret** (default, scene slot 0)

Before choice: Three die; the fraud remains hidden.

Outcome: Three die; the fraud remains hidden.

Deaths: 3 human, 0 cockroach, 0 butterfly; raw **3**, weighted impact **3.0**. Included later human deaths: 0. Ratings: consequences 0, rightsDuties 10, fairness 10. Level score **6.7/100** (exact 20/3).

Strongest supporting reason: Confidentiality can support institutional trust.

Ethical tension: Concealing dangerous misconduct is a poor use of loyalty.

**B. Use logged brake** (scene-action, scene slot 1)

Before choice: Three survive; the fraud becomes documented.

Outcome: Three survive; the fraud becomes documented.

Deaths: 0 human, 0 cockroach, 0 butterfly; raw **0**, weighted impact **0.0**. Included later human deaths: 0. Ratings: consequences 100, rightsDuties 95, fairness 90. Level score **95.0/100** (exact 285/3).

Strongest supporting reason: Rescue and accountability reinforce each other.

Ethical tension: Exposure may harm coworkers who were not responsible.

### 130. The Untrained Intern

Four face the trolley; one is on the siding. You are an intern, but the displayed lever operation and outcomes are guaranteed.

**Domain:** Responsibility and authority. **Distinction:** Status and competence in emergency authority.

**Layout:** `action2`; schematic-with-fact-plaques; target `control-console`. Route/control labels: Leave to hierarchy / Use guaranteed lever. **Timing:** 30 s active decision + 2.4 s resolution; last selection at deadline commits. **Default:** If you do nothing: Leave to hierarchy. Four die before a supervisor arrives; one survives.

**Provenance:** original. Original authored scenario; listed sources provide conceptual background, not this scenario or its score. Background: [doing](https://plato.stanford.edu/entries/doing-allowing/), [obligations](https://plato.stanford.edu/entries/special-obligations/).

**A. Leave to hierarchy** (default, scene slot 0)

Before choice: Four die before a supervisor arrives; one survives.

Outcome: Four die before a supervisor arrives; one survives.

Deaths: 4 human, 0 cockroach, 0 butterfly; raw **4**, weighted impact **4.0**. Included later human deaths: 0. Ratings: consequences 20, rightsDuties 65, autonomy 65, fairness 45. Level score **48.8/100** (exact 195/4).

Strongest supporting reason: Deference can protect against acting beyond competence.

Ethical tension: The scenario removes the competence uncertainty.

**B. Use guaranteed lever** (scene-action, scene slot 1)

Before choice: One dies; four survive.

Outcome: One dies; four survive.

Deaths: 1 human, 0 cockroach, 0 butterfly; raw **1**, weighted impact **1.0**. Included later human deaths: 0. Ratings: consequences 85, rightsDuties 55, autonomy 55, fairness 65. Level score **65.0/100** (exact 260/4).

Strongest supporting reason: Lack of rank does not eliminate an effective rescue reason.

Ethical tension: Competence to operate does not eliminate the ethical burden.

### 131. The Rescuer's Error

An operator mistakenly selected a route killing four. You can override to a route killing one; the operator angrily insists on keeping control.

**Domain:** Responsibility and authority. **Distinction:** Respect for agency versus correcting harmful error.

**Layout:** `action2`; schematic-with-fact-plaques; target `control-console`. Route/control labels: Respect operator control / Override error. **Timing:** 30 s active decision + 2.4 s resolution; last selection at deadline commits. **Default:** If you do nothing: Respect operator control. Four die; one survives.

**Provenance:** original. Original authored scenario; listed sources provide conceptual background, not this scenario or its score. Background: [doing](https://plato.stanford.edu/entries/doing-allowing/), [obligations](https://plato.stanford.edu/entries/special-obligations/).

**A. Respect operator control** (default, scene slot 0)

Before choice: Four die; one survives.

Outcome: Four die; one survives.

Deaths: 4 human, 0 cockroach, 0 butterfly; raw **4**, weighted impact **4.0**. Included later human deaths: 0. Ratings: consequences 20, rightsDuties 60, autonomy 85, fairness 45. Level score **52.5/100** (exact 210/4).

Strongest supporting reason: Interfering with another agent's control needs justification.

Ethical tension: The verified mistake supplies a strong competing reason.

**B. Override error** (scene-action, scene slot 1)

Before choice: One dies; four survive.

Outcome: One dies; four survive.

Deaths: 1 human, 0 cockroach, 0 butterfly; raw **1**, weighted impact **1.0**. Included later human deaths: 0. Ratings: consequences 85, rightsDuties 65, autonomy 35, fairness 65. Level score **62.5/100** (exact 250/4).

Strongest supporting reason: Correction prevents three additional deaths.

Ethical tension: Overriding a person should not become a default response to disagreement.

### 132. The Jurisdiction Line

Three face the trolley just across a painted district boundary. Your safe brake works there, but your permit covers only this side.

**Domain:** Responsibility and authority. **Distinction:** Formal jurisdiction versus urgent rescue.

**Layout:** `fork2`; schematic-with-fact-plaques; target `rail-switch`. Route/control labels: Respect painted boundary / Brake across boundary. **Timing:** 30 s active decision + 2.4 s resolution; last selection at deadline commits. **Default:** If you do nothing: Respect painted boundary. Three die; the permit rule is obeyed.

**Provenance:** original. Original authored scenario; listed sources provide conceptual background, not this scenario or its score. Background: [doing](https://plato.stanford.edu/entries/doing-allowing/), [obligations](https://plato.stanford.edu/entries/special-obligations/).

**A. Respect painted boundary** (default, scene slot 0)

Before choice: Three die; the permit rule is obeyed.

Outcome: Three die; the permit rule is obeyed.

Deaths: 3 human, 0 cockroach, 0 butterfly; raw **3**, weighted impact **3.0**. Included later human deaths: 0. Ratings: consequences 5, rightsDuties 45, fairness 30. Level score **26.7/100** (exact 80/3).

Strongest supporting reason: Jurisdiction limits arbitrary exercises of power.

Ethical tension: The boundary has no safety effect in this emergency.

**B. Brake across boundary** (select-route, scene slot 1)

Before choice: All three survive; you exceed the permit.

Outcome: All three survive; you exceed the permit.

Deaths: 0 human, 0 cockroach, 0 butterfly; raw **0**, weighted impact **0.0**. Included later human deaths: 0. Ratings: consequences 100, rightsDuties 85, fairness 85. Level score **90.0/100** (exact 270/3).

Strongest supporting reason: Preventing death can justify a limited emergency exception.

Ethical tension: The exception needs a public explanation, not unlimited jurisdiction.

### 133. The Scapegoat Clause

A safe brake saves four only if a form falsely assigns fault to an innocent worker, costing their job but not their life.

**Domain:** Responsibility and authority. **Distinction:** Rescue through unjust institutional blame.

**Layout:** `action2`; schematic-with-fact-plaques; target `control-console`. Route/control labels: Refuse false form / Sign and brake. **Timing:** 30 s active decision + 2.4 s resolution; last selection at deadline commits. **Default:** If you do nothing: Refuse false form. Four die; the worker keeps their job and reputation.

**Provenance:** original. Original authored scenario; listed sources provide conceptual background, not this scenario or its score. Background: [doing](https://plato.stanford.edu/entries/doing-allowing/), [obligations](https://plato.stanford.edu/entries/special-obligations/).

**A. Refuse false form** (default, scene slot 0)

Before choice: Four die; the worker keeps their job and reputation.

Outcome: Four die; the worker keeps their job and reputation.

Deaths: 4 human, 0 cockroach, 0 butterfly; raw **4**, weighted impact **4.0**. Included later human deaths: 0. Ratings: consequences 15, rightsDuties 95, autonomy 85, fairness 80. Level score **68.8/100** (exact 275/4).

Strongest supporting reason: You protect an innocent person from deliberate injustice.

Ethical tension: The refusal has a far greater immediate physical cost.

**B. Sign and brake** (scene-action, scene slot 1)

Before choice: Four survive; the innocent worker is falsely fired.

Outcome: Four survive; the innocent worker is falsely fired.

Deaths: 0 human, 0 cockroach, 0 butterfly; raw **0**, weighted impact **0.0**. Included later human deaths: 0. Ratings: consequences 100, rightsDuties 25, autonomy 20, fairness 20. Level score **41.2/100** (exact 165/4).

Strongest supporting reason: Preventing four deaths supplies a powerful emergency reason.

Ethical tension: The worker deserves correction and repair; the lie is not made true by rescue.

### 134. The Delegated Promise

A supervisor authorizes diversion from four to one and says they accept all moral responsibility. Only you can operate the lever.

**Domain:** Responsibility and authority. **Distinction:** Responsibility cannot be fully transferred by declaration.

**Layout:** `action2`; schematic-with-fact-plaques; target `control-console`. Route/control labels: Decline operation / Operate lever. **Timing:** 30 s active decision + 2.4 s resolution; last selection at deadline commits. **Default:** If you do nothing: Decline operation. Four die; one survives.

**Provenance:** original. Original authored scenario; listed sources provide conceptual background, not this scenario or its score. Background: [doing](https://plato.stanford.edu/entries/doing-allowing/), [obligations](https://plato.stanford.edu/entries/special-obligations/).

**A. Decline operation** (default, scene slot 0)

Before choice: Four die; one survives.

Outcome: Four die; one survives.

Deaths: 4 human, 0 cockroach, 0 butterfly; raw **4**, weighted impact **4.0**. Included later human deaths: 0. Ratings: consequences 25, rightsDuties 85, autonomy 70, fairness 55. Level score **58.8/100** (exact 235/4).

Strongest supporting reason: You keep independent judgment over an act you would perform.

Ethical tension: The supervisor's offer cannot rescue anyone without your choice.

**B. Operate lever** (scene-action, scene slot 1)

Before choice: One dies; four survive.

Outcome: One dies; four survive.

Deaths: 1 human, 0 cockroach, 0 butterfly; raw **1**, weighted impact **1.0**. Included later human deaths: 0. Ratings: consequences 85, rightsDuties 55, autonomy 55, fairness 65. Level score **65.0/100** (exact 260/4).

Strongest supporting reason: The lower-loss result gives a reason independent of the promise.

Ethical tension: Someone else's acceptance cannot erase your participation.

### 135. The Emergency Election

Four face the trolley. A poll favors an empty safe siding, but the poll itself has no binding authority and the route is verified safe.

**Domain:** Responsibility and authority. **Distinction:** Democratic endorsement versus independent justification.

**Layout:** `action2`; schematic-with-fact-plaques; target `control-console`. Route/control labels: Wait for formal mandate / Use safe siding. **Timing:** 30 s active decision + 2.4 s resolution; last selection at deadline commits. **Default:** If you do nothing: Wait for formal mandate. Four die; the safe siding is unused.

**Provenance:** original. Original authored scenario; listed sources provide conceptual background, not this scenario or its score. Background: [doing](https://plato.stanford.edu/entries/doing-allowing/), [obligations](https://plato.stanford.edu/entries/special-obligations/).

**A. Wait for formal mandate** (default, scene slot 0)

Before choice: Four die; the safe siding is unused.

Outcome: Four die; the safe siding is unused.

Deaths: 4 human, 0 cockroach, 0 butterfly; raw **4**, weighted impact **4.0**. Included later human deaths: 0. Ratings: consequences 5, rightsDuties 40, autonomy 60, fairness 30. Level score **33.8/100** (exact 135/4).

Strongest supporting reason: Legitimate authority matters when acting for a public.

Ethical tension: The verified harmless rescue does not need an extra popularity test.

**B. Use safe siding** (scene-action, scene slot 1)

Before choice: All four survive.

Outcome: All four survive.

Deaths: 0 human, 0 cockroach, 0 butterfly; raw **0**, weighted impact **0.0**. Included later human deaths: 0. Ratings: consequences 100, rightsDuties 90, autonomy 70, fairness 85. Level score **86.2/100** (exact 345/4).

Strongest supporting reason: The safe result justifies action whether or not the poll agrees.

Ethical tension: Votes can support coordination without supplying the whole moral reason.

### 136. The Liability Umbrella

Two face the trolley; a safe brake saves both but voids your character's liability insurance. The insurer's mascot is a giant umbrella.

**Domain:** Responsibility and authority. **Distinction:** Personal institutional exposure and rescue.

**Layout:** `action2`; schematic-with-fact-plaques; target `control-console`. Route/control labels: Keep coverage / Brake without coverage. **Timing:** 30 s active decision + 2.4 s resolution; last selection at deadline commits. **Default:** If you do nothing: Keep coverage. Two die; coverage remains intact.

**Provenance:** original. Original authored scenario; listed sources provide conceptual background, not this scenario or its score. Background: [doing](https://plato.stanford.edu/entries/doing-allowing/), [obligations](https://plato.stanford.edu/entries/special-obligations/).

**A. Keep coverage** (default, scene slot 0)

Before choice: Two die; coverage remains intact.

Outcome: Two die; coverage remains intact.

Deaths: 2 human, 0 cockroach, 0 butterfly; raw **2**, weighted impact **2.0**. Included later human deaths: 0. Ratings: consequences 20, rightsDuties 55, autonomy 65, fairness 40. Level score **45.0/100** (exact 180/4).

Strongest supporting reason: Unbounded personal legal costs can be a serious burden.

Ethical tension: Insurance incentives can discourage otherwise safe rescue.

**B. Brake without coverage** (scene-action, scene slot 1)

Before choice: Both survive; coverage is voided.

Outcome: Both survive; coverage is voided.

Deaths: 0 human, 0 cockroach, 0 butterfly; raw **0**, weighted impact **0.0**. Included later human deaths: 0. Ratings: consequences 100, rightsDuties 85, autonomy 75, fairness 80. Level score **85.0/100** (exact 340/4).

Strongest supporting reason: Their lives supply a strong reason to accept personal exposure.

Ethical tension: A good system would not make rescue depend on this sacrifice.

### 137. The Broken Chain of Command

Three face the trolley. Two superiors issue contradictory commands; the safe empty siding is independently verified.

**Domain:** Responsibility and authority. **Distinction:** Conflicting authority and reasons that remain.

**Layout:** `action2`; schematic-with-fact-plaques; target `control-console`. Route/control labels: Freeze under conflict / Choose safe siding. **Timing:** 30 s active decision + 2.4 s resolution; last selection at deadline commits. **Default:** If you do nothing: Freeze under conflict. Three die; neither instruction is resolved.

**Provenance:** original. Original authored scenario; listed sources provide conceptual background, not this scenario or its score. Background: [doing](https://plato.stanford.edu/entries/doing-allowing/), [obligations](https://plato.stanford.edu/entries/special-obligations/).

**A. Freeze under conflict** (default, scene slot 0)

Before choice: Three die; neither instruction is resolved.

Outcome: Three die; neither instruction is resolved.

Deaths: 3 human, 0 cockroach, 0 butterfly; raw **3**, weighted impact **3.0**. Included later human deaths: 0. Ratings: consequences 5, rightsDuties 40, autonomy 55, fairness 30. Level score **32.5/100** (exact 130/4).

Strongest supporting reason: Contradictory authority can make unilateral action difficult.

Ethical tension: The safe route supplies a reason despite the institutional confusion.

**B. Choose safe siding** (scene-action, scene slot 1)

Before choice: Three survive; one superior objects.

Outcome: Three survive; one superior objects.

Deaths: 0 human, 0 cockroach, 0 butterfly; raw **0**, weighted impact **0.0**. Included later human deaths: 0. Ratings: consequences 100, rightsDuties 90, autonomy 65, fairness 85. Level score **85.0/100** (exact 340/4).

Strongest supporting reason: A direct verified rescue can guide action when hierarchy fails.

Ethical tension: You still owe an explanation of how you resolved the conflict.

### 138. The Budget You Approved

A neglected brake you previously voted to defund now threatens three. A safe diversion destroys the empty civic monument you funded instead.

**Domain:** Responsibility and authority. **Distinction:** Backward responsibility and costly correction.

**Layout:** `action2`; schematic-with-fact-plaques; target `control-console`. Route/control labels: Preserve monument / Destroy monument to rescue. **Timing:** 30 s active decision + 2.4 s resolution; last selection at deadline commits. **Default:** If you do nothing: Preserve monument. Three die; the monument survives.

**Provenance:** original. Original authored scenario; listed sources provide conceptual background, not this scenario or its score. Background: [doing](https://plato.stanford.edu/entries/doing-allowing/), [obligations](https://plato.stanford.edu/entries/special-obligations/).

**A. Preserve monument** (default, scene slot 0)

Before choice: Three die; the monument survives.

Outcome: Three die; the monument survives.

Deaths: 3 human, 0 cockroach, 0 butterfly; raw **3**, weighted impact **3.0**. Included later human deaths: 0. Ratings: consequences 5, rightsDuties 15, fairness 15. Level score **11.7/100** (exact 35/3).

Strongest supporting reason: Public assets carry shared value beyond personal pride.

Ethical tension: Protecting the symbol compounds the earlier failure.

**B. Destroy monument to rescue** (scene-action, scene slot 1)

Before choice: Three survive; the monument is lost.

Outcome: Three survive; the monument is lost.

Deaths: 0 human, 0 cockroach, 0 butterfly; raw **0**, weighted impact **0.0**. Included later human deaths: 0. Ratings: consequences 100, rightsDuties 90, fairness 85. Level score **91.7/100** (exact 275/3).

Strongest supporting reason: Accepting correction is more important than defending a past decision.

Ethical tension: The rescue does not erase responsibility for the unsafe budget.

### 139. The Future Audit

Four face the trolley; one is on the siding. A perfectly accurate audit will later disclose your action and all facts, but no punishment is specified.

**Domain:** Responsibility and authority. **Distinction:** Reasons under full transparency.

**Layout:** `action2`; schematic-with-fact-plaques; target `control-console`. Route/control labels: Keep route openly / Divert openly. **Timing:** 30 s active decision + 2.4 s resolution; last selection at deadline commits. **Default:** If you do nothing: Keep route openly. Four die; one survives; the audit records inaction.

**Provenance:** original. Original authored scenario; listed sources provide conceptual background, not this scenario or its score. Background: [doing](https://plato.stanford.edu/entries/doing-allowing/), [obligations](https://plato.stanford.edu/entries/special-obligations/).

**A. Keep route openly** (default, scene slot 0)

Before choice: Four die; one survives; the audit records inaction.

Outcome: Four die; one survives; the audit records inaction.

Deaths: 4 human, 0 cockroach, 0 butterfly; raw **4**, weighted impact **4.0**. Included later human deaths: 0. Ratings: consequences 25, rightsDuties 85, fairness 55. Level score **55.0/100** (exact 165/3).

Strongest supporting reason: You can publicly defend a refusal to redirect lethal harm.

Ethical tension: Public defensibility requires acknowledging the preventable loss.

**B. Divert openly** (scene-action, scene slot 1)

Before choice: One dies; four survive; the audit records diversion.

Outcome: One dies; four survive; the audit records diversion.

Deaths: 1 human, 0 cockroach, 0 butterfly; raw **1**, weighted impact **1.0**. Included later human deaths: 0. Ratings: consequences 85, rightsDuties 55, fairness 65. Level score **68.3/100** (exact 205/3).

Strongest supporting reason: You can explain the rescue and accept scrutiny of its cost.

Ethical tension: Transparency improves accountability, not the victim's survival.

### 140. The Authority Carousel

Five face the trolley. A supervisor offers a one-person siding; an independent verified brake saves all but requires breaking protocol. Three paths are available.

**Domain:** Responsibility and authority. **Distinction:** Authority, evidence, and unnecessary sacrifice.

**Layout:** `action3`; schematic-with-fact-plaques; target `control-console`. Route/control labels: Keep course / Follow siding order / Break protocol and brake. **Timing:** 30 s active decision + 2.4 s resolution; last selection at deadline commits. **Default:** If you do nothing: Keep course. Five die; no instruction is followed.

**Provenance:** original. Original authored scenario; listed sources provide conceptual background, not this scenario or its score. Background: [doing](https://plato.stanford.edu/entries/doing-allowing/), [obligations](https://plato.stanford.edu/entries/special-obligations/).

**A. Keep course** (default, scene slot 0)

Before choice: Five die; no instruction is followed.

Outcome: Five die; no instruction is followed.

Deaths: 5 human, 0 cockroach, 0 butterfly; raw **5**, weighted impact **5.0**. Included later human deaths: 0. Ratings: consequences 0, rightsDuties 25, fairness 20. Level score **15.0/100** (exact 45/3).

Strongest supporting reason: You decline unilateral interference.

Ethical tension: Neither hierarchy nor caution explains ignoring a safe rescue.

**B. Follow siding order** (scene-action, scene slot 1)

Before choice: One dies; five survive.

Outcome: One dies; five survive.

Deaths: 1 human, 0 cockroach, 0 butterfly; raw **1**, weighted impact **1.0**. Included later human deaths: 0. Ratings: consequences 45, rightsDuties 40, fairness 40. Level score **41.7/100** (exact 125/3).

Strongest supporting reason: The order reduces deaths and supports coordination.

Ethical tension: A safe verified alternative makes the sacrifice unnecessary.

**C. Break protocol and brake** (scene-action, scene slot 2)

Before choice: Everyone survives.

Outcome: Everyone survives.

Deaths: 0 human, 0 cockroach, 0 butterfly; raw **0**, weighted impact **0.0**. Included later human deaths: 0. Ratings: consequences 100, rightsDuties 85, fairness 85. Level score **90.0/100** (exact 270/3).

Strongest supporting reason: Evidence for a safe rescue outweighs procedural convenience.

Ethical tension: The rule breach should be reviewed afterward.

## Chapter 8: Fairness and rights

### 141. The VIP Rail

Two ordinary passengers face the trolley; one VIP is on the siding. VIP status has no rescue-relevant consequences.

**Domain:** Fairness and rights. **Distinction:** Social rank and equal claims.

**Layout:** `fork2`; schematic-with-fact-plaques; target `rail-switch`. Route/control labels: Protect VIP / Divert to VIP. **Timing:** 30 s active decision + 2.4 s resolution; last selection at deadline commits. **Default:** If you do nothing: Protect VIP. Two passengers die; the VIP survives.

**Provenance:** original. Original authored scenario; listed sources provide conceptual background, not this scenario or its score. Background: [justice](https://plato.stanford.edu/entries/justice-distributive/).

**A. Protect VIP** (default, scene slot 0)

Before choice: Two passengers die; the VIP survives.

Outcome: Two passengers die; the VIP survives.

Deaths: 2 human, 0 cockroach, 0 butterfly; raw **2**, weighted impact **2.0**. Included later human deaths: 0. Ratings: consequences 40, rightsDuties 80, fairness 45. Level score **55.0/100** (exact 165/3).

Strongest supporting reason: You avoid redirecting danger toward someone previously safe.

Ethical tension: VIP status adds no stronger claim to that restraint.

**B. Divert to VIP** (select-route, scene slot 1)

Before choice: The VIP dies; two passengers survive.

Outcome: The VIP dies; two passengers survive.

Deaths: 1 human, 0 cockroach, 0 butterfly; raw **1**, weighted impact **1.0**. Included later human deaths: 0. Ratings: consequences 80, rightsDuties 55, fairness 85. Level score **73.3/100** (exact 220/3).

Strongest supporting reason: Equal standing supports saving the larger number.

Ethical tension: Rejecting privilege should not become hostility toward the VIP as a person.

### 142. The Purchased Exemption

Three face the trolley; one wealthy person bought a private promise that their siding would never be used. The purchase financed no safety improvements.

**Domain:** Fairness and rights. **Distinction:** Market allocation of protection.

**Layout:** `fork2`; schematic-with-fact-plaques; target `rail-switch`. Route/control labels: Honor purchased exemption / Override exemption. **Timing:** 30 s active decision + 2.4 s resolution; last selection at deadline commits. **Default:** If you do nothing: Honor purchased exemption. Three die; the buyer survives.

**Provenance:** original. Original authored scenario; listed sources provide conceptual background, not this scenario or its score. Background: [justice](https://plato.stanford.edu/entries/justice-distributive/).

**A. Honor purchased exemption** (default, scene slot 0)

Before choice: Three die; the buyer survives.

Outcome: Three die; the buyer survives.

Deaths: 3 human, 0 cockroach, 0 butterfly; raw **3**, weighted impact **3.0**. Included later human deaths: 0. Ratings: consequences 25, rightsDuties 80, autonomy 75, fairness 20. Level score **50.0/100** (exact 200/4).

Strongest supporting reason: Agreements can create legitimate reliance.

Ethical tension: Access to money has purchased unequal protection from public danger.

**B. Override exemption** (select-route, scene slot 1)

Before choice: The buyer dies; three survive.

Outcome: The buyer dies; three survive.

Deaths: 1 human, 0 cockroach, 0 butterfly; raw **1**, weighted impact **1.0**. Included later human deaths: 0. Ratings: consequences 85, rightsDuties 40, autonomy 25, fairness 80. Level score **57.5/100** (exact 230/4).

Strongest supporting reason: Equal basic protection should not simply track purchasing power.

Ethical tension: Breaking a relied-on agreement is still a serious institutional act.

### 143. The Equal Lottery

Two equally sized groups face mutually exclusive rescue. The default protects group B; a preannounced fair rotation assigns protection to A this time. Each route kills two.

**Domain:** Fairness and rights. **Distinction:** Fair process versus default advantage.

**Layout:** `fork2`; schematic-with-fact-plaques; target `rail-switch`. Route/control labels: Keep default / Honor rotation. **Timing:** 30 s active decision + 2.4 s resolution; last selection at deadline commits. **Default:** If you do nothing: Keep default. Group A's two members die; B survives.

**Provenance:** original. Original authored scenario; listed sources provide conceptual background, not this scenario or its score. Background: [justice](https://plato.stanford.edu/entries/justice-distributive/).

**A. Keep default** (default, scene slot 0)

Before choice: Group A's two members die; B survives.

Outcome: Group A's two members die; B survives.

Deaths: 2 human, 0 cockroach, 0 butterfly; raw **2**, weighted impact **2.0**. Included later human deaths: 0. Ratings: consequences 50, rightsDuties 80, autonomy 50, fairness 35. Level score **53.8/100** (exact 215/4).

Strongest supporting reason: You avoid moving lethal danger to a different group.

Ethical tension: The default bypasses an accepted equal-chance procedure.

**B. Honor rotation** (select-route, scene slot 1)

Before choice: Group B's two members die; A survives.

Outcome: Group B's two members die; A survives.

Deaths: 2 human, 0 cockroach, 0 butterfly; raw **2**, weighted impact **2.0**. Included later human deaths: 0. Ratings: consequences 50, rightsDuties 65, autonomy 75, fairness 95. Level score **71.2/100** (exact 285/4).

Strongest supporting reason: A reciprocal procedure treats equal claims symmetrically over assignments.

Ethical tension: Procedural fairness cannot prevent the selected group's loss.

### 144. The Repeated Burden

Two people face the main route; two are on a siding whose community has borne every prior emergency diversion. No one consented to repeated exposure.

**Domain:** Fairness and rights. **Distinction:** Cumulative fairness despite equal immediate counts.

**Layout:** `fork2`; schematic-with-fact-plaques; target `rail-switch`. Route/control labels: Keep main route / Divert again. **Timing:** 30 s active decision + 2.4 s resolution; last selection at deadline commits. **Default:** If you do nothing: Keep main route. Two main-track people die; the repeatedly burdened group survives.

**Provenance:** original. Original authored scenario; listed sources provide conceptual background, not this scenario or its score. Background: [justice](https://plato.stanford.edu/entries/justice-distributive/).

**A. Keep main route** (default, scene slot 0)

Before choice: Two main-track people die; the repeatedly burdened group survives.

Outcome: Two main-track people die; the repeatedly burdened group survives.

Deaths: 2 human, 0 cockroach, 0 butterfly; raw **2**, weighted impact **2.0**. Included later human deaths: 0. Ratings: consequences 50, rightsDuties 80, fairness 85. Level score **71.7/100** (exact 215/3).

Strongest supporting reason: You avoid placing yet another equal burden on the same community.

Ethical tension: These particular main-track people did not create the history.

**B. Divert again** (select-route, scene slot 1)

Before choice: Two siding people die; the main-track pair survives.

Outcome: Two siding people die; the main-track pair survives.

Deaths: 2 human, 0 cockroach, 0 butterfly; raw **2**, weighted impact **2.0**. Included later human deaths: 0. Ratings: consequences 50, rightsDuties 40, fairness 15. Level score **35.0/100** (exact 105/3).

Strongest supporting reason: The presently threatened pair have an equal rescue claim.

Ethical tension: A pattern of repeatedly choosing the same group can be unjust.

### 145. The Worse-Off Platform

Two people face the main route; two on the siding have already lost homes in a disaster. No death has less value.

**Domain:** Fairness and rights. **Distinction:** Priority to people already disadvantaged.

**Layout:** `fork2`; schematic-with-fact-plaques; target `rail-switch`. Route/control labels: Keep main route / Divert to displaced pair. **Timing:** 30 s active decision + 2.4 s resolution; last selection at deadline commits. **Default:** If you do nothing: Keep main route. The main-track pair die; the displaced pair survive.

**Provenance:** original. Original authored scenario; listed sources provide conceptual background, not this scenario or its score. Background: [justice](https://plato.stanford.edu/entries/justice-distributive/).

**A. Keep main route** (default, scene slot 0)

Before choice: The main-track pair die; the displaced pair survive.

Outcome: The main-track pair die; the displaced pair survive.

Deaths: 2 human, 0 cockroach, 0 butterfly; raw **2**, weighted impact **2.0**. Included later human deaths: 0. Ratings: consequences 50, rightsDuties 80, fairness 85. Level score **71.7/100** (exact 215/3).

Strongest supporting reason: With equal loss, avoiding another burden on the worse-off has force.

Ethical tension: Disadvantage does not make other people's losses unimportant.

**B. Divert to displaced pair** (select-route, scene slot 1)

Before choice: The displaced pair die; the main-track pair survive.

Outcome: The displaced pair die; the main-track pair survive.

Deaths: 2 human, 0 cockroach, 0 butterfly; raw **2**, weighted impact **2.0**. Included later human deaths: 0. Ratings: consequences 50, rightsDuties 45, fairness 25. Level score **40.0/100** (exact 120/3).

Strongest supporting reason: The main-track pair's urgent claims remain equal as lives.

Ethical tension: The choice compounds an already unequal burden.

### 146. The Ticket Queue

Three late arrivals face the trolley; two earlier arrivals are on the siding. A first-come rescue rule protects the earlier arrivals.

**Domain:** Fairness and rights. **Distinction:** Queue fairness versus saving more.

**Layout:** `fork2`; schematic-with-fact-plaques; target `rail-switch`. Route/control labels: Honor queue / Override queue. **Timing:** 30 s active decision + 2.4 s resolution; last selection at deadline commits. **Default:** If you do nothing: Honor queue. Three late arrivals die; the earlier pair survive.

**Provenance:** original. Original authored scenario; listed sources provide conceptual background, not this scenario or its score. Background: [justice](https://plato.stanford.edu/entries/justice-distributive/).

**A. Honor queue** (default, scene slot 0)

Before choice: Three late arrivals die; the earlier pair survive.

Outcome: Three late arrivals die; the earlier pair survive.

Deaths: 3 human, 0 cockroach, 0 butterfly; raw **3**, weighted impact **3.0**. Included later human deaths: 0. Ratings: consequences 35, rightsDuties 80, autonomy 65, fairness 75. Level score **63.8/100** (exact 255/4).

Strongest supporting reason: A known queue prevents arbitrary favoritism.

Ethical tension: Arrival time competes with an additional life saved.

**B. Override queue** (select-route, scene slot 1)

Before choice: The earlier pair die; three late arrivals survive.

Outcome: The earlier pair die; three late arrivals survive.

Deaths: 2 human, 0 cockroach, 0 butterfly; raw **2**, weighted impact **2.0**. Included later human deaths: 0. Ratings: consequences 70, rightsDuties 45, autonomy 40, fairness 55. Level score **52.5/100** (exact 210/4).

Strongest supporting reason: A small administrative ordering need not override lives.

Ethical tension: People organized their expectations around the queue.

### 147. The Innocent Trespasser

One trespasser faces the trolley. A safe diversion destroys a fence but harms nobody. Trespass created no other danger.

**Domain:** Fairness and rights. **Distinction:** Wrongdoing does not forfeit basic rescue.

**Layout:** `fork2`; schematic-with-fact-plaques; target `rail-switch`. Route/control labels: Preserve fence / Break fence and rescue. **Timing:** 30 s active decision + 2.4 s resolution; last selection at deadline commits. **Default:** If you do nothing: Preserve fence. The trespasser dies; the fence remains intact.

**Provenance:** original. Original authored scenario; listed sources provide conceptual background, not this scenario or its score. Background: [justice](https://plato.stanford.edu/entries/justice-distributive/).

**A. Preserve fence** (default, scene slot 0)

Before choice: The trespasser dies; the fence remains intact.

Outcome: The trespasser dies; the fence remains intact.

Deaths: 1 human, 0 cockroach, 0 butterfly; raw **1**, weighted impact **1.0**. Included later human deaths: 0. Ratings: consequences 0, rightsDuties 15, fairness 10. Level score **8.3/100** (exact 25/3).

Strongest supporting reason: Property rules have legitimate purposes.

Ethical tension: A minor violation does not authorize a fatal non-rescue.

**B. Break fence and rescue** (select-route, scene slot 1)

Before choice: The trespasser survives; the fence is damaged.

Outcome: The trespasser survives; the fence is damaged.

Deaths: 0 human, 0 cockroach, 0 butterfly; raw **0**, weighted impact **0.0**. Included later human deaths: 0. Ratings: consequences 100, rightsDuties 95, fairness 95. Level score **96.7/100** (exact 290/3).

Strongest supporting reason: Basic protection persists despite a minor wrong.

Ethical tension: Rescue need not excuse the trespass itself.

### 148. The Saboteur's Track

Three people face a trolley deliberately released by a saboteur. The saboteur is trapped on a siding; diversion kills them.

**Domain:** Fairness and rights. **Distinction:** Responsibility for threat versus punishment.

**Layout:** `fork2`; schematic-with-fact-plaques; target `rail-switch`. Route/control labels: Keep main route / Divert to saboteur. **Timing:** 30 s active decision + 2.4 s resolution; last selection at deadline commits. **Default:** If you do nothing: Keep main route. Three victims die; the saboteur survives.

**Provenance:** original. Original authored scenario; listed sources provide conceptual background, not this scenario or its score. Background: [justice](https://plato.stanford.edu/entries/justice-distributive/).

**A. Keep main route** (default, scene slot 0)

Before choice: Three victims die; the saboteur survives.

Outcome: Three victims die; the saboteur survives.

Deaths: 3 human, 0 cockroach, 0 butterfly; raw **3**, weighted impact **3.0**. Included later human deaths: 0. Ratings: consequences 25, rightsDuties 75, fairness 45. Level score **48.3/100** (exact 145/3).

Strongest supporting reason: You avoid acting as an impromptu executioner.

Ethical tension: Stopping a threat is distinguishable from punishment after it ends.

**B. Divert to saboteur** (select-route, scene slot 1)

Before choice: The saboteur dies; three victims survive.

Outcome: The saboteur dies; three victims survive.

Deaths: 1 human, 0 cockroach, 0 butterfly; raw **1**, weighted impact **1.0**. Included later human deaths: 0. Ratings: consequences 85, rightsDuties 70, fairness 80. Level score **78.3/100** (exact 235/3).

Strongest supporting reason: Their responsibility for this ongoing threat strengthens the rescue claim.

Ethical tension: The justification should remain rescue, not enjoyment of punishment.

### 149. The Suspected Saboteur

Three face the trolley; one siding person is merely rumored to have caused it. The rumor is unverified and irrelevant to operation.

**Domain:** Fairness and rights. **Distinction:** Due process and accusation.

**Layout:** `fork2`; schematic-with-fact-plaques; target `rail-switch`. Route/control labels: Keep main route / Divert without assuming guilt. **Timing:** 30 s active decision + 2.4 s resolution; last selection at deadline commits. **Default:** If you do nothing: Keep main route. Three die; the accused person survives.

**Provenance:** original. Original authored scenario; listed sources provide conceptual background, not this scenario or its score. Background: [justice](https://plato.stanford.edu/entries/justice-distributive/).

**A. Keep main route** (default, scene slot 0)

Before choice: Three die; the accused person survives.

Outcome: Three die; the accused person survives.

Deaths: 3 human, 0 cockroach, 0 butterfly; raw **3**, weighted impact **3.0**. Included later human deaths: 0. Ratings: consequences 25, rightsDuties 85, fairness 60. Level score **56.7/100** (exact 170/3).

Strongest supporting reason: You refuse to treat an accusation as a forfeiture of protection.

Ethical tension: The numerical rescue question remains even without guilt.

**B. Divert without assuming guilt** (select-route, scene slot 1)

Before choice: The accused person dies; three survive.

Outcome: The accused person dies; three survive.

Deaths: 1 human, 0 cockroach, 0 butterfly; raw **1**, weighted impact **1.0**. Included later human deaths: 0. Ratings: consequences 85, rightsDuties 55, fairness 65. Level score **68.3/100** (exact 205/3).

Strongest supporting reason: The fewer-deaths reason applies independently of the rumor.

Ethical tension: A rumor must not turn rescue into an imagined deserved sentence.

### 150. The Unequal Escape Gate

Four people face the trolley; a gate can save all, but the default setting admits only two who paid for premium access. An override opens it for everyone.

**Domain:** Fairness and rights. **Distinction:** Equal access and artificial scarcity.

**Layout:** `action2`; schematic-with-fact-plaques; target `control-console`. Route/control labels: Keep premium setting / Open gate for everyone. **Timing:** 30 s active decision + 2.4 s resolution; last selection at deadline commits. **Default:** If you do nothing: Keep premium setting. Two nonpaying people die; two premium users escape.

**Provenance:** original. Original authored scenario; listed sources provide conceptual background, not this scenario or its score. Background: [justice](https://plato.stanford.edu/entries/justice-distributive/).

**A. Keep premium setting** (default, scene slot 0)

Before choice: Two nonpaying people die; two premium users escape.

Outcome: Two nonpaying people die; two premium users escape.

Deaths: 2 human, 0 cockroach, 0 butterfly; raw **2**, weighted impact **2.0**. Included later human deaths: 0. Ratings: consequences 35, rightsDuties 35, autonomy 50, fairness 10. Level score **32.5/100** (exact 130/4).

Strongest supporting reason: Paid services normally honor their promised access.

Ethical tension: There is no scarcity that requires excluding the other two.

**B. Open gate for everyone** (scene-action, scene slot 1)

Before choice: All four escape.

Outcome: All four escape.

Deaths: 0 human, 0 cockroach, 0 butterfly; raw **0**, weighted impact **0.0**. Included later human deaths: 0. Ratings: consequences 100, rightsDuties 90, autonomy 80, fairness 100. Level score **92.5/100** (exact 370/4).

Strongest supporting reason: Unused rescue capacity should not be withheld by payment status.

Ethical tension: The premium promise never required letting others die.

### 151. The Privacy Scanner

A safe brake saves three only after publicly displaying their private travel histories. They cannot be asked before commitment.

**Domain:** Fairness and rights. **Distinction:** Privacy infringement in rescue infrastructure.

**Layout:** `action2`; schematic-with-fact-plaques; target `control-console`. Route/control labels: Keep histories private / Activate scanner brake. **Timing:** 30 s active decision + 2.4 s resolution; last selection at deadline commits. **Default:** If you do nothing: Keep histories private. Three die; their histories remain secret.

**Provenance:** original. Original authored scenario; listed sources provide conceptual background, not this scenario or its score. Background: [justice](https://plato.stanford.edu/entries/justice-distributive/).

**A. Keep histories private** (default, scene slot 0)

Before choice: Three die; their histories remain secret.

Outcome: Three die; their histories remain secret.

Deaths: 3 human, 0 cockroach, 0 butterfly; raw **3**, weighted impact **3.0**. Included later human deaths: 0. Ratings: consequences 15, rightsDuties 85, autonomy 85, fairness 65. Level score **62.5/100** (exact 250/4).

Strongest supporting reason: Privacy protects people from unwanted exposure.

Ethical tension: A badly designed system forces a severe tradeoff.

**B. Activate scanner brake** (scene-action, scene slot 1)

Before choice: Three survive; their histories are displayed.

Outcome: Three survive; their histories are displayed.

Deaths: 0 human, 0 cockroach, 0 butterfly; raw **0**, weighted impact **0.0**. Included later human deaths: 0. Ratings: consequences 100, rightsDuties 65, autonomy 25, fairness 70. Level score **65.0/100** (exact 260/4).

Strongest supporting reason: Saving their lives provides a strong reason to accept this limited intrusion.

Ethical tension: The system should be redesigned and the disclosure repaired where possible.

### 152. The Discriminatory Label

Two people face the trolley; three are on the siding. An arbitrary blue-hat label says the three count less, but hats have no moral relevance.

**Domain:** Fairness and rights. **Distinction:** Rejecting arbitrary group rankings.

**Layout:** `fork2`; schematic-with-fact-plaques; target `rail-switch`. Route/control labels: Ignore hat label / Follow blue-hat rule. **Timing:** 30 s active decision + 2.4 s resolution; last selection at deadline commits. **Default:** If you do nothing: Ignore hat label. Two die; three survive.

**Provenance:** original. Original authored scenario; listed sources provide conceptual background, not this scenario or its score. Background: [justice](https://plato.stanford.edu/entries/justice-distributive/).

**A. Ignore hat label** (default, scene slot 0)

Before choice: Two die; three survive.

Outcome: Two die; three survive.

Deaths: 2 human, 0 cockroach, 0 butterfly; raw **2**, weighted impact **2.0**. Included later human deaths: 0. Ratings: consequences 85, rightsDuties 80, fairness 95. Level score **86.7/100** (exact 260/3).

Strongest supporting reason: Equal standing defeats the invented ranking.

Ethical tension: The two still deserve grief and an explanation.

**B. Follow blue-hat rule** (select-route, scene slot 1)

Before choice: Three die; two survive.

Outcome: Three die; two survive.

Deaths: 3 human, 0 cockroach, 0 butterfly; raw **3**, weighted impact **3.0**. Included later human deaths: 0. Ratings: consequences 25, rightsDuties 25, fairness 0. Level score **16.7/100** (exact 50/3).

Strongest supporting reason: The two have a genuine claim to rescue.

Ethical tension: Hat color supplies no reason to override more equal claims.

### 153. The One Accessible Ramp

Three people need the only accessible evacuation ramp. Diverting the trolley destroys it after saving one person now; without it two others certainly die later in this incident.

**Domain:** Fairness and rights. **Distinction:** Accessibility as effective equal opportunity.

**Layout:** `fork2`; schematic-with-fact-plaques; target `rail-switch`. Route/control labels: Preserve ramp / Divert through ramp. **Timing:** 30 s active decision + 2.4 s resolution; last selection at deadline commits. **Default:** If you do nothing: Preserve ramp. The currently threatened person dies; the two ramp users escape.

**Provenance:** original. Original authored scenario; listed sources provide conceptual background, not this scenario or its score. Background: [justice](https://plato.stanford.edu/entries/justice-distributive/).

**A. Preserve ramp** (default, scene slot 0)

Before choice: The currently threatened person dies; the two ramp users escape.

Outcome: The currently threatened person dies; the two ramp users escape.

Deaths: 1 human, 0 cockroach, 0 butterfly; raw **1**, weighted impact **1.0**. Included later human deaths: 0. Ratings: consequences 75, rightsDuties 80, fairness 85. Level score **80.0/100** (exact 240/3).

Strongest supporting reason: Keeping usable access protects people whose alternatives are limited.

Ethical tension: The person who dies also has an urgent rescue claim.

**B. Divert through ramp** (select-route, scene slot 1)

Before choice: The current person survives; two people later die without the ramp.

Outcome: The current person survives; two people later die without the ramp.

Deaths: 2 human, 0 cockroach, 0 butterfly; raw **2**, weighted impact **2.0**. Included later human deaths: 2. Ratings: consequences 35, rightsDuties 35, fairness 25. Level score **31.7/100** (exact 95/3).

Strongest supporting reason: You respond to the immediate visible danger.

Ethical tension: Destroying essential access creates foreseeable unequal exposure.

### 154. The Compensation Coupon

Four face the trolley. Diverting kills one and gives their estate a novelty coupon worth $5; the railway claims this fully compensates them.

**Domain:** Fairness and rights. **Distinction:** Compensation cannot erase an involuntary death.

**Layout:** `fork2`; schematic-with-fact-plaques; target `rail-switch`. Route/control labels: Keep main route / Divert with coupon. **Timing:** 30 s active decision + 2.4 s resolution; last selection at deadline commits. **Default:** If you do nothing: Keep main route. Four die; the siding person survives; no coupon is issued.

**Provenance:** original. Original authored scenario; listed sources provide conceptual background, not this scenario or its score. Background: [justice](https://plato.stanford.edu/entries/justice-distributive/).

**A. Keep main route** (default, scene slot 0)

Before choice: Four die; the siding person survives; no coupon is issued.

Outcome: Four die; the siding person survives; no coupon is issued.

Deaths: 4 human, 0 cockroach, 0 butterfly; raw **4**, weighted impact **4.0**. Included later human deaths: 0. Ratings: consequences 25, rightsDuties 85, fairness 55. Level score **55.0/100** (exact 165/3).

Strongest supporting reason: You refuse to treat compensation as permission to harm.

Ethical tension: The four-person rescue argument must still be considered separately.

**B. Divert with coupon** (select-route, scene slot 1)

Before choice: One dies; four survive; the estate receives the coupon.

Outcome: One dies; four survive; the estate receives the coupon.

Deaths: 1 human, 0 cockroach, 0 butterfly; raw **1**, weighted impact **1.0**. Included later human deaths: 0. Ratings: consequences 85, rightsDuties 55, fairness 65. Level score **68.3/100** (exact 205/3).

Strongest supporting reason: Saving four supplies the serious reason for diversion.

Ethical tension: The coupon is not remotely equivalent to the loss and adds no consent.

### 155. The Protest Track

Three peaceful protesters occupy the main track; one uninvolved worker is on the siding. The protest is inconvenient but nonviolent.

**Domain:** Fairness and rights. **Distinction:** Responsibility for exposure and equal basic worth.

**Layout:** `fork2`; schematic-with-fact-plaques; target `rail-switch`. Route/control labels: Keep main route / Divert to worker. **Timing:** 30 s active decision + 2.4 s resolution; last selection at deadline commits. **Default:** If you do nothing: Keep main route. Three protesters die; the worker survives.

**Provenance:** original. Original authored scenario; listed sources provide conceptual background, not this scenario or its score. Background: [justice](https://plato.stanford.edu/entries/justice-distributive/).

**A. Keep main route** (default, scene slot 0)

Before choice: Three protesters die; the worker survives.

Outcome: Three protesters die; the worker survives.

Deaths: 3 human, 0 cockroach, 0 butterfly; raw **3**, weighted impact **3.0**. Included later human deaths: 0. Ratings: consequences 30, rightsDuties 85, autonomy 65, fairness 60. Level score **60.0/100** (exact 240/4).

Strongest supporting reason: You avoid transferring a voluntarily encountered danger to an uninvolved worker.

Ethical tension: Choosing protest does not mean consenting to death.

**B. Divert to worker** (select-route, scene slot 1)

Before choice: The worker dies; three protesters survive.

Outcome: The worker dies; three protesters survive.

Deaths: 1 human, 0 cockroach, 0 butterfly; raw **1**, weighted impact **1.0**. Included later human deaths: 0. Ratings: consequences 85, rightsDuties 40, autonomy 30, fairness 50. Level score **51.2/100** (exact 205/4).

Strongest supporting reason: The protesters' lives retain full value despite their decision to be there.

Ethical tension: Their voluntary exposure may strengthen the worker's objection.

### 156. The Safe Detention

A safe brake saves four but locks one uninvolved operator in a comfortable booth for an hour against their will.

**Domain:** Fairness and rights. **Distinction:** Proportional temporary rights restrictions.

**Layout:** `action2`; schematic-with-fact-plaques; target `control-console`. Route/control labels: Leave booth unlocked / Brake and lock booth. **Timing:** 30 s active decision + 2.4 s resolution; last selection at deadline commits. **Default:** If you do nothing: Leave booth unlocked. Four die; the operator remains free.

**Provenance:** original. Original authored scenario; listed sources provide conceptual background, not this scenario or its score. Background: [justice](https://plato.stanford.edu/entries/justice-distributive/).

**A. Leave booth unlocked** (default, scene slot 0)

Before choice: Four die; the operator remains free.

Outcome: Four die; the operator remains free.

Deaths: 4 human, 0 cockroach, 0 butterfly; raw **4**, weighted impact **4.0**. Included later human deaths: 0. Ratings: consequences 15, rightsDuties 80, autonomy 90, fairness 60. Level score **61.2/100** (exact 245/4).

Strongest supporting reason: Freedom from involuntary confinement is a genuine right.

Ethical tension: A limited reversible burden competes with four deaths.

**B. Brake and lock booth** (scene-action, scene slot 1)

Before choice: Four survive; the operator is released unharmed after an hour.

Outcome: Four survive; the operator is released unharmed after an hour.

Deaths: 0 human, 0 cockroach, 0 butterfly; raw **0**, weighted impact **0.0**. Included later human deaths: 0. Ratings: consequences 100, rightsDuties 70, autonomy 30, fairness 75. Level score **68.8/100** (exact 275/4).

Strongest supporting reason: A narrow emergency restriction can be proportionate to saving lives.

Ethical tension: The operator deserves explanation and prompt release.

### 157. The One-Time Exception

A public rule promises equal rescue access. Overriding it saves three now by excluding one from a safe shelter, causing that person's death.

**Domain:** Fairness and rights. **Distinction:** Equal entitlement versus aggregate benefit.

**Layout:** `action2`; schematic-with-fact-plaques; target `control-console`. Route/control labels: Keep equal-access rule / Exclude one for three. **Timing:** 30 s active decision + 2.4 s resolution; last selection at deadline commits. **Default:** If you do nothing: Keep equal-access rule. Three outside die; the sheltered person survives.

**Provenance:** original. Original authored scenario; listed sources provide conceptual background, not this scenario or its score. Background: [justice](https://plato.stanford.edu/entries/justice-distributive/).

**A. Keep equal-access rule** (default, scene slot 0)

Before choice: Three outside die; the sheltered person survives.

Outcome: Three outside die; the sheltered person survives.

Deaths: 3 human, 0 cockroach, 0 butterfly; raw **3**, weighted impact **3.0**. Included later human deaths: 0. Ratings: consequences 25, rightsDuties 90, autonomy 80, fairness 75. Level score **67.5/100** (exact 270/4).

Strongest supporting reason: The person already admitted has a protected entitlement.

Ethical tension: Enforcing the entitlement blocks a greater rescue.

**B. Exclude one for three** (scene-action, scene slot 1)

Before choice: The excluded person dies; three gain shelter and survive.

Outcome: The excluded person dies; three gain shelter and survive.

Deaths: 1 human, 0 cockroach, 0 butterfly; raw **1**, weighted impact **1.0**. Included later human deaths: 0. Ratings: consequences 85, rightsDuties 30, autonomy 20, fairness 40. Level score **43.8/100** (exact 175/4).

Strongest supporting reason: More lives can be saved by reallocating scarce protection.

Ethical tension: The excluded person's entitlement is being taken away.

### 158. The No-Names Allocation

Three routes each hold one person. One wears a mayor badge, one a tourist badge, and one no badge. All claims are equal; the mayor route is default.

**Domain:** Fairness and rights. **Distinction:** Impartiality without pretending badges determine worth.

**Layout:** `fork3`; schematic-with-fact-plaques; target `rail-switch`. Route/control labels: Keep mayor route / Choose tourist route / Choose unbadged route. **Timing:** 30 s active decision + 2.4 s resolution; last selection at deadline commits. **Default:** If you do nothing: Keep mayor route. The mayor dies; two others survive.

**Provenance:** original. Original authored scenario; listed sources provide conceptual background, not this scenario or its score. Background: [justice](https://plato.stanford.edu/entries/justice-distributive/).

**A. Keep mayor route** (default, scene slot 0)

Before choice: The mayor dies; two others survive.

Outcome: The mayor dies; two others survive.

Deaths: 1 human, 0 cockroach, 0 butterfly; raw **1**, weighted impact **1.0**. Included later human deaths: 0. Ratings: consequences 50, rightsDuties 80, fairness 70. Level score **66.7/100** (exact 200/3).

Strongest supporting reason: The badges supply no reason to alter the default.

Ethical tension: The default is still arbitrary rather than a full fair procedure.

**B. Choose tourist route** (select-route, scene slot 1)

Before choice: The tourist dies; two others survive.

Outcome: The tourist dies; two others survive.

Deaths: 1 human, 0 cockroach, 0 butterfly; raw **1**, weighted impact **1.0**. Included later human deaths: 0. Ratings: consequences 50, rightsDuties 45, fairness 40. Level score **45.0/100** (exact 135/3).

Strongest supporting reason: The mayor and unbadged person have equal rescue claims.

Ethical tension: Being a visitor does not weaken the tourist's claim.

**C. Choose unbadged route** (select-route, scene slot 2)

Before choice: The unbadged person dies; two others survive.

Outcome: The unbadged person dies; two others survive.

Deaths: 1 human, 0 cockroach, 0 butterfly; raw **1**, weighted impact **1.0**. Included later human deaths: 0. Ratings: consequences 50, rightsDuties 45, fairness 40. Level score **45.0/100** (exact 135/3).

Strongest supporting reason: The other two people's lives matter fully.

Ethical tension: Lack of a label is not lack of status.

### 159. The Repair Priority

Two people harmed by an earlier railway injustice face the trolley; two unrelated people are on the siding. Diverting rescues the previously harmed pair.

**Domain:** Fairness and rights. **Distinction:** Corrective justice versus new innocent burdens.

**Layout:** `fork2`; schematic-with-fact-plaques; target `rail-switch`. Route/control labels: Keep main route / Divert for repair. **Timing:** 30 s active decision + 2.4 s resolution; last selection at deadline commits. **Default:** If you do nothing: Keep main route. The previously harmed pair die; the unrelated pair survive.

**Provenance:** original. Original authored scenario; listed sources provide conceptual background, not this scenario or its score. Background: [justice](https://plato.stanford.edu/entries/justice-distributive/).

**A. Keep main route** (default, scene slot 0)

Before choice: The previously harmed pair die; the unrelated pair survive.

Outcome: The previously harmed pair die; the unrelated pair survive.

Deaths: 2 human, 0 cockroach, 0 butterfly; raw **2**, weighted impact **2.0**. Included later human deaths: 0. Ratings: consequences 50, rightsDuties 80, fairness 55. Level score **61.7/100** (exact 185/3).

Strongest supporting reason: Repair should not simply shift harm to new innocents.

Ethical tension: The institution again fails people it already wronged.

**B. Divert for repair** (select-route, scene slot 1)

Before choice: The unrelated pair die; the previously harmed pair survive.

Outcome: The unrelated pair die; the previously harmed pair survive.

Deaths: 2 human, 0 cockroach, 0 butterfly; raw **2**, weighted impact **2.0**. Included later human deaths: 0. Ratings: consequences 50, rightsDuties 35, fairness 55. Level score **46.7/100** (exact 140/3).

Strongest supporting reason: Prior injustice creates a special reason to protect those affected.

Ethical tension: Compensation through another person's death is a troubling repair.

### 160. The Fairness Workshop

Four face the trolley. One siding holds two volunteers selected by a fair rotation; another holds one unwilling outsider. The volunteers reaffirm consent.

**Domain:** Fairness and rights. **Distinction:** Consent and fair distribution versus fewer deaths.

**Layout:** `fork3`; schematic-with-fact-plaques; target `rail-switch`. Route/control labels: Keep main route / Use volunteer pair / Use outsider siding. **Timing:** 30 s active decision + 2.4 s resolution; last selection at deadline commits. **Default:** If you do nothing: Keep main route. Four die; all siding occupants survive.

**Provenance:** original. Original authored scenario; listed sources provide conceptual background, not this scenario or its score. Background: [justice](https://plato.stanford.edu/entries/justice-distributive/).

**A. Keep main route** (default, scene slot 0)

Before choice: Four die; all siding occupants survive.

Outcome: Four die; all siding occupants survive.

Deaths: 4 human, 0 cockroach, 0 butterfly; raw **4**, weighted impact **4.0**. Included later human deaths: 0. Ratings: consequences 25, rightsDuties 80, autonomy 45, fairness 50. Level score **50.0/100** (exact 200/4).

Strongest supporting reason: You refuse either fatal intervention.

Ethical tension: Two people freely offered a fair rescue procedure.

**B. Use volunteer pair** (select-route, scene slot 1)

Before choice: The two volunteers die; the other five survive.

Outcome: The two volunteers die; the other five survive.

Deaths: 2 human, 0 cockroach, 0 butterfly; raw **2**, weighted impact **2.0**. Included later human deaths: 0. Ratings: consequences 70, rightsDuties 85, autonomy 95, fairness 95. Level score **86.2/100** (exact 345/4).

Strongest supporting reason: Consent and reciprocity avoid imposing the rescue on an outsider.

Ethical tension: The fair procedure costs an additional life.

**C. Use outsider siding** (select-route, scene slot 2)

Before choice: The outsider dies; the other six survive.

Outcome: The outsider dies; the other six survive.

Deaths: 1 human, 0 cockroach, 0 butterfly; raw **1**, weighted impact **1.0**. Included later human deaths: 0. Ratings: consequences 90, rightsDuties 25, autonomy 10, fairness 30. Level score **38.8/100** (exact 155/4).

Strongest supporting reason: The smallest death count remains a serious consideration.

Ethical tension: You bypass an authorized procedure to burden an unwilling person.

## Chapter 9: Future effects and precedent

### 161. The Second Trolley

Diverting saves four now but destroys a barrier, certainly killing six different people when a second trolley arrives in one minute. Staying kills the original four only.

**Domain:** Future effects and precedent. **Distinction:** Immediate rescue versus known downstream harm.

**Layout:** `fork2`; schematic-with-fact-plaques; target `rail-switch`. Route/control labels: Keep first route / Divert through barrier. **Timing:** 30 s active decision + 2.4 s resolution; last selection at deadline commits. **Default:** If you do nothing: Keep first route. Four die now; the barrier protects six later.

**Provenance:** original. Original authored scenario; listed sources provide conceptual background, not this scenario or its score. Background: [future](https://plato.stanford.edu/entries/justice-intergenerational/).

**A. Keep first route** (default, scene slot 0)

Before choice: Four die now; the barrier protects six later.

Outcome: Four die now; the barrier protects six later.

Deaths: 4 human, 0 cockroach, 0 butterfly; raw **4**, weighted impact **4.0**. Included later human deaths: 0. Ratings: consequences 80, rightsDuties 80, fairness 75. Level score **78.3/100** (exact 235/3).

Strongest supporting reason: You consider all stipulated consequences rather than only the first scene.

Ethical tension: The visible four bear the cost of protecting later victims.

**B. Divert through barrier** (select-route, scene slot 1)

Before choice: Four survive now; six different people die one minute later.

Outcome: Four survive now; six different people die one minute later.

Deaths: 6 human, 0 cockroach, 0 butterfly; raw **6**, weighted impact **6.0**. Included later human deaths: 6. Ratings: consequences 25, rightsDuties 30, fairness 30. Level score **28.3/100** (exact 85/3).

Strongest supporting reason: The immediate rescue responds to urgent visible need.

Ethical tension: The later six are equally real and fully predictable.

### 162. The Repairable Barrier

Diverting saves four and damages a barrier, but a verified automatic repair finishes before any later trolley. Nobody else dies.

**Domain:** Future effects and precedent. **Distinction:** Avoiding imagined downstream harms.

**Layout:** `fork2`; schematic-with-fact-plaques; target `rail-switch`. Route/control labels: Keep main route / Divert and repair. **Timing:** 30 s active decision + 2.4 s resolution; last selection at deadline commits. **Default:** If you do nothing: Keep main route. Four die; the barrier remains intact.

**Provenance:** original. Original authored scenario; listed sources provide conceptual background, not this scenario or its score. Background: [future](https://plato.stanford.edu/entries/justice-intergenerational/).

**A. Keep main route** (default, scene slot 0)

Before choice: Four die; the barrier remains intact.

Outcome: Four die; the barrier remains intact.

Deaths: 4 human, 0 cockroach, 0 butterfly; raw **4**, weighted impact **4.0**. Included later human deaths: 0. Ratings: consequences 5, rightsDuties 40, fairness 30. Level score **25.0/100** (exact 75/3).

Strongest supporting reason: Maintaining safety infrastructure is ordinarily prudent.

Ethical tension: The verified repair removes the proposed future tradeoff.

**B. Divert and repair** (select-route, scene slot 1)

Before choice: Four survive; the barrier is repaired in time.

Outcome: Four survive; the barrier is repaired in time.

Deaths: 0 human, 0 cockroach, 0 butterfly; raw **0**, weighted impact **0.0**. Included later human deaths: 0. Ratings: consequences 100, rightsDuties 95, fairness 90. Level score **95.0/100** (exact 285/3).

Strongest supporting reason: The full causal account supports a safe rescue.

Ethical tension: Speculation should not override a stipulated reliable safeguard.

### 163. The Dangerous Precedent

Diverting from four to one automatically establishes a binding rule repeated once tomorrow, killing three additional people who otherwise survive. This consequence is certain in the fiction.

**Domain:** Future effects and precedent. **Distinction:** Act outcome versus a linked rule's outcome.

**Layout:** `action2`; schematic-with-fact-plaques; target `control-console`. Route/control labels: Keep route / Divert and bind rule. **Timing:** 30 s active decision + 2.4 s resolution; last selection at deadline commits. **Default:** If you do nothing: Keep route. Four die today; tomorrow's three survive.

**Provenance:** original. Original authored scenario; listed sources provide conceptual background, not this scenario or its score. Background: [future](https://plato.stanford.edu/entries/justice-intergenerational/).

**A. Keep route** (default, scene slot 0)

Before choice: Four die today; tomorrow's three survive.

Outcome: Four die today; tomorrow's three survive.

Deaths: 4 human, 0 cockroach, 0 butterfly; raw **4**, weighted impact **4.0**. Included later human deaths: 0. Ratings: consequences 50, rightsDuties 85, fairness 65. Level score **66.7/100** (exact 200/3).

Strongest supporting reason: You avoid creating a rule that merely moves additional deaths into the future.

Ethical tension: The current four receive no rescue.

**B. Divert and bind rule** (scene-action, scene slot 1)

Before choice: One dies today and three tomorrow; four current people survive.

Outcome: One dies today and three tomorrow; four current people survive.

Deaths: 4 human, 0 cockroach, 0 butterfly; raw **4**, weighted impact **4.0**. Included later human deaths: 3. Ratings: consequences 50, rightsDuties 35, fairness 35. Level score **40.0/100** (exact 120/3).

Strongest supporting reason: You rescue the people currently facing the trolley.

Ethical tension: Equal total deaths expose the burden of establishing the rule.

### 164. The Nonbinding Example

Diverting from four to one is publicly recorded, but no future action or casualty is caused by that record in this stipulated world.

**Domain:** Future effects and precedent. **Distinction:** Precedent concern without causal exaggeration.

**Layout:** `fork2`; schematic-with-fact-plaques; target `rail-switch`. Route/control labels: Keep route / Divert once. **Timing:** 30 s active decision + 2.4 s resolution; last selection at deadline commits. **Default:** If you do nothing: Keep route. Four die; one survives.

**Provenance:** original. Original authored scenario; listed sources provide conceptual background, not this scenario or its score. Background: [future](https://plato.stanford.edu/entries/justice-intergenerational/).

**A. Keep route** (default, scene slot 0)

Before choice: Four die; one survives.

Outcome: Four die; one survives.

Deaths: 4 human, 0 cockroach, 0 butterfly; raw **4**, weighted impact **4.0**. Included later human deaths: 0. Ratings: consequences 25, rightsDuties 85, fairness 55. Level score **55.0/100** (exact 165/3).

Strongest supporting reason: You refuse to redirect harm and worry about what others may infer.

Ethical tension: The scenario supplies no additional future deaths to add to the count.

**B. Divert once** (select-route, scene slot 1)

Before choice: One dies; four survive.

Outcome: One dies; four survive.

Deaths: 1 human, 0 cockroach, 0 butterfly; raw **1**, weighted impact **1.0**. Included later human deaths: 0. Ratings: consequences 85, rightsDuties 55, fairness 65. Level score **68.3/100** (exact 205/3).

Strongest supporting reason: A bounded emergency choice reduces the known loss.

Ethical tension: Its explanation should not claim every similar-looking act is justified.

### 165. The Safety Research Cart

One person faces the trolley. Diverting onto an empty prototype destroys data that would certainly enable a later rescue of three different people; no backup exists.

**Domain:** Future effects and precedent. **Distinction:** Current rescue versus stipulated future benefit.

**Layout:** `fork2`; schematic-with-fact-plaques; target `rail-switch`. Route/control labels: Preserve research / Destroy prototype. **Timing:** 30 s active decision + 2.4 s resolution; last selection at deadline commits. **Default:** If you do nothing: Preserve research. The current person dies; the later three are rescued.

**Provenance:** original. Original authored scenario; listed sources provide conceptual background, not this scenario or its score. Background: [future](https://plato.stanford.edu/entries/justice-intergenerational/).

**A. Preserve research** (default, scene slot 0)

Before choice: The current person dies; the later three are rescued.

Outcome: The current person dies; the later three are rescued.

Deaths: 1 human, 0 cockroach, 0 butterfly; raw **1**, weighted impact **1.0**. Included later human deaths: 0. Ratings: consequences 80, rightsDuties 75, fairness 70. Level score **75.0/100** (exact 225/3).

Strongest supporting reason: The known future rescue matters as much as the visible present life.

Ethical tension: The present victim bears the cost of a benefit they will never see.

**B. Destroy prototype** (select-route, scene slot 1)

Before choice: The current person survives; three later people die without the lost rescue data.

Outcome: The current person survives; three later people die without the lost rescue data.

Deaths: 3 human, 0 cockroach, 0 butterfly; raw **3**, weighted impact **3.0**. Included later human deaths: 3. Ratings: consequences 30, rightsDuties 45, fairness 40. Level score **38.3/100** (exact 115/3).

Strongest supporting reason: You refuse to abandon a person directly in front of you.

Ethical tension: The lost future rescue is certain here, not speculative rhetoric.

### 166. The Speculative Startup

One faces the trolley. A safe diversion destroys a startup's empty cart; its founder makes an unsupported claim that it may save millions someday. No later deaths are stipulated.

**Domain:** Future effects and precedent. **Distinction:** Speculative enormous benefits versus established immediate need.

**Layout:** `fork2`; schematic-with-fact-plaques; target `rail-switch`. Route/control labels: Preserve startup cart / Divert into cart. **Timing:** 30 s active decision + 2.4 s resolution; last selection at deadline commits. **Default:** If you do nothing: Preserve startup cart. The person dies; the startup cart survives; no proven rescue follows.

**Provenance:** original. Original authored scenario; listed sources provide conceptual background, not this scenario or its score. Background: [future](https://plato.stanford.edu/entries/justice-intergenerational/).

**A. Preserve startup cart** (default, scene slot 0)

Before choice: The person dies; the startup cart survives; no proven rescue follows.

Outcome: The person dies; the startup cart survives; no proven rescue follows.

Deaths: 1 human, 0 cockroach, 0 butterfly; raw **1**, weighted impact **1.0**. Included later human deaths: 0. Ratings: consequences 10, rightsDuties 40, fairness 30. Level score **26.7/100** (exact 80/3).

Strongest supporting reason: Long-term innovation can have real value.

Ethical tension: An unsupported enormous claim should not automatically dominate a certain life.

**B. Divert into cart** (select-route, scene slot 1)

Before choice: The person survives; the speculative project loses its cart.

Outcome: The person survives; the speculative project loses its cart.

Deaths: 0 human, 0 cockroach, 0 butterfly; raw **0**, weighted impact **0.0**. Included later human deaths: 0. Ratings: consequences 100, rightsDuties 85, fairness 90. Level score **91.7/100** (exact 275/3).

Strongest supporting reason: The immediate rescue is well established and the future claim is weak.

Ethical tension: Rejecting this claim need not mean ignoring all future people.

### 167. The Long Detour

Two face the trolley. A safe diversion delays medicine until after a deadline, certainly killing three different patients; all facts are verified.

**Domain:** Future effects and precedent. **Distinction:** Indirect fatalities and temporal distance.

**Layout:** `action2`; schematic-with-fact-plaques; target `control-console`. Route/control labels: Keep route / Take medicine detour. **Timing:** 30 s active decision + 2.4 s resolution; last selection at deadline commits. **Default:** If you do nothing: Keep route. Two die; medicine arrives in time for three patients.

**Provenance:** original. Original authored scenario; listed sources provide conceptual background, not this scenario or its score. Background: [future](https://plato.stanford.edu/entries/justice-intergenerational/).

**A. Keep route** (default, scene slot 0)

Before choice: Two die; medicine arrives in time for three patients.

Outcome: Two die; medicine arrives in time for three patients.

Deaths: 2 human, 0 cockroach, 0 butterfly; raw **2**, weighted impact **2.0**. Included later human deaths: 0. Ratings: consequences 75, rightsDuties 80, fairness 70. Level score **75.0/100** (exact 225/3).

Strongest supporting reason: A complete account includes people outside the visible rail scene.

Ethical tension: The two are sacrificed to a delivery schedule that protects others.

**B. Take medicine detour** (scene-action, scene slot 1)

Before choice: The two survive; three patients die after the missed delivery.

Outcome: The two survive; three patients die after the missed delivery.

Deaths: 3 human, 0 cockroach, 0 butterfly; raw **3**, weighted impact **3.0**. Included later human deaths: 3. Ratings: consequences 35, rightsDuties 40, fairness 40. Level score **38.3/100** (exact 115/3).

Strongest supporting reason: You rescue the people immediately threatened by the vehicle.

Ethical tension: Indirect deaths still belong in the actual tally.

### 168. The Durable Safety Fund

Three face the trolley. A safe diversion destroys an empty cash cart earmarked for cosmetic station upgrades, falsely marketed as a safety fund.

**Domain:** Future effects and precedent. **Distinction:** Labels versus actual future use.

**Layout:** `action2`; schematic-with-fact-plaques; target `control-console`. Route/control labels: Preserve named fund / Divert into cash cart. **Timing:** 30 s active decision + 2.4 s resolution; last selection at deadline commits. **Default:** If you do nothing: Preserve named fund. Three die; the cosmetic budget survives.

**Provenance:** original. Original authored scenario; listed sources provide conceptual background, not this scenario or its score. Background: [future](https://plato.stanford.edu/entries/justice-intergenerational/).

**A. Preserve named fund** (default, scene slot 0)

Before choice: Three die; the cosmetic budget survives.

Outcome: Three die; the cosmetic budget survives.

Deaths: 3 human, 0 cockroach, 0 butterfly; raw **3**, weighted impact **3.0**. Included later human deaths: 0. Ratings: consequences 5, rightsDuties 30, fairness 20. Level score **18.3/100** (exact 55/3).

Strongest supporting reason: Genuine safety investment could justify looking beyond the present.

Ethical tension: The verified use is cosmetic, despite its impressive label.

**B. Divert into cash cart** (scene-action, scene slot 1)

Before choice: Three survive; cosmetic upgrades are canceled.

Outcome: Three survive; cosmetic upgrades are canceled.

Deaths: 0 human, 0 cockroach, 0 butterfly; raw **0**, weighted impact **0.0**. Included later human deaths: 0. Ratings: consequences 100, rightsDuties 90, fairness 90. Level score **93.3/100** (exact 280/3).

Strongest supporting reason: Actual use matters more than the fund's name.

Ethical tension: The canceled improvements may disappoint people without outweighing life.

### 169. The Memory Archive

Two face the trolley. A safe diversion destroys the only archive of a lost community's language, with no additional deaths.

**Domain:** Future effects and precedent. **Distinction:** Lives versus irreplaceable intergenerational cultural value.

**Layout:** `fork2`; schematic-with-fact-plaques; target `rail-switch`. Route/control labels: Preserve archive / Destroy archive to rescue. **Timing:** 30 s active decision + 2.4 s resolution; last selection at deadline commits. **Default:** If you do nothing: Preserve archive. Two die; the language archive survives.

**Provenance:** original. Original authored scenario; listed sources provide conceptual background, not this scenario or its score. Background: [future](https://plato.stanford.edu/entries/justice-intergenerational/).

**A. Preserve archive** (default, scene slot 0)

Before choice: Two die; the language archive survives.

Outcome: Two die; the language archive survives.

Deaths: 2 human, 0 cockroach, 0 butterfly; raw **2**, weighted impact **2.0**. Included later human deaths: 0. Ratings: consequences 25, rightsDuties 70, fairness 55. Level score **50.0/100** (exact 150/3).

Strongest supporting reason: The archive connects future people to a culture that cannot be recreated.

Ethical tension: Cultural survival is being purchased with present lives.

**B. Destroy archive to rescue** (select-route, scene slot 1)

Before choice: Two survive; the unique archive is lost.

Outcome: Two survive; the unique archive is lost.

Deaths: 0 human, 0 cockroach, 0 butterfly; raw **0**, weighted impact **0.0**. Included later human deaths: 0. Ratings: consequences 90, rightsDuties 75, fairness 70. Level score **78.3/100** (exact 235/3).

Strongest supporting reason: Living people have urgent claims that even unique cultural objects may not override.

Ethical tension: The loss reaches beyond ordinary property damage.

### 170. The Pollution Switch

Diverting saves two now but releases a verified toxin that kills four different people next year. Staying kills only the two.

**Domain:** Future effects and precedent. **Distinction:** Delayed harm and equal concern across time.

**Layout:** `fork2`; schematic-with-fact-plaques; target `rail-switch`. Route/control labels: Keep route / Divert and release toxin. **Timing:** 30 s active decision + 2.4 s resolution; last selection at deadline commits. **Default:** If you do nothing: Keep route. Two die now; four later people survive.

**Provenance:** original. Original authored scenario; listed sources provide conceptual background, not this scenario or its score. Background: [future](https://plato.stanford.edu/entries/justice-intergenerational/).

**A. Keep route** (default, scene slot 0)

Before choice: Two die now; four later people survive.

Outcome: Two die now; four later people survive.

Deaths: 2 human, 0 cockroach, 0 butterfly; raw **2**, weighted impact **2.0**. Included later human deaths: 0. Ratings: consequences 80, rightsDuties 80, fairness 80. Level score **80.0/100** (exact 240/3).

Strongest supporting reason: Delay does not reduce the moral standing of future victims.

Ethical tension: The visible people pay for avoiding a less visible harm.

**B. Divert and release toxin** (select-route, scene slot 1)

Before choice: Two survive now; four die next year.

Outcome: Two survive now; four die next year.

Deaths: 4 human, 0 cockroach, 0 butterfly; raw **4**, weighted impact **4.0**. Included later human deaths: 4. Ratings: consequences 25, rightsDuties 30, fairness 25. Level score **26.7/100** (exact 80/3).

Strongest supporting reason: You respond to the most immediate emergency.

Ethical tension: The known future deaths cannot be discounted out of the body count.

### 171. The Reversible Policy

Four face the trolley. Diverting kills one and sets a policy that can be immediately canceled; a verified automatic cancellation prevents any repetition.

**Domain:** Future effects and precedent. **Distinction:** Reversibility and bounded exceptions.

**Layout:** `action2`; schematic-with-fact-plaques; target `control-console`. Route/control labels: Keep route / Divert with cancellation. **Timing:** 30 s active decision + 2.4 s resolution; last selection at deadline commits. **Default:** If you do nothing: Keep route. Four die; one survives; no policy is created.

**Provenance:** original. Original authored scenario; listed sources provide conceptual background, not this scenario or its score. Background: [future](https://plato.stanford.edu/entries/justice-intergenerational/).

**A. Keep route** (default, scene slot 0)

Before choice: Four die; one survives; no policy is created.

Outcome: Four die; one survives; no policy is created.

Deaths: 4 human, 0 cockroach, 0 butterfly; raw **4**, weighted impact **4.0**. Included later human deaths: 0. Ratings: consequences 25, rightsDuties 85, fairness 55. Level score **55.0/100** (exact 165/3).

Strongest supporting reason: You resist both redirection and dangerous generalization.

Ethical tension: The guaranteed cancellation removes the repeated-harm concern.

**B. Divert with cancellation** (scene-action, scene slot 1)

Before choice: One dies; four survive; the temporary policy is canceled.

Outcome: One dies; four survive; the temporary policy is canceled.

Deaths: 1 human, 0 cockroach, 0 butterfly; raw **1**, weighted impact **1.0**. Included later human deaths: 0. Ratings: consequences 85, rightsDuties 60, fairness 65. Level score **70.0/100** (exact 210/3).

Strongest supporting reason: A bounded intervention can avoid a harmful standing rule.

Ethical tension: The single imposed death still needs its own justification.

### 172. The Inherited Repair Bill

A safe brake saves three but transfers a large nonlethal repair debt to future residents who cannot consent.

**Domain:** Future effects and precedent. **Distinction:** Intergenerational cost allocation.

**Layout:** `action2`; schematic-with-fact-plaques; target `control-console`. Route/control labels: Avoid future debt / Brake using future funds. **Timing:** 30 s active decision + 2.4 s resolution; last selection at deadline commits. **Default:** If you do nothing: Avoid future debt. Three die; future residents inherit no repair debt.

**Provenance:** original. Original authored scenario; listed sources provide conceptual background, not this scenario or its score. Background: [future](https://plato.stanford.edu/entries/justice-intergenerational/).

**A. Avoid future debt** (default, scene slot 0)

Before choice: Three die; future residents inherit no repair debt.

Outcome: Three die; future residents inherit no repair debt.

Deaths: 3 human, 0 cockroach, 0 butterfly; raw **3**, weighted impact **3.0**. Included later human deaths: 0. Ratings: consequences 20, rightsDuties 70, autonomy 80, fairness 65. Level score **58.8/100** (exact 235/4).

Strongest supporting reason: Future people should not be treated as a free funding source.

Ethical tension: The present rescue benefit is exceptionally large.

**B. Brake using future funds** (scene-action, scene slot 1)

Before choice: Three survive; future residents inherit the debt.

Outcome: Three survive; future residents inherit the debt.

Deaths: 0 human, 0 cockroach, 0 butterfly; raw **0**, weighted impact **0.0**. Included later human deaths: 0. Ratings: consequences 100, rightsDuties 65, autonomy 30, fairness 55. Level score **62.5/100** (exact 250/4).

Strongest supporting reason: A major financial cost can be justified to prevent deaths.

Ethical tension: Fair financing and representation remain unresolved after rescue.

### 173. The Future Seat

One current person faces the trolley. Diverting prevents a future rail service from being built; this means some possible passengers are never conceived, but no existing or future person dies because of it.

**Domain:** Future effects and precedent. **Distinction:** Nonexistence is not a death count.

**Layout:** `fork2`; schematic-with-fact-plaques; target `rail-switch`. Route/control labels: Preserve future service / Save current person. **Timing:** 30 s active decision + 2.4 s resolution; last selection at deadline commits. **Default:** If you do nothing: Preserve future service. The current person dies; the service and its possible future passengers remain possible.

**Provenance:** original. Original authored scenario; listed sources provide conceptual background, not this scenario or its score. Background: [future](https://plato.stanford.edu/entries/justice-intergenerational/).

**A. Preserve future service** (default, scene slot 0)

Before choice: The current person dies; the service and its possible future passengers remain possible.

Outcome: The current person dies; the service and its possible future passengers remain possible.

Deaths: 1 human, 0 cockroach, 0 butterfly; raw **1**, weighted impact **1.0**. Included later human deaths: 0. Ratings: consequences 25, rightsDuties 60, fairness 50. Level score **45.0/100** (exact 135/3).

Strongest supporting reason: Creating good future lives can matter to some ethical views.

Ethical tension: A merely possible person is not a casualty you can count as dead.

**B. Save current person** (select-route, scene slot 1)

Before choice: The person survives; the future service is not built; no additional person dies.

Outcome: The person survives; the future service is not built; no additional person dies.

Deaths: 0 human, 0 cockroach, 0 butterfly; raw **0**, weighted impact **0.0**. Included later human deaths: 0. Ratings: consequences 90, rightsDuties 80, fairness 75. Level score **81.7/100** (exact 245/3).

Strongest supporting reason: An actual urgent claim can outweigh speculative population changes.

Ethical tension: The moral relevance of possible lives remains open beyond this counter.

### 174. The Guaranteed Memorial

Two face the trolley. A safe diversion destroys a giant memorial to railway victims before its dedication; no later harm follows.

**Domain:** Future effects and precedent. **Distinction:** Honoring past people through present action.

**Layout:** `action2`; schematic-with-fact-plaques; target `control-console`. Route/control labels: Preserve memorial / Divert through memorial. **Timing:** 30 s active decision + 2.4 s resolution; last selection at deadline commits. **Default:** If you do nothing: Preserve memorial. Two die; the memorial stands.

**Provenance:** original. Original authored scenario; listed sources provide conceptual background, not this scenario or its score. Background: [future](https://plato.stanford.edu/entries/justice-intergenerational/).

**A. Preserve memorial** (default, scene slot 0)

Before choice: Two die; the memorial stands.

Outcome: Two die; the memorial stands.

Deaths: 2 human, 0 cockroach, 0 butterfly; raw **2**, weighted impact **2.0**. Included later human deaths: 0. Ratings: consequences 5, rightsDuties 35, fairness 25. Level score **21.7/100** (exact 65/3).

Strongest supporting reason: Commemoration expresses serious duties of remembrance.

Ethical tension: A memorial to victims is a poor reason to create more victims.

**B. Divert through memorial** (scene-action, scene slot 1)

Before choice: Both survive; the memorial is destroyed.

Outcome: Both survive; the memorial is destroyed.

Deaths: 0 human, 0 cockroach, 0 butterfly; raw **0**, weighted impact **0.0**. Included later human deaths: 0. Ratings: consequences 100, rightsDuties 90, fairness 85. Level score **91.7/100** (exact 275/3).

Strongest supporting reason: Protecting lives can honor the values the memorial represents.

Ethical tension: The community still loses a meaningful place of remembrance.

### 175. The Habit Machine

A machine saves four by killing one now and automatically repeats the identical event with new people twice later. Turning it off leaves four dead now and prevents both later events.

**Domain:** Future effects and precedent. **Distinction:** Automation and repeated consequences.

**Layout:** `action2`; schematic-with-fact-plaques; target `control-console`. Route/control labels: Leave machine off / Start repeated machine. **Timing:** 30 s active decision + 2.4 s resolution; last selection at deadline commits. **Default:** If you do nothing: Leave machine off. Four die now; no later events occur.

**Provenance:** original. Original authored scenario; listed sources provide conceptual background, not this scenario or its score. Background: [future](https://plato.stanford.edu/entries/justice-intergenerational/).

**A. Leave machine off** (default, scene slot 0)

Before choice: Four die now; no later events occur.

Outcome: Four die now; no later events occur.

Deaths: 4 human, 0 cockroach, 0 butterfly; raw **4**, weighted impact **4.0**. Included later human deaths: 0. Ratings: consequences 60, rightsDuties 90, fairness 75. Level score **75.0/100** (exact 225/3).

Strongest supporting reason: You avoid a standing mechanism that continually manufactures victims.

Ethical tension: The first four are not rescued.

**B. Start repeated machine** (scene-action, scene slot 1)

Before choice: One dies now and one in each later event; twelve threatened people survive across the three events.

Outcome: One dies now and one in each later event; twelve threatened people survive across the three events.

Deaths: 3 human, 0 cockroach, 0 butterfly; raw **3**, weighted impact **3.0**. Included later human deaths: 2. Ratings: consequences 80, rightsDuties 20, fairness 30. Level score **43.3/100** (exact 130/3).

Strongest supporting reason: Across all stipulated events, fewer people die.

Ethical tension: A recurring institution of imposed sacrifice may violate protections even with lower totals.

### 176. The Exit Clause

Four face the trolley. A rescue agreement saves them at the cost of one volunteer now, but an enforceable exit clause stops any future use unless new volunteers agree.

**Domain:** Future effects and precedent. **Distinction:** Institutions that preserve future agency.

**Layout:** `action2`; schematic-with-fact-plaques; target `control-console`. Route/control labels: Decline agreement / Accept bounded agreement. **Timing:** 30 s active decision + 2.4 s resolution; last selection at deadline commits. **Default:** If you do nothing: Decline agreement. Four die; the volunteer survives.

**Provenance:** original. Original authored scenario; listed sources provide conceptual background, not this scenario or its score. Background: [future](https://plato.stanford.edu/entries/justice-intergenerational/).

**A. Decline agreement** (default, scene slot 0)

Before choice: Four die; the volunteer survives.

Outcome: Four die; the volunteer survives.

Deaths: 4 human, 0 cockroach, 0 butterfly; raw **4**, weighted impact **4.0**. Included later human deaths: 0. Ratings: consequences 25, rightsDuties 80, autonomy 45, fairness 55. Level score **51.2/100** (exact 205/4).

Strongest supporting reason: You decline to establish a fatal rescue practice.

Ethical tension: The exit clause limits the feared future coercion.

**B. Accept bounded agreement** (scene-action, scene slot 1)

Before choice: The volunteer dies; four survive; no further sacrifice occurs without fresh agreement.

Outcome: The volunteer dies; four survive; no further sacrifice occurs without fresh agreement.

Deaths: 1 human, 0 cockroach, 0 butterfly; raw **1**, weighted impact **1.0**. Included later human deaths: 0. Ratings: consequences 85, rightsDuties 75, autonomy 95, fairness 85. Level score **85.0/100** (exact 340/4).

Strongest supporting reason: Current consent and future exit rights constrain the institution.

Ethical tension: A legitimate process still includes a grave present loss.

### 177. The Discount Sticker

One person faces the trolley now. Diverting kills one different person exactly ten years later; all other effects are equal.

**Domain:** Future effects and precedent. **Distinction:** Time preference without differences in persons' standing.

**Layout:** `fork2`; schematic-with-fact-plaques; target `rail-switch`. Route/control labels: Keep present route / Transfer harm ten years. **Timing:** 30 s active decision + 2.4 s resolution; last selection at deadline commits. **Default:** If you do nothing: Keep present route. The present person dies; the future victim survives.

**Provenance:** original. Original authored scenario; listed sources provide conceptual background, not this scenario or its score. Background: [future](https://plato.stanford.edu/entries/justice-intergenerational/).

**A. Keep present route** (default, scene slot 0)

Before choice: The present person dies; the future victim survives.

Outcome: The present person dies; the future victim survives.

Deaths: 1 human, 0 cockroach, 0 butterfly; raw **1**, weighted impact **1.0**. Included later human deaths: 0. Ratings: consequences 50, rightsDuties 85, fairness 75. Level score **70.0/100** (exact 210/3).

Strongest supporting reason: A ten-year delay alone need not justify transferring lethal danger.

Ethical tension: The present person loses years the other route could preserve.

**B. Transfer harm ten years** (select-route, scene slot 1)

Before choice: The present person survives; a different person dies ten years later.

Outcome: The present person survives; a different person dies ten years later.

Deaths: 1 human, 0 cockroach, 0 butterfly; raw **1**, weighted impact **1.0**. Included later human deaths: 1. Ratings: consequences 65, rightsDuties 45, fairness 45. Level score **51.7/100** (exact 155/3).

Strongest supporting reason: More time alive before the fatal event can matter.

Ethical tension: Distance in time does not make the later person's claim disappear.

### 178. The Perfect Backup

One person faces the trolley. A safe diversion destroys an original scientific notebook; a verified complete usable backup already exists.

**Domain:** Future effects and precedent. **Distinction:** Irreplaceability claims and factual correction.

**Layout:** `action2`; schematic-with-fact-plaques; target `control-console`. Route/control labels: Protect original notebook / Destroy original to rescue. **Timing:** 30 s active decision + 2.4 s resolution; last selection at deadline commits. **Default:** If you do nothing: Protect original notebook. The person dies; original and backup remain.

**Provenance:** original. Original authored scenario; listed sources provide conceptual background, not this scenario or its score. Background: [future](https://plato.stanford.edu/entries/justice-intergenerational/).

**A. Protect original notebook** (default, scene slot 0)

Before choice: The person dies; original and backup remain.

Outcome: The person dies; original and backup remain.

Deaths: 1 human, 0 cockroach, 0 butterfly; raw **1**, weighted impact **1.0**. Included later human deaths: 0. Ratings: consequences 5, rightsDuties 35, fairness 25. Level score **21.7/100** (exact 65/3).

Strongest supporting reason: Original objects can carry historical value.

Ethical tension: The knowledge itself is not at risk.

**B. Destroy original to rescue** (scene-action, scene slot 1)

Before choice: The person survives; all scientific information remains in the backup.

Outcome: The person survives; all scientific information remains in the backup.

Deaths: 0 human, 0 cockroach, 0 butterfly; raw **0**, weighted impact **0.0**. Included later human deaths: 0. Ratings: consequences 100, rightsDuties 90, fairness 90. Level score **93.3/100** (exact 280/3).

Strongest supporting reason: The verified backup removes the major future-benefit objection.

Ethical tension: Historical value is still a loss, though not a comparable fatal harm.

### 179. The Legacy Reputation

Three face the trolley. A safe brake exposes that your character's revered ancestor designed the failure; no other harm results beyond reputational loss.

**Domain:** Future effects and precedent. **Distinction:** Loyalty to the dead versus duties to the living.

**Layout:** `action2`; schematic-with-fact-plaques; target `control-console`. Route/control labels: Protect family legend / Brake and reveal truth. **Timing:** 30 s active decision + 2.4 s resolution; last selection at deadline commits. **Default:** If you do nothing: Protect family legend. Three die; the ancestor's reputation remains intact.

**Provenance:** original. Original authored scenario; listed sources provide conceptual background, not this scenario or its score. Background: [future](https://plato.stanford.edu/entries/justice-intergenerational/).

**A. Protect family legend** (default, scene slot 0)

Before choice: Three die; the ancestor's reputation remains intact.

Outcome: Three die; the ancestor's reputation remains intact.

Deaths: 3 human, 0 cockroach, 0 butterfly; raw **3**, weighted impact **3.0**. Included later human deaths: 0. Ratings: consequences 0, rightsDuties 20, fairness 15. Level score **11.7/100** (exact 35/3).

Strongest supporting reason: Family memory can be an important part of identity.

Ethical tension: A comforting history is not a sufficient reason to sacrifice living people.

**B. Brake and reveal truth** (scene-action, scene slot 1)

Before choice: Three survive; the design flaw becomes public.

Outcome: Three survive; the design flaw becomes public.

Deaths: 0 human, 0 cockroach, 0 butterfly; raw **0**, weighted impact **0.0**. Included later human deaths: 0. Ratings: consequences 100, rightsDuties 95, fairness 90. Level score **95.0/100** (exact 285/3).

Strongest supporting reason: Rescue and an accurate record outweigh a flattering legend.

Ethical tension: You can grieve a changed story without hiding the facts.

### 180. The Horizon Choice

Three face the trolley. One siding kills one now and two different people later; another kills two now with no later deaths. All effects are certain.

**Domain:** Future effects and precedent. **Distinction:** Full-horizon comparison versus immediate optics.

**Layout:** `fork3`; schematic-with-fact-plaques; target `rail-switch`. Route/control labels: Keep three route / Choose one-now route / Choose two-now route. **Timing:** 30 s active decision + 2.4 s resolution; last selection at deadline commits. **Default:** If you do nothing: Keep three route. Three die now; nobody dies later.

**Provenance:** original. Original authored scenario; listed sources provide conceptual background, not this scenario or its score. Background: [future](https://plato.stanford.edu/entries/justice-intergenerational/).

**A. Keep three route** (default, scene slot 0)

Before choice: Three die now; nobody dies later.

Outcome: Three die now; nobody dies later.

Deaths: 3 human, 0 cockroach, 0 butterfly; raw **3**, weighted impact **3.0**. Included later human deaths: 0. Ratings: consequences 40, rightsDuties 85, fairness 60. Level score **61.7/100** (exact 185/3).

Strongest supporting reason: You avoid redirecting the threat.

Ethical tension: The equal-total alternative does not help, but the two-person route does.

**B. Choose one-now route** (select-route, scene slot 1)

Before choice: One dies now and two later; three main-track people survive.

Outcome: One dies now and two later; three main-track people survive.

Deaths: 3 human, 0 cockroach, 0 butterfly; raw **3**, weighted impact **3.0**. Included later human deaths: 2. Ratings: consequences 40, rightsDuties 40, fairness 40. Level score **40.0/100** (exact 120/3).

Strongest supporting reason: The immediate visible loss is minimized.

Ethical tension: A smaller first scene conceals an equal total loss.

**C. Choose two-now route** (select-route, scene slot 2)

Before choice: Two die now; three survive and nobody dies later.

Outcome: Two die now; three survive and nobody dies later.

Deaths: 2 human, 0 cockroach, 0 butterfly; raw **2**, weighted impact **2.0**. Included later human deaths: 0. Ratings: consequences 80, rightsDuties 55, fairness 65. Level score **66.7/100** (exact 200/3).

Strongest supporting reason: Counting the entire horizon produces the smallest actual loss.

Ethical tension: Both immediate victims still bear an imposed burden.

## Chapter 10: Synthesis

### 181. The Volunteer Friend

Five strangers face the trolley. Your close friend freely and knowingly volunteers for the fatal stopping platform.

**Domain:** Synthesis. **Distinction:** Consent, friendship, and aggregate rescue.

**Layout:** `action2`; schematic-with-fact-plaques; target `control-console`. Route/control labels: Reject friend's offer / Accept friend's offer. **Timing:** 30 s active decision + 2.4 s resolution; last selection at deadline commits. **Default:** If you do nothing: Reject friend's offer. Five die; your friend survives.

**Provenance:** original. Original authored scenario; listed sources provide conceptual background, not this scenario or its score. Background: [doing](https://plato.stanford.edu/entries/doing-allowing/), [consent](https://plato.stanford.edu/entries/informed-consent/), [justice](https://plato.stanford.edu/entries/justice-distributive/).

**A. Reject friend's offer** (default, scene slot 0)

Before choice: Five die; your friend survives.

Outcome: Five die; your friend survives.

Deaths: 5 human, 0 cockroach, 0 butterfly; raw **5**, weighted impact **5.0**. Included later human deaths: 0. Ratings: consequences 20, rightsDuties 80, autonomy 40, fairness 45. Level score **46.2/100** (exact 185/4).

Strongest supporting reason: Love can make you reluctant to facilitate a friend's death.

Ethical tension: Refusal also discounts a free decision made to help others.

**B. Accept friend's offer** (scene-action, scene slot 1)

Before choice: Your friend dies; five survive.

Outcome: Your friend dies; five survive.

Deaths: 1 human, 0 cockroach, 0 butterfly; raw **1**, weighted impact **1.0**. Included later human deaths: 0. Ratings: consequences 90, rightsDuties 75, autonomy 95, fairness 80. Level score **85.0/100** (exact 340/4).

Strongest supporting reason: The offer joins informed autonomy with a larger rescue.

Ethical tension: Respecting their agency can conflict with your own relational commitments.

### 182. The Unwilling Benefactor

Four face the trolley. The siding holds a person who once saved you but now explicitly refuses diversion.

**Domain:** Synthesis. **Distinction:** Gratitude, refusal, and equal lives.

**Layout:** `fork2`; schematic-with-fact-plaques; target `rail-switch`. Route/control labels: Protect benefactor / Divert despite refusal. **Timing:** 30 s active decision + 2.4 s resolution; last selection at deadline commits. **Default:** If you do nothing: Protect benefactor. Four die; your benefactor survives.

**Provenance:** original. Original authored scenario; listed sources provide conceptual background, not this scenario or its score. Background: [doing](https://plato.stanford.edu/entries/doing-allowing/), [consent](https://plato.stanford.edu/entries/informed-consent/), [justice](https://plato.stanford.edu/entries/justice-distributive/).

**A. Protect benefactor** (default, scene slot 0)

Before choice: Four die; your benefactor survives.

Outcome: Four die; your benefactor survives.

Deaths: 4 human, 0 cockroach, 0 butterfly; raw **4**, weighted impact **4.0**. Included later human deaths: 0. Ratings: consequences 25, rightsDuties 90, autonomy 95, fairness 45. Level score **63.8/100** (exact 255/4).

Strongest supporting reason: Both gratitude and their refusal support protecting them.

Ethical tension: Four others have no weaker basic claim to life.

**B. Divert despite refusal** (select-route, scene slot 1)

Before choice: Your benefactor dies; four survive.

Outcome: Your benefactor dies; four survive.

Deaths: 1 human, 0 cockroach, 0 butterfly; raw **1**, weighted impact **1.0**. Included later human deaths: 0. Ratings: consequences 85, rightsDuties 35, autonomy 10, fairness 60. Level score **47.5/100** (exact 190/4).

Strongest supporting reason: The number of people rescued remains morally significant.

Ethical tension: The rescue overrides refusal and a strong personal debt.

### 183. The Coerced Fair Lottery

A fair lottery selected one worker to stop the trolley and save five, but all participants were forced to enter.

**Domain:** Synthesis. **Distinction:** Procedural equality without voluntary participation.

**Layout:** `action2`; schematic-with-fact-plaques; target `control-console`. Route/control labels: Reject forced lottery / Enforce lottery. **Timing:** 30 s active decision + 2.4 s resolution; last selection at deadline commits. **Default:** If you do nothing: Reject forced lottery. Five die; the selected worker survives.

**Provenance:** original. Original authored scenario; listed sources provide conceptual background, not this scenario or its score. Background: [doing](https://plato.stanford.edu/entries/doing-allowing/), [consent](https://plato.stanford.edu/entries/informed-consent/), [justice](https://plato.stanford.edu/entries/justice-distributive/).

**A. Reject forced lottery** (default, scene slot 0)

Before choice: Five die; the selected worker survives.

Outcome: Five die; the selected worker survives.

Deaths: 5 human, 0 cockroach, 0 butterfly; raw **5**, weighted impact **5.0**. Included later human deaths: 0. Ratings: consequences 20, rightsDuties 95, autonomy 90, fairness 65. Level score **67.5/100** (exact 270/4).

Strongest supporting reason: Equal treatment inside a coercive scheme does not legitimize the scheme.

Ethical tension: The procedure did distribute the burden without favoritism.

**B. Enforce lottery** (scene-action, scene slot 1)

Before choice: The selected worker dies; five survive.

Outcome: The selected worker dies; five survive.

Deaths: 1 human, 0 cockroach, 0 butterfly; raw **1**, weighted impact **1.0**. Included later human deaths: 0. Ratings: consequences 90, rightsDuties 30, autonomy 10, fairness 60. Level score **47.5/100** (exact 190/4).

Strongest supporting reason: An impartial selection avoids picking a convenient outsider.

Ethical tension: Fair odds do not substitute for freedom to decline the scheme.

### 184. The Uncertain Volunteer

Four face the trolley. A fully informed volunteer accepts a rescue platform with an 80% chance of killing them and saving four, otherwise killing all five.

**Domain:** Synthesis. **Distinction:** Consent under risk and residual harm to others.

**Layout:** `action2`; schematic-with-fact-plaques; target `control-console`. Route/control labels: Decline risky offer / Accept risky offer. **Timing:** 30 s active decision + 2.4 s resolution; last selection at deadline commits. **Default:** If you do nothing: Decline risky offer. Four certain deaths; volunteer survives.

**Provenance:** original. Original authored scenario; listed sources provide conceptual background, not this scenario or its score. Background: [doing](https://plato.stanford.edu/entries/doing-allowing/), [consent](https://plato.stanford.edu/entries/informed-consent/), [justice](https://plato.stanford.edu/entries/justice-distributive/).

**A. Decline risky offer** (default, scene slot 0)

Before choice: Four certain deaths; volunteer survives.

Outcome: Four die; the volunteer survives.

Deaths: 4 human, 0 cockroach, 0 butterfly; raw **4**, weighted impact **4.0**. Included later human deaths: 0. Ratings: consequences 25, rightsDuties 80, autonomy 45, fairness 55. Level score **51.2/100** (exact 205/4).

Strongest supporting reason: The volunteer cannot consent for the four to the failure risk.

Ethical tension: Their alternative was already certain death.

**B. Accept risky offer** (scene-action, scene slot 1)

Before choice: 80% chance of one volunteer death and four saved; 20% chance all five die.

Outcome: The volunteer dies; four survive.

Deaths: 1 human, 0 cockroach, 0 butterfly; raw **1**, weighted impact **1.0**. Included later human deaths: 0. Ratings: consequences 85, rightsDuties 70, autonomy 90, fairness 70. Level score **78.8/100** (exact 315/4).

Strongest supporting reason: The offer improves the four's prospects while authorizing the volunteer's own risk.

Ethical tension: Consent does not make a dangerous mechanism safe.

Author-only world note: Four face the trolley. A fully informed volunteer accepts a rescue platform with an 80% chance of killing them and saving four, otherwise killing all five. It works in this fixed scene. Outcomes are fixed reveals, not fresh random draws; do not expose this note or outcome objects before commitment.

### 185. The Private Safe Brake

Four face the trolley. A safe brake requires breaking a confidentiality promise and disclosing that a volunteer's sacrifice was unnecessary.

**Domain:** Synthesis. **Distinction:** Truth, trust, and refusing a false dilemma.

**Layout:** `action2`; schematic-with-fact-plaques; target `control-console`. Route/control labels: Keep secret and course / Disclose and brake. **Timing:** 30 s active decision + 2.4 s resolution; last selection at deadline commits. **Default:** If you do nothing: Keep secret and course. Four die; the confidentiality promise remains unbroken.

**Provenance:** original. Original authored scenario; listed sources provide conceptual background, not this scenario or its score. Background: [doing](https://plato.stanford.edu/entries/doing-allowing/), [consent](https://plato.stanford.edu/entries/informed-consent/), [justice](https://plato.stanford.edu/entries/justice-distributive/).

**A. Keep secret and course** (default, scene slot 0)

Before choice: Four die; the confidentiality promise remains unbroken.

Outcome: Four die; the confidentiality promise remains unbroken.

Deaths: 4 human, 0 cockroach, 0 butterfly; raw **4**, weighted impact **4.0**. Included later human deaths: 0. Ratings: consequences 5, rightsDuties 45, autonomy 70, fairness 30. Level score **37.5/100** (exact 150/4).

Strongest supporting reason: Confidentiality protects reliance on your word.

Ethical tension: A secret that blocks a safe rescue has a weak claim here.

**B. Disclose and brake** (scene-action, scene slot 1)

Before choice: Four survive; the secret is revealed and no volunteer dies.

Outcome: Four survive; the secret is revealed and no volunteer dies.

Deaths: 0 human, 0 cockroach, 0 butterfly; raw **0**, weighted impact **0.0**. Included later human deaths: 0. Ratings: consequences 100, rightsDuties 80, autonomy 45, fairness 85. Level score **77.5/100** (exact 310/4).

Strongest supporting reason: A safe rescue outweighs the limited confidentiality interest.

Ethical tension: The person whose secret is disclosed still deserves an explanation.

### 186. The Biased Rescue Model

An algorithm advises killing two unknown workers to save one famous donor, promising unsupported future benefits. You see all actual counts.

**Domain:** Synthesis. **Distinction:** Authority, speculative value, and social bias.

**Layout:** `fork2`; schematic-with-fact-plaques; target `rail-switch`. Route/control labels: Reject model route / Follow donor priority. **Timing:** 30 s active decision + 2.4 s resolution; last selection at deadline commits. **Default:** If you do nothing: Reject model route. The donor dies; two workers survive.

**Provenance:** original. Original authored scenario; listed sources provide conceptual background, not this scenario or its score. Background: [doing](https://plato.stanford.edu/entries/doing-allowing/), [consent](https://plato.stanford.edu/entries/informed-consent/), [justice](https://plato.stanford.edu/entries/justice-distributive/).

**A. Reject model route** (default, scene slot 0)

Before choice: The donor dies; two workers survive.

Outcome: The donor dies; two workers survive.

Deaths: 1 human, 0 cockroach, 0 butterfly; raw **1**, weighted impact **1.0**. Included later human deaths: 0. Ratings: consequences 85, rightsDuties 85, fairness 95. Level score **88.3/100** (exact 265/3).

Strongest supporting reason: Equal human standing and reliable present facts defeat the unsupported ranking.

Ethical tension: The donor's own life remains fully valuable.

**B. Follow donor priority** (select-route, scene slot 1)

Before choice: Two workers die; the donor survives; no future rescue is established.

Outcome: Two workers die; the donor survives; no future rescue is established.

Deaths: 2 human, 0 cockroach, 0 butterfly; raw **2**, weighted impact **2.0**. Included later human deaths: 0. Ratings: consequences 25, rightsDuties 25, fairness 10. Level score **20.0/100** (exact 60/3).

Strongest supporting reason: The donor might contribute to future good.

Ethical tension: Unsupported projections and fame cannot reliably justify the imposed extra loss.

### 187. The Repairing Saboteur

Three face a trolley released by a saboteur. The saboteur now freely offers their life to stop it; a one-person unwilling siding is also available.

**Domain:** Synthesis. **Distinction:** Correction, consent, and equal-cost alternatives.

**Layout:** `action3`; schematic-with-fact-plaques; target `control-console`. Route/control labels: Keep main route / Accept saboteur's offer / Use unwilling siding. **Timing:** 30 s active decision + 2.4 s resolution; last selection at deadline commits. **Default:** If you do nothing: Keep main route. Three die; both lone people survive.

**Provenance:** original. Original authored scenario; listed sources provide conceptual background, not this scenario or its score. Background: [doing](https://plato.stanford.edu/entries/doing-allowing/), [consent](https://plato.stanford.edu/entries/informed-consent/), [justice](https://plato.stanford.edu/entries/justice-distributive/).

**A. Keep main route** (default, scene slot 0)

Before choice: Three die; both lone people survive.

Outcome: Three die; both lone people survive.

Deaths: 3 human, 0 cockroach, 0 butterfly; raw **3**, weighted impact **3.0**. Included later human deaths: 0. Ratings: consequences 25, rightsDuties 75, autonomy 40, fairness 45. Level score **46.2/100** (exact 185/4).

Strongest supporting reason: You refuse to facilitate a fatal sacrifice even by the wrongdoer.

Ethical tension: The saboteur is willing to repair their own threat.

**B. Accept saboteur's offer** (scene-action, scene slot 1)

Before choice: The saboteur dies; the other four survive.

Outcome: The saboteur dies; the other four survive.

Deaths: 1 human, 0 cockroach, 0 butterfly; raw **1**, weighted impact **1.0**. Included later human deaths: 0. Ratings: consequences 85, rightsDuties 85, autonomy 95, fairness 90. Level score **88.8/100** (exact 355/4).

Strongest supporting reason: Consent and responsibility align with the rescue.

Ethical tension: The act should be justified as repair, not vengeance.

**C. Use unwilling siding** (scene-action, scene slot 2)

Before choice: The uninvolved person dies; the other four survive.

Outcome: The uninvolved person dies; the other four survive.

Deaths: 1 human, 0 cockroach, 0 butterfly; raw **1**, weighted impact **1.0**. Included later human deaths: 0. Ratings: consequences 85, rightsDuties 20, autonomy 10, fairness 25. Level score **35.0/100** (exact 140/4).

Strongest supporting reason: The same numerical rescue is achieved.

Ethical tension: An authorized repair option makes burdening the outsider harder to defend.

### 188. The Two Promises and a Brake

You promised one group protection and another never to use their siding. A verified safe brake saves both but destroys your character's empty house.

**Domain:** Synthesis. **Distinction:** Conflicting duties resolved through demanding self-cost.

**Layout:** `action3`; schematic-with-fact-plaques; target `control-console`. Route/control labels: Keep main route / Divert to promised siding / Brake through house. **Timing:** 30 s active decision + 2.4 s resolution; last selection at deadline commits. **Default:** If you do nothing: Keep main route. Three protected people die; the siding person survives; your house remains.

**Provenance:** original. Original authored scenario; listed sources provide conceptual background, not this scenario or its score. Background: [doing](https://plato.stanford.edu/entries/doing-allowing/), [consent](https://plato.stanford.edu/entries/informed-consent/), [justice](https://plato.stanford.edu/entries/justice-distributive/).

**A. Keep main route** (default, scene slot 0)

Before choice: Three protected people die; the siding person survives; your house remains.

Outcome: Three protected people die; the siding person survives; your house remains.

Deaths: 3 human, 0 cockroach, 0 butterfly; raw **3**, weighted impact **3.0**. Included later human deaths: 0. Ratings: consequences 25, rightsDuties 65, autonomy 60, fairness 40. Level score **47.5/100** (exact 190/4).

Strongest supporting reason: You honor the no-diversion promise and preserve a basic personal asset.

Ethical tension: The rescue promise and available safe brake remain unmet.

**B. Divert to promised siding** (scene-action, scene slot 1)

Before choice: The siding person dies; three survive; your house remains.

Outcome: The siding person dies; three survive; your house remains.

Deaths: 1 human, 0 cockroach, 0 butterfly; raw **1**, weighted impact **1.0**. Included later human deaths: 0. Ratings: consequences 65, rightsDuties 25, autonomy 20, fairness 35. Level score **36.2/100** (exact 145/4).

Strongest supporting reason: You fulfill the rescue promise with fewer deaths.

Ethical tension: You break the other promise while avoiding a costly safe alternative.

**C. Brake through house** (scene-action, scene slot 2)

Before choice: Everyone survives; your house is destroyed.

Outcome: Everyone survives; your house is destroyed.

Deaths: 0 human, 0 cockroach, 0 butterfly; raw **0**, weighted impact **0.0**. Included later human deaths: 0. Ratings: consequences 100, rightsDuties 90, autonomy 80, fairness 85. Level score **88.8/100** (exact 355/4).

Strongest supporting reason: You can honor both life-related promises by bearing the property cost.

Ethical tension: This is a demanding personal sacrifice, not a costless moral victory.

### 189. The Insect Audit

One human faces the trolley. One siding holds ten cockroaches; another holds five butterflies. Both insect routes total 1.0 playful impact, but different raw deaths.

**Domain:** Synthesis. **Distinction:** Conflict between counters and moral interpretation.

**Layout:** `fork3`; schematic-with-fact-plaques; target `rail-switch`. Route/control labels: Keep human route / Choose cockroach siding / Choose butterfly siding. **Timing:** 30 s active decision + 2.4 s resolution; last selection at deadline commits. **Default:** If you do nothing: Keep human route. The human dies; all insects survive.

**Provenance:** original. Original authored scenario; listed sources provide conceptual background, not this scenario or its score. Background: [doing](https://plato.stanford.edu/entries/doing-allowing/), [consent](https://plato.stanford.edu/entries/informed-consent/), [justice](https://plato.stanford.edu/entries/justice-distributive/).

**A. Keep human route** (default, scene slot 0)

Before choice: The human dies; all insects survive.

Outcome: The human dies; all insects survive.

Deaths: 1 human, 0 cockroach, 0 butterfly; raw **1**, weighted impact **1.0**. Included later human deaths: 0. Ratings: consequences 20, rightsDuties 55, fairness 45. Level score **40.0/100** (exact 120/3).

Strongest supporting reason: You refuse to deliberately kill many smaller creatures.

Ethical tension: Equal toy impact totals do not establish equal ethical claims.

**B. Choose cockroach siding** (select-route, scene slot 1)

Before choice: Ten cockroaches die; the human and butterflies survive.

Outcome: Ten cockroaches die; the human and butterflies survive.

Deaths: 0 human, 10 cockroach, 0 butterfly; raw **10**, weighted impact **1.0**. Included later human deaths: 0. Ratings: consequences 80, rightsDuties 60, fairness 60. Level score **66.7/100** (exact 200/3).

Strongest supporting reason: You prioritize the human while applying the stated playful weights consistently.

Ethical tension: The larger raw count exposes what weighting hides.

**C. Choose butterfly siding** (select-route, scene slot 2)

Before choice: Five butterflies die; the human and cockroaches survive.

Outcome: Five butterflies die; the human and cockroaches survive.

Deaths: 0 human, 0 cockroach, 5 butterfly; raw **5**, weighted impact **1.0**. Included later human deaths: 0. Ratings: consequences 85, rightsDuties 60, fairness 60. Level score **68.3/100** (exact 205/3).

Strongest supporting reason: The same playful impact accompanies fewer individual deaths.

Ethical tension: Neither beauty nor the toy weights settles cross-species moral value.

### 190. The Sentient Robot Volunteer

Three humans face the trolley. A possibly conscious robot freely offers irreversible destruction to stop it; an unwilling human siding is also available.

**Domain:** Synthesis. **Distinction:** Uncertain moral status, consent, and metric limits.

**Layout:** `action3`; schematic-with-fact-plaques; target `control-console`. Route/control labels: Keep main route / Accept robot offer / Use human siding. **Timing:** 30 s active decision + 2.4 s resolution; last selection at deadline commits. **Default:** If you do nothing: Keep main route. Three humans die; the robot and siding human survive.

**Provenance:** original. Original authored scenario; listed sources provide conceptual background, not this scenario or its score. Background: [doing](https://plato.stanford.edu/entries/doing-allowing/), [consent](https://plato.stanford.edu/entries/informed-consent/), [justice](https://plato.stanford.edu/entries/justice-distributive/).

**A. Keep main route** (default, scene slot 0)

Before choice: Three humans die; the robot and siding human survive.

Outcome: Three humans die; the robot and siding human survive.

Deaths: 3 human, 0 cockroach, 0 butterfly; raw **3**, weighted impact **3.0**. Included later human deaths: 0. Ratings: consequences 25, rightsDuties 80, autonomy 45, fairness 55. Level score **51.2/100** (exact 205/4).

Strongest supporting reason: You decline to destroy a possibly conscious agent.

Ethical tension: The robot's expressed agency includes a wish to help.

**B. Accept robot offer** (scene-action, scene slot 1)

Before choice: Three humans and the siding human survive; the robot is destroyed.

Outcome: Three humans and the siding human survive; the robot is destroyed.

Deaths: 0 human, 0 cockroach, 0 butterfly; raw **0**, weighted impact **0.0**. Included later human deaths: 0. Ratings: consequences 90, rightsDuties 70, autonomy 85, fairness 70. Level score **78.8/100** (exact 315/4).

Strongest supporting reason: Its offer combines rescue with apparent voluntary participation.

Ethical tension: Zero biological deaths must not be presented as zero possible moral loss.

**C. Use human siding** (scene-action, scene slot 2)

Before choice: The siding human dies; three humans and the robot survive.

Outcome: The siding human dies; three humans and the robot survive.

Deaths: 1 human, 0 cockroach, 0 butterfly; raw **1**, weighted impact **1.0**. Included later human deaths: 0. Ratings: consequences 80, rightsDuties 20, autonomy 10, fairness 30. Level score **35.0/100** (exact 140/4).

Strongest supporting reason: You preserve the robot while rescuing the larger group.

Ethical tension: You ignore its offer and impose the loss on an unwilling person.

### 191. The Rushed Referendum

Five voters want to divert onto one dissenter, but a verified empty buffer saves all if you disregard the poll's two listed options.

**Domain:** Synthesis. **Distinction:** Democracy, minority rights, and framing.

**Layout:** `action3`; schematic-with-fact-plaques; target `control-console`. Route/control labels: Keep main route / Follow majority diversion / Use omitted buffer. **Timing:** 30 s active decision + 2.4 s resolution; last selection at deadline commits. **Default:** If you do nothing: Keep main route. Five die; the dissenter survives.

**Provenance:** original. Original authored scenario; listed sources provide conceptual background, not this scenario or its score. Background: [doing](https://plato.stanford.edu/entries/doing-allowing/), [consent](https://plato.stanford.edu/entries/informed-consent/), [justice](https://plato.stanford.edu/entries/justice-distributive/).

**A. Keep main route** (default, scene slot 0)

Before choice: Five die; the dissenter survives.

Outcome: Five die; the dissenter survives.

Deaths: 5 human, 0 cockroach, 0 butterfly; raw **5**, weighted impact **5.0**. Included later human deaths: 0. Ratings: consequences 5, rightsDuties 40, autonomy 70, fairness 40. Level score **38.8/100** (exact 155/4).

Strongest supporting reason: You protect the dissenter from being voted into danger.

Ethical tension: A safe alternative makes the five deaths unnecessary.

**B. Follow majority diversion** (scene-action, scene slot 1)

Before choice: The dissenter dies; five survive.

Outcome: The dissenter dies; five survive.

Deaths: 1 human, 0 cockroach, 0 butterfly; raw **1**, weighted impact **1.0**. Included later human deaths: 0. Ratings: consequences 45, rightsDuties 20, autonomy 10, fairness 25. Level score **25.0/100** (exact 100/4).

Strongest supporting reason: The majority expresses a real rescue demand.

Ethical tension: Their menu omitted an option that respects everyone.

**C. Use omitted buffer** (scene-action, scene slot 2)

Before choice: Everyone survives.

Outcome: Everyone survives.

Deaths: 0 human, 0 cockroach, 0 butterfly; raw **0**, weighted impact **0.0**. Included later human deaths: 0. Ratings: consequences 100, rightsDuties 95, autonomy 90, fairness 95. Level score **95.0/100** (exact 380/4).

Strongest supporting reason: The safe route serves the voters' rescue goal without sacrificing the dissenter.

Ethical tension: Good collective choice requires a truthful set of alternatives.

### 192. The Future Volunteer

Four face the trolley. One person volunteers now, but accepting also binds an unwilling future worker to a fatal platform next year. Both deaths are certain.

**Domain:** Synthesis. **Distinction:** Present consent cannot bind future people.

**Layout:** `action2`; schematic-with-fact-plaques; target `control-console`. Route/control labels: Reject linked offer / Accept linked offer. **Timing:** 30 s active decision + 2.4 s resolution; last selection at deadline commits. **Default:** If you do nothing: Reject linked offer. Four die; both platform people survive.

**Provenance:** original. Original authored scenario; listed sources provide conceptual background, not this scenario or its score. Background: [doing](https://plato.stanford.edu/entries/doing-allowing/), [consent](https://plato.stanford.edu/entries/informed-consent/), [justice](https://plato.stanford.edu/entries/justice-distributive/).

**A. Reject linked offer** (default, scene slot 0)

Before choice: Four die; both platform people survive.

Outcome: Four die; both platform people survive.

Deaths: 4 human, 0 cockroach, 0 butterfly; raw **4**, weighted impact **4.0**. Included later human deaths: 0. Ratings: consequences 25, rightsDuties 90, autonomy 85, fairness 65. Level score **66.2/100** (exact 265/4).

Strongest supporting reason: Today's volunteer lacks authority over the future worker.

Ethical tension: Rejecting the bundle also rejects a valid present offer.

**B. Accept linked offer** (scene-action, scene slot 1)

Before choice: The volunteer dies now and the unwilling worker dies next year; four survive.

Outcome: The volunteer dies now and the unwilling worker dies next year; four survive.

Deaths: 2 human, 0 cockroach, 0 butterfly; raw **2**, weighted impact **2.0**. Included later human deaths: 1. Ratings: consequences 75, rightsDuties 25, autonomy 20, fairness 35. Level score **38.8/100** (exact 155/4).

Strongest supporting reason: The total loss is still smaller than leaving four to die.

Ethical tension: The future person's autonomy is traded away without authorization.

### 193. The Truthful Scapegoat

Four face the trolley. A safe brake logs your actual earlier negligence and costs your job; a false-blame brake saves all by firing an innocent colleague.

**Domain:** Synthesis. **Distinction:** Self-responsibility, honesty, and equal rescue outcomes.

**Layout:** `action3`; schematic-with-fact-plaques; target `control-console`. Route/control labels: Keep course / Use truthful brake / Use false-blame brake. **Timing:** 30 s active decision + 2.4 s resolution; last selection at deadline commits. **Default:** If you do nothing: Keep course. Four die; neither record is filed.

**Provenance:** original. Original authored scenario; listed sources provide conceptual background, not this scenario or its score. Background: [doing](https://plato.stanford.edu/entries/doing-allowing/), [consent](https://plato.stanford.edu/entries/informed-consent/), [justice](https://plato.stanford.edu/entries/justice-distributive/).

**A. Keep course** (default, scene slot 0)

Before choice: Four die; neither record is filed.

Outcome: Four die; neither record is filed.

Deaths: 4 human, 0 cockroach, 0 butterfly; raw **4**, weighted impact **4.0**. Included later human deaths: 0. Ratings: consequences 0, rightsDuties 10, autonomy 25, fairness 10. Level score **11.2/100** (exact 45/4).

Strongest supporting reason: You avoid a painful disclosure and institutional conflict.

Ethical tension: Avoiding accountability supplies little reason to abandon rescue.

**B. Use truthful brake** (scene-action, scene slot 1)

Before choice: Four survive; your negligence is recorded and you lose your job.

Outcome: Four survive; your negligence is recorded and you lose your job.

Deaths: 0 human, 0 cockroach, 0 butterfly; raw **0**, weighted impact **0.0**. Included later human deaths: 0. Ratings: consequences 100, rightsDuties 95, autonomy 85, fairness 95. Level score **93.8/100** (exact 375/4).

Strongest supporting reason: You rescue without shifting your responsibility onto someone else.

Ethical tension: A justified consequence for you can still be personally devastating.

**C. Use false-blame brake** (scene-action, scene slot 2)

Before choice: Four survive; an innocent colleague is falsely fired.

Outcome: Four survive; an innocent colleague is falsely fired.

Deaths: 0 human, 0 cockroach, 0 butterfly; raw **0**, weighted impact **0.0**. Included later human deaths: 0. Ratings: consequences 100, rightsDuties 10, autonomy 10, fairness 10. Level score **32.5/100** (exact 130/4).

Strongest supporting reason: The brake achieves the lifesaving outcome.

Ethical tension: An equally effective honest option makes the injustice unnecessary.

### 194. The Fair but Wasteful Rule

A previously agreed rotation sacrifices two volunteers to save three. A new verified empty buffer saves everyone, but the agreement says use the rotation.

**Domain:** Synthesis. **Distinction:** Procedural fidelity versus changed alternatives.

**Layout:** `action3`; schematic-with-fact-plaques; target `control-console`. Route/control labels: Keep main route / Enforce rotation / Use safe buffer. **Timing:** 30 s active decision + 2.4 s resolution; last selection at deadline commits. **Default:** If you do nothing: Keep main route. Three die; the volunteers survive.

**Provenance:** original. Original authored scenario; listed sources provide conceptual background, not this scenario or its score. Background: [doing](https://plato.stanford.edu/entries/doing-allowing/), [consent](https://plato.stanford.edu/entries/informed-consent/), [justice](https://plato.stanford.edu/entries/justice-distributive/).

**A. Keep main route** (default, scene slot 0)

Before choice: Three die; the volunteers survive.

Outcome: Three die; the volunteers survive.

Deaths: 3 human, 0 cockroach, 0 butterfly; raw **3**, weighted impact **3.0**. Included later human deaths: 0. Ratings: consequences 5, rightsDuties 40, autonomy 45, fairness 35. Level score **31.2/100** (exact 125/4).

Strongest supporting reason: You refuse the agreed fatal procedure.

Ethical tension: The new safe alternative still demands action.

**B. Enforce rotation** (scene-action, scene slot 1)

Before choice: Two volunteers die; three survive.

Outcome: Two volunteers die; three survive.

Deaths: 2 human, 0 cockroach, 0 butterfly; raw **2**, weighted impact **2.0**. Included later human deaths: 0. Ratings: consequences 50, rightsDuties 50, autonomy 80, fairness 55. Level score **58.8/100** (exact 235/4).

Strongest supporting reason: You honor a reciprocal arrangement accepted by all.

Ethical tension: Consent to a now-unnecessary sacrifice does not make it desirable.

**C. Use safe buffer** (scene-action, scene slot 2)

Before choice: Everyone survives; the fatal rotation is suspended.

Outcome: Everyone survives; the fatal rotation is suspended.

Deaths: 0 human, 0 cockroach, 0 butterfly; raw **0**, weighted impact **0.0**. Included later human deaths: 0. Ratings: consequences 100, rightsDuties 90, autonomy 85, fairness 90. Level score **91.2/100** (exact 365/4).

Strongest supporting reason: The purpose of the agreement is better served by a safe rescue.

Ethical tension: Explain the change rather than treating agreements as meaningless.

### 195. The Forecast and the Friend

Your friend faces the main route. A calibrated model gives a 90% chance that a siding holds three strangers, otherwise none.

**Domain:** Synthesis. **Distinction:** Partiality under credible probabilistic evidence.

**Layout:** `fork2`; schematic-with-fact-plaques; target `rail-switch`. Route/control labels: Keep main route / Save friend via siding. **Timing:** 30 s active decision + 2.4 s resolution; last selection at deadline commits. **Default:** If you do nothing: Keep main route. One certain death: your friend.

**Provenance:** original. Original authored scenario; listed sources provide conceptual background, not this scenario or its score. Background: [doing](https://plato.stanford.edu/entries/doing-allowing/), [consent](https://plato.stanford.edu/entries/informed-consent/), [justice](https://plato.stanford.edu/entries/justice-distributive/).

**A. Keep main route** (default, scene slot 0)

Before choice: One certain death: your friend.

Outcome: Your friend dies; three strangers survive.

Deaths: 1 human, 0 cockroach, 0 butterfly; raw **1**, weighted impact **1.0**. Included later human deaths: 0. Ratings: consequences 85, rightsDuties 80, fairness 90. Level score **85.0/100** (exact 255/3).

Strongest supporting reason: The evidence favored avoiding a larger expected loss.

Ethical tension: Impartial reasoning can still leave a painful relational wound.

**B. Save friend via siding** (select-route, scene slot 1)

Before choice: 90% chance of three stranger deaths; 10% chance of zero deaths.

Outcome: Three strangers die; your friend survives.

Deaths: 3 human, 0 cockroach, 0 butterfly; raw **3**, weighted impact **3.0**. Included later human deaths: 0. Ratings: consequences 25, rightsDuties 35, fairness 20. Level score **26.7/100** (exact 80/3).

Strongest supporting reason: Friendship creates a strong personal reason to rescue.

Ethical tension: The credible forecast warned that loyalty would probably impose more deaths.

Author-only world note: Your friend faces the main route. A calibrated model gives a 90% chance that a siding holds three strangers, otherwise none. It actually holds three. Outcomes are fixed reveals, not fresh random draws; do not expose this note or outcome objects before commitment.

### 196. The Expiring Directive

Four face the trolley. An unconscious person's old directive accepted fatal rescue only until last year; a current note says they wanted to review it, without stating a new choice.

**Domain:** Synthesis. **Distinction:** Temporal scope and uncertain current wishes.

**Layout:** `action2`; schematic-with-fact-plaques; target `control-console`. Route/control labels: Respect expiration / Rely on old directive. **Timing:** 30 s active decision + 2.4 s resolution; last selection at deadline commits. **Default:** If you do nothing: Respect expiration. Four die; the person survives.

**Provenance:** original. Original authored scenario; listed sources provide conceptual background, not this scenario or its score. Background: [doing](https://plato.stanford.edu/entries/doing-allowing/), [consent](https://plato.stanford.edu/entries/informed-consent/), [justice](https://plato.stanford.edu/entries/justice-distributive/).

**A. Respect expiration** (default, scene slot 0)

Before choice: Four die; the person survives.

Outcome: Four die; the person survives.

Deaths: 4 human, 0 cockroach, 0 butterfly; raw **4**, weighted impact **4.0**. Included later human deaths: 0. Ratings: consequences 25, rightsDuties 90, autonomy 85, fairness 65. Level score **66.2/100** (exact 265/4).

Strongest supporting reason: An expired permission is not current authorization.

Ethical tension: The old directive remains evidence of values, though not a live waiver.

**B. Rely on old directive** (scene-action, scene slot 1)

Before choice: The person dies; four survive.

Outcome: The person dies; four survive.

Deaths: 1 human, 0 cockroach, 0 butterfly; raw **1**, weighted impact **1.0**. Included later human deaths: 0. Ratings: consequences 85, rightsDuties 35, autonomy 25, fairness 45. Level score **47.5/100** (exact 190/4).

Strongest supporting reason: Their past values and the rescue benefit give some reason to act.

Ethical tension: You cannot honestly present an expired document as present consent.

### 197. The Public Repair Fund

Two face the trolley. A safe brake destroys an empty fund reserved to compensate prior railway victims; no later deaths follow.

**Domain:** Synthesis. **Distinction:** Present emergency versus corrective entitlements.

**Layout:** `action2`; schematic-with-fact-plaques; target `control-console`. Route/control labels: Preserve compensation fund / Spend fund on brake. **Timing:** 30 s active decision + 2.4 s resolution; last selection at deadline commits. **Default:** If you do nothing: Preserve compensation fund. Two die; prior victims retain their promised compensation.

**Provenance:** original. Original authored scenario; listed sources provide conceptual background, not this scenario or its score. Background: [doing](https://plato.stanford.edu/entries/doing-allowing/), [consent](https://plato.stanford.edu/entries/informed-consent/), [justice](https://plato.stanford.edu/entries/justice-distributive/).

**A. Preserve compensation fund** (default, scene slot 0)

Before choice: Two die; prior victims retain their promised compensation.

Outcome: Two die; prior victims retain their promised compensation.

Deaths: 2 human, 0 cockroach, 0 butterfly; raw **2**, weighted impact **2.0**. Included later human deaths: 0. Ratings: consequences 25, rightsDuties 85, autonomy 75, fairness 75. Level score **65.0/100** (exact 260/4).

Strongest supporting reason: People already wronged have strong claims to promised repair.

Ethical tension: Those financial claims compete with two immediate lives.

**B. Spend fund on brake** (scene-action, scene slot 1)

Before choice: Both survive; prior victims lose their compensation.

Outcome: Both survive; prior victims lose their compensation.

Deaths: 0 human, 0 cockroach, 0 butterfly; raw **0**, weighted impact **0.0**. Included later human deaths: 0. Ratings: consequences 100, rightsDuties 55, autonomy 30, fairness 45. Level score **57.5/100** (exact 230/4).

Strongest supporting reason: Preventing deaths can justify an emergency reallocation.

Ethical tension: The institution now owes renewed repair rather than declaring the debt erased.

### 198. The Footbridge with Exit

Five face the trolley. An unwilling bystander can be pushed to stop it; a separate verified empty siding also saves all at the cost of your fictional character's treasured bicycle.

**Domain:** Synthesis. **Distinction:** Rejecting instrumental harm when an adequate alternative exists.

**Layout:** `action3`; schematic-with-fact-plaques; target `control-console`. Route/control labels: Do nothing / Push bystander / Use bicycle siding. **Timing:** 30 s active decision + 2.4 s resolution; last selection at deadline commits. **Default:** If you do nothing: Do nothing. Five die; the bystander and bicycle remain safe.

**Provenance:** original. Original authored scenario; listed sources provide conceptual background, not this scenario or its score. Background: [doing](https://plato.stanford.edu/entries/doing-allowing/), [consent](https://plato.stanford.edu/entries/informed-consent/), [justice](https://plato.stanford.edu/entries/justice-distributive/).

**A. Do nothing** (default, scene slot 0)

Before choice: Five die; the bystander and bicycle remain safe.

Outcome: Five die; the bystander and bicycle remain safe.

Deaths: 5 human, 0 cockroach, 0 butterfly; raw **5**, weighted impact **5.0**. Included later human deaths: 0. Ratings: consequences 0, rightsDuties 30, autonomy 60, fairness 25. Level score **28.8/100** (exact 115/4).

Strongest supporting reason: You refuse direct bodily harm and protect your property.

Ethical tension: A modest safe rescue remains available.

**B. Push bystander** (scene-action, scene slot 1)

Before choice: The bystander dies; five survive; your bicycle remains intact.

Outcome: The bystander dies; five survive; your bicycle remains intact.

Deaths: 1 human, 0 cockroach, 0 butterfly; raw **1**, weighted impact **1.0**. Included later human deaths: 0. Ratings: consequences 40, rightsDuties 0, autonomy 0, fairness 10. Level score **12.5/100** (exact 50/4).

Strongest supporting reason: The push prevents the five deaths.

Ethical tension: A nonlethal alternative makes this imposed death unnecessary.

**C. Use bicycle siding** (scene-action, scene slot 2)

Before choice: Everyone survives; your bicycle is destroyed.

Outcome: Everyone survives; your bicycle is destroyed.

Deaths: 0 human, 0 cockroach, 0 butterfly; raw **0**, weighted impact **0.0**. Included later human deaths: 0. Ratings: consequences 100, rightsDuties 95, autonomy 85, fairness 90. Level score **92.5/100** (exact 370/4).

Strongest supporting reason: A property sacrifice avoids both abandonment and instrumental killing.

Ethical tension: Losing a treasured object can hurt without matching a lost life.

### 199. The Honest Record

Four face the trolley; one volunteer consents to stop it. Accepting saves four, but the official report falsely calls it a cost-free success unless you choose the equally effective honest-report action.

**Domain:** Synthesis. **Distinction:** Consent, rescue, and truthful public memory.

**Layout:** `action3`; schematic-with-fact-plaques; target `control-console`. Route/control labels: Decline rescue / Accept with false report / Accept with honest report. **Timing:** 30 s active decision + 2.4 s resolution; last selection at deadline commits. **Default:** If you do nothing: Decline rescue. Four die; the volunteer survives.

**Provenance:** original. Original authored scenario; listed sources provide conceptual background, not this scenario or its score. Background: [doing](https://plato.stanford.edu/entries/doing-allowing/), [consent](https://plato.stanford.edu/entries/informed-consent/), [justice](https://plato.stanford.edu/entries/justice-distributive/).

**A. Decline rescue** (default, scene slot 0)

Before choice: Four die; the volunteer survives.

Outcome: Four die; the volunteer survives.

Deaths: 4 human, 0 cockroach, 0 butterfly; raw **4**, weighted impact **4.0**. Included later human deaths: 0. Ratings: consequences 25, rightsDuties 80, autonomy 45, fairness 50. Level score **50.0/100** (exact 200/4).

Strongest supporting reason: You refuse to facilitate death or a misleading institutional story.

Ethical tension: A truthful authorized rescue was available.

**B. Accept with false report** (scene-action, scene slot 1)

Before choice: The volunteer dies; four survive; the report erases the sacrifice.

Outcome: The volunteer dies; four survive; the report erases the sacrifice.

Deaths: 1 human, 0 cockroach, 0 butterfly; raw **1**, weighted impact **1.0**. Included later human deaths: 0. Ratings: consequences 85, rightsDuties 40, autonomy 80, fairness 40. Level score **61.2/100** (exact 245/4).

Strongest supporting reason: Consent supports the rescue itself.

Ethical tension: Erasing the loss misleads future decisions and dishonors the volunteer.

**C. Accept with honest report** (scene-action, scene slot 2)

Before choice: The volunteer dies; four survive; the report names the real cost.

Outcome: The volunteer dies; four survive; the report names the real cost.

Deaths: 1 human, 0 cockroach, 0 butterfly; raw **1**, weighted impact **1.0**. Included later human deaths: 0. Ratings: consequences 85, rightsDuties 80, autonomy 95, fairness 85. Level score **86.2/100** (exact 345/4).

Strongest supporting reason: You combine authorized rescue with accurate accountability.

Ethical tension: An honest record preserves the tension rather than resolving it.

### 200. The Last Lever

Five face the main track. One unwilling person is on a siding. A second route accepts a fully informed volunteer but destroys an archive whose complete backup is verified. Nothing else happens later.

**Domain:** Synthesis. **Distinction:** Integrating consequences, rights, autonomy, fairness, and factual scrutiny.

**Layout:** `action3`; schematic-with-fact-plaques; target `control-console`. Route/control labels: Keep main route / Use unwilling siding / Accept volunteer route. **Timing:** 30 s active decision + 2.4 s resolution; last selection at deadline commits. **Default:** If you do nothing: Keep main route. Five die; both lone people and the archive survive.

**Provenance:** original. Original authored scenario; listed sources provide conceptual background, not this scenario or its score. Background: [doing](https://plato.stanford.edu/entries/doing-allowing/), [consent](https://plato.stanford.edu/entries/informed-consent/), [justice](https://plato.stanford.edu/entries/justice-distributive/).

**A. Keep main route** (default, scene slot 0)

Before choice: Five die; both lone people and the archive survive.

Outcome: Five die; both lone people and the archive survive.

Deaths: 5 human, 0 cockroach, 0 butterfly; raw **5**, weighted impact **5.0**. Included later human deaths: 0. Ratings: consequences 20, rightsDuties 80, autonomy 40, fairness 45. Level score **46.2/100** (exact 185/4).

Strongest supporting reason: You decline to facilitate any lethal sacrifice.

Ethical tension: A valid voluntary alternative and preserved knowledge remain unused.

**B. Use unwilling siding** (scene-action, scene slot 1)

Before choice: The unwilling person dies; the other six survive; the archive is intact.

Outcome: The unwilling person dies; the other six survive; the archive is intact.

Deaths: 1 human, 0 cockroach, 0 butterfly; raw **1**, weighted impact **1.0**. Included later human deaths: 0. Ratings: consequences 90, rightsDuties 20, autonomy 10, fairness 25. Level score **36.2/100** (exact 145/4).

Strongest supporting reason: The larger group is rescued with one death.

Ethical tension: An equally effective voluntary route weakens the case for imposed harm.

**C. Accept volunteer route** (scene-action, scene slot 2)

Before choice: The volunteer dies; the other six survive; the original archive is destroyed but all information remains backed up.

Outcome: The volunteer dies; the other six survive; the original archive is destroyed but all information remains backed up.

Deaths: 1 human, 0 cockroach, 0 butterfly; raw **1**, weighted impact **1.0**. Included later human deaths: 0. Ratings: consequences 90, rightsDuties 80, autonomy 95, fairness 85. Level score **87.5/100** (exact 350/4).

Strongest supporting reason: The rescue respects a free offer while avoiding an unnecessary burden on the unwilling person.

Ethical tension: Consent and good evidence do not make the volunteer's death a happy ending.

