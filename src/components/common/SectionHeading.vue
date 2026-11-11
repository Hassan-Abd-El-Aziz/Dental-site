<script setup>
defineProps({
  tag: {
    type: String,
    default: ''
  },
  title: {
    type: String,
    required: true
  },
  subtitle: {
    type: String,
    default: ''
  },
  align: {
    type: String,
    default: 'center' // 'center' or 'start'
  },
  dark: {
    type: Boolean,
    default: false
  }
});
</script>

<template>
  <div 
    class="max-w-3xl mb-12 sm:mb-16"
    :class="[
      align === 'center' ? 'mx-auto text-center' : 'text-start',
      dark ? 'text-white' : 'text-[#011f23]'
    ]"
  >
    <!-- Tag / Pill -->
    <div v-if="tag" class="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-4 border transition-colors"
      :class="dark 
        ? 'bg-teal-950/60 border-teal-500/30 text-teal-300' 
        : 'bg-teal-50 border-teal-200 text-[#1b8591]'"
    >
      <span class="w-1.5 h-1.5 rounded-full bg-[#24a3b1]"></span>
      {{ tag }}
    </div>

    <!-- Title -->
    <h2 
      class="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight leading-tight mb-4"
      :class="dark ? 'text-white' : 'text-[#011f23]'"
    >
      {{ title }}
    </h2>

    <!-- Subtitle / Paragraph -->
    <p 
      v-if="subtitle"
      class="text-base sm:text-lg leading-relaxed font-normal"
      :class="dark ? 'text-teal-100/80' : 'text-gray-600'"
    >
      {{ subtitle }}
    </p>
  </div>
</template>
