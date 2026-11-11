# ASSET MAPPING & INVENTORY
## Hassan Dental Website Migration

This document maps all visual, photographic, and brand assets migrated from the original Lumora Dental repository into the new Hassan Dental Vue 3 + Tailwind CSS 4.3 architecture.

---

## 1. Asset Storage Strategy
- **Static Assets in `public/images/`**: All photographic files (`gen_*.jpg`), responsive WebP variations, and SVG icons are directly accessible at `/images/<filename>`.
- **Favicon & Webclip in `public/`**: Accessible directly at root `/favicon.svg` and `/webclip.png`.
- **CSS Backgrounds in `src/assets/styles/original-system.css`**: All background image references (`url("../img/...")`) have been updated to `/images/...`.

---

## 2. Master Photographic Asset Mapping

| Component / Section | Original Path in Repo | Migrated Path in Project | Alt Text Description (Bilingual) | Dimensions / Aspect |
| :--- | :--- | :--- | :--- | :--- |
| **Hero Main Image** | `assets/img/gen_dentist-examining-patients-teeth-close-up_1.jpg` | `/images/gen_dentist-examining-patients-teeth-close-up_1.jpg` | فحص أسنان دقيق في عيادة حسن للأسنان / Close-up dental examination at Hassan Dental | 1200x800 (Eager loaded, LCP priority) |
| **Hero Carousel Slide 2** | `assets/img/gen_hero-2.jpg` | `/images/gen_hero-2.jpg` | فريق أطباء عيادة حسن للأسنان / Hassan Dental specialist team | 1024x768 |
| **Hero Carousel Slide 3** | `assets/img/gen_hero-3.jpg` | `/images/gen_hero-3.jpg` | أحدث تقنيات طب الأسنان الحديث / Modern dental clinic technology | 1024x768 |
| **Hero Carousel Slide 4** | `assets/img/gen_hero-4.jpg` | `/images/gen_hero-4.jpg` | رعاية أسنان مريحة وغير مؤلمة / Gentle and pain-free dental care | 1024x768 |
| **About Hero Image** | `assets/img/gen_about-hero-image.jpg` | `/images/gen_about-hero-image.jpg` | داخل عيادة حسن لطب وجراحة الأسنان / Inside Hassan Dental Clinic | 1200x600 |
| **Values / Why Choose Us** | `assets/img/gen_home-value-image.jpg` | `/images/gen_home-value-image.jpg` | معايير الجودة والراحة في عيادة حسن / Quality and comfort standards at Hassan Dental | 800x600 |
| **Service: Whitening & Cosmetic** | `assets/img/gen_service-thumbnail-image.jpg` | `/images/gen_service-thumbnail-image.jpg` | تبييض وتجميل الأسنان / Teeth Whitening & Cosmetic Dentistry | 600x400 |
| **Service: Dental Implants** | `assets/img/gen_service-thumbnail-image-2.jpg` | `/images/gen_service-thumbnail-image-2.jpg` | زراعة الأسنان التعويضية / Dental Implants & Oral Surgery | 600x400 |
| **Service: Orthodontics** | `assets/img/gen_service-thumbnail-image-3.jpg` | `/images/gen_service-thumbnail-image-3.jpg` | تقويم الأسنان الشفاف والتقليدي / Orthodontics & Clear Aligners | 600x400 |
| **Service: Checkups & Hygiene** | `assets/img/gen_service-thumbnail-image-4.jpg` | `/images/gen_service-thumbnail-image-4.jpg` | تنظيف الأسنان وفحص الوقاية / Routine Dental Cleaning & Prevention | 600x400 |
| **Doctor 1 (Lead Orthodontist)** | `assets/img/gen_team-image-1.jpg` | `/images/gen_team-image-1.jpg` | أخصائي تقويم وجراحة الأسنان / Specialist Orthodontist | 600x700 |
| **Doctor 2 (Cosmetic Dentist)** | `assets/img/gen_team-image-2.jpg` | `/images/gen_team-image-2.jpg` | أخصائية تجميل الأسنان وابتسامة هوليوود / Cosmetic Dentistry Specialist | 600x700 |
| **Doctor 3 (Pediatric Dentist)** | `assets/img/gen_team-image-3.jpg` | `/images/gen_team-image-3.jpg` | أخصائي طب أسنان الأطفال / Pediatric Dental Specialist | 600x700 |
| **Doctor 4 (Implantologist)** | `assets/img/gen_team-image-4.jpg` | `/images/gen_team-image-4.jpg` | استشاري زراعة الأسنان وعلاج اللثة / Periodontist & Implantologist | 600x700 |
| **Doctor 5 (Endodontist)** | `assets/img/gen_team-image-5.jpg` | `/images/gen_team-image-5.jpg` | أخصائي علاج جذور وعصب الأسنان / Endodontic Root Canal Specialist | 600x700 |
| **Doctor 6 (Senior Hygienist)** | `assets/img/gen_team-image-6.jpg` | `/images/gen_team-image-6.jpg` | أخصائية صحة ونظافة الفن والأسنان / Senior Dental Hygienist | 600x700 |
| **Testimonial Patient 1** | `assets/img/gen_testimonial-author-1.jpg` | `/images/gen_testimonial-author-1.jpg` | مريض راضٍ عن تجربة العلاج / Verified clinic patient | 200x200 |
| **Testimonial Patient 2** | `assets/img/gen_testimonial-author-2.jpg` | `/images/gen_testimonial-author-2.jpg` | مريضة تعبر عن رضاها عن ابتسامتها الجديدة / Verified clinic patient | 200x200 |
| **Testimonial Patient 3** | `assets/img/gen_testimonial-author-3.jpg` | `/images/gen_testimonial-author-3.jpg` | تقييم مريض لعيادة حسن للأسنان / Verified clinic patient | 200x200 |
| **Story Gallery 1 to 5** | `assets/img/gen_our-story-image-[1-5].jpg` | `/images/gen_our-story-image-[1-5].jpg` | محطات مسيرة عيادة حسن للأسنان / Hassan Dental clinic milestone gallery | 800x600 |
| **Blog Articles 1 to 6** | `assets/img/gen_blog-image-[1-6].jpg` | `/images/gen_blog-image-[1-6].jpg` | صور المقالات والنصائح السنية / Dental advice & oral healthcare articles | 800x500 |

