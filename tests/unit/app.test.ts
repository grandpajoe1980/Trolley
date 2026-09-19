import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import { App } from '../../src/app';

describe('App Router, Shell, and Session Integration', () => {
  let root: HTMLElement;

  beforeEach(() => {
    vi.useFakeTimers();
    window.location.hash = '';
    window.localStorage.clear();
    document.body.innerHTML = '<div id="app"></div>';
    root = document.getElementById('app')!;
  });

  afterEach(() => {
    vi.useRealTimers();
  });

  it('renders main menu on empty hash or #/', () => {
    window.location.hash = '#/';
    const app = new App(root);

    expect(root.querySelector('.menu-container')).toBeDefined();
    expect(root.textContent).toContain('Trolley');
    expect(root.textContent).toContain('Campaign Progress');

    app.dispose();
  });

  it('navigates to library and settings via hash', () => {
    const app = new App(root);

    window.location.hash = '#/library';
    window.dispatchEvent(new HashChangeEvent('hashchange'));
    expect(root.querySelector('.library-container')).toBeDefined();
    expect(root.textContent).toContain('Level Library');

    window.location.hash = '#/settings';
    window.dispatchEvent(new HashChangeEvent('hashchange'));
    expect(root.querySelector('.settings-container')).toBeDefined();
    expect(root.textContent).toContain('Timing Mode');

    app.dispose();
  });

  it('clamps route to next unlocked level when player attempts to bypass progression', () => {
    // Attempting level 42 when level 1 is unlocked
    window.location.hash = '#/level/42';
    const app = new App(root);

    // Should clamp to level 1
    expect(window.location.hash).toBe('#/level/1');
    expect(root.querySelector('.level-container')).toBeDefined();
    expect(root.textContent).toContain('Level 1:');

    app.dispose();
  });

  it('plays through level 1, resolves choice B, and mounts results', () => {
    window.location.hash = '#/level/1';
    const app = new App(root);

    expect(root.textContent).toContain('Level 1:');
    const levelContainer = root.querySelector('.level-container')!;
    expect(levelContainer.firstElementChild?.className).toBe('level-play-area');
    expect(levelContainer.querySelector('.facts-panel')).not.toBeNull();
    expect(Array.from(levelContainer.children).indexOf(levelContainer.querySelector('.facts-panel')!)).toBeGreaterThan(0);
    expect(levelContainer.querySelector('.level-navigation')).not.toBeNull();
    expect((levelContainer.querySelector('.level-nav-previous') as HTMLButtonElement).disabled).toBe(true);
    expect((levelContainer.querySelector('.level-nav-next') as HTMLButtonElement).disabled).toBe(true);

    // Click choice B button
    const btnB = root.querySelector('.choice-btn-B') as HTMLButtonElement;
    expect(btnB).toBeDefined();
    btnB.click();

    // Confirm the selected choice with a second click.
    btnB.click();

    // The result is rendered after its short resolution animation.
    vi.advanceTimersByTime(2400);

    // Result panel should be mounted
    const resultPanel = root.querySelector('.result-panel');
    expect(resultPanel).toBeDefined();
    expect(resultPanel?.textContent).toContain('Choice B Committed');
    expect(resultPanel?.textContent).toContain('Fatalities');
    expect(resultPanel?.querySelector('.btn-next')).toBeNull();

    app.dispose();
  });

  it('completes level 1 and proceeds cleanly to level 2 without getting stuck', () => {
    window.location.hash = '#/level/1';
    const app = new App(root);

    // Commit choice A with a second click.
    const btnA = root.querySelector('.choice-btn-A') as HTMLButtonElement;
    btnA.click();
    btnA.click();

    vi.advanceTimersByTime(2400);

    const resultPanel = root.querySelector('.result-panel');
    expect(resultPanel).not.toBeNull();

    // Click Next: Level 2 from the level navigation row.
    const nextBtn = root.querySelector('.level-nav-next') as HTMLButtonElement;
    expect(nextBtn).not.toBeNull();
    nextBtn.click();

    // Must successfully transition to Level 2 and not get clamped back to Level 1
    expect(window.location.hash).toBe('#/level/2');
    expect(root.textContent).toContain('Level 2:');

    app.dispose();
  });

  it('keeps the active controls deliberately small', () => {
    window.location.hash = '#/level/1';
    const app = new App(root);

    expect(root.querySelector('.btn-speed')).toBeNull();
    expect(root.querySelector('.btn-skip')).toBeNull();
    expect(root.querySelector('.btn-restart')).toBeNull();
    expect(root.querySelector('.btn-pause')).not.toBeNull();
    expect(root.querySelector('.btn-resolve')).toBeNull();

    app.dispose();
  });
});
