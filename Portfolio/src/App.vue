<script setup lang="ts">
  import Footer from './components/Footer.vue';
  import { computed } from 'vue';
  import { useRoute } from 'vue-router'

  const route = useRoute()
  const isHome =computed(() => route.params.name === 'home')

</script>

<template>
  <div class="font-fam overflow-x-hidden" >
    <NavBar class="absolute top-15 left-15" v-show="isHome"/>
    <RouterView />
    <Footer />
  </div>
</template>

<style scoped>

</style>
