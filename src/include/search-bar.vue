<template>
  <div class="search-bar">
    <div v-if="back" class="btn-back" @click="goHome">
      <image class="btn-arrow-left" src="http://img1.vued.vanthink.cn/vued9c8e7e738ff94abee23eb69d7f1401e9.png"></image>
      <text class="btn-text">返回</text>
    </div>
    
    <div class="input-wrap">
      <input class="input" @change="change" placeholder="Search..."/>
      <div class="btn-search" @click="searchEvent">
        <image style="width:54px;height:54px;" src="http://img1.vued.vanthink.cn/vuedea56601586fafc6cb665126938506b35.png"></image>
      </div>
    </div>
  </div>
</template>
<style>
  .search-bar{
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    display:flex;
    flex-direction: row;
    height: 88px;
    background-color: #1ba1e2;
    align-items: center;
    justify-content: center;
    border-bottom-width: 2px;
    border-bottom-color: #ddd;
    
  }
  .btn-back{
    z-index:10;
    flex-direction: row;
    align-items: center;
    width: 180px;
  }
  .btn-arrow-left{
    width: 60px;
    height: 60px;
    margin-left: 10px;
  }
  .btn-text{
    color: #0f89f5;
  }
  .input-wrap{
    flex: 1;
    flex-direction: row;
    justify-content: center;
    margin-left: 20px;
    margin-right: 80px;
    height: 58px;
    padding-left: 20px;
    font-size: 24px;
    background-color: #fff;
    border-width: 0;
    border-radius: 5px;
  }
  .input{
    flex: 1;
    font-size: 24px;
  }
  .btn-search{
    width: 54px;
    height: 54px;
  }
</style>
<script>
  const navigator = weex.requireModule('navigator');
  module.exports = {
    props: {
      title: {
        default: 'Title',
        type: String
      }
    },
    methods: {
      goHome() {
        navigator.pop();
      }
    }   
  }
</script>