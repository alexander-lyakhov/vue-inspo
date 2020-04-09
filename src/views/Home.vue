<template>
  <main class="home">
    <color-filter :colors="colors"/>
    <feed :images="images" />
  </main>
</template>

<script>

import api from '@/api'
import colorFilter from '@/components/color-filter';
import feed from '@/components/feed';
import {mapState, mapMutations} from 'vuex';

export default {
  name: 'home',

  components: {
    colorFilter,
    feed
  },

  data() {
    return {
      facets: [],
      colors: [],
      images: [],
      dimansions: null
    }
  },

  mounted() {
    console.log('mounted');
    this.isClean = true;
    this.init();
  },

  computed: {
    ...mapState('facets', ['selectedFacets'])
  },

  watch: {
    $route: 'init',

    selectedFacets(codes) {
      const dimansions = codes.join('~');

      if (this.dimansions !== dimansions) {
        this.$router.push({name: 'dimansions', params: {dimansions}});
      }
    }
  },

  methods: {
    ...mapMutations({
      saveSelectedFacets: 'facets/SELECT_MULTIPLE_FACETS'
    }),

    async init() {
      console.log('init', this.$route)

      const dimansions = this.dimansions = this.$route.params.dimansions;

      const data = !dimansions ?
        await api.getFeed():
        await api.getDimansions(dimansions);

      if (this.isClean) {
        this.facets = await api.getFacets();
        this.saveSelectedFacets(dimansions);
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
  }
}
</script>

<style lang="scss" scoped>

main {
  background: $bg-main;
  width: $page-width;
  margin: auto;
  padding: .75rem;
}
</style>
