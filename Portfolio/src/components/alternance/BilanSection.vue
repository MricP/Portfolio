<script setup lang="ts">
defineProps<{
  title: string
  description: string
}>()
</script>

<template>
  <div class="mt-20">
    <h3 class="text-3xl font-bold mb-8 flex items-center gap-4 text-black">
      <div class="bg-gradient-to-br from-[#A9A9FF] to-[#D9D9D9] w-12 h-12 rounded-xl flex items-center justify-center shadow-lg shadow-[#A9A9FF]/30">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>
      </div>
      {{ title }}
    </h3>
    <div class="bg-[#d9d9d930] backdrop-blur-md border border-[#d9d9d9] rounded-3xl p-8 md:p-10 shadow-md">
      <p class="text-gray-700 text-lg leading-relaxed font-light italic border-l-4 border-[#A9A9FF] pl-6">
        {{ description }}
      </p>
    </div>
  </div>
</template>
