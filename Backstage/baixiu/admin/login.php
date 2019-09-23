<?php

// 载入配置
require_once '../config.php';

// session开始，给用户找一个箱子(如果之前有就使用之前的即可，如果没有就给个新的)
session_start();

function login(){
  // 1、接受并进行校验
  // 2、持久化
  // 3、响应
  if(empty($_POST['email'])){
    $GLOBALS['message'] = '请填写邮箱';
    return;
  }

  if(empty($_POST['password'])){
    $GLOBALS['message'] = '请填写密码';
    return;
  }

  $email = $_POST['email'];
  $password = $_POST['password'];

  // 当客户端提交过来的完整的表单信息就应该开始对其进行数据校验
  $conn = mysqli_connect(BX_DB_HOST,BX_DB_USER,BX_DB_PASS,BX_DB_NAME);

  mysqli_set_charset($conn, 'utf8');

  if(!$conn) {
    exit('<h1>数据库连接失败</h1>');
  }

  // 根据用户输入用户名进行数据库查询，查询数据
  $query = mysqli_query($conn, "select * from users where email = '{$email}' limit 1;");

  // 查询数据若为空则报错
  if(!$query){
    $GLOBALS['message'] = '登录失败，请重试';
    return;
  }

  $admin = mysqli_fetch_assoc($query);

  // 验证用户名
  if(!$admin){
    // 用户名不存在
    $GLOBALS['message'] = '邮箱或者密码不匹配';
    return;
  }

  // 验证密码，而密码一般是加密存储的
  if($admin['password'] != $password){
    $GLOBALS['message'] = '邮箱或者密码不匹配';
    return;
  }

  // if ($email != 'admin@ceshi.com' || $password != '123456'){
  //   $GLOBALS['message'] = '邮箱和密码不匹配';
  //   return;
  // }

  // 存储一个登录标识
  // $_SESSION['is_logged_in'] = true;
  // 为了后面可以直接获取当前登录用户的信息，这里直接将用户信息放到 session 中
  $_SESSION['current_login_user'] = $admin;


  // 程序进行到这里，说明一切验证都已经通过了，表明可以跳转
  header('Location: /admin/index.php');
}

// 判断这里是否是post请求posts
if($_SERVER['REQUEST_METHOD'] === 'POST'){
  login();
}

// 退出功能
if($_SERVER['REQUEST_METHOD'] === 'GET' && isset($_GET['action']) && $_GET['action'] === 'logout'){
  // 删除了登录标识
  unset($_SESSION['current_login_user']);
}

 ?>
<!DOCTYPE html>
<html lang="zh-CN">
<head>
  <meta charset="utf-8">
  <title>Sign in &laquo; Admin</title>
  <link rel="stylesheet" href="/static/assets/vendors/bootstrap/css/bootstrap.css">
  <link rel="stylesheet" href="/static/assets/css/admin.css">
  <link rel="stylesheet" href="/static/assets/vendors/animate/animate.css">
</head>
<body>
  <div class="login">
    <!-- 可以通过在 form 中添加 novalidate 取消浏览器自带的校验功能 -->
    <!-- autocomplete = "off" 关闭客户端的自动完成功能 -->
    <form class="login-wrap<?php echo isset($message) ? ' shake animated' : '' ?>" action="<?php echo $_SERVER['PHP_SELF']; ?>" method="post" novalidate>
      <img class="avatar" src="/static/assets/img/default.png">
      <!-- 有错误信息时展示 -->
      <?php if(isset($message)):?>
        <div class="alert alert-danger">
          <strong>错误！</strong><?php echo $message; ?>
        </div>
      <?php endif ?>
      <div class="form-group">
        <label for="email" class="sr-only">邮箱</label>
        <input id="email" name="email" type="email" class="form-control" placeholder="邮箱" autofocus value="<?php echo empty($_POST['email']) ? '' : $_POST['email'] ?>">
      </div>
      <div class="form-group">
        <label for="password" class="sr-only">密码</label>
        <input id="password" name="password" type="password" class="form-control" placeholder="密码">
      </div>
      <button class="btn btn-primary btn-block">登 录</button>
    </form>
  </div>

  <script src="/static/assets/vendors/jquery/jquery.js"></script>
   <script>
    $(function ($) {
      // 1. 单独作用域
      // 2. 确保页面加载过后执行

      // 目标：在用户输入自己的邮箱过后，页面上展示这个邮箱对应的头像
      // 实现：
      // - 时机：邮箱文本框失去焦点，并且能够拿到文本框中填写的邮箱时
      // - 事情：获取这个文本框中填写的邮箱对应的头像地址，展示到上面的 img 元素上

      var emailFormat = /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[a-zA-Z0-9]+$/

      $('#email').on('blur', function () {
        var value = $(this).val()
        // 忽略掉文本框为空或者不是一个邮箱
        if (!value || !emailFormat.test(value)) return

        // 用户输入了一个合理的邮箱地址
        // 获取这个邮箱对应的头像地址
        // 因为客户端的 JS 无法直接操作数据库，应该通过 JS 发送 AJAX 请求 告诉服务端的某个接口，
        // 让这个接口帮助客户端获取头像地址

        $.get('/admin/api/avatar.php', { email: value }, function (res) {
          // 希望 res => 这个邮箱对应的头像地址
          if (!res) return
          // 展示到上面的 img 元素上
          // $('.avatar').fadeOut().attr('src', res).fadeIn()
          $('.avatar').fadeOut(function () {
            // 等到 淡出完成
            $(this).on('load', function () {
              // 图片完全加载成功过后
              $(this).fadeIn()
            }).attr('src', res)
          })
        })
      })
    })
  </script>
</body>
</html>
