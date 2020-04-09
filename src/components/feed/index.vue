<template>
  <div class="feed" v-lazy-container="{ selector: 'img' }">
    <div class="img-wrapper" v-for="(image, index) in images" :key="index" >
      <img :data-src="image" />
    </div>
  </div>
</template>

<script>

export default {
  name: 'feed',

  props: {
    images: {
      type: Array,
      default: []
    }
  }
}
</script>

<style lang="scss" scoped>

.feed {
  //background: #fff;
  display: flex;
  flex-wrap: wrap;

  .img-wrapper {
    //background: #088;
    width: 50%;
    margin: 0 0 .75rem 0;
    padding: 0;

    &:nth-child(2n+1) {
      padding-right: 6px;
    }

    &:nth-child(2n) {
      padding-left: 6px;
    }
  }

  img {
    width: 100%;
    height: 100%;
    margin: 0;
  }
}

</style>
