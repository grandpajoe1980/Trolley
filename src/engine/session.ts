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

  constructor(clock: Clock = defaultClock, initialState: EngineState = initialEngineState) {
    this.clock = clock;
    this.state = initialState;
  }

  public getState(): EngineState {
    return this.state;
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
    this.dispatch({
      type: 'START_LEVEL',
      level,
      mode,
      timingMode,
      sessionId,
      campaignId,
      nowMs: now
    });
  }

  public selectChoice(choiceId: ChoiceId): void {
    const now = this.clock.now();
    this.dispatch({ type: 'SELECT_CHOICE', choiceId, nowMs: now });
  }

  public resolveNow(): void {
    const now = this.clock.now();
    this.dispatch({ type: 'RESOLVE_NOW', nowMs: now });
  }

  public pause(reason: 'user' | 'hidden' = 'user'): void {
    const now = this.clock.now();
    this.dispatch({ type: 'PAUSE', nowMs: now, reason });
  }

  public resume(): void {
    const now = this.clock.now();
    this.dispatch({ type: 'RESUME', nowMs: now });
  }

  public skipAnimation(): void {
    this.dispatch({ type: 'SKIP_ANIMATION' });
  }

  public restartLevel(): void {
    const now = this.clock.now();
    this.dispatch({ type: 'RESTART_LEVEL', nowMs: now });
  }

  public tick(nowMs: number = this.clock.now()): void {
    this.dispatch({ type: 'TICK', nowMs });
  }

  public restoreSession(session: EngineSession): void {
    const phase = session.committed !== null ? 'result' : 'paused';
    this.dispatch({
      type: 'RESTORE_SESSION',
      session,
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
