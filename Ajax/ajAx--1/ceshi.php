<?php

	// 第一种json形式
	// echo '{"username":"zhangsan","age":"12"}';

	// 第二种json形式
	// $username = 'lisi';
	// $age = 12;

	// echo '{"username":"'.$username.'","age":"'.$age.'"}';

	// 第三种json形式
	// json_encode()作用：就是把数组转化成json形式的字符串
	// $arr = array(1,2,3);
	$arr = array("name1"=>"tom","name2"=>"jieke","name3"=>"heros");

	$str = json_encode($arr);
	echo $str;

 ?>