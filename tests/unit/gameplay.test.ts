import { describe, expect, it } from 'vitest';
import { getPlayerLevel } from '../../src/content/catalog';
import { getScenarioProfile } from '../../src/gameplay/profile';
import { createControls } from '../../src/ui/controls';

describe('Playable scenario variety', () => {
  it('assigns different non-social verbs from public level metadata', () => {
    expect(getScenarioProfile(getPlayerLevel(1)!).mode).toBe('route');
    expect(getScenarioProfile(getPlayerLevel(19)!).mode).toBe('sequence');
    expect(getScenarioProfile(getPlayerLevel(101)!).mode).toBe('investigation');
    expect(getScenarioProfile(getPlayerLevel(8)!).mode).toBe('precision');
    expect(getScenarioProfile(getPlayerLevel(31)!).mode).toBe('resource');
  });

  it('requires evidence review before exposing route projections', () => {
    const level = getPlayerLevel(101)!;
    const controls = createControls(level, {
      onSelectChoice: () => {},
      onResolveNow: () => {},
      onPause: () => {},
      onResume: () => {}
    });

    expect(controls.element.dataset.scenarioMode).toBe('investigation');
    expect((controls.element.querySelector('.choice-preview') as HTMLElement).style.display).toBe('none');
    const inspect = controls.element.querySelector('.mechanic-action') as HTMLButtonElement;
    const required = getScenarioProfile(level).evidenceRequired;
    for (let index = 0; index < required; index += 1) inspect.click();
    expect((controls.element.querySelector('.choice-preview') as HTMLElement).style.display).toBe('');
    expect(inspect.disabled).toBe(true);
    controls.destroy();
  });

  it('requires the ordered checklist before sequence commitment', () => {
    const level = getPlayerLevel(19)!;
    let resolved = false;
    const controls = createControls(level, {
      onSelectChoice: () => {},
      onResolveNow: () => {
        resolved = true;
      },
      onPause: () => {},
      onResume: () => {}
    });
    const choice = controls.element.querySelector('.choice-btn-A') as HTMLButtonElement;
    choice.click();
    choice.click();
    expect(resolved).toBe(false);
    (controls.element.querySelector('.sequence-confirm') as HTMLButtonElement).click();
    choice.click();
    expect(resolved).toBe(true);
    controls.destroy();
  });

  it('spends a field-kit action through the resource mechanic', () => {
    const level = getPlayerLevel(31)!;
    let used = false;
    const controls = createControls(level, {
      onSelectChoice: () => {},
      onResolveNow: () => {},
      onPause: () => {},
      onResume: () => {},
      resourceCharges: 1,
      onUseResource: () => {
        used = true;
        return true;
      }
    });
    (controls.element.querySelector('.mechanic-action') as HTMLButtonElement).click();
    expect(used).toBe(true);
    expect((controls.element.querySelector('.mechanic-action') as HTMLButtonElement).disabled).toBe(true);
    controls.destroy();
  });
});
