<script setup>
import { onMounted } from 'vue';
import { useLanguage } from '../../composables/useLanguage.js';
import { useAnimation } from '../../composables/useAnimation.js';
import SectionHeading from '../common/SectionHeading.vue';

const { currentLang, isRTL, t, currentMessages } = useLanguage();
const { revealElements } = useAnimation();

onMounted(() => {
  revealElements('.blog-card-reveal', { y: 25, stagger: 0.12 });
});
</script>

<template>
  <section class="py-16 sm:py-24 bg-[#fafafa]">
    <div class="site-container">
      
      <SectionHeading 
        :tag="t('blog.tag')"
        :title="t('blog.title')"
        :subtitle="t('blog.subtitle')"
      />

      <div class="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
        <article 
          v-for="post in currentMessages.blog.items"
          :key="post.id"
          class="blog-card-reveal group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl border border-gray-100 transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between"
        >
          <div>
            <!-- Image Frame -->
            <div class="relative aspect-[16/10] overflow-hidden bg-teal-900">
              <img 
                :src="post.image" 
                :alt="post.title"
                class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
                width="600"
                height="375"
              />
              <span class="absolute top-4 start-4 px-3 py-1 rounded-full text-xs font-bold bg-white/95 text-[#011f23] shadow-xs">
                {{ post.category }}
              </span>
            </div>

            <!-- Content -->
            <div class="p-6 sm:p-7 text-start">
              <div class="flex items-center gap-3 text-xs text-gray-400 font-medium mb-3">
                <span>{{ post.date }}</span>
                <span>•</span>
                <span>{{ post.readTime }}</span>
              </div>

              <h3 class="text-lg font-bold text-[#011f23] group-hover:text-[#24a3b1] transition-colors leading-snug mb-3">
                {{ post.title }}
              </h3>

              <p class="text-xs sm:text-sm text-gray-600 leading-relaxed">
                {{ post.excerpt }}
              </p>
            </div>
          </div>

          <!-- Footer link -->
          <div class="px-6 pb-6 pt-0 border-t border-gray-50">
            <router-link 
              to="/blog"
              class="text-xs font-bold text-[#24a3b1] hover:text-[#1b8591] flex items-center gap-1.5 transition-colors pt-4"
            >
              <span>{{ t('blog.readMore') }}</span>
              <svg class="w-3.5 h-3.5" :class="isRTL ? 'rotate-180' : ''" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M9 5l7 7-7 7" />
              </svg>
            </router-link>
          </div>
        </article>
      </div>

    </div>
  </section>
</template>
