import { getValidationReport } from './content/catalog';

function init(): void {
  const report = getValidationReport();
  const root = document.getElementById('app');
  if (!root) return;

  if (report.status !== 'PASS') {
    root.innerHTML = `
      <div role="alert" style="padding: 2rem; color: #dc2626;">
        <h1>Content Error</h1>
        <p>Catalog validation failed with ${report.errors.length} errors.</p>
      </div>
    `;
    return;
  }

  root.innerHTML = `
    <div style="padding: 2rem; max-width: 800px; margin: 0 auto;">
      <h1>Trolley</h1>
      <p>Loaded 200 levels across 10 chapters. All validation checks passed (${report.checks} assertions).</p>
    </div>
  `;
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}
