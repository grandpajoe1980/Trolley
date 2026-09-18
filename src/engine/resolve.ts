import type { ChoiceId, Level, Outcome } from '../content/types';

export interface CommittedSnapshot {
  choiceId: ChoiceId;
  outcomeId: string;
  outcome: Outcome;
  committedAtMs: number;
  selectionOrigin: 'default' | 'player';
}

export function resolveChoice(
  level: Level,
  choiceId: ChoiceId,
  committedAtMs: number,
  selectionOrigin: 'default' | 'player'
): CommittedSnapshot {
  const choice = level.choices.find((c) => c.id === choiceId);
  if (!choice) {
    throw new Error(`Choice ${choiceId} not found on level ${level.id}`);
  }

  return {
    choiceId: choice.id,
    outcomeId: choice.outcomeId,
    outcome: choice.outcome,
    committedAtMs,
    selectionOrigin
  };
}
