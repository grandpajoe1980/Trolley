export type TimingMode = 'standard' | 'extended' | 'untimed';

export interface Clock {
  now(): number;
}

export const defaultClock: Clock = {
  now(): number {
    return typeof performance !== 'undefined' ? performance.now() : Date.now();
  }
};

export class TestClock implements Clock {
  private currentTime: number;

  constructor(initialTime = 0) {
    this.currentTime = initialTime;
  }

  now(): number {
    return this.currentTime;
  }

  advance(ms: number): void {
    if (ms < 0) throw new Error('Cannot advance clock backward');
    this.currentTime += ms;
  }

  set(time: number): void {
    if (time < this.currentTime) throw new Error('Cannot set clock backward');
    this.currentTime = time;
  }
}

export function getDeadlineForTimingMode(mode: TimingMode, catalogDecisionMs = 30000): number {
  switch (mode) {
    case 'standard':
      return catalogDecisionMs; // 30,000 ms
    case 'extended':
      return 120000; // 120,000 ms (2 minutes)
    case 'untimed':
      return Number.POSITIVE_INFINITY;
  }
}
