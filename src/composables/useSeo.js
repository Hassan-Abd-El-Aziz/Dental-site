import { watch, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import { useLanguage } from './useLanguage.js';
import { seoConfig } from '../config/seo.js';
import { updatePageSeo } from '../utils/seo.js';

export function useSeo(pageKey = 'home', customMeta = null) {
  const route = useRoute();
  const { currentLang, isRTL } = useLanguage();

  const applySeo = () => {
    const lang = currentLang.value;
    const pageData = seoConfig.pages[pageKey]?.[lang] || seoConfig.pages.home[lang];
    
    const title = customMeta?.title || pageData?.title || seoConfig.defaultTitle[lang];
    const description = customMeta?.description || pageData?.description || seoConfig.defaultDescription[lang];
    const image = customMeta?.image || `${seoConfig.baseUrl}${seoConfig.defaultImage}`;
    const url = `${seoConfig.baseUrl}${route?.path || '/'}`;

    updatePageSeo({
      title,
      description,
      image,
      url,
      lang,
      breadcrumbs: [
        { name: lang === 'ar' ? 'الرئيسية' : 'Home', path: '/' },
        ...(route?.path && route.path !== '/' ? [{ name: title.split('|')[0].trim(), path: route.path }] : [])
      ]
    });
  };

  onMounted(() => {
    applySeo();
  });

  watch([() => currentLang.value, () => route?.path], () => {
    applySeo();
  });

  return {
    applySeo
  };
}
