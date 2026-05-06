<script setup lang="ts">
import gitIcon from '../assets/images/git.svg';
import javaIcon from '../assets/images/java.svg';
import kotlinIcon from '../assets/images/kotlin.svg';
import phpIcon from '../assets/images/php.svg';
import vueIcon from '../assets/images/vue.svg';
import reactIcon from '../assets/images/reactIcon.svg';
import tailwindIcon from '../assets/images/tailwind.svg';
import windevIcon from '../assets/images/windev.png';

// On garde uniquement la liste de base (sans duplication en dur)
const techs = [
  { icon: gitIcon, label: "GIT" },
  { icon: javaIcon, label: "JAVA" },
  { icon: kotlinIcon, label: "KOTLIN" },
  { icon: phpIcon, label: "PHP" },
  { icon: vueIcon, label: "VUE JS" },
  { icon: reactIcon, label: "REACT" },
  { icon: tailwindIcon, label: "TAILWIND" },
  { icon: windevIcon, label: "WINDEV" }
];
</script>

<template>
  <main class="flex items-center justify-center w-full">
    <div class="defile overflow-hidden w-full md:w-[90%] lg:w-[80%] bg-[#d9d9d950] py-6 rounded-xl border border-[#d9d9d9]">
      <!-- La piste d'animation qui contient les deux groupes -->
      <div class="scrolling-track">
        
        <!-- Premier groupe d'éléments -->
        <div class="group">
          <div
            v-for="(tech, index) in techs"
            :key="'first-' + index"
            class="elt"
          >
            <img :src="tech.icon" alt="" class="h-12 mb-3 drop-shadow-sm" />
            <p class="font-bold text-gray-700 tracking-wide">{{ tech.label }}</p>
          </div>
        </div>

        <!-- Deuxième groupe d'éléments (le clone exact pour l'illusion) -->
        <div class="group" aria-hidden="true">
          <div
            v-for="(tech, index) in techs"
            :key="'second-' + index"
            class="elt"
          >
            <img :src="tech.icon" alt="" class="h-12 mb-3 drop-shadow-sm" />
            <p class="font-bold text-gray-700 tracking-wide">{{ tech.label }}</p>
          </div>
        </div>

      </div>
    </div>
  </main>
</template>

<style scoped>
.defile {
  /* Pour gérer les bords arrondis et l'ombre interne si désiré */
  box-shadow: inset 0 0 10px rgba(0,0,0,0.05);
  /* Masquer ce qui dépasse du conteneur */
  overflow: hidden; 
}

.scrolling-track {
  display: flex;
  width: max-content; /* S'adapte à la largeur totale de ses enfants */
}

/* Pause l'animation quand la souris survole */
.scrolling-track:hover .group {
  animation-play-state: paused;
}

.group {
  display: flex;
  width: max-content;
  animation: scroll 20s linear infinite; /* Appliqué au groupe lui-même */
}

.elt {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-width: 150px;
  margin: 0 20px;
  transition: transform 0.3s ease;
}

/* Petit effet au survol pour rendre le carrousel vivant */
.elt:hover {
  transform: scale(1.1);
}

@keyframes scroll {
  0% {
    transform: translateX(0);
  }
  100% {
    /* TranslateX(-100%) décale le groupe entier de sa propre largeur.
       Comme les deux groupes bougent en même temps, le second remplace 
       parfaitement le premier avant de recommencer. */
    transform: translateX(-100%);
  }
}
</style>
