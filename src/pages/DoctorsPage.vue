<script setup>
import { useLanguage } from '../composables/useLanguage.js';
import { useSeo } from '../composables/useSeo.js';
import DoctorsSection from '../components/home/DoctorsSection.vue';
import BookingCtaSection from '../components/home/BookingCtaSection.vue';

const { isRTL } = useLanguage();
useSeo('doctors');
</script>

<template>
  <div>
    <!-- Hero Header -->
    <section class="pt-8 pb-12 bg-gradient-to-b from-teal-50/50 to-[#fafafa] text-center">
      <div class="site-container max-w-3xl mx-auto">
        <span class="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-teal-50 border border-teal-200 text-[#1b8591] mb-4">
          <span class="w-2 h-2 rounded-full bg-[#24a3b1]"></span>
          {{ isRTL ? 'الكادر الطبي المتخصص' : 'Medical Staff' }}
        </span>

        <h1 class="text-3xl sm:text-5xl font-extrabold text-[#011f23] tracking-tight leading-tight mb-4">
          {{ isRTL ? 'نخبة من استشاريي وأطباء الأسنان لخدمتك' : 'Experienced Specialists Dedicated to Your Oral Health' }}
        </h1>

        <p class="text-base sm:text-lg text-gray-600 leading-relaxed font-normal">
          {{ isRTL 
            ? 'يضم فريق عيادة حسن أطباء حاصلين على أرفع الشهادات والزمالات الدولية في جراحة، زراعة، تقويم وتجميل الأسنان.' 
            : 'Our clinic brings together certified specialists across implantology, cosmetic smile makeovers, orthodontics, and gentle pediatric care.' }}
        </p>
      </div>
    </section>

    <!-- Doctors Showcase -->
    <DoctorsSection />

    <!-- CTA -->
    <BookingCtaSection />
  </div>
</template>
