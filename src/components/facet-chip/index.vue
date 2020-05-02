<template>
  <a href="#"
    class="facet-chip"
    :class=[item.type]
    @click.stop.prevent
  >{{item.name}}</a>
</template>

<script>

export default {
  name: 'facet-chip',

  props: {
    item: {
      type: Object,
      default: () => ({})
    }
  }
}
</script>

<style lang="scss" scoped>

.facet-chip {
  font-size: 1rem;
  color: #000;
  //border: 1px solid #c0c0c0;
  border-radius: 4px;
  display: inline-block;
  position: relative;
  margin: 0 4px 0 0;
  padding: 2px 12px 4px 12px;
  position: relative;

  &::after {
    content: 'x';
    color: #c0c0c0;
    margin-left: 8px;
  }

  &:hover {
    border: 1px solid #808080;

    &:after {
      color: #c00;
    }
  }

  &.rooms {
    background: $color-accent--default;
  }

  &.style {
    background: $color-accent--style;
  }

  &.color {
    background: $color-accent--color;
  }
}
</style>