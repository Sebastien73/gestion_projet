<template>
  <Header/>
  <router-view/>
  <BackToTop />
  <Footer />
</template>

<style lang="scss">
@import "@/assets/base.scss";

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: black;
  background-color: white;
<<<<<<< HEAD
}

footer {
  width: 100%;
  margin-top: 200px;
=======
>>>>>>> nico
}

</style>
<script>
import BackToTop from "@/components/general_components/BackToTop";
import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";
export default {
  components: {Header, BackToTop, Footer}
}
</script>