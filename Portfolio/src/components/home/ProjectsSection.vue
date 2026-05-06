<script setup lang="ts">
import ProjectContainer from '../ProjectContainer.vue';
import airconcess from '../../assets/images/project/airconcess.png'
import tvshelf from '../../assets/images/project/tvshelf.png'
import finanzen from '../../assets/images/project/finanzen.png'
import flightcheck from '../../assets/images/project/flightCheck.png'

import airconcessVideo from '../../assets/images/project/airconcess.mp4'
import tvshelfVideo from '../../assets/images/project/tvshelf.mp4'
import finanzenVideo from '../../assets/images/project/finanzen.mp4'
import flightcheckVideo from '../../assets/images/project/flightcheck.mp4'

const projects = [
  {
    id: 'airconcess',
    title: 'AirConcess',
    image: airconcess,
    video: airconcessVideo,
    technos: ['React', 'PHP']
  },
  {
    id: 'tvshelf',
    title: 'TVShelf',
    image: tvshelf,
    video: tvshelfVideo,
    technos: ['Kotlin']
  },
  {
    id: 'finanzen',
    title: 'Finanzen',
    image: finanzen,
    video: finanzenVideo,
    technos: ['Symfony']
  },
  {
    id: 'flightcheck',
    title: 'FlightCheck',
    image: flightcheck,
    video: flightcheckVideo,
    technos: ['Java']
  }
]
</script>

<template>
  <h3 class="mt-15 ml-5 mb-10 sm:mt-50 sm:ml-50 sm:mb-10 font-bold text-xl text-left w-full" id="projets">{{ $t('home.projects_title') }}</h3>
  <div class="mt-0 flex flex-col justify-center items-center gap-25 sm:gap-10 w-full">
    <div class="flex flex-col gap-y-25">
      <!-- Pair items in rows of 2 for md/lg -->
      <div v-for="i in Math.ceil(projects.length / 2)" :key="i" class="flex flex-col gap-y-25 sm:flex-row sm:gap-x-25 sm:gap-y-6">
        <ProjectContainer 
          v-for="(project, j) in projects.slice((i - 1) * 2, i * 2)" 
          :key="project.id"
          :id="project.id"
          :title="project.title" 
          :subtitle="$t(`projects.${project.id}.sub`)" 
          :image="project.image" 
          :technos="project.technos" 
          :video="project.video"
          :class="j === 1 ? 'sm:mt-50' : 'sm:mt-0'"
        />
      </div>
    </div>
  </div>
</template>
