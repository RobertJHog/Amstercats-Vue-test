<template>
  <div class="profilepage">
    <h1> Profile page AmsterCat </h1>
    <div class="profile-wrapper">
      <div class="catpage-profile-photo">
        <img id="profilepage-photo" src="http://res.cloudinary.com/daahasvbo/image/upload/v1489924697/Wally1_kxmjd4.jpg" />
      </div>
      <div class="catpage-profile">
            <div class="stats">
                <h3> Wally </h3>
                  <p> <strong> Age: </strong>  2 years </p>
                  <p> <strong> Breed: </strong> Ragdoll </p>
                  <p> <strong> Origin: </strong> Amsterdam, Netherlands </p>
            </div>
            <div class="summary">
              <h3 id="profile-bio"> Bio: </h3>
              <p> Story about an awesome cat</p>
            </div>
      </div>
   </div>
   <div class="cat-creator">
     <catcreate></catcreate>
    <div class="cat-gallery">
      <gallery></gallery>
    </div>
   </div>
 </div>
</template>

<style scoped>

  div.profilepage {
    color: white;
    background-color: #ad2b34;
    text-align: center;
    height: 90%;
    padding-top: 4em;
    padding-bottom: 5em;
    padding-left: 4em;
    padding-right: 4em;
  }

  h3 {
    color: darkblue;
  }

  div.profile-wrapper {
    display: flex;
    flex-direction: row;
  }

  div.catpage-profile-photo {
    flex-basis: 25%;
    margin-left: 2.5em;
    margin-right: 3em;
  }

  div.catpage-profile {
    border-style: solid;
    border-color: #ff751a;
    flex-basis: 35%;
    max-height: 21.875em;
    margin-bottom: 3.125em;
    margin-top: 1.875em;
    margin-left: 3em;
    color: black;
    overflow: hidden;
    padding: 0.75em;
    border-radius: 5%;
    box-shadow: 10px 10px 10px 10px rgba(0,0,0,0.125);
    background-color: lightgrey;
  }

  div.summary {
    text-align: left;
  }

  #profilepage-photo {
    max-height: 21.875em;
    border-radius: 70%;
    border-style: solid;
    border-color: #ff751a;
    box-shadow: 10px 10px 10px 10px rgba(0,0,0,0.0625);
  }

  div.stats {
    text-align: left;
  }

  #profile-bio {
    color: darkblue;
  }

  footer {
    padding: 0.625em 1.25em;
  }


</style>

<script>

  import catcreate from './CatCreate'
  import gallery from './Gallery'

  export default {
    name: 'catprofile',
    components: {
      catcreate,
      gallery
    }
  }

</script>
