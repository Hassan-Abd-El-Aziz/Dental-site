<script setup>
import { onMounted } from 'vue';
import { useLanguage } from './composables/useLanguage.js';
import MainLayout from './layouts/MainLayout.vue';

const { initLanguage } = useLanguage();

onMounted(() => {
  initLanguage();
});
</script>

<template>
  <MainLayout>
    <router-view v-slot="{ Component }">
      <transition name="page-fade" mode="out-in">
        <component :is="Component" />
      </transition>
    </router-view>
  </MainLayout>
</template>

<style>
.page-fade-enter-active,
.page-fade-leave-active {
  transition: opacity 0.25s ease;
}

.page-fade-enter-from,
.page-fade-leave-to {
  opacity: 0;
}
</style>
