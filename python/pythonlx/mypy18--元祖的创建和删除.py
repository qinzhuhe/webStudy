Python 3.7.1 (v3.7.1:260ec2c36a, Oct 20 2018, 14:05:16) [MSC v.1915 32 bit (Intel)] on win32
Type "help", "copyright", "credits" or "license()" for more information.
>>> a = (10,20,30)
>>> type(a)
<class 'tuple'>
>>> a = 10,20,30
>>> type(a)
<class 'tuple'>
>>> b = (20)
>>> b
20
>>> type(b)
<class 'int'>
>>> b = (20,)
>>> type(b)
<class 'tuple'>
>>> b = tuple("abcd")
>>> b
('a', 'b', 'c', 'd')
>>> type(b)
<class 'tuple'>
>>> b = list("abcd")
>>> b
['a', 'b', 'c', 'd']
>>> b = tuple(range(3))
>>> b
(0, 1, 2)
>>> b = tuple([30,40,50])
>>> #使用tuple将数据转换为元祖内的数
>>> del b
>>>  b
SyntaxError: unexpected indent
>>> b
Traceback (most recent call last):
  File "<pyshell#20>", line 1, in <module>
    b
NameError: name 'b' is not defined
>>> 
