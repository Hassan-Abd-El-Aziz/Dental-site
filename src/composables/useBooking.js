import { ref } from 'vue';
import { contactConfig } from '../config/contact.js';
import { useLanguage } from './useLanguage.js';

export function useBooking() {
  const { currentLang } = useLanguage();
  const isSubmitting = ref(false);
  const isSuccess = ref(false);
  const errorMessage = ref('');

  const generateWhatsAppUrl = ({ name, phone, service, date, time, notes }) => {
    const isArabic = currentLang.value === 'ar';
    let text = '';
    
    if (isArabic) {
      text = `السلام عليكم ورحمة الله، بريستيج سمايل لطب الأسنان 🦷\n\n`
        + `أود تقديم طلب حجز موعد جديد:\n`
        + `• الاسم الكريم: ${name}\n`
        + `• رقم الهاتف: ${phone}\n`
        + (service ? `• الخدمة المطلوبة: ${service}\n` : '')
        + (date ? `• التاريخ المفضل: ${date}\n` : '')
        + (time ? `• الوقت المفضل: ${time}\n` : '')
        + (notes ? `• ملاحظات / شكوى: ${notes}\n` : '')
        + `\nيرجى تأكيد التوقيت المناسب والمتاح لديكم. شكراً جزيلاً!`;
    } else {
      text = `Hello Prestige Smile Dental Clinic 🦷\n\n`
        + `I would like to request an appointment:\n`
        + `• Patient Name: ${name}\n`
        + `• Phone Number: ${phone}\n`
        + (service ? `• Requested Service: ${service}\n` : '')
        + (date ? `• Preferred Date: ${date}\n` : '')
        + (time ? `• Preferred Time: ${time}\n` : '')
        + (notes ? `• Notes / Details: ${notes}\n` : '')
        + `\nPlease let me know the available time slots. Thank you!`;
    }

    const encoded = encodeURIComponent(text);
    return `https://wa.me/${contactConfig.whatsappNumber}?text=${encoded}`;
  };

  const submitAppointment = async (formData) => {
    isSubmitting.value = true;
    errorMessage.value = '';

    try {
      // Validate name and phone
      if (!formData.name || !formData.name.trim()) {
        throw new Error(currentLang.value === 'ar' ? 'يرجى كتابة الاسم الكريم' : 'Please enter your name');
      }
      if (!formData.phone || !formData.phone.trim()) {
        throw new Error(currentLang.value === 'ar' ? 'يرجى كتابة رقم الهاتف' : 'Please enter your phone number');
      }

      const cleanPhone = formData.phone.replace(/[\s\-\(\)]/g, '');
      if (cleanPhone.length < 8) {
        throw new Error(currentLang.value === 'ar' ? 'يرجى إدخال رقم هاتف صحيح' : 'Please enter a valid phone number');
      }

      // Generate WhatsApp link
      const url = generateWhatsAppUrl(formData);

      // Open WhatsApp in new tab/window
      if (typeof window !== 'undefined') {
        const opened = window.open(url, '_blank');
        if (!opened) {
          // If popup blocked, direct location
          window.location.href = url;
        }
      }

      isSuccess.value = true;
      return true;
    } catch (err) {
      errorMessage.value = err.message || 'An error occurred';
      return false;
    } finally {
      isSubmitting.value = false;
    }
  };

  const resetBooking = () => {
    isSubmitting.value = false;
    isSuccess.value = false;
    errorMessage.value = '';
  };

  return {
    isSubmitting,
    isSuccess,
    errorMessage,
    submitAppointment,
    generateWhatsAppUrl,
    resetBooking
  };
}
