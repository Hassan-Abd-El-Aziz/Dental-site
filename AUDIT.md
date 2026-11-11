# AUDIT & DISCOVERY REPORT
## Project: Hassan Dental (Migration from Lumora Dental)
**Date:** November 2026  
**Auditor:** Senior Frontend Architect & Technical Lead  
**Source Repository:** `https://github.com/toprmrproducer/lumora-dental`  
**Live Reference:** `https://toprmrproducer.github.io/lumora-dental/`  

---

## 1. Executive Summary
The source website is a dental clinic site originally structured from a Webflow export ("Smilifye" / "Lumora" / "Westside Dentist"), using Webflow IX2 and GSAP. It features dental photography (`gen_*.jpg`), a teal brand palette (`#24a3b1` and `#011f23`), typography (Sora font), responsive layouts, and interactive components.

The objective is to re-architect this codebase into a modern, clean, production-grade **Vue 3** Single Page Application with **Tailwind CSS 4.3**, **Vue Router 4**, **GSAP 3** ScrollTrigger animations, **Bilingual support (Arabic default RTL + English LTR)**, and **comprehensive Google Search Essentials SEO** with prerendered static HTML, structured JSON-LD data, and a WhatsApp-based booking flow under the new brand: **Hassan Dental**.

---

## 2. HTML Pages Inventory

| Original File | Role / Page Purpose | Key Sections Present | Target Route in Vue |
| :--- | :--- | :--- | :--- |
| `index.html` | Home Page | Navbar, Hero with CTA & badges, 3-Card Clinic Info (Appointment, Emergency, Hours), Our Story Slider, Services Overview, Doctor/Team Showcase, Why Choose Us (Values & Stats), Testimonials Slider, Blog Preview, FAQ Accordion, Final CTA Banner, Footer | `/` (Home) |
| `about.html` | About Clinic & Team | Hero with Animated Counter Statistics, Clinic Story & Journey, Achievements & Success Metrics, Full Team / Doctor Details, Career / Job Openings, Clinic Awards, Clinic Locations & Branches, CTA, Footer | `/about` (About) |
| `service.html` | Services & Treatments | Services Hero, Service Showcase Grid/Tabs (Whitening, Implants, Orthodontics, Cleaning, Crowns, etc.), Service Process Steps, Treatment FAQs, CTA, Footer | `/services` (Services) |
| `blog.html` | Blog & Dental Insights | Blog Hero, Featured Articles Grid with Category Filters & Reading Times, Dental Health FAQs, CTA, Footer | `/blog` (Blog) |
| `privacy.html` | Privacy Policy | Legal Header, Data Protection Details, Cookie usage, Patient privacy terms, Footer | `/privacy` (Privacy Policy) |
| `terms.html` | Terms & Conditions | Legal Header, Service terms, Appointment policies, Liability disclaimers, Footer | `/terms` (Terms) |
| `cookies.html` | Cookie Policy | Legal Header, Tracking & Storage explanation, Management instructions, Footer | `/cookies` (Cookies) |
| `licenses.html` | Licenses & Attributions | Font & Asset attribution, Open Source Licenses | `/licenses` (Licenses) |
| `404.html` | Not Found Page | Error headline, Friendly patient guidance, Return Home button | `/:pathMatch(.*)*` (404) |
| *New Requirement* | Appointment Page | Dedicated interactive booking request form with WhatsApp generation & calendar picker | `/appointment` |
| *New Requirement* | Contact Page | Dedicated clinic contact details, working hours, interactive Google Map, emergency phone & contact form | `/contact` |

---

## 3. Asset & Imagery Inventory

The repository contains 186 image files in `assets/img/`. Key asset categories:

### A. Core Photographic Assets (AI Regenerated High-Res Clean Assets)
- **Hero & General Clinic:**
  - `gen_dentist-examining-patients-teeth-close-up_1.jpg`: Main hero close-up photo
  - `gen_hero-2.jpg`, `gen_hero-3.jpg`, `gen_hero-4.jpg`: Hero carousel cycling frames
  - `gen_about-hero-image.jpg`: About page wide clinic photo
  - `gen_home-value-image.jpg`: "Why Choose Us" clinic care photo
