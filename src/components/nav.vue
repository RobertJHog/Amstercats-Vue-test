<template>
  <div id="navbar">
    <h1 id="nav-title"><router-link to="/">Amstercats</router-link></h1>
      <div id="nav-link-wrapper">
        <p id="nav-links"><router-link to="/login">Login</router-link></p>
        <p id="nav-links"><router-link to="/signup">Sign up</router-link></p>
      </div>
  </div>
</template>

<style scoped>

  #nav-title {
    text-align: left;
    margin-top: 0em;
    margin-left: 1em;
    flex: 1;
  }

  a {
    text-decoration: none!important;
    color: white;
    font-size: 100%;
  }

  #nav-links {
    margin-top: -.2em;
    margin-right: 2em;
    flex: 1;
    text-decoration: none!important;
    color: white;
    font-size: 110%;
  }

  #navbar {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    position: relative;
    background-color: black;
    color: white;
    text-align: center;
    height: 3em;
    padding: 1em;
    width: 97.75%;
  }

</style>

<script>

import login from './login'
import signup from './signup'

export default {
  name: 'navbar',
  components: {
    login,
    signup
  }
}

</script>
