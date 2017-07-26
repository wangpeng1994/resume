## 第一步. 在浏览器输入URL

> - URL:统一资源定位符，用于定位互联网的资源（文字，视频，图片，网页，css等等）
> - http、https、ftp、file协议

|协议|示例|区别|
|------|------|------|
|http|http://www.jianshu.com/p/e3eb189a504d|明文传输的协议，定位互联网资源|
|file|file:///C:/Users/zhang/Desktop/demo.html|访问本地计算机中的文件协议|
|https|https://github.com/|加密传输的协议|

## 第二步. 域名解析

对于·https://www.baidu.com 的URL，浏览器实际上不知道 [baidu.com](baidu.com)到底是什么，需要查找baidu.com网站所在服务器的IP地址，才能找到对应目标。

#### 1. 为什么要发明域名，不直接用IP
- 方便记忆对应的网站
- 一个服务器上可能部署了多个网站，只能通过服务器+端口的方式，比如101.33.21.104:3000、101.33.21.104:3001、101.33.21.104:3002,更难记忆

#### 2. 域名是什么
http://map.baidu.com/mobile/webapp/index/index/foo=bar/tab=line 中，[map.baidu.com](map.baidu.com)就是域名，

#### 3. IP地址是什么
- 每个处于互联网中的设备都有IP地址，形如 192.168.0.1
- 局域网IP和公网IP是有差别的
  - 局域网IP，比如只装了路由器，还没有交网费，只建立了本地网络，无法访问外网
  - 公网IP，由于局域网IP可能是一样的，所以真正接入互联网的都有一个公网IP，任何人访问你的公网IP，都可以访问到服务器
- 127.0.0.1代表本机的IP,对应的本机域名是localhost 

#### 4. 解析域名的流程
a. 浏览器缓存 - 浏览器会缓存DNS记录一段时间
b. 系统缓存 - 从Hosts文件查找是否有该域名和对应IP
c. 路由器缓存 - 一般路由器也会缓存域名信息
d. ISP DNS缓存 - 比如到电信的DNS上查找缓存
e. 如果都没有找到，则向根域名服务器查找域名对应IP，根域名服务器把请求转发到下一级，直到找到IP

## 第三步. 服务器处理

服务器是一台安装系统的机器，常见的系统如Linux、Windows server2012 系统里安装的处理请求的应用叫Web server。

#### 1. Web服务器
- 常见的web服务器有Apache、Nginx、IIS、Lighttpd（node.js也可以搭建服务器）
- web服务器用于接收用户的Request交给网站代码，或者接收请求反向代理（例如使用nginx）到其他web服务器

![web服务器请求示意图](http://upload-images.jianshu.io/upload_images/7038854-c9aaa448f34aa0ee.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

## 第四步. 网站处理流程

MVC模型(model)-视图(view)-控制器(controller)

用户通过浏览器，发送请求，经过路由器和DNS域名解析，找到服务器上的网站后，通过控制器拿到数据和视图模板，然后把数据交给模板，再组成HTML页面，然后发给前台。

![MVC网站处理流程](http://upload-images.jianshu.io/upload_images/7038854-44dae820ae3a07de.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

## 第五步. 浏览器处理

HTML字符串被浏览器接收后，逐行解析，
解析到`link`标签后，则重新发送请求获取css，
解析到`script`标签后，则发送请求获取js，并执行代码，
解析到`img`标签后，则发送请求获取图片资源。

#### 绘制网页
浏览器根据HTML和CSS计算得到渲染树，绘制到屏幕上，js会被执行

## 总结
从最初的输入URL，然后DNS解析成IP，然后通过IP连接到服务器，服务器判断IP对应的域名是什么，然后交给不同的网站去处理，网站收到请求后，根据路由，交给不同的控制器，控制器从模型里面请求数据，模型就和数据库进行交互，获得数据，同时在拿到对应的视图模板，然后数据填入模板，经过浏览器的渲染绘制，就呈现到屏幕上了。