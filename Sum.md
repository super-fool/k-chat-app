# Chat-App
前端使用`React`, 后端使用`Express`, 通过`Socket.IO`来实现一个简单的`real time chat app`. 

## 技术介绍

### WebSocket

由于http是无状态的, 要实现浏览器与服务器的实施通讯, 一般来说, 要通过**轮询服务器**来获取信息, 这种形式会造成**一定的延迟和大量的流量**. 这时就出现了**H5的产物:WebSocket**.

`WebSocket`是一种协议规范, 基于TCP的协议, 用来实现双向实时通信.

- 工作机制: 本质就是一个TCP连接, 建立一个WebSocket连接就是在HTTP的头中包含以下的几个头属性:
```
Upgrade: WebSocket
Connection: Upgrade
```

### Socket.io

Socket.io 是websocket的一个超集, 它将ajax等机制也进行了封装, 实现不同浏览器智能的选择的通信方式.

那么，Socket.io都实现了Polling中的那些通信机制呢？

- Adobe® Flash® Socket
- AJAX long polling
- AJAX multipart streaming
- Forever Iframe
- JSONP Polling

Adobe® Flash® Socket 大部分PC浏览器都支持的socket模式，不过是通过第三方嵌入到浏览器，不在W3C规范内，所以可能将逐步被淘汰，况且，大部分的手机浏览器都不支持这种模式。

AJAX long polling 这个很好理解，所有浏览器都支持这种方式，就是定时的向服务器发送请求，缺点是会给服务器带来压力并且出现信息更新不及时的现象。

AJAX multipart streaming  这是在XMLHttpRequest对象上使用某些浏览器（比如说Firefox）支持的multi-part标志。Ajax请求被发送给服务器端并保持打开状态（挂起状态），每次需要向客户端发送信息，就寻找一个挂起的的http请求响应给客户端，并且所有的响应都会通过统一连接来写入

```js
var xhr = $.ajaxSettings.xhr();
xhr.multipart =true;
xhr.open('GET', 'ajax', true);
xhr.onreadystatechange = function() {
　　if (xhr.readyState == 4) {
　　　　processEvents($.parseJSON(xhr.responseText));
　　}
};
xhr.send(null);
```

Forever Iframe （永存的Iframe）技术涉及了一个置于页面中的隐藏Iframe标签，该标签的src属性指向返回服务器端事件的servlet路径。每次在事件到达时，servlet写入并刷新一个新的script标签，该标签内部带有JavaScript代码，iframe的内容被附加上这一script标签，标签中的内容就会得到执行。这种方式的缺点是接和数据都是由浏览器通过HTML标签来处理的，因此你没有办法知道连接何时在哪一端已被断开了，并且Iframe标签在浏览器中将被逐步取消使用。

JSONP Polling  JSONP轮询基本上与HTTP轮询一样，不同之处则是JSONP可以发出跨域请求，详细请搜索查询jsonp的内容。

## Client

### 插件介绍

1. react-router 
2. socket.io-client 
3. react-scroll-to-bottom 
4. react-emoji 
5. query-string

## Server

### 插件介绍

1. cors
2. express
3. nodemon
4. socket.io 