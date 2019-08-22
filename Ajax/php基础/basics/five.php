<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>预定义变量-get请求参数</title>
	<script>
		/**
		 * http协议的常用请求方式：(增删改查)
		 * get --> 用来从服务器获取数据(参数一般作为查询条件)
		 * post --> 用来添加数据
		 * put --> 用来修改数据
		 * delete --> 用来删除数据
		 */
	</script>
</head>
<body>
	<div>
		<?php

			// http://phpstudy.cn/five.php?flag=1
			// 这里使用了$_GET['flag']得到了url地址中传递的参数的值

			$flag = $_GET['flag'];
			// echo $flag;
			// 接受数据后，类似进行判断处理

			if($flag == 1){
				echo "正确数据";
			}else{
				echo "错误数据";
			}

		 ?>
	</div>
</body>
</html>