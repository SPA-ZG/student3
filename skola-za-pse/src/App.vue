<script setup>
import { RouterLink, RouterView } from "vue-router";
import myNavbar from "./components/Navbar.vue";
</script>

<template>
  <div class="navBarDiv">
    <myNavbar />
  </div>

  <RouterView />
  <div id="testDiv"></div>
</template>

<!-- barem jedan scoped style -->
<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}

nav {
  width: 100%;
  font-size: 30px;
  text-align: center;
}

.navBarDiv {
  background-color: #df9d63;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
  border-right: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}
</style>
