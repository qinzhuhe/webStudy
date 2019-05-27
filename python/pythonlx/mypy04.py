Python 3.7.1 (v3.7.1:260ec2c36a, Oct 20 2018, 14:05:16) [MSC v.1915 32 bit (Intel)] on win32
Type "help", "copyright", "credits" or "license()" for more information.
>>> a=3
>>> a
3
>>> id(3)
1879951520
>>> type(3)
<class 'int'>
>>> b = "社保了"
>>> id(a)
1879951520
>>> type(a)
<class 'int'>
>>> print(a)
3
>>> id(b)
57860008
>>> type(b)
<class 'str'>
>>> print(b)
社保了
>>> a=3
>>> #如上所例子，你定义了一个变量a，然后将“3”赋值给了a，但赋予的不仅仅只有3这个数值，还有3的id地址（id），类型（type），所以你寻找到“a”和3的信息一样。
