import Vue from 'vue'
import Vuex from 'vuex'
import images from './modules/images'
import facets from './modules/facets'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    images,
    facets
  },

  actions: {
    EXTRACT_DATA({commit}, data) {
      console.log('root EXTRACT_DATA', data);

      commit('images/EXTRACT_IMAGES', data);
      commit('facets/EXTRACT_STYLES', data);
      commit('facets/EXTRACT_COLORS', data);
    }
  }
})
