//php.ini 配置文件:
display_errors 

php引入文件用相对路径
include_one
request


//my.ini 配置
character_set_server=utf8
//方法二
header("Content-type: text/html; charset:utf-8");

关闭phpwarning提示的方法（尽量少修改配置文件而用代码方式解决）：

1.修改php.ini文件中的属性：
display_errors = Off
error_reporting = E_ALL

2.最好是在php文件开头写入：<?php error_reporting(0); ?>
