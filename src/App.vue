<template>
  <nav>
    <router-link to="/">IoT</router-link> |
    <router-link to="/electronique">Electronique</router-link> |
    <router-link to="/protocoles">Protocoles de communication</router-link> |
    <router-link to="/cas_etudes">Cas d'études IoT</router-link>
  </nav>
  <router-view/>
  <BackToTop />
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
<script>
import BackToTop from "@/components/general_components/BackToTop";
export default {
  components: {BackToTop}
}
</script>