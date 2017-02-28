<template>
  <div class="container">
    <search-bar></search-bar>
    <tabbar :items="tabs"></tabbar>
    <div class="map">
      <box-item v-for="item in list" :key="item.id" :name="item.name" :share-count="item.shareCount"></box-item>
    </div>
    <footer active="1"></footer>
  </div>
</template>

<style>
  .container{
    position: relative;
    flex:1;
    flex-direction: column;
    padding-top: 88px;
    background-color: #e3e3e3;
  }
  .map{
    flex: 1;
    flex-direction: row;
    flex-wrap: wrap;
    position: relative;
    min-height: 400;
    
  }
  
</style>

<script>
  import searchBar from './include/search-bar.vue';
  import tabbar from './include/tab-bar.vue'
  import footer from './include/footer.vue';
  import cardItem from './components/card-item.vue';
  module.exports = {
    components: {
      'search-bar': searchBar,
      'footer': footer,
      'box-item': cardItem,
      'tabbar': tabbar
    },
    data() {
      var list = [];
      for(var i=0; i<20; i++) {
        list.push({
          id: i + 1,
          name: '商品' + (i+1),
          shareCount: '1' + i + '.3' + i + 'K',  
        });
      }
      return {
        list: list,
        tabs: [
          {
            name: 'Tab1'
          },
          {
            name: 'Tab2'
          },
          {
            name: 'Tab3'
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
