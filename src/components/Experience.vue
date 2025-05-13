<script lang="ts" setup>
import { onMounted } from 'vue';

onMounted(() => {
  const xp: HTMLElement | null = document.querySelector('.xp');
  const more: HTMLElement | null = document.querySelector('.more');

  if (more && xp) {
    xp.addEventListener('mouseover', () => {
      more.style.transform = "translateX(50px)";
    });

    xp.addEventListener('mouseout', () => {
        more.style.transform = "translateX(0)";
    });
  }
});
</script>

<template>
    <main class="flex flex-col align-center w-60/100 justify-center xp">
        <div class=" bg-[#D9D9D9] h-1 mb-10"></div>
        <div class="flex flex-row align-center justify-center gap-10">
            <div class="overflow-hidden">
                <img class="w-35 h-30" src="../assets/images/diagram.png" alt="diagram icon">
            </div>
            
            <div class="flex flex-col space-y-5 align-center justify-center">
                <div>
                    <h2 class=" text-xl font-bold">Diagram Informatique</h2> 
                    <p>2025</p>
                </div>
                <p>Stage</p>
            </div>
            <img class="more w-12 h-12 transition duration-300 mt-10" src="../assets/images/arrow.svg" alt="">
        </div>
    </main>
</template>
<style scoped>

</style>