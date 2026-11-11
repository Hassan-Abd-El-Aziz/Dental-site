<script setup>
import { onMounted, ref } from 'vue';
import { useLanguage } from '../composables/useLanguage.js';
import { useAnimation } from '../composables/useAnimation.js';
import { useSeo } from '../composables/useSeo.js';
import SectionHeading from '../components/common/SectionHeading.vue';
import WhyChooseUsSection from '../components/home/WhyChooseUsSection.vue';
import BookingCtaSection from '../components/home/BookingCtaSection.vue';

const { currentLang, isRTL, t } = useLanguage();
const { animateCounter, revealElements } = useAnimation();

useSeo('about');

const stat1 = ref(null);
const stat2 = ref(null);
const stat3 = ref(null);
const stat4 = ref(null);

onMounted(() => {
  revealElements('.about-reveal', { y: 25, stagger: 0.15 });

  if (stat1.value) animateCounter(stat1.value, 15, '+');
  if (stat2.value) animateCounter(stat2.value, 25, 'k+');
  if (stat3.value) animateCounter(stat3.value, 99, '%');
  if (stat4.value) animateCounter(stat4.value, 100, '%');
});
</script>

<template>
  <div>
    <!-- About Hero Section -->
    <section class="pt-8 pb-16 sm:pb-24 bg-gradient-to-b from-teal-50/50 via-white to-[#fafafa]">
      <div class="site-container">
        
        <div class="max-w-3xl mx-auto text-center mb-12">
          <span class="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-teal-50 border border-teal-200 text-[#1b8591] mb-4">
            <span class="w-2 h-2 rounded-full bg-[#24a3b1]"></span>
            {{ isRTL ? 'عن بريستيج سمايل' : 'About Prestige Smile' }}
          </span>

          <h1 class="text-3xl sm:text-5xl font-extrabold text-[#011f23] tracking-tight leading-tight mb-6">
            {{ isRTL ? 'رسالتنا: ابتسامة واثقة وصحة فموية تدوم مدى الحياة' : 'Our Mission: Healthy, Confident Smiles That Last a Lifetime' }}
          </h1>

          <p class="text-base sm:text-lg text-gray-600 leading-relaxed font-normal">
            {{ isRTL 
              ? 'تأسست عيادة بريستيج سمايل لطب وجراحة الأسنان لتقديم رعاية طبية متقدمة في بيئة فاخرة ومريحة تحترم خصوصية المريض وتزيل كل مشاعر الخوف والقلق.' 
              : 'Prestige Smile Dental Clinic was established to provide cutting-edge clinical excellence in a warm, luxurious sanctuary where every patient receives personalized care.' }}
          </p>
        </div>

        <!-- Wide Clinic Hero Photo -->
        <div class="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white aspect-[16/9] sm:aspect-[21/9] bg-teal-900 max-w-5xl mx-auto mb-16">
          <img 
            src="/images/gen_about-hero-image.jpg" 
            alt="عيادة بريستيج سمايل لطب الأسنان من الداخل"
            class="w-full h-full object-cover"
            loading="eager"
            width="1200"
            height="514"
          />
          <div class="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent flex items-end p-6 sm:p-10">
            <div class="text-white text-start">
              <span class="text-xs font-bold text-teal-300 block mb-1">
                {{ isRTL ? 'أحدث العيادات المجهزة' : 'State-of-the-Art Facilities' }}
              </span>
              <p class="text-base sm:text-lg font-bold">
                {{ isRTL ? 'مرافق مجهزة بأعلى التقنيات العالمية للتشخيص والعلاج' : 'Equipped with the Latest Global Diagnostic & Treatment Systems' }}
              </p>
            </div>
          </div>
        </div>

        <!-- Mission, Vision & Values Cards -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          
          <div class="about-reveal bg-white rounded-3xl p-8 border border-gray-100 shadow-sm text-start">
            <div class="w-12 h-12 rounded-2xl bg-teal-50 text-[#24a3b1] flex items-center justify-center font-bold text-xl mb-5">
              🎯
            </div>
            <h3 class="text-xl font-bold text-[#011f23] mb-3">
              {{ isRTL ? 'رؤيتنا الطبية' : 'Our Vision' }}
            </h3>
            <p class="text-sm text-gray-600 leading-relaxed">
              {{ isRTL 
                ? 'أن نكون الوجهة الأولى والموثوقة في طب وتجميل الأسنان من خلال الجمع بين أحدث التقنيات الرقمية واللمسة الطبية الحانية.' 
                : 'To be the most trusted premier dental destination by seamlessly harmonizing advanced digital precision with compassionate patient care.' }}
            </p>
          </div>

          <div class="about-reveal bg-white rounded-3xl p-8 border border-gray-100 shadow-sm text-start">
            <div class="w-12 h-12 rounded-2xl bg-teal-50 text-[#24a3b1] flex items-center justify-center font-bold text-xl mb-5">
              💎
            </div>
            <h3 class="text-xl font-bold text-[#011f23] mb-3">
              {{ isRTL ? 'قيمنا الجوهرية' : 'Core Values' }}
            </h3>
            <p class="text-sm text-gray-600 leading-relaxed">
              {{ isRTL 
                ? 'النزاهة والشفافية في الخطط العلاجية، الأمان والتعقيم الصارم، والحرص الدائم على توفير تجربة علاجية بدون أي ألم.' 
                : 'Integrity in clinical treatment plans, zero-compromise sterilization, and continuous commitment to pain-free dental comfort.' }}
            </p>
          </div>

          <div class="about-reveal bg-white rounded-3xl p-8 border border-gray-100 shadow-sm text-start">
            <div class="w-12 h-12 rounded-2xl bg-teal-50 text-[#24a3b1] flex items-center justify-center font-bold text-xl mb-5">
              🔬
            </div>
            <h3 class="text-xl font-bold text-[#011f23] mb-3">
              {{ isRTL ? 'التكنولوجيا الحديثة' : 'Advanced Tech' }}
            </h3>
            <p class="text-sm text-gray-600 leading-relaxed">
              {{ isRTL 
                ? 'استخدام ماسحات الفم الرقمية، التخدير الإلكتروني، وجلسات تبييض الأسنان بالليزر المعتمدة عالمياً.' 
                : 'Zero-discomfort 3D intraoral digital scanners, computerized local anesthetics, and internationally certified laser systems.' }}
            </p>
          </div>

        </div>

        <!-- Animated Stats Counter Grid -->
        <div class="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 pt-16 max-w-5xl mx-auto">
          <div class="about-reveal bg-white rounded-2xl p-6 text-center border border-gray-100 shadow-xs">
            <div ref="stat1" class="text-3xl sm:text-4xl font-extrabold text-[#24a3b1] mb-1">0</div>
            <div class="text-xs sm:text-sm font-bold text-gray-600">{{ t('story.stat1Label') }}</div>
          </div>
          <div class="about-reveal bg-white rounded-2xl p-6 text-center border border-gray-100 shadow-xs">
            <div ref="stat2" class="text-3xl sm:text-4xl font-extrabold text-[#24a3b1] mb-1">0</div>
            <div class="text-xs sm:text-sm font-bold text-gray-600">{{ t('story.stat2Label') }}</div>
          </div>
          <div class="about-reveal bg-white rounded-2xl p-6 text-center border border-gray-100 shadow-xs">
            <div ref="stat3" class="text-3xl sm:text-4xl font-extrabold text-[#24a3b1] mb-1">0</div>
            <div class="text-xs sm:text-sm font-bold text-gray-600">{{ t('story.stat3Label') }}</div>
          </div>
          <div class="about-reveal bg-white rounded-2xl p-6 text-center border border-gray-100 shadow-xs">
            <div ref="stat4" class="text-3xl sm:text-4xl font-extrabold text-[#24a3b1] mb-1">0</div>
            <div class="text-xs sm:text-sm font-bold text-gray-600">{{ t('story.stat4Label') }}</div>
          </div>
        </div>

      </div>
    </section>

    <!-- Why Choose Us Section -->
    <WhyChooseUsSection />

    <!-- Final CTA -->
    <BookingCtaSection />
  </div>
</template>
