<script setup lang="ts">
import { onMounted } from "vue";

onMounted(() => {
  let offset = 1;
  const boxDefilement: HTMLElement | null = document.querySelector(".defile");
  const eltDefile = document.getElementsByClassName("eltDefile");

  if (boxDefilement && eltDefile.length > 0) {
    setInterval(() => {
      offset += 2; 
      for (let i = 0; i < eltDefile.length; i++) {
        const elt = eltDefile[i] as HTMLElement;
        elt.style.transform = `translateX(${offset}px)`;
      }
    }, 60);
  }
});
</script>
<template>
    <main>
        <div class="defile flex flex-row align-center justify-center bg-[#d9d9d9] w-60/100 h-50 overflow-hidden">
            <img class="eltDefile" src="../assets/images/diagram.png" alt="">
            <img class="eltDefile" src="../assets/images/diagram.png" alt="">
            <img class="eltDefile" src="../assets/images/diagram.png" alt="">
            <img class="eltDefile" src="../assets/images/diagram.png" alt="">
            <img class="eltDefile" src="../assets/images/diagram.png" alt="">
            <img class="eltDefile" src="../assets/images/diagram.png" alt="">
        </div>
    </main>
</template>