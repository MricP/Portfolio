<script setup lang="ts">
import HeroSection from '../components/home/HeroSection.vue'
import ProjectsSection from '../components/home/ProjectsSection.vue'
import TechnologieCarousel from '../components/TechnologieCarousel.vue';
import Experience from '../components/Experience.vue';
</script>

<template>
  <main class="w-100% sm:min-w-[430px] font-sans selection:bg-[#A9A9FF] selection:text-white">
    
    <div class="mt-40 mb-30" id="intro">
      <HeroSection />
    </div>

    <div class="sm:mb-30 w-full">
      <ProjectsSection />
    </div>
    
    <div class="mb-30 lg:mt-30 w-full" id="experiences">
        <h3 class="mt-15 ml-5 mb-10 sm:mt-50 sm:ml-50 sm:mb-10 font-bold text-xl text-left w-full">{{ $t('home.experiences_title') }}</h3>
        <div class="flex flex-col justify-center items-center w-full">
            <Experience></Experience>
        </div>
    </div>

    <div class="mb-5 lg:mb-10 mt-10 w-full" id="technologies">
        <h3 class="mt-15 ml-5 mb-10 sm:mt-20 sm:ml-50 sm:mb-10 font-bold text-xl text-left w-full">{{ $t('home.technologies_title') }}</h3>
        <div class="flex flex-col justify-center items-center w-full">
            <TechnologieCarousel></TechnologieCarousel>
        </div>
    </div>
  </main>
</template>

<style scoped>
</style>