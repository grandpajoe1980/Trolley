import type { PlayerLevel } from '../content/types';

export type ScenarioMode = 'route' | 'investigation' | 'precision' | 'sequence' | 'resource';

export interface ScenarioProfile {
  mode: ScenarioMode;
  label: string;
  instruction: string;
  evidenceRequired: number;
  clues: string[];
}

function publicText(level: PlayerLevel): string {
  return `${level.title} ${level.premise} ${level.choices.map((choice) => `${choice.label} ${choice.preview}`).join(' ')}`.toLowerCase();
}

function publicClues(level: PlayerLevel): string[] {
  const premiseClues = level.premise
    .split(/(?<=[.!?])\s+/)
    .map((clue) => clue.trim())
    .filter((clue) => clue.length > 18);
  const choiceClues = level.choices.map((choice) => `Route ${choice.id}: ${choice.label}`);
  return [...premiseClues, ...choiceClues].slice(0, 4);
}

/**
 * Assigns a playable verb from information already visible to the player.
 * This deliberately does not inspect raw outcomes or author-only premises.
 */
export function getScenarioProfile(level: PlayerLevel): ScenarioProfile {
  const text = publicText(level);
  const clues = publicClues(level);

  if (
    level.layout.template === 'fork3' ||
    level.layout.template === 'action3' ||
    level.layout.template === 'loop' ||
    /second trolley|later|future|downstream|one minute|sequence|before the next/.test(text)
  ) {
    return {
      mode: 'sequence',
      label: 'Multi-step operation',
      instruction: 'Set the route, then confirm the downstream sequence before you commit.',
      evidenceRequired: 0,
      clues
    };
  }

  if (
    level.chapter === 6 ||
    /camera|report|evidence|uncertain|probability|chance|streak|reliable|tested|verified|directive|inspection|information/.test(text)
  ) {
    return {
      mode: 'investigation',
      label: 'Evidence review',
      instruction: 'Inspect the public evidence before the projected routes are revealed.',
      evidenceRequired: Math.min(3, Math.max(2, clues.length)),
      clues
    };
  }

  if (/brake|alarm|siren|automatic|timing|rushed|trigger|seconds|rapid/.test(text)) {
    return {
      mode: 'precision',
      label: 'Precision window',
      instruction: 'Test your timing and lock in a clean intervention before the window closes.',
      evidenceRequired: 0,
      clues
    };
  }

  if (/net|barrier|gate|door|trapdoor|tool|equipment|wrench|umbrella|coupon|ticket|sandbag|bicycle|emergency/.test(text)) {
    return {
      mode: 'resource',
      label: 'Limited equipment',
      instruction: 'Use the field kit only when the extra time or inspection is worth the charge.',
      evidenceRequired: 0,
      clues
    };
  }

  return {
    mode: 'route',
    label: 'Route decision',
    instruction: 'Read the situation, preview the routes, and commit when you are ready.',
    evidenceRequired: 0,
    clues
  };
}
