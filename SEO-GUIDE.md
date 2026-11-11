# GOOGLE SEO & TECHNICAL OPTIMIZATION GUIDE
## Hassan Dental Clinic | دليل تحسين محركات البحث جوجل

This guide provides technical specifications, operational procedures, and local search best practices for **Hassan Dental**, following Google Search Essentials and Core Web Vitals guidelines.

---

## 1. Technical SEO Architecture

### A. Semantic HTML5 & Heading Hierarchy
Every page follows a strict, single-H1 semantic structure:
- **H1:** One primary heading per page communicating the core page subject.
- **H2:** Major section titles (e.g. Services, Doctors, Why Choose Us, FAQs).
- **H3:** Card headings, doctor names, and specific treatment items.
- **No empty headings** or keyword-stuffed hidden elements.

### B. Static Prerendering (SEO-Friendly Vue Rendering)
Search engine crawlers (Googlebot, Bingbot) do not rely solely on client-side JavaScript execution.
- When `npm run build` runs, `scripts/prerender.js` generates static HTML files for every canonical route:
  - `/dist/index.html` (Home)
  - `/dist/about/index.html` (About)
  - `/dist/services/index.html` (Services)
  - `/dist/doctors/index.html` (Doctors)
  - `/dist/appointment/index.html` (Appointment)
  - `/dist/contact/index.html` (Contact)
  - `/dist/blog/index.html` (Blog)
  - `/dist/privacy/index.html` (Privacy)
  - `/dist/terms/index.html` (Terms)
  - `/dist/cookies/index.html` (Cookies)
- Every generated HTML file includes full crawler-discoverable content (`h1`, `p`, `ul`, `li`), page-specific `<title>`, `<meta name="description">`, `<link rel="canonical">`, and Schema.org JSON-LD structured data.

### C. Canonical URLs & Alternate Language Tags
Canonical tags ensure search engines never index duplicate parameters:
```html
<link rel="canonical" href="https://hassandental.com/services">
```
In `public/sitemap.xml`, bilingual language annotations are declared:
```xml
<xhtml:link rel="alternate" hreflang="ar" href="https://hassandental.com/services" />
<xhtml:link rel="alternate" hreflang="en" href="https://hassandental.com/services?lang=en" />
```

---

## 2. Structured Data (Schema.org JSON-LD)

The website implements valid **Schema.org** structured data embedded directly in the `<head>` of every page:

### Types Implemented:
1. **`Dentist` (LocalBusiness / MedicalBusiness):**
   - `@id`: `https://hassandental.com/#clinic`
   - `name`: عيادة حسن لطب الأسنان / Hassan Dental
   - `telephone`: `+966110000000`
   - `priceRange`: `$$`
   - `address`: Street address, city, postal code, country (`PostalAddress`)
   - `geo`: Exact coordinates (`GeoCoordinates` latitude/longitude)
   - `openingHoursSpecification`: Detailed weekly schedule
   - `medicalSpecialty`: `['Dentistry', 'Orthodontics', 'OralSurgeon', 'PediatricDentistry', 'Periodontics']`
   - `sameAs`: Verified social media links
2. **`WebSite`:**
   - Declares official site entity and supported languages (`ar`, `en`).
3. **`BreadcrumbList`:**
   - Hierarchical trail for subpages to earn rich breadcrumb snippets in search results.

> **Validation Note:** Test any live page URL using [Google Rich Results Test](https://search.google.com/test/rich-results) and [Schema.org Validator](https://validator.schema.org/).

---

## 3. Local SEO & Google Business Profile (GBP)

To rank effectively in local search ("طبيب أسنان في الرياض" / "Dentist near me"):

### NAP Consistency Rule
Ensure exact 100% consistency across all online mentions:
- **N (Name):** Hassan Dental Clinic / عيادة حسن لطب الأسنان
- **A (Address):** Exact street name, building number, suite, and city matching Google Maps.
- **P (Phone):** Primary direct clinic landline or verified mobile.

### Local SEO Checklist for the Clinic Owner:
1. [ ] Claim and verify **Google Business Profile (GBP)**.
2. [ ] Choose primary category: **Dentist** (طبيب أسنان / عيادة أسنان).
3. [ ] Add secondary categories: Cosmetic Dentist, Orthodontist, Dental Clinic.
4. [ ] Ensure opening hours in GBP match `src/config/contact.js` exactly.
5. [ ] Upload high-resolution photos of clinic exterior, reception, treatment suites, and sterile equipment.
6. [ ] Encourage genuine patient reviews (never fabricate artificial reviews).

---

## 4. Google Search Console (GSC) Setup Guide

1. Log into [Google Search Console](https://search.google.com/search-console).
2. Choose **Domain Property** verification (e.g. `hassandental.com`).
3. Add the TXT verification record to the clinic's DNS manager (Cloudflare, Namecheap, GoDaddy).
4. After verification, navigate to **Sitemaps** on the left menu.
5. Submit the sitemap URL:
   ```
   https://hassandental.com/sitemap.xml
   ```
6. Use the **URL Inspection** tool on `https://hassandental.com/` and click **Test Live URL** to confirm Googlebot renders the prerendered HTML properly.
7. Monitor **Coverage** and **Page Experience** reports weekly.

---

## 5. Google Analytics 4 (GA4) Integration

To enable GA4 tracking when ready:
1. Create a GA4 property in Google Analytics.
2. Retrieve the **Measurement ID** (format: `G-XXXXXXXXXX`).
3. Insert the tracking snippet in `index.html` before `</head>`:
   ```html
   <!-- Google Analytics 4 -->
   <script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
   <script>
     window.dataLayer = window.dataLayer || [];
     function gtag(){dataLayer.push(arguments);}
     gtag('js', new Date());
     gtag('config', 'G-XXXXXXXXXX');
   </script>
   ```

---

## 6. Core Web Vitals Targets

The codebase is engineered to satisfy Google's Core Web Vitals:
- **LCP (Largest Contentful Paint):** Target ≤ 2.5s.
  - The hero image is eagerly loaded with high fetch priority (`fetchpriority="high"`).
- **INP (Interaction to Next Paint):** Target ≤ 200ms.
  - Heavy legacy runtimes (Webflow IX2, 500KB+ chunks, jQuery) were completely eliminated.
- **CLS (Cumulative Layout Shift):** Target ≤ 0.1.
  - All images specify explicit aspect ratios and reserved dimensions to eliminate layout shifts.
