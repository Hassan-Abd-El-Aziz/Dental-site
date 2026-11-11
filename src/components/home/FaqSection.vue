<script setup>
import { ref, computed, onMounted } from 'vue';
import { useLanguage } from '../../composables/useLanguage.js';
import { useAnimation } from '../../composables/useAnimation.js';
import { contactConfig } from '../../config/contact.js';
import SectionHeading from '../common/SectionHeading.vue';

const { currentLang, isRTL, t, currentMessages } = useLanguage();
const { revealElements } = useAnimation();

const selectedCategory = ref('ALL');
const searchQuery = ref('');
const openIndex = ref(0); // first item open by default

const categories = computed(() => {
  const cats = currentMessages.value?.faq?.categories || [];
  return [isRTL.value ? 'الكل' : 'All', ...cats];
});

const filteredFaqs = computed(() => {
  const items = currentMessages.value?.faq?.items || [];
  return items.filter((faq, idx) => {
    // Category filter
    const matchesCat = selectedCategory.value === 'ALL' 
      || selectedCategory.value === (isRTL.value ? 'الكل' : 'All')
      || faq.category === selectedCategory.value;

    // Search filter
    const q = searchQuery.value.trim().toLowerCase();
    const matchesSearch = !q 
      || faq.q.toLowerCase().includes(q) 
      || faq.a.toLowerCase().includes(q);

    return matchesCat && matchesSearch;
  });
});

const toggle = (idx) => {
  openIndex.value = openIndex.value === idx ? -1 : idx;
};

const selectCat = (cat) => {
  selectedCategory.value = cat;
  openIndex.value = 0;
};

onMounted(() => {
  revealElements('.faq-item-reveal', { y: 25, duration: 0.6 });
});
</script>

