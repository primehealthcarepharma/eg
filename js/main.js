const productGrid = document.getElementById('productGrid');
const teamGrid = document.getElementById('teamGrid');
const branchGrid = document.getElementById('branchGrid');
const testimonialCarousel = document.getElementById('testimonialCarousel');
const productSearch = document.getElementById('productSearch');
const scrollTopBtn = document.getElementById('scrollTopBtn');
const themeToggle = document.getElementById('themeToggle');
const mobileMenuToggle = document.getElementById('mobileMenuToggle');
const navbar = document.getElementById('navbar');

const renderProducts = (items, limit) => {
  const list = typeof limit === 'number' ? items.slice(0, limit) : items;
  productGrid.innerHTML = list.map((product) => `
    <article class="card product-card" data-aos="fade-up">
      <img src="${product.image}" alt="${product.name}" loading="lazy" onerror="this.src='https://via.placeholder.com/500x220?text=Product+Image'" />
      <div>
        <h3>${product.name}</h3>
        <p>${product.description}</p>
        <span class="category-tag">${product.category}</span>
      </div>
    </article>
  `).join('');
};

const renderTeam = () => {
  teamGrid.innerHTML = leadership.map((member) => `
    <article class="card team-card" data-aos="fade-up">
      <img src="${member.image}" alt="${member.name}" loading="lazy" onerror="this.src='https://via.placeholder.com/450x340?text=Leader'" />
      <div>
        <h3>${member.name}</h3>
        <p><strong>${member.position}</strong></p>
        <p>${member.bio}</p>
        <a href="leader.html?leader=${member.slug}" class="btn btn-secondary">See info</a>
      </div>
    </article>
  `).join('');
};

const renderBranches = () => {
  branchGrid.innerHTML = branches.map((branch) => `
    <article class="branch-card" data-aos="fade-up">
      <h3>${branch.name}</h3>
      <p>${branch.address}</p>
      <p>Phone: <a href="tel:${branch.phone}">${branch.phone}</a></p>
      <p><a href="${branch.map}" target="_blank" rel="noreferrer">View on Google Maps</a></p>
    </article>
  `).join('');
};

// Testimonials removed — no rendering on homepage

// Testimonials carousel removed

const initNewsletter = () => {
  const newsletterForm = document.getElementById('newsletterForm');
  const newsletterEmail = document.getElementById('newsletterEmail');
  if (!newsletterForm) return;

  newsletterForm.addEventListener('submit', (event) => {
    event.preventDefault();
    if (!newsletterEmail.value.trim()) {
      newsletterEmail.focus();
      return;
    }
    const button = newsletterForm.querySelector('button[type="submit"]');
    button.disabled = true;
    button.textContent = 'Subscribed';
    setTimeout(() => {
      button.disabled = false;
      button.textContent = 'Subscribe';
      newsletterEmail.value = '';
    }, 1200);
  });
};

if (productSearch) {
  productSearch.addEventListener('input', (event) => {
    const query = event.target.value.toLowerCase();
    const filtered = products.filter((item) => item.name.toLowerCase().includes(query) || item.description.toLowerCase().includes(query) || item.category.toLowerCase().includes(query));
    renderProducts(filtered);
  });
}

const initThemeToggle = () => {
  const storedTheme = localStorage.getItem('theme');
  const setTheme = (theme) => {
    document.documentElement.dataset.theme = theme;
    themeToggle.innerHTML = theme === 'dark' ? '☀️ Light' : '🌙 Dark';
  };

  if (storedTheme) {
    setTheme(storedTheme);
  } else {
    setTheme('light');
  }

  themeToggle.addEventListener('click', () => {
    const newTheme = document.documentElement.dataset.theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
  });
};

const initScrollTop = () => {
  window.addEventListener('scroll', () => {
    if (window.scrollY > 450) {
      scrollTopBtn.classList.add('show');
    } else {
      scrollTopBtn.classList.remove('show');
    }
  });

  scrollTopBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
};

const initAnchorButtons = () => {
  const anchorButtons = document.querySelectorAll('a[href^="#"]');
  anchorButtons.forEach((link) => {
    link.addEventListener('click', (event) => {
      const targetId = link.getAttribute('href');
      if (targetId.startsWith('#')) {
        event.preventDefault();
        const target = document.querySelector(targetId);
        if (target) {
          target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }
    });
  });
};

const initMobileMenu = () => {
  mobileMenuToggle.addEventListener('click', () => {
    navbar.classList.toggle('open');
  });
};

window.addEventListener('DOMContentLoaded', () => {
  const page = document.body.dataset.page || '';
  if (page === 'products') {
    renderProducts(products); // full list on products page
  } else {
    renderProducts(products, 6); // show top 6 on homepage
  }
  renderTeam();
  renderBranches();
  initThemeToggle();
  initScrollTop();
  initMobileMenu();
  initNewsletter();
  initAnchorButtons();

  const loadingScreen = document.getElementById('loadingScreen');
  if (loadingScreen) {
    setTimeout(() => {
      loadingScreen.style.opacity = '0';
      loadingScreen.style.pointerEvents = 'none';
    }, 900);
  }
});
