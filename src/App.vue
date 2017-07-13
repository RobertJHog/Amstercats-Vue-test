<template>
  <div id="app">
    <router-view></router-view>
    <catfooter></catfooter>
  </div>
</template>

<script>

import catfooter from './components/footer'
export default {
  name: 'app',
  components: {
    catfooter
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
