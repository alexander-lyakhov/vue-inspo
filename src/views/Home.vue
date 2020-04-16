<template>
  <main class="home">
    <color-filter :colors="colors" @facet-select="onFacetSelect"/>
    <feed :images="images" />
  </main>
</template>

<script>

import api from '@/api'
import backButtonMixin from '@/mixins/back-button';
import colorFilter from '@/components/color-filter';
import feed from '@/components/feed';
import {mapState, mapMutations} from 'vuex';

export default {
  name: 'home',

  components: {
    colorFilter,
    feed
  },

  mixins: [
    backButtonMixin
  ],

  data() {
    return {
      facets: [],
      colors: [],
      images: [],
      dimensions: null,
      isClean: true,
    }
  },

  mounted() {
    console.log('mounted');
    this.loadData();
  },

  computed: {
    ...mapState('facets', ['selectedFacets'])
  },

  watch: {
    $route: 'loadData',
  },

  methods: {
    async loadData() {
      console.log('loadData', this.$route)

      const dimensions = this.dimensions = this.$route.params.dimensions;

      const data = !dimensions ?
        await api.getFeed():
        await api.getDimensions(dimensions);

      if (this.isClean) {
        this.facets = await api.getFacets();
        this.$store.commit('facets/SET_SELECTED_FACETS', dimensions);
      }

      this.extractData(data);
      this.isClean = false;
    },

    extractData(data) {
      this.extractImages(data);
      this.extractColors(data);
    },

    extractImages(data) {
      const records = data.ServiceResponse.results.records;

      this.images = records.map(item =>
        item.CORE_PROMO_IMAGE_URL ?
          item.CORE_PROMO_IMAGE_URL[0] + '.rend.hgtvcom.651.651.jpeg':
          item.CORE_CRX_PATH[0] + '.rend.hgtvcom.651.651.jpeg'
      )
    },

    extractColors(data) {
      const colors = data.ServiceResponse.results.facets[2].COLOR_SFACET;

      this.colors = colors.map(item => {
        return {
          ...item,
          name: item.Value.replace(/.*:(\D*$)/i, '$1'),
          code: this.facets.find(el => el.value === item.Value).index
        }
      })
    },

    onFacetSelect(code) {
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

main {
  background: $bg-main;
  max-width: $page-width;
  margin: auto;
  padding: .75rem;
}
</style>
