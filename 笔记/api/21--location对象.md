`location`对象

URL---统一资源定位符

地址栏上#以及后面的内容
`console.log(window.location.hash);`

主机名以及端口号
`console.log(window.location.host);`

主机名
`console.log(window.location.hostname);`

文件的路径---相对路径
`console.log(window.location.pathname);`

 端口号
`console.log(window.location.port);`

协议
`console.log(window.location.protocol);`

搜索的内容
`console.log(window.location.search);`



其中的几个方法：

`location.href="地址"`-----跳转地址，是属性

`location.assign("地址")`----跳转地址，是方法

`location.replace("地址")`----跳转地址，使用页面替换的方式进行跳转，没有历史记录

`location.reload()`----重新加载

