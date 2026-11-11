<script setup>
import { reactive, ref } from 'vue';
import { useLanguage } from '../../composables/useLanguage.js';
import { useBooking } from '../../composables/useBooking.js';

const { currentLang, isRTL, t } = useLanguage();
const { isSubmitting, isSuccess, errorMessage, submitAppointment, resetBooking } = useBooking();

const form = reactive({
  name: '',
  phone: '',
  service: '',
  date: '',
  time: 'morning',
  notes: ''
});

const errors = reactive({
  name: '',
  phone: '',
  service: ''
});

const validate = () => {
  let valid = true;
  errors.name = '';
  errors.phone = '';
  errors.service = '';

  if (!form.name.trim()) {
    errors.name = currentLang.value === 'ar' ? 'يرجى إدخال الاسم الكريم' : 'Please enter your name';
    valid = false;
  }

  if (!form.phone.trim()) {
    errors.phone = currentLang.value === 'ar' ? 'يرجى إدخال رقم الهاتف' : 'Please enter your phone number';
    valid = false;
  } else if (form.phone.replace(/[^\d+]/g, '').length < 8) {
    errors.phone = currentLang.value === 'ar' ? 'يرجى إدخال رقم هاتف صالح' : 'Please enter a valid phone number';
    valid = false;
  }

  return valid;
};

const handleSubmit = async () => {
  if (!validate()) return;
  await submitAppointment(form);
};
</script>

