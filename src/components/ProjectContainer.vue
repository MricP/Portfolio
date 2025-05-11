<script setup lang="ts">



</script>
<template>
    <div class="card w-80 h-100 bg-[#d9d9d950] rounded-xl border-1 border-[#d9d9d9] flex flex-col justify-center items-center gap-5 hover:rotate-15 transition-transform duration-300 ">
        <div class="bg-[url(../assets/images/project/image.png)] bg-cover bg-center w-60 h-40 rounded-xl"></div>
        <div>
            <h2 class="font-bold">Airconcess</h2>
            <p class="w-60">Concessionaire d'aéronefs en ligne</p>
        </div>
        <div class="w-35 h-6 bg-[#595959a0] rounded-md"></div>
    </div>
</template>

<style scoped>
.card {
  position: relative;
  overflow: hidden;
  background: rgba(217, 217, 217, 0.3); /* fond de base */
}

/* Vague animée */
.card::before {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(to top right, rgba(169, 169, 255, 0.3), transparent);
  transform: translateX(-100%) translateY(100%);
  opacity: 0;
  transition: none;
  z-index: 0;
  pointer-events: none;
}

/* Animation lancée au hover */
.card:hover::before {
  animation: waveFlash 1.3s ease-in-out forwards;
  opacity: 1;
}

/* Keyframes pour vague diagonale */
@keyframes waveFlash {
  0% {
    transform: translateX(-100%) translateY(100%);
    opacity: 0.5;
  }
  50% {
    transform: translateX(0%) translateY(0%);
    opacity: 0.7;
  }
  100% {
    transform: translateX(100%) translateY(-100%);
    opacity: 0;
  }
}
</style>
