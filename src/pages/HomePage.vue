<script setup>
import { useSeo } from '../composables/useSeo.js';
import HeroSection from '../components/home/HeroSection.vue';
import InfoCardsSection from '../components/home/InfoCardsSection.vue';
import StorySection from '../components/home/StorySection.vue';
import ServicesSection from '../components/home/ServicesSection.vue';
import WhyChooseUsSection from '../components/home/WhyChooseUsSection.vue';
import TestimonialsSection from '../components/home/TestimonialsSection.vue';
import FaqSection from '../components/home/FaqSection.vue';
import BookingCtaSection from '../components/home/BookingCtaSection.vue';

// Initialize SEO for Home
useSeo('home');
</script>

<template>
  <div class="space-y-0">
    <HeroSection />
    <InfoCardsSection />
    <StorySection />
    <ServicesSection />
    <WhyChooseUsSection />
    <TestimonialsSection />
    <FaqSection />
    <BookingCtaSection />
  </div>
</template>
