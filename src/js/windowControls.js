export function setupWindowControls() {
  const minBtn = document.getElementById("min-btn");
  const closeBtn = document.getElementById("close-btn");

  if (minBtn) {
    minBtn.addEventListener('click', () => window.electronAPI.minimize());
  }

  if (closeBtn) {
    closeBtn.addEventListener('click', () => window.electronAPI.close());
  }
}