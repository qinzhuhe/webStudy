#### `val()`

用于操作元素的`value`值



#### `html()`

相当于`innerHTML`方法

#### `text()`

相当于`innerText`方法



#### `width()`

可以用来获取`width`属性的值，也可以用来设置`width`属性的值，直接往里面传参数即可。

- `innerWidth()`：`width`+`padding`
- `outerWidth()`：`width`+`padding`+`border`
- `outerWidth(true)`：`width`+`padding`+`border`+`margin`

#### `height()`

用来获取`height`属性的值，也可以设置`height`属性的值。



#### `scroll()`

1. `scrollTop()`--->卷曲的高度
2. `scrollLeft()`--->卷曲的宽度

> 注意，在`window`中`scroll`是只读属性，不能更改，需要更改时需要换成其他标签



#### `offset()`

获取元素相对于document的位置

#### `position()`

获取元素相对于有定位的父元素的位置

