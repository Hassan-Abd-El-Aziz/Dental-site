<script setup>
import { ref, computed, onMounted } from 'vue';
import { useLanguage } from '../../composables/useLanguage.js';
import { useAnimation } from '../../composables/useAnimation.js';
import SectionHeading from '../common/SectionHeading.vue';

const { isRTL, t, currentMessages } = useLanguage();
const { revealElements } = useAnimation();
const activeIndex = ref(0);

const items = computed(() => currentMessages.value?.testimonials?.items || []);

const next = () => {
  if (!items.value.length) return;
  activeIndex.value = (activeIndex.value + 1) % items.value.length;
};

const prev = () => {
  if (!items.value.length) return;
  activeIndex.value = (activeIndex.value - 1 + items.value.length) % items.value.length;
};

onMounted(() => {
  revealElements('.testimonial-card-reveal', { y: 30, duration: 0.7 });
});
</script>

<template>
  <section class="py-16 sm:py-24 bg-[#011f23] text-white overflow-hidden relative">
    <!-- Subtle Background Glow -->
    <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#24a3b1]/10 rounded-full blur-3xl pointer-events-none"></div>

    <div class="site-container relative z-10">
      
      <!-- Dark Theme Section Heading -->
      <SectionHeading 
        :tag="t('testimonials.tag')"
        :title="t('testimonials.title')"
        :subtitle="t('testimonials.subtitle')"
        :dark="true"
      />

      <!-- Testimonial Showcase Card -->
      <div v-if="items.length > 0" class="max-w-4xl mx-auto testimonial-card-reveal">
        <div class="bg-white/5 border border-white/10 rounded-3xl p-8 sm:p-12 backdrop-blur-md relative shadow-2xl">
          
          <!-- Large Quote Symbol -->
          <div class="text-[#24a3b1]/30 font-serif text-6xl leading-none absolute top-6 end-8 select-none">
            “
          </div>

          <!-- Stars -->
          <div class="flex text-amber-400 gap-1 mb-6">
            <svg v-for="i in items[activeIndex].stars" :key="i" class="w-5 h-5 fill-current" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          </div>

          <!-- Quote Text -->
          <p class="text-base sm:text-xl lg:text-2xl text-teal-50 font-medium leading-relaxed mb-8 text-start italic">
            "{{ items[activeIndex].quote }}"
          </p>

          <!-- Author Info & Image -->
          <div class="flex items-center justify-between border-t border-white/10 pt-6">
            <div class="flex items-center gap-4 text-start">
              <img 
                :src="items[activeIndex].image" 
                :alt="items[activeIndex].author"
                class="w-12 h-12 sm:w-14 sm:h-14 rounded-full object-cover border-2 border-[#24a3b1]"
                loading="lazy"
                width="56"
                height="56"
              />
              <div>
                <span class="block text-base font-bold text-white">{{ items[activeIndex].author }}</span>
                <span class="block text-xs text-teal-300 font-medium">{{ items[activeIndex].treatment }}</span>
              </div>
            </div>

            <!-- Carousel Controls -->
            <div class="flex items-center gap-2">
              <button 
                @click="prev"
                type="button"
                class="w-10 h-10 rounded-full border border-white/20 hover:border-[#24a3b1] hover:bg-[#24a3b1] text-white flex items-center justify-center transition-all cursor-pointer"
                :aria-label="isRTL ? 'التقييم التالي' : 'Previous Review'"
              >
                <svg class="w-4 h-4" :class="isRTL ? 'rotate-180' : ''" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M15 19l-7-7 7-7" />
                </svg>
              </button>

              <button 
                @click="next"
                type="button"
                class="w-10 h-10 rounded-full border border-white/20 hover:border-[#24a3b1] hover:bg-[#24a3b1] text-white flex items-center justify-center transition-all cursor-pointer"
                :aria-label="isRTL ? 'التقييم السابق' : 'Next Review'"
              >
                <svg class="w-4 h-4" :class="isRTL ? 'rotate-180' : ''" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>

        </div>

        <!-- Dot Indicators -->
        <div class="flex items-center justify-center gap-2 mt-6">
          <button 
            v-for="(_, idx) in items" 
            :key="idx"
            @click="activeIndex = idx"
            class="h-2 rounded-full transition-all duration-300 cursor-pointer"
            :class="activeIndex === idx ? 'w-8 bg-[#24a3b1]' : 'w-2 bg-white/30'"
            :aria-label="`انتقل إلى التقييم ${idx + 1}`"
          ></button>
        </div>
      </div>

    </div>
  </section>
</template>
