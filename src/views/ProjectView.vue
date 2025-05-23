<script setup lang="ts">
import { useRoute } from 'vue-router'

const route = useRoute()
const name = route.params.name
const brief = route.query.brief
const contribution = route.query.contribution
const probleme = route.query.probleme
const video = route.query.video as string





</script>

<template>
  <main class="flex flex-col align-center text-center gap-8">
    <RouterLink to="/">
        <div class="fixed top-25 left-25 z-50 border-3 border-[#d9d9d9] rounded-3xl md:top-5 mx-auto" >
            <img class="h-10 w-10 " src="../assets/images/arrowLeft.svg" alt="">
        </div>
    </RouterLink>
    <div class="mt-25 flex flex-col align-center justify-center text-center gap-8">
     
        <div>
            <h1 class="inline-block mx-auto text-4xl font-bold bg-gradient-to-r from-[#A9A9FF] to-[#D9D9D9] bg-clip-text text-transparent">{{ name }}</h1>
        </div>
        <div class="bg-[#ABABFE] w-[60%] h-[75vh] rounded-xl mx-auto shadow-inner mb-[30px]">
        <video  v-if="video !== undefined"   autoplay muted loop  playsinline  class="w-full h-full  rounded-xl">
            <source :src="video" type="video/mp4" />
            Your browser does not support the video tag.
        </video>
        </div>

        <div class="flex flex-col justify-center md:flex-row md:justify-between w-3/5 mx-auto mb-8 gap-4">
            <h2 class="text-2xl font-semibold text-left md:w-1/3 w-full">BRIEF</h2>
            <p class="text-left md:w-2/3 w-full max-w-xl">{{ brief }}</p>
        </div>

        <div class="flex flex-col justify-center md:flex-row md:justify-between w-3/5 mx-auto mb-8 gap-4">
            <h2 class="text-2xl font-semibold text-left md:w-1/3 w-full">MA CONTRIBUTION</h2>
            <p class="text-left md:w-2/3 w-full max-w-xl">{{ contribution }}</p>
        </div>

        <div class="flex flex-col justify-center md:flex-row md:justify-between w-3/5 mx-auto mb-8 gap-4">
            <h2 class="text-2xl font-semibold text-left md:w-1/3 w-full">PROBLEMES</h2>
            <p class="text-left md:w-2/3 w-full max-w-xl">{{ probleme }}</p>
        </div>
</div>
    
  </main>
</template>