<template>
  <div class="video-container">
    <div class="video">
      <image class="video-contents" src="http://img1.vued.vanthink.cn/vuede7438bc6e898a7a9ed2b45b3db0c352f.jpeg"></image>
      <div class="video-control">
        <div class="video-progrees-bar">
          <div class="video-progrees-hightlight"></div>
        </div>  
      </div>
    </div>
    <div class="video-info">
      <text class="video-title">{{title}}</text>
      <text class="video-rate">{{rate}}</text>
    </div>
    <div class="video-author">
      <div class="author-item">
        <image class="author-avatar" src="http://img1.vued.vanthink.cn/vuedc20586840fac27d4e0ea5acfb2112f57.png"></image>
        <text class="author-name">{{author.username}}</text>
        <text class="author-follower">{{author.follower}}</text>
      </div>
      <div class="video-play-count">
        <image class="icon-video" src="http://img1.vued.vanthink.cn/vueda026977b63cd85ebbcc0309a2f592082.png"></image>
        <text class="play-count">{{playCount}}</text>
      </div>
    </div>
  </div>
  
</template>

<style>
  .video{
    position: relative;
    height: 425px;
    background-color: #000;
  }
  .video-contents{
    height: 425px;
  }
  .video-control{
    position: absolute;
    bottom: 20px;
    left: 20px;
    right: 20px;
    height: 60px;
    justify-content: center;
  }
  .video-progrees-bar{
    position: relative;
    height: 14px;
    background-color: rgba(255,255,255,.7);
    border-radius: 7px;
  }
  .video-progrees-hightlight{
    position: absolute;
    top:0;
    left:0;
    width: 400px;
    height: 14px;
    background-color: rgba(255,255,255,.95);
    border-radius: 7px;
  }
  .video-info{
    margin-top: 20px;
    flex-direction: row;
    justify-content: center;
  }
  .video-title{
    flex: .8;
    padding: 20px;
    font-size: 37px;
    font-weight: 400;
  }
  .video-rate{
    flex: .2;
    padding-top: 20px;
    margin-right: 20px;
    font-size: 37px;
    color: #1ba1e2;
    font-style: italic;
    text-align: right;
    font-weight: 100;
  }
  .video-author{
    flex-direction: row;
  }
  .author-item{
    flex: .7;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    margin-left: 20px;
  }
  .author-avatar{
    width: 54px;
    height: 54px;
  }
  .author-name{
    margin-left: 20px;
    font-size: 36px;
    color: #222;
  }
  .author-follower{
    margin-left: 10px;
    padding: 5px;
    font-size: 20px;
    color: #fff;
    background-color: #1ba1e2;
  }
  .video-play-count{
    flex: .3;
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;
    margin-right: 20px;
  }
  .icon-video{
    width: 54px;
    height: 54px;
  }
  .play-count{
    font-size: 28px;
    color: #555;
    margin-left: 10px;
  }
</style>

<script>
  export default {
    data() {
      return {
        title: 'The Guardian of Galaxy 2',
        rate: '9.7',
        author: {
          avatar: 'http://img1.vued.vanthink.cn/vuedc20586840fac27d4e0ea5acfb2112f57.png',
          username: 'Marvel',
          follower: '50.4K'
        },
        playCount: '20.4K'
      }
    }  
  };
  
</script>