`var dt = Date.now();`

<!--HTML5提供的方式，有兼容性问题-->

`var dt += new Date();`

<!--不支持HTML5的浏览器，可以用下面这种方式-->

`console.log(dt);`



2、创建实例对象
 `var dt=new Date("2019-5-31");`
`//传入的时间`
`onsole.log(dt);`

3、函数使用方法

获取年份：`getFullYear()`；

获取月份：`getUTCMonth()`;

获取日期：`getDate()`;

获取小时：`getHours()`;

获取分钟：`getMinutes()`;

获取秒：`getSeconds()`;

获取星期：`getDay()`;