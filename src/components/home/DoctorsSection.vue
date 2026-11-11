<script setup>
import { onMounted } from 'vue';
import { useLanguage } from '../../composables/useLanguage.js';
import { useAnimation } from '../../composables/useAnimation.js';
import SectionHeading from '../common/SectionHeading.vue';

const { currentLang, isRTL, t, currentMessages } = useLanguage();
const { revealElements } = useAnimation();

onMounted(() => {
  revealElements('.doctor-card-reveal', { y: 30, stagger: 0.12 });
});
</script>

<template>
  <section class="py-16 sm:py-24 bg-white border-t border-gray-100">
    <div class="site-container">
      
      <SectionHeading 
        :tag="t('doctors.tag')"
        :title="t('doctors.title')"
        :subtitle="t('doctors.subtitle')"
      />

      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
        
        <div 
          v-for="(doc, idx) in currentMessages.doctors.items"
          :key="idx"
          class="doctor-card-reveal group bg-white rounded-3xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1.5"
        >
          <!-- Doctor Photo Frame -->
          <div class="relative aspect-[4/5] overflow-hidden bg-teal-950">
            <img 
              :src="doc.image" 
              :alt="doc.name"
              class="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
              loading="lazy"
              width="500"
              height="625"
            />
            <div class="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>

            <!-- Experience Badge -->
            <span class="absolute top-4 end-4 px-3 py-1 rounded-full text-xs font-bold bg-[#24a3b1] text-white shadow-md">
              {{ doc.experience }}
            </span>
          </div>

          <!-- Doctor Profile Details -->
          <div class="p-6 text-start">
            <h3 class="text-xl font-bold text-[#011f23] mb-1 group-hover:text-[#24a3b1] transition-colors">
              {{ doc.name }}
            </h3>
            <p class="text-xs font-bold text-[#24a3b1] uppercase tracking-wide mb-2">
              {{ doc.role }}
            </p>
            <p class="text-xs text-gray-500 leading-relaxed mb-4">
              {{ doc.degree }}
            </p>

            <router-link
              to="/appointment"
              class="inline-flex items-center gap-1.5 text-xs font-bold text-gray-700 hover:text-[#24a3b1] transition-colors"
            >
              <span>{{ isRTL ? 'حجز موعد كشف مع الطبيب' : 'Book Consultation' }}</span>
              <svg class="w-3.5 h-3.5" :class="isRTL ? 'rotate-180' : ''" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M9 5l7 7-7 7" />
              </svg>
            </router-link>
          </div>
        </div>

      </div>

    </div>
  </section>
</template>
