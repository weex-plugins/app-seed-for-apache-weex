// { "framework": "Vue" } 

!function(e){function t(a){if(n[a])return n[a].exports;var i=n[a]={i:a,l:!1,exports:{}};return e[a].call(i.exports,i,i.exports,t),i.l=!0,i.exports}var n={};t.m=e,t.c=n,t.i=function(e){return e},t.d=function(e,n,a){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:a})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=51)}({10:function(e,t){e.exports={article:{paddingBottom:180},"article-bannar":{height:500,marginBottom:20},"article-title":{fontSize:48,fontWeight:"500",margin:20},"user-info":{flexDirection:"row",paddingLeft:20,paddingRight:20,alignItems:"center"},"user-avatar":{width:65,height:65},"user-name":{color:"#333333",fontSize:32,marginLeft:20},"article-contents":{padding:20},"article-contents-h1":{margin:20,color:"#333333"},"article-contents-p":{fontSize:36,color:"#666666",lineHeight:54},"article-feedback":{flexDirection:"row"},"feedback-item":{alignItems:"center",flexDirection:"row",padding:20},"feedback-icon":{width:54,height:54},number:{marginLeft:20,fontSize:32,color:"#999999"}}},11:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:["article"],on:{click:function(e){}}},[e._m(0),n("text",{staticClass:["article-title"]},[e._v(e._s(e.title))]),n("div",{staticClass:["user-info"]},[n("image",{staticClass:["user-avatar"],attrs:{src:e.user.avatar}}),n("text",{staticClass:["user-name"]},[e._v(e._s(e.user.username))])]),n("div",{staticClass:["article-contents"]},[n("text",{staticClass:["article-contents-p"]},[e._v(e._s(e.contents))])]),n("div",{staticClass:["article-feedback"]},[n("div",{staticClass:["feedback-item"]},[n("image",{staticClass:["feedback-icon"],attrs:{src:"http://img1.vued.vanthink.cn/vueddf4a54a82030df94baaa20d8cca68892.png"}}),n("text",{staticClass:["number"]},[e._v(e._s(e.comments))])]),n("div",{staticClass:["feedback-item"]},[n("image",{staticClass:["feedback-icon"],attrs:{src:"http://img1.vued.vanthink.cn/vued7f6073b9ef97d0d48e79f282837d2b01.png"}}),n("text",{staticClass:["number"]},[e._v(e._s(e.love))])])])])},staticRenderFns:[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("image",{staticClass:["article-bannar"],attrs:{src:"http://img1.vued.vanthink.cn/vuedc433556ffc003cdc182a79d7114f6314.png"}})])}]},e.exports.render._withStripped=!0},51:function(e,t,n){var a,i,r=[];r.push(n(10)),a=n(9);var s=n(11);i=a=a||{},"object"!=typeof a.default&&"function"!=typeof a.default||(Object.keys(a).some(function(e){return"default"!==e&&"__esModule"!==e})&&console.error("named exports are not supported in *.vue files."),i=a=a.default),"function"==typeof i&&(i=i.options),i.__file="/Users/ali-130257n/www/weex-app-start-kit/src/components/article.vue",i.render=s.render,i.staticRenderFns=s.staticRenderFns,i.style=i.style||{},r.forEach(function(e){for(var t in e)i.style[t]=e[t]}),e.exports=a,e.exports.el="true",new Vue(e.exports)},9:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={data:function(){return{bannar:"http://img1.vued.vanthink.cn/vuedc433556ffc003cdc182a79d7114f6314.png",user:{avatar:"http://img1.vued.vanthink.cn/vuedb62b733271ae371de437ded63dfc1660.png",username:"Tom"},title:"This is title",contents:'Different from "web app" , "HTML5 app" and "hybrid app", you can use Weex to build a real mobile app. More intimate is that you write the code is relatively simple, just use HTML, CSS, Javascript can build native applications.But in fact, the bottom of the application is Objective-C or Java. At the same time, Weex will provide a lot of native components or modules for developers to use.',comments:"11.4K",love:"12K"}},methods:{read:function(){cp}}}}});