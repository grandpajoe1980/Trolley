import { getValidationReport } from './content/catalog';
import { App } from './app';

function bootstrap(): void {
  const root = document.getElementById('app');
  if (!root) {
    console.error('Root #app element not found');
    return;
  }

  // Fail-closed catalog verification
  const report = getValidationReport();
  if (report.status !== 'PASS') {
    root.innerHTML = '';
    const errContainer = document.createElement('main');
    errContainer.className = 'level-container';
    errContainer.innerHTML = `
      <div class="card" style="border-left: 4px solid var(--danger-color);">
        <h1 style="color: var(--danger-color);">Content Catalog Error</h1>
        <p>The philosophical dilemma catalog failed integrity and schema validation checks (${report.errors.length} errors found).</p>
        <pre class="callout" style="background-color: #fef2f2; color: #991b1b; white-space: pre-wrap;">${report.errors.slice(0, 10).join('\n')}</pre>
        <button type="button" class="btn btn-primary" onclick="window.location.reload()">Retry Validation</button>
      </div>
    `;
    root.appendChild(errContainer);
    return;
  }

  // Mount application shell and router
  new App(root);
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', bootstrap);
} else {
  bootstrap();
}
