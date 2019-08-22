<?php

	$arr = array();

	$arr['123'] = array("username" => "王小明","chinese" => "130","math" => "150","english" => "120");
	$arr['124'] = array("username" => "赵大田","chinese" => "150","math" => "150","english" => "110");
	$arr['125'] = array("username" => "李小狼","chinese" => "145","math" => "114","english" => "125");
	$arr['126'] = array("username" => "张二山","chinese" => "133","math" => "90","english" => "142");

	// 根据查询结果显示对应数据，实现页面交互
	$code = $_POST['code'];

	// 如果用户输入的是admin的话显示所有数据，否则根据学号查询
	if($code == 'admin')
	{
		foreach ($arr as $key) {
			echo "<ul>
			<li>姓名：$key[username]</li>
			<li>语文：$key[chinese]</li>
			<li>数学：$key[math]</li>
			<li>英语：$key[english]</li>
		  </ul>";
		}
	}else{
		$scode = $arr[$code];
		echo "<ul>
				<li>姓名：$scode[username]</li>
				<li>语文：$scode[chinese]</li>
				<li>数学：$scode[math]</li>
				<li>英语：$scode[english]</li>
			  </ul>";
	}




 ?>