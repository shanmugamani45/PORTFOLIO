// ── Projects and Certificates Modals Registry & Controller ───────────────────────────────────

export const PROJECTS = [
  {
    title: 'Online Learning Platform', category: 'Full Stack / EdTech',
    year: '2025', status: 'Live', type: 'Web',
    desc: 'A digital, web-based environment designed to facilitate, manage, and deliver educational content to learners — breaking geographical barriers and offering flexible, self-paced or instructor-led learning experiences. Built with a Flask/Node.js backend, Neon database, and deployed on Render.',
    tech: [
      { name: 'HTML', icon: 'public/icons/html5.webp' },
      { name: 'CSS', icon: 'public/icons/css3.webp' },
      { name: 'JavaScript', icon: 'public/icons/javascript.webp' },
      { name: 'Python / Flask', icon: 'public/icons/python.webp' },
      { name: 'Node.js', icon: 'public/icons/nodejs.webp' },
      { name: 'PostgreSQL', icon: 'public/icons/postgresql.webp' }
    ],
    demo: 'https://online-learning-platfrom-k6d6.onrender.com/',
    github: 'https://github.com/shanmugamani45/ONLINE-LEARNING-PLATFROM-FRONT-END-BACK-END-.git',
    screenshot: null,
    screenshots: [
      'public/images/olp-1.webp',
      'public/images/olp-2.webp',
      'public/images/olp-3.webp'
    ]
  },
  {
    title: 'Spatial Interaction Workspace', category: '3D / Gesture / WebGL',
    year: '2025', status: 'Live', type: '3D',
    desc: 'Web-based 3D workspace using Three.js and MediaPipe, enabling real-time gesture-based object manipulation and scene building. Features hand tracking for intuitive 3D control — move, rotate, scale and combine shapes with natural gestures.',
    tech: [
      { name: 'HTML/CSS/JS', icon: 'public/icons/html5.webp' },
      { name: 'Three.js', icon: 'public/icons/threejs.webp' },
      { name: 'MediaPipe', icon: 'public/icons/python.webp' },
      { name: 'Tailwind CSS', icon: 'public/icons/tailwindcss.webp' }
    ],
    demo: 'https://spatial-interaction-workspace.vercel.app/',
    github: 'https://github.com/shanmugamani45/spatial-interaction-workspace.git',
    screenshot: null,
    screenshots: [
      'public/images/siw-1.webp',
      'public/images/siw-2.webp'
    ]
  },
  {
    title: 'Gesture Detection Text-to-Speech', category: 'AI / Computer Vision',
    year: '2025', status: 'Live', type: 'App',
    desc: 'Detects hand gestures in real time using a webcam and converts them into text and speech. Uses Python, OpenCV, and deep learning (TensorFlow/Keras) to recognise sign language gestures — bridging communication gaps with AI-powered accessibility.',
    tech: [
      { name: 'Python', icon: 'public/icons/python.webp' },
      { name: 'OpenCV', icon: 'public/icons/python.webp' },
      { name: 'MediaPipe', icon: 'public/icons/python.webp' },
      { name: 'TensorFlow', icon: 'public/icons/python.webp' },
      { name: 'Tkinter', icon: 'public/icons/python.webp' },
      { name: 'pyttsx3', icon: 'public/icons/python.webp' }
    ],
    demo: null,
    video: 'public/videos/gesture-demo.mp4',
    github: 'https://github.com/shanmugamani45/Gesture_detection_Text_to_Speech.git',
    screenshot: null,
    screenshots: ['public/images/gesture-detection.webp']
  },
  {
    title: 'AI Fitness Chatbot', category: 'Full Stack / AI / LLM',
    year: '2025', status: 'Live', type: 'App',
    desc: 'Full-stack AI fitness chatbot built with FastAPI and React, delivering personalised workout plans, diet tips, and real-time LLM-powered conversations. Powered by Groq / Gemini LLM API with a clean chat interface deployed on Vercel + Render.',
    tech: [
      { name: 'React + Vite', icon: 'public/icons/react.webp' },
      { name: 'FastAPI', icon: 'public/icons/python.webp' },
      { name: 'Groq / Gemini', icon: 'public/icons/python.webp' },
      { name: 'Vercel', icon: 'public/icons/nextjs.webp' }
    ],
    demo: 'https://ai-fitness-chatbot-version-2.vercel.app',
    github: 'https://github.com/shanmugamani45/ai-fitness-chatbot.git',
    screenshot: null,
    screenshots: [
      'public/images/fitbot-1.webp',
      'public/images/fitbot-2.webp',
      'public/images/fitbot-3.webp'
    ]
  },
  {
    title: 'FDIA Medical Security System', category: 'ML / Cybersecurity',
    year: '2025', status: 'Live', type: 'App',
    desc: 'Machine learning-based solution to detect and classify False Data Injection Attacks (FDIA) in medical sensor data. Uses XGBoost and Scikit-learn to identify malicious injections with 98.4% accuracy, protecting patient data integrity in real time.',
    tech: [
      { name: 'Python', icon: 'public/icons/python.webp' },
      { name: 'Flask', icon: 'public/icons/python.webp' },
      { name: 'Scikit-learn', icon: 'public/icons/python.webp' },
      { name: 'XGBoost', icon: 'public/icons/python.webp' },
      { name: 'Pandas / NumPy', icon: 'public/icons/python.webp' },
      { name: 'Matplotlib', icon: 'public/icons/python.webp' }
    ],
    demo: 'https://fdia-medical-security-system.onrender.com/',
    github: 'https://github.com/shanmugamani45/FDIA-Medical-Security-System.git',
    screenshot: null,
    screenshots: [
      'public/images/fdia-1.webp',
      'public/images/fdia-2.webp',
      'public/images/fdia-3.webp'
    ]
  },
  {
    title: 'VORA AI FITNESS APP', category: 'AI / Full Stack / Fitness',
    year: '2025', status: 'Live', type: 'Web App',
    desc: 'VORA AI Fitness App is an AI-based fitness application that helps users track workouts, monitor fitness activities, and improve their health using smart recommendations. The app uses modern web technologies and AI features to provide a simple and interactive fitness experience for users.',
    tech: [
      { name: 'React', icon: 'public/icons/react.webp' },
      { name: 'Node.js / Express', icon: 'public/icons/nodejs.webp' },
      { name: 'Python / Flask', icon: 'public/icons/python.webp' },
      { name: 'TensorFlow / OpenCV', icon: 'public/icons/python.webp' },
      { name: 'MongoDB', icon: 'public/icons/mongodb.webp' },
      { name: 'HTML / CSS / JS', icon: 'public/icons/html5.webp' }
    ],
    demo: 'https://vorafitnessai.netlify.app/',
    github: 'https://github.com/shanmugamani45/VORA-AI-FITNESS-APP.git',
    screenshot: null,
    screenshots: [
      'public/images/vora-1.webp',
      'public/images/vora-2.webp'
    ]
  },
  {
    title: 'EFPL Desktop IDE', category: 'AI / Desktop IDE / Python',
    year: '2025', status: 'Live', type: 'Desktop App',
    desc: 'EFPL is a powerful, lightweight, and modern scripting environment designed for simplicity and performance. This IDE provides a complete ecosystem for writing, testing, and visualizing EFPL scripts.',
    tech: [
      { name: 'AI / ML Concepts', icon: 'public/icons/python.webp' },
      { name: 'Python', icon: 'public/icons/python.webp' },
      { name: 'Tkinter', icon: 'public/icons/python.webp' },
      { name: 'SQLite', icon: 'public/icons/postgresql.webp' },
      { name: 'OpenCV', icon: 'public/icons/python.webp' },
      { name: 'MediaPipe', icon: 'public/icons/python.webp' },
      { name: 'NumPy', icon: 'public/icons/python.webp' }
    ],
    demo: null, github: 'https://github.com/shanmugamani45/EFPL_VERSION_1.git', screenshot: 'public/images/efpl_ide_screenshot.webp', screenshots: ['public/images/efpl_ide_screenshot.webp']
  },
  {
    title: 'Web3 Wallet Interface', category: 'Frontend / Blockchain',
    year: '2024', status: 'Concept', type: 'Web3',
    desc: 'A sleek, modern interface for a cryptocurrency wallet. Designed with a focus on usability and security, allowing users to easily manage their digital assets.',
    tech: [
      { name: 'Next.js', icon: 'public/icons/nextjs.webp' },
      { name: 'TypeScript', icon: 'public/icons/typescript.webp' },
      { name: 'Tailwind CSS', icon: 'public/icons/tailwindcss.webp' }
    ],
    demo: '#', github: '#', screenshot: null
  },
  {
    title: 'POWERBI-Finance-Dashboard', category: 'Data Analytics / Dashboard',
    year: '2025', status: 'Completed', type: 'Analytics',
    desc: 'The dashboards help convert raw data into meaningful insights using charts, graphs, KPIs, and reports. These projects include data cleaning, data transformation, DAX calculations, and interactive visualizations to understand business performance and trends.',
    tech: [
      { name: 'Power BI', icon: 'public/icons/powerbi.svg' },
      { name: 'Power Query', icon: 'public/icons/powerquery.svg' },
      { name: 'DAX', icon: 'public/icons/dax.svg' },
      { name: 'Excel', icon: 'public/icons/excel.svg' }
    ],
    demo: null,
    github: 'https://github.com/shanmugamani45/POWERBI-Finance-Dashboard.git',
    screenshot: null,
    screenshots: [
      'public/images/powerbi-finance-1.webp',
      'public/images/powerbi-finance-2.webp',
      'public/images/powerbi-finance-3.webp'
    ]
  }
];