- **Story & Heritage Gallery:**
  - `gen_our-story-image-1.jpg` through `gen_our-story-image-5.jpg`
  - `gen_story-image-1.jpg` through `gen_story-image-5.jpg`
- **Services Thumbnails:**
  - `gen_service-thumbnail-image.jpg` (Whitening / Cosmetic)
  - `gen_service-thumbnail-image-2.jpg` (Implants / Surgery)
  - `gen_service-thumbnail-image-3.jpg` (Orthodontics / Braces)
  - `gen_service-thumbnail-image-4.jpg` (Checkup & Cleaning)
- **Team & Doctors:**
  - `gen_team-image-1.jpg` (Lead Orthodontist & Dental Surgeon)
  - `gen_team-image-2.jpg` (Cosmetic Dentistry Specialist)
  - `gen_team-image-3.jpg` (Pediatric Dentist)
  - `gen_team-image-4.jpg` (Periodontist & Implantologist)
  - `gen_team-image-5.jpg` (Endodontist / Root Canal Specialist)
  - `gen_team-image-6.jpg` (Senior Dental Hygienist)
- **Testimonial Patients:**
  - `gen_testimonial-author-1.jpg`, `gen_testimonial-author-2.jpg`, `gen_testimonial-author-3.jpg`
- **Blog Thumbnails:**
  - `gen_blog-image-1.jpg` through `gen_blog-image-6.jpg`
- **About Badges & Supporting Features:**
  - `awards-image-1.webp` through `4.webp`
  - `job-image-1.webp` through `5.webp`
  - `location-image-1.webp` through `3.webp`
  - `success-item-image-1.webp` & `2.webp`

### B. Brand Identity & Vector Assets
- `lumora-logo.svg`: Light-background logo (to be replaced with Hassan Dental SVG logo)
- `lumora-logo-dark.svg`: Dark-background logo for footer
- `favicon.svg`: Browser tab icon (to be rebranded)
- `webclip.png`: Apple touch icon (to be rebranded)
- Comprehensive inline SVG icons: Tooth dental icon, emergency ambulance/cross, clock opening hours, stars, calendar, chevron arrows, social media icons (Facebook, Instagram, X/Twitter, LinkedIn, YouTube).

---

## 4. Libraries & Scripts Inventory

| Library / Script | Original Role | Migration Strategy in Vue 3 Architecture |
| :--- | :--- | :--- |
| **GSAP (GreenSock)** `gsap.min.js` | Core animation engine | Migrate to npm dependency `gsap`, register plugins cleanly inside Vue composables (`useAnimation.js`). |
| **GSAP ScrollTrigger** `ScrollTrigger.min.js` | Scroll-bound reveal triggers & counters | Use via `gsap/ScrollTrigger` with lifecycle hooks (`onMounted`, `onUnmounted` with `.kill()`). |
| **GSAP SplitText** `SplitText.min.js` | Headline word/character splitting | Replaced with clean CSS transitions and GSAP stagger animations to remove proprietary license dependency. |
| **jQuery 3.5.1** `jquery-3.5.1.min.js` | Webflow IX2 dependency | **ELIMINATED**. Vue 3 reactive DOM rendering handles all interactions natively. |
| **Webflow IX2 Runtime** (`webflow.*.js`) | Webflow template animations & dropdowns | **ELIMINATED**. Rebuilt in Vue Single File Components with clean CSS/GSAP. Eliminates 500KB+ of legacy runtime. |
| **Reveal Engine Script** | Fallback for Webflow opacity:0 inline styles | Replaced with idiomatic Vue transitions and GSAP ScrollTrigger composable (`useAnimation.js`). |
| **Hero Carousel Script** | Timed cycling of `.hero-carousel-img` | Replaced with reactive Vue hero component with auto-rotation and manual controls. |
| **Lead Form Script** | Validated and opened `wa.me` WhatsApp link | Replaced with `AppointmentForm.vue` and `useBooking.js` with comprehensive validation and RTL/LTR message formatting. |
| **Image Fallback Guard** | Inlined SVG generator on `img:error` | Rebuilt as reusable Vue directive (`v-fallback-img`) or image wrapper component. |

