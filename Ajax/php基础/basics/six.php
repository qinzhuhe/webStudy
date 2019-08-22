<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>预定义变量-post请求参数</title>
	<script>
		/**
		 * form(表单)的默认请求方式就是get请求，而get请求会吧表单数据当做url的参数
		 */
	</script>
</head>
<body>
	<div>
		<form action="./six-post.php" method="post">
			用户名：<input type="text" name="username"><br>
			密码：<input type="text" name="password"><br>
			<input type="submit" value="登录">
		</form>
	</div>
</body>
</html>