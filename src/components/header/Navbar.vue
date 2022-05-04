<template>
    <div>

        <nav class="navbar navbar-expand-lg navbar-dark bg-dark text-uppercase">
            <router-link class="mr-md-3 navbar-header"  to="/">
                <img id="logoCampus" src="https://le-campus-numerique.fr/wp-content/uploads/2020/12/logo-campus-header.png" alt="Logo Campus">
            </router-link>
            <button class="navbar-toggler" type="button" data-toggle="collapse"
                           data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                           aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav mr-auto">
                    <li class="nav-item active">
                        <router-link class="m-3 nav-link" to="/home"> <span class="sr-only"> #IoT </span> </router-link>
                    </li>

                    <li class="nav-item active">
                        <router-link class="m-3 nav-link" to="/electronique"> <span class="sr-only"> #Electronique </span> </router-link>
                    </li>

                    <li class="nav-item active">
                        <router-link class="m-3 nav-link" to="/protocoles"> <span class="sr-only"> #Protocoles de communication </span> </router-link>
                    </li>

                    <li class="nav-item active">
                        <router-link class="m-3 nav-link" to="/cas_etudes"> <span class="sr-only"> #Cas d'études IoT </span> </router-link>
                    </li>

                </ul>
            </div>
        </nav>
    </div>
</template>

<script>
export default {
    // eslint-disable-next-line vue/multi-word-component-names
    name: "Navbar"
}
</script>

<style scoped>

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

</style>