<script setup>
import { useLanguage } from '../../composables/useLanguage.js';
import { navigationConfig } from '../../config/navigation.js';
import { siteConfig } from '../../config/site.js';
import BrandLogo from '../common/BrandLogo.vue';

const { isRTL, localize } = useLanguage();

const socialMediaList = [
  {
    id: 'facebook',
    name: { ar: 'فيسبوك', en: 'Facebook' },
    url: siteConfig.socials.facebook
  },
  {
    id: 'instagram',
    name: { ar: 'إنستغرام', en: 'Instagram' },
    url: siteConfig.socials.instagram
  },
  {
    id: 'twitter',
    name: { ar: 'منصة إكس (تويتر)', en: 'X (Twitter)' },
    url: siteConfig.socials.twitter
  },
  {
    id: 'linkedin',
    name: { ar: 'لينكد إن', en: 'LinkedIn' },
    url: siteConfig.socials.linkedin
  },
  {
    id: 'youtube',
    name: { ar: 'يوتيوب', en: 'YouTube' },
    url: siteConfig.socials.youtube
  }
];
</script>

<template>
  <footer class="bg-[#011f23] text-white pt-14 sm:pt-16 pb-12 border-t border-teal-950 text-center">
    <div class="site-container">
      <!-- Centered Main Content Area -->
      <div class="max-w-2xl mx-auto flex flex-col items-center text-center space-y-6 mb-12">
        <BrandLogo mode="dark" />
        
        <p class="text-xs sm:text-sm text-teal-100/70 leading-relaxed max-w-xl mx-auto">
          {{ isRTL 
            ? 'بريستيج سمايل لطب وتجميل الأسنان تقدم حلولاً علاجية وتجميلية متكاملة بأحدث الأجهزة والتقنيات الرقمية الفاخرة، لنضمن لك ولعائلتك ابتسامة مشرقة وساحرة.' 
            : 'Prestige Smile is a premier dental & aesthetic clinic dedicated to delivering pain-free, state-of-the-art restorative, cosmetic, and general dental care.' }}
        </p>

        <!-- Social Icons Row (Centered) -->
        <div class="space-y-3 pt-2 flex flex-col items-center">
          <span class="block text-[11px] sm:text-xs font-semibold text-teal-300/80 tracking-wide">
            {{ isRTL ? 'تابعنا على وسائل التواصل الاجتماعي:' : 'Connect With Us:' }}
          </span>
          <div class="flex items-center justify-center gap-3">
            <a 
              v-for="social in socialMediaList" 
              :key="social.id"
              :href="social.url" 
              target="_blank" 
              rel="noopener noreferrer"
              class="w-10 h-10 rounded-xl bg-white/10 hover:bg-white/20 border border-white/15 hover:border-white/30 flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-sm hover:shadow-md group"
              :aria-label="`تابعنا على ${localize(social.name)}`"
              :title="localize(social.name)"
            >
              <!-- Facebook -->
              <svg v-if="social.id === 'facebook'" class="w-6 h-6 shrink-0 transition-transform duration-300 group-hover:scale-105" viewBox="0 0 24 24">
                <circle cx="12" cy="12" r="11" fill="#1877F2" />
                <path fill="#FFFFFF" d="M15.12 12.67l.54-3.52h-3.38V6.86c0-.96.47-1.9 1.98-1.9H15.8V2a19.78 19.78 0 00-2.73-.24c-2.78 0-4.6 1.69-4.6 4.74v2.65H5.4v3.52h3.07V22c.62.1 1.25.15 1.89.15s1.27-.05 1.89-.15v-9.33h2.87z" />
              </svg>

              <!-- Instagram -->
              <svg v-else-if="social.id === 'instagram'" class="w-6 h-6 shrink-0 transition-transform duration-300 group-hover:scale-105" viewBox="0 0 24 24">
                <defs>
                  <linearGradient id="footer-ig-grad" x1="0%" y1="100%" x2="100%" y2="0%">
                    <stop offset="0%" stop-color="#f09433"/>
                    <stop offset="25%" stop-color="#e6683c"/>
                    <stop offset="50%" stop-color="#dc2743"/>
                    <stop offset="75%" stop-color="#cc2366"/>
                    <stop offset="100%" stop-color="#bc1888"/>
                  </linearGradient>
                </defs>
                <rect width="22" height="22" x="1" y="1" rx="6" fill="url(#footer-ig-grad)" />
                <rect width="13" height="13" x="5.5" y="5.5" rx="3.8" fill="none" stroke="#FFFFFF" stroke-width="1.8" />
                <circle cx="12" cy="12" r="3.2" fill="none" stroke="#FFFFFF" stroke-width="1.8" />
                <circle cx="15.8" cy="8.2" r="0.9" fill="#FFFFFF" />
              </svg>

              <!-- Twitter / X -->
              <svg v-else-if="social.id === 'twitter'" class="w-6 h-6 shrink-0 transition-transform duration-300 group-hover:scale-105" viewBox="0 0 24 24">
                <rect width="22" height="22" x="1" y="1" rx="6" fill="#1DA1F2" />
                <path fill="#FFFFFF" d="M16.2 5.5h2.3l-5 5.7 5.9 7.3h-4.6l-3.6-4.7-4.1 4.7H4.7l5.3-6.1L4.3 5.5h4.7l3.3 4.3zm-.8 11.7h1.3L8.6 6.7H7.2z" />
              </svg>

              <!-- LinkedIn -->
              <svg v-else-if="social.id === 'linkedin'" class="w-6 h-6 shrink-0 transition-transform duration-300 group-hover:scale-105" viewBox="0 0 24 24">
                <rect width="22" height="22" x="1" y="1" rx="5" fill="#0077B5" />
                <path fill="#FFFFFF" d="M18.5 18.5v-4.8c0-2.3-1.2-3.4-2.9-3.4-1.3 0-1.9.7-2.3 1.3v-1.1h-2.8v8h2.8v-4.5c0-1.2.6-2.4 2-2.4s1.9 1.2 1.9 2.5v4.4h2.9zM6.9 9.3c-1 0-1.8-.8-1.8-1.8s.8-1.8 1.8-1.8 1.8.8 1.8 1.8-.8 1.8-1.8 1.8zm1.4 9.2H5.5v-8h2.8v8z" />
              </svg>

              <!-- YouTube -->
              <svg v-else-if="social.id === 'youtube'" class="w-6 h-6 shrink-0 transition-transform duration-300 group-hover:scale-105" viewBox="0 0 24 24">
                <path fill="#FF0000" d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814z" />
                <path fill="#FFFFFF" d="M9.75 15.02l5.75-3.02-5.75-3.02v6.04z" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      <!-- Bottom Bar (Centered on Mobile & Tablet) -->
      <div class="pt-8 border-t border-teal-900/60 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-teal-200/60">
        <p>
          &copy; {{ new Date().getFullYear() }} {{ isRTL ? 'بريستيج سمايل لطب الأسنان. جميع الحقوق محفوظة.' : 'Prestige Smile Dental Clinic. All rights reserved.' }}
        </p>

        <!-- Legal Links -->
        <div class="flex items-center justify-center gap-4">
          <router-link 
            v-for="(leg, idx) in navigationConfig.footerLinks.legal" 
            :key="idx" 
            :to="leg.path"
            class="hover:text-white transition-colors"
          >
            {{ localize(leg.name) }}
          </router-link>
        </div>
      </div>
    </div>
  </footer>
</template>
