Python 3.7.1 (v3.7.1:260ec2c36a, Oct 20 2018, 14:05:16) [MSC v.1915 32 bit (Intel)] on win32
Type "help", "copyright", "credits" or "license()" for more information.
>>> #列表元素的增加和删除
>>> a = [20,40]
>>> a.append(80)
>>> a
[20, 40, 80]
>>> id(a)
62811592
>>> a = a+[50]
>>> id(a)
54375488
>>> a = [20,40]
>>> id(a)
54330552
>>> a.extend([10,60])
>>> a
[20, 40, 10, 60]
>>> id(a)
54330552
>>> a = [10,20,30]
>>> a.insert(1,55)
>>> a
[10, 55, 20, 30]
>>> id(a)
54375488
>>> #列表元素的删除
>>> a = [10,20,30]
>>> del a[1]
>>> a
[10, 30]
>>> a = [10,20,30,40,50]
>>> a.pop()
50
>>> a
[10, 20, 30, 40]
>>> a.pop(1)
20
>>> a
[10, 30, 40]
>>> a = [10,20,30,40,30,20,30]
>>> a.remove(20)
>>> a
[10, 30, 40, 30, 20, 30]
>>> a.remove(222)
Traceback (most recent call last):
  File "<pyshell#28>", line 1, in <module>
    a.remove(222)
ValueError: list.remove(x): x not in list
>>> a = [1,20,30,10,10,20,50,50,66]
>>> a[2]
30
>>> a[55]
Traceback (most recent call last):
  File "<pyshell#31>", line 1, in <module>
    a[55]
IndexError: list index out of range
>>> a.index(20)
1
>>> a.index(20,3)
5
>>> a.index(20,3,5)
Traceback (most recent call last):
  File "<pyshell#34>", line 1, in <module>
    a.index(20,3,5)
ValueError: 20 is not in list
>>> a.index(20,0,5)
1
>>> #从索引位置开始，0到5这个区间，第一次出现20这个数字的位置为1
>>> a = [20,30,1,0,2,0,50,20,20,10,20,4,0,20,4,0]
>>> a.count(20)
5
>>> #统计20在列表中出现的次数共有多少
>>> len(a)
16
>>> 20 in a
True
>>> 100 not in a
True
>>> #判断元素是否存在于列表当中，20存在a列表中，所以使用in返回true,100不存在于a中，使用not in 判断，判断正确，所以返回true
>>> a.count(200)
0
>>> 
