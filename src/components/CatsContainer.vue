<template>
  <div class="page-wrapper">
      <header>
        <div class="intro-week-wrapper">
          <div class="intro-text">
                <h1> Welcome to the lovely cats of Amsterdam! </h1>
                <p> A prototype website for my (mostly female =) ) friends who adore cats. A user can create <br>
                and modify profiles for their own cats and share pictures with friends.</p>
                <ul>
                  <li> Add your own cat profile to the site </li>
                  <li> Upload pictures of your cat  </li>
                  <li> Enjoy beautiful pictures of other cats </li>
                  <li> And like, like, like! </li>
                </ul>
          </div>
          <div>
            <weekcat></weekcat>
          </div>
        </div>
      </header>
      <main>
        <div class="main-wrapper">
          <div class="profile-title">
            <Title content="AmsterCats Profiles" />
          </div>
          <h1 id="Amstercats-title"> All Amstercats </h1>
          <div class="cats-profiles">
            <ul v-for="cat in cats">
              <catitem :cat="cat"></catitem>
            </ul>
          </div>
        </div>
      </main>
  </div>
</template>

<style scoped>

  div.page-wrapper{
    padding: 3em;
    color: white;
    background-color: #ad2b34;
  }

  div.intro-text {
    font-size: 150%;
  }

  div.intro-week-wrapper {
    display: flex;
    justify-content: space-between;
    flex-direction: row;
    margin-bottom: 2em;
  }

  div.editor {
    margin: 0 auto;
   }

  div.profile-title {
    margin: 0 auto;
    color: white;
    font-size: 3em;
   }

  div.main-wrapper {
   }

  div.cats-profiles {
    flex-direction: row;
    align-items: stretch;
    flex-wrap: wrap;
    display: flex;
    justify-content: space-around;
   }

  div.sign-in {
    position: relative;
    left: 20px;
  }

  #Amstercats-title {
    text-align: center;
  }

</style>

<script>

import weekcat from './WeekCat.vue'
import catitem from './CatItem.vue'
import login from './login.vue'

export default {
  name: 'catsontainer',
  computed: {
    cats () {
      return this.$store.getters.cats
    }
  },
  template: '<catscontainer/>',
  components: {
    weekcat,
    catitem,
    login
  }
}
</script>
