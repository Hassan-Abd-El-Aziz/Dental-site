<script setup>
import { useLanguage } from '../../composables/useLanguage.js';

const props = defineProps({
  iconOnly: {
    type: Boolean,
    default: false
  }
});

const { currentLang, toggleLanguage } = useLanguage();
</script>

<template>
  <button 
    @click="toggleLanguage" 
    type="button"
    class="inline-flex items-center justify-center transition-all duration-200 cursor-pointer select-none border border-gray-200 bg-white/90 text-gray-800 hover:border-[#24a3b1] hover:text-[#24a3b1] shadow-xs active:scale-95"
    :class="iconOnly ? 'w-9 h-9 sm:w-10 sm:h-10 rounded-xl p-2 gap-1' : 'gap-2 px-3 py-1.5 rounded-full text-xs font-semibold'"
    :aria-label="currentLang === 'ar' ? 'Switch to English' : 'التحويل إلى اللغة العربية'"
    :title="currentLang === 'ar' ? 'English' : 'العربية'"
  >
    <!-- Globe Icon -->
    <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 text-[#24a3b1] shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <circle cx="12" cy="12" r="10"></circle>
      <line x1="2" y1="12" x2="22" y2="12"></line>
      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
    </svg>
    <span class="font-bold uppercase tracking-wider" :class="iconOnly ? 'text-[10px] text-[#24a3b1]' : 'text-[11px]'">
      {{ currentLang === 'ar' ? (iconOnly ? 'EN' : 'English') : (iconOnly ? 'عربي' : 'العربية') }}
    </span>
  </button>
</template>
