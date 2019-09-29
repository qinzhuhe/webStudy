# art-template 与 jQuery 

### {{ each }}

需要声明，art-template 与 jQuery 并没有关系，而其中

each 是art-template 的专属的模板语法，只能在模板字符串中使用

```javascript
{{ each 数组 }}
<li>{{ $value }}</li>
{{ /each }}
```



### $.each(数组, function)

而此方法一般用于便利 jQuery 选择器选择到的为数组实例对象



### forEach

forEach 是 EcmaScript 5 中的一个数组遍历函数，是 JavaScript 原生支持的遍历方法，可以遍历任何可以被遍历的成员



### 注意

- jQuery 的 each 方法和 forEach 方法几乎一致
- 且由于 forEach 是 EcmaScript 5 中的，所以低版本浏览器不支持

