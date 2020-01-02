<template>
  <b-container
    fluid
    class="m-0 p-0"
  >
    <b-img
      fluid
      :src="electron"
      class="mb-5"
    />
    <b-container class="text-center">
      <h1 class="title is-4">
        UFR 2.0
      </h1>
    </b-container>
  </b-container>
</template>

<script>
import Vue from 'vue'

export default Vue.extend( {
  name: 'Home',
  data () {
    return {
      electron: require( '../assets/images/logo.png' )
    }
  }
} )
</script>

<style>
</style>
