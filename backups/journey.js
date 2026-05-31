// ── Infinite 3D Tunnel Grid ("Journey") ──────────────────────────────────────────

import { PROJECTS, openModal } from './modal.js';

export function init3DJourney() {
  const container = document.getElementById('journey-canvas-container');
  if (!container || typeof THREE === 'undefined') return;

  // Scene setup
  const scene = new THREE.Scene();
  scene.fog = new THREE.FogExp2(0x000000, 0.015);

  const width = container.clientWidth || window.innerWidth;
  const height = container.clientHeight || window.innerHeight;
  
  const camera = new THREE.PerspectiveCamera(60, width / height, 0.1, 1000);
  camera.position.set(0, 0, 5);

  const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true, powerPreference: "high-performance" });
  renderer.setSize(width, height);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  renderer.setClearColor(0x000000, 0);
  container.appendChild(renderer.domElement);

  // Lights
  const ambientLight = new THREE.AmbientLight(0x0f2042, 1.2);
  scene.add(ambientLight);

  const pointLight1 = new THREE.PointLight(0x7fd1ff, 3, 60);
  pointLight1.position.set(0, 0, -20);
  scene.add(pointLight1);

  const pointLight2 = new THREE.PointLight(0xb537f2, 2.5, 60);
  pointLight2.position.set(0, 0, -50);
  scene.add(pointLight2);

  // Octagonal Tunnel Setup
  const radius = 8.5;
  const numRings = 8;
  const spacingDefault = 15;
  let currentSpacing = spacingDefault;
  let targetSpacing = spacingDefault;

  const panelWidth = 4.5;
  const panelHeight = 2.8;
  const planeGeom = new THREE.PlaneGeometry(panelWidth, panelHeight);
  const edgesGeom = new THREE.EdgesGeometry(planeGeom);

  const textureLoader = new THREE.TextureLoader();
  const textureCache = {};

  // Fallback procedural texture generator
  function createFallbackTexture(title) {
    const canvasTexture = document.createElement('canvas');
    canvasTexture.width = 512;
    canvasTexture.height = 320;
    const ctx = canvasTexture.getContext('2d');
    
    const grad = ctx.createLinearGradient(0, 0, 512, 320);
    grad.addColorStop(0, '#0a1128');
    grad.addColorStop(0.5, '#0e1d44');
    grad.addColorStop(1, '#02050c');
    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, 512, 320);
    
    ctx.strokeStyle = 'rgba(127, 209, 255, 0.12)';
    ctx.lineWidth = 1;
    for (let i = 0; i < 512; i += 64) {
      ctx.beginPath(); ctx.moveTo(i, 0); ctx.lineTo(i, 320); ctx.stroke();
    }
    for (let j = 0; j < 320; j += 64) {
      ctx.beginPath(); ctx.moveTo(0, j); ctx.lineTo(512, j); ctx.stroke();
    }

    ctx.fillStyle = '#ffffff';
    ctx.font = 'bold 26px "Outfit", sans-serif';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.shadowColor = '#7fd1ff';
    ctx.shadowBlur = 8;
    ctx.fillText(title.toUpperCase(), 256, 140);
    
    ctx.shadowBlur = 0;
    ctx.fillStyle = '#7fd1ff';
    ctx.font = '14px "Outfit", sans-serif';
    ctx.fillText("CONCEPT INTERFACE", 256, 190);
    
    ctx.strokeStyle = 'rgba(127, 209, 255, 0.5)';
    ctx.lineWidth = 4;
    ctx.strokeRect(2, 2, 508, 316);
    
    const texture = new THREE.CanvasTexture(canvasTexture);
    return texture;
  }

  function getTexture(path, title) {
    if (!path) return createFallbackTexture(title);
    if (textureCache[path]) return textureCache[path];
    
    const texture = textureLoader.load(path, undefined, undefined, () => {
      console.warn(`Failed to load texture: ${path}, using fallback.`);
    });
    texture.minFilter = THREE.LinearFilter;
    texture.generateMipmaps = false;
    textureCache[path] = texture;
    return texture;
  }

  const ringGroups = [];
  const panelMeshes = [];
  let currentTheme = 'cyber';

  // Build the tunnel rings
  for (let r = 0; r < numRings; r++) {
    const ringGroup = new THREE.Group();
    const z = -r * currentSpacing;
    ringGroup.position.set(0, 0, z);

    for (let s = 0; s < 8; s++) {
      const angle = (s / 8) * Math.PI * 2;
      const panelGroup = new THREE.Group();
      panelGroup.rotation.z = angle - Math.PI / 2;

      const projIdx = (r * 8 + s) % PROJECTS.length;
      const project = PROJECTS[projIdx];

      let texturePath = null;
      if (project.screenshots && project.screenshots.length > 0) {
        texturePath = project.screenshots[s % project.screenshots.length];
      } else if (project.screenshot) {
        texturePath = project.screenshot;
      }

      const texture = getTexture(texturePath, project.title);

      const mat = new THREE.MeshStandardMaterial({
        map: texture,
        roughness: 0.15,
        metalness: 0.6,
        side: THREE.DoubleSide
      });

      const plane = new THREE.Mesh(planeGeom, mat);
      plane.position.set(0, radius, 0);
      plane.rotation.x = Math.PI / 2;

      plane.userData = {
        projectIndex: projIdx,
        ringIndex: r,
        segmentIndex: s
      };

      const borderLines = new THREE.LineSegments(edgesGeom, new THREE.LineBasicMaterial({
        color: 0x7fd1ff,
        transparent: true,
        opacity: 0.4
      }));
      borderLines.position.z = 0.01;
      plane.add(borderLines);
      
      plane.borderLines = borderLines;

      panelGroup.add(plane);
      ringGroup.add(panelGroup);
      panelMeshes.push(plane);
    }
    
    scene.add(ringGroup);
    ringGroups.push(ringGroup);
  }

  // Nebula / Starfield Background
  const starsCount = 450;
  const starArray = new Float32Array(starsCount * 3);
  for (let i = 0; i < starsCount * 3; i += 3) {
    const angle = Math.random() * Math.PI * 2;
    const dist = Math.random() * 5 + radius + 1.5;
    starArray[i] = Math.cos(angle) * dist;
    starArray[i + 1] = Math.sin(angle) * dist;
    starArray[i + 2] = (Math.random() - 0.5) * 150;
  }

  const starGeometry = new THREE.BufferGeometry();
  starGeometry.setAttribute('position', new THREE.BufferAttribute(starArray, 3));

  // Circular Canvas Particle texture
  const starCanvas = document.createElement('canvas');
  starCanvas.width = 16;
  starCanvas.height = 16;
  const starCtx = starCanvas.getContext('2d');
  const starGrad = starCtx.createRadialGradient(8, 8, 0, 8, 8, 8);
  starGrad.addColorStop(0, 'rgba(255,255,255,1)');
  starGrad.addColorStop(0.3, 'rgba(127,209,255,0.7)');
  starGrad.addColorStop(1, 'rgba(0,0,0,0)');
  starCtx.fillStyle = starGrad;
  starCtx.fillRect(0, 0, 16, 16);
  const starTexture = new THREE.CanvasTexture(starCanvas);

  const starMaterial = new THREE.PointsMaterial({
    size: 0.18,
    map: starTexture,
    transparent: true,
    opacity: 0.8,
    blending: THREE.AdditiveBlending,
    depthWrite: false,
    color: 0x7fd1ff
  });

  const starField = new THREE.Points(starGeometry, starMaterial);
  scene.add(starField);

  // Interaction variables
  let scrollZ = 0;
  let autoScrollActive = true;
  let scrollDirection = 1;
  let userVelocityZ = 0;
  
  let mouseX = 0, mouseY = 0;
  let raycastMouse = new THREE.Vector2();
  
  let isDragging = false;
  let lastPointerY = 0;

  // Bind controls
  const playBtn = document.getElementById('journey-play-btn');
  const speedSlider = document.getElementById('journey-speed');
  const densitySlider = document.getElementById('journey-density');
  const themeBtn = document.getElementById('journey-theme-btn');
  const directionBtn = document.getElementById('journey-direction-btn');

  if (playBtn) {
    playBtn.addEventListener('click', () => {
      autoScrollActive = !autoScrollActive;
      playBtn.classList.toggle('active', autoScrollActive);
      const label = playBtn.querySelector('.btn-label');
      const icon = playBtn.querySelector('.btn-icon');
      if (label) label.textContent = autoScrollActive ? "Auto-Scroll" : "Paused";
      if (icon) icon.textContent = autoScrollActive ? "⏸" : "▶";
    });
  }

  if (directionBtn) {
    directionBtn.addEventListener('click', () => {
      scrollDirection = -scrollDirection;
      directionBtn.classList.toggle('active', scrollDirection === -1);
      const label = directionBtn.querySelector('.btn-label');
      if (label) label.textContent = scrollDirection === 1 ? "Forward" : "Backward";
    });
  }

  function setTunnelTheme(theme) {
    currentTheme = theme;
    const isSolar = theme === 'solar';
    ambientLight.color.setHex(isSolar ? 0x3a1f05 : 0x0f2042);
    pointLight1.color.setHex(isSolar ? 0xffaa00 : 0x7fd1ff);
    pointLight2.color.setHex(isSolar ? 0xff3c00 : 0xb537f2);
    
    panelMeshes.forEach(mesh => {
      if (mesh.borderLines && mesh !== hoveredPanel) {
        mesh.borderLines.material.color.setHex(isSolar ? 0xffaa00 : 0x7fd1ff);
      }
    });

    starMaterial.color.setHex(isSolar ? 0xffaa00 : 0x7fd1ff);

    if (themeBtn) {
      const label = themeBtn.querySelector('.btn-label');
      const icon = themeBtn.querySelector('.btn-icon');
      if (label) label.textContent = isSolar ? "Solar Theme" : "Cyber Theme";
      if (icon) icon.textContent = isSolar ? "☀️" : "🌓";
      themeBtn.classList.toggle('active', isSolar);
    }
  }

  if (themeBtn) {
    themeBtn.addEventListener('click', () => {
      setTunnelTheme(currentTheme === 'cyber' ? 'solar' : 'cyber');
    });
  }

  // Pointer drag events on renderer element
  const dom = renderer.domElement;
  dom.addEventListener('pointerdown', (e) => {
    isDragging = true;
    lastPointerY = e.clientY;
    dom.setPointerCapture(e.pointerId);
    dom.style.cursor = 'grabbing';
  });

  dom.addEventListener('pointermove', (e) => {
    const rect = dom.getBoundingClientRect();
    mouseX = (e.clientX - rect.left) / rect.width - 0.5;
    mouseY = (e.clientY - rect.top) / rect.height - 0.5;

    raycastMouse.x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
    raycastMouse.y = -((e.clientY - rect.top) / rect.height) * 2 + 1;

    if (!isDragging) return;
    const dy = e.clientY - lastPointerY;
    userVelocityZ += dy * 0.006;
    lastPointerY = e.clientY;
  });

  dom.addEventListener('pointerup', (e) => {
    isDragging = false;
    dom.releasePointerCapture(e.pointerId);
    dom.style.cursor = '';
  });

  dom.addEventListener('pointercancel', () => {
    isDragging = false;
    dom.style.cursor = '';
  });

  dom.addEventListener('wheel', (e) => {
    e.preventDefault();
    userVelocityZ += e.deltaY * 0.0025;
  }, { passive: false });

  const raycaster = new THREE.Raycaster();
  let hoveredPanel = null;

  dom.addEventListener('click', () => {
    raycaster.setFromCamera(raycastMouse, camera);
    const intersects = raycaster.intersectObjects(panelMeshes);
    if (intersects.length > 0) {
      const clickedMesh = intersects[0].object;
      const projIdx = clickedMesh.userData.projectIndex;
      openModal(projIdx);
    }
  });

  let isJourneyVisible = false;
  const journeySection = document.getElementById('journey');
  if (journeySection && typeof IntersectionObserver !== 'undefined') {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        isJourneyVisible = entry.isIntersecting;
      });
    }, { threshold: 0.05 });
    observer.observe(journeySection);
  } else {
    isJourneyVisible = true;
  }

  const clock = new THREE.Clock();
  
  function animate() {
    requestAnimationFrame(animate);
    if (!isJourneyVisible) return;

    if (densitySlider) {
      targetSpacing = (100 - parseFloat(densitySlider.value)) * 0.35 + 5;
    }
    currentSpacing += (targetSpacing - currentSpacing) * 0.06;

    const speedVal = speedSlider ? parseFloat(speedSlider.value) : 30;
    const speedMultiplier = speedVal / 30;
    const autoSpeed = autoScrollActive ? (0.05 * speedMultiplier * scrollDirection) : 0;

    userVelocityZ *= 0.93;
    const frameDeltaZ = autoSpeed + userVelocityZ;
    scrollZ += frameDeltaZ;

    const totalSpan = numRings * currentSpacing;
    const startZ = 12;
    const endZ = startZ - totalSpan;

    ringGroups.forEach((ringGroup, r) => {
      const baseZ = -r * currentSpacing;
      const rawZ = baseZ + scrollZ;
      
      let relativeZ = (rawZ - endZ) % totalSpan;
      if (relativeZ < 0) relativeZ += totalSpan;
      const finalZ = endZ + relativeZ;
      
      ringGroup.position.z = finalZ;
    });

    const pPositions = starGeometry.attributes.position.array;
    for (let i = 2; i < pPositions.length; i += 3) {
      pPositions[i] += frameDeltaZ;
      if (pPositions[i] > startZ) {
        pPositions[i] -= totalSpan;
      } else if (pPositions[i] < endZ) {
        pPositions[i] += totalSpan;
      }
    }
    starGeometry.attributes.position.needsUpdate = true;

    raycaster.setFromCamera(raycastMouse, camera);
    const intersects = raycaster.intersectObjects(panelMeshes);
    let currentHovered = null;

    if (intersects.length > 0) {
      currentHovered = intersects[0].object;
    }

    if (hoveredPanel !== currentHovered) {
      if (hoveredPanel) {
        hoveredPanel.scale.set(1, 1, 1);
        if (hoveredPanel.borderLines) {
          hoveredPanel.borderLines.material.opacity = 0.4;
          hoveredPanel.borderLines.material.color.setHex(currentTheme === 'solar' ? 0xffaa00 : 0x7fd1ff);
        }
        hoveredPanel.material.emissive.setHex(0x000000);
        document.body.classList.remove('cursor-active');
      }
      
      hoveredPanel = currentHovered;
      
      if (hoveredPanel) {
        hoveredPanel.scale.set(1.08, 1.08, 1.08);
        if (hoveredPanel.borderLines) {
          hoveredPanel.borderLines.material.opacity = 1.0;
          hoveredPanel.borderLines.material.color.setHex(0xffffff);
        }
        hoveredPanel.material.emissive.setHex(currentTheme === 'solar' ? 0xff8800 : 0x00a2ff);
        hoveredPanel.material.emissiveIntensity = 0.35;
        document.body.classList.add('cursor-active');
      }
    }

    const targetCamX = mouseX * 2.2;
    const targetCamY = -mouseY * 1.8;
    camera.position.x += (targetCamX - camera.position.x) * 0.05;
    camera.position.y += (targetCamY - camera.position.y) * 0.05;
    camera.lookAt(0, 0, -25);

    const elapsedTime = clock.getElapsedTime();
    pointLight1.position.z = -15 + Math.sin(elapsedTime * 0.8) * 8;
    pointLight2.position.z = -45 + Math.cos(elapsedTime * 0.6) * 12;

    renderer.render(scene, camera);
  }

  window.addEventListener('resize', () => {
    const w = container.clientWidth;
    const h = container.clientHeight;
    camera.aspect = w / h;
    camera.updateProjectionMatrix();
    renderer.setSize(w, h);
  });

  animate();
}
