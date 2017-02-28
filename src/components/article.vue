<template>
  <div class="article" @click="">
    <div>
      <image class="article-bannar" src="http://img1.vued.vanthink.cn/vuedc433556ffc003cdc182a79d7114f6314.png"></image>  
    </div>
    <text class="article-title">{{title}}</text>
    <div class="user-info">
      <image class="user-avatar" :src="user.avatar"></image>  
      <text class="user-name">{{user.username}}</text>
    </div>
    <div class="article-contents">
      <text class="article-contents-p">{{contents}}</text>
    </div>
    <div class="article-feedback">
      <div class="feedback-item">
        <image class="feedback-icon" src="http://img1.vued.vanthink.cn/vueddf4a54a82030df94baaa20d8cca68892.png"></image>
        <text class="number">{{comments}}</text>
      </div>
      <div class="feedback-item">
        <image class="feedback-icon" src="http://img1.vued.vanthink.cn/vued7f6073b9ef97d0d48e79f282837d2b01.png"></image>
        <text class="number">{{love}}</text>
      </div>
    </div>
  </div>
</template>

<style>
  .article{
    padding-bottom: 180px;
  }
  .article-bannar{
    height: 500px;
    margin-bottom: 20px;
  }
  .article-title{
    font-size: 48px;
    font-weight: 500;
    margin: 20px;
  }
  .user-info{
    flex-direction: row;
    padding-left:20px;
    padding-right: 20px;
    align-items: center;
  }
  .user-avatar{
    width: 65px;
    height: 65px;
  }
  .user-name{
    color: #333;
    font-size: 32px;
    margin-left: 20px;
  }
  .article-contents{
    padding: 20px;
    
  }
  .article-contents-h1{
    margin: 20px;
    color: #333;
  }
  .article-contents-p{
    font-size: 36px;
    color: #666;
    line-height: 54px;  
  }
  .article-feedback{
    flex-direction: row;
  }
  .feedback-item{
    align-items: center;
    flex-direction: row;
    padding: 20px;
  }
  .feedback-icon{
    width: 54px;
    height: 54px;
  }
  .number{
    margin-left: 20px;
    font-size: 32px;
    color: #999;
  }
</style>

<script>
export default {
  data() {
    return {
      bannar: 'http://img1.vued.vanthink.cn/vuedc433556ffc003cdc182a79d7114f6314.png',
      user: {
        avatar: 'http://img1.vued.vanthink.cn/vuedb62b733271ae371de437ded63dfc1660.png',
        username: 'Tom'
      },
      title: 'This is title',
      contents: 'Different from "web app" , "HTML5 app" and "hybrid app", you can use Weex to build a real mobile app. More intimate is that you write the code is relatively simple, just use HTML, CSS, Javascript can build native applications.But in fact, the bottom of the application is Objective-C or Java. At the same time, Weex will provide a lot of native components or modules for developers to use.',
      comments: '11.4K',
      love: '12K'
    }
  },
  methods: {
    read() {
      cp
    }
  }
};
  
</script>