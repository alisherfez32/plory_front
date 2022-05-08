import { createStore } from 'vuex'
import axios from 'axios'

export default createStore({
  state: {
    isLoading: false,
    isSlidebar: false,
    node: []
  },
  mutations: {
    initializeStore() {
    },
    setIsLoading(state, status){
      state.isLoading = status
    },
    setSlidebar(state, status) {
      state.isSlidebar = status
    },
    setRoot(state, payload) {
      state.node = payload
    }
  },
  actions: {
    async getTree({ commit, state }) {
      if (!state.node.length) {
        await axios
          .get('/api/v1/country-tree')
          .then(response => {
            commit("setRoot", response.data)
          })
          .catch(error => {
            console.log("ERROR", error)
          })
      }
      }
  },
  modules: {
  }
})
