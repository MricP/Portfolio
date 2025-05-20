<script setup lang="ts">
import { useRoute } from 'vue-router'

const route = useRoute()
const name = route.params.name
</script>

<template>
    <main>
        <div>
            <div><img src=""></div>
            <h1>{{name}}</h1>
        </div>
        <div> 
            <!-- video -- -->
        </div>

        <div>
            <h2>BRIEF</h2>
            <p></p>
        </div>
        <div>
            <h2>MA CONTRIBUTION</h2>
            <p></p>
        </div>
        <div>
            <h2>PROBLEMES</h2>
            <p></p>
        </div>
    </main>
</template>

