# 增删改查操作

## 增加数据

 => save({})

```javascript
var admin = new User({
	username: 'admin',
	password: '123456',
	email: 'admin@admin.com'
})

admin.save(function (err, ret) {
	if (err) {
		console.log('保存失败')
	} else {
		console.log('保存成功')
		console.log(ret)
	}
})
```



## 查询数据

#### 查询所有数据

=> find({})

```javascript
User.find(function (err, ret) {
	if (err) {
		console.log('查询失败')
	} else {
		console.log(ret)
	}
})
```

#### 按照条件查询数据

=> find({ 条件 }, {})

```javascript
User.find({
	username: '张三'
}, function (err, ret) {
	if (err) {
		console.log('查询失败')
	} else {
		console.log(ret)
	}
})
```

#### 只找匹配条件的第一条数据 

=> findOne({ 条件 }, {})

```javascript
User.findOne({
	username: '张三',
	password: 123456
}, function (err, ret) {
	if (err) {
		console.log('查询失败')
	} else {
		console.log(ret)
	}
})
```



## 删除数据 

#### 根据条件删除所有

=> remove({ 条件 }, [callback])

```javascript
User.remove({
	username: '张三'
}, function (err, ret) {
	if (err) {
		console.log('删除失败')
	} else {
		console.log('删除成功')
		console.log(ret)
	}
})
```

#### 根据条件删除一个

=> findOneAndRemove(conditions, {option}, [callback])

```javascript
Student.findOneAndRemove({
	username: '张三'
}, function (err) {
		if (err) {
			return res.status(500).send('Server error')
		}
		res.redirect('/students')
})
```

#### 根据 id 删除一个

=> findByIdAndRemove(id, {option}, [callback])

```javascript
Student.findByIdAndRemove(id, function (err) {
		if (err) {
			return res.status(500).send('Server error')
		}
		res.redirect('/students')
})
```





## 更新数据 

=> findByIdAndUpdate('条件', { 修改内容 }, {})

```javascript
User.findByIdAndUpdate('5da6e8bae5d7a20eacf04d63', {
	password: '123'
}, function (err, ret) {
	if (err) {
		console.log('更新失败')
	} else {
		console.log('更新成功')
	}
})
```

