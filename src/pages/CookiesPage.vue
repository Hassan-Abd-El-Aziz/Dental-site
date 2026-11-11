<script setup>
import { useLanguage } from '../composables/useLanguage.js';
import { useSeo } from '../composables/useSeo.js';

const { isRTL } = useLanguage();
useSeo('cookies');
</script>

<template>
  <div class="py-12 sm:py-20 bg-white">
    <div class="site-container max-w-4xl mx-auto text-start">
      
      <div class="border-b border-gray-100 pb-8 mb-8">
        <span class="text-xs font-bold text-[#24a3b1] uppercase tracking-wider block mb-2">
          {{ isRTL ? 'إدارة التفضيلات' : 'Preferences' }}
        </span>
        <h1 class="text-3xl sm:text-4xl font-extrabold text-[#011f23] mb-3">
          {{ isRTL ? 'سياسة ملفات تعريف الارتباط (الكوكيز)' : 'Cookie Policy' }}
        </h1>
        <p class="text-xs text-gray-400">
          {{ isRTL ? 'آخر تحديث: نوفمبر 2026' : 'Last updated: November 2026' }}
        </p>
      </div>

      <div class="prose prose-teal max-w-none text-gray-700 space-y-6 text-sm sm:text-base leading-relaxed">
        <p>
          {{ isRTL 
            ? 'نستخدم ملفات تعريف الارتباط الأساسية لضمان عمل الموقع بكفاءة، مثل حفظ تفضيلات اللغة المختارة (العربية أو الإنجليزية) وتحسين سرعة التصفح.' 
            : 'We use essential cookies to guarantee smooth site performance, such as storing your selected language preference (Arabic or English) and optimizing page responsiveness.' }}
        </p>

        <h2 class="text-xl font-bold text-[#011f23] pt-4">
          {{ isRTL ? '1. ما هي ملفات تعريف الارتباط؟' : '1. What Are Cookies?' }}
        </h2>
        <p>
          {{ isRTL 
            ? 'ملفات تعريف الارتباط هي ملفات نصية صغيرة تُخزن على جهازك بواسطة متصفح الويب لتذكر تفضيلاتك وتوفير تجربة استخدام مخصصة وسلسة.' 
            : 'Cookies are compact text files saved on your device by your browser to remember preferences and provide a personalized experience.' }}
        </p>

        <h2 class="text-xl font-bold text-[#011f23] pt-4">
          {{ isRTL ? '2. كيفية إدارة الملفات' : '2. Managing Your Preferences' }}
        </h2>
        <p>
          {{ isRTL 
            ? 'يمكنكم في أي وقت ضبط إعدادات المتصفح لرفض ملفات تعريف الارتباط أو تنبيهكم عند إرسالها، علماً بأن تعطيلها قد يؤثر على تذكر لغتكم المفضلة عند كل زيارة.' 
            : 'You can adjust your browser settings at any time to reject cookies or prompt you upon delivery; note that disabling them may reset your language selection.' }}
        </p>
      </div>

    </div>
  </div>
</template>
