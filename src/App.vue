<script setup lang="ts">
import Footer from './components/Footer.vue';


</script>

<template>
  <div class="font-fam overflow-x-hidden" >
    <NavBar class="absolute top-15 left-15" />
    <RouterView />
    <Footer />
  </div>
</template>

<style scoped>

</style>
