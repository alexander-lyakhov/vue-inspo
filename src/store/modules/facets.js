const facetNameRegexp = /.*:(.*\/)?(\D*$)/i;
const facetTypeRegexp = /(^\D*):.*/i;

const TYPE = {
  'CUSTOM_FACET': 'custom',
  'ROOMS_AND_SPACES_SFACET': 'rooms',
  'STYLE_SFACET': 'style',
  'COLOR_SFACET': 'color'
}

export default {
  namespaced: true,

  state: {
    facets: [],
    selectedFacets: [],
    styles: [],
    colors: []
  },

  getters: {
    selectedFacetItems(state) {
      return state.facets.filter(item => state.selectedFacets.includes(item.code));
    }
  },

  mutations: {
    SELECT_FACET(state, code) {
      console.log('SELECT_FACET', code)

      if (!state.selectedFacets.includes(code)) {
        state.selectedFacets.push(code);
      }
    },

    SET_ALL_FACETS(state, facets) {
      state.facets = facets.map(item => {
        return {
          ...item,
          type: TYPE[item.value.replace(facetTypeRegexp, '$1')],
          name: item.value.replace(facetNameRegexp, '$2'),
          code: item.index
        }
      })
    },

    SET_SELECTED_FACETS(state, facets) {
      console.log('SET_SELECTED_FACETS', facets)

      if (facets) {
        state.selectedFacets = facets.split('~');
      }
    },

    EXTRACT_STYLES(state, data) {
      console.log('EXTRACT_STYLES', data);

      const styles = data.ServiceResponse.results.facets[3].STYLE_SFACET;

      state.styles = styles.map(item => {
        return {
          ...item,
          name: item.Value.replace(facetNameRegexp, '$2'),
          code: state.facets.find(el => el.value === item.Value).index
        }
      })
    },

    EXTRACT_COLORS(state, data) {
      console.log('EXTRACT_COLORS', data);

      const colors = data.ServiceResponse.results.facets[2].COLOR_SFACET;

      state.colors = colors.map(item => {
        return {
          ...item,
          name: item.Value.replace(facetNameRegexp, '$2'),
          code: state.facets.find(el => el.value === item.Value).index
        }
      })
    }
  },

  actions: {
  }
}