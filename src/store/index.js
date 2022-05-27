import { createStore } from 'vuex'

export default createStore({
  state: {
    isLoading: false,
    isSlidebar: false,
    isImage: false,
    imageSrc: "https://media.istockphoto.com/photos/concept-image-of-a-magnifying-glass-on-blue-background-with-a-word-picture-id1316134499?k=20&m=1316134499&s=170667a&w=0&h=aF_m0riVqEF8lNjtoNE5Cdq0b1tq4S6tifzLz9DAOBQ=",
    node: []
  },
  mutations: {
    initializeStore() {
    },
    setIsLoading(state, status){
      state.isLoading = status
    },
    setIsImage(state, status) {
      state.isImage = status
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
