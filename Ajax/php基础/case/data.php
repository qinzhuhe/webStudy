<?php
	// 后台接口--只传输一些特定的数据，而不是整片页面
	// 返回一个html片段
	// echo "<div><span>测试数据</span></div>";
	// echo '<div><span>测试数据</span></div>';

	// 返回一个数组，json_encode() 把数组或对象转换成字符串
	$arr = array("username"=>"和田","age"=>"12","sex"=>"man");
	echo json_encode($arr);//\u548c\u7530是Unicode编码

 ?>