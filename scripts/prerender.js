import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');
const distDir = path.resolve(rootDir, 'dist');

const routes = [
  {
    path: '/',
    aliases: ['index.html'],
    outDir: distDir,
    title: 'بريستيج سمايل | Prestige Smile | طب وتجميل الأسنان',
    description: 'مرحباً بكم في بريستيج سمايل لطب الأسنان. نقدم خدمات متكاملة في تبييض وزراعة وتقويم وتجميل الأسنان مع أحدث التقنيات الطبية وأعلى معايير الراحة والتعقيم.',
    h1: 'ابتسامة واثقة، صحية ومشرقة تبدأ من رعاية استثنائية',
    content: `
      <section>
        <h1>ابتسامة واثقة، صحية ومشرقة تبدأ من رعاية استثنائية</h1>
        <p>في بريستيج سمايل لطب وتجميل الأسنان نعتني بابتسامتك وصحة فمك بأحدث الأجهزة العالمية وتقنيات العلاج المريحة وغير المؤلمة على أيدي نخبة من استشاريي طب وجراحة الأسنان.</p>
        <h2>خدماتنا السنية المتميزة</h2>
        <ul>
          <li>تبييض وتجميل الأسنان بالليزر</li>
          <li>زراعة الأسنان الرقمية الفورية</li>
          <li>تقويم الأسنان والتقويم الشفاف</li>
          <li>تنظيف الأسنان وعلاج اللثة الدوري</li>
          <li>عدسات وابتسامة هوليوود (فينير ولومينير)</li>
          <li>علاج عصب وجذور الأسنان المجهري</li>
        </ul>
        <h2>الأسئلة الشائعة حول طب الأسنان</h2>
        <p>إجابات موثوقة لأكثر الأسئلة تداولاً عن تبييض الأسنان، الزراعة، التقويم، نزيف اللثة وطوارئ الأسنان.</p>
        <h2>أوقات العمل والتواصل</h2>
        <p>السبت – الخميس: 9:00 ص – 9:00 م | الجمعة: 2:00 م – 9:00 م | طوارئ الأسنان متوفرة 24/7</p>
      </section>
    `
  },
  {
    path: '/about',
    aliases: ['about.html'],
    outDir: path.resolve(distDir, 'about'),
    title: 'عن العيادة | مسيرتنا ورؤيتنا الطبية | بريستيج سمايل',
    description: 'تعرف على بريستيج سمايل لطب الأسنان، رؤيتنا في تقديم رعاية سنية استثنائية، أحدث الأجهزة الطبية وفريقنا الطبي ذو الخبرة العريقة.',
    h1: 'رسالتنا: ابتسامة واثقة وصحة فموية تدوم مدى الحياة',
    content: `
      <section>
        <h1>عن بريستيج سمايل لطب الأسنان</h1>
        <p>تأسست عيادة بريستيج سمايل لطب وجراحة الأسنان لتقديم رعاية طبية متقدمة في بيئة فاخرة ومريحة تحترم خصوصية المريض وتزيل كل مشاعر الخوف والقلق.</p>
        <h2>رؤيتنا وقيمنا</h2>
        <p>أن نكون الوجهة الأولى والموثوقة في طب وتجميل الأسنان من خلال الجمع بين أحدث التقنيات الرقمية واللمسة الطبية الحانية.</p>
        <h2>إحصائيات الإنجاز</h2>
        <p>أكثر من 15 سنة خبرة | أكثر من 25,000 ابتسامة ناجحة | 99% نسبة رضا المرضى | 100% تعقيم مشدد</p>
      </section>
    `
  },
  {
    path: '/services',
    aliases: ['services.html', 'service.html'],
    outDir: path.resolve(distDir, 'services'),
    title: 'خدماتنا | علاجات أسنان شاملة ومتطورة | بريستيج سمايل',
    description: 'استكشف باقة خدماتنا المتكاملة: تبييض الأسنان، زراعة الأسنان الفورية، تقويم الأسنان، علاج الجذور، طب أسنان الأطفال وجراحة الفم والفكين.',
    h1: 'خدمات سنية متطورة مصممة لصحة وجمال ابتسامتك',
    content: `
      <section>
        <h1>خدمات طب وجراحة الأسنان في بريستيج سمايل</h1>
        <p>نقدم باقة شاملة من الخدمات العلاجية والتجميلية بأعلى معايير الدقة والأمان.</p>
        <h2>قائمة الخدمات المتوفرة</h2>
        <ul>
          <li>تبييض الأسنان بالليزر - تفتيح حتى 8 درجات في جلسة واحدة</li>
          <li>زراعة الأسنان الرقمية - غرسات تيتانيوم معتمدة</li>
          <li>تقويم الأسنان الشفاف - قوالب غير مرئية وتصحيح اصطفاف الأسنان</li>
          <li>تنظيف وتلميع الأسنان وعلاج أمراض اللثة</li>
          <li>ابتسامة هوليوود وقشور الفينير الخزفية E-max</li>
          <li>علاج العصب والجذور بالمجهر السني في جلسة واحدة</li>
        </ul>
      </section>
    `
  },
  {
    path: '/appointment',
    aliases: ['appointment.html', 'booking.html'],
    outDir: path.resolve(distDir, 'appointment'),
    title: 'حجز موعد | طلب استشارة أو فحص أسنان | بريستيج سمايل',
    description: 'احجز موعدك الآن في بريستيج سمايل لطب الأسنان بكل سهولة وسرعة. اختر الخدمة والتوقيت المفضل وسيتم تأكيد حجزك عبر الواتساب.',
    h1: 'احجز موعدك بسهولة في بريستيج سمايل',
    content: `
      <section>
        <h1>حجز موعد إلكتروني - بريستيج سمايل لطب الأسنان</h1>
        <p>املأ نموذج طلب الموعد لتحديد الخدمة المطلوبة والوقت الأنسب لك، وسيتواصل معك منسق المواعيد عبر الواتساب فوراً.</p>
        <p>هاتف العيادة: +966 11 000 0000 | واتساب: +966 50 000 0000 | خدمة طوارئ 24/7</p>
      </section>
    `
  },
  {
    path: '/contact',
    aliases: ['contact.html'],
    outDir: path.resolve(distDir, 'contact'),
    title: 'اتصل بنا | موقع العيادة وأرقام التواصل | بريستيج سمايل',
    description: 'تواصل مع بريستيج سمايل لطب الأسنان. تجد هنا العنوان الدقيق، أرقام الهاتف والواتساب، ساعات العمل، وخريطة الوصول المباشرة.',
    h1: 'تواصل مع بريستيج سمايل لطب الأسنان',
    content: `
      <section>
        <h1>اتصل ببريستيج سمايل لطب الأسنان</h1>
        <p>العنوان: شارع المنطقة الطبية، مبنى 124، جناح 400، الرياض، المملكة العربية السعودية</p>
        <p>الهاتف: +966 11 000 0000 | الواتساب: +966 50 000 0000</p>
        <p>البريد الإلكتروني: info@prestigesmile.com</p>
        <p>ساعات العمل: السبت إلى الخميس: 9:00 ص – 9:00 م | الجمعة: 2:00 م – 9:00 م</p>
      </section>
    `
  },
  {
    path: '/privacy',
    aliases: ['privacy.html'],
    outDir: path.resolve(distDir, 'privacy'),
    title: 'سياسة الخصوصية وحماية بيانات المرضى | بريستيج سمايل',
    description: 'سياسة الخصوصية وحماية بيانات الزوار والمرضى في بريستيج سمايل لطب الأسنان وفق أعلى المعايير القانونية والأخلاقية.',
    h1: 'سياسة الخصوصية وحماية بيانات المرضى',
    content: `<section><h1>سياسة الخصوصية في بريستيج سمايل لطب الأسنان</h1></section>`
  },
  {
    path: '/terms',
    aliases: ['terms.html'],
    outDir: path.resolve(distDir, 'terms'),
    title: 'الشروط والأحكام وسياسة المواعيد | بريستيج سمايل',
    description: 'الشروط والأحكام الخاصة بزيارة موقع بريستيج سمايل لطب الأسنان وحجز المواعيد والخدمات المقدمة.',
    h1: 'الشروط والأحكام وسياسة المواعيد',
    content: `<section><h1>الشروط والأحكام - بريستيج سمايل لطب الأسنان</h1></section>`
  },
  {
    path: '/cookies',
    aliases: ['cookies.html'],
    outDir: path.resolve(distDir, 'cookies'),
    title: 'سياسة ملفات تعريف الارتباط | بريستيج سمايل',
    description: 'معلومات حول استخدام ملفات تعريف الارتباط في موقع بريستيج سمايل لطب الأسنان وكيفية إدارتها.',
    h1: 'سياسة ملفات تعريف الارتباط',
    content: `<section><h1>سياسة ملفات تعريف الارتباط (الكوكيز)</h1></section>`
  }
];

