Python 3.7.1 (v3.7.1:260ec2c36a, Oct 20 2018, 14:05:16) [MSC v.1915 32 bit (Intel)] on win32
Type "help", "copyright", "credits" or "license()" for more information.
>>> a = "名字是:{0},年龄为:{1}"
>>> a.format("高崎",22)
'名字是:高崎,年龄为:22'
>>> a.format("高田",11)
'名字是:高田,年龄为:11'
>>> b = "名字是{name},年龄是{age}"
>>> a.format(name='高崎',age='44')
Traceback (most recent call last):
  File "<pyshell#4>", line 1, in <module>
    a.format(name='高崎',age='44')
IndexError: tuple index out of range
>>> a.format(age=12,name='高崎')
Traceback (most recent call last):
  File "<pyshell#5>", line 1, in <module>
    a.format(age=12,name='高崎')
IndexError: tuple index out of range
>>> b.format(age=11,name="高崎")
'名字是高崎,年龄是11'
>>> b.format(age=11,name="高崎")#'alt'+'p'复制前面代码
'名字是高崎,年龄是11'
>>> 
>>> #填充和对齐
>>> "我是{0}，我喜欢数字{1:*^8}".format("高崎",666)
'我是高崎，我喜欢数字**666***'
>>> "我是{0}，我喜欢数字{1:*<8}".format("高崎",666)
'我是高崎，我喜欢数字666*****'
>>> "我是{0}，我喜欢数字{1:*>8}".format("高崎",666)
'我是高崎，我喜欢数字*****666'
>>> "{0>10d}".format(3)
Traceback (most recent call last):
  File "<pyshell#13>", line 1, in <module>
    "{0>10d}".format(3)
KeyError: '0>10d'
>>> "{:0>10d}".format(3)
'0000000003'
>>> #元素下标为'0'的字符串填充到10个字符串长度，如果没有指定填充内容，默认为0，且右对齐
>>> "{:0*>10d}".format(3)
Traceback (most recent call last):
  File "<pyshell#16>", line 1, in <module>
    "{:0*>10d}".format(3)
ValueError: Invalid format specifier
>>> "{:*>10d}".format(3)
'*********3'
>>> 
