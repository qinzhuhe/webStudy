<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>函数</title>
	<script>
		function foo(per){
			console.log(per);
		}
		foo("hello");
	</script>
</head>
<body>
	<div><?php
		// 函数的名字不区分大小写
		// 自定义函数---函数可以先调用后声明
		function foo($per){
			return $per;
		}
		$res = foo("hi");
		echo $res;

		// 系统函数--json_ecode()
		// $arr = array(111,22,33);
		$arr = array("a" => "111","b" => "222","c" => "333");
		$res = json_encode($arr);
		echo $res;

	 ?></div>
</body>
</html>