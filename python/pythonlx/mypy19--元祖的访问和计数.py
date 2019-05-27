Python 3.7.1 (v3.7.1:260ec2c36a, Oct 20 2018, 14:05:16) [MSC v.1915 32 bit (Intel)] on win32
Type "help", "copyright", "credits" or "license()" for more information.
>>> a = (20,30,40)
>>> a[0]
20
>>> a[1]
30
>>> a[1]=300
Traceback (most recent call last):
  File "<pyshell#3>", line 1, in <module>
    a[1]=300
TypeError: 'tuple' object does not support item assignment
>>> a = tuple("abcdefghijkl.mn")
>>> a
('a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', '.', 'm', 'n')
>>> a[1:10]
('b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j')
>>> a[::-1]
('n', 'm', '.', 'l', 'k', 'j', 'i', 'h', 'g', 'f', 'e', 'd', 'c', 'b', 'a')
>>> sorted(a)
['.', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n']
>>> a = 1,20
>>> b = 30,20
>>> a+b
(1, 20, 30, 20)
>>> a
(1, 20)
>>> len(a)
2
>>> sum(a)
21
>>> max(a)
20
>>> min(a)
1
>>> a = [10,20,30]
>>> b = [40,50,60]
>>> 
>>> c = [70,80,90]
>>> d = zip(a,b,c)
>>> list(d)
[(10, 40, 70), (20, 50, 80), (30, 60, 90)]
>>> #使用zip办法将列表元素组合成为元祖
