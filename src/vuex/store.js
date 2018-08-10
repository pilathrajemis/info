import Vue from 'vue'
import Vuex from 'vuex'
import products from './modules/products'

Vue.use(Vuex)
const DEBUG = process.env.NODE_ENV !== 'production'




export default new Vuex.Store({
  state: {

  },
  mutations: {

  },
  actions: {

  },
  modules:{
    products
  },
	strict: DEBUG,
})
