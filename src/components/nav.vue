<template>
  <div id="navbar">
    <h1 id="nav-title"> Amstercats </h1>
      <div id="nav-link-wrapper">
        <p id="nav-links"><router-link to="/">Home</router-link></p>
        <p id="nav-links"><router-link to="/login">Login</router-link></p>
      </div>
  </div>
</template>

<style scoped>

  #nav-title {
    text-align: left;
    margin-top: 0em;
    flex: 1;
  }

  a {
    text-decoration: none!important;
    color: white;
    font-size: 120%;
  }

  #nav-link-wrapper {
    margin-top: -1.3em;
    margin-right: 2em;
  }

  #nav-links {
    flex: 1;
    text-decoration: none!important;
    color: white;
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

  export default {
    name: 'navbar'
  }

</script>
