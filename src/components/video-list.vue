<template>
  <div class="video-list">
    <div class="video-list-item" v-for="item in items">
      <div class="video-item-main">
        <image class="video-item-cover" :src="item.cover"></image>
        <div class="video-item-desc">
          <text class="video-name">{{item.title}}</text>
          <div class="video-upload-info">
            <image class="icon-upload" src="http://img1.vued.vanthink.cn/vued5f365239dd87f0d91e314ab96d40e669.png"></image>
            <text class="video-upload-date">{{item.upload_date}}</text>
          </div>
        </div>
      </div>
      <div class="video-item-ft">
        <div class="video-item-producer">
          <image class="producer-avatar" :src="item.producer.avatar"></image>
          <text class="producer-name">{{item.producer.username}}</text>
        </div>
        <div class="video-item-social">
          <text class="social-number">{{item.views}}</text>
          <text class="scial-label">Views</text>
          <text class="social-number" style="margin-left:10px;">{{item.comments}}</text>
          <text class="scial-label">Comments</text>
        </div>
      </div>
      
    </div>
  </div>
</template>

<style>
  .video-list{
    position: relative;
    border-top: 1px solid rgba(0,0,0,.2);
  }
  .video-list-item{
    padding: 20px;
    border-bottom: 1px solid rgba(0,0,0,.3);
  }
  .video-item-main{
    flex-direction: row;
  }
  .video-item-cover{
    width: 220px;
    height: 120px;
  }
  .video-item-desc{
    flex-direction: column;
    margin-left: 40px;
  }
  .video-upload-info{
    margin-top: 20px;
    flex-direction: row;
  }
  .icon-upload {
    width: 36px;
    height: 36px;
  }
  .video-upload-date{
    margin-left: 20px;
    font-size: 24px;
    color: #777;
  }
  .video-item-ft{
    flex-direction: row; 
    margin-top: 20px;
  }
  .video-item-producer{
    flex: .6;
    flex-direction: row;
  }
  .producer-avatar {
    width: 36px;
    height: 36px;
  }
  .producer-name{
    margin-left: 20px;
    font-size: 24px;
    color: #888;
  }
  .video-item-social{
    flex: .4;
    flex-direction: row;
    align-items: center;
  }
  .social-number{
    color: #444;
    font-size: 24px;
  }
  .scial-label{
    margin-left: 5px;
    color: #999;
    font-size: 20px;
  }
  
</style>

<script>
export default {
  props: {
    items: {
      default: []
    }
  }
};

</script>