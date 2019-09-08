function ajax(obj){
	// 默认参数
	var defaults = {
		type : 'get',
		data: {},
		url: '#',
		dataType : 'text',
		async : true,
		success : function (data){console.log(data)}
	}

	 // 处理形参，传递参数是覆盖默认参数，不传递就是用默认参数
	 for(var key in obj){
	 	defaults[key] = obj[key];
	 }

	 // ajAx四步进行请求处理
	 // 1、创建XMLHtppRequest对象
	 var xhr = null;
	 if(window.XMLHttpRequest){
	 	xhr = new XMLHttpRequest();
	 }else{
	 	xhr = new ActiveXObject('Microsoft.XMLHTTP');
	 }

	 // 把对象形式的参数转化为字符串形式的参数
	 /**
	  * {username:'zhangsan',password:'123'}
	  * 转换为
	  * username=zhangsan&password=123
	  */
	 var param = '';
	 for(var attr in obj.data){
	 	param += attr + '=' + obj.data[attr] + '&';
	 }
	 if(param){
	 	param = param.substring(0,param.length - 1);
	 }

	 // 处理get请求参数并且处理中文乱码问题
	 if(defaults.type == 'get'){
	 	defaults.url += '?' + encodeURI(param);
	 }

	 // 准备发送

	 // 使用defaults中的参数，更加变通灵活
	 // 2、准备发送（设置发送的参数）
	 xhr.open(defaults.type,defaults.url,defaults.async);

	 // 这里是为了判断传递的方式是不是post
	 // 处理post请求参数并且设置请求头信息(必须设置)
	 var data = null;
	 if(defaults.type == 'post'){
	 	data = param;
	 	xhr.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
	 }

	 // 执行发送动作
	 xhr.send(data);

	 // 如果用户传递过来的async是false的话
	 if(!defaults.async)
	 {
	 	if(defaults.dataType == 'json'){
	 		return JSON.parse(xhr.responseText);
	 	}else{
	 		return xhr.responseText;
	 	}
	 }

	 // 状态判定
	 // 4、指定回调函数(处理服务器响应数据)
	 xhr.onreadystatechange = function (){
	 	if(xhr.readyState == 4 && xhr.status == 200){
	 		var data = xhr.responseText;
	 		if(defaults.dataType == 'json'){
	 			data = JSON.parse(data);
	 		}
	 		defaults.success(data);
	 	}
	 }
}