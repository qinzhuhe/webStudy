<?php

	// 这里首先接受了来自表单中提交的两个参数
	// 然后使用参数进行判定判断输入是否错误

	$username = $_POST['username'];
	$password = $_POST['password'];

	//解决页面中输出中文乱码的问题，改变浏览器编码模式
	//设置服务器响应的文件类型
	header("Content-Type:text/plain; charset=utf-8");

	if($username == 'admin' && $password == '123'){
		echo '登录成功';
	}else{
		echo '登陆失败';
	}
 ?>