function prerender() {
  const templatePath = path.resolve(distDir, 'index.html');
  if (!fs.existsSync(templatePath)) {
    console.error('Error: dist/index.html not found! Run vite build first.');
    process.exit(1);
  }

  const baseHtml = fs.readFileSync(templatePath, 'utf-8');
  console.log(`Starting Enhanced Prerendering for ${routes.length} canonical routes and direct HTML files...`);

  for (const r of routes) {
    let html = baseHtml;

    // Replace Title
    html = html.replace(/<title>.*?<\/title>/i, `<title>${r.title}</title>`);

    // Replace or Insert Meta Description
    if (html.includes('<meta name="description"')) {
      html = html.replace(/<meta name="description"[^>]*>/i, `<meta name="description" content="${r.description}">`);
    } else {
      html = html.replace('</head>', `  <meta name="description" content="${r.description}">\n</head>`);
    }

    // Add Canonical link
    const canonicalUrl = `https://prestigesmile.com${r.path === '/' ? '' : r.path}`;
    const canonicalTag = `  <link rel="canonical" href="${canonicalUrl}">`;
    html = html.replace('</head>', `${canonicalTag}\n</head>`);

    // Add Open Graph Meta
    const ogTags = `
  <meta property="og:title" content="${r.title}">
  <meta property="og:description" content="${r.description}">
  <meta property="og:url" content="${canonicalUrl}">
  <meta property="og:type" content="website">
  <meta property="og:image" content="https://prestigesmile.com/images/gen_dentist-examining-patients-teeth-close-up_1.jpg">
  <meta property="og:site_name" content="بريستيج سمايل | Prestige Smile">
  <meta property="og:locale" content="ar_SA">
  <meta property="og:locale:alternate" content="en_US">
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:title" content="${r.title}">
  <meta name="twitter:description" content="${r.description}">
  <meta name="twitter:image" content="https://prestigesmile.com/images/gen_dentist-examining-patients-teeth-close-up_1.jpg">
`;
    html = html.replace('</head>', `${ogTags}\n</head>`);

    // Add Schema JSON-LD
    const schemaData = [
      {
        '@context': 'https://schema.org',
        '@type': 'Dentist',
        '@id': 'https://prestigesmile.com/#clinic',
        'name': 'بريستيج سمايل لطب الأسنان',
        'alternateName': 'Prestige Smile Dental Clinic',
        'url': 'https://prestigesmile.com',
        'logo': 'https://prestigesmile.com/images/favicon.svg',
        'image': 'https://prestigesmile.com/images/gen_dentist-examining-patients-teeth-close-up_1.jpg',
        'description': r.description,
        'telephone': '+966110000000',
        'priceRange': '$$',
        'address': {
          '@type': 'PostalAddress',
          'streetAddress': 'شارع المنطقة الطبية، مبنى 124',
          'addressLocality': 'الرياض',
          'postalCode': '12211',
          'addressCountry': 'SA'
        },
        'geo': {
          '@type': 'GeoCoordinates',
          'latitude': 24.7136,
          'longitude': 46.6753
        }
      },
      {
        '@context': 'https://schema.org',
        '@type': 'WebSite',
        '@id': 'https://prestigesmile.com/#website',
        'url': 'https://prestigesmile.com',
        'name': 'بريستيج سمايل | Prestige Smile',
        'inLanguage': ['ar', 'en']
      }
    ];

    const jsonLdTag = `  <script type="application/ld+json">${JSON.stringify(schemaData)}</script>\n`;
    html = html.replace('</head>', `${jsonLdTag}</head>`);

    // Inject Crawlable Semantic Content into <div id="app">
    const crawlableContainer = `<div id="app"><div class="seo-crawler-content" style="opacity:1;">${r.content}</div></div>`;
    html = html.replace('<div id="app"></div>', crawlableContainer);

    // Write to folder/index.html (for directory routing)
    if (!fs.existsSync(r.outDir)) {
      fs.mkdirSync(r.outDir, { recursive: true });
    }
    const targetFolderFile = path.resolve(r.outDir, 'index.html');
    fs.writeFileSync(targetFolderFile, html, 'utf-8');
    console.log(`[PRERENDER] Generated ${path.relative(rootDir, targetFolderFile)}`);

    // ALSO Write direct .html files in dist (e.g. dist/about.html, dist/services.html)
    if (r.aliases && r.aliases.length > 0) {
      for (const alias of r.aliases) {
        if (alias !== 'index.html') {
          const aliasFile = path.resolve(distDir, alias);
          fs.writeFileSync(aliasFile, html, 'utf-8');
          console.log(`[PRERENDER] Also Generated direct file: ${alias}`);
        }
      }
    }
  }

  // Also Generate 404.html for GitHub Pages SPA routing fallback
  const indexHtmlPath = path.resolve(distDir, 'index.html');
  const notFoundPath = path.resolve(distDir, '404.html');
  if (fs.existsSync(indexHtmlPath)) {
    fs.copyFileSync(indexHtmlPath, notFoundPath);
    console.log('[PRERENDER] Generated 404.html for GitHub Pages fallback.');
  }

  console.log('Enhanced Prerendering Complete! All directory routes AND direct .html files generated.');
}

prerender();
