import type { ChoiceId, Level } from '../content/types';
import { getDeadlineForTimingMode, type TimingMode } from './clock';
import { resolveChoice, type CommittedSnapshot } from './resolve';

export type EnginePhase =
  | 'menu'
  | 'running'
  | 'paused'
  | 'resolving'
  | 'result'
  | 'campaignComplete'
  | 'contentError';

export interface EngineSession {
  levelId: number;
  level: Level;
  mode: 'campaign' | 'practice';
  selectedChoiceId: ChoiceId;
  selectionOrigin: 'default' | 'player';
  timingMode: TimingMode;
  deadlineMs: number;
  activeElapsedMs: number;
  resolutionElapsedMs: number;
  anchorMs: number | null;
  phaseBeforePause: 'running' | 'resolving' | null;
  pauseReason: 'user' | 'hidden' | null;
  committed: CommittedSnapshot | null;
  sessionId: string;
  campaignId: string;
}

export interface EngineState {
  phase: EnginePhase;
  session: EngineSession | null;
  errorMessage: string | null;
}

export type EngineAction =
  | {
      type: 'START_LEVEL';
      level: Level;
      mode: 'campaign' | 'practice';
      timingMode: TimingMode;
      sessionId: string;
      campaignId: string;
      nowMs: number;
    }
  | { type: 'SELECT_CHOICE'; choiceId: ChoiceId; nowMs: number }
  | { type: 'EXTEND_DEADLINE'; amountMs: number }
  | { type: 'RESOLVE_NOW'; nowMs: number }
  | { type: 'PAUSE'; nowMs: number; reason?: 'user' | 'hidden' }
  | { type: 'RESUME'; nowMs: number }
  | { type: 'TICK'; nowMs: number }
  | { type: 'SKIP_ANIMATION' }
  | { type: 'RESTART_LEVEL'; nowMs: number }
  | { type: 'COMPLETE_CAMPAIGN' }
  | { type: 'GO_TO_MENU' }
  | { type: 'SET_CONTENT_ERROR'; error: string }
  | { type: 'RESTORE_SESSION'; session: EngineSession; phase: EnginePhase };

export const RESOLUTION_DURATION_MS = 2400;

export const initialEngineState: EngineState = {
  phase: 'menu',
  session: null,
  errorMessage: null
};

