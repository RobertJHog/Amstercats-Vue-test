<template>
  <div id="addcat-wrapper">
    <h1> Add new AmsterCat! </h1>
    <input id="input" type="text" placeholder="Name" autofocus>
    <input id="input" type="text" placeholder="Age">
    <input id="input" type="text" placeholder="Breed">
    <input id="input" type="text" placeholder="profile photo: url">
    <input id="input" type="text" placeholder="Summary">
    <button v-on:click="">Submit</button>
  </div>


</template>

<style scoped>

  div.addcat-wrapper {
    min-height: 50em;
    margin-top: 4em;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  #input {
    flex: 1;
  }

    h1, h2, h3 {
      color: white;
      text-align: center;
    }

    img {
      max-width: 18.75em;
      max-height: 18.75em;
      border-radius: 5%;
      margin-right: 2.5em;
      box-shadow: 10px 10px 10px 10px rgba(0,0,0,0.125);
      margin: 0.625em 35%;
  }

</style>

<script>

  export default {
    name: 'CatCreate',
    template: '</catcreate>'
  }

</script>
