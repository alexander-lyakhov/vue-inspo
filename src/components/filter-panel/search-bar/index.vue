<template>
  <div class="search">
    <div class="search-input">
      <input type="text" />
      <svg style="width:24px;height:24px" viewBox="0 0 24 24">
        <path fill="currentColor" d="M9.5,3A6.5,6.5 0 0,1 16,9.5C16,11.11 15.41,12.59 14.44,13.73L14.71,14H15.5L20.5,19L19,20.5L14,15.5V14.71L13.73,14.44C12.59,15.41 11.11,16 9.5,16A6.5,6.5 0 0,1 3,9.5A6.5,6.5 0 0,1 9.5,3M9.5,5C7,5 5,7 5,9.5C5,12 7,14 9.5,14C12,14 14,12 14,9.5C14,7 12,5 9.5,5Z" />
      </svg>
    </div>
  </div>
</template>

<script>
export default {
  name: 'search-bar'
}
</script>

<style lang="scss" scoped>
.search {
  background: #fff;
  display: flex;
  //align-items: center;
  width: auto;
  height: 100%;
  padding: 4px;
  &-input {
    border: 4px solid #e0e0e0;
    outline: none;
    display: flex;
    align-items: center;
    width: 100%;
    position: relative;
    padding: 0px 32px 0px 0px;

    [type=text] {
      font: .875rem $font-primary;
      color: #404040;
      //background: #f0f0f0;
      border: none;
      outline: none;
      width: 100%;
      height: 100%;
      padding: 0 8px;
    }

    svg {
      color: #808080;
      position: absolute;
      right: 4px;
      cursor: pointer;

      &:hover {
        color: #404040;
      }
    }
  }
}
</style>