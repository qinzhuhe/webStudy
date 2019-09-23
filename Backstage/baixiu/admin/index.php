<?php

  // 校验数据当前访问用户的箱子(session)有没有登录的标识
    // session_start();
    // if(empty($_SESSION['current_login_user'])){
    //   // 没有当前登录用户信息，意味着没有进行登录
    //   header('Location: /admin/login.php');
    // }

    require_once '../function.php';
    // 判断用户是否登陆一定是最先去做的
    bx_get_current_user();

    // 获取页面所需要的数据
    // 如果有重复的操作一定要封装起来

    // 文章总量
    $posts = bx_fetch_one('select count(1) as num from posts;')['num'];
    // 草稿总量
    $posts_cao = bx_fetch_one('select count(1) as num from posts where status = "drafted"')['num'];
    // 分类
    $cate = bx_fetch_one('select count(1) as num from categories')['num'];
    // 评论
    $comments = bx_fetch_one('select count(1) as num from comments')['num'];
    // 待审核评论
    $comments_held = bx_fetch_one('select count(1) as num from comments where status = "held"')['num'];


 ?>
<!DOCTYPE html>
<html lang="zh-CN">
<head>
  <meta charset="utf-8">
  <title>Dashboard &laquo; Admin</title>
  <link rel="stylesheet" href="/static/assets/vendors/bootstrap/css/bootstrap.css">
  <link rel="stylesheet" href="/static/assets/vendors/font-awesome/css/font-awesome.css">
  <link rel="stylesheet" href="/static/assets/vendors/nprogress/nprogress.css">
  <link rel="stylesheet" href="/static/assets/css/admin.css">
  <script src="/static/assets/vendors/nprogress/nprogress.js"></script>
</head>
<body>
  <script>NProgress.start()</script>

  <div class="main">
    <?php include 'inc/navbar.php' ?>
    <div class="container-fluid">
      <div class="jumbotron text-center">
        <h1>One Belt, One Road</h1>
        <p>Thoughts, stories and ideas.</p>
        <p><a class="btn btn-primary btn-lg" href="post-add.html" role="button">写文章</a></p>
      </div>
      <div class="row">
        <div class="col-md-4">
          <div class="panel panel-default">
            <div class="panel-heading">
              <h3 class="panel-title">站点内容统计：</h3>
            </div>
            <ul class="list-group">
              <li class="list-group-item"><strong><?php echo $posts ?></strong>篇文章（<strong><?php echo $posts_cao ?></strong>篇草稿）</li>
              <li class="list-group-item"><strong><?php echo $cate ?></strong>个分类</li>
              <li class="list-group-item"><strong><?php echo $comments ?></strong>条评论（<strong><?php echo $comments_held ?></strong>条待审核）</li>
            </ul>
          </div>
        </div>
        <div class="col-md-4"></div>
        <div class="col-md-4">
          <canvas id="chart" height="400px" width="400px"></canvas>
        </div>
      </div>
    </div>
  </div>

  <?php $current_page = 'index'; ?>
  <?php include 'inc/sidebar.php'; ?>

  <script src="/static/assets/vendors/jquery/jquery.js"></script>
  <script src="/static/assets/vendors/bootstrap/js/bootstrap.js"></script>
  <script src="/static/assets/vendors/chart/Chart.min.js"></script>
  <script>
    var ctx = document.getElementById('chart').getContext('2d');
    var myChart = new Chart(ctx, {
      type: 'pie',
      data: {
        datasets: [
          {
            data: [<?php echo $posts ?>,<?php echo $posts_cao ?>,<?php echo $cate ?>,<?php echo $comments_held ?>,<?php echo $comments ?>],
            backgroundColor: [
              '#7401DF',
              'hotpink',
              'pink',
              '#298A08',
              '#086A87'
            ]
          },
        ],

        // These labels appear in the legend and in the tooltips when hovering different arcs
        labels: [
            '文章',
            '草稿文章',
            '分类',
            '待审核评论',
            '评论'
        ],
      }
    });
  </script>
  <script>NProgress.done()</script>
</body>
</html>
