<template>
  <div class="container">
    <navbar back="true" title="Beijing China"></navbar>
    <weex-amap class="map" id="map2017" :search="search" :sdk-key="keys" :zoom=zoom :center="pos">
      <weex-amap-marker :position="marker.position" :title="marker.title"></weex-amap-marker>
    </weex-amap>
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
    background-color: #fff;
    min-height: 400;
    border-bottom-width: 10;
    border-bottom-color: #fff;
  }
</style>

<script>
  import navbar from '../include/navbar.vue';
  var Amap = null;
  try {
    Amap = weex.requireModule('amap');
  } catch(err) {
    console.log(err);
  }
  var modal = weex.requireModule('amap');
  Amap.setSDKKey({
    h5:'f4b99dcd51752142ec0f1bdcb9a8ec02',
    ios: '',
    android: 'db6a973159cb0c2639ad02c617a786ae'
  });
  module.exports = {
    components: {
      'navbar': navbar
    },
    data() {
      return {
        pos: [104.093731,30.675117],
        zoom: 15,
        marker: {
          position: [104.193731,30.675117],
          title: 'Tom\' house'
        },
      };
    }
  }
</script>
