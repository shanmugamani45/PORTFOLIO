// ── Immersive UX Animations, Scrolled Reveals, and Parallax Effects ─────────────────────────────

export function initUIEffects() {
  // Hero Video Control
  const v = document.getElementById('hero');
  const info = document.getElementById('info');

  if (v) {
    v.controls = false;
    v.addEventListener('error', () => {
      console.error('Video failed to load. Check file name, location, or codec support.');
    });

    const videoObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          v.play().catch(e => console.log('Autoplay prevented:', e));
        } else {
          v.pause();
        }
      });
    }, { threshold: 0.1 });

    videoObserver.observe(v);
  }

  // Custom Cursor Interactive States
  document.querySelectorAll('a, button, .portfolio-item, .contact-cta, .proj-modal-close').forEach(el => {
    el.addEventListener('mouseenter', () => document.body.classList.add('cursor-active'));
    el.addEventListener('mouseleave', () => document.body.classList.remove('cursor-active'));
  });

  // Cinematic Preloader Logic
  const preloader = document.getElementById('preloader');
  const preloaderText = document.getElementById('preloader-text');
  let pct = 0;

  if (preloader && preloaderText) {
    const loaderInterval = setInterval(() => {
      pct += Math.floor(Math.random() * 8) + 2;
      if (pct >= 100) {
        pct = 100;
        clearInterval(loaderInterval);
        setTimeout(() => {
          preloader.style.opacity = '0';
          preloader.style.visibility = 'hidden';

          document.getElementById('floating-nav').classList.add('visible');
          if (info) {
            info.classList.add('show');
            info.setAttribute('aria-hidden', 'false');
          }
        }, 400);
      }
      preloaderText.innerHTML = String(pct).padStart(3, '0') + '%';
    }, 45);
  }

  // Initialize Lenis (Smooth Scrolling)
  if (typeof Lenis !== 'undefined') {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t))
    });
    function raf(time) {
      lenis.load = true; // dummy
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
  }

  // Intersection Observer for Scroll Reveals
  const revealObserverOptions = { root: null, rootMargin: '0px', threshold: 0.15 };
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-revealed');
      } else {
        entry.target.classList.remove('is-revealed');
      }
    });
  }, revealObserverOptions);

  document.querySelectorAll('.reveal-section').forEach(sec => revealObserver.observe(sec));

  // 3D Tilt Effect for About Image
  const aboutWrapper = document.getElementById('about-img-wrapper');
  const aboutInner = document.getElementById('about-img-inner');
  const aboutGlare = document.getElementById('about-img-glare');

  if (aboutWrapper && aboutInner && aboutGlare) {
    aboutWrapper.addEventListener('mousemove', (e) => {
      if (aboutWrapper.classList.contains('is-flipped-for-security')) return;
      const rect = aboutWrapper.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      const rotateX = ((y - centerY) / centerY) * -15;
      const rotateY = ((x - centerX) / centerX) * 15;

      aboutInner.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
      aboutInner.style.transition = 'none';

      aboutGlare.style.opacity = '1';
      aboutGlare.style.background = `radial-gradient(circle at ${x}px ${y}px, rgba(255,255,255,0.3), transparent 60%)`;
    });

    aboutWrapper.addEventListener('mouseleave', () => {
      if (aboutWrapper.classList.contains('is-flipped-for-security')) return;
      aboutInner.style.transform = `rotateX(0deg) rotateY(0deg)`;
      aboutInner.style.transition = 'transform 0.5s cubic-bezier(0.25, 1, 0.5, 1)';
      aboutGlare.style.opacity = '0';
      aboutGlare.style.transition = 'opacity 0.5s ease';
    });

    aboutWrapper.addEventListener('mouseenter', () => {
      if (aboutWrapper.classList.contains('is-flipped-for-security')) return;
      aboutInner.style.transition = 'none';
      aboutInner.style.transition = 'none';
      aboutGlare.style.transition = 'none';
    });
  }

  // Hero Particle Background
  initHeroParticles();

  // Hero Re-Animation on Scroll
  const heroSection = document.getElementById('home');
  if (heroSection && info) {
    const heroObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          info.classList.remove('show');
          void info.offsetWidth; // Force reflow
          requestAnimationFrame(() => {
            info.classList.add('show');
            info.setAttribute('aria-hidden', 'false');
          });
        } else {
          info.classList.remove('show');
          info.setAttribute('aria-hidden', 'true');
        }
      });
    }, { threshold: 0.25 });

    heroObserver.observe(heroSection);
  }

  // Scroll Progress Bar
  const scrollProgress = document.getElementById('scroll-progress');
  if (scrollProgress) {
    function updateScrollProgress() {
      const scrollY = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = docHeight > 0 ? (scrollY / docHeight) * 100 : 0;
      scrollProgress.style.width = scrollPercent + '%';
    }
    window.addEventListener('scroll', updateScrollProgress, { passive: true });
    window.addEventListener('resize', updateScrollProgress, { passive: true });
    updateScrollProgress();
  }

  // Settings Modal & Accessibility
  const settingsBtn = document.getElementById('settings-toggle');
  const settingsOverlay = document.getElementById('settings-modal-overlay');
  const settingsClose = document.getElementById('settings-modal-close');
  const checkbox = document.getElementById('settings-accessibility-checkbox');

  if (settingsBtn && settingsOverlay) {
    settingsBtn.addEventListener('click', () => {
      if (checkbox) {
        checkbox.checked = document.body.classList.contains('accessible-mode');
      }
      settingsOverlay.classList.add('active');
      document.body.style.overflow = 'hidden';
    });

    const closeSettings = () => {
      settingsOverlay.classList.remove('active');
      document.body.style.overflow = '';
    };

    if (settingsClose) {
      settingsClose.addEventListener('click', closeSettings);
    }
    
    settingsOverlay.addEventListener('click', (e) => {
      if (e.target === settingsOverlay) closeSettings();
    });

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && settingsOverlay.classList.contains('active')) {
        closeSettings();
      }
    });
  }

  if (checkbox) {
    checkbox.addEventListener('change', () => {
      if (checkbox.checked) {
        document.body.classList.add('accessible-mode');
      } else {
        document.body.classList.remove('accessible-mode');
      }
    });
  }

  // 3D Security Flip
  const aboutImg = document.getElementById('about-img-wrapper');
  const aboutSection = document.getElementById('about');
  if (aboutImg && aboutSection) {
    aboutImg.addEventListener('contextmenu', e => e.preventDefault());
    aboutImg.addEventListener('dragstart', e => e.preventDefault());

    function triggerSecurityFlip() {
      aboutImg.classList.add('is-flipped-for-security');
      
      let overlay = document.getElementById('screenshot-block-overlay');
      if (!overlay) {
        overlay = document.createElement('div');
        overlay.id = 'screenshot-block-overlay';
        overlay.style.cssText = 'position: fixed; top: 32px; left: 50%; transform: translateX(-50%); background: rgba(15, 17, 23, 0.85); backdrop-filter: blur(24px); -webkit-backdrop-filter: blur(24px); color: #fff; padding: 16px 28px; border-radius: 16px; font-family: "Poppins", sans-serif; z-index: 999999; pointer-events: none; box-shadow: 0 20px 40px rgba(0,0,0,0.8), 0 0 30px rgba(255, 74, 74, 0.25); border: 1px solid rgba(255, 74, 74, 0.4); display: flex; align-items: center; gap: 16px; transition: all 0.4s cubic-bezier(0.25, 1, 0.5, 1);';
        overlay.innerHTML = `
          <div style="display: flex; align-items: center; justify-content: center; width: 40px; height: 40px; border-radius: 12px; background: rgba(255, 74, 74, 0.15); border: 1px solid rgba(255, 74, 74, 0.3); color: #ff4a4a; flex-shrink: 0;">
            <svg viewBox="0 0 24 24" width="22" height="22" stroke="currentColor" stroke-width="2" fill="none">
              <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
              <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
            </svg>
          </div>
          <div style="text-align: left;">
            <div style="font-size: 0.95rem; font-weight: 700; letter-spacing: 0.05em; color: #ffffff;">Screen Capture Protected</div>
            <div style="font-size: 0.75rem; font-weight: 400; color: #8da4c0; margin-top: 2px;">About Me photo hidden for privacy</div>
          </div>
        `;
        document.body.appendChild(overlay);
      }
    }

    function restoreSecurityFlip() {
      aboutImg.classList.remove('is-flipped-for-security');
      const overlay = document.getElementById('screenshot-block-overlay');
      if (overlay) overlay.remove();
    }

    window.addEventListener('keydown', (e) => {
      const isSecurityTrigger = 
        e.key === 'PrintScreen' || 
        e.key === 'Meta' || e.metaKey ||
        e.key === 'Alt' || e.altKey ||
        (e.ctrlKey && ['p', 'P', 's', 'S', 'c', 'C'].includes(e.key));

      if (isSecurityTrigger) {
        triggerSecurityFlip();
      }
    });

    window.addEventListener('keyup', () => {
      if (document.hasFocus()) {
        setTimeout(restoreSecurityFlip, 500);
      }
    });

    window.addEventListener('blur', () => {
      const rect = aboutSection.getBoundingClientRect();
      const isInViewport = rect.top < window.innerHeight && rect.bottom > 0;
      if (isInViewport) {
        triggerSecurityFlip();
      }
    });

    window.addEventListener('focus', () => {
      setTimeout(restoreSecurityFlip, 500);
    });
  }

  // Hero Viewport Scale-down
  const frame = document.querySelector('.frame');
  if (frame) {
    function handleHeroScroll() {
      const scrollY = window.scrollY;
      const viewportHeight = window.innerHeight;
      const progress = Math.min(scrollY / viewportHeight, 1);
      
      const scale = 1 - (progress * 0.08);
      const radius = progress * 24;
      const borderOpacity = progress * 0.15;
      const shadowOpacity = progress * 0.85;
      const translate = progress * 60;

      frame.style.setProperty('--hero-scale', scale);
      frame.style.setProperty('--hero-translate', `${translate}px`);
      frame.style.setProperty('--hero-radius', `${radius}px`);
      frame.style.setProperty('--hero-border', borderOpacity);
      frame.style.setProperty('--hero-shadow', shadowOpacity);

      if (info) {
        const infoTranslate = scrollY * 0.38;
        info.style.setProperty('--info-translate', `${infoTranslate}px`);
      }
    }
    window.addEventListener('scroll', handleHeroScroll, { passive: true });
    handleHeroScroll();
  }

  // Card Spotlight
  function updateCardSpotlight(e) {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    card.style.setProperty('--mouse-x', `${x}px`);
    card.style.setProperty('--mouse-y', `${y}px`);
  }

  function initCardSpotlights() {
    const cards = document.querySelectorAll('.portfolio-item, .cert-card, .faq-item');
    cards.forEach(card => {
      card.style.setProperty('--mouse-x', '50%');
      card.style.setProperty('--mouse-y', '50%');
      card.addEventListener('mousemove', updateCardSpotlight, { passive: true });
    });
  }
  initCardSpotlights();

  // Magnetic Button Effect
  function initMagneticButtons() {
    const selectButtons = document.querySelectorAll('.filter-btn, .floating-nav a, .footer-flip-trigger, .accessibility-toggle, .footer-social-link');
    selectButtons.forEach(btn => {
      btn.style.transition = 'transform 0.25s cubic-bezier(0.25, 1, 0.5, 1), box-shadow 0.3s ease, background-color 0.3s ease';
      btn.style.transformStyle = 'preserve-3d';
      
      btn.addEventListener('mousemove', (e) => {
        const rect = btn.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;
        const pullX = (x / rect.width) * 16;
        const pullY = (y / rect.height) * 16;
        btn.style.transform = `translate(${pullX}px, ${pullY}px) scale(1.04)`;
      });
      
      btn.addEventListener('mouseleave', () => {
        btn.style.transform = 'translate(0px, 0px) scale(1)';
      });
    });
  }
  initMagneticButtons();

  // Footer Card Flip Effect
  const footerFlipCard = document.getElementById('footer-flip-card');
  const footerFlipTrigger = document.getElementById('footer-flip-trigger');
  const footerFlipClose = document.getElementById('footer-flip-close');
  
  if (footerFlipCard) {
    if (footerFlipTrigger) {
      footerFlipTrigger.addEventListener('click', () => {
        footerFlipCard.classList.add('is-flipped');
      });
    }
    if (footerFlipClose) {
      footerFlipClose.addEventListener('click', () => {
        footerFlipCard.classList.remove('is-flipped');
      });
    }
  }
}

