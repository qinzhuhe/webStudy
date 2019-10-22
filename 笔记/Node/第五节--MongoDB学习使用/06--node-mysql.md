# node 操作 mysql

安装：

```shell
npm i mysql
```



具体使用：

```javascript
var mysql = require('mysql');

// 1. 创建连接
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'root',
  database : 'users'
});

// 2. 连接数据库
connection.connect();

// 3. 执行数据操作
// 这一步执行增删改查
connection.query('INSERT INTO user VALUES(null, "admin", "123456")', function (error, results, fields) {
  if (error) throw error;
  console.log('The solution is: ', results);
});

// 4. 关闭连接
connection.end();
```

