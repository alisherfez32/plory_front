import { createStore } from 'vuex'

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
  },
  modules: {
  }
})
