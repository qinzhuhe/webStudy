# 一、css继承

每一个 HTML 页面都有一个 `body` 元素。

通过将其 `background-color` 设置为黑色，我们可以证明 `body` 元素的存在。

例如：

<style>
  body{
    background-color:black;
  }
</style>

二、css继承2

现在我们证明了每一个 HTML 页面都有一个 `body` 元素，并且其 `body` 元素同样能够应用样式。

记住，你可以像对其他 HTML 元素一样对你的 `body` 元素应用样式，并且所有其他元素将继承你的 `body` 元素的样式。

举例：

首先，创建一个文字为 `Hello World` 的 `h1` 元素。

然后，让我们通过向 `body` 元素的样式声明部分添加 `color: green;` 使页面上的所有元素的颜色为 `green`。

最后，通过向 `body` 元素的样式声明部分添加 `font-family: Monospace;` 将 `body` 元素的 font-family（字体）设置为 `Monospace`。

<style>
  body {
    background-color: black;
    color:green;
    font-family:Monospace;
    font-family:Monospace;
  }

</style>

<h1>Hello World</h1>

# 三、属性覆盖

## 1、body属性覆盖css

有时你的 HTML 元素会得到相互冲突的多个样式。

例如，你的 `h1` 元素不能同时为绿色和粉色。

让我们来看看当我们创建一个使其文字为粉色的 class 时会发生什么，然后将其应用到某元素。我们的 class 会 `override（覆盖）``body` 元素的 `color: green;` CSS 属性吗？

例如：

创建一个使元素颜色成为粉色的名为 `pink-text` 的 CSS class。

设置 `h1` 元素的 class 为 `pink-text`。

<style>
  body {
    background-color: black;
    font-family: Monospace;
    color: green;
  }
  .pink-text{
    color:pink;
  }
</style>
    <h1 class="pink-text">Hello World!</h1>
事实证明，当两个属性重复时，后一个会覆盖前一个元素的css。

## 2、class属性覆盖css

我们的 "pink-text" class 覆盖了 `body` 元素的 CSS 声明！

我们刚刚证明了我们的 class 会覆盖 `body` 元素的 CSS，那么下一个合乎情理的问题就是，我们怎样才能覆盖我们的 `pink-text`class 呢？

再创建一个把元素设置为蓝色的名为 `blue-text` 的 CSS class，确保它在你的 `pink-text` class 声明的下面。

除了 `pink-text` class 之外，再把 `blue-text` class 应用到你的 `h1`元素，让我们来看看谁会赢。

如下例，通过用空格分隔多个 class 属性，可对 HTML 元素应用多个 class 属性：

```
class="class1 class2"
```

注意：在 HTML 中这些 class 如何排序是无所谓的。

然而，在 `<style>` 部分中 `class` 声明的顺序却非常重要，第二个声明总是比第一个具有优先权。因为 `.blue-text` 是第二个声明，它覆盖了 `.pink-text` 属性。

例如：

<style>
  body {
    background-color: black;
    font-family: Monospace;
    color: green;
  }
  .pink-text {
    color: pink;
  }
  .blue-text{
    color:blue;
  }
</style>

```html
    <h1 class="pink-text blue-text">Hello World!</h1>
```

第二个声明blue-text会替代第一个声明pink-text.

## 3、id属性覆盖css

但是并非只有这些，还有其他覆盖 CSS 的方法。你还记得 id 属性吗？

让我们来覆盖你的 `pink-text` 和 `blue-text` 两个 class，通过为 `h1` 元素添加 id 并设置 id 的样式，使你的 `h1` 元素变成 orange（橙色）。

给你的 `h1` 元素添加名为 `orange-text` 的 `id` 属性。记住，id 样式看起来是这样的：

```
<h1 id="orange-text">
```

在你的 `h1` 元素中保留 `blue-text` 和 `pink-text` 两个 class。

注意：你声明的这个 CSS 在 `pink-text`类选择器的上面还是下面是无所谓的，因为 id 属性总是具有更高的优先级。

例如：

<style>
  body {
    background-color: black;
    font-family: Monospace;
    color: green;
  }
  .pink-text {
    color: pink;
  }
  .blue-text {
    color: blue;
  }
  #orange-text{
    color:orange;
  }
</style>
<h1 class="pink-text blue-text" id="orange-text">Hello World!</h1>

<h2>4、行内样式覆盖css</h2>

我们证明了无论在 `style` 元素 CSS 的哪个位置进行声明，id 声明都会覆盖 class 声明。

还有其他覆盖 CSS 的方法。你还记得行内样式吗？

试着用 `in-line style（行内样式）` 使 `h1` 元素变为白色。记住，行内样式看起来是这样的：

```
<h1 style="color: green">
```

保留 `h1` 元素中的 `blue-text` 和 `pink-text` 两个 class。

例如：

<style>
  body {
    background-color: black;
    font-family: Monospace;
    color: green;
  }
  #orange-text {
    color: orange;
  }
  .pink-text {
    color: pink;
  }
  .blue-text {
    color: blue;
  }
</style>
<h1 id="orange-text" class="pink-text blue-text" style="color:white">Hello World!</h1>

<h2>5、使用!important方法覆盖css</h2>

我们刚刚证明了行内样式将覆盖`style` 中定义的所有 CSS。

但是等一下，还有最后一种覆盖 CSS 的方法，这是所有方法中最强大的，但是在讲它之前，我们先讲讲为什么你要覆盖 CSS。

很多情况下，你会使用 CSS 库，这些库可能会意外覆盖掉你自己的 CSS。所以当你需要确保某元素具有指定的 CSS 时，你可以使用 `!important`。

让我们再回到我们的 `pink-text` class 声明。还记得不？我们的 `pink-text` class 被随后的 class 声明、id 声明和行内样式所覆盖了。

让我们来给 pink-text 元素的 color 声明加上关键字 `!important`，以便 100% 确保你的 `h1` 元素是粉色的。

举例如下：

```
color: pink !important;
```

例如：

<style>
  body {
    background-color: black;
    font-family: Monospace;
    color: green;
  }
  #orange-text {
    color: orange;
  }
  .pink-text {
    color: pink !important;
  }
  .blue-text {
    color: blue;
  }
</style>
<h1 id="orange-text" class="pink-text blue-text" style="color: white">Hello World!</h1>

<style>
  body {
    background-color: rgb(255,165,0);
  }
</style>