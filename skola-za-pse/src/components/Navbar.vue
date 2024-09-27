<template>
  <nav class="myNav">
    <router-link to="/">Početna</router-link>
    <router-link to="/courses">Tečajevi</router-link>
    <router-link to="/services">Ostale usluge</router-link>
    <router-link to="/contact">Kontakt</router-link>
  </nav>
</template>

<!-- barem jedan scoped style -->
<style scoped>
.myNav a {
  padding: 0 1rem;
  border-left: 1px solid #bc7533;
  border-right: 1px solid #bc7533;
}
</style>
