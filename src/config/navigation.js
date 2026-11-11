export const navigationConfig = {
  mainNav: [
    {
      id: 'home',
      name: { ar: 'الرئيسية', en: 'Home' },
      path: '/'
    },
    {
      id: 'about',
      name: { ar: 'عن العيادة', en: 'About Us' },
      path: '/about'
    },
    {
      id: 'services',
      name: { ar: 'خدماتنا', en: 'Services' },
      path: '/services'
    },
    {
      id: 'faq',
      name: { ar: 'الأسئلة الشائعة', en: 'FAQ' },
      path: '/#faq'
    },
    {
      id: 'contact',
      name: { ar: 'اتصل بنا', en: 'Contact' },
      path: '/contact'
    }
  ],
  footerLinks: {
    quickLinks: [
      { name: { ar: 'الرئيسية', en: 'Home' }, path: '/' },
      { name: { ar: 'عن العيادة', en: 'About Us' }, path: '/about' },
      { name: { ar: 'خدماتنا', en: 'Services' }, path: '/services' },
      { name: { ar: 'الأسئلة الشائعة', en: 'FAQ' }, path: '/#faq' },
      { name: { ar: 'اتصل بنا', en: 'Contact' }, path: '/contact' }
    ],
    services: [
      { name: { ar: 'تبييض الأسنان بالليزر', en: 'Teeth Whitening' }, path: '/services' },
      { name: { ar: 'زراعة الأسنان الرقمية', en: 'Dental Implants' }, path: '/services' },
      { name: { ar: 'تقويم الأسنان الشفاف', en: 'Orthodontics' }, path: '/services' },
      { name: { ar: 'تجميل الابتسامة (فينير)', en: 'Cosmetic Veneers' }, path: '/services' },
      { name: { ar: 'علاج العصب والجذور', en: 'Root Canal Therapy' }, path: '/services' },
      { name: { ar: 'تنظيف وتلميع الأسنان', en: 'Dental Cleaning' }, path: '/services' }
    ],
    legal: [
      { name: { ar: 'سياسة الخصوصية', en: 'Privacy Policy' }, path: '/privacy' },
      { name: { ar: 'الشروط والأحكام', en: 'Terms & Conditions' }, path: '/terms' },
      { name: { ar: 'ملفات تعريف الارتباط', en: 'Cookie Policy' }, path: '/cookies' }
    ]
  }
};
