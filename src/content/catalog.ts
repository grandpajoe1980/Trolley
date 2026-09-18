import levelsData from '../../data/levels.json';
import levelsSchema from '../../data/levels.schema.json';
import type { Catalog, ChoiceId, Level, Outcome, PlayerLevel, SourceReference } from './types';
import { validateCatalog, type ValidationReport } from './validate';

export const catalog: Catalog = levelsData as unknown as Catalog;
export const schema: object = levelsSchema;

let validatedReport: ValidationReport | null = null;

export function getValidationReport(): ValidationReport {
  if (!validatedReport) {
    validatedReport = validateCatalog(catalog, schema);
    if (validatedReport.status !== 'PASS') {
      console.error('Catalog validation failed:', validatedReport.errors);
    }
  }
  return validatedReport;
}

export function getCatalog(): Catalog {
  return catalog;
}

export function getLevel(id: number): Level | undefined {
  if (id < 1 || id > catalog.levels.length) {
    return undefined;
  }
  return catalog.levels[id - 1];
}

export function toPlayerLevel(level: Level): PlayerLevel {
  const sources: SourceReference[] = level.provenance.sourceIds.map((srcId) => ({
    id: srcId,
    url: catalog.sources[srcId] ?? '#'
  }));

  return {
    id: level.id,
    title: level.title,
    chapter: level.chapter,
    domain: level.domain,
    philosophicalDistinction: level.philosophicalDistinction,
    premise: level.premise,
    provenance: {
      kind: level.provenance.kind,
      sourceIds: [...level.provenance.sourceIds],
      sources,
      note: level.provenance.note
    },
    layout: { ...level.layout, routeLabels: [...level.layout.routeLabels] },
    timing: { ...level.timing },
    defaultChoiceId: level.defaultChoiceId,
    defaultDisclosure: level.defaultDisclosure,
    knowledge: {
      mode: level.knowledge.mode,
      sampling: level.knowledge.sampling,
      scoreBasis: level.knowledge.scoreBasis
    },
    applicableLenses: [...level.applicableLenses],
    choices: level.choices.map((c) => ({
      id: c.id,
      label: c.label,
      control: c.control,
      slot: c.slot,
      preview: c.preview
    }))
  };
}

export function getPlayerLevel(id: number): PlayerLevel | undefined {
  const lvl = getLevel(id);
  if (!lvl) return undefined;
  return toPlayerLevel(lvl);
}

export function getAllPlayerLevels(): PlayerLevel[] {
  return catalog.levels.map(toPlayerLevel);
}

export function getOutcome(levelId: number, choiceId: ChoiceId): Outcome | undefined {
  const lvl = getLevel(levelId);
  if (!lvl) return undefined;
  const choice = lvl.choices.find((c) => c.id === choiceId);
  return choice?.outcome;
}
