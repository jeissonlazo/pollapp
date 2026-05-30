<script setup lang="ts">
import AppHeader from './components/AppHeader.vue';
</script>

<template>
  <main>
    <AppHeader />
    <div class="app-container">
    
      <nav>
        <RouterLink to="/positions">Go to Home</RouterLink>
        <RouterLink to="/login">Go to Login</RouterLink>
        <RouterLink to="/matches">Go to Matches</RouterLink>
      </nav>

      <RouterView />
    </div>
  </main>
</template>

<style scoped>
.app-container {
  padding: 1rem;
  background: #f9f9f9;
  height: 100vh;  
}
</style>