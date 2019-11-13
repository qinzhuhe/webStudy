# less

### 注释

```less
/**/  --  这种形式的注释才会被编译
//  --  不会被编译
```



### 变量

@变量名: 值;

```javascript
@color: #666;
a {
    color: @color;
}
```



### 混入

可以将一个定义好的样式引入到另外一个样式中，类似于函数的调用

```less
/* 定义样式 */
.addRadius(@r:10px) { /* 设置样式默认值10px */
    border-radius: @r;
    -webkit-border-radius: @r;
    -moz-border-radius: @r;
}

div {
    width: 200px;
    height: 200px;
    .addRadius(5px); /* 引入样式并定义5px */
}
```





### 嵌套

```less
div {
    width: 200px;
    height: 200px;
    .addRadius(5px);
    span {
        width: 100%;
        height: 30px;
        text-align: center;
        line-height: 200px;
        .SpanA {
            text-decoration: none;
        }
    }
}
```





