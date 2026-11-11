export const contactConfig = {
  // Clinic contact phone numbers (Placeholders marked clearly for production update)
  phone: '+201009039628', // [PLACEHOLDER - Update with verified clinic telephone]
  phoneFormatted: '+201009039628',
  emergencyPhone: '+201009039628', // [PLACEHOLDER - 24/7 Dental Emergency hotline]

  // WhatsApp booking number (Without + or spaces for wa.me API)
  whatsappNumber: '201009039628', // [PLACEHOLDER - Update with clinic WhatsApp business line]
  whatsappDisplay: '+201009039628',
  
  // Official Clinic Email
  email: 'info@prestigesmile.com', // [PLACEHOLDER - Update with verified email]
  supportEmail: 'care@prestigesmile.com',

  // Clinic Physical Addresses (Bilingual)
  address: {
    en: '124 Medical District Blvd, Suite 400, Riyadh, Saudi Arabia', // [PLACEHOLDER - Update with verified physical clinic location]
    ar: 'شارع المنطقة الطبية، مبنى 124، جناح 400، الرياض، المملكة العربية السعودية'
  },
  city: {
    en: 'Riyadh',
    ar: 'الرياض'
  },
  country: {
    en: 'Saudi Arabia',
    ar: 'المملكة العربية السعودية'
  },
  postalCode: '12211',

  // Coordinates for Local SEO & Schema.org LocalBusiness
  geo: {
    latitude: 24.7136,
    longitude: 46.6753
  },

  // Google Maps link
  mapsUrl: 'https://maps.google.com/?q=Prestige+Smile+Dental+Clinic',
  mapsEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d115984.72!2d46.6753!3d24.7136!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjTCsDQyJzQ5LjAiTiA0NsKwNDAnMzEuMSJF!5e0!3m2!1sen!2ssa!4v1600000000000!5m2!1sen!2ssa',

  // Working Hours (Bilingual)
  workingHours: {
    en: {
      weekdays: 'Saturday – Thursday: 9:00 AM – 9:00 PM',
      friday: 'Friday: 2:00 PM – 9:00 PM',
      emergency: '24/7 On-Call Emergency Service'
    },
    ar: {
      weekdays: 'السبت – الخميس: 9:00 صباحاً – 9:00 مساءً',
      friday: 'الجمعة: 2:00 ظهراً – 9:00 مساءً',
      emergency: 'خدمة طوارئ الأسنان متوفرة على مدار الساعة'
    }
  },

  // Structured Hours for Schema.org JSON-LD
  openingHoursSpecification: [
    {
      dayOfWeek: ['Saturday', 'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday'],
      opens: '09:00',
      closes: '21:00'
    },
    {
      dayOfWeek: ['Friday'],
      opens: '14:00',
      closes: '21:00'
    }
  ],

  // Direct Booking Flow / Calendar URL
  bookingUrl: '/appointment'
};
