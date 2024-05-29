<template>
  <div id="app">
    <CompanyNews />
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">Todo App</a>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item">
              <router-link class="nav-link" to="/" exact>All Tasks</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/completed">Completed Tasks</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/in-progress">In Progress Tasks</router-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <div class="container mt-3">
      <router-view />
    </div>
  </div>
</template>

<script>
import CompanyNews from './components/CompanyNews'

export default {
  components: { CompanyNews }
}
</script>

<style>
.router-link-exact-active {
  font-weight: bold;
  color: #0d6efd; /* or any color you prefer */
}
</style>
