<template>
  <div id="catitem">
    <article class="cat">
      <header>
        <div class="profile-photo">
          <img id="main-profile-photo" src=""/>
        </div>
          <h3 id="catname"><router-link to="/catprofiles/:id">{{ cat.name }}</router-link></h3>
          <div class="stats">
            <p> <strong> Age: </strong>  {{ cat.age }}</p>
            <p> <strong> Breed: </strong> {{ cat.breed }}</p>
        </div>
      </header>
      <main>
          <div class="summary">
            <h3> Bio: </h3>
            <p>{{ cat.summary }}</p>
          </div>
      </main>
          <footer>
            <div id="LikeButton">
              <img src="../images/heart-cat-grey.svg" alt="Like Button" height="42" width="42" />
              <!-- <likebutton></likebutton> -->
              </div>
          </footer>
    </article>
  </div>
</template>

<style scoped>

article.cat {
  border-color: #ff751a;
  flex-basis: 20%;
  width: 80%;
  margin-left: 3em;
  margin-right: 3em;
  margin-bottom: 3.125em;
  margin-top: 2.875em;
  color: black;
  font-size: 100%;
  overflow: hidden;
  padding: 2em;
  border-radius: 5%;
  box-shadow: 10px 10px 10px 10px rgba(0,0,0,0.25);
  background-color: lightgrey;
}

a {
  text-decoration: none;
}

div.profile-photo {
  text-align: center;
}
div.stats {
  margin-bottom: 40px;
}

#main-profile-photo {
  max-width: 300px;
  max-height: 300px;
  border-radius: 5%;
  box-shadow: 10px 10px 10px 10px rgba(0,0,0,0.0625);
  margin-top: 1em;
}

footer {
  padding: 10px 20px;

}
#LikeButton {
  text-align: right;
  font-size: 1.75em;
}

#catname {
  text-align: center;
  font-size: 2em;
}

</style>

<script>

export default {
  name: 'catitem',
  props: ['cat']
}

</script>
