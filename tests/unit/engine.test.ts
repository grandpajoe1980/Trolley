import { describe, expect, it } from 'vitest';
import { catalog, getLevel } from '../../src/content/catalog';
import { TestClock } from '../../src/engine/clock';
import { SessionManager } from '../../src/engine/session';

describe('Engine State Transitions and Clock Invariants', () => {
  it('commits B at 29,999ms, but rejects B at 30,000ms (deadline wins with default A)', () => {
    const lvl = getLevel(1)!;

    // Subcase 1: Selection at 29,999ms commits B
    const clock1 = new TestClock(0);
    const session1 = new SessionManager(clock1);
    session1.startLevel(lvl, 'campaign', 'standard', 'sess-1', 'camp-1');

    clock1.advance(29999);
    session1.selectChoice('B');
    expect(session1.getState().session?.selectedChoiceId).toBe('B');

    clock1.advance(1); // reaches 30000ms deadline
    session1.tick();
    expect(session1.getState().session?.committed?.choiceId).toBe('B');
    expect(session1.getState().session?.committed?.selectionOrigin).toBe('player');

    // Subcase 2: Selection attempt at 30,000ms is rejected, default A commits
    const clock2 = new TestClock(0);
    const session2 = new SessionManager(clock2);
    session2.startLevel(lvl, 'campaign', 'standard', 'sess-2', 'camp-2');

    clock2.advance(30000); // clock advanced to 30,000 before selectChoice received
    session2.selectChoice('B'); // Event processed at 30,000ms
    expect(session2.getState().session?.committed?.choiceId).toBe('A');
    expect(session2.getState().session?.committed?.selectionOrigin).toBe('default');
  });

  it('early Resolve: selecting C then Resolve at 1,000ms commits C once', () => {
    // Find a level with 3 choices
    const lvl3 = catalog.levels.find((l) => l.choices.length === 3)!;
    const clock = new TestClock(0);
    const session = new SessionManager(clock);
    session.startLevel(lvl3, 'campaign', 'standard', 'sess-early', 'camp-1');

    clock.advance(500);
    session.selectChoice('C');

    clock.advance(500);
    session.resolveNow();

    const st = session.getState();
    expect(st.phase).toBe('resolving');
    expect(st.session?.committed?.choiceId).toBe('C');
    expect(st.session?.committed?.committedAtMs).toBe(1000);

    // Further select attempts during resolution have no effect
    session.selectChoice('A');
    expect(session.getState().session?.committed?.choiceId).toBe('C');
  });

  it('no-input defaults: running all 200 levels to deadline with no input commits default A', () => {
    for (const lvl of catalog.levels) {
      const clock = new TestClock(0);
      const session = new SessionManager(clock);
      session.startLevel(lvl, 'campaign', 'standard', `sess-${lvl.id}`, 'camp-test');

      clock.advance(30000);
      session.tick();

      const st = session.getState();
      expect(st.session?.committed?.choiceId).toBe('A');
      expect(st.session?.committed?.selectionOrigin).toBe('default');
      expect(st.session?.committed?.outcomeId).toBe(`L${String(lvl.id).padStart(3, '0')}-A`);
    }
  });

  it('pause/visibility: 10s active + 1hr hidden + resume + 20s yields exactly 30s deadline commitment with zero hidden charge', () => {
    const lvl = getLevel(1)!;
    const clock = new TestClock(0);
    const session = new SessionManager(clock);
    session.startLevel(lvl, 'campaign', 'standard', 'sess-pause', 'camp-1');

    // 10 seconds active
    clock.advance(10000);
    session.tick();
    expect(session.getState().session?.activeElapsedMs).toBe(10000);

    // Tab becomes hidden -> pause with 'hidden' reason
    session.pause('hidden');
    expect(session.getState().phase).toBe('paused');
    expect(session.getState().session?.pauseReason).toBe('hidden');

    // 1 hour passes in background (3,600,000 ms)
    clock.advance(3600000);
    // Even if ticks are invoked while paused, no active elapsed time is charged
    session.tick();
    expect(session.getState().session?.activeElapsedMs).toBe(10000);

    // Tab becomes visible again -> resume
    session.resume();
    expect(session.getState().phase).toBe('running');
    expect(session.getState().session?.activeElapsedMs).toBe(10000);

    // 19,999 ms active -> 29,999 ms total active
    clock.advance(19999);
    session.tick();
    expect(session.getState().session?.activeElapsedMs).toBe(29999);
    expect(session.getState().session?.committed).toBeNull();

    // 1 ms more reaches exactly 30,000 ms -> commitment occurs
    clock.advance(1);
    session.tick();
    expect(session.getState().session?.committed?.choiceId).toBe('A');
    expect(session.getState().session?.activeElapsedMs).toBe(30000);
  });

  it('frame stall spanning past decision and resolution boundaries transitions directly to result', () => {
    const lvl = getLevel(1)!;
    const clock = new TestClock(0);
    const session = new SessionManager(clock);
    session.startLevel(lvl, 'campaign', 'standard', 'sess-stall', 'camp-1');

    // Single frame stall of 35,000ms (crosses 30,000ms decision + 2,400ms resolution)
    clock.advance(35000);
    session.tick();

    const st = session.getState();
    expect(st.phase).toBe('result');
    expect(st.session?.committed?.choiceId).toBe('A');
    expect(st.session?.activeElapsedMs).toBe(30000);
    expect(st.session?.resolutionElapsedMs).toBe(2400);
  });

  it('untimed mode runs indefinitely without automatic commitment until Resolve Now', () => {
    const lvl = getLevel(1)!;
    const clock = new TestClock(0);
    const session = new SessionManager(clock);
    session.startLevel(lvl, 'campaign', 'untimed', 'sess-untimed', 'camp-1');

    // 10 minutes pass (600,000 ms)
    clock.advance(600000);
    session.tick();

    expect(session.getState().phase).toBe('running');
    expect(session.getState().session?.committed).toBeNull();
    expect(session.getState().session?.activeElapsedMs).toBe(600000);

    // Player switches to B
    session.selectChoice('B');
    expect(session.getState().session?.selectedChoiceId).toBe('B');

    // Explicit resolve commits B
    session.resolveNow();
    expect(session.getState().phase).toBe('resolving');
    expect(session.getState().session?.committed?.choiceId).toBe('B');
  });

  it('reduced motion skip animation jumps directly to result', () => {
    const lvl = getLevel(1)!;
    const clock = new TestClock(0);
    const session = new SessionManager(clock);
    session.startLevel(lvl, 'campaign', 'standard', 'sess-skip', 'camp-1');

    clock.advance(30000);
    session.tick();
    expect(session.getState().phase).toBe('resolving');

    session.skipAnimation();
    expect(session.getState().phase).toBe('result');
    expect(session.getState().session?.resolutionElapsedMs).toBe(2400);
  });

  it('restoring A choice after selecting B preserves player origin', () => {
    const lvl = getLevel(1)!;
    const clock = new TestClock(0);
    const session = new SessionManager(clock);
    session.startLevel(lvl, 'campaign', 'standard', 'sess-origin', 'camp-1');

    expect(session.getState().session?.selectionOrigin).toBe('default');

    clock.advance(5000);
    session.selectChoice('B');
    expect(session.getState().session?.selectionOrigin).toBe('player');

    clock.advance(5000);
    session.selectChoice('A'); // Selected A again
    expect(session.getState().session?.selectedChoiceId).toBe('A');
    expect(session.getState().session?.selectionOrigin).toBe('player'); // Must NOT be falsely labeled 'default'

    session.resolveNow();
    expect(session.getState().session?.committed?.choiceId).toBe('A');
    expect(session.getState().session?.committed?.selectionOrigin).toBe('player');
  });

  it('restores an uncommitted checkpoint into a running level', () => {
    const lvl = getLevel(2)!;
    const clock = new TestClock(0);
    const source = new SessionManager(clock);
    source.startLevel(lvl, 'campaign', 'standard', 'sess-restore', 'camp-restore');
    clock.advance(5000);
    source.pause('user');

    const restored = new SessionManager(clock);
    restored.restoreSession(source.getState().session!, 'running');

    expect(restored.getState().phase).toBe('running');
    expect(restored.getState().session?.pauseReason).toBeNull();
    expect(restored.getState().session?.phaseBeforePause).toBeNull();
  });

  it('speed multiplier accelerates virtual monotonic clock advancement', () => {
    const lvl = getLevel(1)!;
    const clock = new TestClock(0);
    const session = new SessionManager(clock);
    session.startLevel(lvl, 'campaign', 'standard', 'sess-speed', 'camp-1');

    expect(session.getSpeedMultiplier()).toBe(1);

    // Toggle to 3x
    const speed2 = session.toggleSpeed();
    expect(speed2).toBe(3);
    expect(session.getSpeedMultiplier()).toBe(3);

    // 1000ms of real clock time should advance activeElapsedMs by 3000ms
    clock.advance(1000);
    session.tick();
    expect(session.getState().session?.activeElapsedMs).toBe(3000);

    // Toggle to 5x
    const speed3 = session.toggleSpeed();
    expect(speed3).toBe(5);

    // 1000ms of real clock time should advance by another 5000ms -> 8000ms total
    clock.advance(1000);
    session.tick();
    expect(session.getState().session?.activeElapsedMs).toBe(8000);

    // Toggle back to 1x
    const speed4 = session.toggleSpeed();
    expect(speed4).toBe(1);

    // 1000ms advances by 1000ms -> 9000ms total
    clock.advance(1000);
    session.tick();
    expect(session.getState().session?.activeElapsedMs).toBe(9000);
  });
});
