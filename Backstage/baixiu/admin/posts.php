<?php
require_once '../function.php';

bx_get_current_user();


// 处理分页参数
$page = empty($_GET['page']) ? 1 : (int)$_GET['page'];
$size = 20;


// 接受筛选参数
$where = '1 = 1';
// 此参数是为了让页码的状态跟随设定的状态进行相应的跳转
$search = '';
// 分类筛选
if (isset($_GET['category']) && $_GET['category'] != 'all'){
  $where .= ' and posts.category_id ='.$_GET['category'];
  $search .= '&category=' . $_GET['category'];
}

// 状态筛选
if (isset($_GET['status']) && $_GET['status'] != 'all'){
  $where .= " and posts.status = '{$_GET['status']}'";
  $search .= '&status=' . $_GET['status'];
}


// 为了防止页码输入为负数导致错误的情况，对页码进行判断
// $page = $page < 1 ? 1 : $page;
if ($page < 1){
  header('Location: /admin/posts.php?page=1' . $search);
}

// 首先计算最大页码数
// 为了防止数据出错，故此进行转型
$total_count = (int)bx_fetch_one("select count(1) as count from posts INNER JOIN categories on posts.category_id = categories.id
INNER JOIN users on posts.user_id = users.id where {$where}")['count'];
$total_page = (int)ceil($total_count / $size);

// 为了防止用户输入页码大于实际页数，进行判定
// $page = $page > $total_page ? $total_page : $page;
if ($page > $total_page){
  header('Location: /admin/posts.php?page='.$total_page . $search);
}



$offset = ($page - 1) * $size;

// 获取全部数据
$posts = bx_fetch_all("select
  posts.id,
  posts.title,
  users.nickname as user_name,
  categories.`name` as category_name,
  posts.created,
  posts.`status`
from posts
INNER JOIN categories on posts.category_id = categories.id
INNER JOIN users on posts.user_id = users.id
where {$where}
order by posts.created desc
limit {$offset}, {$size};");

// 查询全部的分类数据
$categories = bx_fetch_all ('select * from categories');



// 同样，为了方便数据的使用，设定一个区间
$visiables = 5;

// 计算最大和最小的页码
$begin = $page - ($visiables - 1) / 2;
$end = $begin + ($visiables - 1);



// 考虑合理性
// 如果开始展示页码小于1的话要怎么办，如果当最大展示页码大于了总页码该怎么办
$begin = $begin < 1 ? 1 : $begin;
// 当$begin进行改变时,$end也应该进行改变
$end = $begin + ($visiables - 1);

// 当结束页码大于了计算查询页码时
$end = $end > $total_page ? $total_page : $end;
// 当$end值进行改变时,相应的$begin值也应该进行改变
$begin = $page - ($visiables - 1) / 2;
// 到这时也同样应该重新判定一次，如果$begin小于1的话该怎么办
$begin = $begin < 1 ? 1 : $begin;

/*
1、当前页码显示高亮
2、左侧和右侧各有两个页码
3、开始页码不能小于1
4、结束页码不能大于最大页数
5、当前页码不为1时显示上一页
6、当前页码不为最大值时显示下一页
7、当开始页码不等于1是显示省略号
8、当结束页码不等于最大时显示省略号
 */


// 处理数据格式转换
/**
 * 转换状态显示
 * @param  string $status 英文状态
 * @return string         中文状态
 */
function convert_status ($status){
  $dict = array(
    'published' => '已发布',
    'drafted' => '草稿',
    'trashed' => '回收站'
  );
  return isset($dict[$status]) ? $dict[$status] : '未知';
}

function convert_date ($created){
  $timestamp = strtotime($created);
  return date('Y年m月d日<b\r>H:i:s', $timestamp);
}

 ?>
<!DOCTYPE html>
<html lang="zh-CN">
<head>
  <meta charset="utf-8">
  <title>Posts &laquo; Admin</title>
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
        <h1>所有文章</h1>
        <a href="post-add.html" class="btn btn-primary btn-xs">写文章</a>
      </div>
      <!-- 有错误信息时展示 -->
      <!-- <div class="alert alert-danger">
        <strong>错误！</strong>发生XXX错误
      </div> -->
      <div class="page-action">
        <!-- show when multiple checked -->
        <a class="btn btn-danger btn-sm" id="p_denger" href="javascript:;">批量删除</a>
        <form class="form-inline" action="  <?php echo $_SERVER['PHP_SELF']; ?> ">
          <select name="category" class="form-control input-sm">
            <option value="all">所有分类</option>
            <?php foreach ($categories as $item): ?>
              <option value="<?php echo $item['id']; ?>"<?php echo isset($_GET['category']) && $_GET['category'] == $item['id'] ? 'selected' : '' ?>><?php echo $item['name']; ?></option>
            <?php endforeach ?>
          </select>
          <select name="status" class="form-control input-sm">
            <option value="all">所有状态</option>
            <option value="drafted"<?php echo isset($_GET['status']) && $_GET['status'] == 'drafted' ? 'selected' : '' ?>>草稿</option>
            <option value="published"<?php echo isset($_GET['status']) && $_GET['status'] == 'published' ? 'selected' : '' ?>>已发布</option>
            <option value="trashed"<?php echo isset($_GET['status']) && $_GET['status'] == 'trashed' ? 'selected' : '' ?>>回收站</option>
          </select>
          <button class="btn btn-default btn-sm">筛选</button>
        </form>
        <ul class="pagination pagination-sm pull-right">
          <li><a href="#">上一页</a></li>
          <?php for ($i = $begin ; $i <= $end ; $i++): ?>
            <li <?php echo $i === $page ? 'class = "active"' : ''; ?>><a href="?page=<?php echo $i .$search ?>"><?php echo $i ?></a></li>
          <?php endfor ?>
          <li><a href="#">下一页</a></li>
        </ul>
      </div>
      <table class="table table-striped table-bordered table-hover">
        <thead>
          <tr>
            <th class="text-center" width="40"><input type="checkbox"></th>
            <th>标题</th>
            <th>作者</th>
            <th>分类</th>
            <th class="text-center">发表时间</th>
            <th class="text-center">状态</th>
            <th class="text-center" width="100">操作</th>
          </tr>
        </thead>
        <tbody>
          <?php foreach ($posts as $item) { ?>
            <tr>
              <td class="text-center"><input type="checkbox"></td>
              <td><?php echo $item['title']; ?></td>
              <td><?php echo $item['user_name']; ?></td>
              <td><?php echo $item['category_name']; ?></td>
              <td class="text-center"><?php echo convert_date($item['created']); ?></td>
              <td class="text-center"><?php echo convert_status($item['status']); ?></td>
              <!-- 一旦当输出的判断或者转换逻辑过于复杂，不建议直接卸载混编位置 -->
              <td class="text-center">
                <a href="javascript:;" class="btn btn-default btn-xs">编辑</a>
                <a href="/admin/posts-delete.php?id=<?php echo $item['id'] ?>" class="btn btn-danger btn-xs">删除</a>
              </td>
            </tr>
          <?php } ?>
        </tbody>
      </table>
    </div>
  </div>

  <?php $current_page = 'posts'; ?>
  <?php include 'inc/sidebar.php'; ?>

  <script src="/static/assets/vendors/jquery/jquery.js"></script>
  <script src="/static/assets/vendors/bootstrap/js/bootstrap.js"></script>
  <script>NProgress.done()</script>
</body>
</html>
