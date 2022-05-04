<template>
    <div>
        <nav class="navbar navbar-dark bg-dark font-weight text-uppercase">
            <b-navbar-nav>
                <b-nav-item>
                    <router-link class="mr-md-3"  to="/">
                        <img src="https://le-campus-numerique.fr/wp-content/uploads/2020/12/logo-campus-header.png" alt="Logo Campus">
                    </router-link>
                </b-nav-item>

                <b-nav-item class="justify-content-md-between">
                    <router-link class="m-3" to="/home">#IoT</router-link>
                    <router-link class="m-3" to="/electronique">#Electronique</router-link>
                    <router-link class="m-3" to="/protocoles">#Protocoles de communications</router-link>
                    <router-link class="m-3" to="/cas_etudes">#Cas d'études IoT</router-link>
                </b-nav-item>

            </b-navbar-nav>
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

body {
    font-family: "Open Sans", Sans-serif;
}

</style>