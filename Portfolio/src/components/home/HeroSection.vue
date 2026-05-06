<script setup lang="ts">
import photo from '../../assets/images/photo.jpg'
</script>

<template>
  <div class="flex flex-col sm:flex-row items-center justify-center sm:items-start ml-4 sm:ml-5 sm:mr-5 md:ml-6 gap-4">
    <div class="w-80/100 sm:w-1/2 lg:w-[500px] h-90 bg-[#D9D9D9] shadow-inner bg-center bg-cover" :style="`background-image: url('${photo}')`"></div>        
    <div class="flex flex-col space-y-5 sm:space-y-20 gap-5 items-center sm:items-start text-center sm:text-left lg:md:w-100% w-90">
      <div class="flex flex-col space-y-5 items-center sm:items-start text-center sm:text-left lg:md:w-100% w-90">
        <h1 class="lg:md:text-5xl text-3xl bg-gradient-to-r from-[#A9A9FF] to-[#D9D9D9] bg-clip-text text-transparent shadow-inner-text">Emric Pirrera</h1>
        <h2 class="lg:md:text-2xl text-left text-xl text-transparent bg-gradient-to-r from-[#D9D9D9] to-[#A9A9FF] bg-clip-text [filter:drop-shadow(1px_1px_1px_rgba(0,0,0,0.3))]">{{ $t('home.subtitle') }}</h2>
        <p class="lg:md:text-l lg:md:w-100% text-sm w-90 text-left">{{ $t('home.quote') }}</p>
      </div>

      <div class="flex flex-col justify-center space-y-5 items-center sm:items-start lg:md:w-100% w-90">
        <a href="https://mail.google.com/mail/?view=cm&fs=1&to=pemric42@gmail.com" target="_blank" rel="noopener noreferrer">
          <button type="button" class="w-30 h-10 border-solid border-2 border-black hover:bg-[#E9E9E9]">{{ $t('home.contact') }}</button>
        </a>
        <a href="/pdfs/CV_SoftwareEngineer_Emric_Pirrera.pdf" download="Emric_Pirrera_CV.pdf" class="relative inline-block text-black transition-colors duration-300 hover:text-black hover:underline underline-offset-4">{{ $t('home.cv') }}</a>
      </div>
    </div>
  </div>
</template>

<style scoped>
.shadow-inner-text {
  text-shadow: inset 1px 1px 2px rgba(1, 1, 1, 0.5);
}
</style>
