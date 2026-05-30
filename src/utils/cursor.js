// ── Custom Spotlight Cursor follower ─────────────────────────────────────

export function initCursor() {
  const cursorDot = document.getElementById('cursor-dot');
  const cursorRing = document.getElementById('cursor-ring');
  if (!cursorDot || !cursorRing) return;

  let mouseX = window.innerWidth / 2;
  let mouseY = window.innerHeight / 2;
  let ringX = mouseX;
  let ringY = mouseY;

  window.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    cursorDot.style.transform = `translate(calc(${mouseX}px - 50%), calc(${mouseY}px - 50%))`;
  });

  // Listen to mouse messages from the contact tab iframe to sync cursor position and hover states
  window.addEventListener('message', (event) => {
    if (event.data.type === 'iframe_mousemove') {
      const iframe = document.querySelector('#contact iframe');
      if (iframe) {
        const rect = iframe.getBoundingClientRect();
        mouseX = event.data.clientX + rect.left;
        mouseY = event.data.clientY + rect.top;
        cursorDot.style.transform = `translate(calc(${mouseX}px - 50%), calc(${mouseY}px - 50%))`;
      }
    } else if (event.data.type === 'iframe_mouseenter_btn') {
      document.body.classList.add('cursor-active');
    } else if (event.data.type === 'iframe_mouseleave_btn') {
      document.body.classList.remove('cursor-active');
    }
  });

  function renderCursor() {
    // Lerp for smooth trailing effect
    ringX += (mouseX - ringX) * 0.15;
    ringY += (mouseY - ringY) * 0.15;
    cursorRing.style.transform = `translate(calc(${ringX}px - 50%), calc(${ringY}px - 50%))`;
    requestAnimationFrame(renderCursor);
  }
  requestAnimationFrame(renderCursor);

  // Custom Cursor Interactive States
  function bindCursorActive(elements) {
    elements.forEach(el => {
      el.addEventListener('mouseenter', () => document.body.classList.add('cursor-active'));
      el.addEventListener('mouseleave', () => document.body.classList.remove('cursor-active'));
    });
  }

  bindCursorActive(document.querySelectorAll('a, button, .portfolio-item, .contact-cta, .proj-modal-close'));

  // Expose helper globally so modal and other modules can apply hover effects dynamically
  window.bindCursorActive = bindCursorActive;
}
