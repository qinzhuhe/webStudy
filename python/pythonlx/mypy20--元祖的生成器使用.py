Python 3.7.1 (v3.7.1:260ec2c36a, Oct 20 2018, 14:05:16) [MSC v.1915 32 bit (Intel)] on win32
Type "help", "copyright", "credits" or "license()" for more information.
>>> s = (x*2 for x in range(5))
>>> s
<generator object <genexpr> at 0x03809AB0>
>>> tuple(s)
(0, 2, 4, 6, 8)
>>> #使用生成器对象创建元祖，创建从0开始，一共创建五个数，每创建一个都+2；
>>> #生成器只能用一次
>>> s = (x*2 for in range(5))
SyntaxError: invalid syntax
>>> s = (x*2 for x in range(5))
>>> s.__next__()
0
>>> s.__next__()
2
>>> s.__next__()
4
>>> s.__next__()
6
>>> s.__next__()
8
>>> s.__next__()
Traceback (most recent call last):
  File "<pyshell#12>", line 1, in <module>
    s.__next__()
StopIteration
>>>  
