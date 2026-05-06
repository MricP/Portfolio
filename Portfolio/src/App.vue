<script setup lang="ts">
  import Footer from './components/Footer.vue';
  import NavBar from './components/NavBar.vue';
  import LanguageSwitcher from './components/LanguageSwitcher.vue';
  import { computed } from 'vue';
  import { useRoute } from 'vue-router'

  const route = useRoute()
  const isHome = computed(() => route.name === 'Home')

</script>

<template>
  <div class="font-fam overflow-x-hidden" >
    <LanguageSwitcher />
    <NavBar v-show="isHome"></NavBar>
    <RouterView />
    <Footer />
  </div>
</template>

<style scoped>

</style>
