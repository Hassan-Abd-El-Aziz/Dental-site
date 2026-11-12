<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import { useLanguage } from '../../composables/useLanguage.js';
import { useAnimation } from '../../composables/useAnimation.js';
import { contactConfig } from '../../config/contact.js';

const { isRTL } = useLanguage();
const { animateHero } = useAnimation();

const heroImages = [
  {
    src: '/images/gen_dentist-examining-patients-teeth-close-up_1.jpg',
    alt: 'فحص أسنان مريح ودقيق في بريستيج سمايل'
  },
  {
    src: '/images/gen_hero-2.jpg',
    alt: 'أحدث التجهيزات والتقنيات الطبية في عيادة بريستيج سمايل'
  },
  {
    src: '/images/gen_hero-3.jpg',
    alt: 'ابتسامة صحية وناصعة البياض بعد تبييض الأسنان في بريستيج سمايل'
  },
  {
    src: '/images/gen_hero-4.jpg',
    alt: 'عيادة بريستيج سمايل المجهزة بأعلى معايير التعقيم والراحة'
  }
];

const activeSlide = ref(0);
let timer = null;

const startCarousel = () => {
  timer = setInterval(() => {
    activeSlide.value = (activeSlide.value + 1) % heroImages.length;
  }, 5000);
};

onMounted(() => {
  startCarousel();
  animateHero('#home-hero');
});

onUnmounted(() => {
  if (timer) clearInterval(timer);
});
</script>

