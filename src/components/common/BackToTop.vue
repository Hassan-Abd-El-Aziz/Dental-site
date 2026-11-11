<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import { useLanguage } from '../../composables/useLanguage.js';

const { isRTL } = useLanguage();
const show = ref(false);

const checkScroll = () => {
  if (typeof window !== 'undefined') {
    show.value = window.scrollY > 400;
  }
};

const scrollToTop = () => {
  if (typeof window !== 'undefined') {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
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
  <button
    v-show="show"
    @click="scrollToTop"
    type="button"
    class="fixed bottom-6 z-40 w-11 h-11 flex items-center justify-center rounded-full bg-white text-[#011f23] hover:text-[#24a3b1] border border-gray-200 shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-200 cursor-pointer"
    :class="isRTL ? 'right-6' : 'left-6'"
    aria-label="الرجوع إلى أعلى الصفحة"
  >
    <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5">
      <path stroke-linecap="round" stroke-linejoin="round" d="M5 15l7-7 7 7" />
    </svg>
  </button>
</template>
