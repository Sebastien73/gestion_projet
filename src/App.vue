<template>
  <Header/>
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

</style>
<script>
import BackToTop from "@/components/general_components/BackToTop";
import Header from "@/components/header/Header";
export default {
  components: {Header, BackToTop}
}
</script>