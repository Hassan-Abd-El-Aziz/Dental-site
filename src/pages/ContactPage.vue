<script setup>
import { reactive } from 'vue';
import { useLanguage } from '../composables/useLanguage.js';
import { useSeo } from '../composables/useSeo.js';
import { contactConfig } from '../config/contact.js';

const { currentLang, isRTL, t, localize } = useLanguage();
useSeo('contact');

const contactForm = reactive({
  name: '',
  phone: '',
  email: '',
  message: ''
});

const sendMessage = () => {
  if (!contactForm.name || !contactForm.phone) return;
  const isAr = currentLang.value === 'ar';
  const text = isAr
    ? `رسالة جديدة من موقع بريستيج سمايل للأسنان:\n• الاسم: ${contactForm.name}\n• الهاتف: ${contactForm.phone}\n• البريد: ${contactForm.email || 'غير محدد'}\n• الرسالة: ${contactForm.message}`
    : `New Contact Inquiry for Prestige Smile:\n• Name: ${contactForm.name}\n• Phone: ${contactForm.phone}\n• Email: ${contactForm.email || 'Not provided'}\n• Message: ${contactForm.message}`;
  
  const url = `https://wa.me/${contactConfig.whatsappNumber}?text=${encodeURIComponent(text)}`;
  window.open(url, '_blank');
};
</script>

