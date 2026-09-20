import { expect, test } from '@playwright/test';
import { readFileSync } from 'node:fs';

const catalog = JSON.parse(readFileSync(new URL('../../data/levels.json', import.meta.url), 'utf8')) as {
  levels: Array<{
    knowledge: { authorOnlyPremise: string };
    choices: Array<{ outcome: { summary: string } }>;
  }>;
};

async function startCampaign(page: import('@playwright/test').Page): Promise<void> {
  await page.goto('/#/');
  await expect(page.getByRole('button', { name: 'Start Campaign' })).toBeVisible();
  await page.getByRole('button', { name: 'Start Campaign' }).click();
  await expect(page.getByRole('heading', { name: 'Level 1: Empty Siding' })).toBeVisible();
}

async function openPracticeLevel(page: import('@playwright/test').Page, levelId: number): Promise<void> {
  await page.goto('/#/');
  await page.getByRole('button', { name: 'Level Library & Practice' }).click();
  const levelCard = page.locator('.library-level-item').filter({
    has: page.locator('strong', { hasText: new RegExp(`^${levelId}\\. `) })
  });
  await expect(levelCard).toContainText('Available in Practice Mode');
  await levelCard.locator('xpath=ancestor::details[1]').evaluate((details) => {
    (details as HTMLDetailsElement).open = true;
  });
  await levelCard.getByRole('button', { name: 'Practice' }).click();
  await expect(page.getByRole('heading', { name: new RegExp(`Level ${levelId}:`) })).toBeVisible();
}

test.beforeEach(async ({ page }) => {
  await page.goto('/#/');
  await page.evaluate(() => localStorage.clear());
  await page.reload();
});

test('loads the campaign shell and completes a choice with persistent progress', async ({ page }) => {
  await startCampaign(page);

  await expect(page.getByRole('heading', { name: 'Choose a route' })).toBeVisible();
  await expect(page.getByText('Click the same choice again to commit early.')).toBeVisible();
  const sidingChoice = page.getByRole('button', { name: /Use empty siding/ });
  await sidingChoice.click();
  await expect(sidingChoice).toHaveAttribute('aria-pressed', 'true');
  await sidingChoice.click();

  await expect(page.getByRole('heading', { name: /Choice B Committed: Use empty siding/ })).toBeVisible({
    timeout: 8_000
  });
  await expect(page.locator('.level-statusbar')).toContainText('Level 1 · 1/200');
  await expect(page.locator('.metrics-card')).toContainText('Fatalities');
  await expect(page.getByText('Selected by you.')).toBeVisible();

  await page.goto('/#/');
  await expect(page.getByRole('button', { name: 'Continue Level 2' })).toBeVisible();
  await page.reload();
  await expect(page.getByRole('button', { name: 'Continue Level 2' })).toBeVisible();
});

test('pauses and resumes an active decision without leaving the level', async ({ page }) => {
  await startCampaign(page);

  const pause = page.getByRole('button', { name: 'Pause' });
  await pause.click();
  await expect(page.getByRole('button', { name: 'Resume' })).toBeVisible();
  await expect(page.locator('.timer-label')).toContainText('Paused');

  await page.getByRole('button', { name: 'Resume' }).click();
  await expect(page.getByRole('button', { name: 'Pause' })).toBeVisible();
  await expect(page.locator('.timer-label')).not.toContainText('Paused');
});

test('persists the extended timing accessibility setting into a new level', async ({ page }) => {
  await page.goto('/#/settings');
  const extended = page.locator('input[type="radio"][value="extended"]');
  await extended.check();
  await expect(extended).toBeChecked();

  await page.getByRole('button', { name: 'Main Menu' }).click();
  await page.getByRole('button', { name: 'Start Campaign' }).click();
  await expect(page.locator('.timer-label')).toContainText('120s remaining');
});

test('keeps the decision panel usable at a narrow mobile width', async ({ page }) => {
  await page.setViewportSize({ width: 320, height: 844 });
  await startCampaign(page);

  await expect(page.getByRole('heading', { name: 'Choose a route' })).toBeVisible();
  await expect(page.getByRole('button', { name: 'Pause' })).toBeVisible();
  const dimensions = await page.evaluate(() => ({
    clientWidth: document.documentElement.clientWidth,
    scrollWidth: document.documentElement.scrollWidth
  }));
  expect(dimensions.scrollWidth).toBeLessThanOrEqual(dimensions.clientWidth);
});

for (const fixture of [
  { levelId: 45, family: 'hospital', marker: '.scene-hospital-backdrop', label: 'SURGERY WARD' },
  { levelId: 32, family: 'footbridge', marker: '.scene-footbridge-backdrop', label: 'FOOTBRIDGE' }
]) {
  test(`renders the ${fixture.family} environment for level ${fixture.levelId}`, async ({ page }) => {
    await openPracticeLevel(page, fixture.levelId);

    const scene = page.locator('svg.trolley-stage');
    await expect(scene).toHaveAttribute('data-scene-family', fixture.family);
    await expect(scene.locator(fixture.marker)).toHaveCount(1);
    await expect(scene).toContainText(fixture.label);
    await expect(scene.locator('.scene-catenary')).toHaveCount(0);
  });
}

for (const levelId of [102, 115, 184, 195]) {
  test(`keeps level ${levelId} outcome-only information out of the pre-commit DOM`, async ({ page }) => {
    await openPracticeLevel(page, levelId);

    const level = catalog.levels[levelId - 1];
    const choice = level?.choices[0];
    if (!level || !choice) {
      throw new Error(`Missing catalog fixture for level ${levelId}`);
    }
    const body = page.locator('body');
    await expect(body).not.toContainText(level.knowledge.authorOnlyPremise);
    await expect(body).not.toContainText(choice.outcome.summary);
    await expect(page.locator('.result-panel')).toHaveCount(0);
    await expect(page.locator('.lens-breakdown')).toHaveCount(0);
  });
}
