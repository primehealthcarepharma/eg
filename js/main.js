const productGrid      = document.getElementById('productGrid');
const teamGrid         = document.getElementById('teamGrid');
const branchGrid       = document.getElementById('branchGrid');
const faqGrid          = document.getElementById('faqGrid');
const categoriesGrid   = document.getElementById('categoriesGrid');
const partnerGrid      = document.getElementById('partnerGrid');
const servicesGrid     = document.getElementById('servicesGrid');
const whyGrid          = document.getElementById('whyGrid');
const aboutGrid        = document.getElementById('aboutGrid');
const missionGrid      = document.getElementById('missionGrid');
const productSearch    = document.getElementById('productSearch');
const scrollTopBtn     = document.getElementById('scrollTopBtn');
const themeToggle      = document.getElementById('themeToggle');
const mobileMenuToggle = document.getElementById('mobileMenuToggle');
const navbar           = document.getElementById('navbar');

/* ── Products ─────────────────────────────────────────────── */
const renderProducts = (items, limit) => {
  if (!productGrid) return;
  const list = typeof limit === 'number' ? items.slice(0, limit) : items;
  productGrid.innerHTML = list.map((p) => `
    <article class="card product-card" data-aos="fade-up">
      <img src="${p.image}" alt="${p.name}" loading="lazy"
           onerror="this.src='https://via.placeholder.com/500x220?text=Product+Image'" />
      <div>
        <h3>${p.name}</h3>
        <p>${p.description}</p>
        <span class="category-tag">${p.category}</span>
      </div>
    </article>
  `).join('');
};

/* ── Team ──────────────────────────────────────────────────── */
const renderTeam = () => {
  if (!teamGrid) return;
  teamGrid.innerHTML = leadership.map((m) => `
    <article class="card team-card" data-aos="fade-up">
      <img src="${m.image}" alt="${m.name}" loading="lazy"
           onerror="this.src='https://via.placeholder.com/450x340?text=Leader'" />
      <div>
        <h3>${m.name}</h3>
        <p><strong>${m.position}</strong></p>
        <p>${m.bio}</p>
        <a href="leader.html?leader=${m.slug}" class="btn btn-secondary">See info</a>
      </div>
    </article>
  `).join('');
};

/* ── Branches (from SITE_CONFIG) ───────────────────────────── */
const renderBranches = () => {
  if (!branchGrid || !SITE_CONFIG) return;
  branchGrid.innerHTML = SITE_CONFIG.branches.map((b) => `
    <article class="branch-card" data-aos="fade-up">
      <h3>${b.name}</h3>
      <p>${b.address}</p>
      <p>Phone: <a href="tel:${b.phone}">${b.phone}</a></p>
      <p><a href="${b.map}" target="_blank" rel="noreferrer">View on Google Maps</a></p>
    </article>
  `).join('');
};

/* ── About cards (from SITE_CONFIG) ───────────────────────── */
const renderAbout = () => {
  if (!aboutGrid || !SITE_CONFIG) return;
  aboutGrid.innerHTML = SITE_CONFIG.about.cards.map((c) => `
    <article class="card" data-aos="fade-up">
      <h3>${c.heading}</h3>
      <p>${c.text}</p>
    </article>
  `).join('');
};

/* ── Mission cards (from SITE_CONFIG) ─────────────────────── */
const renderMission = () => {
  if (!missionGrid || !SITE_CONFIG) return;
  const aosList = ['fade-right', 'zoom-in', 'fade-left'];
  missionGrid.innerHTML = SITE_CONFIG.mission.cards.map((c, i) => `
    <article class="feature-card" data-aos="${aosList[i] || 'fade-up'}">
      <h3>${c.heading}</h3>
      ${c.listItems
        ? `<ul>${c.listItems.map((li) => `<li>${li}</li>`).join('')}</ul>`
        : `<p>${c.text}</p>`}
    </article>
  `).join('');
};

/* ── Services (from SITE_CONFIG, no emoji) ─────────────────── */
const renderServices = () => {
  if (!servicesGrid || !SITE_CONFIG) return;
  servicesGrid.innerHTML = SITE_CONFIG.services.map((s, i) => `
    <article class="service-card" data-aos="fade-up" data-aos-delay="${i * 50}">
      <h3>${s.title}</h3>
      <p>${s.desc}</p>
    </article>
  `).join('');
};

