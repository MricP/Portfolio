<script setup lang="ts">
defineProps<{
  logo: string
  name: string
  description: string
  tags: string[]
}>()
</script>

<template>
  <div class="bg-[#d9d9d930] backdrop-blur-md border border-[#d9d9d9] rounded-[2rem] p-8 md:p-12 shadow-lg relative overflow-hidden group">
    <div class="absolute -top-32 -right-32 w-96 h-96 bg-[#A9A9FF]/20 rounded-full blur-[100px] group-hover:bg-[#A9A9FF]/30 transition-all duration-700"></div>
    <div class="absolute -bottom-32 -left-32 w-96 h-96 bg-[#D9D9D9]/40 rounded-full blur-[100px] group-hover:bg-[#D9D9D9]/60 transition-all duration-700"></div>
    
    <div class="flex flex-col md:flex-row items-center gap-10 relative z-10">
      <div class="w-48 h-48 bg-white backdrop-blur-sm rounded-3xl p-6 flex items-center justify-center shrink-0 shadow-md border border-[#d9d9d9] transform transition duration-500 hover:scale-105">
        <img :src="logo" alt="Logo" class="max-w-full max-h-full object-contain drop-shadow-sm" />
      </div>
      <div>
        <h2 class="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-[#A9A9FF] to-gray-500">{{ name }}</h2>
        <p class="text-gray-700 text-lg mb-8 leading-relaxed font-light">
          {{ description }}
        </p>
        <div class="flex flex-wrap gap-4">
          <span v-for="tag in tags" :key="tag" class="px-5 py-2 bg-[#A9A9FF]/10 text-[#6B6BFF] rounded-full border border-[#A9A9FF]/30 font-medium shadow-sm flex items-center gap-2">
            <span class="w-2 h-2 rounded-full bg-[#6B6BFF]"></span> {{ tag }}
          </span>
        </div>
      </div>
    </div>
  </div>
</template>
