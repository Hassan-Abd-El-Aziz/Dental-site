<script setup>
import { useLanguage } from '../composables/useLanguage.js';

const { isRTL } = useLanguage();
</script>

<template>
  <div class="py-20 sm:py-32 bg-[#fafafa] text-center min-h-[70vh] flex items-center justify-center">
    <div class="site-container max-w-xl mx-auto space-y-6">
      
      <!-- 404 Large Visual -->
      <div class="inline-flex items-center justify-center w-24 h-24 rounded-3xl bg-teal-50 text-[#24a3b1] text-4xl font-black font-mono shadow-sm border border-teal-100">
        404
      </div>

      <h1 class="text-3xl sm:text-4xl font-extrabold text-[#011f23]">
        {{ isRTL ? 'عفواً، الصفحة غير موجودة' : 'Page Not Found' }}
      </h1>

      <p class="text-sm sm:text-base text-gray-600 leading-relaxed font-normal">
        {{ isRTL 
          ? 'الصفحة التي تحاول الوصول إليها قد تم نقلها أو تعديل عنوانها. نرحب بعودتك إلى الصفحة الرئيسية أو التواصل معنا.' 
          : 'The page you are looking for might have been moved, renamed, or is temporarily unavailable.' }}
      </p>

      <div class="pt-4 flex items-center justify-center gap-4">
        <router-link to="/" class="btn-primary py-3 px-7 text-sm">
          <span>{{ isRTL ? 'العودة للصفحة الرئيسية' : 'Return to Home' }}</span>
        </router-link>

        <router-link to="/contact" class="btn-secondary py-3 px-6 text-sm">
          <span>{{ isRTL ? 'اتصل بنا' : 'Contact Us' }}</span>
        </router-link>
      </div>

    </div>
  </div>
</template>
