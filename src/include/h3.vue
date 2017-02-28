<template>
  <div class="h3">
    <text class="h3-text">{{contents}}</text>
  </div>
</template>

<style>
  .h3{
    margin: 20px;
    padding-bottom: 10px;
  }
  .h3-text{
    font-size: 36px;
    color: #222;
  }
</style>

<script>
export default {
  props: {
    contents: {
      default: 'h3',
      type: String
    }
  }

};
</script>