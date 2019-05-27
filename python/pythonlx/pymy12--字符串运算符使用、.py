Python 3.7.1 (v3.7.1:260ec2c36a, Oct 20 2018, 14:05:16) [MSC v.1915 32 bit (Intel)] on win32
Type "help", "copyright", "credits" or "license()" for more information.
>>> import io
>>> s = "hello,sxt"
>>> sio = io.stringIO(s)
Traceback (most recent call last):
  File "<pyshell#2>", line 1, in <module>
    sio = io.stringIO(s)
AttributeError: module 'io' has no attribute 'stringIO'
>>> sio =io.stringIO(s)
Traceback (most recent call last):
  File "<pyshell#3>", line 1, in <module>
    sio =io.stringIO(s)
AttributeError: module 'io' has no attribute 'stringIO'
>>> sio =io.StringIO(s)
>>> sio
<_io.StringIO object at 0x03784D50>
>>> sio.getvalue()
'hello,sxt'
>>> sio.seek(7)
7
>>> sio.write("g")
1
>>> sio.getvalue()
'hello,sgt'
>>> #基本运算符
>>> a = 4
>>> 3<a<10
True
>>> a = 0b
SyntaxError: invalid token
>>> a = 0b01000
>>> a = 0b01001
>>> a
9
>>> b
Traceback (most recent call last):
  File "<pyshell#17>", line 1, in <module>
    b
NameError: name 'b' is not defined
>>> a = 0b11001
>>> b = 0b01000
>>> a
25
>>> b
8
>>> c = a|b
>>> c
25
>>> bin(c)
'0b11001'
>>> bin(a&b)
'0b1000'
>>> bin(a^b)
'0b10001'
>>> a = 3
>>> a<<3
24
>>> #左移一位等于*3，左移两位等于*9
>>> 3+3==>
SyntaxError: invalid syntax
>>> 3+2
5
>>> "3" + "2"
'32'
>>> [10,20,30] + [40,50,60]
[10, 20, 30, 40, 50, 60]
>>> 3*2
6
>>> "sxt" * 3
'sxtsxtsxt'
>>> [10,20,30]*3
[10, 20, 30, 10, 20, 30, 10, 20, 30]
>>> (5+10*x)/5-13*(y-1)*(a+b)/x+9*(5/x+(12+x)/y)
Traceback (most recent call last):
  File "<pyshell#37>", line 1, in <module>
    (5+10*x)/5-13*(y-1)*(a+b)/x+9*(5/x+(12+x)/y)
NameError: name 'x' is not defined
>>> 
