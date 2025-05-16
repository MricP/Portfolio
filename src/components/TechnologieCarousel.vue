<script setup lang="ts">
import { onMounted } from "vue";

onMounted(() => {
  const boxDefilement: HTMLElement | null = document.querySelector(".defile");
  const eltDefile = document.getElementsByClassName("eltDefile");

  if (boxDefilement && eltDefile.length > 0) {
    let offset = 0;

    setInterval(() => {
      offset += 2;

      for (let i = 0; i < eltDefile.length; i++) {
        const elt = eltDefile[i] as HTMLElement;
        elt.style.transform = `translateX(${offset}px)`;
      }

      const dernier = boxDefilement.lastElementChild as HTMLElement;
      const boxWidth = boxDefilement.offsetWidth;

      if (dernier.getBoundingClientRect().left >= boxWidth + boxDefilement.getBoundingClientRect().left) {
       dernier.style.opacity = "0";
        boxDefilement.insertBefore(dernier, boxDefilement.firstElementChild);
        offset -= dernier.offsetWidth;

        void dernier.offsetHeight;

        dernier.style.transition = "opacity 0.8s ease";
        dernier.style.opacity = "1";
      }

    }, 60);
  }  
});

</script>
<template>
    <main>
        <div class="flex flex-col justify-center items-center">
          <div class="defile flex flex-row align-center justify-center bg-[#d9d9d950] w-60/100 h-50 overflow-hidden gap-10 ">
              <div class="eltDefile flex flex-col justify-center items-center">
                <img src="../assets/images/git.svg" alt="">
                <p>GIT</p>
              </div>
              
              <div class="eltDefile flex flex-col justify-center items-center">
                <img src="../assets/images/java.svg" alt="">
                <p>JAVA</p>
              </div>

              <div class="eltDefile flex flex-col justify-center items-center">
                <img src="../assets/images/kotlin.svg" alt="ss">
                <p>KOTLIN</p>
              </div>
              
              <div class="eltDefile flex flex-col justify-center items-center">
                <img src="../assets/images/php.svg" alt="">
                <p class="text-[#F3F3F3]">S</p>
              </div>

              <div class="eltDefile flex flex-col justify-center items-center">
                <img src="../assets/images/vue.svg" alt="">
                <p>VUE JS</p>
              </div>

              <div class="eltDefile flex flex-col justify-center items-center">
                <img src="../assets/images/reactIcon.svg" alt="">
                <p>REACT</p>
              </div>

              <div class="eltDefile flex flex-col justify-center items-center ">
                <img src="../assets/images/tailwind.svg" alt="">
                <p>TAILWIND</p>
              </div>

              <div class="eltDefile flex flex-col justify-center items-center">
                <img class="h-22 w-auto object-contain" src="../assets/images/windev.png" alt="">
                <p>WINDEV</p>
              </div>
          </div>
        </div>
    </main>
</template>