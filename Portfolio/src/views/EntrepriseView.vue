<script setup lang="ts">

</script>
<template>
    <RouterLink to="/">
        <div class="fixed top-25 left-25 z-50 border-3 border-[#d9d9d9] rounded-3xl hidden sm:block md:top-5 mx-auto" >
            <img class="h-10 w-10 " src="../assets/images/arrowLeft.svg" alt="">
        </div>
    </RouterLink>
        <div class="mt-25 flex flex-col align-center justify-center text-center gap-y-8">
     
            <div>
                <h1 class=" h-15 inline-block mx-auto text-4xl font-bold bg-gradient-to-r from-[#A9A9FF] to-[#D9D9D9] bg-clip-text text-transparent">Diagram Informatique</h1>
            </div>

            <div class="flex flex-col sm:flex-row items-center justify-center gap-y-10 sm:gap-x-20 mx-auto w-full max-w-6xl">
                <img class="w-80/100 sm:w-20/100" src="../assets/images/diagram.png" alt="logo diagram">
                <div class="flex flex-col gap-y-5">
                    <h3 class="font-bold text-xl text-left w-100%">BRIEF</h3>
                    <p class="w-100 text-left">Diagram Informatique est une entreprise spécialisée dans le développement de solutions logicielles sur mesure, qui accompagne ses clients dans la conception, la réalisation et le déploiement d’applications adaptées à leurs besoins métiers.</p>
                </div>
            </div>

            <h3 class="ml-5 mt-20 mb-5 sm:mt-10 sm:ml-50 sm:mb-10 font-bold text-xl text-left w-100%" id="techno">INFORMATIONS GENERALES</h3>
            <div class=" w-80/100 sm:w-50/100 flex flex-col mx-auto gap-y-15 text-xl">
                <div class="flex flex-row justify-between align-center">
                    <p>Stage</p>
                    <p>Développeur logiciel</p>
                </div>
                <div class="flex flex-row justify-between align-center">
                    <p>Durée</p>
                    <p>8 semaines</p>
                </div>
                <div class="flex flex-row justify-between align-center">
                    <p>Langage</p>
                    <p>WLanguage</p>
                </div>
                <div class="flex flex-row justify-between align-center">
                    <p>Technologie</p>
                    <p>WinDev</p>
                </div>
            </div>

            <h3 class=" mt-15 ml-5 mb-5 sm:mt-50 sm:ml-50 sm:mb-10 font-bold text-xl text-left w-100%" id="techno">COMPETENCES ACQUISES</h3>

                <table class="w-80/100 sm:w-75/100 mx-auto text-left flex flex-col gap-y-10 text-lg bg-[#d9d9d950] p-5">
                    <thead>
                        <tr class="flex flex-row gap-x-5 align-center">
                            <th class="w-30/100">Compétences</th>
                            <th class="w-full">Caractéristique</th>
                        </tr>
                    </thead>
                    <tbody class=" flex flex-col gap-y-5">
                        <tr class="flex flex-row gap-x-5 align-center">
                            <td class="w-30/100"> AC21.01</td>
                            <td class="w-full"> Élaborer et implémenter les spécifications fonctionnelles et non fonctionnelles à partir des exigences</td>
                        </tr>
                        <tr class="flex flex-row gap-x-5 align-center">
                            <td class="w-30/100"> AC21.02</td>
                            <td class="w-full"> Appliquer des principes d’accessibilité et d’ergonomie</td>
                        </tr>
                        <tr class="flex flex-row gap-x-5 align-center">
                            <td class="w-30/100"> AC21.03</td>
                            <td class="w-full"> Adopter de bonnes pratiques de conception et de programmation</td>
                        </tr>
                        <tr class="flex flex-row gap-x-5 align-center">
                            <td class="w-30/100"> AC21.04</td>
                            <td class="w-full"> Vérifier et valider la qualité de l’application par les tests</td>
                        </tr>
                        <tr class="flex flex-row gap-x-5 align-center">
                            <td class="w-30/100"> AC22.01</td>
                            <td class="w-full"> Choisir des structures de données complexes adaptées au problème</td>
                        </tr>
                        <tr class="flex flex-row gap-x-5 align-center">
                            <td class="w-30/100"> AC22.02</td>
                            <td class="w-full"> Utiliser des techniques algorithmiques adaptées pour des problèmes complexes</td>
                        </tr>
                        <tr class="flex flex-row gap-x-5 align-center">
                            <td class="w-30/100"> AC22.03</td>
                            <td class="w-full"> Comprendre les enjeux et moyens de sécurisation des données et du code</td>
                        </tr>
                        <tr class="flex flex-row gap-x-5 align-center">
                            <td class="w-30/100"> AC23.01</td>
                            <td class="w-full"> Concevoir et développer des applications communicantes</td>
                        </tr>
                        <tr class="flex flex-row gap-x-5 align-center">
                            <td class="w-30/100"> AC23.02</td>
                            <td class="w-full"> Utiliser des serveurs et des services réseaux virtualisés</td>
                        </tr>
                        <tr class="flex flex-row gap-x-5 align-center">
                            <td class="w-30/100"> AC23.03</td>
                            <td class="w-full"> Sécuriser les services et données d’un système</td>
                        </tr>
                        <tr class="flex flex-row gap-x-5 align-center">
                            <td class="w-30/100"> AC24.01</td>
                            <td class="w-full"> Optimiser les modèles de données de l’entreprise</td>
                        </tr>
                        <tr class="flex flex-row gap-x-5 align-center">
                            <td class="w-30/100"> AC24.03</td>
                            <td class="w-full"> Organiser la restitution de données à travers la programmation et la visualisation</td>
                        </tr>
                        <tr class="flex flex-row gap-x-5 align-center">
                            <td class="w-30/100"> AC24.04</td>
                            <td class="w-full"> Manipuler des données hétérogènes</td>
                        </tr>
                        <tr class="flex flex-row gap-x-5 align-center">
                            <td class="w-30/100"> AC25.01</td>
                            <td class="w-full"> Identifier les processus présents dans une organisation en vue d’améliorer les systèmes d’information</td>
                        </tr>
                        <tr class="flex flex-row gap-x-5 align-center">
                            <td class="w-30/100"> AC25.02</td>
                            <td class="w-full"> Formaliser les besoins du client et de l’utilisateur</td>
                        </tr>
                        <tr class="flex flex-row gap-x-5 align-center">
                            <td class="w-30/100"> AC25.03</td>
                            <td class="w-full"> Identifier les critères de faisabilité d’un projet informatique</td>
                        </tr>
                        <tr class="flex flex-row gap-x-5 align-center">
                            <td class="w-30/100"> AC26.01</td>
                            <td class="w-full"> Comprendre la diversité, la structure et la dimension de l’informatique dans une organisation</td>
                        </tr>
                        <tr class="flex flex-row gap-x-5 align-center">
                            <td class="w-30/100"> AC26.02</td>
                            <td class="w-full"> Appliquer une démarche pour intégrer une équipe informatique au sein d’une organisation</td>
                        </tr>
                    </tbody>
                     
                </table>
            <h3 class=" mt-15 ml-5 sm:mt-50 sm:ml-50 font-bold text-xl text-left w-100%" id="techno">BILANS</h3>
            <h3 class="ml-5 mb-5 sm:ml-50 sm:mb-10 font-bold text-xl text-left w-100%" id="techno">Bilan du travail effectué / des résultats fonctionnels</h3>
            <ul class="text-left flex flex-col gap-y-5 text-xl mx-auto">
                <li>Travailler sur des projets de développement logiciel</li>
                <li>WinDev</li>
                <li>Conception</li>
                <li>Développement</li>
                <li>Amélioration</li>
                <li>Correction de bugs</li>
                <li>Ajout de nouvelles fonctionnalités</li>
                <li>Manipulation des bases de données</li>
            </ul>
            <h3 class=" mt-15 ml-5 mb-5 sm:mt-50 sm:ml-50 sm:mb-10 font-bold text-xl text-left w-100%" id="techno">Bilan des apprentissages techniques / compétences acquises</h3>
            <ul class="text-left flex flex-col gap-y-5 text-xl mx-auto">
                <li>Structuration rigoureuse du code</li>
                <li>Logique événementielle</li>
                <li>Programmation orientée objet</li>
                <li>Interfaces graphiques (UI)</li>
            </ul>
            <h3 class=" mt-15 ml-5 mb-5 sm:mt-50 sm:ml-50 sm:mb-10 font-bold text-xl text-left w-100%" id="techno">Bilan organisationnel</h3>
            <ul class="text-left flex flex-col gap-y-5 text-xl mx-auto">
                <li>Deadlines</li>
                <li>Priorités évolutives</li>
                <li>Méthodes de suivi de projet</li>
            </ul>
            <h3 class=" mt-15 ml-5 mb-5 sm:mt-50 sm:ml-50 sm:mb-10 font-bold text-xl text-left w-100%" id="techno">Bilan humain, relationnel et communicationnel</h3>
            <ul class="text-left flex flex-col gap-y-5 text-xl mx-auto">
                <li>Environnement de travail stimulant </li>
                <li>Hiérarchie professionnelle</li>
                <li>Méthodes de suivi de projet</li>
                <li>Réunions de suivi</li>
            </ul>
            <h3 class=" mt-15 ml-5 mb-5 sm:mt-50 sm:ml-50 sm:mb-10 font-bold text-xl text-left w-100%" id="techno">Bilan professionnel</h3>
            <ul class="text-left flex flex-col gap-y-5 text-xl mx-auto">
                <li>Développement logiciel</li>
                <li>Développement web </li>
                <li>Développement mobile</li>
            </ul>
            <h3 class=" mt-15 ml-5 mb-5 sm:mt-50 sm:ml-50 sm:mb-10 font-bold text-xl text-left w-100%" id="techno">Autres bilans (méthodes de travail, ouverture culturelle, etc.)</h3>
            <ul class="text-left flex flex-col gap-y-5 text-xl mx-auto">
                <li>Différentes méthodologies de développement </li>
                <li>Immersion culturelle dans le monde de l’entreprise</li>
                <li>Savoir-être essentiels en milieu professionnel</li>
            </ul>
        </div>
</template>
