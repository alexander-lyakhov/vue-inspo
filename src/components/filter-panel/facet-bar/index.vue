<template>
  <ul class="facet-bar">
    <filter-button type="default" @toggle="onToggle">
      Shop The Look
    </filter-button>

    <filter-button type="default" @toggle="onToggle">
      Rooms
    </filter-button>

    <filter-button type="style" :items="styles" @toggle="onToggle">
      Styles
    </filter-button>

    <filter-button type="color" :items="colors" @toggle="onToggle">
      Colors
    </filter-button>
  </ul>
</template>

<script>

import filterButton from './facet-bar-item';
import {mapState} from 'vuex';

export default {
  name: 'facet-bar',

  components: {
    filterButton
  },

  data: () => ({
    activeItem: null
  }),

  computed: {
    ...mapState('facets', ['styles', 'colors'])
  },

  methods: {
    onToggle(target) {
      if (this.activeItem && this.activeItem !== target) {
        this.activeItem.close();
      }
      this.activeItem = target;
    },
  }
}
</script>

<style lang="scss" scoped>

.facet-bar {
  display: flex;
  height: 100%;
  float: left;
}


</style>