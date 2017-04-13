// { "framework": "Vue" } 

!function(e){function t(i){if(o[i])return o[i].exports;var r=o[i]={i:i,l:!1,exports:{}};return e[i].call(r.exports,r,r.exports,t),r.l=!0,r.exports}var o={};t.m=e,t.c=o,t.i=function(e){return e},t.d=function(e,o,i){t.o(e,o)||Object.defineProperty(e,o,{configurable:!1,enumerable:!0,get:i})},t.n=function(e){var o=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(o,"a",o),o},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=68)}([function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={setBundleUrl:function(e,t){var o=t.config.bundleUrl,i="",r="",n=void 0,a=o.indexOf("your_current_IP")>=0||o.indexOf("file://assets/")>=0,s=o.indexOf("file:///")>=0&&o.indexOf("WeexDemo.app")>0;if(a)n="file://assets/";else if(s)n=o.substring(0,o.lastIndexOf("/")+1);else{var c=/\/\/([^\/]+?)\//.exec(o),l=/\/\/.+\/([^\/]+?)\//.exec(o);c&&c.length>=2&&(i=c[1]),l&&l.length>=2&&(r=l[1]),n="http://"+i+"/"}var d=n;return"undefined"==typeof navigator||"Mozilla"!==navigator.appCodeName&&"Gecko"!==navigator.product?d=n+r+"/":(console.log(r),d="web"===r||"dist"===r?"./weex.html?page=/dist/":"./weex.html?page=/"),d+e}}},function(e,t,o){var i,r,n=[];n.push(o(3)),i=o(2);var a=o(4);r=i=i||{},"object"!=typeof i.default&&"function"!=typeof i.default||(Object.keys(i).some(function(e){return"default"!==e&&"__esModule"!==e})&&console.error("named exports are not supported in *.vue files."),r=i=i.default),"function"==typeof r&&(r=r.options),r.__file="/Users/ali-130257n/www/weex-app-start-kit/src/include/navbar.vue",r.render=a.render,r.staticRenderFns=a.staticRenderFns,r.style=r.style||{},n.forEach(function(e){for(var t in e)r.style[t]=e[t]}),e.exports=i},function(e,t,o){"use strict";var i=weex.requireModule("navigator");e.exports={props:{title:{default:"Title",type:String},back:{default:!1,type:Boolean}},methods:{goHome:function(){i.pop()}}}},function(e,t){e.exports={navbar:{zIndex:200,position:"fixed",left:0,right:0,top:0,display:"flex",flexDirection:"row",height:88,backgroundColor:"#ffffff",alignItems:"center",borderBottomWidth:2,borderBottomStyle:"solid",borderBottomColor:"#dddddd"},"btn-icon-left":{zIndex:10,flexDirection:"row",alignItems:"center",width:180},"btn-arrow-left":{width:60,height:60,marginLeft:10},"btn-text":{color:"#0f89f5"},title:{position:"absolute",left:0,right:0,top:0,height:88,lineHeight:88,fontSize:34,textAlign:"center"}}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:["navbar"]},[e.leftCorner?o("div",{staticClass:["btn-icon-left"],on:{click:e.goHome}},[o("image",{staticClass:["btn-arrow-left"],attrs:{src:e.leftCorner.src}}),o("text",{staticClass:["btn-text"]},[e._v(e._s(e.leftCorner.text))])]):e._e(),e.back?o("div",{staticClass:["btn-icon-left"],on:{click:e.goHome}},[o("image",{staticClass:["btn-arrow-left"],attrs:{src:"http://img1.vued.vanthink.cn/vued9c8e7e738ff94abee23eb69d7f1401e9.png"}}),o("text",{staticClass:["btn-text"]},[e._v("返回")])]):e._e(),e.rightCorner?o("div",{staticClass:["btn-icon-left"],on:{click:e.goHome}},[o("image",{staticClass:["btn-arrow-left"],attrs:{src:"rightCorner.src"}}),o("text",{staticClass:["btn-text"]},[e._v(e._s(e.rightCorner.text))])]):e._e(),o("text",{staticClass:["title"]},[e._v(e._s(e.title))])])},staticRenderFns:[]},e.exports.render._withStripped=!0},function(e,t,o){var i,r,n=[];n.push(o(7)),i=o(6);var a=o(8);r=i=i||{},"object"!=typeof i.default&&"function"!=typeof i.default||(Object.keys(i).some(function(e){return"default"!==e&&"__esModule"!==e})&&console.error("named exports are not supported in *.vue files."),r=i=i.default),"function"==typeof r&&(r=r.options),r.__file="/Users/ali-130257n/www/weex-app-start-kit/src/include/footer.vue",r.render=a.render,r.staticRenderFns=a.staticRenderFns,r.style=r.style||{},n.forEach(function(e){for(var t in e)r.style[t]=e[t]}),e.exports=i},function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=o(0),r=function(e){return e&&e.__esModule?e:{default:e}}(i),n=weex.requireModule("navigator");t.default={props:{active:{default:0}},data:function(){return{type:"",items:[{name:"Home",url:"index.js",icon:"http://img1.vued.vanthink.cn/vued40a1db1fb50417e72fc59c3535de9d1f.png"},{name:"Shop",url:"shop.js",icon:"http://img1.vued.vanthink.cn/vuede3edd4e57e450d00b3fa0e0fd82bc6af.png"},{name:"Video",url:"video.js",icon:"http://img1.vued.vanthink.cn/vueda026977b63cd85ebbcc0309a2f592082.png"},{name:"Profile",url:"profile.js",icon:"http://img1.vued.vanthink.cn/vued78336017bc3e794059a4fea0fe1450f9.png"}]}},methods:{changeUrl:function(e){console.log(this.items[e].url);var t=r.default.setBundleUrl(this.items[e].url,weex);console.log(t),n.push({url:t})}}}},function(e,t){e.exports={footer:{flexDirection:"row",alignItems:"center",zIndex:200,position:"fixed",bottom:0,left:0,right:0,height:100,lineHeight:100,backgroundColor:"#ffffff",borderTopWidth:1,borderTopStyle:"solid",borderTopColor:"rgba(0,0,0,0.15)"},"footer-item":{flex:1,justifyContent:"center",alignItems:"center"},"footer-item-icon":{width:54,height:54},"btn-sm-text":{color:"#777777",fontSize:20},active:{color:"#1ba1e2"}}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:["footer"]},e._l(e.items,function(t,i){return o("div",{key:t.url,staticClass:["footer-item"],on:{click:function(t){e.changeUrl(i)}}},[o("image",{staticClass:["footer-item-icon"],attrs:{src:t.icon}}),e.active!=i?o("text",{staticClass:["btn-sm-text"]},[e._v(e._s(t.name))]):e._e(),e.active==i?o("text",{staticClass:["btn-sm-text","active"]},[e._v(e._s(t.name))]):e._e()])}))},staticRenderFns:[]},e.exports.render._withStripped=!0},,,,,function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={props:{items:{default:[]}}}},function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={data:function(){return{title:"The Guardian of Galaxy 2",rate:"9.7",author:{avatar:"http://img1.vued.vanthink.cn/vuedc20586840fac27d4e0ea5acfb2112f57.png",username:"Marvel",follower:"50.4K"},playCount:"20.4K"}}}},function(e,t){e.exports={video:{position:"relative",height:425,backgroundColor:"#000000"},"video-contents":{height:425},"video-control":{position:"absolute",bottom:20,left:20,right:20,height:60,justifyContent:"center"},"video-progrees-bar":{position:"relative",height:14,backgroundColor:"rgba(255,255,255,0.7)",borderRadius:7},"video-progrees-hightlight":{position:"absolute",top:0,left:0,width:400,height:14,backgroundColor:"rgba(255,255,255,0.95)",borderRadius:7},"video-info":{marginTop:20,flexDirection:"row",justifyContent:"center"},"video-title":{flex:.8,padding:20,fontSize:37,fontWeight:"400"},"video-rate":{flex:.2,paddingTop:20,marginRight:20,fontSize:37,color:"#1ba1e2",fontStyle:"italic",textAlign:"right",fontWeight:"100"},"video-author":{flexDirection:"row"},"author-item":{flex:.7,flexDirection:"row",justifyContent:"flex-start",alignItems:"center",marginLeft:20},"author-avatar":{width:54,height:54},"author-name":{marginLeft:20,fontSize:36,color:"#222222"},"author-follower":{marginLeft:10,padding:5,fontSize:20,color:"#ffffff",backgroundColor:"#1ba1e2"},"video-play-count":{flex:.3,flexDirection:"row",justifyContent:"flex-end",alignItems:"center",marginRight:20},"icon-video":{width:54,height:54},"play-count":{fontSize:28,color:"#555555",marginLeft:10}}},,function(e,t){e.exports={"video-list":{position:"relative",borderTop:"1px solid rgba(0,0,0,.2)"},"video-list-item":{padding:20,borderBottom:"1px solid rgba(0,0,0,.3)"},"video-item-main":{flexDirection:"row"},"video-item-cover":{width:220,height:120},"video-item-desc":{flexDirection:"column",marginLeft:40},"video-upload-info":{marginTop:20,flexDirection:"row"},"icon-upload":{width:36,height:36},"video-upload-date":{marginLeft:20,fontSize:24,color:"#777777"},"video-item-ft":{flexDirection:"row",marginTop:20},"video-item-producer":{flex:.6,flexDirection:"row"},"producer-avatar":{width:36,height:36},"producer-name":{marginLeft:20,fontSize:24,color:"#888888"},"video-item-social":{flex:.4,flexDirection:"row",alignItems:"center"},"social-number":{color:"#444444",fontSize:24},"scial-label":{marginLeft:5,color:"#999999",fontSize:20}}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:["video-container"]},[e._m(0),o("div",{staticClass:["video-info"]},[o("text",{staticClass:["video-title"]},[e._v(e._s(e.title))]),o("text",{staticClass:["video-rate"]},[e._v(e._s(e.rate))])]),o("div",{staticClass:["video-author"]},[o("div",{staticClass:["author-item"]},[o("image",{staticClass:["author-avatar"],attrs:{src:"http://img1.vued.vanthink.cn/vuedc20586840fac27d4e0ea5acfb2112f57.png"}}),o("text",{staticClass:["author-name"]},[e._v(e._s(e.author.username))]),o("text",{staticClass:["author-follower"]},[e._v(e._s(e.author.follower))])]),o("div",{staticClass:["video-play-count"]},[o("image",{staticClass:["icon-video"],attrs:{src:"http://img1.vued.vanthink.cn/vueda026977b63cd85ebbcc0309a2f592082.png"}}),o("text",{staticClass:["play-count"]},[e._v(e._s(e.playCount))])])])])},staticRenderFns:[function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:["video"]},[o("image",{staticClass:["video-contents"],attrs:{src:"http://img1.vued.vanthink.cn/vuede7438bc6e898a7a9ed2b45b3db0c352f.jpeg"}}),o("div",{staticClass:["video-control"]},[o("div",{staticClass:["video-progrees-bar"]},[o("div",{staticClass:["video-progrees-hightlight"]})])])])}]},e.exports.render._withStripped=!0},,function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:["video-list"]},e._l(e.items,function(t){return o("div",{staticClass:["video-list-item"]},[o("div",{staticClass:["video-item-main"]},[o("image",{staticClass:["video-item-cover"],attrs:{src:t.cover}}),o("div",{staticClass:["video-item-desc"]},[o("text",{staticClass:["video-name"]},[e._v(e._s(t.title))]),o("div",{staticClass:["video-upload-info"]},[o("image",{staticClass:["icon-upload"],attrs:{src:"http://img1.vued.vanthink.cn/vued5f365239dd87f0d91e314ab96d40e669.png"}}),o("text",{staticClass:["video-upload-date"]},[e._v(e._s(t.upload_date))])])])]),o("div",{staticClass:["video-item-ft"]},[o("div",{staticClass:["video-item-producer"]},[o("image",{staticClass:["producer-avatar"],attrs:{src:t.producer.avatar}}),o("text",{staticClass:["producer-name"]},[e._v(e._s(t.producer.username))])]),o("div",{staticClass:["video-item-social"]},[o("text",{staticClass:["social-number"]},[e._v(e._s(t.views))]),o("text",{staticClass:["scial-label"]},[e._v("Views")]),o("text",{staticClass:["social-number"],staticStyle:{marginLeft:"10px"}},[e._v(e._s(t.comments))]),o("text",{staticClass:["scial-label"]},[e._v("Comments")])])])])}))},staticRenderFns:[]},e.exports.render._withStripped=!0},,,,,,,,,,,,,function(e,t,o){"use strict";function i(e){return e&&e.__esModule?e:{default:e}}var r=o(1),n=i(r),a=o(5),s=i(a),c=o(58),l=i(c),d=o(56),f=i(d),u=o(54),p=i(u);e.exports={components:{navbar:n.default,footer:s.default,"jp-video":f.default,h3:l.default,"video-list":p.default},data:function(){return{user:{avatar:"http://img1.vued.vanthink.cn/vued4eff4743ed47b7d8add8e7969a5d16cd.png",username:"Tom"},recList:[{cover:"http://img1.vued.vanthink.cn/vued894e9f0de251af913f115b6a494e1650.png",title:"Kung Fu Hustle",comments:"15k",views:"224K",upload_date:"2004-1-26",producer:{avatar:"http://img1.vued.vanthink.cn/vued058dd8bc2314a8bdeee12de7749a859a.png",username:"Coloumn Pictures"}},{cover:"http://img1.vued.vanthink.cn/vued2591e41f36bafb15ade52def89a245d3.png",title:"Captain America 3",comments:"28k",views:"445K",upload_date:"2016-5-24",producer:{avatar:"http://img1.vued.vanthink.cn/vued9bbaa9de16747dda754b75bf96e34b83.png",username:"Marvel Studio"}}]}},methods:{}}},function(e,t){e.exports={container:{position:"relative",flex:1,flexDirection:"column",backgroundColor:"#ffffff",paddingTop:88},map:{flex:1,position:"relative",minHeight:400,borderBottomWidth:10,borderBottomColor:"#ffffff"},"profile-bannar":{height:380,alignItems:"center",justifyContent:"center",backgroundImage:"linear-gradient(to left,#00c6ff , #0072ff)"},"profile-avatar":{width:200,height:200,marginBottom:20},"profile-username":{fontSize:40,fontWeight:"100",color:"#ffffff"},"profile-groups":{marginTop:40,paddingTop:10,paddingLeft:20,paddingRight:20,backgroundColor:"#ffffff",borderTop:"2px solid rgba(0,0,0,.1)",borderBottom:"2px solid rgba(0,0,0,.3)"},"profile-groups-item":{height:90,justifyContent:"center",borderBottom:"2px solid rgba(0,0,0,.1)",color:"#555555"}}},,,,,,,,function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:["container"]},[o("navbar",{attrs:{title:"The Guardian"}}),o("scroller",{staticClass:["map"]},[o("jp-video"),o("h3",{attrs:{contents:"Recomand"}}),o("video-list",{attrs:{items:e.recList}})],1),o("footer",{attrs:{active:"2"}})],1)},staticRenderFns:[]},e.exports.render._withStripped=!0},,,,,,,,,,,,function(e,t,o){var i,r,n=[];n.push(o(17)),i=o(13);var a=o(20);r=i=i||{},"object"!=typeof i.default&&"function"!=typeof i.default||(Object.keys(i).some(function(e){return"default"!==e&&"__esModule"!==e})&&console.error("named exports are not supported in *.vue files."),r=i=i.default),"function"==typeof r&&(r=r.options),r.__file="/Users/ali-130257n/www/weex-app-start-kit/src/components/video-list.vue",r.render=a.render,r.staticRenderFns=a.staticRenderFns,r.style=r.style||{},n.forEach(function(e){for(var t in e)r.style[t]=e[t]}),e.exports=i},,function(e,t,o){var i,r,n=[];n.push(o(15)),i=o(14);var a=o(18);r=i=i||{},"object"!=typeof i.default&&"function"!=typeof i.default||(Object.keys(i).some(function(e){return"default"!==e&&"__esModule"!==e})&&console.error("named exports are not supported in *.vue files."),r=i=i.default),"function"==typeof r&&(r=r.options),r.__file="/Users/ali-130257n/www/weex-app-start-kit/src/components/video.vue",r.render=a.render,r.staticRenderFns=a.staticRenderFns,r.style=r.style||{},n.forEach(function(e){for(var t in e)r.style[t]=e[t]}),e.exports=i},,function(e,t,o){var i,r,n=[];n.push(o(74)),i=o(69);var a=o(78);r=i=i||{},"object"!=typeof i.default&&"function"!=typeof i.default||(Object.keys(i).some(function(e){return"default"!==e&&"__esModule"!==e})&&console.error("named exports are not supported in *.vue files."),r=i=i.default),"function"==typeof r&&(r=r.options),r.__file="/Users/ali-130257n/www/weex-app-start-kit/src/include/h3.vue",r.render=a.render,r.staticRenderFns=a.staticRenderFns,r.style=r.style||{},n.forEach(function(e){for(var t in e)r.style[t]=e[t]}),e.exports=i},,,,,,,,,,function(e,t,o){var i,r,n=[];n.push(o(34)),i=o(33);var a=o(42);r=i=i||{},"object"!=typeof i.default&&"function"!=typeof i.default||(Object.keys(i).some(function(e){return"default"!==e&&"__esModule"!==e})&&console.error("named exports are not supported in *.vue files."),r=i=i.default),"function"==typeof r&&(r=r.options),r.__file="/Users/ali-130257n/www/weex-app-start-kit/src/video.vue",r.render=a.render,r.staticRenderFns=a.staticRenderFns,r.style=r.style||{},n.forEach(function(e){for(var t in e)r.style[t]=e[t]}),e.exports=i,e.exports.el="true",new Vue(e.exports)},function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={props:{contents:{default:"h3",type:String}}}},,,,,function(e,t){e.exports={h3:{margin:20,paddingBottom:10},"h3-text":{fontSize:36,color:"#222222"}}},,,,function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:["h3"]},[o("text",{staticClass:["h3-text"]},[e._v(e._s(e.contents))])])},staticRenderFns:[]},e.exports.render._withStripped=!0}]);