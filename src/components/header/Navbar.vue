<template>
    <div>

        <!-- <nav class="navbar navbar-expand-lg navbar-dark bg-dark text-uppercase w-100">
            <a class="mr-md-3 navbar-header container" @click="scrollT"  href="/formation.htm">
                <img id="logoCampus" class="img-fluid" src="https://le-campus-numerique.fr/wp-content/uploads/2020/12/logo-campus-header.png" alt="Logo Campus" width="">
            </a>
            <button class="navbar-toggler" type="button" data-toggle="collapse"
                           data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                           aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse container" id="navbarSupportedContent">
                <ul class="navbar-nav mr-auto">
                    <li class="nav-item active" v-for="(page, index) in pages" :key="page.id" >
                        <router-link class="m-3 nav-link" :class="{ active: activeIndex === index}" @click="activeIndex = index; scrollT" :to="page.path"> <span class="sr-only"> #{{ page.pageTitle }} </span> </router-link>
                    </li>
                </ul>
            </div>
        </nav> -->
        <nav class="navbar navbar-expand-lg navbar-light bg-light w-100">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Navbar</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav mr-auto">
                    <li class="nav-item active" v-for="(page, index) in pages" :key="page.id" >
                        <router-link class="m-3 nav-link" :class="{ active: activeIndex === index}" @click="activeIndex = index; scrollT" :to="page.path"> <span class="sr-only"> #{{ page.pageTitle }} </span> </router-link>
                    </li>
                </ul>
      <!-- <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Link</a>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a class="dropdown-item" href="#">Action</a></li>
            <li><a class="dropdown-item" href="#">Another action</a></li>
            <li><hr class="dropdown-divider"></li>
            <li><a class="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
        <li class="nav-item">
          <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
        </li>
      </ul> -->
      
    </div>
  </div>
</nav>
    </div>
</template>

<script>
export default {
    // eslint-disable-next-line vue/multi-word-component-names
    name: "Navbar",

    data() {
        return {
            pages: [
                //{pageTitle: "formation.htm", id: 0},
                {pageTitle: "iot", id: 1, path: "/home"},
                {pageTitle: "électronique", id: 2, path: "/electronique"},
                {pageTitle: "protocoles de communication", id: 3, path: "/protocoles"},
                {pageTitle: "cas d'études iot", id: 4, path: "/cas_etudes"}
            ],

            activeIndex: 0
        }
    },

    methods: {
        selectPage: function (id) {
            this.activeId = id;
        },
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

.navbar .navbar-nav .nav-item .nav-link.active {
    color: white;
}

/*__Logo____________________________*/
#logoCampus {
    max-width: 40%;
}

@media (max-width: 990px) {
    
    .navbar-nav {
        background-color: #00000000;
        
    }
    
    .nav-link {
        background-color: #ffffff;
        /* box-shadow: 2px 2px 5px rgb(144, 144, 144); */
        border-bottom: solid 1px #acacac;
    }

    .nav-link:hover {
        background-color: #dcdcdc;
        /* box-shadow: 2px 2px 5px rgb(144, 144, 144); */
    }
   
   .nav-item {
       height: 50px;
       }

    .nav-item a {
        width: 100%;
    }

    .sr-only{
        margin: 15px;
    }
    
}

</style>