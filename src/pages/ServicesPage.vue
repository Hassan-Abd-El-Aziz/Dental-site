<script setup>
import { useLanguage } from '../composables/useLanguage.js';
import { useSeo } from '../composables/useSeo.js';
import ServicesSection from '../components/home/ServicesSection.vue';
import FaqSection from '../components/home/FaqSection.vue';
import BookingCtaSection from '../components/home/BookingCtaSection.vue';

const { currentLang, isRTL, t } = useLanguage();
useSeo('services');

const steps = [
  {
    num: '01',
    title: { ar: 'الفحص والاستشارة الرقمية', en: 'Consultation & 3D Scan' },
    desc: { ar: 'فحص سريري شامل ومسح ثلاثي الأبعاد لتقييم صحة الأسنان والفكين بدقة متناهية وبدون أي انزعاج.', en: 'Comprehensive oral examination and 3D digital imaging to assess dental health painlessly.' }
  },
  {
    num: '02',
    title: { ar: 'خطة علاج مخصصة وشفافة', en: 'Customized Treatment Plan' },
    desc: { ar: 'مناقشة خطة العلاج والخيارات البديلة مع توضيح المدة الزمنية والتكلفة الشفافة قبل البدء.', en: 'Transparent discussion of all viable treatment pathways, timeline, and exact investment.' }
  },
  {
    num: '03',
    title: { ar: 'علاج هادئ وبأحدث الأجهزة', en: 'Gentle, Pain-Free Procedure' },
    desc: { ar: 'تنفيذ الإجراء السني بأعلى معايير الدقة والتعقيم مع تقنيات التهدئة والتخدير الموضعي المريح.', en: 'Executing treatment with clinical mastery, sterile protocols, and soothing gentle anesthetics.' }
  },
  {
    num: '04',
    title: { ar: 'المتابعة والرعاية المستمرة', en: 'Follow-Up & Lifelong Care' },
    desc: { ar: 'جلسات متابعة دورية وإرشادات مخصصة لضمان ديمومة النتائج وجمال ابتسامتك الجديدة.', en: 'Dedicated follow-up checkups and personalized hygiene guidance to protect your smile.' }
  }
];
</script>

<template>
  <div>
    <!-- Hero Header -->
    <section class="pt-8 pb-12 bg-gradient-to-b from-teal-50/50 to-[#fafafa] text-center">
      <div class="site-container max-w-3xl mx-auto">
        <span class="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-teal-50 border border-teal-200 text-[#1b8591] mb-4">
          <span class="w-2 h-2 rounded-full bg-[#24a3b1]"></span>
          {{ isRTL ? 'خدمات طب وجراحة الأسنان' : 'Comprehensive Treatments' }}
        </span>

        <h1 class="text-3xl sm:text-5xl font-extrabold text-[#011f23] tracking-tight leading-tight mb-4">
          {{ isRTL ? 'خدمات سنية متطورة مصممة لصحة وجمال ابتسامتك' : 'Advanced Dental Solutions Crafted for Your Health & Confidence' }}
        </h1>

        <p class="text-base sm:text-lg text-gray-600 leading-relaxed font-normal">
          {{ isRTL 
            ? 'نقدم في بريستيج سمايل باقة متكاملة من الخدمات الوقائية، العلاجية والتجميلية باستخدام أحدث التقنيات الطبية الرقمية.' 
            : 'At Prestige Smile, we deliver a full spectrum of preventive, restorative, and cosmetic dental treatments tailored to your unique smile.' }}
        </p>
      </div>
    </section>

    <!-- Services Grid -->
    <ServicesSection />

    <!-- 4-Step Patient Journey Section -->
    <section class="py-16 sm:py-24 bg-white border-y border-gray-100">
      <div class="site-container">
        
        <div class="max-w-2xl mx-auto text-center mb-16">
          <span class="text-xs font-bold uppercase tracking-wider text-[#24a3b1] block mb-2">
            {{ isRTL ? 'رحلة العلاج في عيادتنا' : 'Treatment Journey' }}
          </span>
          <h2 class="text-2xl sm:text-4xl font-extrabold text-[#011f23]">
            {{ isRTL ? '4 خطوات بسيطة لابتسامة مثالية' : '4 Simple Steps to Your New Smile' }}
          </h2>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div 
            v-for="(st, idx) in steps" 
            :key="idx"
            class="bg-teal-50/40 rounded-2xl p-6 border border-teal-100/60 relative text-start"
          >
            <span class="text-3xl font-black text-[#24a3b1]/40 block mb-3 font-mono">
              {{ st.num }}
            </span>
            <h3 class="text-base font-bold text-[#011f23] mb-2">
              {{ isRTL ? st.title.ar : st.title.en }}
            </h3>
            <p class="text-xs sm:text-sm text-gray-600 leading-relaxed">
              {{ isRTL ? st.desc.ar : st.desc.en }}
            </p>
          </div>
        </div>

      </div>
    </section>

    <!-- FAQs & Final CTA -->
    <FaqSection />
    <BookingCtaSection />
  </div>
</template>
