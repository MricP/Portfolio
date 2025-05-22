<script setup lang="ts">
import ProjectContainer from '../components/ProjectContainer.vue';
import Experience from '../components/Experience.vue';
import TechnologieCarousel from '../components/TechnologieCarousel.vue';
import airconcess from '../assets/images/project/airconcess.png'
import tvshelf from '../assets/images/project/tvshelf.png'
import finanzen from '../assets/images/project/finanzen.png'
import flightcheck from '../assets/images/project/flightcheck.png'


const tabAirconcess : string[] = ["React", "PHP"]
const tabTvshelf : string[] = ["Kotlin"]
const tabFinanzen : string[] = ["Symfony"]
const tabFlightCheck : string[] = ["Java"]


</script>

<template>
    <main class="w-100% mt-40">
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
                    <ProjectContainer 
                        title="AirConcess" 
                        subtitle="Concessionaire d'aéronefs en ligne." 
                        :image="airconcess" 
                        :technos="tabAirconcess" 
                        brief="Airconcess est une plateforme web dédiée à la concession d’aéronefs, permettant aux utilisateurs de consulter un catalogue d’appareils et de gérer leur profil. Le site vise à moderniser la gestion en ligne des locations aériennes grâce à une interface simple et responsive, pensée pour les passionnés comme pour les professionnels." 
                        contribution="J’ai été responsable de la création de la page catalogue, qui présente tous les aéronefs disponibles avec filtres dynamiques, et de la page profil utilisateur avec édition des informations. Mon travail a aussi consisté à assurer une bonne ergonomie générale et une cohérence visuelle sur ces sections." 
                        probleme="Le premier défi a été de structurer efficacement le catalogue, notamment en matière de performance et de tri. J’ai aussi rencontré des difficultés liées à l’hébergement et à la mise en ligne du projet, notamment sur le rendu responsive.">
                    </ProjectContainer>
                    <ProjectContainer 
                        title="TVShelf" 
                        subtitle="Application mobile permettant de suivre les séries que vous avec regardé"  
                        :image="tvshelf" :technos="tabTvshelf" 
                        brief="TVShelf est une application mobile développée en Kotlin qui permet à l’utilisateur de suivre les séries qu’il regarde. Elle propose un moteur de recherche, des suggestions personnalisées, et une organisation visuelle intuitive des séries vues, à voir ou en cours." 
                        contribution="Je me suis occupé de la page d’accueil, avec un affichage clair des dernières séries vues, et de la page de recherche connectée à une API externe. Mon objectif était de rendre l’expérience utilisateur fluide tout en respectant les contraintes d’une application mobile." 
                        probleme="La connexion à Firebase pour l’authentification et le stockage des données a posé plusieurs problèmes. J’ai également rencontré des complications avec l’intégration de l’API TV (format des données, gestion des images) et leur mise en cache." 
                        class="mt-50">
                    </ProjectContainer>
                </div>
                <div class="flex flex-row gap-25 ">
                    <ProjectContainer 
                        title="Finanzen" 
                        subtitle="Application web permettant de gérer vos finances de façon zen" 
                        :image="finanzen" :technos="tabFinanzen" 
                        brief="Finanzen est un site web de suivi budgétaire orienté bien-être. L’objectif est de permettre à l’utilisateur de gérer ses finances sans stress grâce à une interface épurée, des graphiques simples et un système de visualisation par catégories." 
                        contribution="J’ai développé la page statistiques qui regroupe toutes les données financières de l’utilisateur sous forme de graphiques clairs. Elle permet d’avoir une vue synthétique des revenus, dépenses et objectifs personnels sur une période définie." 
                        probleme="L’intégration de Symfony avec Twig a représenté un vrai défi, notamment en ce qui concerne la liaison entre la logique métier et l’affichage. Il m’a fallu du temps pour bien comprendre la structure MVC imposée par le framework.">
                    </ProjectContainer>
                    <ProjectContainer 
                        title="FlightCheck"
                        subtitle="Logiciel permettant de gérer et réguler le trafic aérien" 
                        :image="flightcheck" :technos="tabFlightCheck" 
                        brief="FlightCheck est une application Java conçue pour la régulation du trafic aérien. Elle permet de visualiser en temps réel les vols, détecter les conflits potentiels et proposer des solutions via des algorithmes de graphes. Elle s’adresse à des cas d’usage semi-réels ou pédagogiques." 
                        contribution="Ma contribution principale s’est concentrée sur la partie interface graphique et l’intégration des fonctionnalités de gestion des vols. J’ai également travaillé sur la modélisation de certaines données de trafic, bien que mes souvenirs soient partiels."
                        probleme="L’un des problèmes majeurs a été de comprendre et d’implémenter des algorithmes de graphes complexes, notamment pour la détection de conflits. La mise en place d’un système de coloration pour la résolution visuelle des conflits s’est aussi révélée délicate." 
                        class="mt-50">
                    </ProjectContainer>
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