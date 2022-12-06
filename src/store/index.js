import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    theme: "light",
  },
  getters: {
    getTheme(state){
      return state.theme;
    }
  },
  mutations: {
    modifyTheme(state){
      state.theme = state.theme === "light" ? "dark" : "light";
    }
  },
  actions: {
    switchTheme({commit}){
      commit('modifyTheme');
    }
  },
  modules: {
  }
})
