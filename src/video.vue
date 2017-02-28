<template>
  <div class="container">
    <navbar title="The Guardian"></navbar>
    <scroller class="map">
      <jp-video></jp-video>
      <h3 contents="Recomand"></h3>
      <video-list :items="recList"></video-list>
    </scroller>
    <footer active="2"></footer>
  </div>
</template>

<style>
  .container{
    position: relative;
    flex:1;
    flex-direction: column;
    background-color: #fff;
    padding-top: 88px;
  }
  .map{
    flex: 1;
    position: relative;
    min-height: 400;
    border-bottom-width: 10;
    border-bottom-color: #fff;
  }
  .profile-bannar{
    height: 380px;
    align-items: center;
    justify-content: center;
    background-image: linear-gradient(to left,#00c6ff , #0072ff);
  }
  .profile-avatar{
    width: 200px;
    height: 200px;
    margin-bottom: 20px;
  }
  .profile-username{
    font-size: 40px;
    font-weight: 100;
    color: #fff;
  }
  
  .profile-groups{
    margin-top: 40px;
    padding-top: 10px;
    padding-left: 20px;
    padding-right: 20px;
    background-color: #fff;
    border-top:2px solid rgba(0,0,0,.1);
    border-bottom: 2px solid rgba(0,0,0,.3);
  }
  .profile-groups-item{
    height: 90px;
    justify-content: center;
    border-bottom: 2px solid rgba(0,0,0,.1);
    color: #555;
  }
</style>
<script>
  import navbar from './include/navbar.vue';
  import footer from './include/footer.vue';
  import h3 from './include/h3.vue';
  import Video from './components/video.vue';
  import videoList from './components/video-list.vue';
  module.exports = {
    components: {
      'navbar': navbar,
      'footer': footer,
      'jp-video': Video,
      'h3': h3,
      'video-list': videoList
    },
    data() {
      return {
        user: {
          avatar: 'http://img1.vued.vanthink.cn/vued4eff4743ed47b7d8add8e7969a5d16cd.png',
          username: 'Tom'
        },
        recList: [
          {
            cover: 'http://img1.vued.vanthink.cn/vued894e9f0de251af913f115b6a494e1650.png',
            title: 'Kung Fu Hustle',
            comments: '15k',
            views: '224K',
            upload_date: '2004-1-26',
            producer: {
              avatar: 'http://img1.vued.vanthink.cn/vued058dd8bc2314a8bdeee12de7749a859a.png',
              username: 'Coloumn Pictures'
            }
          },
          {
            cover: 'http://img1.vued.vanthink.cn/vued2591e41f36bafb15ade52def89a245d3.png',
            title: 'Captain America 3',
            comments: '28k',
            views: '445K',
            upload_date: '2016-5-24',
            producer: {
              avatar: 'http://img1.vued.vanthink.cn/vued9bbaa9de16747dda754b75bf96e34b83.png',
              username: 'Marvel Studio'
            }
          }
          
        ]
      }
    },
    methods: {
    }
  }
</script>
