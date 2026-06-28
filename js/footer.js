/*
 * footer.js — renders the site footer from SITE_CONFIG.
 * Included on all pages so footer content is edited in ONE place: js/site-config.js
 */

const renderFooter = () => {
  const footer = document.getElementById('siteFooter');
  if (!footer || typeof SITE_CONFIG === 'undefined') return;

  const page = document.body.dataset.page || '';
  // On the homepage, anchor links are bare (#about). On other pages they need the full path.
  const base = page === 'home' ? '' : 'index.html';
  const a = (anchor) => `${base}${anchor}`;
  const year = new Date().getFullYear();
  const { company, contact, social } = SITE_CONFIG;

  footer.innerHTML = `
    <div class="container footer-top">

      <div class="footer-col footer-brand" aria-labelledby="footer-brand-link">
        <a id="footer-brand-link" class="brand" href="${a('#hero')}">
          <img src="${company.logoPath}" alt="${company.name} logo" class="brand-logo" />
          <div class="brand-text">
            <strong>${company.name}</strong>
            <div class="tagline">${company.tagline}</div>
          </div>
        </a>
        <p class="brand-desc">${company.description}</p>
      </div>

      <nav class="footer-col" aria-label="Quick Links">
        <h4>Quick Links</h4>
        <ul class="footer-links">
          <li><a href="${a('#about')}">About Us</a></li>
          <li><a href="${a('#team')}">Leadership Team</a></li>
          <li><a href="${a('#products')}">Products</a></li>
          <li><a href="${a('#services')}">Services</a></li>
          <li><a href="${a('#contact')}">Contact Us</a></li>
        </ul>
      </nav>

      <nav class="footer-col" aria-label="Help and Support">
        <h4>Help &amp; Support</h4>
        <ul class="footer-links">
          <li><a href="${a('#contact')}">Contact Us</a></li>
          <li><a href="${a('#branches')}">Branch Locations</a></li>
          <li><a href="tel:${contact.phoneHref}">${contact.phone}</a></li>
          <li><a href="mailto:${contact.email}">${contact.email}</a></li>
          <li><a href="${a('#faq')}">FAQ</a></li>
        </ul>
      </nav>

      <div class="footer-col footer-social" aria-label="Stay Connected">
        <h4>Stay Connected</h4>
        <div class="social-list" role="list">
          <a class="social-btn facebook" href="${social.facebook}"
             aria-label="Facebook" role="listitem" rel="noreferrer"
             ${social.facebook !== '#' ? 'target="_blank"' : ''}>
            <img class="social-img" src="https://cdn.simpleicons.org/facebook/ffffff" alt="Facebook" />
          </a>
          <a class="social-btn instagram" href="${social.instagram}"
             aria-label="Instagram" role="listitem" rel="noreferrer"
             ${social.instagram !== '#' ? 'target="_blank"' : ''}>
            <img class="social-img" src="https://cdn.simpleicons.org/instagram/ffffff" alt="Instagram" />
          </a>
          <a class="social-btn whatsapp" href="${contact.whatsapp}"
             aria-label="WhatsApp" role="listitem" rel="noreferrer" target="_blank">
            <img class="social-img" src="https://cdn.simpleicons.org/whatsapp/ffffff" alt="WhatsApp" />
          </a>
        </div>
      </div>
    </div>

    <div class="container footer-bottom">
      <div class="copyright">© ${year} ${company.name}. All rights reserved.</div>
      <div class="footer-meta">
        <div class="country">
          <span class="flag" aria-label="Egypt flag" role="img">🇪🇬</span>
          <span class="country-text">Egypt - Cairo</span>
        </div>
      </div>
    </div>
  `;
};

window.addEventListener('DOMContentLoaded', renderFooter);