<template>
  <div class="bg-white rounded-3xl p-6 sm:p-10 shadow-xl border border-gray-100 max-w-2xl mx-auto">
    <!-- Success State -->
    <div v-if="isSuccess" class="text-center py-8 space-y-4">
      <div class="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
        <svg class="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 13l4 4L19 7" />
        </svg>
      </div>

      <h3 class="text-2xl font-bold text-[#011f23]">
        {{ t('bookingForm.successTitle') }}
      </h3>

      <p class="text-gray-600 text-sm max-w-md mx-auto leading-relaxed">
        {{ t('bookingForm.successDesc') }}
      </p>

      <div class="pt-4">
        <button 
          @click="resetBooking"
          type="button" 
          class="btn-secondary text-sm px-6 py-2.5"
        >
          {{ isRTL ? 'تقديم طلب موعد آخر' : 'Submit Another Request' }}
        </button>
      </div>
    </div>

    <!-- Active Form -->
    <form v-else @submit.prevent="handleSubmit" class="space-y-6">
      <div class="border-b border-gray-100 pb-4 mb-6">
        <h3 class="text-xl sm:text-2xl font-bold text-[#011f23]">
          {{ t('bookingForm.title') }}
        </h3>
        <p class="text-xs sm:text-sm text-gray-500 mt-1">
          {{ t('bookingForm.subtitle') }}
        </p>
      </div>

      <!-- Error Alert -->
      <div v-if="errorMessage" class="p-3.5 bg-red-50 text-red-700 text-xs rounded-xl border border-red-200">
        {{ errorMessage }}
      </div>

      <!-- Full Name Field -->
      <div>
        <label class="block text-xs font-bold text-gray-700 mb-1.5">
          {{ t('bookingForm.nameLabel') }} <span class="text-red-500">*</span>
        </label>
        <input 
          v-model="form.name"
          type="text" 
          :placeholder="t('bookingForm.namePlaceholder')"
          class="w-full px-4 py-3 text-sm rounded-xl border transition-all focus:outline-none"
          :class="errors.name ? 'border-red-400 focus:border-red-500 bg-red-50/20' : 'border-gray-200 focus:border-[#24a3b1] focus:ring-2 focus:ring-[#24a3b1]/20'"
        />
        <span v-if="errors.name" class="text-red-500 text-[11px] font-medium mt-1 block">{{ errors.name }}</span>
      </div>

      <!-- Phone Number Field -->
      <div>
        <label class="block text-xs font-bold text-gray-700 mb-1.5">
          {{ t('bookingForm.phoneLabel') }} <span class="text-red-500">*</span>
        </label>
        <input 
          v-model="form.phone"
          type="tel" 
          :placeholder="t('bookingForm.phonePlaceholder')"
          class="w-full px-4 py-3 text-sm rounded-xl border transition-all focus:outline-none"
          :class="errors.phone ? 'border-red-400 focus:border-red-500 bg-red-50/20' : 'border-gray-200 focus:border-[#24a3b1] focus:ring-2 focus:ring-[#24a3b1]/20'"
        />
        <span v-if="errors.phone" class="text-red-500 text-[11px] font-medium mt-1 block">{{ errors.phone }}</span>
      </div>

      <!-- Service Selection Field -->
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label class="block text-xs font-bold text-gray-700 mb-1.5">
            {{ t('bookingForm.serviceLabel') }}
          </label>
          <select 
            v-model="form.service"
            class="w-full px-4 py-3 text-sm rounded-xl border border-gray-200 focus:border-[#24a3b1] focus:ring-2 focus:ring-[#24a3b1]/20 focus:outline-none bg-white"
          >
            <option value="">{{ t('bookingForm.serviceSelect') }}</option>
            <option value="تبييض الأسنان بالليزر / Teeth Whitening">{{ isRTL ? 'تبييض وتجميل الأسنان' : 'Teeth Whitening' }}</option>
            <option value="زراعة الأسنان / Dental Implants">{{ isRTL ? 'زراعة الأسنان الرقمية' : 'Dental Implants' }}</option>
            <option value="تقويم الأسنان / Orthodontics">{{ isRTL ? 'تقويم الأسنان والتقويم الشفاف' : 'Clear Aligners & Orthodontics' }}</option>
            <option value="تنظيف الأسنان واللثة / Hygiene Cleaning">{{ isRTL ? 'تنظيف وتلميع الأسنان' : 'Dental Cleaning & Hygiene' }}</option>
            <option value="علاج الجذور والعصب / Root Canal">{{ isRTL ? 'علاج العصب والجذور' : 'Root Canal Therapy' }}</option>
            <option value="كشف واستشارة عامة / General Checkup">{{ isRTL ? 'فحص شامل واستشارة' : 'General Checkup & Consultation' }}</option>
          </select>
        </div>

        <div>
          <label class="block text-xs font-bold text-gray-700 mb-1.5">
            {{ t('bookingForm.dateLabel') }}
          </label>
          <input 
            v-model="form.date"
            type="date"
            class="w-full px-4 py-3 text-sm rounded-xl border border-gray-200 focus:border-[#24a3b1] focus:ring-2 focus:ring-[#24a3b1]/20 focus:outline-none bg-white"
          />
        </div>
      </div>

      <!-- Preferred Time of Day -->
      <div>
        <label class="block text-xs font-bold text-gray-700 mb-2">
          {{ t('bookingForm.timeLabel') }}
        </label>
        <div class="grid grid-cols-3 gap-2 sm:gap-3 text-center">
          <label 
            class="px-3 py-2.5 rounded-xl border text-xs font-semibold cursor-pointer transition-all"
            :class="form.time === 'morning' ? 'border-[#24a3b1] bg-teal-50 text-[#1b8591]' : 'border-gray-200 text-gray-600 hover:border-gray-300'"
          >
            <input type="radio" v-model="form.time" value="morning" class="sr-only" />
            <span>{{ isRTL ? 'صباحاً' : 'Morning' }}</span>
          </label>

          <label 
            class="px-3 py-2.5 rounded-xl border text-xs font-semibold cursor-pointer transition-all"
            :class="form.time === 'afternoon' ? 'border-[#24a3b1] bg-teal-50 text-[#1b8591]' : 'border-gray-200 text-gray-600 hover:border-gray-300'"
          >
            <input type="radio" v-model="form.time" value="afternoon" class="sr-only" />
            <span>{{ isRTL ? 'ظهراً' : 'Afternoon' }}</span>
          </label>

          <label 
            class="px-3 py-2.5 rounded-xl border text-xs font-semibold cursor-pointer transition-all"
            :class="form.time === 'evening' ? 'border-[#24a3b1] bg-teal-50 text-[#1b8591]' : 'border-gray-200 text-gray-600 hover:border-gray-300'"
          >
            <input type="radio" v-model="form.time" value="evening" class="sr-only" />
            <span>{{ isRTL ? 'مساءً' : 'Evening' }}</span>
          </label>
        </div>
      </div>

      <!-- Notes Field -->
      <div>
        <label class="block text-xs font-bold text-gray-700 mb-1.5">
          {{ t('bookingForm.notesLabel') }}
        </label>
        <textarea 
          v-model="form.notes"
          rows="3"
          :placeholder="t('bookingForm.notesPlaceholder')"
          class="w-full px-4 py-3 text-sm rounded-xl border border-gray-200 focus:border-[#24a3b1] focus:ring-2 focus:ring-[#24a3b1]/20 focus:outline-none"
        ></textarea>
      </div>

      <!-- Notice Alert -->
      <div class="p-3.5 bg-teal-50/70 rounded-xl border border-teal-100 flex items-start gap-2.5 text-xs text-teal-900 leading-relaxed">
        <svg class="w-4 h-4 text-[#24a3b1] shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        <span>{{ t('bookingForm.notice') }}</span>
      </div>

      <!-- Submit Button -->
      <button 
        type="submit"
        :disabled="isSubmitting"
        class="w-full py-4 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white font-bold text-sm sm:text-base shadow-lg hover:shadow-xl transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
      >
        <svg class="w-5 h-5 fill-current" viewBox="0 0 24 24">
          <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.007c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86.173.086.275.072.376-.044.101-.116.433-.506.549-.68.116-.173.231-.145.39-.087s1.011.477 1.184.564.289.13.332.202c.045.072.045.419-.1.824z"/>
        </svg>
        <span>{{ isSubmitting ? t('bookingForm.submitting') : t('bookingForm.submitBtn') }}</span>
      </button>
    </form>
  </div>
</template>
