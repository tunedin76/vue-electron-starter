<template>
  <b-contaier
    id="app"
    class="p-0 m-0"
  >
    <b-navbar
      toggleable="lg"
      type="dark"
      variant="info"
    >
      <b-navbar-brand href="#">LAP</b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse
        id="nav-collapse"
        is-nav
      >
        <b-navbar-nav>
          <b-nav-item href="#"></b-nav-item>
          <b-nav-item
            href="#"
            disabled
          >Disabled</b-nav-item>
        </b-navbar-nav>

        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <b-nav-item-dropdown
            text="Tools"
            right
          >
            <b-dropdown-item
              href="#"
              target="_blank"
            >Time Clock</b-dropdown-item>
            <b-dropdown-item
              href="https://support.ufresoures.com"
              target="_blank"
            >Support</b-dropdown-item>
            <b-dropdown-item
              href="https://ufrportal.com"
              target="_blank"
            >Resource Center</b-dropdown-item>
            <b-dropdown-item
              href="#"
              target="_blank"
            >LAMS 4.0</b-dropdown-item>
          </b-nav-item-dropdown>

          <b-nav-item-dropdown right>
            <b-nav-item to="home">Home</b-nav-item>
            <b-nav-item to="about">About</b-nav-item>
            <b-nav-item to="help">Help</b-nav-item>
            <em>{{ user.name }}</em>
            <b-dropdown-item to="profile">Profile</b-dropdown-item>
            <b-dropdown-item to="logout">Sign Out</b-dropdown-item>
          </b-nav-item-dropdown>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
    <Transition
      mode="out-in"
      name="fade"
    >
      <!-- <keep-alive> -->
      <RouterView :key="$route.name" />
      <!-- </keep-alive> -->
    </Transition>
  </b-contaier>
</template>

<script>
import Vue from 'vue'
import { mapState } from 'vuex'

export default Vue.extend( {
  name: 'ServiceModule',
  computed: {
    ...mapState( 'ui', [ 'currentPage' ] ),
    ...mapState( 'user', [ 'privelages', 'user' ] )
  },
  watch: {
    '$route': function ( to, from, next ) {
      console.log( to, from, next )
    }
  }
} )
</script>

<style lang="scss">
</style>
