<script setup lang="ts">
import ProjectContainer from '../components/ProjectContainer.vue';


</script>

<template>
    <main>
        <div class="flex justify-center gap-15 lg:m-35  m-35 sm:m-5 sm:mt-30 flex-col lg:flex-row ">
            <div class="lg:w-125 md:w-125 h-90 bg-[#D9D9D9] inset-shadow-sm inset-shadow-[#00000025]"></div>
            <div class="flex flex-col space-y-20 gap-5 items-left w-125 h-90">
                <div class="flex flex-col space-y-5 items-left ">
                    <h1 class="lg:md:text-5xl text-3xl bg-gradient-to-r from-[#A9A9FF] to-[#D9D9D9] bg-clip-text text-transparent shadow-inner-text">Emric Pirrera</h1>
                    <h2 class="lg:md:text-2xl text-xl text-transparent bg-gradient-to-r from-[#D9D9D9] to-[#A9A9FF] bg-clip-text [filter:drop-shadow(1px_1px_1px_rgba(0,0,0,0.3))]">Software Developer</h2>

                    <p class="sm:text-lg">Tout ce que vous pouvez imaginer est probablement faisable, il vous suffit de l'imaginer et d'y travailler. (Larry Page)</p>

                </div>
                <div class="flex flex-col space-y-5 items-left">
                    <button class="w-30 h-10 border-solid border-2 border-black hover:bg-[#E9E9E9]">Contacter</button>
                    <a href="#" class="relative inline-block text-black transition-colors duration-300 hover:text-black hover:underline underline-offset-4">En savoir plus</a>
                </div>
            </div>
        </div>
        <!-- Project section -->

        <h3>Projets</h3>
        <ProjectContainer></ProjectContainer>
    </main>
</template>
<style scoped>
    @import "tailwindcss";

    .inner-text-shadow {
        text-shadow: inset 1px 1px 2px rgba(1, 1, 1, 0.5);
  }
</style>