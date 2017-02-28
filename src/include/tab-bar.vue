<template>
  <div class="tabs">
    <div class="tab" v-for="(item, index) in items" @click="tabClick(index)">
      <text v-if="tabIndex != index" class="tab-text">{{item.name}}</text>
      <text v-if="tabIndex == index" class="tab-text active">{{item.name}}</text>
    </div>    
  </div>
</template>
<style>
  .tabs{
    flex-direction: row;
    height: 88px;
    background-color: #fff;
    border-bottom: 2px solid rgba(0,0,0,.25);
  }
  .tab{
    flex: 1;
    justify-content: center;
    align-items: center;
  }
  .tab-text{
    colro: #444;
  }
</style>
<script>
export default {
  props: {
    items: {
      default: []  
    }
  },
  data() {
    return {
      tabIndex: 0
    }
  },
  methods: {
    tabClick(index) {
      this.tabIndex = index;
      this.$emit('tabClick', index)
    }
  }
};
  
</script>