import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    carts: [],
  },
  mutations: {
  },
  actions: {
  },
  getters: {
    carts: state => state.carts
  },
  modules: {
  }
})
