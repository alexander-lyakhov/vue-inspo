<template>
  <div class="facet-list__item" :class="[`facet-list__item-${type}`]" @click.stop.prevent>
    <a href="#" class="facet-button">
      <div class="facet-button__content">
        <div v-if="type === 'color'" class="color-sample" :style="`background: ${item.name}`"></div>
        <span>{{item.name}}</span>
      </div>
    </a>
  </div>
</template>

<script>
export default {
  name: 'facets-item',
  props: {
    item: {
      type: Object,
      default: () => ({})
    },

    type: {
      type: String,
      default: 'default'
    }
  }
}
</script>

<style lang="scss" scoped src="./styles-v1.scss" />
