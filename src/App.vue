<template>
  <div id="app">
    <navbar></navbar>
    <router-view></router-view>
    <catfooter></catfooter>
  </div>
</template>

<script>

import catfooter from './components/footer'
import navbar from './components/nav'

export default {
  name: 'app',
  components: {
    catfooter,
    navbar
  }
}
</script>

<style>
#app {
  font-family: 'Playfair Display', serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
