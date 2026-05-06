<script setup lang="ts">
defineProps<{
  title: string
  subtitle: string
}>()
</script>

<template>
  <div class="text-center mb-16">
    <h1 class="text-5xl font-extrabold mb-4 bg-gradient-to-r from-[#A9A9FF] to-[#D9D9D9] bg-clip-text text-transparent shadow-inner-text drop-shadow-sm">
      {{ title }}
    </h1>
    <p class="text-xl text-gray-600 font-light">{{ subtitle }}</p>
  </div>
</template>

<style scoped>
.shadow-inner-text {
    text-shadow: inset 1px 1px 2px rgba(1, 1, 1, 0.5);
}
</style>
