import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    alias: ['/index.html', '/index'],
    name: 'Home',
    component: () => import('../pages/HomePage.vue'),
    meta: { pageKey: 'home' }
  },
  {
    path: '/about',
    alias: ['/about.html', '/about/index.html', '/about/'],
    name: 'About',
    component: () => import('../pages/AboutPage.vue'),
    meta: { pageKey: 'about' }
  },
  {
    path: '/services',
    alias: [
      '/services.html', 
      '/services/index.html', 
      '/services/', 
      '/service', 
      '/service.html', 
      '/service/index.html', 
      '/service/'
    ],
    name: 'Services',
    component: () => import('../pages/ServicesPage.vue'),
    meta: { pageKey: 'services' }
  },
  {
    path: '/doctors',
    alias: ['/doctors.html', '/doctors/index.html', '/doctors/', '/team', '/team.html', '/team/index.html'],
    name: 'Doctors',
    component: () => import('../pages/DoctorsPage.vue'),
    meta: { pageKey: 'doctors' }
  },
  {
    path: '/blog',
    alias: ['/blog.html', '/blog/index.html', '/blog/', '/blogs', '/blogs.html'],
    name: 'Blog',
    component: () => import('../pages/BlogPage.vue'),
    meta: { pageKey: 'blog' }
  },
  {
    path: '/contact',
    alias: ['/contact.html', '/contact/index.html', '/contact/'],
    name: 'Contact',
    component: () => import('../pages/ContactPage.vue'),
    meta: { pageKey: 'contact' }
  },
  {
    path: '/appointment',
    alias: [
      '/appointment.html', 
      '/appointment/index.html', 
      '/appointment/', 
      '/booking', 
      '/booking.html', 
      '/booking/index.html'
    ],
    name: 'Appointment',
    component: () => import('../pages/AppointmentPage.vue'),
    meta: { pageKey: 'appointment' }
  },
  {
    path: '/privacy',
    alias: ['/privacy.html', '/privacy/index.html', '/privacy/'],
    name: 'Privacy',
    component: () => import('../pages/PrivacyPolicyPage.vue'),
    meta: { pageKey: 'privacy' }
  },
  {
    path: '/terms',
    alias: ['/terms.html', '/terms/index.html', '/terms/'],
    name: 'Terms',
    component: () => import('../pages/TermsPage.vue'),
    meta: { pageKey: 'terms' }
  },
  {
    path: '/cookies',
    alias: ['/cookies.html', '/cookies/index.html', '/cookies/'],
    name: 'Cookies',
    component: () => import('../pages/CookiesPage.vue'),
    meta: { pageKey: 'cookies' }
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: () => import('../pages/NotFoundPage.vue'),
    meta: { pageKey: 'home' }
  }
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    }
    if (to.hash) {
      return { el: to.hash, behavior: 'smooth' };
    }
    return { top: 0, behavior: 'smooth' };
  }
});

export default router;
