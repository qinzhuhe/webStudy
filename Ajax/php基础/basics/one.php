<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>初识</title>
	<script type="text/javascript">
		var num = 123;
		console.log(num);

		// 字符串拼接
		var str = '现在是：' + num;
		console.log(str);

	</script>
</head>
<body>
	<div>welcome to PHP Page</div>
	<?php
		echo '<div>Hello World!</div>';


		// php的变量声明，变量名的规则：由字符数字下划线组成并且不可以以数字开头，变量对大小写的判断是敏感的

		// php中的字符串拼接是.

		// echo的作用就是向页面中输出字符串
		// 单引号对于其中的变量当做普通的字符串来处理
		// 双引号对于其中的变量会把变量解析成变量值



		$num = 123;
		// echo '<div>编号为：'.$num.'</div>';
		// echo '<div>编号为：$num</div>';//直接输出字符串$num
		echo "<div>编号为：$num</div>";//输出123，会自动解析双引号中的内容
	 ?>
</body>
</html>