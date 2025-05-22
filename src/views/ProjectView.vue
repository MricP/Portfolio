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
    <div class="mt-25 flex flex-col align-center justify-center text-center gap-8">
        <RouterLink to="/">
            <div class="absolute top-25 left-100 border-3 border-[#d9d9d9] rounded-3xl " >
                <img class="h-10 w-10 " src="../assets/images/arrowLeft.svg" alt="">
            </div>
        </RouterLink>
        <div>
            <h1 class="inline-block mx-auto text-4xl font-bold bg-gradient-to-r from-[#A9A9FF] to-[#D9D9D9] bg-clip-text text-transparent">{{ name }}</h1>

        </div>
        <div class="bg-[#ABABFE] w-[60%] h-[75vh] rounded-xl mx-auto shadow-inner mb-[30px]">
        <video  v-if="video !== undefined"   autoplay muted loop  playsinline  class="w-full h-full  rounded-xl">
            <source :src="video" type="video/mp4" />
            Your browser does not support the video tag.
        </video>
        </div>

        <div class="flex justify-between w-60/100 mx-auto mb-30">
            <h2 class="text-2xl font-semibold text-left w-1/3">BRIEF</h2>
            <p class="text-left w-2/3 max-w-xl">{{ brief }}</p>
        </div>

        <div class="flex justify-between w-60/100 mx-auto  mb-30">
            <h2 class="text-2xl font-semibold text-left w-1/3">MA CONTRIBUTION</h2>
            <p class="text-left w-2/3 max-w-xl">{{ contribution }}.</p>
        </div>

        <div class="flex justify-between w-60/100 mx-auto  mb-30">
            <h2 class="text-2xl font-semibold text-left w-1/3">PROBLEMES</h2>
            <p class="text-left w-2/3 max-w-xl">{{ probleme }}</p>
        </div>
    </div>
    
  </main>
</template>