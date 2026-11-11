<script setup>
import { computed, onMounted } from 'vue';
import { useLanguage } from '../../composables/useLanguage.js';
import { useAnimation } from '../../composables/useAnimation.js';
import { contactConfig } from '../../config/contact.js';

const { currentLang, isRTL, t } = useLanguage();
const { revealElements } = useAnimation();

const whatsappUrl = computed(() => {
  const isAr = currentLang.value === 'ar';
  const text = isAr 
    ? 'مرحباً بريستيج سمايل لطب الأسنان، أود الاستفسار عن أقرب موعد متاح للكشف والاستشارة.'
    : 'Hello Prestige Smile Dental Clinic, I would like to check available slots for a dental consultation.';
  return `https://wa.me/${contactConfig.whatsappNumber}?text=${encodeURIComponent(text)}`;
});

onMounted(() => {
  revealElements('.cta-reveal', { y: 30, duration: 0.7 });
});
</script>

<template>
  <section class="py-16 sm:py-24 bg-gradient-to-r from-[#011f23] via-[#022f34] to-[#011f23] text-white relative overflow-hidden">
    <!-- Glowing background accent -->
    <div class="absolute -top-24 -left-24 w-96 h-96 bg-[#24a3b1]/20 rounded-full blur-3xl pointer-events-none"></div>
    <div class="absolute -bottom-24 -right-24 w-96 h-96 bg-teal-400/10 rounded-full blur-3xl pointer-events-none"></div>

    <div class="site-container relative z-10 text-center max-w-4xl mx-auto cta-reveal">
      
      <span class="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-white/10 text-teal-300 border border-white/10 mb-6">
        <span class="w-2 h-2 rounded-full bg-[#24a3b1]"></span>
        {{ isRTL ? 'خطوتك الأولى نحو ابتسامة أحلامك' : 'Your First Step to a Confident Smile' }}
      </span>

      <h2 class="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight leading-tight mb-6">
        {{ t('ctaBanner.title') }}
      </h2>

      <p class="text-base sm:text-lg text-teal-100/80 max-w-2xl mx-auto mb-10 leading-relaxed font-normal">
        {{ t('ctaBanner.subtitle') }}
      </p>

      <div class="flex flex-wrap items-center justify-center gap-4">
        <!-- WhatsApp Primary CTA with 30% transparency -->
        <a 
          :href="whatsappUrl"
          target="_blank"
          rel="noopener noreferrer"
          class="btn-primary text-sm sm:text-base py-4 px-8 bg-emerald-500/70 hover:bg-emerald-600/90 backdrop-blur-md border border-white/30 shadow-xl"
        >
          <svg class="w-5 h-5 fill-current" viewBox="0 0 24 24">
            <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.007c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86.173.086.275.072.376-.044.101-.116.433-.506.549-.68.116-.173.231-.145.39-.087s1.011.477 1.184.564.289.13.332.202c.045.072.045.419-.1.824z"/>
          </svg>
          <span>{{ t('ctaBanner.btnWhatsApp') }}</span>
        </a>

        <!-- Call Clinic Button -->
        <a 
          :href="`tel:${contactConfig.phoneFormatted}`"
          class="btn-white text-sm sm:text-base py-4 px-8"
        >
          <svg class="w-5 h-5 text-[#24a3b1]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
          </svg>
          <span>{{ t('ctaBanner.btnCall') }} ({{ contactConfig.phone }})</span>
        </a>
      </div>

    </div>
  </section>
</template>
