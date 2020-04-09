export default {
  namespaced: true,

  state: {
    selectedFacets: []
  },

  getters: {
  },

  mutations: {
    SELECT_SINGLE_FACET(state, code) {
      console.log('SELECT_SINGLE_FACET', code)
      state.selectedFacets.push(code);
    },

    SELECT_MULTIPLE_FACETS(state, facets) {
        console.log('SELECT_MULTIPLE_FACETS', facets)
      facets && state.selectedFacets.push(...facets.split('~'));
    }
  },

  actions: {
  }
}