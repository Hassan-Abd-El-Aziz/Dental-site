<script setup>
import { computed } from 'vue';
import { contactConfig } from '../../config/contact.js';
import { useLanguage } from '../../composables/useLanguage.js';

const props = defineProps({
  floating: {
    type: Boolean,
    default: true
  },
  customText: {
    type: String,
    default: ''
  }
});

const { currentLang, isRTL } = useLanguage();

const whatsappUrl = computed(() => {
  const isAr = currentLang.value === 'ar';
  const text = isAr 
    ? 'مرحباً بريستيج سمايل لطب الأسنان، أود الاستفسار عن حجز موعد كشف واستشارة.'
    : 'Hello Prestige Smile Dental Clinic, I would like to inquire about booking an appointment.';
  return `https://wa.me/${contactConfig.whatsappNumber}?text=${encodeURIComponent(text)}`;
});
</script>

<template>
  <!-- Floating Variant (bottom corner) with White 40% transparency background for high contrast over footer and page -->
  <a 
    v-if="floating"
    :href="whatsappUrl"
    target="_blank"
    rel="noopener noreferrer"
    class="fixed bottom-6 z-50 flex items-center gap-2.5 px-3.5 py-2.5 sm:px-4 sm:py-3 bg-white/40 hover:bg-white/60 backdrop-blur-md text-[#011f23] rounded-full shadow-xl hover:shadow-2xl border border-white/60 transition-all duration-300 hover:scale-105 group select-none cursor-pointer"
    :class="isRTL ? 'left-6' : 'right-6'"
    aria-label="تواصل مع بريستيج سمايل عبر الواتساب"
  >
    <span class="relative flex h-3 w-3">
      <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75"></span>
      <span class="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
    </span>
    
    <!-- WhatsApp SVG -->
    <svg class="w-6 h-6 text-emerald-600 fill-current shrink-0" viewBox="0 0 24 24">
      <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.007c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86.173.086.275.072.376-.044.101-.116.433-.506.549-.68.116-.173.231-.145.39-.087s1.011.477 1.184.564.289.13.332.202c.045.072.045.419-.1.824z"/>
      <path fill-rule="evenodd" clip-rule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 1.891.524 3.66 1.435 5.176L2.05 21.95l4.896-1.341C8.423 21.492 10.153 22 12 22c5.523 0 10-4.477 10-10S17.523 2 12 2zm0 18.2c-1.637 0-3.15-.468-4.43-1.277l-.317-.199-3.267.895.894-3.21-.215-.333C3.81 14.773 3.3 13.43 3.3 12c0-4.797 3.903-8.7 8.7-8.7s8.7 3.903 8.7 8.7-3.903 8.7-8.7 8.7z"/>
    </svg>
    <span class="text-xs font-bold text-[#011f23] hidden sm:inline-block">
      {{ isRTL ? 'تواصل واتساب' : 'WhatsApp' }}
    </span>
  </a>

  <!-- Inline Button Variant with 30% transparency -->
  <a 
    v-else
    :href="whatsappUrl"
    target="_blank"
    rel="noopener noreferrer"
    class="inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-emerald-500/70 hover:bg-emerald-600/90 backdrop-blur-md text-white font-semibold rounded-full shadow-md hover:shadow-lg border border-white/30 transition-all duration-200 cursor-pointer"
  >
    <svg class="w-5 h-5 fill-current" viewBox="0 0 24 24">
      <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.007c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86.173.086.275.072.376-.044.101-.116.433-.506.549-.68.116-.173.231-.145.39-.087s1.011.477 1.184.564.289.13.332.202c.045.072.045.419-.1.824z"/>
      <path fill-rule="evenodd" clip-rule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 1.891.524 3.66 1.435 5.176L2.05 21.95l4.896-1.341C8.423 21.492 10.153 22 12 22c5.523 0 10-4.477 10-10S17.523 2 12 2zm0 18.2c-1.637 0-3.15-.468-4.43-1.277l-.317-.199-3.267.895.894-3.21-.215-.333C3.81 14.773 3.3 13.43 3.3 12c0-4.797 3.903-8.7 8.7-8.7s8.7 3.903 8.7 8.7-3.903 8.7-8.7 8.7z"/>
    </svg>
    <span>{{ customText || (isRTL ? 'حجز موعد عبر الواتساب' : 'Book on WhatsApp') }}</span>
  </a>
</template>