function initHeroParticles() {
  const canvas = document.getElementById('hero-particles');
  if (!canvas || typeof THREE === 'undefined') return;

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
  const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true });
  
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

  // Particles
  const particlesCount = 300;
  const posArray = new Float32Array(particlesCount * 3);

  for(let i = 0; i < particlesCount * 3; i++) {
    posArray[i] = (Math.random() - 0.5) * 15;
  }

  const particlesGeometry = new THREE.BufferGeometry();
  particlesGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3));

  // Custom circular particle material
  const canvasTexture = document.createElement('canvas');
  canvasTexture.width = 16;
  canvasTexture.height = 16;
  const context = canvasTexture.getContext('2d');
  const gradient = context.createRadialGradient(8, 8, 0, 8, 8, 8);
  gradient.addColorStop(0, 'rgba(127,209,255,1)');
  gradient.addColorStop(1, 'rgba(127,209,255,0)');
  context.fillStyle = gradient;
  context.fillRect(0, 0, 16, 16);
  const texture = new THREE.CanvasTexture(canvasTexture);

  const particlesMaterial = new THREE.PointsMaterial({
    size: 0.12,
    map: texture,
    transparent: true,
    opacity: 0.7,
    blending: THREE.AdditiveBlending,
    depthWrite: false
  });

  const particlesMesh = new THREE.Points(particlesGeometry, particlesMaterial);
  scene.add(particlesMesh);

  camera.position.z = 5;

  let mouseX = 0;
  let mouseY = 0;
  let targetX = 0;
  let targetY = 0;

  document.addEventListener('mousemove', (event) => {
    mouseX = (event.clientX / window.innerWidth) * 2 - 1;
    mouseY = -(event.clientY / window.innerHeight) * 2 + 1;
  });

  window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
  });

  const clock = new THREE.Clock();

  function animate() {
    requestAnimationFrame(animate);
    const elapsedTime = clock.getElapsedTime();

    particlesMesh.rotation.y = elapsedTime * 0.05;
    particlesMesh.rotation.x = elapsedTime * 0.02;

    targetX = mouseX * 0.5;
    targetY = mouseY * 0.5;
    
    particlesMesh.position.x += (targetX - particlesMesh.position.x) * 0.05;
    particlesMesh.position.y += (targetY - particlesMesh.position.y) * 0.05;

    renderer.render(scene, camera);
  }

  animate();
}
