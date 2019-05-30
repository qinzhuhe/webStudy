一、<a></a>属性

1、锚点元素，用于跳转外部链接，实现当前页面导航功能，如：

<a href="http://freecatphotoapp.com">我是一个跳转链接</a>

2、嵌套锚点，可以将一个元素放进另一个元素中

<p>我是插入的跳转链接<a href="http://www.freecatphotoapp.com">我是一个跳转链接</a></p>

3、锚点中可以将如果不知道该锚点指向何处，可以暂时将链接设为"#"使用

<a href="#">我是暂时的锚点链接</a>
4、除了文字外，还可以将其他元素嵌套进a元素使其变成一个链接，如果是一个图片，则为：
<a href="#"><img src="C:\Users\Administrator\Desktop\笔记\1.jpg" width="100"></a>

二、alt属性

`alt`属性，也被称为`alt text`, 是当图片无法加载时显示的替代文本。(如果图片无法显示就显示alt中的内容，相反，如果图片能够显示就不显示alt中的内容)

简而言之，每一张图片都应该有一个`alt`属性,例如下图：

<img class="smaller-image thick-green-border" src="/images/relaxing-cat.jpg" alt="A cute orange cat lying on its back" >

三、有序和无序列表元素

1、HTML有一个特殊元素，用于创建`unordered lists（无序列表）`, 或带项目符号的列表。

无序列表以`<ul>`元素开始，并包含一个或多个`<li>`元素。例如：

<ul>
  <li>milk</li>
  <li>cheese</li>
</ul>

2、HTML有一个特殊元素，用于创建`ordered lists（有序列表）`, 或数字编号列表。

有序列表以`<ol>`元素开始，并包含一个或多个`<li>`元素。例如：

<ol>
  <li>Garfield</li>
  <li>Sylvester</li>
</ol>