<template>
  <section id="faq" class="py-16 sm:py-24 bg-white border-t border-gray-100">
    <div class="site-container">
      
      <!-- Section Heading -->
      <SectionHeading 
        :tag="t('faq.tag')"
        :title="t('faq.title')"
        :subtitle="t('faq.subtitle')"
      />

      <!-- Search & Category Filters (Responsive and Attractive) -->
      <div class="max-w-3xl mx-auto mb-10 space-y-4">
        
        <!-- Live Search Input -->
        <div class="relative">
          <input 
            v-model="searchQuery"
            type="text" 
            :placeholder="isRTL ? 'ابحث عن أي سؤال أو عرض (مثل: تبييض، زراعة، ألم، أطفال)...' : 'Search dental questions (e.g., whitening, implants, pain)...'"
            class="w-full px-5 py-3.5 ps-12 rounded-2xl border border-gray-200 focus:border-[#24a3b1] focus:ring-4 focus:ring-teal-500/10 focus:outline-none text-sm transition-all shadow-xs"
          />
          <div class="absolute inset-y-0 start-0 ps-4 flex items-center pointer-events-none text-gray-400">
            <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
          <button 
            v-if="searchQuery" 
            @click="searchQuery = ''"
            type="button"
            class="absolute inset-y-0 end-0 pe-4 flex items-center text-xs font-bold text-gray-400 hover:text-gray-600"
          >
            ✕
          </button>
        </div>

        <!-- Category Pills (Horizontally Scrollable on Mobile) -->
        <div class="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none text-start">
          <button 
            v-for="cat in categories"
            :key="cat"
            @click="selectCat(cat)"
            type="button"
            class="px-4 py-2 rounded-full text-xs font-bold transition-all whitespace-nowrap cursor-pointer shrink-0"
            :class="(selectedCategory === cat || (selectedCategory === 'ALL' && cat === (isRTL ? 'الكل' : 'All')))
              ? 'bg-[#24a3b1] text-white shadow-xs' 
              : 'bg-gray-100 text-gray-600 hover:bg-gray-200'"
          >
            {{ cat }}
          </button>
        </div>

      </div>

      <!-- FAQ Accordion List -->
      <div class="max-w-3xl mx-auto space-y-3.5">
        
        <div 
          v-if="filteredFaqs.length === 0"
          class="text-center py-12 bg-gray-50 rounded-2xl p-6 border border-gray-100 text-gray-500 text-sm"
        >
          {{ isRTL ? 'لم يتم العثور على نتائج مطابقة لبحثك. تواصل معنا مباشرة للإجابة على استفسارك!' : 'No matching questions found. Feel free to contact us directly!' }}
        </div>

        <div 
          v-for="(faq, idx) in filteredFaqs"
          :key="idx"
          class="faq-item-reveal border rounded-2xl transition-all duration-200 overflow-hidden"
          :class="openIndex === idx ? 'border-[#24a3b1] bg-teal-50/25 shadow-xs' : 'border-gray-200 bg-white hover:border-gray-300'"
        >
          <!-- Question Toggle -->
          <button 
            @click="toggle(idx)"
            type="button"
            class="w-full p-4 sm:p-5 text-start flex items-center justify-between gap-4 font-bold text-sm sm:text-base text-[#011f23] cursor-pointer"
            :aria-expanded="openIndex === idx"
          >
            <div class="flex items-start gap-3">
              <span class="w-6 h-6 rounded-full bg-teal-100 text-[#1b8591] text-xs font-black flex items-center justify-center shrink-0 mt-0.5">
                ؟
              </span>
              <span class="leading-snug">{{ faq.q }}</span>
            </div>

            <div 
              class="w-7 h-7 rounded-full flex items-center justify-center shrink-0 transition-transform duration-300"
              :class="openIndex === idx ? 'bg-[#24a3b1] text-white rotate-180' : 'bg-gray-100 text-gray-500'"
            >
              <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          </button>

          <!-- Answer Body -->
          <div 
            v-show="openIndex === idx"
            class="px-5 sm:px-6 pb-6 text-xs sm:text-sm text-gray-700 leading-relaxed border-t border-teal-100/60 pt-4 text-start bg-white/60"
          >
            <p>{{ faq.a }}</p>

            <div class="mt-3 pt-3 border-t border-gray-100 flex items-center justify-between text-[11px] text-gray-400">
              <span class="font-semibold text-teal-600">✓ {{ isRTL ? 'إجابة معتمدة طبياً' : 'Medically Verified Guidance' }}</span>
              <span class="px-2 py-0.5 rounded-full bg-gray-100 text-gray-500">{{ faq.category }}</span>
            </div>
          </div>
        </div>

      </div>

      <!-- Quick Ask Doctor WhatsApp Card with 30% transparency -->
      <div class="faq-item-reveal max-w-2xl mx-auto mt-12 p-6 rounded-3xl bg-gradient-to-r from-teal-50/70 to-emerald-50/70 backdrop-blur-md border border-teal-200/50 shadow-sm text-center space-y-3">
        <h3 class="text-base sm:text-lg font-bold text-[#011f23]">
          {{ isRTL ? 'هل لديك استفسار سني خاص بحالتك؟' : 'Have a Specific Dental Question?' }}
        </h3>
        <p class="text-xs sm:text-sm text-gray-600 max-w-lg mx-auto">
          {{ isRTL ? 'يسعد استشاريو بريستيج سمايل الإجابة على استفساراتكم وتقديم المشورة الطبية المباشرة عبر الواتساب.' : 'Our clinical specialists at Prestige Smile are pleased to assist you directly on WhatsApp.' }}
        </p>
        <div class="pt-2">
          <a 
            :href="`https://wa.me/${contactConfig.whatsappNumber}?text=${encodeURIComponent(isRTL ? 'السلام عليكم، لدي استفسار بخصوص علاج الأسنان في بريستيج سمايل.' : 'Hello Prestige Smile, I have a dental question.')}`"
            target="_blank"
            class="btn-primary text-xs sm:text-sm py-2.5 px-6 inline-flex bg-emerald-500/80 hover:bg-emerald-600/90 backdrop-blur-xs border border-white/30"
          >
            <svg class="w-4 h-4 fill-current" viewBox="0 0 24 24">
              <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.007c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86.173.086.275.072.376-.044.101-.116.433-.506.549-.68.116-.173.231-.145.39-.087s1.011.477 1.184.564.289.13.332.202c.045.072.045.419-.1.824z"/>
            </svg>
            <span>{{ isRTL ? 'استشارة مباشرة عبر الواتساب' : 'Chat with Our Specialists' }}</span>
          </a>
        </div>
      </div>

    </div>
  </section>
</template>
