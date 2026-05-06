<script lang="ts" setup>
// Plus besoin de JS pour l'animation, on utilise TailwindCSS pour les effets de hover
</script>

<template>
    <main class="flex flex-col items-center w-full sm:w-90/100 md:w-80/100 justify-center mx-auto mt-10">
        <div class="w-full max-w-4xl flex flex-col bg-white border border-[#E0E0E0] rounded-2xl overflow-hidden shadow-sm">
            
            <!-- Alternance Row -->
            <RouterLink to="/alternance" class="w-full group outline-none block border-b border-[#E0E0E0] last:border-b-0">
                <div class="w-full flex items-center justify-between p-4 sm:p-6 bg-white hover:bg-[#F9F9F9] transition-colors duration-300 cursor-pointer">
                    
                    <div class="flex items-center gap-4 sm:gap-6">
                        <!-- Logo -->
                        <div class="w-14 h-14 sm:w-20 sm:h-20 bg-white rounded-lg p-2 shrink-0 shadow-sm border border-[#E0E0E0] flex items-center justify-center">
                            <img class="w-full h-full object-contain" src="../assets/images/groupe_diagram.png" alt="logo diagram">
                        </div>
                        
                        <!-- Text -->
                        <div class="flex flex-col">
                            <h2 class="text-lg sm:text-xl font-bold text-black group-hover:text-[#6B6BFF] transition-colors duration-300">Groupe Diagram</h2> 
                            <p class="text-gray-500 font-medium text-sm sm:text-base">{{ $t('experience.diag_group_sub') }}</p>
                        </div>
                    </div>

                    <!-- Tags & Action -->
                    <div class="flex items-center gap-4 sm:gap-8">
                        <div class="hidden md:flex px-4 py-1.5 bg-[#A9A9FF]/10 rounded-full border border-[#A9A9FF]/30">
                            <p class="text-[#6B6BFF] font-semibold text-sm tracking-wide">{{ $t('experience.diag_group_tag') }}</p>
                        </div>
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-gray-400 group-hover:text-[#6B6BFF] group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                        </svg>
                    </div>

                </div>
            </RouterLink>

            <!-- Stage Row -->
            <RouterLink to="/stage" class="w-full group outline-none block border-b border-[#E0E0E0] last:border-b-0">
                <div class="w-full flex items-center justify-between p-4 sm:p-6 bg-white hover:bg-[#F9F9F9] transition-colors duration-300 cursor-pointer">
                    
                    <div class="flex items-center gap-4 sm:gap-6">
                        <!-- Logo -->
                        <div class="w-14 h-14 sm:w-20 sm:h-20 bg-white rounded-lg p-2 shrink-0 shadow-sm border border-[#E0E0E0] flex items-center justify-center">
                            <img class="w-full h-full object-contain" src="../assets/images/diagram.png" alt="logo diagram">
                        </div>
                        
                        <!-- Text -->
                        <div class="flex flex-col">
                            <h2 class="text-lg sm:text-xl font-bold text-black group-hover:text-[#6B6BFF] transition-colors duration-300">Diagram Informatique</h2> 
                            <p class="text-gray-500 font-medium text-sm sm:text-base">{{ $t('experience.diag_info_sub') }}</p>
                        </div>
                    </div>

                    <!-- Tags & Action -->
                    <div class="flex items-center gap-4 sm:gap-8">
                        <div class="hidden md:flex px-4 py-1.5 bg-[#A9A9FF]/10 rounded-full border border-[#A9A9FF]/30">
                            <p class="text-[#6B6BFF] font-semibold text-sm tracking-wide">{{ $t('experience.diag_info_tag') }}</p>
                        </div>
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-gray-400 group-hover:text-[#6B6BFF] group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                        </svg>
                    </div>

                </div>
            </RouterLink>

        </div>
    </main>
</template>

<style scoped>
</style>