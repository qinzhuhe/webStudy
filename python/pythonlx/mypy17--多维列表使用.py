Python 3.7.1 (v3.7.1:260ec2c36a, Oct 20 2018, 14:05:16) [MSC v.1915 32 bit (Intel)] on win32
Type "help", "copyright", "credits" or "license()" for more information.
>>> a = []
>>> a = [
	 ["高小一",18,30000,"北京"]
	 ["高小二",19,20000,"上海"]
	 ["高小三",33,40000,"深圳"]
	 ]
Traceback (most recent call last):
  File "<pyshell#5>", line 3, in <module>
    ["高小二",19,20000,"上海"]
TypeError: list indices must be integers or slices, not tuple
>>> a = [
	 ["高小一",18,30000,"北京"],
	 ["高小二",19,20000,"上海"],
	 ["高小三",33,40000,"深圳"]
	 ]
>>> a
[['高小一', 18, 30000, '北京'], ['高小二', 19, 20000, '上海'], ['高小三', 33, 40000, '深圳']]
>>> a[0]
['高小一', 18, 30000, '北京']
>>> a[1]
['高小二', 19, 20000, '上海']
>>> a[3]
Traceback (most recent call last):
  File "<pyshell#10>", line 1, in <module>
    a[3]
IndexError: list index out of range
>>> a[2]
['高小三', 33, 40000, '深圳']
>>> a[0][3]
'北京'
>>> #引用a列表下的第一个元素下面元素下标为3的数据
>>> print(a[1][0],a[1][1],a[1][2]])
SyntaxError: invalid syntax
>>> print(a[1][0],a[1][1],a[1][2])
高小二 19 20000
>>> a = []
>>> a = [
	 ["高小一",18,30000,"北京"],
	 ["高小二",19,20000,"上海"],
	 ["高小三",20,30000,"深圳"],
	]
>>> for m in range(3):
	for n in range(4):
		print(a[m][n],end="\t")
	print() #打印完一行换一行

	
高小一	18	30000	北京	
高小二	19	20000	上海	
高小三	20	30000	深圳	
>>> #以上代码意思解释：首先使用二维列表打印内容，然后使用循环语句来进行模板设置，设置3列变量m四行变量n，在print中使用两个变量，在结束时(end)进行\t换行
>>> 
