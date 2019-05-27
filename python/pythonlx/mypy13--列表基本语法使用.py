Python 3.7.1 (v3.7.1:260ec2c36a, Oct 20 2018, 14:05:16) [MSC v.1915 32 bit (Intel)] on win32
Type "help", "copyright", "credits" or "license()" for more information.
>>> a = [10,20,30,'gaoqi','sxt']
>>> a
[10, 20, 30, 'gaoqi', 'sxt']
>>> b = []
>>> b
[]
>>> a.append(20)
>>> a
[10, 20, 30, 'gaoqi', 'sxt', 20]
>>> #使用list()创建
>>> a=list()
>>> a=list(range(10))
>>> s
Traceback (most recent call last):
  File "<pyshell#9>", line 1, in <module>
    s
NameError: name 's' is not defined
>>> a
[0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
>>> a=list("gaoqi,sxt")
>>> a
['g', 'a', 'o', 'q', 'i', ',', 's', 'x', 't']
>>>  list(range(10))
SyntaxError: unexpected indent
>>> list(range(10))
[0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
>>> list(range(0,10,1))
[0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
>>> list(range(2,20,2))
[2, 4, 6, 8, 10, 12, 14, 16, 18]
>>>  list(range(20,3,-1))
SyntaxError: unexpected indent
>>> list(range(20,3,-1))
[20, 19, 18, 17, 16, 15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4]
>>> list(range(-10,-33,-1))
[-10, -11, -12, -13, -14, -15, -16, -17, -18, -19, -20, -21, -22, -23, -24, -25, -26, -27, -28, -29, -30, -31, -32]
>>> a = [x*2 for x in range(6)]
>>> a
[0, 2, 4, 6, 8, 10]
>>> #高级用法
>>> a = [x*2 for x in range(100) if x%9==0]
>>> a
[0, 18, 36, 54, 72, 90, 108, 126, 144, 162, 180, 198]
>>> #x从0开始，循环一百次结束，每次循环*2，然后判断循环数➗9的余数是否为零，如果是的话就输出该数，不是则不要
