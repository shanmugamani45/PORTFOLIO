// ── Asynchronous Dynamic Script Loader ─────────────────────────────────────

const loadedScripts = new Map();

/**
 * Loads an external JavaScript file dynamically and returns a Promise.
 * Resolves when the script has loaded successfully.
 * Ensures the script is only loaded once.
 * 
 * @param {string} url - The absolute URL of the external script.
 * @returns {Promise<void>}
 */
export function loadScript(url) {
  if (loadedScripts.has(url)) {
    return loadedScripts.get(url);
  }

  const promise = new Promise((resolve, reject) => {
    // Check if the script tag is already in the document
    const existing = document.querySelector(`script[src="${url}"]`);
    if (existing) {
      if (existing.dataset.loaded === 'true') {
        resolve();
        return;
      }
      existing.addEventListener('load', () => {
        existing.dataset.loaded = 'true';
        resolve();
      });
      existing.addEventListener('error', (err) => reject(err));
      return;
    }

    const script = document.createElement('script');
    script.src = url;
    script.async = true;
    script.dataset.loaded = 'false';

    script.onload = () => {
      script.dataset.loaded = 'true';
      resolve();
    };

    script.onerror = (err) => {
      reject(err);
    };

    document.head.appendChild(script);
  });

  loadedScripts.set(url, promise);
  return promise;
}
