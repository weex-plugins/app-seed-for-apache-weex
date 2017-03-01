<template>
  <div class="container">
    <navbar title="WEEX-APP-SEED"></navbar>
    <scroller class="map">
      <loading-item v-for="item in list" :key="item.id" url="./pages/article.js"></loading-item>
    </scroller>
    <footer active="0"></footer>
  </div>
</template>

<style>
  .container{
    position: relative;
    flex:1;
    flex-direction: column;
    background-color: #e3e3e3;
  }
  .map{
    flex: 1;
    position: relative;
    background-color: #e3e3e3;
    padding-top: 88px;
    min-height: 400;
    border-bottom-width: 10;
    border-bottom-color: #fff;
  }
  
</style>

<script>
  import navbar from './include/navbar.vue';
  import footer from './include/footer.vue';
  import loadingItem from './include/loading-list-item.vue';
  module.exports = {
    components: {
      'navbar': navbar,
      'footer': footer,
      'loading-item': loadingItem
    },
    data() {
      return {
        list:[
          {
            id: '1',
            user: {
              avatar: '',
              username: ''
            },
            contents: {
              
            }
          },
          
          {
            id: '2',
            user: {
              avatar: '',
              username: ''
            },
            contents: {
              
            }
          },
          {
            id: '3',
            user: {
              avatar: '',
              username: ''
            },
            contents: {
              
            }
          }
          
        ]
      };
    },
    methods: {
      change(event) {
        this.place = event.value;
      },
      
      changeType(q) {
        this.type = q;
      }
    }
  }
</script>
