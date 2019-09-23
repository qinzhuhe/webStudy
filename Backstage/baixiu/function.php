 <?php

require_once 'config.php';

/**
* 封装大家公用的函数
*/
if (!session_id()) session_start();
/**
* 获取当前登录用户信息，如果没有获取到则自动跳转到登录
*
*/

function bx_get_current_user (){
	if(empty($_SESSION['current_login_user'])) {
		// 没有当前登录用户信息，意味着没有
		header('location: /admin/login.php');
		exit();// 没有必要再执行之后的代码
	}
	return $_SESSION['current_login_user'];
}

// 查询方法
function bx_query ($sql){
	$conn = mysqli_connect(BX_DB_HOST,BX_DB_USER,BX_DB_PASS,BX_DB_NAME);

	// 指定数据库字符集编码为UTF8
	mysqli_set_charset($conn, 'utf8');

	if(!$conn) {
		exit('连接失败');
	}
	$query = mysqli_query($conn,$sql);

	// if (!$query) {
	// 	printf("Error: %s\n", mysqli_error($dbc));
	// 	exit();
	// }

	if(!$query) {
		// 查询失败
		return false;
	}
	return array($query,$conn);
}

/**
 * [bx_fetch description] 获取多条数据
 * @return [type] [description] =>返回的是一个索引数组套关联数组
 */
function bx_fetch_all ($sql){

	$query =  bx_query($sql)[0];
	$conn = bx_query($sql)[1];

	$result = [];
	while ($row = mysqli_fetch_assoc($query)) {
		$result[] = $row;
	}

	mysqli_free_result($query);
	mysqli_close($conn);

	return $result;
}

// 获取查询单条数据
// =>直接便是一个关联数组
function bx_fetch_one ($sql){
	$res = bx_fetch_all($sql);
	return isset($res[0]) ? $res[0] : null;
}

// 数据增加
/**
 * 执行一个增删改语句
 * @param  [type] $sql [description]
 * @return [type]      [description]
 */
function bx_execute ($sql){
	$conn = bx_query($sql)[1];
	// 对于增删改类的 操作都是获取受影响的行数
	// 此方法传入的是一个连接对象
	$affected_rows = mysqli_affected_rows($conn);

	mysqli_close($conn);

	return $affected_rows;
}


