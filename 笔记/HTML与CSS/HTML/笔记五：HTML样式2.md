一、HTML元素布局属性

1、所有的 HTML 元素本质上是小的矩形块，代表着某一小块区域。

2、有三个影响HTML元素布局的重要属性：`padding(内边距)`、`margin(外边距)`、`border(边框)`。

3、元素的 `padding` 控制元素内容 `content`和元素边框 `border` 之间的距离。

<style>
  .injected-text {
    margin-bottom: -25px;
    text-align: center;
  }

  .box {
    border-style: solid;
    border-color: black;
    border-width: 5px;
    text-align: center;
  }

  .yellow-box {
    background-color: yellow;
    padding: 10px;
  }

  .red-box {
    background-color: red;
    padding: 20px;
  }

  .green-box {
    background-color: green;
    padding: 20px;
  }
</style>

<h5 class="injected-text">margin</h5>

<div class="box yellow-box">
  <h5 class="box red-box">padding</h5>
  <h5 class="box green-box">padding</h5>
</div>

在其中，绿方块padding和红方块padding都处于黄方块margin中，扩大其中方块的一个padding，将扩大元素内容和元素边框的距离。

4、元素的外边距 `margin` 控制元素边框 `border` 和元素实际所占空间的距离。

5、CSS 允许你使用 `padding-top`、`padding-right`、`padding-bottom`和 `padding-left`来控制元素上右下左四个方向的 `padding`。

 `padding-top`：顶部;

padding-bottom：右部;

padding-left:底部；

padding-right：左部；

例如：

<style>
    <!--将属性顶部和底部增加至40px，左右为20px-->
     .green-box {
    background-color: green;
    padding-top:40px;
    padding-right:20px;
    padding-bottom:20px;
    padding-left:20px;
  }
</style>

6、margin属性上右下左

使用 `margin-top`、`margin-right`、`margin-bottom` 和 `margin-left` 来控制元素上右下左四个方向的 `margin`。

例如，将.green-box中margin属性的顶部和左侧具有 `40px` 的 `margin`，而底部和右侧则是 `20px`：

<style>
      .green-box {
    background-color: green;
    margin-top:40px;
    margin-right:20px;
    margin-left:40px;
    margin-bottom:20px;
  }
</style>

6、集中指定

除了分别指定元素的 `padding-top`、`padding-right`、`padding-bottom` 和 `padding-left` 属性外，你还可以集中起来指定它们，举例如下：

```
padding: 10px 20px 10px 20px;
```

这四个值以顺时针方式排列：顶部、右侧、底部、左侧，简称：上右下左。

7、margin设置

让我们再试一次，但这次是用于 `margin`。

除了分别指定元素的 `margin-top`、`margin-right`、`margin-bottom`和 `margin-left` 属性外，你还可以集中起来指定它们，举例如下：

```
margin: 10px 20px 10px 20px;
```

这四个值以顺时针方式排列：顶部、右侧、底部、左侧，简称：上右下左。