const overlay = document.getElementById('proj-modal-overlay');
const elCat = document.getElementById('modal-category');
const elNum = document.getElementById('modal-num');
const elTitle = document.getElementById('modal-title');
const elDesc = document.getElementById('modal-desc');
const elTech = document.getElementById('modal-tech');
const elLinks = document.getElementById('modal-links');
const elShot = document.getElementById('modal-screenshot');
const elYear = document.getElementById('stat-year');
const elStatus = document.getElementById('stat-status');
const elType = document.getElementById('stat-type');

const certOverlay = document.getElementById('cert-modal-overlay');
const certBody = document.getElementById('cert-modal-body');
const certTitle = document.getElementById('cert-modal-title');

export function openModal(idx) {
  const p = PROJECTS[idx];
  if (!p) return;
  const total = String(PROJECTS.length).padStart(2, '0');
  const num = String(idx + 1).padStart(2, '0');

  // Header
  elCat.textContent = p.category;
  elNum.textContent = `${num} / ${total}`;
  elTitle.textContent = p.title;
  elDesc.textContent = p.desc;

  // Stats
  elYear.textContent = p.year;
  elStatus.textContent = p.status;
  elType.textContent = p.type;

  // Tech pills with stagger fade-in
  elTech.innerHTML = '';
  p.tech.forEach((t, i) => {
    const pill = document.createElement('span');
    pill.className = 'proj-tech-pill';
    pill.innerHTML = `<img src="${t.icon}" alt="${t.name}"><span>${t.name}</span>`;
    pill.style.opacity = '0';
    pill.style.transform = 'translateY(8px)';
    pill.style.transition = `opacity 0.3s ease ${i * 60}ms, transform 0.3s ease ${i * 60}ms`;
    elTech.appendChild(pill);
    requestAnimationFrame(() => requestAnimationFrame(() => {
      pill.style.opacity = '1';
      pill.style.transform = 'translateY(0)';
    }));
  });

  // Screenshot / Carousel
  elShot.className = '';
  elShot.innerHTML = '';

  const shots = p.screenshots && p.screenshots.length ? p.screenshots : (p.screenshot ? [p.screenshot] : []);

  if (shots.length > 1) {
    let curSlide = 0;

    const carousel = document.createElement('div');
    carousel.className = 'proj-carousel';

    const track = document.createElement('div');
    track.className = 'proj-carousel-track';
    track.style.width = `${shots.length * 100}%`;
    shots.forEach((src, i) => {
      const slide = document.createElement('div');
      slide.className = 'proj-carousel-slide';
      slide.style.width = `${100 / shots.length}%`;
      slide.innerHTML = `<img src="${src}" alt="${p.title} screenshot ${i + 1}" loading="lazy" decoding="async" style="width:100%;height:100%;object-fit:contain;display:block;">`;
      track.appendChild(slide);
    });
    carousel.appendChild(track);

    const prevBtn = document.createElement('button');
    prevBtn.className = 'proj-carousel-btn proj-carousel-prev';
    prevBtn.setAttribute('aria-label', 'Previous screenshot');
    prevBtn.innerHTML = `<svg viewBox="0 0 24 24"><polyline points="15 18 9 12 15 6"/></svg>`;
    carousel.appendChild(prevBtn);

    const nextBtn = document.createElement('button');
    nextBtn.className = 'proj-carousel-btn proj-carousel-next';
    nextBtn.setAttribute('aria-label', 'Next screenshot');
    nextBtn.innerHTML = `<svg viewBox="0 0 24 24"><polyline points="9 18 15 12 9 6"/></svg>`;
    carousel.appendChild(nextBtn);

    elShot.appendChild(carousel);

    const dotsRow = document.createElement('div');
    dotsRow.className = 'proj-carousel-dots';
    const dots = shots.map((_, i) => {
      const d = document.createElement('div');
      d.className = 'proj-carousel-dot' + (i === 0 ? ' active' : '');
      d.addEventListener('click', () => goTo(i));
      dotsRow.appendChild(d);
      return d;
    });
    elShot.appendChild(dotsRow);

    function goTo(idx) {
      curSlide = (idx + shots.length) % shots.length;
      const pct = curSlide * (100 / shots.length);
      track.style.transform = `translateX(-${pct}%)`;
      dots.forEach((d, i) => d.classList.toggle('active', i === curSlide));
    }

    prevBtn.addEventListener('click', () => goTo(curSlide - 1));
    nextBtn.addEventListener('click', () => goTo(curSlide + 1));

  } else if (shots.length === 1) {
    elShot.className = '';
    elShot.innerHTML = `<img src="${shots[0]}" alt="${p.title} screenshot" loading="lazy" decoding="async" style="width:100%;border-radius:18px;aspect-ratio:16/10;object-fit:contain;display:block;border:1px solid rgba(255,255,255,0.07);">`;
  } else {
    elShot.className = 'proj-screenshot-placeholder';
    elShot.innerHTML = `
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4">
        <rect x="3" y="3" width="18" height="18" rx="2"/>
        <circle cx="8.5" cy="8.5" r="1.5"/>
        <polyline points="21 15 16 10 5 21"/>
      </svg>
      <span>Screenshot Coming Soon</span>`;
  }

  let demoBtn = '';
  if (p.video) {
    demoBtn = `<button class="proj-link-btn primary" onclick="openCert('${p.video}', '${p.title}')">
        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
        Live Demo
      </button>`;
  } else if (p.demo && p.demo !== '#') {
    demoBtn = `<a href="${p.demo}" class="proj-link-btn primary" target="_blank">
        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
        Live Demo
      </a>`;
  }

  const ghBtn = (p.github && p.github !== '#')
    ? `<a href="${p.github}" class="proj-link-btn secondary" target="_blank">
        <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/></svg>
        GitHub
      </a>` : '';
  elLinks.innerHTML = demoBtn + ghBtn;

  // Bind cursor states to the dynamically injected close/link buttons
  if (window.bindCursorActive) {
    window.bindCursorActive(elLinks.querySelectorAll('.proj-link-btn'));
  }

  const anims = [
    elCat.parentElement, elTitle, elDesc, elShot,
    elYear.parentElement, elStatus.parentElement, elType.parentElement, elLinks
  ];
  anims.forEach((el, i) => {
    if (!el) return;
    el.style.opacity = '0';
    el.style.transform = 'translateY(12px)';
    el.style.transition = `opacity 0.45s ease ${i * 40 + 100}ms, transform 0.45s ease ${i * 40 + 100}ms`;
    requestAnimationFrame(() => requestAnimationFrame(() => {
      el.style.opacity = '1';
      el.style.transform = 'translateY(0)';
    }));
  });

  overlay.classList.add('open');
  document.body.style.overflow = 'hidden';

  const m = document.getElementById('proj-modal');
  m.style.transition = 'transform 0.5s cubic-bezier(0.34,1.56,0.64,1), box-shadow 0.4s';
  setTimeout(() => {
    if (overlay.classList.contains('open')) {
      m.style.transition = 'transform 0.1s ease-out, box-shadow 0.1s ease-out';
    }
  }, 500);
}

