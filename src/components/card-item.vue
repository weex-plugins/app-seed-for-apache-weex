<template>
  <div class="card">
    <image class="card-cover" src="http://img1.vued.vanthink.cn/vuedf9246c2edc2e4f1fc7caabf6cc84f719.png"></image>
    <div class="card-detail">
      <text class="card-name">{{name}}</text>
      <div class="share-contents">
        <image class="icon-share" src="http://img1.vued.vanthink.cn/vued823de5c04e0cc944dede20370bee354d.png"></image>
        <text class="share-count">{{shareCount}}</text>
      </div>
    </div>
  </div>
</template>

<style>
  .card {
    flex: 0.5;
    padding: 10px;
    margin: 10px;
    border: 1px solid #ddd;
    border-bottom: 2px solid rgba(0,0,0,.3);
    min-width: 240px;
    min-height: 120px;
    background-color: #fff;
  }
  .card-cover{
    height: 200px;
    margin-bottom: 20px;
    border:2px solid #eee;
  }
  .card-detail{
    flex-direction: row;  
  }
  .card-name{
    flex: 1;
    font-size: 30px;
    color: #555;
    font-weight: bold;
  }
  .share-contents{
    flex: 1;
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;
  }
  .icon-share{
    width: 36px;
    height: 36px;
  }
  .share-count{
    margin-left: 10px;
    font-size: 24px;
    color: #999;
  }
</style>

<script>
export default {
  props: {
    name: {
      default: ''
    },
    shareCount: {
      default: ''
    }
  }
};
</script>