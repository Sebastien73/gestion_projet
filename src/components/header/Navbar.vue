<template>
    <div>
        <b-navbar type="dark" variant="dark">
            <b-navbar-nav>
                <b-nav-item>
                    <router-link to="/">
                        <img src="https://le-campus-numerique.fr/wp-content/uploads/2020/12/logo-campus-header.png" alt="">
                    </router-link>
                </b-nav-item>

                <b-nav-item>
                    <router-link to="/electronique">Electronique</router-link>
                    <router-link to="/protocoles">Protocoles de communications</router-link>
                    <router-link to="/cas_etudes">Cas d'études</router-link>
                </b-nav-item>

            </b-navbar-nav>
        </b-navbar>
    </div>
</template>

<script>
export default {
    // eslint-disable-next-line vue/multi-word-component-names
    name: "Navbar"
}
</script>

<style scoped>

</style>