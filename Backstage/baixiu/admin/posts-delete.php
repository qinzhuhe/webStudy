<?php
/**
 * 根据客户端传递过来的ID删除对应数据
 */
require_once '../function.php';

if(empty($_GET['id'])){
	exit('缺少必要参数');
}

// 可以加上int进行转义，将字符串格式转成数字格式
// 也可以使用is_number来对传递过来的参数进行判定到底是什么数据类型
$id = $_GET['id'];
// sql注入
// => '1 or 1 = 1'的格式
// 会导致where条件不执行，故此会直接删除所有数据
// sql 注入
// 1,2,3,4

$rows = bx_execute('delete from posts where id in (' . $id . ');');

// if($rows > 0){
// 	exit('删除成功');
// }

// http中的 referer 用于标识当前请求的来源
header('Location: ' . $_SERVER['HTTP_REFERER']);