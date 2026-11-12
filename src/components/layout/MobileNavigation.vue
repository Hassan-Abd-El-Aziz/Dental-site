<script setup>
import { watch, onUnmounted } from 'vue';
import { useRoute } from 'vue-router';
import { useLanguage } from '../../composables/useLanguage.js';
import { navigationConfig } from '../../config/navigation.js';
import { contactConfig } from '../../config/contact.js';
import BrandLogo from '../common/BrandLogo.vue';
import LanguageSwitcher from '../common/LanguageSwitcher.vue';

const props = defineProps({
  isOpen: {
    type: Boolean,
    default: false
  }
});

const emit = defineEmits(['close']);
const { isRTL, localize } = useLanguage();
const route = useRoute();

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

const handleKeydown = (e) => {
  if (e.key === 'Escape' && props.isOpen) {
    emit('close');
  }
};

watch(() => props.isOpen, (open) => {
  if (typeof document !== 'undefined') {
    if (open) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeydown);
    } else {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeydown);
    }
  }
});

onUnmounted(() => {
  if (typeof document !== 'undefined') {
    document.body.style.overflow = '';
    window.removeEventListener('keydown', handleKeydown);
  }
});
</script>

<template>
  <teleport to="body">
    <!-- Backdrop -->
    <transition name="mobile-backdrop">
      <div 
        v-if="isOpen" 
        @click="$emit('close')" 
        class="fixed inset-0 bg-black/60 backdrop-blur-xs z-[9998]"
        aria-hidden="true"
      ></div>
    </transition>

    <!-- Slide-in Drawer -->
    <transition name="mobile-drawer">
      <div 
        v-if="isOpen" 
        class="fixed top-0 bottom-0 z-[9999] w-full max-w-xs sm:max-w-sm bg-white shadow-2xl flex flex-col justify-between overflow-y-auto"
        :class="isRTL ? 'right-0' : 'left-0'"
        role="dialog"
        aria-modal="true"
        :aria-label="isRTL ? 'قائمة التصفح للأجهزة والهواتف' : 'Navigation Menu'"
      >
        <!-- Drawer Header -->
        <div class="p-6 border-b border-gray-100 flex items-center justify-between">
          <BrandLogo :show-tagline="false" @click="$emit('close')" />
          <button 
            @click="$emit('close')" 
            type="button"
            class="w-10 h-10 rounded-full flex items-center justify-center text-gray-500 hover:text-gray-800 hover:bg-gray-100 transition-colors cursor-pointer"
            :aria-label="isRTL ? 'إغلاق القائمة' : 'Close Menu'"
          >
            <svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <!-- Links List -->
        <div class="px-6 py-6 space-y-2 flex-1">
          <router-link
            v-for="item in navigationConfig.mainNav"
            :key="item.id"
            :to="item.path"
            @click="$emit('close')"
            class="flex items-center justify-between py-3 px-4 rounded-xl text-base font-semibold transition-all"
            :class="isNavActive(item) 
              ? '!bg-[#24a3b1] !text-white !font-bold shadow-sm' 
              : 'text-[#011f23] hover:bg-teal-50 hover:text-[#24a3b1]'"
            active-class=""
            exact-active-class=""
          >
            <span>{{ localize(item.name) }}</span>
            <svg class="w-4 h-4" :class="[isRTL ? 'rotate-180' : '', isNavActive(item) ? 'text-white' : 'text-gray-400']" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
            </svg>
          </router-link>

          <!-- Appointment Link -->
          <router-link
            to="/appointment"
            @click="$emit('close')"
            class="flex items-center justify-center gap-2 mt-4 py-3.5 px-4 rounded-xl text-sm font-bold bg-[#24a3b1] text-white shadow-md hover:bg-[#1b8591] transition-all"
            active-class="!bg-[#146b75] !text-white ring-2 ring-[#24a3b1]"
          >
            <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            <span>{{ isRTL ? 'طلب حجز موعد' : 'Request Appointment' }}</span>
          </router-link>
        </div>

        <!-- Drawer Footer -->
        <div class="p-6 bg-gray-50 border-t border-gray-100 space-y-4">
          <div class="flex items-center justify-between">
            <span class="text-xs font-semibold text-gray-500 uppercase">
              {{ isRTL ? 'اللغة' : 'Language' }}
            </span>
            <LanguageSwitcher />
          </div>

          <div class="pt-2 text-xs text-gray-500 space-y-1">
            <p class="font-medium text-gray-700">{{ isRTL ? 'للاتصال المباشر:' : 'Direct Phone:' }}</p>
            <a :href="`tel:${contactConfig.phoneFormatted}`" class="text-[#24a3b1] font-bold text-sm block">
              {{ contactConfig.phone }}
            </a>
          </div>
        </div>
      </div>
    </transition>
  </teleport>
</template>

<style>
/* Transitions for Teleported Mobile Drawer */
.mobile-backdrop-enter-active,
.mobile-backdrop-leave-active {
  transition: opacity 0.3s ease;
}
.mobile-backdrop-enter-from,
.mobile-backdrop-leave-to {
  opacity: 0;
}

.mobile-drawer-enter-active,
.mobile-drawer-leave-active {
  transition: transform 0.3s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.2s ease;
}
.mobile-drawer-enter-from,
.mobile-drawer-leave-to {
  transform: translateX(100%);
  opacity: 0;
}
html[dir="ltr"] .mobile-drawer-enter-from,
html[dir="ltr"] .mobile-drawer-leave-to {
  transform: translateX(-100%);
  opacity: 0;
}
.mobile-drawer-enter-to,
.mobile-drawer-leave-from {
  transform: translateX(0);
  opacity: 1;
}
</style>
