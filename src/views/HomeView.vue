<script setup lang="ts">
import ProjectContainer from '../components/ProjectContainer.vue';
import Experience from '../components/Experience.vue';
import TechnologieCarousel from '../components/TechnologieCarousel.vue';
import airconcess from '../assets/images/project/airconcess.png'
import tvshelf from '../assets/images/project/tvshelf.png'
import finanzen from '../assets/images/project/finanzen.png'
// import flightcheck from '../assets/images/project/flightcheck.png'


const tabAirconcess : string[] = ["React", "PHP"]
const tabTvshelf : string[] = ["Kotlin"]
const tabFinanzen : string[] = ["Symfony"]
const tabFlightCheck : string[] = ["Java"]


</script>

<template>
    <main class="w-100% mt-40" id="accueil">
        <div class="flex flex-col md:flex-row justify-center mt-35 ml-4 sm:mt-15 sm:ml-5 sm:mr-5 md:ml-6 gap-4">
            <div class="w-full sm:w-1/2 lg:w-[500px] h-90 bg-[#D9D9D9] shadow-inner"></div>        
                <div class="flex flex-col space-y-20 gap-5 items-left lg:md:w-100% w-90">
                <div class="flex flex-col space-y-5 items-left lg:md:w-100% w-90 ">
                    <h1 class="lg:md:text-5xl text-3xl bg-gradient-to-r from-[#A9A9FF] to-[#D9D9D9] bg-clip-text text-transparent shadow-inner-text">Emric Pirrera</h1>
                    <h2 class="lg:md:text-2xl text-xl text-transparent bg-gradient-to-r from-[#D9D9D9] to-[#A9A9FF] bg-clip-text [filter:drop-shadow(1px_1px_1px_rgba(0,0,0,0.3))]">Software Developer</h2>

                    <p class="lg:md:text-l lg:md:w-100% text-sm w-90">Tout ce que vous pouvez imaginer est probablement faisable, il vous suffit de l'imaginer et d'y travailler. (Larry Page)</p>

                </div>
                <div class="flex flex-col justify-center space-y-5 items-left lg:md:w-100% w-90">
                    <button class="w-30 h-10 border-solid border-2 border-black hover:bg-[#E9E9E9]">Contacter</button>
                    <a href="#" class="relative inline-block text-black transition-colors duration-300 hover:text-black hover:underline underline-offset-4">En savoir plus</a>
                </div>
            </div>
        </div>
        <!-- Project section -->
        <h3 class="mt-50 ml-50 mb-10 font-bold text-xl text-left w-100%" id="projets">PROJETS</h3>
        <div class="flex flex-col justify-center items-center gap-10">
            <div class="flex flex-col ">
                <div class="flex flex-row gap-25 ">
                    <ProjectContainer title="AirConcess" subtitle="Concessionaire d'aéronefs en ligne." :image="airconcess" :technos="tabAirconcess"></ProjectContainer>
                    <ProjectContainer title="TVShelf" subtitle="Application mobile permettant de suivre les séries que vous avec regardé"  :image="tvshelf" :technos="tabTvshelf" class="mt-50"></ProjectContainer>
                </div>
                <div class="flex flex-row gap-25 ">
                    <ProjectContainer title="Finanzen" subtitle="Application web permettant de gérer vos finances de façon zen" :image="finanzen" :technos="tabFinanzen"></ProjectContainer>
                    <ProjectContainer title="FlightCheck" subtitle="Logiciel permettant de gérer et réguler le trafic aérien" image="../assets/project/airconcess.png" :technos="tabFlightCheck" class="mt-50"></ProjectContainer>
                </div>
            </div>
        </div>
        <h3 class="mt-20 ml-50 mb-10 font-bold text-xl text-left w-100%" id="experiences">EXPERIENCES</h3>
        <div class="flex flex-col justify-center items-center">
            <Experience class="mb-10"></Experience>
            <div class="bg-[#D9D9D9] h-1 w-60/100"></div>
        </div>

        <!-- Technoligies part -->
        <h3 class="mt-20 ml-50 mb-10 font-bold text-xl text-left w-100%" id="techno">TECHNOLOGIES</h3>
        <div class="flex flex-col justify-center items-center">
            <TechnologieCarousel></TechnologieCarousel>
        </div>
        
        
    </main>
</template>
<style scoped>
    @import "tailwindcss";

    .inner-text-shadow {
        text-shadow: inset 1px 1px 2px rgba(1, 1, 1, 0.5);
  }
</style>