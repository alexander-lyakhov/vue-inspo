<template>
  <a href="#" class="color-facet" :data-color="color.name" @click="onClick">
    {{color.name}}
    <div class="color-facet__sample" :style="{background: color.name}"></div>
  </a>
</template>

<script>

export default {
  name: 'color-facet',

  props: {
    color: {
      type: Object,
      default: {}
    }
  },

  methods: {
    onClick(e) {
      this.$emit('click', this.color);
    }
  }
}
</script>

<style lang="scss">

.color-facet {
  color: #000;
  background: $md-blue-grey-200;
  border-radius: 4px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.25);
  line-height: 1.75rem;
  margin: 0.25rem .5rem 0.25rem 0;
  padding-left: 1.75rem;
  padding-right: .5rem;
  position: relative;

  &:hover {
    background: $md-blue-grey-50;
  }

  &__sample {
    border: 1px solid #000;
    //border-radius: 50%;
    display: block;
    width: .75rem;
    height: .75rem;
    position: absolute;
    left: .5rem;
    top: .5rem;
    z-index: 1;
  }
}

</style>