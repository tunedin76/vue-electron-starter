<template>
  <b-card header-class="alert-danger">
    <div slot="header">
      <b-button
        size="sm"
        class="float-right"
        @click="$router.push('home')"
      >
        <font-awesome-icon icon="user-secret" />
      </b-button>
      System Info
    </div>

    <table class="table is-fullwidth">
      <thead>
        <tr>
          <th>Package</th>
          <th>Version</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Platform</td>
          <td>{{ platform }}</td>
        </tr>
        <tr
          v-for="lib in Object.keys(versions)"
          :key="lib"
        >
          <td>{{ lib }}</td>
          <td>{{ versions[lib] }}</td>
        </tr>
      </tbody>
    </table>
  </b-card>
</template>

<script>
import Vue from 'vue'

export default Vue.extend( {
  data () {
    return {
      versions: process.versions,
      platform: require( 'os' ).platform(),
    }
  },

  created () { },
} )
</script>

<style></style>
