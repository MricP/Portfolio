<script setup lang="ts">
import Footer from './components/Footer.vue';
import NavBar from './components/NavBar.vue';
import HomeView from './views/HomeView.vue';


</script>

<template>
  <div class="font-fam">
    <NavBar class="absolute top-15 left-15" />
    <RouterView />
    <Footer />
  </div>
</template>

<style scoped>

</style>
