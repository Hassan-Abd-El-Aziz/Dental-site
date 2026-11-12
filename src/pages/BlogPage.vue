<script setup>
import { useLanguage } from '../composables/useLanguage.js';
import { useSeo } from '../composables/useSeo.js';
import FaqSection from '../components/home/FaqSection.vue';
import BookingCtaSection from '../components/home/BookingCtaSection.vue';

const { isRTL, t } = useLanguage();
useSeo('blog');

const articles = [
  {
    id: '1',
    title: { ar: '5 نصائح ذهبية للحفاظ على بياض أسنانك بعد التبييض', en: '5 Essential Tips to Maintain White Teeth Post-Whitening' },
    excerpt: { ar: 'دليلك الشامل للمحافظة على نتائج التبييض لأطول فترة وتجنب التصبغات الناتجة عن الأطعمة والمشروبات اليومية.', en: 'Your complete guide to extending teeth whitening results and preventing everyday beverage stains.' },
    date: '10 Nov 2026',
    category: { ar: 'تجميل الأسنان', en: 'Cosmetics' },
    image: '/images/gen_blog-image-1.jpg',
    readTime: '3 min read'
  },
  {
    id: '2',
    title: { ar: 'الفرق بين التقويم الشفاف والتقويم المعدني التقليدي', en: 'Clear Aligners vs. Traditional Braces: Which is Right for You?' },
    excerpt: { ar: 'مقارنة دقيقة وشاملة توضح مزايا كل نوع ومدى مناسبته لحالتك من حيث الشكل والمدة والتكلفة.', en: 'A comprehensive comparison exploring aesthetics, treatment duration, comfort, and lifestyle fit.' },
    date: '05 Nov 2026',
    category: { ar: 'تقويم الأسنان', en: 'Orthodontics' },
    image: '/images/gen_blog-image-2.jpg',
    readTime: '5 min read'
  },
  {
    id: '3',
    title: { ar: 'كل ما تود معرفته عن زراعة الأسنان الفورية', en: 'Everything You Need to Know About Same-Day Dental Implants' },
    excerpt: { ar: 'هل يمكن تركيب السن الجديد في نفس اليوم؟ استكشف شروط زراعة الأسنان الفورية ومزاياها للمرضى.', en: 'Discover when immediate load implants are possible and how 3D digital planning speeds recovery.' },
    date: '28 Oct 2026',
    category: { ar: 'زراعة الأسنان', en: 'Implants' },
    image: '/images/gen_blog-image-3.jpg',
    readTime: '4 min read'
  },
  {
    id: '4',
    title: { ar: 'كيف تتخلص تماماً من الخوف من زيارة طبيب الأسنان؟', en: 'Overcoming Dental Anxiety: Secrets to Pain-Free Visits' },
    excerpt: { ar: 'استراتيجيات حديثة وتقنيات تخدير مهدئة تجعل تجربة عيادة الأسنان تجربة مريحة وممتعة.', en: 'Modern sedation and gentle anesthesia protocols designed for completely stress-free dental visits.' },
    date: '20 Oct 2026',
    category: { ar: 'صحة الفم', en: 'Oral Health' },
    image: '/images/gen_blog-image-4.jpg',
    readTime: '4 min read'
  },
  {
    id: '5',
    title: { ar: 'أهمية تنظيف الأسنان الدوري كل 6 أشهر', en: 'Why Routine Dental Cleaning Every 6 Months is Crucial' },
    excerpt: { ar: 'كيف يحميك التنظيف الاحترافي من التهابات اللثة الصامتة ورائحة الفم وفقدان الأسنان المبكر.', en: 'How professional ultrasonic scaling prevents silent gum disease, bad breath, and bone loss.' },
    date: '15 Oct 2026',
    category: { ar: 'وقاية الأسنان', en: 'Prevention' },
    image: '/images/gen_blog-image-5.jpg',
    readTime: '3 min read'
  },
  {
    id: '6',
    title: { ar: 'العناية بأسنان الأطفال منذ ظهور السن الأول', en: 'Pediatric Dental Care: From the Very First Baby Tooth' },
    excerpt: { ar: 'إرشادات لأولياء الأمور لحماية أسنان أطفالهم من التسوس المبكر وبناء عادات تنظيف صحية مدى الحياة.', en: 'Essential parent guidelines to prevent early childhood caries and build lifelong healthy brushing habits.' },
    date: '08 Oct 2026',
    category: { ar: 'طب أسنان الأطفال', en: 'Pediatrics' },
    image: '/images/gen_blog-image-6.jpg',
    readTime: '5 min read'
  }
];
</script>

