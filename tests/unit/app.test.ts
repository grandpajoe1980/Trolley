import { beforeEach, describe, expect, it } from 'vitest';
import { App } from '../../src/app';

describe('App Router, Shell, and Session Integration', () => {
  let root: HTMLElement;

  beforeEach(() => {
    window.location.hash = '';
    window.localStorage.clear();
    document.body.innerHTML = '<div id="app"></div>';
    root = document.getElementById('app')!;
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

    // Click choice B button
    const btnB = root.querySelector('.choice-btn-B') as HTMLButtonElement;
    expect(btnB).toBeDefined();
    btnB.click();

    // Click Resolve now
    const resolveBtn = root.querySelector('.btn-resolve') as HTMLButtonElement;
    expect(resolveBtn).toBeDefined();
    resolveBtn.click();

    // Fast-forward or skip animation
    const skipBtn = root.querySelector('.btn-skip') as HTMLButtonElement;
    if (skipBtn && skipBtn.style.display !== 'none') {
      skipBtn.click();
    }

    // Result panel should be mounted
    const resultPanel = root.querySelector('.result-panel');
    expect(resultPanel).toBeDefined();
    expect(resultPanel?.textContent).toContain('Choice B Committed');
    expect(resultPanel?.textContent).toContain('Raw Fatalities');

    app.dispose();
  });
});
