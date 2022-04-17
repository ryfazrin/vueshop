import Vue from 'vue'
import Vuex from 'vuex'
import cart from '@/stores/cart'
import alert from '@/stores/alert'
import auth from '@/stores/auth'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  getters: {
  },
  modules: {
    cart,
    alert,
    auth
  }
})
