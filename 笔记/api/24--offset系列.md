在`style`标签中设置的样式属性是无法获取的，

而`style`属性中设置的样式属性是可以获取的。



为了方便快捷，可以使用`offset`系列来获取，无论是标签还是属性的值都将以数字类型返回。

1. `offsetWidth`：获取元素的宽

2. `offsetHeight`：获取元素的高

3. `offsetTop`：获取元素距离上面位置的值

4. `offsetLeft`：获取元素距离左边位置的值

   - 没有脱离文档流的情况下：

     父级元素`margin`+父级元素`padding`+父级元素中的`border`+自己的`margin`

   - 脱离了文档流的情况下（`position：absolute`）：

     主要是自己的`left`和自己的`margin`

   