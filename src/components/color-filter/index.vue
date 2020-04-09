<template>
  <div class="facets-filter">
    <color-facet
      v-for="(color, index) in colors"
      :color=color
      :key="color.code"
      @click="onColorClick"
    />
  </div>
</template>

<script>

import colorFacet from '@/components/color-facet';

export default {
  name: 'color-filter',

  components: {
    colorFacet
  },

  props: {
    colors: {
      type: Array,
      default: []
    }
  },

  mounted() {
    console.log('filter mounted', this.colors)
  },

  methods: {
    onColorClick(facet) {
      this.$store.commit('facets/SELECT_SINGLE_FACET', facet.code);
    }
  }
}
</script>

<style lang="scss" scoped>

.facets-filter {
  display: flex;
  flex-wrap: wrap;
  padding: .5rem 0 .75rem;
  //position: fixed;
}
</style>