/* ── Why Us (from SITE_CONFIG) ─────────────────────────────── */
const renderWhyUs = () => {
  if (!whyGrid || !SITE_CONFIG) return;
  whyGrid.innerHTML = SITE_CONFIG.whyUs.map((item, i) => `
    <article class="why-card" data-aos="fade-up" data-aos-delay="${i * 100}">
      <h3>${item.title}</h3>
      <p>${item.desc}</p>
    </article>
  `).join('');
};

/* ── FAQ (from SITE_CONFIG) ────────────────────────────────── */
const renderFaq = () => {
  if (!faqGrid || !SITE_CONFIG) return;
  faqGrid.innerHTML = SITE_CONFIG.faq.map((item, i) => `
    <article class="faq-item" data-aos="fade-up" data-aos-delay="${i * 100}">
      <h3>${item.q}</h3>
      <p>${item.a}</p>
    </article>
  `).join('');
};

/* ── Categories (from SITE_CONFIG) ─────────────────────────── */
const renderCategories = () => {
  if (!categoriesGrid || !SITE_CONFIG) return;
  categoriesGrid.innerHTML = SITE_CONFIG.categories.map((cat) => `
    <div class="category-card">${cat}</div>
  `).join('');
};

/* ── Partners (from SITE_CONFIG) ───────────────────────────── */
const renderPartners = () => {
  if (!partnerGrid || !SITE_CONFIG) return;
  partnerGrid.innerHTML = SITE_CONFIG.partners.map((p) => `
    <div class="partner-card">${p}</div>
  `).join('');
};

/* ── Apply hero background image ───────────────────────────── */
const applyHeroBg = () => {
  if (!SITE_CONFIG) return;
  const url = SITE_CONFIG.hero.backgroundImage;
  if (url) {
    document.documentElement.style.setProperty('--hero-bg-image', `url('${url}')`);
  }
  const heroImg = document.querySelector('.hero-image img');
  if (heroImg && SITE_CONFIG.hero.heroImage) {
    heroImg.src = SITE_CONFIG.hero.heroImage;
    heroImg.alt = SITE_CONFIG.hero.heroImageAlt || '';
  }
};

/* ── Apply hero text from SITE_CONFIG ──────────────────────── */
const applyHeroText = () => {
  if (!SITE_CONFIG) return;
  const { hero } = SITE_CONFIG;
  const eyebrow = document.querySelector('.hero .eyebrow');
  const h1 = document.querySelector('.hero h1');
  const subtext = document.querySelector('.hero .hero-copy > p:not(.eyebrow)');
  const ctaPrimary = document.querySelector('.hero .btn-primary');
  const ctaSecondary = document.querySelector('.hero .btn-secondary');
  if (eyebrow) eyebrow.textContent = hero.eyebrow;
  if (h1) h1.textContent = hero.heading;
  if (subtext) subtext.textContent = hero.subtext;
  if (ctaPrimary) { ctaPrimary.textContent = hero.ctaPrimary.label; ctaPrimary.href = hero.ctaPrimary.href; }
  if (ctaSecondary) { ctaSecondary.textContent = hero.ctaSecondary.label; ctaSecondary.href = hero.ctaSecondary.href; }
};

/* ── Apply stats targets + labels from SITE_CONFIG ─────────── */
const applyStats = () => {
  if (!SITE_CONFIG) return;
  const statCards = document.querySelectorAll('.stat-card');
  SITE_CONFIG.stats.forEach((stat, i) => {
    if (!statCards[i]) return;
    const counter = statCards[i].querySelector('.count');
    const label = statCards[i].querySelector('p');
    if (counter) counter.dataset.target = stat.target;
    if (label) label.textContent = stat.label;
  });
};

/* ── Apply contact info from SITE_CONFIG ───────────────────── */
const applyContactInfo = () => {
  if (!SITE_CONFIG) return;
  const { contact } = SITE_CONFIG;
  const infoCard = document.getElementById('contactInfoCard');
  if (infoCard) {
    infoCard.innerHTML = `
      <h3>Contact Information</h3>
      <p>Phone: <a href="tel:${contact.phoneHref}">${contact.phone}</a></p>
      <p>Email: <a href="mailto:${contact.email}">${contact.email}</a></p>
      <p>Address: ${contact.address}</p>
    `;
  }
  const waBtn = document.getElementById('whatsappBtn');
  if (waBtn) waBtn.href = contact.whatsapp;
};

