import * as services from '../services'

export const fetchCats = function ({commit}) {
  // Call the cats service on the server via websocket
  services.catService.find({}).then(cats => {
    commit('FETCH_CATS', cats.data)
  })
}

export const addCat = function ({commit}) {
  // A new cat has been created on the server, so dispatch a mutation to update our state/view
  services.catService.on('created', cat => {
    commit('ADD_CAT', cat)
  })
}

export const removeCat = function ({dispatch}) {
  // A cat has been removed from the server, so dispatch a mutation to update our state/view
  services.catService.on('removed', cat => {
    dispatch('REMOVE_CAT', cat)
  })
}
