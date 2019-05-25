import Vue from 'vue'
import Vuex from 'vuex'
import api from '@/api/index'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    productsList: [],
    orderList: []
  },
  getters: {
    productsObj: (state) => {
      let res = {}
      state.productsList.forEach(el => {
        res[el.id] = el
      })
      return res
    }
  },
  mutations: {
    'SET_PRODUCTS_LIST': (state, data) => {
      state.productsList = data
    },
    'SUBMIT_ORDER': (state, data) => {
      state.orderList = [...state.orderList, data]
    }
  },
  actions: {
    getProductsList ({ commit }, payload) {
      api.getProductsList().then(res => {
        commit('SET_PRODUCTS_LIST', res.data)
      })
    }
  }
})
