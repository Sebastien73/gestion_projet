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
  color: #2c3e50;

}

footer {
  // position: absolute;
  // position: fixed;
  // bottom: 0;
  width: 100%;
  margin-top: 200px;
  /* padding-top: 200px; */
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