/*
 * =============================================================
 *  PRIME HEALTH CARE PHARMA — SITE CONFIGURATION
 *  Edit this file to update all text, images, and contact info
 *  across the entire website. No other file needs to be touched
 *  for basic content changes.
 * =============================================================
 *
 *  IMAGE PATHS
 *  -----------
 *  Place your images in the assets/images/ folder and update
 *  the paths below. You can use:
 *    - Local paths: "assets/images/hero-bg.jpg"
 *    - External URLs: "https://example.com/image.jpg"
 *
 *  RECOMMENDED FOLDER STRUCTURE:
 *    assets/
 *      icons/
 *        logo.jpeg              ← company logo (already exists)
 *      images/
 *        hero-bg.jpg            ← hero section background
 *        hero-photo.jpg         ← hero section right-side photo
 *        products/
 *          product-1.jpg        ← product images (referenced in data.js)
 *          product-2.jpg
 *          ...
 *        team/
 *          leader-1.jpg         ← team member photos (referenced in data.js)
 *          leader-2.jpg
 *          ...
 *
 *  PRODUCTS & TEAM MEMBERS
 *  -----------------------
 *  Edit product images and names in js/data.js (products array).
 *  Edit team member images and bios in js/data.js (leadership array).
 * =============================================================
 */

