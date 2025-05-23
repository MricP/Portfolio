<script setup lang="ts">
import { onMounted, onBeforeUnmount, ref } from "vue";
import gitIcon from '../assets/images/git.svg';
import javaIcon from '../assets/images/java.svg';
import kotlinIcon from '../assets/images/kotlin.svg';
import phpIcon from '../assets/images/php.svg';
import vueIcon from '../assets/images/vue.svg';
import reactIcon from '../assets/images/reactIcon.svg';
import tailwindIcon from '../assets/images/tailwind.svg';
import windevIcon from '../assets/images/windev.png';

const techs = [
  { icon: gitIcon, label: "GIT" },
  { icon: javaIcon, label: "JAVA" },
  { icon: kotlinIcon, label: "KOTLIN" },
  { icon: phpIcon, label: "PHP" },
  { icon: vueIcon, label: "VUE JS" },
  { icon: reactIcon, label: "REACT" },
  { icon: tailwindIcon, label: "TAILWIND" },
  { icon: windevIcon, label: "WINDEV" },
  { icon: gitIcon, label: "GIT" },
  { icon: javaIcon, label: "JAVA" },
  { icon: kotlinIcon, label: "KOTLIN" },
  { icon: phpIcon, label: "PHP" },
  { icon: vueIcon, label: "VUE JS" },
  { icon: reactIcon, label: "REACT" },
  { icon: tailwindIcon, label: "TAILWIND" },
  { icon: windevIcon, label: "WINDEV" },
];

const groupRef = ref<HTMLElement | null>(null);
let animationFrameId: number;
let posX = 0;
let contentWidth = 0; 

const speed = 1.5;

function animate() {
  const group = groupRef.value;
  if (!group) return;

  posX -= speed;

  if (Math.abs(posX) >= contentWidth) {
  posX = 0;
}

  group.style.transform = `translateX(${posX}px)`;
  animationFrameId = requestAnimationFrame(animate);
}

function startAnimation() {
  if (!animationFrameId) {
    animationFrameId = requestAnimationFrame(animate);
  }
}

function stopAnimation() {
  if (animationFrameId) {
    cancelAnimationFrame(animationFrameId);
    animationFrameId = 0;
  }
}

onMounted(() => {
  const group = groupRef.value;
  if (!group) return;

  contentWidth = 0;
  Array.from(group.children).forEach(child => {
    contentWidth += (child as HTMLElement).offsetWidth + 12; // +12 c’est le gap entre éléments (gap-12)
  });

  const children = Array.from(group.children);
  children.forEach(child => {
    const clone = child.cloneNode(true);
    group.appendChild(clone);
  });

  startAnimation();
});

onBeforeUnmount(() => {
  stopAnimation();
});
</script>

<template>
  <main class="flex items-center justify-center">
    <div   class="defile overflow-hidden  w-15/100 bg-[#d9d9d950] py-6" @mouseenter="stopAnimation" @mouseleave="startAnimation">
      <div ref="groupRef" class="group flex  w-15/100 gap-12 items-center  overflow-hidden whitespace-nowrap  w-90/100 ">
        <div
          v-for="(tech, index) in techs"
          :key="index"
          class="elt flex flex-col items-center"
        >
          <img :src="tech.icon" alt="" class="h-12 mb-1" />
          <p>{{ tech.label }}</p>
        </div>
      </div>
    </div>
  </main>
</template>

<style scoped>
.defile {
  overflow: hidden;
  position: relative;
}

.group {
  display: flex;
  width: fit-content;
  will-change: transform;
}

.elt {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-width: 150px;
  margin: 0 20px;
}
</style>
