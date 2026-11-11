<script setup>
import { useLanguage } from '../composables/useLanguage.js';
import { useSeo } from '../composables/useSeo.js';

const { isRTL } = useLanguage();
useSeo('terms');
</script>

<template>
  <div class="py-12 sm:py-20 bg-white">
    <div class="site-container max-w-4xl mx-auto text-start">
      
      <div class="border-b border-gray-100 pb-8 mb-8">
        <span class="text-xs font-bold text-[#24a3b1] uppercase tracking-wider block mb-2">
          {{ isRTL ? 'إرشادات الاستخدام' : 'Terms of Service' }}
        </span>
        <h1 class="text-3xl sm:text-4xl font-extrabold text-[#011f23] mb-3">
          {{ isRTL ? 'الشروط والأحكام وسياسة المواعيد' : 'Terms & Conditions & Booking Policy' }}
        </h1>
        <p class="text-xs text-gray-400">
          {{ isRTL ? 'آخر تحديث: نوفمبر 2026' : 'Last updated: November 2026' }}
        </p>
      </div>

      <div class="prose prose-teal max-w-none text-gray-700 space-y-6 text-sm sm:text-base leading-relaxed">
        <p>
          {{ isRTL 
            ? 'مرحباً بكم في الموقع الرسمي لبريستيج سمايل لطب وجراحة الأسنان. استخدامكم لهذا الموقع وخدمات طلب المواعيد المتاحة يخضع للشروط والأحكام التالية.' 
            : 'Welcome to the official website of Prestige Smile Dental Clinic. By accessing this platform and submitting appointment inquiries, you agree to comply with the following terms.' }}
        </p>

        <h2 class="text-xl font-bold text-[#011f23] pt-4">
          {{ isRTL ? '1. طلبات حجز المواعيد' : '1. Appointment Requests' }}
        </h2>
        <p>
          {{ isRTL 
            ? 'إن إرسال نموذج طلب الموعد عبر الموقع الإلكتروني أو تحويله إلى تطبيق الواتساب يُعد طلباً مبدئياً لحجز الموعد، ولا يعتبر الحجز مؤكداً ونهائياً إلا بعد تواصل فريق الاستقبال معكم وتأكيد الموعد بصورة رسمية.' 
            : 'Submitting an appointment request form or initiating a WhatsApp inquiry represents a preliminary scheduling request. A booking is formally confirmed only once our clinic reception team verifies availability and contacts you.' }}
        </p>

        <h2 class="text-xl font-bold text-[#011f23] pt-4">
          {{ isRTL ? '2. الاستشارات والمعلومات الطبية العامة' : '2. Medical Advice Disclaimer' }}
        </h2>
        <p>
          {{ isRTL 
            ? 'المحتوى التثقيفي والمقالات المنشورة على هذا الموقع مقدمة لأغراض التوعية العامة فقط، ولا تُعد بديلاً عن الفحص السريري المباشر والتشخيص الطبي المتخصص من قبل طبيب الأسنان.' 
            : 'All educational articles and health insights published on this website are provided for general informative guidance only, and cannot substitute for an in-person clinical diagnosis by a licensed dentist.' }}
        </p>

        <h2 class="text-xl font-bold text-[#011f23] pt-4">
          {{ isRTL ? '3. إلغاء أو إعادة جدولة المواعيد' : '3. Cancellations & Rescheduling' }}
        </h2>
        <p>
          {{ isRTL 
            ? 'نقدر وقتكم ووقت أطبائنا؛ لذا يرجى إشعارنا قبل 24 ساعة على الأقل في حال رغبتكم في إلغاء أو تعديل موعد الزيارة لنتمكن من خدمة مرضى آخرين.' 
            : 'We respect your time and that of our clinical staff. If you need to cancel or reschedule, please provide at least 24 hours prior notification so other patients may be accommodated.' }}
        </p>
      </div>

    </div>
  </div>
</template>