<template>
  <div class="py-12 sm:py-16 bg-[#fafafa]">
    <div class="site-container">
      
      <!-- Page Header -->
      <div class="max-w-3xl mx-auto text-center mb-12 sm:mb-16">
        <span class="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-teal-50 border border-teal-200 text-[#1b8591] mb-4">
          <span class="w-2 h-2 rounded-full bg-[#24a3b1]"></span>
          {{ isRTL ? 'تواصل معنا' : 'Contact Prestige Smile' }}
        </span>

        <h1 class="text-3xl sm:text-5xl font-extrabold text-[#011f23] tracking-tight leading-tight mb-4">
          {{ t('contactPage.title') }}
        </h1>

        <p class="text-base sm:text-lg text-gray-600 leading-relaxed font-normal">
          {{ t('contactPage.subtitle') }}
        </p>
      </div>

      <!-- Main Contact Grid -->
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 max-w-6xl mx-auto items-start">
        
        <!-- Left: Contact Details Cards (5 cols) -->
        <div class="lg:col-span-5 space-y-6 text-start">
          
          <!-- Direct Telephone -->
          <div class="bg-white rounded-3xl p-6 sm:p-7 border border-gray-100 shadow-sm flex items-start gap-4">
            <div class="w-12 h-12 rounded-2xl bg-teal-50 text-[#24a3b1] flex items-center justify-center shrink-0">
              <svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
            </div>
            <div>
              <span class="block text-xs font-bold text-gray-400 uppercase tracking-wide mb-1">{{ t('contactPage.directPhone') }}</span>
              <a :href="`tel:${contactConfig.phoneFormatted}`" class="text-lg font-bold text-[#011f23] hover:text-[#24a3b1] block">
                {{ contactConfig.phone }}
              </a>
              <span class="text-xs text-gray-500">{{ isRTL ? 'متاح طوال ساعات العمل' : 'Available during working hours' }}</span>
            </div>
          </div>

          <!-- WhatsApp Line -->
          <div class="bg-white rounded-3xl p-6 sm:p-7 border border-gray-100 shadow-sm flex items-start gap-4">
            <div class="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
              <svg class="w-6 h-6 fill-current" viewBox="0 0 24 24">
                <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.007c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86.173.086.275.072.376-.044.101-.116.433-.506.549-.68.116-.173.231-.145.39-.087s1.011.477 1.184.564.289.13.332.202c.045.072.045.419-.1.824z"/>
              </svg>
            </div>
            <div>
              <span class="block text-xs font-bold text-gray-400 uppercase tracking-wide mb-1">{{ t('contactPage.whatsappSupport') }}</span>
              <a :href="`https://wa.me/${contactConfig.whatsappNumber}`" target="_blank" class="text-lg font-bold text-emerald-600 hover:text-emerald-700 block">
                {{ contactConfig.whatsappDisplay }}
              </a>
              <span class="text-xs text-gray-500">{{ isRTL ? 'استجابة سريعة للمواعيد' : 'Instant appointment booking' }}</span>
            </div>
          </div>

          <!-- Clinic Location & Working Hours -->
          <div class="bg-white rounded-3xl p-6 sm:p-7 border border-gray-100 shadow-sm space-y-4">
            <div class="flex items-start gap-4">
              <div class="w-12 h-12 rounded-2xl bg-teal-50 text-[#24a3b1] flex items-center justify-center shrink-0">
                <svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <div>
                <span class="block text-xs font-bold text-gray-400 uppercase tracking-wide mb-1">{{ t('contactPage.locationTitle') }}</span>
                <p class="text-sm font-semibold text-[#011f23] leading-relaxed">
                  {{ localize(contactConfig.address) }}
                </p>
                <a :href="contactConfig.mapsUrl" target="_blank" class="text-xs font-bold text-[#24a3b1] hover:underline mt-2 inline-block">
                  {{ t('contactPage.getDirections') }} &rarr;
                </a>
              </div>
            </div>

            <div class="pt-4 border-t border-gray-100">
              <span class="block text-xs font-bold text-gray-400 uppercase tracking-wide mb-1">{{ isRTL ? 'أوقات الدوام' : 'Working Hours' }}</span>
              <p class="text-xs text-gray-600">{{ contactConfig.workingHours[currentLang]?.weekdays || contactConfig.workingHours.ar.weekdays }}</p>
              <p class="text-xs text-gray-600">{{ contactConfig.workingHours[currentLang]?.friday || contactConfig.workingHours.ar.friday }}</p>
            </div>
          </div>

        </div>

        <!-- Right: Message Form & Map Embed (7 cols) -->
        <div class="lg:col-span-7 space-y-6">
          
          <!-- Contact Form Box -->
          <div class="bg-white rounded-3xl p-6 sm:p-10 border border-gray-100 shadow-xl text-start">
            <h2 class="text-2xl font-bold text-[#011f23] mb-2">
              {{ isRTL ? 'أرسل لنا استفسارك أو طلبك' : 'Send an Inquiry' }}
            </h2>
            <p class="text-xs sm:text-sm text-gray-500 mb-6">
              {{ isRTL ? 'يسعدنا الرد على جميع أسئلتكم ومساعدتكم في اختيار الخدمة المناسبة.' : 'We are pleased to answer any questions and assist your dental needs.' }}
            </p>

            <form @submit.prevent="sendMessage" class="space-y-4">
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label class="block text-xs font-bold text-gray-700 mb-1">{{ isRTL ? 'الاسم الكريم' : 'Full Name' }} *</label>
                  <input v-model="contactForm.name" required type="text" class="w-full px-4 py-3 text-sm rounded-xl border border-gray-200 focus:border-[#24a3b1] focus:outline-none" />
                </div>
                <div>
                  <label class="block text-xs font-bold text-gray-700 mb-1">{{ isRTL ? 'رقم الهاتف' : 'Phone Number' }} *</label>
                  <input v-model="contactForm.phone" required type="tel" class="w-full px-4 py-3 text-sm rounded-xl border border-gray-200 focus:border-[#24a3b1] focus:outline-none" />
                </div>
              </div>

              <div>
                <label class="block text-xs font-bold text-gray-700 mb-1">{{ isRTL ? 'البريد الإلكتروني (اختياري)' : 'Email (Optional)' }}</label>
                <input v-model="contactForm.email" type="email" class="w-full px-4 py-3 text-sm rounded-xl border border-gray-200 focus:border-[#24a3b1] focus:outline-none" />
              </div>

              <div>
                <label class="block text-xs font-bold text-gray-700 mb-1">{{ isRTL ? 'الرسالة أو الاستفسار' : 'Your Message' }}</label>
                <textarea v-model="contactForm.message" rows="3" class="w-full px-4 py-3 text-sm rounded-xl border border-gray-200 focus:border-[#24a3b1] focus:outline-none"></textarea>
              </div>

              <button type="submit" class="w-full btn-primary py-3.5 text-sm">
                <span>{{ isRTL ? 'إرسال الرسالة عبر الواتساب' : 'Send Message on WhatsApp' }}</span>
              </button>
            </form>
          </div>

          <!-- Interactive Google Maps Container -->
          <div class="rounded-3xl overflow-hidden shadow-lg border border-gray-100 h-64 bg-gray-100 relative">
            <iframe 
              :src="contactConfig.mapsEmbedUrl" 
              class="w-full h-full border-0" 
              allowfullscreen="" 
              loading="lazy" 
              referrerpolicy="no-referrer-when-downgrade"
              title="موقع عيادة بريستيج سمايل على خرائط جوجل"
            ></iframe>
          </div>

        </div>

      </div>

    </div>
  </div>
</template>
