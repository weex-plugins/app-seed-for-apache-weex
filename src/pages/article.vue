<template>
  <div class="container">
    <navbar back="true" title="Preview Article"></navbar>
    <scoller class="map">
      <article></article>
    </scoller>
  </div>
</template>

<style>
  .container{
    position: relative;
    flex:1;
    flex-direction: column;
    background-color: #fff;
  }
  .map{
    flex: 1;
    position: relative;
    min-height: 400;
  }
</style>

<script>
  import navbar from '../include/navbar.vue';
  import article from '../components/article.vue';
  module.exports = {
    components: {
      'navbar': navbar,
      'article': article,
    },
  }
</script>
