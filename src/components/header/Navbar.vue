<template>
    <div>

        <nav class="navbar navbar-expand-lg navbar-dark bg-dark text-uppercase w-100">
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

</style>