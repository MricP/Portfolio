<script setup lang="ts">
import { useRoute } from 'vue-router'

const route = useRoute()
const name = route.params.name
const id = route.query.id as string
const video = route.query.video as string


import BackButton from '../components/ui/BackButton.vue'
</script>

<template>
  <main class="flex flex-col align-center text-center gap-8">
    <BackButton />
    <div class="mt-25 flex flex-col align-center justify-center text-center gap-8">
     
        <div>
            <h1 class="inline-block mx-auto text-4xl font-bold bg-gradient-to-r from-[#A9A9FF] to-[#D9D9D9] bg-clip-text text-transparent">{{ name }}</h1>
        </div>
        <div class="bg-[#ffffff] sm:bg-[#ABABFE] w-[60%] h-[75vh] rounded-xl mx-auto shadow-inner mb-[30px]">
            <video  v-if="video !== undefined"   autoplay muted loop  playsinline  class="w-full h-full  rounded-xl">
                <source :src="video" type="video/mp4" />
                {{ $t('project_view.video_unsupported') }}
            </video>
        </div>

        <div class="flex flex-col justify-center md:flex-row md:justify-between w-3/5 mx-auto mb-8 gap-4">
            <h2 class="text-2xl font-semibold text-left md:w-1/3 w-full">{{ $t('project_view.brief') }}</h2>
            <p class="text-left md:w-2/3 w-full max-w-xl">{{ $t(`projects.${id}.brief`) }}</p>
        </div>

        <div class="flex flex-col justify-center md:flex-row md:justify-between w-3/5 mx-auto mb-8 gap-4">
            <h2 class="text-2xl font-semibold text-left md:w-1/3 w-full">{{ $t('project_view.contribution') }}</h2>
            <p class="text-left md:w-2/3 w-full max-w-xl">{{ $t(`projects.${id}.contrib`) }}</p>
        </div>

        <div class="flex flex-col justify-center md:flex-row md:justify-between w-3/5 mx-auto mb-8 gap-4">
            <h2 class="text-2xl font-semibold text-left md:w-1/3 w-full">{{ $t('project_view.problems') }}</h2>
            <p class="text-left md:w-2/3 w-full max-w-xl">{{ $t(`projects.${id}.prob`) }}</p>
        </div>
</div>
    
  </main>
</template>