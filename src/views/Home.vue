<template>
  <main class="home" v-lazy-container="{ selector: 'img' }">
    <img v-for="(image, index) in images" :key="index" :data-src="image" />
  </main>
</template>

<script>

const baseURL = 'https://photos.hgtv.com'

import api from '@/api'

export default {
  name: 'home',

  components: {
  },

  data() {
    return {
      images: []
    }
  },

  async mounted() {
    console.log('mounted')

    await api.getFacets().then(data => data);
    await api.getImages().then(this.extractImages)
  },

  methods: {
    extractImages(data) {
      const records = data.ServiceResponse.results.records;

      //console.log('extractImages', records)

      this.images = records.map(item =>
        item.CORE_PROMO_IMAGE_URL ?
          baseURL + item.CORE_PROMO_IMAGE_URL[0]:
          baseURL + item.CORE_CRX_PATH[0]
      )
    }
  }
}
</script>

<style lang="scss" scoped>

main {
  background: $bg-main;
  width: $page-width;
  margin: auto;
  padding: .75rem;

  img {
    margin: 0 0 .75rem;
    width: 100%;
  }
}
</style>
