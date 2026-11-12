import { ref, computed } from 'vue';
import { messages, getTranslation } from '../i18n/index.js';

const currentLang = ref('ar');

export function useLanguage() {
  const isRTL = computed(() => currentLang.value === 'ar');
  const dir = computed(() => isRTL.value ? 'rtl' : 'ltr');
  const t = (path) => getTranslation(currentLang.value, path);
  const currentMessages = computed(() => {
    const raw = messages[currentLang.value] || messages.ar;
    return (raw && raw.default) ? raw.default : raw;
  });

  const localize = (obj) => {
    if (!obj) return '';
    if (typeof obj === 'string') return obj;
    return obj[currentLang.value] || obj.ar || obj.en || '';
  };

  const setLanguage = (lang) => {
    if (lang !== 'ar' && lang !== 'en') return;
    currentLang.value = lang;
    if (typeof window !== 'undefined') {
      localStorage.setItem('prestige_smile_lang', lang);
      applyDomDirection();
    }
  };

  const toggleLanguage = () => {
    setLanguage(currentLang.value === 'ar' ? 'en' : 'ar');
  };

  const applyDomDirection = () => {
    if (typeof document !== 'undefined') {
      document.documentElement.lang = currentLang.value;
      document.documentElement.dir = isRTL.value ? 'rtl' : 'ltr';
      if (currentLang.value === 'ar') {
        document.documentElement.classList.add('font-arabic');
        document.documentElement.classList.remove('font-english');
      } else {
        document.documentElement.classList.add('font-english');
        document.documentElement.classList.remove('font-arabic');
      }
    }
  };

  const initLanguage = () => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('prestige_smile_lang');
      if (saved === 'ar' || saved === 'en') {
        currentLang.value = saved;
      } else {
        currentLang.value = 'ar'; // Default Arabic
      }
      applyDomDirection();
    }
  };

  return {
    currentLang,
    isRTL,
    dir,
    t,
    localize,
    setLanguage,
    toggleLanguage,
    initLanguage,
    currentMessages,
    messages
  };
}
