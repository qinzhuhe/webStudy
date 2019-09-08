```javascript
$.ajax({
		type: '传递类型（post/get）',
		url: '目标地址',
		data: {code:code},
		dataType: '文件类型',//可传递的文件类型：xml,json,text,html,script,jsonp
		success: function (data){
            // 回调函数
		}
});
```

**如果第二次ajax请求依赖于第一次请求结果，那么第二次请求必须放到回调函数的内部**

