一、div标签

`div`元素，也被称作division(层)元素，是一个盛装其他元素的通用容器。

所以可以利用CSS的继承关系把`div`上的CSS传递给它所有子元素。

你可以用`<div>`来标记一个div元素的开始，然后用`</div>`来标记一个div元素的结束。例如：

<div>
<p>Things cats love:</p>
<ul>
  <li>cat nip</li>
  <li>laser pointers</li>
  <li>lasagna</li>
</ul>
<p>Top 3 things cats hate:</p>
<ol>
  <li>flea treatment</li>
  <li>thunder</li>
  <li>other cats</li>
</ol>
</div>

二、设置元素背景颜色

可以用 `background-color` 属性来设置一个元素的背景颜色。

创建一个叫做 `green-background` 的类选择器，设置其 `background-color` 为 gray，最后应用到 `div` 元素。例如：

<style>
  .gray-background{
    background-color:gray;
  }
</style>

<div class=" gray-background">
  <p>Things cats love:</p>
  <ul>
    <li>cat nip</li>
    <li>laser pointers</li>
    <li>lasagna</li>
  </ul>
  <p>Top 3 things cats hate:</p>
  <ol>
    <li>flea treatment</li>
    <li>thunder</li>
    <li>other cats</li>
  </ol>
</div>

三、id属性

每一个 HTML 元素还可以使用 `id` 属性。

`id` 属性应该是唯一的，请不要给一个以上的元素设置相同的 `id` 属性。

例如设置h2元素的id属性为cat-photo-app：

<h2 id="cat-photo-app">

四、id属性选择器

和类选择器一样，你也可以使用ID选择器来声明样式。

（注意：在你的 `style` 元素内部，定义类选择器必须添加 `.` 为前缀，定义ID选择器必须添加 `#` 为前缀。）

例如下图，为表单添加值为 `cat-photo-form` 的 id 属性，一个绿色的背景：

<style>
      #cat-photo-form{
    background-color:green;
  }
</style>

<form action="/submit-cat-photo" id="cat-photo-form">
  <label><input type="radio" name="indoor-outdoor" checked> Indoor</label>
  <label><input type="radio" name="indoor-outdoor"> Outdoor</label>
  <label><input type="checkbox" name="personality" checked> Loving</label>
  <label><input type="checkbox" name="personality"> Lazy</label>
  <label><input type="checkbox" name="personality"> Energetic</label>
  <input type="text" placeholder="cat photo URL" required>
  <button type="submit">Submit</button>
</form>

