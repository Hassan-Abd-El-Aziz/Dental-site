# Hassan Dental | عيادة حسن لطب الأسنان
## Complete Website Migration, Rebranding & SEO Architecture

**Hassan Dental** is a premier dental clinic website migrated from the original Lumora Dental design system and re-architected into a modern, production-grade **Vue 3** Single Page Application with **Tailwind CSS 4.3**, **Vue Router 4**, **GSAP 3** ScrollTrigger animations, **Bilingual Support (Arabic default RTL + English LTR)**, and **Google Search Essentials Technical SEO** with static HTML prerendering and Schema.org structured data.

---

## 1. Technology Stack

- **Core Framework:** Vue 3 (Composition API `<script setup>`)
- **Build Tool:** Vite 6 with official `@tailwindcss/vite` plugin
- **Styling:** Tailwind CSS 4.3 + CSS Custom Properties Design Tokens
- **Routing:** Vue Router 4 (HTML5 history mode with smooth scroll restorative behavior)
- **Animation Engine:** GSAP 3 + ScrollTrigger (with automatic lifecycle cleanup & `prefers-reduced-motion` accessibility)
- **Bilingual System:** Reactive i18n supporting Arabic (Default RTL) and English (LTR) with dynamic `dir` and `lang` HTML binding
- **SEO Engine:** Static Prerendering generator (`scripts/prerender.js`), Schema.org `Dentist` JSON-LD, `sitemap.xml`, and `robots.txt`
- **Booking Flow:** WhatsApp-powered instant appointment request generator with client-side form validation

---

## 2. Project Structure

```
hassan-dental/
├── public/
│   ├── images/              # All 186 original photographic assets & SVGs
│   ├── favicon.svg          # Modern branded tooth emblem
│   ├── webclip.png          # Apple touch icon
│   ├── robots.txt           # Crawler instructions & sitemap link
│   ├── sitemap.xml          # XML sitemap with alternate language links
│   └── site.webmanifest     # PWA manifest
├── src/
│   ├── assets/
│   │   ├── images/          # Image references
│   │   └── styles/
│   │       ├── main.css     # Tailwind 4.3 import, design tokens, typography
│   │       └── original-system.css # Preserved layout & responsive classes
│   ├── components/
│   │   ├── layout/
│   │   │   ├── AppHeader.vue        # Sticky glass navigation with dropdown
│   │   │   ├── AppFooter.vue        # Dark teal footer with NAP data
│   │   │   └── MobileNavigation.vue # Accessible drawer with ESC key support
│   │   ├── common/
│   │   │   ├── BrandLogo.vue        # SVG logo with light/dark modes
│   │   │   ├── LanguageSwitcher.vue # Instant Arabic/English toggle
│   │   │   ├── SectionHeading.vue   # Reusable heading with pill tag
│   │   │   ├── WhatsAppButton.vue   # Floating & inline WhatsApp buttons
│   │   │   └── BackToTop.vue        # Scroll-to-top button
│   │   ├── home/
│   │   │   ├── HeroSection.vue      # Hero with image carousel & badges
│   │   │   ├── InfoCardsSection.vue # 3-card quick contact & hours
│   │   │   ├── StorySection.vue     # Clinic milestone tabs & animated counters
│   │   │   ├── ServicesSection.vue  # 6-card treatment showcase
│   │   │   ├── DoctorsSection.vue   # Specialist team profile cards
│   │   │   ├── WhyChooseUsSection.vue # Clinical standards & photo
│   │   │   ├── TestimonialsSection.vue # 5-star review carousel
│   │   │   ├── BlogSection.vue      # Featured oral health articles
│   │   │   ├── FaqSection.vue       # Interactive accordion
│   │   │   └── BookingCtaSection.vue # Pre-footer conversion banner
│   │   └── forms/
│   │       └── AppointmentForm.vue  # Validated appointment request form
│   ├── composables/
│   │   ├── useAnimation.js  # GSAP triggers, counters, and lifecycle kill
│   │   ├── useLanguage.js   # Reactive locale, RTL direction, translator
│   │   ├── useBooking.js    # WhatsApp message encoder & validator
│   │   └── useSeo.js        # Dynamic document head & schema manager
│   ├── config/
│   │   ├── site.js          # Brand identity, social links, rating
│   │   ├── contact.js       # Phone, WhatsApp, address, hours placeholders
│   │   ├── seo.js           # Titles, descriptions, keywords per page
│   │   └── navigation.js    # Navigation items & dropdown structure
│   ├── i18n/
│   │   ├── ar.js            # Arabic translation dictionary (Default)
│   │   ├── en.js            # English translation dictionary
│   │   └── index.js         # Dictionary resolver
│   ├── layouts/
│   │   └── MainLayout.vue   # Root layout wrapper
│   ├── pages/
│   │   ├── HomePage.vue
│   │   ├── AboutPage.vue
│   │   ├── ServicesPage.vue
│   │   ├── DoctorsPage.vue
│   │   ├── BlogPage.vue
│   │   ├── ContactPage.vue
│   │   ├── AppointmentPage.vue
│   │   ├── PrivacyPolicyPage.vue
│   │   ├── TermsPage.vue
│   │   ├── CookiesPage.vue
│   │   └── NotFoundPage.vue
│   ├── router/
│   │   └── index.js         # Vue Router with scroll restorative behavior
│   ├── utils/
│   │   └── seo.js           # Head injection & Schema generator
│   ├── App.vue              # App root with transition views
│   └── main.js              # Application entry point & image fallback
├── scripts/
│   └── prerender.js         # Static HTML prerender generator for SEO
├── dist/                    # Production output with prerendered pages
├── AUDIT.md                 # Original site audit report
├── ASSET-MAPPING.md         # Comprehensive asset mapping
├── SEO-GUIDE.md             # Complete Google SEO optimization manual
├── DEPLOYMENT.md            # Deployment guide for all static hosts
├── CHANGELOG.md             # Migration log
├── package.json
└── vite.config.js
```

---

## 3. Installation & Getting Started

### Prerequisites
- Node.js version 18+ or 20+ (tested on Node v22.13.1)
- npm version 9+ (tested on npm 10.9.2)

### Install Dependencies
```bash
npm install
```

### Start Local Development Server
```bash
npm run dev
```
The development server will launch at: `http://localhost:3000`

### Run Production Build & SEO Prerendering
```bash
npm run build
```
This runs Vite production compilation and executes `node scripts/prerender.js`, generating fully prerendered static HTML files in `dist/`.

### Preview Production Build
```bash
npm run preview
```

---

## 4. Business Configuration & Placeholders

All clinic details are strictly centralized and marked with `[PLACEHOLDER]` tags for the clinic owner to update:

1. **`src/config/contact.js`**:
   - `phone`: Clinic main reception telephone
   - `whatsappNumber`: Phone number receiving appointment bookings
   - `email`: Official clinic inquiries email
   - `address`: Physical clinic street address & city
   - `geo`: Exact GPS latitude and longitude for Google Maps and Local SEO
   - `workingHours`: Weekly schedule for weekdays and weekends
   - `mapsUrl` / `mapsEmbedUrl`: Google Maps directions link

2. **`src/config/site.js`**:
   - Brand name, social profile URLs (Facebook, Instagram, X/Twitter, LinkedIn, YouTube).

3. **`src/config/seo.js`**:
   - Primary domain name (defaults to `https://hassandental.com`), page-specific keywords, and metadata.
