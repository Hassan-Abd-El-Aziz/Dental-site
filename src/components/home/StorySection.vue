<script setup>
import { onMounted, ref } from 'vue';
import { useLanguage } from '../../composables/useLanguage.js';
import { useAnimation } from '../../composables/useAnimation.js';
import SectionHeading from '../common/SectionHeading.vue';

const { currentLang, isRTL, t } = useLanguage();
const { animateCounter, revealElements } = useAnimation();

const stat1 = ref(null);
const stat2 = ref(null);
const stat3 = ref(null);
const stat4 = ref(null);

const activeStoryTab = ref(0);

const storySlides = [
  {
    year: '2020',
    title: { ar: 'تأسيس بريستيج سمايل', en: 'Foundation of Prestige Smile' },
    desc: { ar: 'انطلقت العيادة برؤية تهدف لتقديم أرقى خدمات طب الأسنان غير المؤلمة بأحدث التقنيات.', en: 'Launched with a mission to deliver pain-free, advanced dental care with modern tech.' },
    image: '/images/gen_our-story-image-1.jpg'
  },
  {
    year: '2022',
    title: { ar: 'تطوير وحدة الأشعة ثلاثية الأبعاد', en: 'Digital 3D Imaging Unit' },
    desc: { ar: 'إدخال ماسحات الفم الرقمية المباشرة ثلاثية الأبعاد بدون معجون وأشعة CBCT متطورة.', en: 'Integrated zero-mess digital oral scanners and low-radiation 3D CBCT scans.' },
    image: '/images/gen_our-story-image-2.jpg'
  },
  {
    year: '2024',
    title: { ar: 'مركز زراعة وتجميل الأسنان', en: 'Cosmetic & Implant Center' },
    desc: { ar: 'توسعة العيادة لتضم مركزاً متكاملاً لجراحة وزراعة الأسنان وتصميم ابتسامة هوليوود.', en: 'Expanded to feature a comprehensive cosmetic dentistry and implantology suite.' },
    image: '/images/gen_our-story-image-3.jpg'
  },
  {
    year: '2026',
    title: { ar: 'أكثر من 25 ألف ابتسامة', en: '25,000+ Happy Smiles' },
    desc: { ar: 'مواصلة التميز وخدمة آلاف العائلات بثقة ورضا يتجاوز 99% وأعلى معايير الجودة العالمية.', en: 'Continuing clinical excellence serving thousands of families with 99%+ satisfaction.' },
    image: '/images/gen_our-story-image-4.jpg'
  }
];

onMounted(() => {
  revealElements('.story-reveal', { y: 30, stagger: 0.15 });

  if (stat1.value) animateCounter(stat1.value, 15, '+');
  if (stat2.value) animateCounter(stat2.value, 25, 'k+');
  if (stat3.value) animateCounter(stat3.value, 99, '%');
  if (stat4.value) animateCounter(stat4.value, 100, '%');
});
</script>

<template>
  <section class="py-16 sm:py-24 bg-white overflow-hidden border-b border-gray-100">
    <div class="site-container">
      
      <!-- Section Header -->
      <SectionHeading 
        :tag="t('story.tag')" 
        :title="t('story.title')" 
        :subtitle="t('story.p1')"
      />

      <!-- Story Narrative & Interactive Gallery Grid -->
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
        
        <!-- Left: Narrative Text & Highlights (6 cols) -->
        <div class="lg:col-span-6 space-y-6 text-start story-reveal">
          <p class="text-gray-600 leading-relaxed text-sm sm:text-base">
            {{ t('story.p2') }}
          </p>

          <!-- Interactive Milestone Tabs -->
          <div class="space-y-3 pt-2">
            <div 
              v-for="(item, idx) in storySlides" 
              :key="idx"
              @click="activeStoryTab = idx"
              class="p-4 rounded-2xl border transition-all duration-300 cursor-pointer text-start"
              :class="activeStoryTab === idx 
                ? 'border-[#24a3b1] bg-teal-50/70 shadow-sm' 
                : 'border-gray-100 hover:border-gray-200 bg-white'"
            >
              <div class="flex items-center gap-3 mb-1">
                <span class="px-2.5 py-0.5 rounded-full text-xs font-bold bg-[#24a3b1] text-white">
                  {{ item.year }}
                </span>
                <h4 class="text-sm font-bold text-[#011f23]">
                  {{ isRTL ? item.title.ar : item.title.en }}
                </h4>
              </div>
              <p class="text-xs text-gray-500 leading-relaxed">
                {{ isRTL ? item.desc.ar : item.desc.en }}
              </p>
            </div>
          </div>
        </div>

        <!-- Right: Active Story Image Frame (6 cols) -->
        <div class="lg:col-span-6 story-reveal">
          <div class="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white aspect-[4/3] bg-teal-900 group">
            <img 
              :src="storySlides[activeStoryTab].image" 
              :alt="isRTL ? storySlides[activeStoryTab].title.ar : storySlides[activeStoryTab].title.en"
              class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              loading="lazy"
              width="800"
              height="600"
            />
            <div class="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-end p-6">
              <div class="text-white text-start">
                <span class="text-xs font-bold text-[#24a3b1] block mb-1">{{ storySlides[activeStoryTab].year }}</span>
                <p class="text-sm sm:text-base font-semibold">
                  {{ isRTL ? storySlides[activeStoryTab].title.ar : storySlides[activeStoryTab].title.en }}
                </p>
              </div>
            </div>
          </div>
        </div>

      </div>

      <!-- Animated Statistics Counters (4-card Grid) -->
      <div class="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 pt-8 border-t border-gray-100">
        
        <div class="story-reveal bg-teal-50/60 rounded-2xl p-6 text-center border border-teal-100/60">
          <div ref="stat1" class="text-3xl sm:text-4xl lg:text-5xl font-black text-[#1b8591] mb-1">
            0
          </div>
          <div class="text-xs sm:text-sm font-bold text-gray-600">
            {{ t('story.stat1Label') }}
          </div>
        </div>

        <div class="story-reveal bg-teal-50/60 rounded-2xl p-6 text-center border border-teal-100/60">
          <div ref="stat2" class="text-3xl sm:text-4xl lg:text-5xl font-black text-[#1b8591] mb-1">
            0
          </div>
          <div class="text-xs sm:text-sm font-bold text-gray-600">
            {{ t('story.stat2Label') }}
          </div>
        </div>

        <div class="story-reveal bg-teal-50/60 rounded-2xl p-6 text-center border border-teal-100/60">
          <div ref="stat3" class="text-3xl sm:text-4xl lg:text-5xl font-black text-[#1b8591] mb-1">
            0
          </div>
          <div class="text-xs sm:text-sm font-bold text-gray-600">
            {{ t('story.stat3Label') }}
          </div>
        </div>

        <div class="story-reveal bg-teal-50/60 rounded-2xl p-6 text-center border border-teal-100/60">
          <div ref="stat4" class="text-3xl sm:text-4xl lg:text-5xl font-black text-[#1b8591] mb-1">
            0
          </div>
          <div class="text-xs sm:text-sm font-bold text-gray-600">
            {{ t('story.stat4Label') }}
          </div>
        </div>

      </div>

    </div>
  </section>
</template>
