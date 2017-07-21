import Vue from 'vue'
import Vuex from 'vuex'
import _ from 'lodash'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    cats: [
      { name: 'Wally', age: 1, breed: 'ragdoll test', summary: 'test test', profilephoto: 'http://res.cloudinary.com/daahasvbo/image/upload/v1489924697/Wally1_kxmjd4.jpg' },
      { name: 'Wally2', age: 1, breed: 'ragdoll test', summary: 'test test', profilephoto: 'http://res.cloudinary.com/daahasvbo/image/upload/v1489924697/Wally1_kxmjd4.jpg' },
      { name: 'Baas', age: 1, breed: 'ragdoll test', summary: 'test test', profilephoto: 'http://res.cloudinary.com/daahasvbo/image/upload/v1489924697/Wally1_kxmjd4.jpg' },
      { name: 'Art', age: 1, breed: 'ragdoll test', summary: 'test test', profilephoto: 'http://res.cloudinary.com/daahasvbo/image/upload/v1489924697/Wally1_kxmjd4.jpg' },
      { name: 'Barney', age: 1, breed: 'ragdoll test', summary: 'test test', profilephoto: 'http://res.cloudinary.com/daahasvbo/image/upload/v1489924697/Wally1_kxmjd4.jpg' },
      { name: 'Billy', age: 1, breed: 'ragdoll test', summary: 'test test', profilephoto: 'http://res.cloudinary.com/daahasvbo/image/upload/v1489924697/Wally1_kxmjd4.jpg' },
      { name: 'Fredje', age: 1, breed: 'ragdoll test', summary: 'test test', profilephoto: 'http://res.cloudinary.com/daahasvbo/image/upload/v1489924697/Wally1_kxmjd4.jpg' },
      { name: 'mattie', age: 1, breed: 'ragdoll test', summary: 'test test', profilephoto: 'http://res.cloudinary.com/daahasvbo/image/upload/v1489924697/Wally1_kxmjd4.jpg' }
    ],
    cat: null
  },
  getters: {
    cats (state) {
      return state.cats
    }
  },
    // cat (state) {
    //   state.cats.find(cat => {
    //     return cat.id === catId
    //   })
    // }
  // },
  mutations: {
    FETCH_CATS (state, cats) {
      state.cats = cats
    },
    ADD_CAT (state, cat) {
      state.cats.push(cat)
    },
    REMOVE_CAT (state, cat) {
      // find the index of the object that needs to be removed from array
      let index = _.findIndex(state.cats, { _id: cat._id })
      // remove the object at position [index] from array
      state.cats.$remove(state.cats[index])
    }
  }
})