/* ── Product search ────────────────────────────────────────── */
if (productSearch) {
  productSearch.addEventListener('input', (e) => {
    const q = e.target.value.toLowerCase();
    const filtered = products.filter((item) =>
      item.name.toLowerCase().includes(q) ||
      item.description.toLowerCase().includes(q) ||
      item.category.toLowerCase().includes(q)
    );
    renderProducts(filtered);
  });
}

/* ── Theme toggle (plain text, no emoji) ───────────────────── */
const initThemeToggle = () => {
  if (!themeToggle) return;
  const setTheme = (theme) => {
    document.documentElement.dataset.theme = theme;
    themeToggle.textContent = theme === 'dark' ? 'Light' : 'Dark';
  };
  setTheme(localStorage.getItem('theme') || 'light');
  themeToggle.addEventListener('click', () => {
    const next = document.documentElement.dataset.theme === 'dark' ? 'light' : 'dark';
    setTheme(next);
    localStorage.setItem('theme', next);
  });
};

/* ── Scroll-to-top ─────────────────────────────────────────── */
const initScrollTop = () => {
  if (!scrollTopBtn) return;
  window.addEventListener('scroll', () => {
    const show = window.scrollY > 400;
    scrollTopBtn.classList.toggle('hidden', !show);
    scrollTopBtn.classList.toggle('show', show);
  }, { passive: true });
  scrollTopBtn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
};

/* ── Mobile menu (closes on nav link click) ────────────────── */
const initMobileMenu = () => {
  if (!mobileMenuToggle) return;
  mobileMenuToggle.addEventListener('click', () => navbar.classList.toggle('open'));
  if (navbar) {
    navbar.querySelectorAll('a').forEach((link) => {
      link.addEventListener('click', () => navbar.classList.remove('open'));
    });
  }
};

/* ── Scrollspy — highlights active nav link ────────────────── */
const initScrollSpy = () => {
  const sections = document.querySelectorAll('main section[id]');
  const navLinks = document.querySelectorAll('.site-nav a[href^="#"]');
  if (!sections.length || !navLinks.length) return;

  const setActive = (id) => {
    navLinks.forEach((link) => {
      link.classList.toggle('active', link.getAttribute('href') === `#${id}`);
    });
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) setActive(entry.target.id);
    });
  }, { rootMargin: '-20% 0px -70% 0px', threshold: 0 });

  sections.forEach((s) => observer.observe(s));
};

/* ── Smooth anchor links ───────────────────────────────────── */
const initAnchorButtons = () => {
  document.querySelectorAll('a[href^="#"]').forEach((link) => {
    link.addEventListener('click', (e) => {
      const id = link.getAttribute('href');
      if (id.startsWith('#')) {
        e.preventDefault();
        const target = document.querySelector(id);
        if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });
};

/* ── Boot ──────────────────────────────────────────────────── */
window.addEventListener('DOMContentLoaded', () => {
  applyHeroBg();
  applyHeroText();
  applyStats();
  applyContactInfo();

  const page = document.body.dataset.page || '';
  if (page === 'products') {
    renderProducts(products);
  } else {
    renderProducts(products, 4); // 1 row of 4 on homepage
    renderTeam();
    renderBranches();
    renderAbout();
    renderMission();
    renderServices();
    renderWhyUs();
    renderFaq();
    renderCategories();
    renderPartners();
  }

  initThemeToggle();
  initScrollTop();
  initMobileMenu();
  initScrollSpy();
  initAnchorButtons();

  const loadingScreen = document.getElementById('loadingScreen');
  if (loadingScreen) {
    setTimeout(() => {
      loadingScreen.style.opacity = '0';
      loadingScreen.style.pointerEvents = 'none';
    }, 900);
  }

  // Refresh AOS after all dynamic content has been injected into the DOM
  if (typeof AOS !== 'undefined') AOS.refresh();
});