export function engineReducer(state: EngineState, action: EngineAction): EngineState {
  switch (action.type) {
    case 'START_LEVEL': {
      const deadlineMs = getDeadlineForTimingMode(action.timingMode, action.level.timing.decisionMs);
      const session: EngineSession = {
        levelId: action.level.id,
        level: action.level,
        mode: action.mode,
        selectedChoiceId: action.level.defaultChoiceId,
        selectionOrigin: 'default',
        timingMode: action.timingMode,
        deadlineMs,
        activeElapsedMs: 0,
        resolutionElapsedMs: 0,
        anchorMs: action.nowMs,
        phaseBeforePause: null,
        pauseReason: null,
        committed: null,
        sessionId: action.sessionId,
        campaignId: action.campaignId
      };
      return {
        phase: 'running',
        session,
        errorMessage: null
      };
    }

    case 'TICK': {
      if (!state.session) return state;
      const s = { ...state.session };

      if (state.phase === 'running') {
        if (s.anchorMs === null) {
          s.anchorMs = action.nowMs;
          return { ...state, session: s };
        }
        const delta = Math.max(0, action.nowMs - s.anchorMs);
        s.anchorMs = action.nowMs;

        if (s.activeElapsedMs + delta >= s.deadlineMs) {
          // Deadline reached or exceeded!
          const excessMs = s.activeElapsedMs + delta - s.deadlineMs;
          s.activeElapsedMs = s.deadlineMs;
          s.committed = resolveChoice(s.level, s.selectedChoiceId, s.deadlineMs, s.selectionOrigin);

          if (excessMs >= RESOLUTION_DURATION_MS) {
            s.resolutionElapsedMs = RESOLUTION_DURATION_MS;
            return { ...state, phase: 'result', session: s };
          } else {
            s.resolutionElapsedMs = excessMs;
            return { ...state, phase: 'resolving', session: s };
          }
        } else {
          s.activeElapsedMs += delta;
          return { ...state, session: s };
        }
      }

      if (state.phase === 'resolving') {
        if (s.anchorMs === null) {
          s.anchorMs = action.nowMs;
          return { ...state, session: s };
        }
        const delta = Math.max(0, action.nowMs - s.anchorMs);
        s.anchorMs = action.nowMs;
        s.resolutionElapsedMs += delta;

        if (s.resolutionElapsedMs >= RESOLUTION_DURATION_MS) {
          s.resolutionElapsedMs = RESOLUTION_DURATION_MS;
          return { ...state, phase: 'result', session: s };
        }
        return { ...state, session: s };
      }

      return state;
    }

    case 'SELECT_CHOICE': {
      if (!state.session || (state.phase !== 'running' && state.phase !== 'paused')) return state;
      const s = { ...state.session };

      // First sync active time if running
      if (state.phase === 'running' && s.anchorMs !== null) {
        const delta = Math.max(0, action.nowMs - s.anchorMs);
        s.anchorMs = action.nowMs;

        if (s.activeElapsedMs + delta >= s.deadlineMs) {
          // Deadline has been crossed; reject new selection and commit previous
          const excessMs = s.activeElapsedMs + delta - s.deadlineMs;
          s.activeElapsedMs = s.deadlineMs;
          s.committed = resolveChoice(s.level, s.selectedChoiceId, s.deadlineMs, s.selectionOrigin);

          if (excessMs >= RESOLUTION_DURATION_MS) {
            s.resolutionElapsedMs = RESOLUTION_DURATION_MS;
            return { ...state, phase: 'result', session: s };
          }
          s.resolutionElapsedMs = excessMs;
          return { ...state, phase: 'resolving', session: s };
        }
        s.activeElapsedMs += delta;
      }

      // Valid selection before deadline
      s.selectedChoiceId = action.choiceId;
      s.selectionOrigin = 'player';
      return { ...state, session: s };
    }

    case 'EXTEND_DEADLINE': {
      if (!state.session || (state.phase !== 'running' && state.phase !== 'paused')) return state;
      if (!Number.isFinite(state.session.deadlineMs) || action.amountMs <= 0) return state;
      return {
        ...state,
        session: {
          ...state.session,
          deadlineMs: state.session.deadlineMs + action.amountMs
        }
      };
    }

    case 'RESOLVE_NOW': {
      if (!state.session || state.phase !== 'running') return state;
      const s = { ...state.session };

      // Synchronize clock first
      if (s.anchorMs !== null) {
        const delta = Math.max(0, action.nowMs - s.anchorMs);
        s.anchorMs = action.nowMs;

        if (s.activeElapsedMs + delta >= s.deadlineMs) {
          // Deadline passed before resolve-now processed
          const excessMs = s.activeElapsedMs + delta - s.deadlineMs;
          s.activeElapsedMs = s.deadlineMs;
          s.committed = resolveChoice(s.level, s.selectedChoiceId, s.deadlineMs, s.selectionOrigin);
          if (excessMs >= RESOLUTION_DURATION_MS) {
            s.resolutionElapsedMs = RESOLUTION_DURATION_MS;
            return { ...state, phase: 'result', session: s };
          }
          s.resolutionElapsedMs = excessMs;
          return { ...state, phase: 'resolving', session: s };
        }
        s.activeElapsedMs += delta;
      }

      // Commit immediately
      s.committed = resolveChoice(s.level, s.selectedChoiceId, s.activeElapsedMs, s.selectionOrigin);
      s.resolutionElapsedMs = 0;
      return { ...state, phase: 'resolving', session: s };
    }

    case 'PAUSE': {
      if (!state.session) return state;
      if (state.phase !== 'running' && state.phase !== 'resolving') return state;
      const s = { ...state.session };

      if (state.phase === 'running') {
        if (s.anchorMs !== null) {
          const delta = Math.max(0, action.nowMs - s.anchorMs);
          s.anchorMs = null;

          if (s.activeElapsedMs + delta >= s.deadlineMs) {
            // Deadline reached at or before pause; commitment wins!
            s.activeElapsedMs = s.deadlineMs;
            s.committed = resolveChoice(s.level, s.selectedChoiceId, s.deadlineMs, s.selectionOrigin);
            s.phaseBeforePause = 'resolving';
            s.pauseReason = action.reason ?? 'user';
            return { ...state, phase: 'paused', session: s };
          }
          s.activeElapsedMs += delta;
        }
        s.phaseBeforePause = 'running';
      } else {
        // Resolving phase paused
        if (s.anchorMs !== null) {
          const delta = Math.max(0, action.nowMs - s.anchorMs);
          s.anchorMs = null;
          s.resolutionElapsedMs = Math.min(RESOLUTION_DURATION_MS, s.resolutionElapsedMs + delta);
        }
        s.phaseBeforePause = 'resolving';
      }

      s.pauseReason = action.reason ?? 'user';
      return { ...state, phase: 'paused', session: s };
    }

    case 'RESUME': {
      if (!state.session || state.phase !== 'paused') return state;
      const s = { ...state.session };
      const resumePhase = s.phaseBeforePause ?? 'running';
      s.anchorMs = action.nowMs;
      s.phaseBeforePause = null;
      s.pauseReason = null;
      return { ...state, phase: resumePhase, session: s };
    }

    case 'SKIP_ANIMATION': {
      if (!state.session || state.phase !== 'resolving') return state;
      const s = { ...state.session };
      s.resolutionElapsedMs = RESOLUTION_DURATION_MS;
      return { ...state, phase: 'result', session: s };
    }

    case 'RESTART_LEVEL': {
      if (!state.session) return state;
      // Only uncommitted level can restart
      if (state.session.committed !== null) return state;
      return engineReducer(state, {
        type: 'START_LEVEL',
        level: state.session.level,
        mode: state.session.mode,
        timingMode: state.session.timingMode,
        sessionId: state.session.sessionId,
        campaignId: state.session.campaignId,
        nowMs: action.nowMs
      });
    }

    case 'COMPLETE_CAMPAIGN': {
      return { ...state, phase: 'campaignComplete' };
    }

    case 'GO_TO_MENU': {
      return { ...state, phase: 'menu' };
    }

    case 'SET_CONTENT_ERROR': {
      return {
        ...state,
        phase: 'contentError',
        errorMessage: action.error
      };
    }

    case 'RESTORE_SESSION': {
      return {
        phase: action.phase,
        session: { ...action.session, anchorMs: action.phase === 'running' ? action.session.anchorMs : null },
        errorMessage: null
      };
    }

    default:
      return state;
  }
}
