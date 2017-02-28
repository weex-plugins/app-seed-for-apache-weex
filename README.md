# weex-app-start-kit

一个weex应用模版参考

<img width="320px" src="shots/shot1.png" />

[Demos](https://weex-plugins.github.io/weex-app-start-kit/weex.html?page=home.js)


### 特性

+ 提供APP基本的界面模版参考包括， 视频，个人信息，newsfeed, 文章等。

+ 继承地图插件，可以使用 [weex-amap](https://github.com/weex-plugins/weex-amap) 插件进行开发

+ 提供常用组件包括search-bar,footer,tabbar等


### 如何使用

首先确保你安装了weexpack，如过没有安装可以执行:
``` bash
npm install weexpack -g
```
[weexpack文档](https://github.com/weexteam/weex-pack)

在你的代码目录创建一个新项目:

``` bash
weexpack create first_weex_app

cd first_weex_app && npm install  // 进入目录执行完依赖安装
```
接下来使用 ** weex-app-start-kit ** 插件

``` bash 
weexpack plugin add weex-app-start-kit
```

插件安装成功后执行一段demo的复制脚本 node ./plugins/weex-app-start-kit/tools/copy.js

这样你的weexpack 创建的项目环境就OK了。

这个时候执行weexpack run web/ios/android 就可以预览你的文件了


### Thanks

+ [Icons Designed by linea.io](http://linea.io/)

+ [Instagram UI Mockup](https://www.behance.net/gallery/38441555/Free-Mockup-PSD-New-Interface-Instagram-2016)