import Vue from 'vue'
import Vuex from 'vuex'
import facets from './modules/facets'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    facets
  }
})
