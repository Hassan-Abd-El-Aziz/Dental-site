<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import { useRoute } from 'vue-router';
import { useLanguage } from '../../composables/useLanguage.js';
import { navigationConfig } from '../../config/navigation.js';
import { contactConfig } from '../../config/contact.js';
import BrandLogo from '../common/BrandLogo.vue';
import LanguageSwitcher from '../common/LanguageSwitcher.vue';
import MobileNavigation from './MobileNavigation.vue';

const { currentLang, isRTL, t, localize } = useLanguage();
const route = useRoute();

const isScrolled = ref(false);
const isMobileOpen = ref(false);

const isNavActive = (item) => {
  if (!route) return false;
  if (item.path.includes('#')) {
    const hash = item.path.substring(item.path.indexOf('#'));
    return route.hash === hash;
  }
  if (item.path === '/') {
    return route.path === '/' && (!route.hash || route.hash === '');
  }
  return route.path === item.path || route.path.startsWith(`${item.path}/`);
};

const checkScroll = () => {
  if (typeof window !== 'undefined') {
    isScrolled.value = window.scrollY > 20;
  }
};

onMounted(() => {
  window.addEventListener('scroll', checkScroll, { passive: true });
});

onUnmounted(() => {
  window.removeEventListener('scroll', checkScroll);
});
</script>

<template>
  <header 
    class="fixed top-0 left-0 right-0 z-40 transition-all duration-300"
    :class="isScrolled ? 'bg-white/95 backdrop-blur-md shadow-sm py-2.5 sm:py-3' : 'bg-transparent py-3 sm:py-5'"
  >
    <div class="site-container flex items-center justify-between gap-2 sm:gap-4">
      <!-- 1. Side: Clinic Brand Logo -->
      <div class="shrink-0">
        <BrandLogo />
      </div>

      <!-- 2. Large Screens Navigation Menu (يظهر في الشاشات الكبيرة ويختفي تماماً عند ظهور زر المنيو) -->
      <nav 
        class="header-nav items-center gap-1.5 2xl:gap-2 bg-white/70 backdrop-blur-xs px-3 py-1.5 rounded-full border border-gray-100 shadow-xs" 
        aria-label="Main Navigation"
      >
        <router-link
          v-for="item in navigationConfig.mainNav"
          :key="item.id"
          :to="item.path"
          class="px-4 py-2 rounded-full text-xs 2xl:text-sm font-semibold transition-all duration-200 whitespace-nowrap"
          :class="isNavActive(item) 
            ? 'bg-[#24a3b1] text-white font-bold shadow-sm' 
            : 'text-[#011f23] hover:text-[#24a3b1] hover:bg-teal-50/70'"
          active-class=""
          exact-active-class=""
        >
          {{ localize(item.name) }}
        </router-link>
      </nav>

      <!-- 3. Side Actions: Language Switcher, ONE Single Booking Button & Menu Toggle Button -->
      <div class="flex items-center gap-1.5 sm:gap-2.5 shrink-0">
        <!-- Desktop Language Switcher -->
        <div class="header-lang-desktop shrink-0">
          <LanguageSwitcher :icon-only="false" />
        </div>

        <!-- Mobile & Tablet Language Switcher Icon -->
        <div class="header-lang-mobile shrink-0">
          <LanguageSwitcher :icon-only="true" />
        </div>

        <!-- Single Dedicated Booking Button (زر واحد فقط لحجز الموعد لجميع الشاشات لمنع أي تكرار) -->
        <router-link
          to="/appointment"
          class="inline-flex items-center gap-1.5 sm:gap-2 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full bg-gradient-to-r from-[#146b75] to-[#24a3b1] text-white shadow-md hover:shadow-lg transition-all active:scale-95 border border-white/20 select-none text-xs sm:text-sm font-bold whitespace-nowrap shrink-0"
          :title="isRTL ? 'حجز موعد' : 'Book Visit'"
          :aria-label="isRTL ? 'حجز موعد' : 'Book Visit'"
        >
          <svg class="w-4 h-4 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
          <span class="text-[11px] sm:text-xs font-bold">{{ isRTL ? 'حجز موعد' : 'Book Visit' }}</span>
        </router-link>

        <!-- Menu Toggle Button: يظهر فقط في الشاشات الصغيرة وعند ظهوره يختفي الناف بار تماماً -->
        <button
          @click="isMobileOpen = !isMobileOpen"
          type="button"
          class="header-menu-btn relative w-9 h-9 sm:w-10 sm:h-10 rounded-xl items-center justify-center border transition-all duration-200 cursor-pointer select-none active:scale-95 shadow-xs shrink-0"
          :class="isMobileOpen 
            ? 'bg-teal-50 border-[#24a3b1] text-[#24a3b1]' 
            : 'border-gray-200 bg-white/95 text-gray-800 hover:text-[#24a3b1] hover:border-[#24a3b1] hover:bg-teal-50/60'"
          :aria-expanded="isMobileOpen"
          :aria-label="isMobileOpen ? (isRTL ? 'إغلاق القائمة' : 'Close Menu') : (isRTL ? 'فتح القائمة الرئيسية' : 'Open Menu')"
          :title="isMobileOpen ? (isRTL ? 'إغلاق' : 'Close') : (isRTL ? 'القائمة' : 'Menu')"
        >
          <!-- SVG Close icon when open -->
          <svg v-if="isMobileOpen" class="w-5 h-5 text-[#24a3b1]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M6 18L18 6M6 6l12 12" />
          </svg>
          <!-- SVG 3-Bar Hamburger icon when closed -->
          <svg v-else class="w-5 h-5 text-gray-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    </div>

    <!-- Mobile Drawer Component -->
    <MobileNavigation :is-open="isMobileOpen" @close="isMobileOpen = false" />
  </header>
</template>

<style scoped>
/* عند ظهور زر الـ menu toggle (< 1024px)، يختفي الـ nav تماماً */
@media (max-width: 1023px) {
  .header-nav {
    display: none !important;
  }
  .header-menu-btn {
    display: flex !important;
  }
  .header-lang-desktop {
    display: none !important;
  }
  .header-lang-mobile {
    display: block !important;
  }
}

/* في الشاشات الكبيرة (>= 1024px)، يظهر الـ nav ويختفي زر الـ menu toggle تماماً */
@media (min-width: 1024px) {
  .header-nav {
    display: flex !important;
  }
  .header-menu-btn {
    display: none !important;
  }
  .header-lang-desktop {
    display: block !important;
  }
  .header-lang-mobile {
    display: none !important;
  }
}
</style>
