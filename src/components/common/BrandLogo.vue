<script setup>
import { computed } from 'vue';
import { useLanguage } from '../../composables/useLanguage.js';
import { siteConfig } from '../../config/site.js';

const props = defineProps({
  mode: {
    type: String,
    default: 'light' // 'light' or 'dark'
  },
  showTagline: {
    type: Boolean,
    default: true
  }
});

const { currentLang, isRTL } = useLanguage();

const isDark = computed(() => props.mode === 'dark');
</script>

<template>
  <router-link to="/" class="inline-flex items-center gap-2 sm:gap-3 group select-none text-decoration-none">
    <!-- Premium Tooth & Smile Luxury Emblem -->
    <div class="relative w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center rounded-xl bg-gradient-to-tr from-[#146b75] via-[#24a3b1] to-[#5eead4] p-1.5 sm:p-2 shadow-md group-hover:scale-105 transition-transform duration-300 shrink-0">
      <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-full h-full text-white">
        <!-- Tooth Shape -->
        <path d="M20 4C13.5 4 8 8.5 8 15C8 20 10.5 24 13 29C15 33 16.5 37 18 37C19.5 37 19.5 32 20 32C20.5 32 20.5 37 22 37C23.5 37 25 33 27 29C29.5 24 32 20 32 15C32 8.5 26.5 4 20 4Z" 
              fill="currentColor" fill-opacity="0.95" />
        <!-- Smile Sparkle Accent -->
        <path d="M14 17C17 21 23 21 26 17" stroke="#011f23" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/>
        <circle cx="20" cy="11" r="2" fill="#011f23" />
      </svg>
      <div class="absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-emerald-400 border-2 border-white"></div>
    </div>

    <!-- Typography: "بريستيج سمايل | Prestige Smile" -->
    <div class="flex flex-col text-start leading-tight">
      <div class="flex items-center gap-1 sm:gap-1.5 whitespace-nowrap">
        <span class="text-sm sm:text-lg md:text-xl font-black tracking-tight" :class="isDark ? 'text-white' : 'text-[#011f23]'">
          {{ isRTL ? 'بريستيج' : 'Prestige' }}
        </span>
        <span class="text-sm sm:text-lg md:text-xl font-black text-[#24a3b1] tracking-tight">
          {{ isRTL ? 'سمايل' : 'Smile' }}
        </span>
      </div>
      <span v-if="showTagline" class="text-[9px] sm:text-[11px] font-semibold tracking-wide whitespace-nowrap" :class="isDark ? 'text-teal-200/80' : 'text-gray-500'">
        {{ isRTL ? 'لطب وتجميل الأسنان' : 'Dental & Aesthetic Clinic' }}
      </span>
    </div>
  </router-link>
</template>
