<!DOCTYPE html>
<html lang="zh-CN">
<head>
  <meta charset="utf-8">
  <title>Navigation menus &laquo; Admin</title>
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
      <div class="page-title">
        <h1>电影TOP250</h1>
        <ul id="movies"></ul>
      </div>
    </div>
  </div>

  <?php $current_page = 'doub'; ?>
  <?php include 'inc/sidebar.php' ?>

  <script src="/static/assets/vendors/jquery/jquery.js"></script>
  <script src="/static/assets/vendors/bootstrap/js/bootstrap.js"></script>
  <!-- <script>
    // XMLHttpRequest 不能发送对于不同源地址的请求
    // $.get('http://douban.uieee.com/v2/movie/top250?start=0&count=10', {}, function (res){
    //   console.log(res);
    // })

    // 而 script 可以对不同源地址进行请求

    function foo (res){
      console.log(res)
    }
  </script>

  <script src="http://douban.uieee.com/v2/movie/top250?callback=foo"></script> -->
  <script>
    $.ajax({
      url: 'http://douban.uieee.com/v2/movie/top250?start=0&count=250',
      dataType: 'jsonp',
      success : function (res){
        $(res.subjects).each(function(i, item) {
          $('#movies').append(`<li><img src="${item.images.large}" alt="">${item.title}</li>`);
        });
      }
    })

  </script>
  <script>NProgress.done()</script>
</body>
</html>
