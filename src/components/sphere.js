// ── Pure Vanilla 3D Icon Sphere ──────────────────────────────────────────

export function init3DSphere() {
  const flipBtn = document.getElementById('flip-btn');
  const flipContainer = document.getElementById('sphere-flip-container');
  if (flipBtn && flipContainer) {
    flipBtn.addEventListener('click', () => {
      flipContainer.classList.toggle('is-flipped');
    });
  }

  const ICONS = [
    'html5.webp', 'css3.webp', 'javascript.webp', 'typescript.webp',
    'react.webp', 'nextjs.webp', 'threejs.webp', 'nodejs.webp',
    'express.webp', 'mongodb.webp', 'postgresql.webp', 'firebase.webp',
    'docker.webp', 'git.webp', 'github.webp', 'figma.webp',
    'tailwindcss.webp', 'python.webp', 'go.webp', 'graphql.webp'
  ];

  const container = document.getElementById('icon-sphere');
  if (!container) return;

  const R = container.offsetWidth / 2;   // sphere radius = half container
  const N = ICONS.length;
  const nodes = [];   // { el, phi, theta }

  // Fibonacci sphere for even distribution
  const golden = Math.PI * (3 - Math.sqrt(5));
  for (let i = 0; i < N; i++) {
    const y = 1 - (i / (N - 1)) * 2;          // -1 … 1
    const r = Math.sqrt(1 - y * y);
    const theta = golden * i;

    const wrap = document.createElement('div');
    wrap.className = 'sphere-icon';
    const img = document.createElement('img');
    img.src = 'public/icons/' + ICONS[i];
    img.alt = ICONS[i].replace('.webp', '');
    img.title = ICONS[i].replace('.webp', '');
    img.draggable = false;
    img.loading = 'lazy';
    img.decoding = 'async';
    wrap.appendChild(img);
    container.appendChild(wrap);

    nodes.push({
      el: wrap,
      x0: Math.cos(theta) * r,
      y0: y,
      z0: Math.sin(theta) * r
    });
  }

  // Rotation state
  let angleX = 0.003;   // radians/frame
  let angleY = 0.006;
  let rotX = 0, rotY = 0;

  // Settings controls integration
  const sphereSpeedSlider = document.getElementById('sphere-speed');
  const sphereDirectionBtn = document.getElementById('sphere-direction-btn');
  let rotationDirection = 1;

  if (sphereDirectionBtn) {
    sphereDirectionBtn.addEventListener('click', () => {
      rotationDirection = -rotationDirection;
      sphereDirectionBtn.classList.toggle('active', rotationDirection === -1);
      const label = sphereDirectionBtn.querySelector('.btn-label');
      if (label) label.textContent = rotationDirection === 1 ? "Standard" : "Reversed";
    });
  }

  // Mouse drag interaction
  let drag = false, lastMX = 0, lastMY = 0;
  container.addEventListener('mousedown', e => { drag = true; lastMX = e.clientX; lastMY = e.clientY; });
  window.addEventListener('mouseup', () => { drag = false; });
  window.addEventListener('mousemove', e => {
    if (!drag) return;
    const dx = e.clientX - lastMX;
    const dy = e.clientY - lastMY;
    angleY = dx * 0.003;
    angleX = dy * 0.003;
    lastMX = e.clientX; lastMY = e.clientY;
  });

  // Current rotation matrices accumulated
  let mat = [
    1, 0, 0,
    0, 1, 0,
    0, 0, 1
  ];

  function mulMat(a, b) {
    return [
      a[0] * b[0] + a[1] * b[3] + a[2] * b[6], a[0] * b[1] + a[1] * b[4] + a[2] * b[7], a[0] * b[2] + a[1] * b[5] + a[2] * b[8],
      a[3] * b[0] + a[4] * b[3] + a[5] * b[6], a[3] * b[1] + a[4] * b[4] + a[5] * b[7], a[3] * b[2] + a[4] * b[5] + a[5] * b[8],
      a[6] * b[0] + a[7] * b[3] + a[8] * b[6], a[6] * b[1] + a[7] * b[4] + a[8] * b[7], a[6] * b[2] + a[7] * b[5] + a[8] * b[8]
    ];
  }

  function rotXMat(a) {
    const c = Math.cos(a), s = Math.sin(a);
    return [1, 0, 0, 0, c, -s, 0, s, c];
  }
  function rotYMat(a) {
    const c = Math.cos(a), s = Math.sin(a);
    return [c, 0, s, 0, 1, 0, -s, 0, c];
  }

  function tick() {
    // Accumulate rotation
    mat = mulMat(rotYMat(angleY), mat);
    mat = mulMat(rotXMat(angleX), mat);

    // Auto-spin when not dragging (gradually decay manual velocity)
    if (!drag) {
      let speedMultiplier = 1;
      if (sphereSpeedSlider) {
        speedMultiplier = parseFloat(sphereSpeedSlider.value) / 50;
      }
      const targetAngleX = 0.003 * speedMultiplier * rotationDirection;
      const targetAngleY = 0.006 * speedMultiplier * rotationDirection;
      angleX += (targetAngleX - angleX) * 0.04;
      angleY += (targetAngleY - angleY) * 0.04;
    }

    for (const n of nodes) {
      // Apply rotation matrix to unit position
      const x = mat[0] * n.x0 + mat[1] * n.y0 + mat[2] * n.z0;
      const y = mat[3] * n.x0 + mat[4] * n.y0 + mat[5] * n.z0;
      const z = mat[6] * n.x0 + mat[7] * n.y0 + mat[8] * n.z0;

      // Project to 2D — z goes into/out of screen
      const tx = x * R;
      const ty = y * R;

      // Depth: z from -1 (back) to +1 (front)
      const depth = (z + 1) / 2;          // 0 … 1
      const scale = 0.45 + depth * 0.55;  // 0.45 … 1.0
      const opacity = 0.25 + depth * 0.75;  // 0.25 … 1.0
      const zIndex = Math.round(depth * 100);

      n.el.style.transform = `translate(${tx}px, ${ty}px) scale(${scale})`;
      n.el.style.opacity = opacity;
      n.el.style.zIndex = zIndex;
    }

    requestAnimationFrame(tick);
  }

  requestAnimationFrame(tick);
}
