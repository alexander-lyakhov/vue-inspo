<template>
  <li class="facet-bar__item" @click.prevent="onClick">
    <a href="#" class="facets-filter__button" :class="[{'active': isActive}, type]">
      <span><slot></slot></span>

      <div class="facet-list" v-show="isActive">
        <div class="facet-list__container">
          <facet-list-item
            v-for="item in items"
            :key="item.code"
            :item="item"
            :type="type"
            @click="onFacetSelect"
          />
        </div>
      </div>
    </a>
  </li>
</template>

<script>

import facetListItem from './facet-list-item';

export default {
  name: 'facet-bar-item',

  components: {
    facetListItem
  },

  props: {
    type: {
      type: String,
      default: 'default'
    },

    items: {
      type: Array,
      default: () => ([])
    }
  },

  data: () => ({
    isActive: false
  }),

  methods: {
    close() {
      this.isActive = false;
    },

    onClick(e) {
      this.$emit('toggle', this)
      this.isActive = !this.isActive;
    },

    onFacetSelect(facet) {
      this.$store.commit('facets/SELECT_FACET', facet.code);
    }
  }
}
</script>

<style lang="scss" scoped>

.facet-bar__item {
  display: flex;
  height: 100%;
  margin: 0;
}

.facets-filter__button {
  font-size: 1.125rem;
  color: #333;
  background: #fff;
  border-right: 1px solid #e0e0e0;
  min-width: 128px;
  padding: 4px;

  span {
    background: #e0e0e0;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    position: relative;
    overflow: hidden;
    padding: 0 .75rem;
  }

  &.default.active span {
    color: #333;
    background: $color-accent--default;
    background: linear-gradient(to bottom, $color-accent--default, $color-accent--default-darken);
  }
  &.style.active span {
    color: #333;
    background: $color-accent--style;
    background: linear-gradient(to bottom, $color-accent--style, $color-accent--style-darken);
  }
  &.color.active span {
    color: #333;
    background: $color-accent--color;
    background: linear-gradient(to bottom, $color-accent--color, $color-accent--color-darken);
  }

  .facet-list {
    background: #808080;
    position: absolute;
    left: 0;
    top: 100%;
    z-index: 1;
    margin-top: 8px;
    //padding: 4px 0 0 0;
    padding: 2px 4px 4px;

    &__container {
      font-size: 1rem;
      display: flex;
      flex-wrap: wrap;
    }
  }
}

</style>