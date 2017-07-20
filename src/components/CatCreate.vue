<template>
    <div class="create-wrapper">
    <form name="createForm" v-on:submit.prevent="onSubmitHandler">
        <div class="preview-block create-block submit-block">
            <header class="preview-header">
                <h2>Add an AmsterCat!</h2>
            </header>
            <div class="preview-content">
                <ul class="form-layout">
                    <p>
                        <input v-model="newCat.name" placeholder="name of your cat" type="text" name="cat name" autofocus />
                    </p>
                    <p>
                        <input v-model="newCat.age" placeholder="age of your cat" type="number" name="cat age" />
                    </p>
                    <p>
                        <input v-model="newCat.breed" placeholder="breed of your cat" type="text" name="cat breed" />
                    </p>
                    <p>
                        <input v-model="newCat.summary" placeholder="describe your cat" type="text" name="cat summary" />
                    </p>
                    <p>
                        <input v-model="newCat.profilephoto" placeholder="URL profilephoto of your cat" type="text" name="cat photo" />
                    </p>
                </ul>
                <error-message v-if="error" v-model="error"></error-message>
            </div>
        </div>
        <input type="submit" value="Submit cat" class="button btn-success big" />
    </form>
    <p>The cat you are about to add is a <strong> {{ newCat.breed }} </strong> named <strong> {{ newCat.name }} </strong> whom is <strong> {{ newCat.age }} </strong> years old. </p>
    <p> About <strong> {{ newCat.name }}: {{ newCat.summary }} </strong> </p>
    <p> URL: <strong> {{ newCat.profilephoto }} </strong> </p>
    <ul>
      <li v-for="cat in cats">
        <span>{{ cat.name }}</span>
        <span v-on:click="tryRemoveCat(cat)">x</span>
      </li>
    </ul>
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
          age: '',
          breed: '',
          summary: '',
          profilephoto: ''
        },
        error: false,
        cats: []
      }
    },
    mount () {
      this.fetchCats()
      this.addCat()
      this.removeCat()
    },
    methods: {
      onSubmitHandler: function (e) {
        console.log(this.newCat)
        Promise.all([
          services.catService.create({ ...this.newCat }).then(this.newCat = {})
        ])
          .then(results => {
            console.log('created Cat item\n', results[0])

            // return users.find()
            //   .then(results => console.log('find all items\n', results));
          })
          .catch(err => console.log('Error occurred:', err))
      },
      tryRemoveCat (cat) {
        // Remove cat from the db
        services.catService.remove(cat)
      }
    }
  }
</script>
