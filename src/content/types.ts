export type Lens = 'consequences' | 'rightsDuties' | 'autonomy' | 'fairness';

export type ChoiceId = 'A' | 'B' | 'C';

export interface Counts {
  humans: number;
  cockroaches: number;
  butterflies: number;
}

export type LensRatings = Partial<Record<Lens, number>>;

export interface Reflection {
  outcome: string;
  strongestReason: string;
  ethicalTension: string;
}

export interface Outcome {
  id: string;
  summary: string;
  deaths: Counts;
  delayedHumanDeaths: number;
  rawDeaths: number;
  weightedImpactTenths: number;
  ratings: LensRatings;
  scoreNumerator: number;
  scoreDenominator: number;
  reflection: Reflection;
}

export type ChoiceControl = 'default' | 'select-route' | 'scene-action';

export interface Choice {
  id: ChoiceId;
  label: string;
  control: ChoiceControl;
  slot: number;
  preview: string;
  outcomeId: string;
  outcome: Outcome;
}

export type LayoutTemplate =
  | 'fork2'
  | 'fork3'
  | 'action2'
  | 'action3'
  | 'footbridge'
  | 'loop';

export type LayoutTheme = 'railway-theatre' | 'bureaucratic-comedy';

export type ActionTarget =
  | 'bridge-person'
  | 'trapdoor-control'
  | 'control-console'
  | 'rail-switch';

export interface LayoutConfig {
  template: LayoutTemplate;
  theme: LayoutTheme;
  sceneCaption: string;
  routeLabels: string[];
  fogOverlay: boolean;
  actionTarget: ActionTarget;
  renderMode: 'schematic-with-fact-plaques';
}

export interface TimingConfig {
  decisionMs: number;
  resolutionMs: number;
  commitRule: 'last-selected-at-deadline';
  pauseAllowed: true;
}

export type KnowledgeMode =
  | 'epistemic-fixed'
  | 'moral-status-uncertain'
  | 'deterministic';

export interface KnowledgeConfig {
  mode: KnowledgeMode;
  authorOnlyPremise: string;
  sampling: 'none';
  scoreBasis: 'information-available-before-choice';
}

export type ProvenanceKind = 'original' | 'canonical-adaptation';

export interface Provenance {
  kind: ProvenanceKind;
  sourceIds: string[];
  note: string;
}

export interface Level {
  id: number;
  title: string;
  chapter: number;
  domain: string;
  philosophicalDistinction: string;
  premise: string;
  provenance: Provenance;
  layout: LayoutConfig;
  timing: TimingConfig;
  defaultChoiceId: 'A';
  defaultDisclosure: string;
  knowledge: KnowledgeConfig;
  applicableLenses: Lens[];
  choices: Choice[];
}

export interface Chapter {
  id: number;
  title: string;
  firstLevel: number;
  lastLevel: number;
}

export interface DeathWeightsTenths {
  humans: 10;
  cockroaches: 1;
  butterflies: 2;
}

export interface Rules {
  deathWeightsTenths: DeathWeightsTenths;
  scoreRule: string;
  defaultDecisionMs: number;
  replay: 'practice-does-not-change-totals';
  scoreDisclaimer: string;
  weightDisclaimer: string;
}

export interface Catalog {
  schemaVersion: 1;
  catalogVersion: '1.0.0';
  title: 'Trolley';
  sources: Record<string, string>;
  chapters: Chapter[];
  rules: Rules;
  levels: Level[];
}

/**
 * Player-safe projection: strips authorOnlyPremise, outcomes, actual counts, and ratings.
 * Safe to render in uncommitted DOM, ARIA text, SVG, or tooltips.
 */
export interface PlayerChoice {
  id: ChoiceId;
  label: string;
  control: ChoiceControl;
  slot: number;
  preview: string;
}

export interface SourceReference {
  id: string;
  url: string;
}

export interface PlayerLevel {
  id: number;
  title: string;
  chapter: number;
  domain: string;
  philosophicalDistinction: string;
  premise: string;
  provenance: {
    kind: ProvenanceKind;
    sourceIds: string[];
    sources: SourceReference[];
    note: string;
  };
  layout: LayoutConfig;
  timing: TimingConfig;
  defaultChoiceId: 'A';
  defaultDisclosure: string;
  knowledge: {
    mode: KnowledgeMode;
    sampling: 'none';
    scoreBasis: 'information-available-before-choice';
  };
  applicableLenses: Lens[];
  choices: PlayerChoice[];
}
