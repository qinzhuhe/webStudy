Python 3.7.1 (v3.7.1:260ec2c36a, Oct 20 2018, 14:05:16) [MSC v.1915 32 bit (Intel)] on win32
Type "help", "copyright", "credits" or "license()" for more information.
>>> a = "abd_33"
>>> b = "abd_33"
>>> a is b
True
>>> id(a)
61643488
>>> id(b)
61643488
>>> a == b
True
>>> c = "dd#"
>>> d = "dd#"
>>> c is d
False
>>> id(c)
61643520
>>> id(d)
61644448
>>> c == d
True
>>> a = "abcdefg"
>>> 'b' in a
True
>>> a ='''我是高崎，今年十八岁了，我在北京上学堂科技上班，我的儿子叫做高罗西，我是一个编程教育的普及者，希望影响正在学习变成的朋友们。我的儿子也正在学习，希望他十八岁的时候可以超过我。'''
>>> len(a)
87
>>> a.startswith('我是高崎')
True
>>> a.endswith('过我')
False
>>> a.find('高')
2
>>> a.rfind('高')
30
>>> a.count('编程')
1
>>> a.count('的')
5
>>> a.isalnum()
False
>>> "   sxt    ".strip()
'sxt'
>>> "   s x t     ".strip()
's x t'
>>> "* s *s * t".strip("*")
' s *s * t'
>>> '***sxt  **'.rstrip("*")
'***sxt  '
>>> #大小写转换
>>> a = 'gaoqi love programming,love SXT'
>>> a
'gaoqi love programming,love SXT'
>>> a.capitalize
<built-in method capitalize of str object at 0x03A8EF70>
>>> a.capitalize()
'Gaoqi love programming,love sxt'
>>> a.title()
'Gaoqi Love Programming,Love Sxt'
>>> a.upper()
'GAOQI LOVE PROGRAMMING,LOVE SXT'
>>> a.lower()
'gaoqi love programming,love sxt'
>>> a.swapcace()
Traceback (most recent call last):
  File "<pyshell#35>", line 1, in <module>
    a.swapcace()
AttributeError: 'str' object has no attribute 'swapcace'
>>> a.swapcase()
'GAOQI LOVE PROGRAMMING,LOVE sxt'
>>> 
>>> 
>>> #格式排版
>>> a = 'SXT'
>>> a.center(10,"*")
'***SXT****'
>>> a.rjust(10,"*")
'*******SXT'
>>> a.ljust(10,"*")
'SXT*******'
>>> 
