<script setup>
import AppHeader from '../components/layout/AppHeader.vue';
import AppFooter from '../components/layout/AppFooter.vue';
import WhatsAppButton from '../components/common/WhatsAppButton.vue';
import BackToTop from '../components/common/BackToTop.vue';
</script>

<template>
  <div class="min-h-screen flex flex-col bg-[#fafafa]">
    <!-- Top Header -->
    <AppHeader />

    <!-- Main Dynamic Content -->
    <main class="flex-1 pt-20 sm:pt-24">
      <slot />
    </main>

    <!-- Global Footer -->
    <AppFooter />

    <!-- Persistent Utilities -->
    <WhatsAppButton :floating="true" />
    <BackToTop />
  </div>
</template>
