<template>
  <div class="loading-item" @click="redirect" :url="url"> 
    <image class="loading-image" src="http://img1.vued.vanthink.cn/vued6d27c6be53c90c9392eb08e95af60f41.png"></image>
  </div>
</template>

<style>
  .loading-item{
    height: 360px;
    margin: 20px;
    margin-bottom: 0px;
    background-color: #fff;
    border-width:1;
    border-bottom-width: 2px;
    border-color: rgba(0,0,0,.2);
  }
  .loading-image{
    height: 500px;
  }
</style>

<script>
import helper from '../lib/helper';
const navigator = weex.requireModule('navigator');
export default {
  props: {
    url: {
      default: '',
      type: String
    }
  },
  methods: {
    redirect() {
      const url = helper.setBundleUrl(this.url, weex);
      navigator.push({
        url: url
      });  
    }
  }
};

</script>
