<template>
<div class="footer">
  <div class="footer-item" v-for="(item, index) in items" :key="item.url" @click="changeUrl(index)">
    <image class="footer-item-icon" :src="item.icon"></image>
    <text v-if="active!=index" class="btn-sm-text">{{item.name}}</text>
    <text v-if="active==index" class="btn-sm-text active">{{item.name}}</text>
  </div>
</div>
</template>

<style>
.footer{
  flex-direction: row;
  align-items: center;
  z-index: 200;
  position:fixed;
  bottom: 0;
  left:0;
  right:0;
  height: 100px;
  line-height: 100px;
  background-color: #fff;
  border-top-width: 1;
  border-top-style: solid;
  border-top-color: rgba(0,0,0,.15);
}
.footer-item{
  flex: 1;
  justify-content: center;
  align-items: center;
}
.footer-item-icon{
  width: 54px;
  height: 54px;
}
.btn-sm-text{
  color: #777;
  font-size: 20px;
}
.active{
  color: #1ba1e2;
}
</style>

<script>
import helper from '../lib/helper';
const navigator = weex.requireModule('navigator'); 
  
export default {
  props: {
    active: {
      default: 0,
    }
  },
  data() {
    return {
      type: '',
      items: [
        {
          name: 'Home',
          url: 'home.js',
          icon: 'http://img1.vued.vanthink.cn/vued40a1db1fb50417e72fc59c3535de9d1f.png'
        },
        {
          name: 'Shop',
          url: 'shop.js',
          icon: 'http://img1.vued.vanthink.cn/vuede3edd4e57e450d00b3fa0e0fd82bc6af.png'
        },
        {
          name: 'Video',
          url: 'video.js',
          icon: 'http://img1.vued.vanthink.cn/vueda026977b63cd85ebbcc0309a2f592082.png'
        },
        {
          name: 'Profile',
          url: 'profile.js',
          icon: 'http://img1.vued.vanthink.cn/vued78336017bc3e794059a4fea0fe1450f9.png'
        }
      ]
    }
  },
  
  methods: {
    changeUrl(index) {
      console.log(this.items[index].url);
      const url = helper.setBundleUrl(this.items[index].url, weex);
      console.log(url);
      navigator.push({
        url: url
      });
    }
  }
};

</script>