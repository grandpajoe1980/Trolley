import type { ChoiceId, Level } from '../content/types';
import { defaultClock, type Clock, type TimingMode } from './clock';
import {
  engineReducer,
  initialEngineState,
  type EngineAction,
  type EngineSession,
  type EngineState
} from './state';

export type StateListener = (state: EngineState) => void;

export class SessionManager {
  private state: EngineState;
  private clock: Clock;
  private listeners: Set<StateListener> = new Set();
  private rafId: number | null = null;
  private isDestroyed = false;
  private speedMultiplier = 1;
  private lastRealNow: number | null = null;
  private virtualNow = 0;

  constructor(clock: Clock = defaultClock, initialState: EngineState = initialEngineState) {
    this.clock = clock;
    this.state = initialState;
  }

  public getState(): EngineState {
    return this.state;
  }

  public getSpeedMultiplier(): number {
    return this.speedMultiplier;
  }

  public setSpeedMultiplier(mult: number): void {
    this.syncVirtualTime();
    this.speedMultiplier = Math.max(1, mult);
  }

  public toggleSpeed(): number {
    this.syncVirtualTime();
    if (this.speedMultiplier === 1) {
      this.speedMultiplier = 3;
    } else if (this.speedMultiplier === 3) {
      this.speedMultiplier = 5;
    } else {
      this.speedMultiplier = 1;
    }
    return this.speedMultiplier;
  }

  private syncVirtualTime(): number {
    const realNow = this.clock.now();
    if (this.lastRealNow !== null) {
      const realDelta = Math.max(0, realNow - this.lastRealNow);
      this.virtualNow += realDelta * this.speedMultiplier;
    } else {
      this.virtualNow = realNow;
    }
    this.lastRealNow = realNow;
    return this.virtualNow;
  }

  public subscribe(listener: StateListener): () => void {
    this.listeners.add(listener);
    listener(this.state);
    return () => {
      this.listeners.delete(listener);
    };
  }

  private notify(): void {
    for (const listener of this.listeners) {
      listener(this.state);
    }
  }

  public dispatch(action: EngineAction): void {
    if (this.isDestroyed) return;
    const nextState = engineReducer(this.state, action);
    const stateChanged = nextState !== this.state;
    this.state = nextState;

    if (this.state.phase === 'running' || this.state.phase === 'resolving') {
      this.startLoop();
    } else {
      this.stopLoop();
    }

    if (stateChanged) {
      this.notify();
    }
  }

  public startLevel(
    level: Level,
    mode: 'campaign' | 'practice',
    timingMode: TimingMode,
    sessionId: string,
    campaignId: string
  ): void {
    const now = this.clock.now();
    this.lastRealNow = now;
    this.virtualNow = now;
    this.dispatch({
      type: 'START_LEVEL',
      level,
      mode,
      timingMode,
      sessionId,
      campaignId,
      nowMs: this.virtualNow
    });
  }

  public selectChoice(choiceId: ChoiceId): void {
    const now = this.syncVirtualTime();
    this.dispatch({ type: 'SELECT_CHOICE', choiceId, nowMs: now });
  }

  public resolveNow(): void {
    const now = this.syncVirtualTime();
    this.dispatch({ type: 'RESOLVE_NOW', nowMs: now });
  }

  public pause(reason: 'user' | 'hidden' = 'user'): void {
    const now = this.syncVirtualTime();
    this.dispatch({ type: 'PAUSE', nowMs: now, reason });
  }

  public resume(): void {
    const now = this.syncVirtualTime();
    this.dispatch({ type: 'RESUME', nowMs: now });
  }

  public skipAnimation(): void {
    this.dispatch({ type: 'SKIP_ANIMATION' });
  }

  public restartLevel(): void {
    const now = this.syncVirtualTime();
    this.dispatch({ type: 'RESTART_LEVEL', nowMs: now });
  }

  public tick(realNow: number = this.clock.now()): void {
    if (this.lastRealNow === null) {
      this.lastRealNow = realNow;
      this.virtualNow = realNow;
    }
    const realDelta = Math.max(0, realNow - this.lastRealNow);
    this.lastRealNow = realNow;
    this.virtualNow += realDelta * this.speedMultiplier;
    this.dispatch({ type: 'TICK', nowMs: this.virtualNow });
  }

  public restoreSession(session: EngineSession, restoredPhase: 'running' | 'paused' | 'result' = 'paused'): void {
    const phase = session.committed !== null ? 'result' : restoredPhase;
    this.lastRealNow = this.clock.now();
    this.virtualNow = this.lastRealNow;
    this.dispatch({
      type: 'RESTORE_SESSION',
      session: {
        ...session,
        anchorMs: null,
        phaseBeforePause: phase === 'paused' ? session.phaseBeforePause ?? 'running' : null,
        pauseReason: phase === 'paused' ? session.pauseReason ?? 'user' : null
      },
      phase
    });
  }

  private startLoop(): void {
    if (this.rafId !== null || typeof window === 'undefined') return;

    const loop = () => {
      if (this.isDestroyed) return;
      if (this.state.phase === 'running' || this.state.phase === 'resolving') {
        this.tick(this.clock.now());
        this.rafId = window.requestAnimationFrame(loop);
      } else {
        this.rafId = null;
      }
    };
    this.rafId = window.requestAnimationFrame(loop);
  }

  private stopLoop(): void {
    if (this.rafId !== null && typeof window !== 'undefined') {
      window.cancelAnimationFrame(this.rafId);
      this.rafId = null;
    }
  }

  public dispose(): void {
    this.isDestroyed = true;
    this.stopLoop();
    this.listeners.clear();
  }
}
