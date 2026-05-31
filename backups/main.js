// ── Application Entry Point ──────────────────────────────────────────────

import { initCursor } from './utils/cursor.js';
import { initUIEffects } from './utils/effects.js';
import { init3DSphere } from './components/sphere.js';
import { initModals } from './components/modal.js';
import { init3DJourney } from './components/journey.js';

// Initialize all components after document is loaded
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', bootstrap);
} else {
  bootstrap();
}

function bootstrap() {
  initCursor();
  initUIEffects();
  init3DSphere();
  initModals();
  init3DJourney();
}