const SITE_CONFIG = {

  /* ----------------------------------------------------------
   *  COMPANY
   * ---------------------------------------------------------- */
  company: {
    name: 'Prime Health Care Pharma',
    tagline: 'Your Trusted Partner in Healthcare Excellence',
    description: 'Prime Health Care Pharma provides high-quality pharmaceuticals, trusted distribution, and dedicated support to healthcare providers and communities across Egypt.',
    // Path to logo shown in header and footer (square icon mark)
    // Replace with: "assets/icons/your-logo.png"
    logoPath: 'assets/icons/logo-icon-128.png',
  },

  /* ----------------------------------------------------------
   *  CONTACT DETAILS
   *  These appear in the contact section, footer, and schema.
   * ---------------------------------------------------------- */
  contact: {
    phone: '+20 100 000 0000',          // displayed phone number
    phoneHref: '+201000000000',          // href for tel: links (no spaces/dashes)
    email: 'info@primehealthcarepharma.com',
    address: 'Mansoura, Egypt',
    // Replace with your real WhatsApp number: "https://wa.me/201XXXXXXXXX"
    whatsapp: 'https://wa.me/201000000000',
  },

  /* ----------------------------------------------------------
   *  SOCIAL LINKS
   *  Replace "#" with your actual profile URLs.
   * ---------------------------------------------------------- */
  social: {
    facebook: '#',       // e.g. "https://www.facebook.com/yourpage"
    instagram: '#',      // e.g. "https://www.instagram.com/yourhandle"
    linkedin: 'https://www.linkedin.com/company/prime-health-care-pharma',
  },

  /* ----------------------------------------------------------
   *  HERO SECTION
   * ---------------------------------------------------------- */
  hero: {
    heading: 'Trusted Healthcare Solutions For Better Lives',
    subtext: 'Prime Health Care Pharma delivers quality pharmaceutical products, nationwide distribution, and regulated healthcare support to communities across Egypt.',

    // Hero section CSS background image (the full-width backdrop)
    // Replace with your own: "assets/images/hero-bg.jpg"
    backgroundImage: 'assets/images/background-image.jpg',

    // Hero right-side photo (visible on desktop)
    // No right-side image on homepage, so leave blank or remove this path.
    heroImage: '',
    heroImageAlt: '',

    ctaPrimary: { label: 'Explore Products', href: '#products' },
    ctaSecondary: { label: 'Contact Us', href: '#contact' },
  },

  /* ----------------------------------------------------------
   *  ABOUT SECTION (3 cards)
   * ---------------------------------------------------------- */
  about: {
    eyebrow: 'About Us',
    heading: 'Prime Health Care Pharma is committed to excellence in pharmaceutical care and medical supply.',
    cards: [
      {
        heading: 'Our History',
        text: 'Founded to bring reliable pharmaceuticals and healthcare services to patients, we combine scientific rigor with compassionate delivery.',
      },
      {
        heading: 'Our Values',
        text: 'Integrity, safety, quality, and customer focus are at the core of every product we provide and every relationship we build.',
      },
      {
        heading: 'Company Overview',
        text: 'We operate across distribution, manufacturing partnerships, medical consultation, and regulatory support to serve healthcare providers and communities.',
      },
    ],
  },

  /* ----------------------------------------------------------
   *  MISSION & VISION SECTION (3 feature cards)
   * ---------------------------------------------------------- */
  mission: {
    eyebrow: 'Mission & Vision',
    heading: 'Driving healthcare progress through quality, innovation, and people-centered service.',
    cards: [
      {
        heading: 'Mission',
        text: 'To provide accessible, safe, and effective pharmaceutical solutions that improve the health and wellbeing of individuals and communities.',
      },
      {
        heading: 'Vision',
        text: 'To be the leading trusted pharmaceutical partner in Egypt by delivering exceptional products and reliable healthcare services.',
      },
      {
        heading: 'Core Values',
        listItems: ['Quality Assurance', 'Ethical Practice', 'Customer Focus'],
      },
    ],
  },

  /* ----------------------------------------------------------
   *  STATISTICS COUNTERS
   *  target: the number to count up to
   *  label:  the label shown below the number
   * ---------------------------------------------------------- */
  stats: [
    { target: 20,      label: 'Years Experience' },
    { target: 500,     label: 'Products' },
    { target: 15,      label: 'Branches' },
    { target: 1000000, label: 'Customers' },
  ],

  /* ----------------------------------------------------------
   *  SERVICES (6 cards)
   *  Edit title and desc for each service card.
   * ---------------------------------------------------------- */
  services: [
    { title: 'Distribution',            desc: 'Efficient distribution of medicines and medical supplies across the entire network.' },
    { title: 'Wholesale Supply',         desc: 'Reliable wholesale supply for pharmacies, clinics, and healthcare providers.' },
    { title: 'Healthcare Consultation',  desc: 'Professional consultation to guide treatment selection and product use.' },
    { title: 'Logistics',                desc: 'Secure logistics support designed to maintain quality from warehouse to delivery.' },
    { title: 'Medical Product Support',  desc: 'Technical support and product guidance for healthcare partners and providers.' },
    { title: 'Regulatory Assistance',    desc: 'Support for regulatory compliance, approvals, and documentation.' },
  ],

  /* ----------------------------------------------------------
   *  WHY CHOOSE US (6 cards)
   * ---------------------------------------------------------- */
  whyUs: [
    { title: 'Quality Assurance',       desc: 'Stringent quality control across every stage of our product lifecycle.' },
    { title: 'Certified Products',      desc: 'We supply certified products that meet international healthcare standards.' },
    { title: 'Nationwide Distribution', desc: 'Extensive distribution covering major cities and hospitals.' },
    { title: 'Expert Team',             desc: 'Experienced professionals ensuring the best pharmaceutical services.' },
    { title: 'Reliable Delivery',       desc: 'Efficient delivery systems for timely product availability.' },
    { title: 'Customer Support',        desc: 'Responsive support for healthcare providers and customers.' },
  ],

  /* ----------------------------------------------------------
   *  PRODUCT CATEGORIES (shown in the categories section)
   * ---------------------------------------------------------- */
  categories: ['Tablets', 'Capsules', 'Syrups', 'Supplements', 'Personal Care'],

  /* ----------------------------------------------------------
   *  BRANCH LOCATIONS
   *  Edit name, address, phone, and map link for each branch.
   *  map: paste the Google Maps URL for that location.
   * ---------------------------------------------------------- */
  branches: [
    {
      name: 'Mansoura Branch',
      address: 'شارع مجمع المحاكم المنصورة',
      phone: '+20 105 567 1722',
      map: 'https://maps.google.com?q=31.032958,31.398806',
    },
  ],

  /* ----------------------------------------------------------
   *  SEO / META
   *  Update ogUrl to your real domain when you go live.
   * ---------------------------------------------------------- */
  meta: {
    ogUrl: 'https://primehealthcarepharma.example.com',
    ogImage: 'https://images.unsplash.com/photo-1580281657521-8dee1fbbd8fd?auto=format&fit=crop&w=1200&q=80',
    schemaLinkedIn: 'https://www.linkedin.com/company/prime-health-care-pharma',
  },
};
