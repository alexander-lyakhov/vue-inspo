export default {
  namespaced: true,

  state: {
    selectedFacets: []
  },

  getters: {
  },

  mutations: {
    SELECT_FACET(state, code) {
      console.log('SELECT_FACET', code)

      if (!state.selectedFacets.includes(code)) {
        state.selectedFacets.push(code);
      }
    },

    SET_SELECTED_FACETS(state, facets) {
      console.log('SET_SELECTED_FACETS', facets)

      if (facets) {
        state.selectedFacets = facets.split('~');
      }
    }
  },

  actions: {
  }
}