---

## 5. Visual System & Color Architecture

The original design uses a clinical teal aesthetic:
- **Primary Teal:** `#24a3b1`
- **Primary Dark / Forest Teal:** `#011f23` (Backgrounds, headers)
- **Primary Deep Surface:** `#022f34` (Cards, dark mode highlights)
- **Primary Accent / Light:** `#eef9fa`, `#36c0d0`, `#ddebec`
- **Neutral White:** `#ffffff`
- **Neutral Light Grey:** `#fafafa`, `#f3f6ff`
- **Muted Text:** `#707070`, `#758696`, `#3a4a4d`
- **Borders & Dividers:** `#e2e2e2`, `#d1e5e8`
- **Typography:** Primary font `Sora, sans-serif`. For Arabic support, paired with `Cairo` or `Tajawal` for authentic typography and RTL readability.

---

## 6. Interactive Elements & User Experiences

1. **Header & Navigation:**
   - Desktop mega-menu with dropdown columns ("Pages", legal links, social links).
   - Mobile hamburger drawer with slide-in animation, backdrop blur, scroll-lock on `<body>`, and keyboard accessibility (ESC key).
   - Language Switcher (Arabic <-> English) with dynamic `dir="rtl"` / `dir="ltr"` and `lang="ar"` / `lang="en"`.
2. **Hero Carousel:**
   - Multi-slide crossfade with active indicators, patient review badge (e.g. 4.9★ from 1,200+ patient reviews), and direct appointment CTA.
3. **Animated Counters:**
   - Scroll-triggered numeric counters on statistics (e.g. "15+", "99%", "25k+", "4.9").
4. **Story & Testimonial Sliders:**
   - Smooth horizontal card carousel with touch drag, swipe, prev/next buttons, and dot indicators.
5. **Interactive FAQ Accordion:**
   - Expandable/collapsible Q&A items with smooth height transitions and accessible ARIA attributes (`aria-expanded`, `aria-controls`).
6. **Lead & Appointment Request Forms:**
   - Multi-field appointment form (Patient name, phone number, service requested, preferred date/time, notes).
   - Instant validation with accessible error prompts.
   - WhatsApp dispatch flow formatted with prefilled message in Arabic or English based on active language.

---

## 7. Known Issues in Original Codebase to Fix During Migration

1. **Hidden Content Risk:** Webflow baked `style="opacity:0; transform:translateY(25%)"` into elements. If JS failed or delayed, content stayed permanently invisible.  
   *Fix:* Content in Vue will remain semantic and crawlable, with GSAP enhancing visibility progressively.
2. **Heavy Legacy Scripts:** Over 800KB of redundant Webflow IX2, chunked Webflow runtimes, and jQuery 3.5.1.  
   *Fix:* Strip all Webflow and jQuery scripts. Total JS bundle size will be reduced by >70%.
3. **Hardcoded Brand & Contact Data:** "Westside Dentist", "Lumora", `hello@moladental.com`, `+441143177002` scattered in raw HTML files.  
   *Fix:* Centralize all brand information, contact details, social links, and working hours into `src/config/site.js` and `src/config/contact.js`.
4. **No Prerendered SEO / Client-Side Only Risk:**  
   *Fix:* Provide static prerendering for all canonical pages (`/`, `/about`, `/services`, `/blog`, `/contact`, `/appointment`, `/privacy`, `/terms`, `/cookies`), complete Open Graph & Twitter metadata, Schema.org `Dentist` JSON-LD, sitemap.xml, and robots.txt.
5. **Lack of Native Arabic / RTL Support:** Original site only supported English LTR.  
   *Fix:* Build full bilingual architecture (Arabic default RTL + English LTR) with mirrored layouts, appropriate Cairo font styling, and localized strings.

---

## 8. Conclusion & Sign-Off

The audit is complete. All assets, layouts, styles, and interactions are mapped. We are ready to proceed to **Phase 2 — Project Foundation** and initialize the Vue 3 + Tailwind CSS 4.3 + Vite application.
