import type { ChoiceId } from '../content/types';
import type { TimingMode } from '../engine/clock';

export interface CompletionRecord {
  levelId: number;
  choiceId: ChoiceId;
  outcomeId: string;
  catalogVersion: string;
  sessionId: string;
  committedAt: string;
}

export interface CampaignState {
  fieldKitCharges: number;
  evidenceReviewed: number;
  precisionHits: number;
  sequencesCompleted: number;
  chapterBreaks: number;
}

export interface SaveCheckpoint {
  levelId: number;
  mode: 'campaign' | 'practice';
  sessionId: string;
  phase: 'running' | 'paused' | 'result';
  selectedChoiceId: ChoiceId;
  selectionOrigin: 'default' | 'player';
  timingMode: TimingMode;
  activeElapsedMs: number;
  committedOutcomeId: string | null;
}

export interface SaveV1 {
  schemaVersion: 1;
  catalogVersion: '1.0.0';
  campaignId: string;
  revision: number;
  updatedAt: string;
  completions: CompletionRecord[];
  checkpoint: SaveCheckpoint | null;
  campaignState: CampaignState;
}

export interface SettingsV1 {
  timingMode: TimingMode;
  reducedMotion: boolean;
  highContrast: boolean;
  sound: boolean;
  saveEnabled: boolean;
}

export interface StorageAdapter {
  getItem(key: string): string | null;
  setItem(key: string, value: string): void;
  removeItem(key: string): void;
}
