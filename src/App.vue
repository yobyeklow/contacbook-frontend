<script setup>
import { RouterLink, RouterView } from 'vue-router'
import AppHeader from '../src/components/AppHeader.vue'
</script>

<template>
  <div id="app">
        <AppHeader />
        <div class="container mt-3">
            <router-view />
        </div>
    </div>
</template>

<style>
.page {
    max-width: 400px;
    margin: auto;
}
</style>
