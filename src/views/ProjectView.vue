<script setup lang="ts">
import { useRoute } from 'vue-router'

const route = useRoute()
const name = route.params.name
</script>

<template>
  <main class="h-screen flex flex-col items-center justify-center text-center gap-8 ">
    <div class="absolute top-25 left-100">
        <p>A</p>
    </div>
    <div>
        <h1 class="inline-block mx-auto text-4xl font-bold bg-gradient-to-r from-[#A9A9FF] to-[#D9D9D9] bg-clip-text text-transparent">{{ name }}</h1>
        <div>
            <img src="" alt="Image du projet" class="mx-auto" />
        </div>
    </div>

    <div>
      <!-- vidéo -->
    </div>

    <div>
      <h2 class="text-2xl font-semibold">BRIEF</h2>
      <p class="max-w-xl ">...</p>
    </div>

    <div>
      <h2 class="text-2xl font-semibold">MA CONTRIBUTION</h2>
      <p class="max-w-xl ">...</p>
    </div>

    <div>
      <h2 class="text-2xl font-semibold">PROBLEMES</h2>
      <p class="max-w-xl"></p>
    </div>
  </main>
</template>