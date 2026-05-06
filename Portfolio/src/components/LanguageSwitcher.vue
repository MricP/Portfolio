<script setup lang="ts">
import { useI18n } from 'vue-i18n'

const { locale } = useI18n()

const toggleLanguage = () => {
  locale.value = locale.value === 'fr' ? 'en' : 'fr'
}
</script>

<template>
  <button 
    @click="toggleLanguage" 
    class="fixed top-5 right-5 z-50 flex items-center justify-center w-12 h-12 bg-white/80 backdrop-blur-md shadow-md border border-[#E0E0E0] rounded-full hover:bg-gray-100 hover:shadow-lg transition-all duration-300 font-bold text-[#6B6BFF] cursor-pointer"
  >
    {{ locale.toUpperCase() }}
  </button>
</template>