export function closeModal() {
  const m = document.getElementById('proj-modal');
  if (!m) return;
  m.style.transition = 'transform 0.4s ease-in, box-shadow 0.4s';
  m.style.setProperty('--tilt-x', '0deg');
  m.style.setProperty('--tilt-y', '0deg');
  m.style.setProperty('--tilt-x-num', 0);
  m.style.setProperty('--tilt-y-num', 0);

  overlay.classList.remove('open');
  document.body.style.overflow = '';
}

export function openCert(url, title) {
  certTitle.textContent = title || 'Preview';
  certBody.innerHTML = ''; // Clear previous content

  const urlLower = url.toLowerCase();
  const isImage = urlLower.endsWith('.jpeg') || urlLower.endsWith('.jpg') || urlLower.endsWith('.png') || urlLower.endsWith('.webp') || urlLower.endsWith('.gif') || urlLower.endsWith('.svg');
  const isVideo = urlLower.endsWith('.mp4') || urlLower.endsWith('.webm');
  
  const encodedUrl = encodeURI(url);
  
  if (isImage) {
    const img = document.createElement('img');
    img.src = encodedUrl;
    img.className = 'cert-img-preview';
    img.loading = 'lazy';
    img.decoding = 'async';
    img.style.width = '100%';
    img.style.height = '100%';
    img.style.objectFit = 'contain';
    certBody.appendChild(img);
  } else if (isVideo) {
    const video = document.createElement('video');
    video.src = encodedUrl;
    video.controls = true;
    video.autoplay = true;
    video.className = 'cert-video-preview';
    video.style.width = '100%';
    video.style.height = '100%';
    video.style.background = '#000';
    certBody.appendChild(video);
  } else {
    const iframe = document.createElement('iframe');
    iframe.src = encodedUrl;
    iframe.className = 'cert-iframe';
    certBody.appendChild(iframe);

    // Fallback/Open in New Tab overlay button for PDF preview issues
    const fallbackDiv = document.createElement('div');
    fallbackDiv.className = 'cert-pdf-fallback';
    fallbackDiv.style.position = 'absolute';
    fallbackDiv.style.bottom = '30px';
    fallbackDiv.style.left = '50%';
    fallbackDiv.style.transform = 'translateX(-50%)';
    fallbackDiv.style.zIndex = '10';
    fallbackDiv.style.background = 'rgba(10, 10, 15, 0.85)';
    fallbackDiv.style.border = '1px solid rgba(127, 209, 255, 0.25)';
    fallbackDiv.style.padding = '10px 20px';
    fallbackDiv.style.borderRadius = '99px';
    fallbackDiv.style.backdropFilter = 'blur(12px)';
    fallbackDiv.style.boxShadow = '0 10px 30px rgba(0,0,0,0.5)';
    
    const fallbackLink = document.createElement('a');
    fallbackLink.href = encodedUrl;
    fallbackLink.target = '_blank';
    fallbackLink.style.color = '#7fd1ff';
    fallbackLink.style.textDecoration = 'none';
    fallbackLink.style.fontSize = '0.85rem';
    fallbackLink.style.fontWeight = '600';
    fallbackLink.style.display = 'flex';
    fallbackLink.style.alignItems = 'center';
    fallbackLink.style.gap = '8px';
    fallbackLink.innerHTML = `
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" style="flex-shrink:0;">
        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
        <polyline points="15 3 21 3 21 9"/>
        <line x1="10" y1="14" x2="21" y2="3"/>
      </svg>
      Open PDF in New Tab
    `;
    
    fallbackDiv.appendChild(fallbackLink);
    certBody.appendChild(fallbackDiv);
    
    if (window.bindCursorActive) {
      window.bindCursorActive([fallbackLink]);
    }
  }

  certOverlay.classList.add('active');
  document.body.style.overflow = 'hidden'; // Prevent scroll
}