<template>
  <section id="home-hero" class="relative pt-12 pb-20 sm:pt-20 sm:pb-28 lg:pt-28 lg:pb-36 overflow-hidden flex items-center min-h-[580px] sm:min-h-[640px] lg:min-h-[720px]">
    
    <!-- ====================================================================
         CYCLING BACKGROUND IMAGES BEHIND HEADLINE (الصور المتقلبة في الخلفية)
         ==================================================================== -->
    <div class="absolute inset-0 w-full h-full overflow-hidden pointer-events-none z-0">
      <img 
        v-for="(img, idx) in heroImages"
        :key="idx"
        :src="img.src"
        :alt="img.alt"
        class="absolute inset-0 w-full h-full object-cover object-center transition-opacity duration-1000 ease-in-out scale-105"
        :class="activeSlide === idx ? 'opacity-100' : 'opacity-0'"
        :loading="idx === 0 ? 'eager' : 'lazy'"
        :fetchpriority="idx === 0 ? 'high' : 'auto'"
        width="1920"
        height="1080"
      />
    </div>

    <!-- ====================================================================
         GENTLE WHITE GRADIENT FROM BOTTOM TO TOP (خلفية خفيفة من الأسفل للأعلى بالأبيض - شفافية أكبر بنسبة 10%)
         ==================================================================== -->
    <div class="absolute inset-0 bg-gradient-to-t from-white/85 via-white/70 to-white/30 z-1"></div>

    <!-- ====================================================================
         FOREGROUND CONTENT
         ==================================================================== -->
    <div class="site-container relative z-10 w-full">
      <div class="max-w-3xl mx-auto text-center space-y-6 sm:space-y-7">
        
        <!-- Clinic Badge -->
        <div class="hero-badge inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/95 backdrop-blur-md border border-teal-200/90 shadow-md">
          <span class="flex h-2.5 w-2.5 relative">
            <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#24a3b1] opacity-75"></span>
            <span class="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#24a3b1]"></span>
          </span>
          <span class="text-xs sm:text-sm font-black text-[#1b8591]">
            {{ isRTL ? 'بريستيج سمايل | Prestige Smile' : 'Prestige Smile Dental Clinic' }}
          </span>
        </div>

        <!-- Main Headline with Distinct Prestige Style Font for Brand, Separated from Subtitle -->
        <h1 class="hero-title text-center">
          <!-- 1. Prestige Brand Name in Distinct Luxury Prestige Font -->
          <span class="block font-prestige text-4xl sm:text-6xl lg:text-7xl font-black text-[#011f23] tracking-wider drop-shadow-xs mb-3">
            {{ isRTL ? 'بريستيج سمايل' : 'PRESTIGE SMILE' }}
          </span>

          <!-- 2. Separated Dental & Aesthetic Tagline -->
          <span class="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-teal-500/10 border border-[#24a3b1]/30 text-sm sm:text-lg md:text-xl font-bold text-[#1b8591] backdrop-blur-xs mb-3">
            <span class="w-2 h-2 rounded-full bg-[#24a3b1]"></span>
            <span>{{ isRTL ? 'لطب وتجميل الأسنان' : 'Dental & Aesthetic Clinic' }}</span>
          </span>

          <!-- 3. Value Proposition Headline -->
          <span class="block text-xl sm:text-2xl lg:text-3xl font-extrabold text-[#011f23] mt-2 leading-snug">
            {{ isRTL ? 'ابتسامة واثقة، صحية ومشرقة تبدأ من رعاية استثنائية' : 'A Confident, Healthy & Radiant Smile Starts Here' }}
          </span>
        </h1>

        <!-- Subtitle Paragraph -->
        <p class="hero-desc text-sm sm:text-base lg:text-lg text-gray-700 max-w-2xl mx-auto leading-relaxed font-medium">
          {{ isRTL 
            ? 'نقدم في بريستيج سمايل أحدث تقنيات طب الأسنان الرقمي والتجميلي في بيئة راقية ومعقمة بالكامل، لنوفر لك ولعائلتك تجربة علاجية استثنائية وخالية تماماً من الألم.' 
            : 'At Prestige Smile, we combine modern digital dentistry with gentle, pain-free techniques in a luxurious, hospital-grade sterile sanctuary.' }}
        </p>

        <!-- CTAs: Mobile-friendly buttons -->
        <div class="hero-cta flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 pt-2">
          <!-- Primary Booking Button -->
          <router-link 
            to="/appointment" 
            class="w-full sm:w-auto btn-primary text-sm sm:text-base py-3.5 px-8 shadow-lg hover:shadow-xl hover:scale-105"
          >
            <svg class="w-5 h-5 fill-current" viewBox="0 0 24 24">
              <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.007c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86.173.086.275.072.376-.044.101-.116.433-.506.549-.68.116-.173.231-.145.39-.087s1.011.477 1.184.564.289.13.332.202c.045.072.045.419-.1.824z"/>
            </svg>
            <span>{{ isRTL ? 'احجز موعدك الآن' : 'Book Your Visit' }}</span>
          </router-link>

          <!-- Direct Phone Call CTA -->
          <a 
            :href="`tel:${contactConfig.phoneFormatted}`" 
            class="w-full sm:w-auto btn-white text-sm sm:text-base py-3.5 px-6 border border-gray-200"
          >
            <svg class="w-4 h-4 text-[#24a3b1]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            <span>{{ isRTL ? 'اتصال مباشر:' : 'Call Clinic:' }} {{ contactConfig.phone }}</span>
          </a>
        </div>

        <!-- Trust Badges & Metrics Row -->
        <div class="pt-6 sm:pt-8 grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 max-w-2xl mx-auto border-t border-gray-200/80">
          
          <div class="bg-white/90 backdrop-blur-md rounded-2xl p-3 sm:p-4 border border-teal-100 shadow-xs text-center">
            <span class="block text-lg sm:text-2xl font-black text-[#1b8591]">4.9 ★</span>
            <span class="block text-[11px] sm:text-xs text-gray-600 font-semibold">{{ isRTL ? 'تقييم ممتاز معتمد' : 'Verified Reviews' }}</span>
          </div>

          <div class="bg-white/90 backdrop-blur-md rounded-2xl p-3 sm:p-4 border border-teal-100 shadow-xs text-center">
            <span class="block text-lg sm:text-2xl font-black text-[#1b8591]">15+</span>
            <span class="block text-[11px] sm:text-xs text-gray-600 font-semibold">{{ isRTL ? 'سنة من الخبرة' : 'Years Experience' }}</span>
          </div>

          <div class="bg-white/90 backdrop-blur-md rounded-2xl p-3 sm:p-4 border border-teal-100 shadow-xs text-center">
            <span class="block text-lg sm:text-2xl font-black text-[#1b8591]">25,000+</span>
            <span class="block text-[11px] sm:text-xs text-gray-600 font-semibold">{{ isRTL ? 'ابتسامة ناجحة' : 'Smiles Treated' }}</span>
          </div>

          <div class="bg-white/90 backdrop-blur-md rounded-2xl p-3 sm:p-4 border border-teal-100 shadow-xs text-center">
            <span class="block text-lg sm:text-2xl font-black text-[#1b8591]">100%</span>
            <span class="block text-[11px] sm:text-xs text-gray-600 font-semibold">{{ isRTL ? 'تعقيم مشدد' : 'Sterilization' }}</span>
          </div>

        </div>

        <!-- Background Image Switcher Dots -->
        <div class="flex items-center justify-center gap-2 pt-2">
          <button 
            v-for="(_, idx) in heroImages" 
            :key="idx"
            @click="activeSlide = idx"
            type="button"
            class="h-2 rounded-full transition-all duration-300 cursor-pointer"
            :class="activeSlide === idx ? 'w-8 bg-[#24a3b1]' : 'w-2 bg-gray-300 hover:bg-gray-400'"
            :aria-label="`الانتقال إلى صورة الخلفية ${idx + 1}`"
          ></button>
        </div>

      </div>
    </div>

  </section>
</template>
