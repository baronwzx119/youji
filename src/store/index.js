import Vue from 'vue'
import Vuex from 'vuex'
import { getObjective } from '../service/service'
Vue.use(Vuex)

const state = {
  count: 1,
  show: true,
  Objective: []
}

export default new Vuex.Store({
  state,
  getters: {},
  mutations: {
    Objective (state, res) {
      if (res.items.length > 0) {
        state.Objective = res.items
      }
    }
  },
  actions: {
    getObjective ({ commit, state }) {
      let res = getObjective()
      commit('Objective', res)
    }
  }
})
