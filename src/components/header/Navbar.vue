<template>
  <div class="navbar-nav navbar-dark sticky-top navbar-expand-lg bg-dark justify-content-center align-items-center text-uppercase w-100">
    <button id="btnnavmobile" class="btn bg-dark" @click="openMenu()">
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-list" viewBox="0 0 16 16">
        <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
      </svg>
    </button>

    <!--    Menu desktop-->
    <div class="navbar-nav flex justify-content-center align-items-center" id="desktop">
      <div class="d-flex">
        <button id="btnnavdesktop" class="btn bg-dark">
          <a class="mr-md-3 navbar-header container" @click="scrollT"  href="/formation.htm">
            <img id="logoCampus" class="img-fluid" src="https://le-campus-numerique.fr/wp-content/uploads/2020/12/logo-campus-header.png" alt="Logo Campus" width="">
          </a>
        </button>
        <ul class="navbar-nav mr-auto">
          <li class="nav-item active" v-for="(page) in pages" :key="page.id" >
            <router-link class="m-3 nav-link" @click="scrollT" :to="page.path"> <span class="sr-only"> {{ page.pageTitle }} </span> </router-link>
          </li>
        </ul>
      </div>
    </div>

    <!--    Menu mobile-->
    <div class="navbar-nav flex justify-content-center align-items-center" id="mobile" v-show="controlMenu">
      <a class="mr-md-3 navbar-header container" @click="closeMenu"  href="/formation.htm">
        <img id="logoCampus" class="img-fluid mt-3" src="https://le-campus-numerique.fr/wp-content/uploads/2020/12/logo-campus-header.png" alt="Logo Campus" width="">
      </a>
      <ul class="navbar-nav d-flex flex-column justify-content-center align-items-center">
        <li class="nav-item active" v-for="(page) in pages" :key="page.id" >
          <router-link class="m-3 nav-link" @click="closeMenu" :to="page.path"> <span class="sr-only"> {{ page.pageTitle }} </span> </router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
    // eslint-disable-next-line vue/multi-word-component-names
    name: "Navbar",
    data() {
      return {
        pages: [
          {pageTitle: "#iot", id: 1, path: "/home",},
          {pageTitle: "#électronique", id: 2, path: "/electronique"},
          {pageTitle: "#protocoles de communication", id: 3, path: "/protocoles"},
          {pageTitle: "#cas d'études iot", id: 4, path: "/cas_etudes"}
        ],
        controlMenu : false
      }
    },

    methods: {
      scrollT(){
        window.scroll(0,0);
      },
      openMenu(){
        this.controlMenu = !this.controlMenu;
      },
      closeMenu(){
        this.controlMenu = !this.controlMenu;
        window.scroll(0,0);
      }
    }
}
</script>

<style scoped>

.navbar {
    height: 100px;
    position: fixed;
    z-index: 100;
}

.navbar-nav .nav-item .nav-link {
    font-family: "Open Sans", Sans-serif;
    font-weight: bold;
    color: #EF2961;
}


.navbar-nav .nav-item .nav-link:hover {
    color: #bb0036;
}

.navbar-nav .nav-item .nav-link.active {
    color: white;
}

a.router-link-exact-active {
  color: #FFFFFF !important;
}

/*__Logo____________________________*/
#logoCampus {
    max-width: 40%;
}
ul{
  list-style: none;
}
@media (min-width: 300px) and (max-width: 1024px) {
  #desktop{
    display: none;
  }
  #mobile{
    display:block;
  }
  ul{
    padding: 5px;
  }
  li{
    margin: 5px;
  }
  #btnnavmobile{
    width: 50%;
    display: block;
    color: #FFFFFF;
  }
  #btnnavdesktop{
    display: none;
  }
}
@media (min-width: 1025px){
  #desktop{
    display: block;
  }
  #mobile{
    display: none;
  }
  #btnnavmobile{
    display: none;
  }
  #btnnavdesktop{
    width: 50%;
    display: block;
  }
}
</style>