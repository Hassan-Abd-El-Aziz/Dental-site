<script setup>
import { onMounted } from 'vue';
import { useLanguage } from '../../composables/useLanguage.js';
import { useAnimation } from '../../composables/useAnimation.js';
import SectionHeading from '../common/SectionHeading.vue';

const { currentLang, isRTL, t, currentMessages } = useLanguage();
const { revealElements } = useAnimation();

onMounted(() => {
  revealElements('.service-card-reveal', { y: 35, stagger: 0.12 });
});
</script>

<template>
  <section class="py-16 sm:py-24 bg-[#fafafa]">
    <div class="site-container">
      
      <!-- Section Heading -->
      <SectionHeading 
        :tag="t('services.tag')"
        :title="t('services.title')"
        :subtitle="t('services.subtitle')"
      />

      <!-- 6-Card Responsive Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
        
        <div 
          v-for="service in currentMessages.services.items" 
          :key="service.id"
          class="service-card-reveal group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl border border-gray-100 transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between"
        >
          <div>
            <!-- Service Thumbnail Image -->
            <div class="relative aspect-[16/10] overflow-hidden bg-teal-900">
              <img 
                :src="service.image" 
                :alt="service.title"
                class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
                width="600"
                height="375"
              />
              <div class="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
              
              <!-- Subtle Category Badge -->
              <span class="absolute top-4 start-4 px-3 py-1 rounded-full text-xs font-bold bg-white/95 text-[#011f23] shadow-xs backdrop-blur-xs">
                {{ isRTL ? 'خدمة متميزة' : 'Featured Service' }}
              </span>
            </div>

            <!-- Card Content Body -->
            <div class="p-6 sm:p-7 text-start">
              <h3 class="text-xl font-bold text-[#011f23] group-hover:text-[#24a3b1] transition-colors mb-3">
                {{ service.title }}
              </h3>

              <p class="text-sm text-gray-600 leading-relaxed mb-5">
                {{ service.desc }}
              </p>

              <!-- Feature bullet points -->
              <ul class="space-y-2 mb-6">
                <li 
                  v-for="(feat, fIdx) in service.features" 
                  :key="fIdx"
                  class="flex items-center gap-2 text-xs font-semibold text-gray-700"
                >
                  <svg class="w-4 h-4 text-[#24a3b1] shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>{{ feat }}</span>
                </li>
              </ul>
            </div>
          </div>

          <!-- Card Action Footer -->
          <div class="px-6 pb-6 pt-0 border-t border-gray-50 flex items-center justify-between">
            <router-link 
              to="/appointment"
              class="text-xs font-bold text-[#24a3b1] hover:text-[#1b8591] flex items-center gap-1.5 transition-colors"
            >
              <span>{{ t('services.bookThisService') }}</span>
              <svg class="w-3.5 h-3.5" :class="isRTL ? 'rotate-180' : ''" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M9 5l7 7-7 7" />
              </svg>
            </router-link>

            <router-link
              to="/services"
              class="w-8 h-8 rounded-full bg-teal-50 group-hover:bg-[#24a3b1] text-[#24a3b1] group-hover:text-white flex items-center justify-center transition-colors"
              :aria-label="service.title"
            >
              <svg class="w-4 h-4" :class="isRTL ? 'rotate-180' : ''" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M9 5l7 7-7 7" />
              </svg>
            </router-link>
          </div>
        </div>

      </div>

      <!-- Bottom View All CTA -->
      <div class="text-center mt-12">
        <router-link to="/services" class="btn-primary text-sm py-3.5 px-8">
          <span>{{ t('services.viewAll') }}</span>
          <svg class="w-4 h-4" :class="isRTL ? 'rotate-180' : ''" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </router-link>
      </div>

    </div>
  </section>
</template>
