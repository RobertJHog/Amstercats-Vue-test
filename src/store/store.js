import Vue from 'vue'
import Vuex from 'vuex'
import _ from 'lodash'

Vue.use(Vuex)

const state = {
  cats: []
}

const mutations = {
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

export default new Vuex.Store({
  state,
  mutations
})
