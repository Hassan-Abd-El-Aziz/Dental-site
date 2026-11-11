<script setup>
import { onMounted } from 'vue';
import { useLanguage } from '../../composables/useLanguage.js';
import { useAnimation } from '../../composables/useAnimation.js';
import SectionHeading from '../common/SectionHeading.vue';

const { currentLang, isRTL, t, currentMessages } = useLanguage();
const { revealElements } = useAnimation();

onMounted(() => {
  revealElements('.value-item-reveal', { y: 25, stagger: 0.12 });
});
</script>

<template>
  <section class="py-16 sm:py-24 bg-gradient-to-b from-[#fafafa] to-white overflow-hidden">
    <div class="site-container">
      
      <SectionHeading 
        :tag="t('values.tag')"
        :title="t('values.title')"
        :subtitle="t('values.subtitle')"
      />

      <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        <!-- Left: Feature Cards Grid (7 cols) -->
        <div class="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-5 text-start">
          <div 
            v-for="(val, idx) in currentMessages.values.items"
            :key="idx"
            class="value-item-reveal bg-white rounded-2xl p-6 shadow-sm hover:shadow-md border border-gray-100 transition-all duration-300 hover:-translate-y-1"
          >
            <!-- Number / Checkmark icon -->
            <div class="w-10 h-10 rounded-xl bg-teal-50 text-[#24a3b1] flex items-center justify-center font-bold text-sm mb-4">
              0{{ idx + 1 }}
            </div>

            <h3 class="text-base font-bold text-[#011f23] mb-2">
              {{ val.title }}
            </h3>

            <p class="text-xs sm:text-sm text-gray-600 leading-relaxed">
              {{ val.desc }}
            </p>
          </div>
        </div>

        <!-- Right: Clinic Care Photography (5 cols) -->
        <div class="lg:col-span-5 relative value-item-reveal">
          <div class="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white aspect-[4/4.5] bg-teal-900 group">
            <img 
              src="/images/gen_home-value-image.jpg" 
              alt="أعلى معايير الرعاية في بريستيج سمايل"
              class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              loading="lazy"
              width="600"
              height="675"
            />
            <div class="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-end p-6">
              <div class="text-white text-start">
                <span class="text-xs font-bold text-teal-300 block mb-1">
                  {{ isRTL ? 'معايير المستشفيات العالمية' : 'World-Class Standards' }}
                </span>
                <p class="text-sm font-semibold">
                  {{ isRTL ? 'رعاية سنية بأعلى مستويات النظافة والراحة' : 'Gentle Care in a Safe & Comfortable Environment' }}
                </p>
              </div>
            </div>
          </div>
        </div>

      </div>

    </div>
  </section>
</template>
