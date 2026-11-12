import { seoConfig } from '../config/seo.js';
import { contactConfig } from '../config/contact.js';
import { siteConfig } from '../config/site.js';

export function generateSchemaJsonLd(pageType = 'Dentist', pageData = {}) {
  const isEn = pageData.lang === 'en';
  const name = isEn ? siteConfig.name.en : siteConfig.name.ar;
  const description = isEn ? seoConfig.defaultDescription.en : seoConfig.defaultDescription.ar;
  const addressLocality = isEn ? contactConfig.city.en : contactConfig.city.ar;
  const addressCountry = 'SA';
  const streetAddress = isEn ? contactConfig.address.en : contactConfig.address.ar;

  const baseDentalSchema = {
    '@context': 'https://schema.org',
    '@type': 'Dentist',
    '@id': `${seoConfig.baseUrl}/#clinic`,
    'name': name,
    'alternateName': isEn ? siteConfig.name.ar : siteConfig.name.en,
    'url': seoConfig.baseUrl,
    'logo': `${seoConfig.baseUrl}/images/favicon.svg`,
    'image': [
      `${seoConfig.baseUrl}${seoConfig.defaultImage}`,
      `${seoConfig.baseUrl}/images/gen_about-hero-image.jpg`
    ],
    'description': description,
    'telephone': contactConfig.phoneFormatted,
    'priceRange': '$$',
    'address': {
      '@type': 'PostalAddress',
      'streetAddress': streetAddress,
      'addressLocality': addressLocality,
      'postalCode': contactConfig.postalCode,
      'addressCountry': addressCountry
    },
    'geo': {
      '@type': 'GeoCoordinates',
      'latitude': contactConfig.geo.latitude,
      'longitude': contactConfig.geo.longitude
    },
    'openingHoursSpecification': [
      {
        '@type': 'OpeningHoursSpecification',
        'dayOfWeek': ['Saturday', 'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday'],
        'opens': '09:00',
        'closes': '21:00'
      },
      {
        '@type': 'OpeningHoursSpecification',
        'dayOfWeek': ['Friday'],
        'opens': '14:00',
        'closes': '21:00'
      }
    ],
    'sameAs': [
      siteConfig.socials.facebook,
      siteConfig.socials.instagram,
      siteConfig.socials.twitter,
      siteConfig.socials.linkedin
    ],
    'hasMap': contactConfig.mapsUrl,
    'currenciesAccepted': 'SAR',
    'paymentAccepted': 'Cash, Credit Card, Apple Pay, Mada',
    'medicalSpecialty': [
      'Dentistry',
      'Orthodontics',
      'OralSurgeon',
      'PediatricDentistry',
      'Periodontics'
    ]
  };

  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${seoConfig.baseUrl}/#website`,
    'url': seoConfig.baseUrl,
    'name': name,
    'inLanguage': ['ar', 'en'],
    'publisher': {
      '@id': `${seoConfig.baseUrl}/#clinic`
    }
  };

  return [baseDentalSchema, websiteSchema];
}

export function updatePageSeo(meta = {}) {
  if (typeof document === 'undefined') return;

  const {
    title,
    description,
    image,
    url,
    lang = 'ar',
    breadcrumbs = []
  } = meta;

  // Title
  if (title) {
    document.title = title;
  }

  const setMeta = (name, content, isProperty = false) => {
    if (!content) return;
    const attr = isProperty ? 'property' : 'name';
    let el = document.querySelector(`meta[${attr}="${name}"]`);
    if (!el) {
      el = document.createElement('meta');
      el.setAttribute(attr, name);
      document.head.appendChild(el);
    }
    el.setAttribute('content', content);
  };

  // Description & General
  setMeta('description', description);
  setMeta('robots', 'index, follow, max-image-preview:large');

  // Open Graph
  setMeta('og:title', title, true);
  setMeta('og:description', description, true);
  setMeta('og:url', url || window.location.href, true);
  setMeta('og:type', 'website', true);
  setMeta('og:image', image || `${seoConfig.baseUrl}${seoConfig.defaultImage}`, true);
  setMeta('og:site_name', lang === 'en' ? siteConfig.name.en : siteConfig.name.ar, true);
  setMeta('og:locale', lang === 'ar' ? 'ar_SA' : 'en_US', true);
  setMeta('og:locale:alternate', lang === 'ar' ? 'en_US' : 'ar_SA', true);

  // Twitter
  setMeta('twitter:card', 'summary_large_image');
  setMeta('twitter:title', title);
  setMeta('twitter:description', description);
  setMeta('twitter:image', image || `${seoConfig.baseUrl}${seoConfig.defaultImage}`);
  setMeta('twitter:site', seoConfig.twitterHandle);

  // Canonical
  let canonical = document.querySelector('link[rel="canonical"]');
  if (!canonical) {
    canonical = document.createElement('link');
    canonical.setAttribute('rel', 'canonical');
    document.head.appendChild(canonical);
  }
  canonical.setAttribute('href', url || window.location.href.split('?')[0]);

  // JSON-LD Scripts
  let scriptEl = document.getElementById('seo-json-ld');
  if (!scriptEl) {
    scriptEl = document.createElement('script');
    scriptEl.id = 'seo-json-ld';
    scriptEl.type = 'application/ld+json';
    document.head.appendChild(scriptEl);
  }
  const schemas = generateSchemaJsonLd('Dentist', { lang });
  if (breadcrumbs.length > 0) {
    schemas.push({
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      'itemListElement': breadcrumbs.map((crumb, idx) => ({
        '@type': 'ListItem',
        'position': idx + 1,
        'name': crumb.name,
        'item': `${seoConfig.baseUrl}${crumb.path}`
      }))
    });
  }
  scriptEl.textContent = JSON.stringify(schemas);
}
