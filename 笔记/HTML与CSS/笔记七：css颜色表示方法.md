<h1>一、css颜色表示方法： hexadecimal code（十六进制编码），简写为hex code</h1>

<h2>第一节</h2>

 CSS 中还有其他表示颜色的方法，其中的一种方法称作 hexadecimal code（十六进制编码），简写为 `hex code`。

我们通常使用 `decimals`，也就是十进制数字，它对每一位数字使用符号0到9来表示。`Hexadecimals` （或 `hex`）是十六进制数字，这意味着它使用十六个不同的符号。像十进制那样，符号 0-9 代表数值零到九，再使用 A、B、C、D、E、F 代表数值十到十五。合在一起，用 0 到 F 可以代表 `hexadecimal` 中的每一位数字，共为我们提供 16 个可能的数值。你可以在 [这儿](https://en.wikipedia.org/wiki/Hexadecimal) 找到更多关于十六进制数字的信息。

在 CSS 中，我们可以使用 6 位十六进制数字来表示颜色，每 2 位分别表示红色 (R)、绿色 (G) 和蓝色 (B) 成分。例如，`#000000` 是黑色，同时也是可能的数值中最小的。你可以在 [这儿](https://en.wikipedia.org/wiki/RGB_color_model) 找到更多关于 RGB 颜色系统的信息。

把 `body` 元素的 background-color 由 `black` 替换成其 `hex code`表示，即`#000000`。

例如：

<style>
  body {
    background-color:#000000;
  }
</style>

<h2>第二节</h2>

`0` 是 hex code（十六进制编码）中最小的一个，它代表颜色的完全缺失。

`F` 是 hex code（十六进制编码）中最大的一个，它代表最大可能的亮度。

让我们通过把 background-color 的 hex code 修改为 `#FFFFFF`，以把 `body` 元素的背景改为白色。

例如:

<style>
  body {
    background-color: #ffffff;
  }
</style>

<h2>第三节</h2>

你可能会疑惑为什么我们使用6位数来表示一种颜色而不是只用一位或二位，答案是使用6位数可提供给我们巨大数量的颜色变化。

会有多少种可能的颜色？16 个值和 6 个位置意味着我们有 16 的 6 次方，或者说超过 1600 万种可能的颜色。

Hex code 遵循 red-green-blue（红-绿-蓝），或者叫 `rgb` 格式。hex code 中的前两位表示颜色中红色的数量，第三四位代表绿色的数量，第五六位代表蓝色的数量。

所以要得到绝对的纯红色，你只需要在第一和第二位使用 `F` （最大可能的数值），且在第三、第四、第五和第六位使用 `0` （最小可能数值）。

通过对 background-color 应用 hex code 值 `#FF0000` 以把 `body`元素的背景色设置为红色。

例如：

<style>
  body {
    background-color: #FF0000;//红色
  }
</style>

## 第四节：

记住 `hex code` 遵循 red-green-blue（红-绿-蓝），或称为 `rgb`格式。hex code 中的前两位表示颜色中红色的数量，第三四位代表绿色的数量，第五六位代表蓝色的数量。

所以要得到绝对的纯绿色，你只需要在第三和第四位使用 `F` （最大可能的数值），且在其它位使用 `0` （最小可能数值）。

通过对 background-color 应用 hex code 值 `#00FF00` 以把 `body`元素的背景色设置为绿色。

例如:

<style>
  body {
    background-color: #00ff00;
  }
</style>

## 第五节：

`hex code` 遵循 red-green-blue（红-绿-蓝），或称为 `rgb` 格式。hex code 中的前两位表示颜色中红色的数量，第三四位代表绿色的数量，第五六位代表蓝色的数量。

所以要得到绝对的纯蓝色，你只需要在第五和第六位使用 `F` （最大可能的数值），且在其它位使用 `0` （最小可能数值）。

通过对 background-color 应用 hex code 值 `#0000FF` 以把 `body`元素的背景色设置为蓝色。

例如：

<style>
  body {
    background-color: #0000ff;
  }
</style>

## 第六节

从这三种纯色（红、绿、蓝），我们能得到 1600 万种其它的颜色。

例如，橙色是纯红，混合一些绿，没有蓝。

通过对 background-color 应用 hex code 值 `#FFA500` 以把 `body`元素的背景色设置为橙色。

例如：

<style>
  body {
    background-color: #ffa500;
  }
</style>

## 第七节

从这三种纯色（红、绿、蓝），我们能得到 1600 万种其它的颜色。

我们也可以通过平均混合所有三种颜色得到不同灰度等级的灰色。

通过对 background-color 应用 hex code 值 `#808080` 以把 `body`元素的背景色设置为灰色。

例如：

<style>
  body {
    background-color: #808080;
  }
</style>

## 第八节

通过平均混合所有三种颜色，我们还可以得到其他色度等级的灰色，这样我们可以非常接近纯黑色。

通过对 background-color 应用 hex code 值 `#111111` 以把 `body`元素的背景色设置为深灰色。

例如：

<style>
  body {
    background-color: #111111;
  }
</style>

## 第九节

许多人对超过 1600 万种颜色感觉十分地抓狂，并且 hex code 非常难以记忆。幸运的是，你可以缩短它。

例如，红，hex code 是 `#FF0000` ，可被缩写成 `#F00`。也就是说，一位表示红，一位表示绿，一位表示蓝。

这会把所有可能的颜色数减少至大约 4000 种，但是浏览器会把 `#FF0000` 和 `#F00` 解释为完全相同的颜色。

继续前进，尝试使用 `#F00` 把 `body` 元素的背景色改为红色。

例如：

<style>
  body {
    background-color: #f00;
  }
</style>

# 二、rgb值

## 第一节

在 CSS 中表示颜色的另一个方法是使用 `rgb` 值。

代表黑色的 RGB 值看起来是下面的样子：

```
rgb(0, 0, 0)
```

代表白色的 RGB 值看起来是下面的样子：

```
rgb(255, 255, 255)
```

使用 `rgb`，你通过 0 至 255 之间的一个数字来指定每种颜色的亮度，而不是像 hex code 那样使用六个十六进制数字。

如果你做个算术，16 乘以 16 总共有 256 个值，所以从零开始计数的 `rgb`，和 hex code 一样有完全相同数量的可能数值。

让我们用黑色的 RGB 值 `rgb(0, 0, 0)` 替换掉 `body` 元素背景色的 hex code。

<style>
  body {
    background-color: rgb(0,0,0);
  }
</style>

## 第二节

代表黑色的 RGB 值看起来是下面的样子：

```
rgb(0, 0, 0)
```

代表白色的 RGB 值看起来是下面的样子：

```
rgb(255, 255, 255)
```

使用 `rgb`，你通过 0 至 255 之间的一个数字来指定每种颜色的亮度，而不是像 hex code 那样使用六个十六进制数字。

把 `body` 元素的背景色从黑色的 RGB 值修改为白色的 `rgb` 值 `rgb(255, 255, 255)`。

<style>
  body {
    background-color: rgb(255.255.255);
  }
</style>

## 第三节

和使用 hex code 一样，你可以通过不同数值的组合来表示 RGB 中不同的颜色。

这些数值遵循 RGB 顺序模式：第一位表示红色，第二位表示绿色，第三位表示蓝色。

把 `body` 元素的背景色修改为红色的 RGB 值：`rgb(255, 0, 0)`。

<style>
  body {
    background-color: rgb(255,0,0);
  }
</style>

## 第四节

现在将`body` 元素的背景色修改为绿色的 `rgb` 值：`rgb(0, 255, 0)`。

<style>
  body {
    background-color: rgb（0, 255, 0);
  }
</style>

## 第五节

将你的 `body` 元素的背景色修改为蓝色的 RGB 值：`rgb(0, 0, 255)`。

<style>
  body {
    background-color: rgb(0, 0,255);
  }
</style>

## 第六节

就像使用 hex code 一样，你可以使用不同数值的组合在 RGB 中混合出各种颜色。

将 `body` 元素的背景色修改为橙色的 RGB 值：`rgb(255, 165, 0)`。

<style>
  body {
    background-color: rgb(255,165,0);
  }
</style>