---

## 3. Brand & Graphic Assets

| Purpose | Original Asset | Replaced / Upgraded In Hassan Dental |
| :--- | :--- | :--- |
| **Main Header Logo** | `lumora-logo.svg` | Replaced with `BrandLogo.vue` / `/images/hassan-dental-logo.svg` (Teal #24a3b1 emblem + "Hassan Dental / عيادة حسن للأسنان" typography) |
| **Footer Dark Logo** | `lumora-logo-dark.svg` | Replaced with `BrandLogo.vue` (mode="dark") with pure white and teal contrast |
| **Favicon** | `favicon.svg` | Rebranded modern tooth emblem with cyan gradient |
| **Webclip** | `webclip.png` | 256x256 branded touch icon |
| **Card Backgrounds** | `testimonial-background.webp` | Preserved in `/images/69ddd539a343355970d2be89_testimonial-background.webp` |
| **Awards & Certifications** | `awards-image-[1-4].webp` | Preserved in `/images/` |
| **Clinic Facilities** | `location-image-[1-3].webp` | Preserved in `/images/` |

---

## 4. Verification & Safeguards
1. **Fallback Image Directive**: Every image in the application is protected by a fallback handler that prevents broken image icons if any network hiccup occurs.
2. **Aspect Ratios**: Exact aspect ratios (4:3, 16:9, 1:1) from the original design are preserved using Tailwind aspect utility classes and CSS properties.
3. **No External CDN Dependencies**: All images are locally hosted in `public/images/`, eliminating external third-party failures.
