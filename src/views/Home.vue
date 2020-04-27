<template>
  <div class="page">
    <header>
      <div class="filter-panel">
        <facet-bar />
        <search-filter />
      </div>
    </header>
    <main class="home">
      <!--
      <color-filter :colors="colors" @facet-select="onFacetSelect"/>
      -->
      <feed :images="images" />
    </main>
    <div class="overlay"></div>
  </div>
</template>

<script>

import api from '@/api'
import backButtonMixin from '@/mixins/back-button';
import facetBar from '@/components/filter-panel/facet-bar';
import searchFilter from '@/components/filter-panel/search-filter'
//import colorFilter from '@/components/color-filter';
import feed from '@/components/feed';
import {mapState, mapMutations, mapActions} from 'vuex';

export default {
  name: 'home',

  components: {
    facetBar,
    searchFilter,
    //colorFilter,
    feed
  },

  mixins: [
    backButtonMixin
  ],

  data: () => ({
    isClean: true,
  }),

  mounted() {
    console.log('mounted');
    this.loadData();
  },

  computed: {
    ...mapState('images', ['images']),
    ...mapState('facets', ['selectedFacets', 'colors'])
  },

  watch: {
    $route: 'loadData',
    selectedFacets: 'updateFeed'
  },

  methods: {
    ...mapMutations({
      extractImages: 'images/EXTRACT_IMAGES',
      extractStyles: 'facets/EXTRACT_STYLES',
      extractColors: 'facets/EXTRACT_COLORS',
    }),

    async loadData() {
      console.log('loadData', this.$route)

      const dimensions = this.$route.params.dimensions;

      if (this.isClean) {
        const facets = await api.getFacets();

        this.$store.commit('facets/SET_ALL_FACETS', facets);
        this.$store.commit('facets/SET_SELECTED_FACETS', dimensions);
      }

      const data = !dimensions ?
        await api.getFeed():
        await api.getDimensions(dimensions);

      this.extractData(data);
      this.isClean = false;
    },

    extractData(data) {
      this.extractImages(data);
      this.extractStyles(data);
      this.extractColors(data);
    },

    updateFeed(code) {
      this.$router.push({
        name: 'dimensions',
        params: {
          dimensions: this.selectedFacets.join('~')
        }});
    }
  }
}
</script>

<style lang="scss" scoped>

.page {
  background: #066;

  header {
    background: #c0c0c0;
    width: 100%;
    position: relative;
    padding: 8px 0;
    z-index: 1;

    .filter-panel {
      background: #c0c0c0;
      width: $page-width;
      height: 48px;
      margin: auto;
      position: relative;
    }
  }
}

main {
  background: $bg-main;
  max-width: $page-width;
  margin: auto;
  padding: .75rem;
}

.overlay {
  background: #000;
  width: 100%;
  height: 100%;
  position: fixed;
  left: 0;
  top: 0;
  opacity: 0.5;
  display: none;
}
</style>
