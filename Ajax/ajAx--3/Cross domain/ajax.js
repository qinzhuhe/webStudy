function ajax(obj){
	// jsonp形式只支持get请求传参
	var defaults = {
		type : 'get',
		url : '#',
		dataType : 'jsonp',
		jsonp : 'callback',
		data : {},
		success : function (data){console.log(data);}
	}

	// 处理默认值，如果默认和传递的属性有重复则直接覆盖了
	for(var key in obj){
		defaults[key] = obj[key];
	}

	// 处理回调函数名,调用时如果传递了则直接覆盖使用，如果不传递则使用默认的回调函数名
	var cbName = 'jQuery' + ('3.4.1' + Math.random()).replace(/\D/g,"") + '_' + (new Date().getTime());
	if(defaults.jsonpCallback){
		cbName = defaults.jsonpCallback;
	}

	// 这里就是回调函数，调用方式：服务器响应内容来调用
	// 向window对象中添加了一个方法，方法名称是变量cbName的值
	window[cbName] = function (data){
		defaults.success(data);//这里的success的data是实参
	}

	var param = '';
	for(var attr in defaults.data){
		param += attr + '=' + defaults.data[attr] + '&';
		param = '&' + param;
	}

	if(param){
		param = param.substring(0,param.length - 2);
	}

	// 动态创建script标签
	var script = document.createElement('script');
	script.src = defaults.url + '?' + defaults.jsonp + '=' + cbName + param;
	var head = document.getElementsByTagName('head')[0];
	head.appendChild(script);

}