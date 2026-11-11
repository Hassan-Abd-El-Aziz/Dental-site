<script setup>
import { useLanguage } from '../composables/useLanguage.js';
import { useSeo } from '../composables/useSeo.js';
import { contactConfig } from '../config/contact.js';
import AppointmentForm from '../components/forms/AppointmentForm.vue';

const { isRTL } = useLanguage();
useSeo('appointment');
</script>

<template>
  <div class="py-12 sm:py-20 bg-gradient-to-b from-teal-50/50 via-[#fafafa] to-white min-h-[80vh]">
    <div class="site-container">
      
      <!-- Page Header -->
      <div class="max-w-3xl mx-auto text-center mb-10 sm:mb-14">
        <span class="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-teal-50 border border-teal-200 text-[#1b8591] mb-4">
          <span class="w-2 h-2 rounded-full bg-[#24a3b1]"></span>
          {{ isRTL ? 'حجز موعد إلكتروني' : 'Online Appointment Request' }}
        </span>

        <h1 class="text-3xl sm:text-5xl font-extrabold text-[#011f23] tracking-tight leading-tight mb-4">
          {{ isRTL ? 'احجز موعدك بسهولة في بريستيج سمايل' : 'Schedule Your Dental Visit at Prestige Smile' }}
        </h1>

        <p class="text-base sm:text-lg text-gray-600 leading-relaxed font-normal">
          {{ isRTL 
            ? 'املأ النموذج السريع أدناه لتحديد الوقت المفضل وسيقوم فريق الاستقبال بالتواصل معك فوراً لتأكيد الحجز.' 
            : 'Fill in our quick appointment form below to select your convenient time, and our team will coordinate your booking via WhatsApp.' }}
        </p>
      </div>

      <!-- Main Form Component -->
      <AppointmentForm />

      <!-- Direct Phone & Emergency Quick Call Banner -->
      <div class="max-w-2xl mx-auto mt-12 p-6 rounded-2xl bg-white border border-gray-100 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-start">
        <div>
          <span class="block text-xs font-bold text-gray-400 uppercase tracking-wide">
            {{ isRTL ? 'هل تفضل الاتصال الهاتفي المباشر؟' : 'Prefer to book by direct phone?' }}
          </span>
          <span class="text-base font-bold text-[#011f23]">
            {{ isRTL ? 'فريق الاستقبال جاهز لمساعدتك فوراً' : 'Our reception coordinators are ready on-call' }}
          </span>
        </div>

        <a :href="`tel:${contactConfig.phoneFormatted}`" class="btn-primary py-2.5 px-6 text-xs sm:text-sm shrink-0">
          <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
          </svg>
          <span>{{ contactConfig.phone }}</span>
        </a>
      </div>

    </div>
  </div>
</template>
