<script setup lang="ts">

    import { ref,computed } from 'vue'
    import { useRoute } from 'vue-router'

    const route = useRoute()
    const isOpen = ref(false)
    const isHome =computed(() => route.params.name === 'home')

    function toggleMenu() {
        isOpen.value = !isOpen.value
    }


    function scrolltoElement(elementId : string) {
        const element = document.getElementById(elementId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    }

    function srollToTop() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }
</script>

<template>
    <div class="z-100">
        <div class="p-5 bg-[#F0F0F0] shadow-md w-18 rounded-lg fixed  top-20 left-20 z-50" v-if="!isOpen" @click=toggleMenu>
            <div class="w-8 h-6 flex flex-col justify-between cursor-pointer clicked:animate-wiggle" >
                <div class="h-0.5 bg-[#505050] rounded"></div> 
                <div class="h-0.5 bg-[#505050] rounded"></div>
                <div class="h-0.5 bg-[#505050] rounded"></div>
            </div>
        </div>

        <div class="p-5 bg-[#F0F0F0] shadow-md w-80 rounded-lg fixed top-20 left-20 z-50 " v-if="isOpen">
            <div class="w-8 h-6 flex flex-col justify-between cursor-pointer clicked:animate-wiggle" @click=toggleMenu>
                <div class="h-0.5 bg-[#505050] rounded"></div> 
                <div class="h-0.5 bg-[#505050] rounded"></div>
                <div class="h-0.5 bg-[#505050] rounded"></div>
            </div>
            <div class="popup flex flex-col items-left gap-5 justify-center mt-5 text-3xl p-5">
                <a class="hover:text-4xl ease-in-out duration-300" href="#" @click.prevent="() => srollToTop()">ACCUEIL</a>
                <a class="hover:text-4xl ease-in-out duration-300" href="" @click.prevent="() => scrolltoElement('projets')">PROJETS</a>
                <a class="hover:text-4xl ease-in-out duration-300" @click.prevent="() => scrolltoElement('experiences')">EXPERIENCES</a>
                <a class="hover:text-4xl ease-in-out duration-300" @click.prevent="() => scrolltoElement('techno')">TECHNOLOGIES</a>
            </div>
        </div>
    </div>
</template>

<style scoped>
    @import "tailwindcss";
    

</style>