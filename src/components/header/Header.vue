<template>
    <div>
      <b-navbar type="dark" variant="dark">
        <b-navbar-nav>
          <b-nav-item href="https://le-campus-numerique.fr/">
            <img src="https://le-campus-numerique.fr/wp-content/uploads/2020/12/logo-campus-header.png" alt="">
          </b-nav-item>

          <!-- Navbar dropdowns -->
          <b-nav-item-dropdown text="Lang" right>
            <router-link to="/">IoT - Home</router-link>test
            <router-link to="/electronique">Electronique</router-link>
            <router-link to="/protocoles">Protocoles de communications</router-link>
            <router-link to="/cas_etudes">Cas d'études</router-link>
          </b-nav-item-dropdown>

          <b-nav-item-dropdown text="User" right>
            <b-dropdown-item href="#">Account</b-dropdown-item>
            <b-dropdown-item href="#">Settings</b-dropdown-item>
          </b-nav-item-dropdown>
        </b-navbar-nav>
      </b-navbar>
    </div>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
    name: "Header",
}
</script>

<style scoped>

</style>