<script setup>
import { onMounted } from 'vue';
import { useLanguage } from '../../composables/useLanguage.js';
import { useAnimation } from '../../composables/useAnimation.js';
import { contactConfig } from '../../config/contact.js';

const { isRTL, t } = useLanguage();
const { revealElements } = useAnimation();

onMounted(() => {
  revealElements('.info-card-item', { y: 25, stagger: 0.15 });
});
</script>

<template>
  <section class="py-6 sm:py-10 -mt-8 sm:-mt-12 relative z-20">
    <div class="site-container">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-6">
        
        <!-- Card 1: Appointment -->
        <router-link
          to="/appointment"
          class="info-card-item group bg-white rounded-2xl p-6 sm:p-7 shadow-lg hover:shadow-xl border border-gray-100/80 transition-all duration-300 hover:-translate-y-1 block"
        >
          <div class="flex items-center gap-4 mb-4">
            <div class="w-12 h-12 rounded-xl bg-teal-50 group-hover:bg-[#24a3b1] text-[#24a3b1] group-hover:text-white flex items-center justify-center transition-colors shrink-0">
              <svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 class="text-lg font-bold text-[#011f23] group-hover:text-[#24a3b1] transition-colors">
              {{ t('infoCards.appointmentTitle') }}
            </h3>
          </div>
          <p class="text-xs sm:text-sm text-gray-600 leading-relaxed">
            {{ t('infoCards.appointmentDesc') }}
          </p>
          <div class="mt-4 flex items-center gap-2 text-xs font-bold text-[#24a3b1]">
            <span>{{ isRTL ? 'احجز الآن' : 'Book Now' }}</span>
            <svg class="w-3.5 h-3.5" :class="isRTL ? 'rotate-180' : ''" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M9 5l7 7-7 7" />
            </svg>
          </div>
        </router-link>

        <!-- Card 2: Emergency Contact -->
        <div class="info-card-item group bg-white rounded-2xl p-6 sm:p-7 shadow-lg hover:shadow-xl border border-gray-100/80 transition-all duration-300 hover:-translate-y-1">
          <div class="flex items-center gap-4 mb-4">
            <div class="w-12 h-12 rounded-xl bg-red-50 group-hover:bg-red-500 text-red-500 group-hover:text-white flex items-center justify-center transition-colors shrink-0">
              <svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
              </svg>
            </div>
            <h3 class="text-lg font-bold text-[#011f23]">
              {{ t('infoCards.emergencyTitle') }}
            </h3>
          </div>
          <p class="text-xs sm:text-sm text-gray-600 leading-relaxed mb-3">
            {{ t('infoCards.emergencyDesc') }}
          </p>
          <div class="flex flex-col gap-1 text-xs">
            <a :href="`tel:${contactConfig.emergencyPhone}`" class="font-bold text-red-600 hover:text-red-700 flex items-center gap-1.5">
              <span>{{ isRTL ? 'هاتف الطوارئ:' : 'Emergency:' }}</span>
              <span dir="ltr">{{ contactConfig.emergencyPhone }}</span>
            </a>
          </div>
        </div>

        <!-- Card 3: Opening Hours -->
        <div class="info-card-item group bg-white rounded-2xl p-6 sm:p-7 shadow-lg hover:shadow-xl border border-gray-100/80 transition-all duration-300 hover:-translate-y-1">
          <div class="flex items-center gap-4 mb-4">
            <div class="w-12 h-12 rounded-xl bg-teal-50 group-hover:bg-[#24a3b1] text-[#24a3b1] group-hover:text-white flex items-center justify-center transition-colors shrink-0">
              <svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 class="text-lg font-bold text-[#011f23]">
              {{ t('infoCards.hoursTitle') }}
            </h3>
          </div>
          <p class="text-xs sm:text-sm text-gray-600 leading-relaxed">
            {{ t('infoCards.hoursDesc') }}
          </p>
          <div class="mt-4 pt-2 border-t border-gray-100 text-[11px] font-semibold text-emerald-600 flex items-center gap-1.5">
            <span class="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            <span>{{ isRTL ? 'العيادة تستقبل المراجعين الآن' : 'Clinic Open For Patients' }}</span>
          </div>
        </div>

      </div>
    </div>
  </section>
</template>
