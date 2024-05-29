<template>
  <div id="app">
    <CompanyNews />
    <Navbar />
    <div class="container mt-3">
      <router-view />
    </div>
  </div>
</template>

<script>
import CompanyNews from './components/CompanyNews'
import Navbar from './components/Navbar.vue';

export default {
  components: { CompanyNews, Navbar }
}
</script>

<style>
.router-link-exact-active {
  font-weight: bold;
  color: #0d6efd; /* or any color you prefer */
}
</style>
