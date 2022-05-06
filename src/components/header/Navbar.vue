<template>
    <div>

        <nav class="navbar navbar-expand-lg navbar-dark bg-dark text-uppercase w-100">
            <a class="mr-md-3 navbar-header container"  href="formation.htm" @click="scrollT">
                <img id="logoCampus" class="img-fluid" src="https://le-campus-numerique.fr/wp-content/uploads/2020/12/logo-campus-header.png" alt="Logo Campus" width="">
            </a>
            <button class="navbar-toggler" type="button" data-toggle="collapse"
                           data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                           aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse container" id="navbarSupportedContent">
                <ul class="navbar-nav mr-auto">
                    <li class="nav-item active">
                        <router-link class="m-3 nav-link" to="/home" @click="scrollT"> <span class="sr-only"> #IoT </span> </router-link>
                    </li>

                    <li class="nav-item active">
                        <router-link class="m-3 nav-link" to="/electronique" @click="scrollT"> <span class="sr-only"> #Electronique </span> </router-link>
                    </li>

                    <li class="nav-item active">
                        <router-link class="m-3 nav-link" to="/protocoles" @click="scrollT"> <span class="sr-only"> #Protocoles de communication </span> </router-link>
                    </li>

                    <li class="nav-item active">
                        <router-link class="m-3 nav-link" to="/cas_etudes" @click="scrollT"> <span class="sr-only"> #Cas d'études IoT </span> </router-link>
                    </li>

                </ul>
            </div>
        </nav>
    </div>
</template>

<script>
export default {
    // eslint-disable-next-line vue/multi-word-component-names
    name: "Navbar",
  methods:{
    scrollT(){
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

.navbar .navbar-nav .nav-item .nav-link {
    font-family: "Open Sans", Sans-serif;
    font-weight: bold;
    color: #EF2961;
}


.navbar .navbar-nav .nav-item .nav-link:hover {
    color: #bb0036;
}

.navbar .navbar-nav .nav-item .nav-link:active {
    color: white;
}

/*__Logo____________________________*/
#logoCampus {
    max-width: 50%;
}

</style>