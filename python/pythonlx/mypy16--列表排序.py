Python 3.7.1 (v3.7.1:260ec2c36a, Oct 20 2018, 14:05:16) [MSC v.1915 32 bit (Intel)] on win32
Type "help", "copyright", "credits" or "license()" for more information.
>>> a = [20,10,30,40]
>>> id(a)
61453376
>>> a.sort()
>>> a
[10, 20, 30, 40]
>>> id(a)
61453376
>>> a.sor(reverse=True)
Traceback (most recent call last):
  File "<pyshell#5>", line 1, in <module>
    a.sor(reverse=True)
AttributeError: 'list' object has no attribute 'sor'
>>> a.sort(reverse=True)
>>> a
[40, 30, 20, 10]
>>> import random
>>> random.shuffle(a)#打乱顺序
>>> a
[40, 20, 10, 30]
>>> a = [40,30,20,30]
>>> id(a)
61453216
>>> a = sorted(a)
>>> a
[20, 30, 30, 40]
>>> id(a)'
SyntaxError: EOL while scanning string literal
>>> id(a)
61453696
>>> a = [20,10,30,40]
>>> a[::-1]
[40, 30, 10, 20]
>>> c = reversed(a)
>>> c
<list_reverseiterator object at 0x037D8B70>
>>> list(c)
[40, 30, 10, 20]
>>> list(c)
[]
>>> #使用迭代器来对列表进行逆序排列,reversed()
>>> 
