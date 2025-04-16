<script setup lang="ts">

</script>

<template>
    <main>
        <div class="flex justify-center gap-15 m-35">
            <div class="w-125 h-90 bg-stone-400"></div>
            <div class="flex flex-col space-y-20 gap-5 items-left w-125 h-90">
                <div class="flex flex-col space-y-5 items-left">
                    <h1 class="text-5xl bg-gradient-to-r from-[#A9A9FF] to-[#D9D9D9] bg-clip-text text-transparent inner-shadow">Emric Pirrera</h1>
                    <h2 class="text-2xl bg-gradient-to-r from-[#D9D9D9] to-[#A9A9FF] bg-clip-text text-transparent inner-shadow">Software Developper</h2>
                    <p>Tout ce que vous pouvez imaginer est probablement faisable, il vous suffit de l'imaginer et d'y travailler. (Larry Page)</p>

                </div>
                <div class="flex flex-col space-y-5 items-left">
                    <button class="w-30 h-10 border-solid border-2 border-black hover:bg-[#E9E9E9]">Contacter</button>
                    <a href="#" class="relative inline-block text-black transition-colors duration-300 hover:text-black hover:underline underline-offset-4">En savoir plus</a>
                </div>
            </div>
        </div>
        
    </main>
</template>
<style scoped>
    @import "tailwindcss";

    .inner-shadow {
        text-shadow: inset 1px 1px 2px rgba(1, 1, 1, 0.5);
  }
</style>