<template>
  <div>
    <!-- Hero Header -->
    <section class="pt-8 pb-12 bg-gradient-to-b from-teal-50/50 to-[#fafafa] text-center">
      <div class="site-container max-w-3xl mx-auto">
        <span class="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-teal-50 border border-teal-200 text-[#1b8591] mb-4">
          <span class="w-2 h-2 rounded-full bg-[#24a3b1]"></span>
          {{ isRTL ? 'المدونة الطبية التوعوية' : 'Dental Health Insights' }}
        </span>

        <h1 class="text-3xl sm:text-5xl font-extrabold text-[#011f23] tracking-tight leading-tight mb-4">
          {{ isRTL ? 'مقالات ونصائح موثوقة لصحة فمك وابتسامتك' : 'Expert Dental Guides & Oral Hygiene Advice' }}
        </h1>

        <p class="text-base sm:text-lg text-gray-600 leading-relaxed font-normal">
          {{ isRTL 
            ? 'مقالات طبية متخصصة ومبسطة يكتبها استشاريو عيادة حسن لمساعدتك في اتخاذ أفضل القرارات لصحة أسنانك.' 
            : 'Evidence-based oral health articles authored by our clinical consultants to empower your daily dental care.' }}
        </p>
      </div>
    </section>

    <!-- Articles Grid -->
    <section class="py-12 sm:py-16 bg-[#fafafa]">
      <div class="site-container">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          
          <article 
            v-for="post in articles" 
            :key="post.id"
            class="group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl border border-gray-100 transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between"
          >
            <div>
              <div class="relative aspect-[16/10] overflow-hidden bg-teal-900">
                <img 
                  :src="post.image" 
                  :alt="isRTL ? post.title.ar : post.title.en"
                  class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                  width="600"
                  height="375"
                />
                <span class="absolute top-4 start-4 px-3 py-1 rounded-full text-xs font-bold bg-white/95 text-[#011f23] shadow-xs">
                  {{ isRTL ? post.category.ar : post.category.en }}
                </span>
              </div>

              <div class="p-6 sm:p-7 text-start">
                <div class="flex items-center gap-3 text-xs text-gray-400 font-medium mb-3">
                  <span>{{ post.date }}</span>
                  <span>•</span>
                  <span>{{ post.readTime }}</span>
                </div>

                <h2 class="text-lg font-bold text-[#011f23] group-hover:text-[#24a3b1] transition-colors leading-snug mb-3">
                  {{ isRTL ? post.title.ar : post.title.en }}
                </h2>

                <p class="text-xs sm:text-sm text-gray-600 leading-relaxed">
                  {{ isRTL ? post.excerpt.ar : post.excerpt.en }}
                </p>
              </div>
            </div>

            <div class="px-6 pb-6 pt-0 border-t border-gray-50">
              <span class="inline-flex items-center gap-1.5 text-xs font-bold text-[#24a3b1] pt-4 cursor-pointer">
                <span>{{ t('blog.readMore') }}</span>
                <svg class="w-3.5 h-3.5" :class="isRTL ? 'rotate-180' : ''" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M9 5l7 7-7 7" />
                </svg>
              </span>
            </div>
          </article>

        </div>
      </div>
    </section>

    <!-- FAQs & CTA -->
    <FaqSection />
    <BookingCtaSection />
  </div>
</template>
