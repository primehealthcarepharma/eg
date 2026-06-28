const leaderProfile = document.getElementById('leaderProfile');
const pageTitle = document.getElementById('pageTitle');
const pageIntro = document.getElementById('pageIntro');
const themeToggle = document.getElementById('themeToggle');
const mobileMenuToggle = document.getElementById('mobileMenuToggle');
const navbar = document.getElementById('navbar');

const getLeaderSlug = () => {
  const params = new URLSearchParams(window.location.search);
  return params.get('leader');
};

const buildLeaderContent = (leader) => {
  if (!leader) {
    leaderProfile.innerHTML = `
      <article class="card team-card">
        <h2>Leader not found</h2>
        <p>We could not locate a leadership profile for the requested page. Please return to the team section and try again.</p>
        <a href="index.html#team" class="btn btn-secondary">Back to Leadership</a>
      </article>
    `;
    return;
  }

  pageTitle.textContent = leader.name;
  pageIntro.textContent = `${leader.name} serves as ${leader.position} at Prime Health Care Pharma. ${leader.bio}`;

  leaderProfile.innerHTML = `
    <article class="card leader-detail-card">
      <div class="leader-detail-grid">
        <div class="leader-detail-image">
          <img src="${leader.image}" alt="${leader.name}" loading="lazy" onerror="this.src='https://via.placeholder.com/650x450?text=Leader'" />
        </div>
        <div class="leader-detail-meta">
          <span class="eyebrow">Leadership Profile</span>
          <h2>${leader.name}</h2>
          <p class="position">${leader.position}</p>
          <div class="leader-summary">
            <p>${leader.bio}</p>
            <p>With extensive experience in healthcare, ${leader.name} ensures that Prime Health Care Pharma maintains high standards for product quality, regulatory compliance, and customer trust.</p>
          </div>
          <div class="leader-detail-actions">
            <a href="index.html#team" class="btn btn-outline">Back to Leadership</a>
            <a href="index.html#contact" class="btn btn-primary">Contact ${leader.name}</a>
          </div>
        </div>
      </div>
    </article>
  `;
};

const initThemeToggle = () => {
  const storedTheme = localStorage.getItem('theme');
  const setTheme = (theme) => {
    document.documentElement.dataset.theme = theme;
    themeToggle.textContent = theme === 'dark' ? 'Light' : 'Dark';
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

const initMobileMenu = () => {
  mobileMenuToggle.addEventListener('click', () => {
    navbar.classList.toggle('open');
  });
};

window.addEventListener('DOMContentLoaded', () => {
  const leaderSlug = getLeaderSlug();
  const leader = leadership.find((member) => member.slug === leaderSlug);
  buildLeaderContent(leader);
  initThemeToggle();
  initMobileMenu();
});
