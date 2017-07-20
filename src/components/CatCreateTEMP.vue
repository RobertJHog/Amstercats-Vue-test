<template>
  <div>
    <h1> Websockets </h1>
    <input type="text" placeholder="cat name" v-model="newCat.name" v-on:keyup.enter="tryAddCat">
    <input type="text" placeholder="age of cat" v-model="newCat.age" v-on:keyup.enter="tryAddCat">
    <button type="submit" v-on:click="tryAddCat">Add cat</button>
    <p>The cat you are about to add is: {{ newCat.name }} and {{ newCat.age }} years old.</p>
    <!-- <ul>
      <li v-for="cat in cats">
        <span>{{ cat.name }}</span>
        <span v-on:click="tryRemoveCat(cat)">x</span>
      </li>
    </ul> -->
  </div>
</template>

<script>
  import * as services from '../services'
  import { getCats } from '../store/getters'
  import { fetchCats, addCat, removeCat } from '../store/actions'

  export default {
    store: {
      getters: {
        cats: getCats
      },

      actions: {
        fetchCats,
        addCat,
        removeCat
      }
    },

    data () {
      return {
        newCat: {
          name: '',
          age: ''
        },
        cats: [],
        cat: {}
      }
    },

    ready () {
      this.fetchCats()
      this.addCat()
      this.removeCat()
    },

    methods: {
      tryAddCat () {
        if (this.newCat.name.trim()) {
          // Persist a new cat to the db
          services.catService.create({ name: this.newCat.name }).then(this.newCat.name = '')
          services.catService.create({ age: this.newCat.age }).then(this.newCat.age = '')
        }
      },
      tryRemoveCat (cat) {
        // Remove cat from the db
        services.catService.remove(cat)
      }
    }
  }
</script>
