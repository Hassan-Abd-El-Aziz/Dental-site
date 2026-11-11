<script setup>
import { useLanguage } from '../composables/useLanguage.js';
import { useSeo } from '../composables/useSeo.js';
import { contactConfig } from '../config/contact.js';

const { isRTL } = useLanguage();
useSeo('privacy');
</script>

<template>
  <div class="py-12 sm:py-20 bg-white">
    <div class="site-container max-w-4xl mx-auto text-start">
      
      <div class="border-b border-gray-100 pb-8 mb-8">
        <span class="text-xs font-bold text-[#24a3b1] uppercase tracking-wider block mb-2">
          {{ isRTL ? 'الشفافية والأمان' : 'Transparency & Trust' }}
        </span>
        <h1 class="text-3xl sm:text-4xl font-extrabold text-[#011f23] mb-3">
          {{ isRTL ? 'سياسة الخصوصية وحماية بيانات المرضى' : 'Privacy & Patient Data Protection Policy' }}
        </h1>
        <p class="text-xs text-gray-400">
          {{ isRTL ? 'آخر تحديث: نوفمبر 2026' : 'Last updated: November 2026' }}
        </p>
      </div>

      <div class="prose prose-teal max-w-none text-gray-700 space-y-6 text-sm sm:text-base leading-relaxed">
        <p>
          {{ isRTL 
            ? 'في بريستيج سمايل لطب الأسنان، تأتي خصوصيتكم وسرية بياناتكم الطبية في مقدمة أولوياتنا. توضح هذه السياسة كيفية جمع واستخدام وحماية البيانات الشخصية عند زيارة موقعنا الإلكتروني أو استخدام خدمات حجز المواعيد.' 
            : 'At Prestige Smile Dental Clinic, your privacy and the confidentiality of your medical information are paramount. This policy outlines how we collect, use, and protect your information when utilizing our website or scheduling appointments.' }}
        </p>

        <h2 class="text-xl font-bold text-[#011f23] pt-4">
          {{ isRTL ? '1. المعلومات التي نقوم بجمعها' : '1. Information We Collect' }}
        </h2>
        <p>
          {{ isRTL 
            ? 'نجمع فقط المعلومات الضرورية لتنسيق وتأكيد مواعيدكم الطبية، وتشمل: الاسم الكريم، رقم الهاتف، والخدمة السنية المطلوبة. لا نقوم إطلاقاً بتخزين أية بيانات طبية حساسة على الموقع العام.' 
            : 'We collect only essential details necessary to coordinate and confirm your dental appointments: full name, contact phone number, and requested treatment. We do not store sensitive medical histories on this public portal.' }}
        </p>

        <h2 class="text-xl font-bold text-[#011f23] pt-4">
          {{ isRTL ? '2. كيفية استخدام البيانات' : '2. How Your Information is Used' }}
        </h2>
        <ul class="list-disc ps-6 space-y-2">
          <li>{{ isRTL ? 'التواصل معكم عبر الهاتف أو تطبيق الواتساب لتأكيد تفاصيل ومواعيد الزيارة.' : 'Directly communicating via phone or WhatsApp to coordinate your appointment schedule.' }}</li>
          <li>{{ isRTL ? 'الإجابة على استفساراتكم الطبية والتنظيمية قبل زيارة العيادة.' : 'Responding to clinical and scheduling inquiries prior to your visit.' }}</li>
          <li>{{ isRTL ? 'تحسين جودة تجربة التصفح وتطوير خدمات العيادة.' : 'Improving user experience, site responsiveness, and patient support.' }}</li>
        </ul>

        <h2 class="text-xl font-bold text-[#011f23] pt-4">
          {{ isRTL ? '3. سرية البيانات وعدم مشاركتها' : '3. Strict Non-Disclosure & Security' }}
        </h2>
        <p>
          {{ isRTL 
            ? 'نلتزم التزاماً تاماً بعدم بيع، تأجير أو مشاركة بياناتكم الشخصية مع أي أطراف ثالثة لأغراض تسويقية أو تجارية. تظل بياناتكم سرية ومحمية وفق أعلى المعايير الطبية والأخلاقية.' 
            : 'We strictly never sell, rent, or disclose your personal contact information to third parties for marketing purposes. Your information is safeguarded in accordance with clinical ethical standards.' }}
        </p>

        <h2 class="text-xl font-bold text-[#011f23] pt-4">
          {{ isRTL ? '4. التواصل معنا بخصوص الخصوصية' : '4. Inquiries Regarding Privacy' }}
        </h2>
        <p>
          {{ isRTL 
            ? `إذا كانت لديكم أي استفسارات حول سياسة الخصوصية، يرجى مراسلتنا عبر البريد: ${contactConfig.email}` 
            : `If you have any questions regarding our patient privacy standards, please reach us at: ${contactConfig.email}` }}
        </p>
      </div>

    </div>
  </div>
</template>