// Make openCert globally accessible on window for dynamic HTML clicks
window.openCert = openCert;

export function closeCert() {
  certOverlay.classList.remove('active');
  certBody.innerHTML = '';
  document.body.style.overflow = '';
}

export function initModals() {
  const closeBtn = document.getElementById('proj-modal-close');
  if (closeBtn) closeBtn.addEventListener('click', closeModal);
  if (overlay) overlay.addEventListener('click', e => { if (e.target === overlay) closeModal(); });
  document.addEventListener('keydown', e => { if (e.key === 'Escape') closeModal(); });

  // Open on card click
  document.querySelectorAll('.portfolio-item[data-project]').forEach(card => {
    card.addEventListener('click', () => openModal(+card.dataset.project));
  });

  // Modal 3D Parallax & Spotlight tracking
  document.addEventListener('mousemove', (e) => {
    if (!overlay.classList.contains('open')) return;
    const m = document.getElementById('proj-modal');
    if (!m) return;
    const rect = m.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    m.style.setProperty('--mouse-x', `${x}px`);
    m.style.setProperty('--mouse-y', `${y}px`);

    const cx = rect.width / 2;
    const cy = rect.height / 2;
    const tiltX = ((y - cy) / cy) * -2.5; // max 2.5 degrees tilt
    const tiltY = ((x - cx) / cx) * 2.5;

    m.style.setProperty('--tilt-x-num', tiltX);
    m.style.setProperty('--tilt-y-num', tiltY);
    m.style.setProperty('--tilt-x', `${tiltX}deg`);
    m.style.setProperty('--tilt-y', `${tiltY}deg`);
  });

  // All Works Toggle
  const allWorksBtn = document.getElementById('all-works-btn');

  // Category Filter Tabs
  const filterBar = document.getElementById('filter-bar');
  if (filterBar) {
    let activeFilter = 'all';

    filterBar.addEventListener('click', e => {
      const btn = e.target.closest('.filter-btn');
      if (!btn) return;

      const filter = btn.dataset.filter;
      if (filter === activeFilter) return;
      activeFilter = filter;

      // Update active state
      filterBar.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      // Filter cards
      const allCards = document.querySelectorAll('.portfolio-item[data-project]');
      allCards.forEach((card, idx) => {
        const cardFilters = (card.dataset.filter || '').split(' ');
        const matches = filter === 'all' || cardFilters.includes(filter);

        if (matches) {
          card.classList.remove('filter-hidden');
          if (filter !== 'all') {
            card.classList.remove('hidden-project');
          } else {
            // Restore hidden-project state based on allWorksBtn text
            const isAllShown = allWorksBtn && allWorksBtn.innerHTML === 'Show Less';
            if (!isAllShown && idx >= 6) {
              card.classList.add('hidden-project');
            }
          }
        } else {
          card.classList.add('filter-hidden');
        }
      });

      // Hide/Show All Works button based on active filter category
      if (allWorksBtn) {
        if (filter !== 'all') {
          allWorksBtn.style.display = 'none';
        } else {
          allWorksBtn.style.display = '';
        }
      }
    });
  }

  if (allWorksBtn) {
    allWorksBtn.addEventListener('click', () => {
      const hiddenProjects = document.querySelectorAll('.portfolio-item.hidden-project');
      if (hiddenProjects.length > 0) {
        hiddenProjects.forEach(p => {
          p.classList.remove('hidden-project');
          p.style.opacity = '0';
          p.style.transform = 'translateY(20px)';
          requestAnimationFrame(() => {
            p.style.transition = 'all 0.6s cubic-bezier(0.34, 1.56, 0.64, 1)';
            p.style.opacity = '1';
            p.style.transform = 'translateY(0)';
          });
        });
        allWorksBtn.innerHTML = 'Show Less';
      } else {
        const allItems = document.querySelectorAll('.portfolio-item[data-project]');
        allItems.forEach((item, index) => {
          if (index >= 6) {
            item.classList.add('hidden-project');
          }
        });
        allWorksBtn.innerHTML = 'All Works';
        document.getElementById('projects').scrollIntoView({ behavior: 'smooth' });
      }
    });
  }

  // Certificate Modal close bindings
  const certClose = document.getElementById('cert-modal-close');
  if (certClose) certClose.addEventListener('click', closeCert);
  if (certOverlay) {
    certOverlay.addEventListener('click', (e) => {
      if (e.target === certOverlay) closeCert();
    });
  }

  // Intercept Certificate View clicks
  document.addEventListener('click', (e) => {
    const link = e.target.closest('.cert-link');
    if (link) {
      e.preventDefault();
      const url = link.getAttribute('href');
      const card = link.closest('.cert-card');
      const title = card ? card.querySelector('.cert-title').textContent : 'Certificate';
      openCert(url, title);
    }
  });

  // Certificate Filtering
  const certFilterBar = document.getElementById('cert-filter-bar');
  if (certFilterBar) {
    let activeCertFilter = 'all';
    
    certFilterBar.addEventListener('click', e => {
      const btn = e.target.closest('.cert-filter-btn');
      if (!btn) return;
      
      const filter = btn.dataset.filter;
      if (filter === activeCertFilter) return;
      activeCertFilter = filter;
      
      certFilterBar.querySelectorAll('.cert-filter-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      
      const allCerts = document.querySelectorAll('.cert-card');
      allCerts.forEach(card => {
        if (filter === 'all' || card.dataset.category === filter) {
          card.classList.remove('filter-hidden');
        } else {
          card.classList.add('filter-hidden');
        }
      });
    });
  }
}
