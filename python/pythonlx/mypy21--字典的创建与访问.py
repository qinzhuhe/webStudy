Python 3.7.1 (v3.7.1:260ec2c36a, Oct 20 2018, 14:05:16) [MSC v.1915 32 bit (Intel)] on win32
Type "help", "copyright", "credits" or "license()" for more information.
>>> a = {'name':'zhaoyi','age':18,'job':'programmer'}
>>> a
{'name': 'zhaoyi', 'age': 18, 'job': 'programmer'}
>>> #使用{}、dict来创建字典对象
>>> a = dict(name='gaoqi',age=18,job='programmer')
>>> b = dict([("name","gaoqi"),("age",18)])
>>> b
{'name': 'gaoqi', 'age': 18}
>>> c = {}   #创建空的字典对象
>>> d = dict()   #创建空的字典对象
>>> k = ["a","b","c"]
>>> v = [100,200,300]
>>> d = dict(zip(v,k))
>>> d
{100: 'a', 200: 'b', 300: 'c'}
>>> #使用zip 创建字典对象
>>> a = dict.fromkeys(['name','age','job'])
>>> a
{'name': None, 'age': None, 'job': None}
>>> 
>>> 
>>> #字典元素的访问
>>> a
{'name': None, 'age': None, 'job': None}
>>> a = {'name':'gaoqi','age':18,'job','programmer'}
SyntaxError: invalid syntax
>>> a = {'name':'gaoqi','age':18,'job':'programmer'}
>>> a
{'name': 'gaoqi', 'age': 18, 'job': 'programmer'}
>>> a = ["name"]
>>> a = {'name':'gaoqi','age':18,'job':'programmer'}
>>> a["name"]
'gaoqi'
>>> a["sdfsdfsfsfsf"]
Traceback (most recent call last):
  File "<pyshell#25>", line 1, in <module>
    a["sdfsdfsfsfsf"]
KeyError: 'sdfsdfsfsfsf'
>>> a.get('name')
'gaoqi'
>>> a.get('sex','司机打飞机')
'司机打飞机'
>>> a.items()
dict_items([('name', 'gaoqi'), ('age', 18), ('job', 'programmer')])
>>> #列出所有的键值对
>>> a.keys
<built-in method keys of dict object at 0x03E647E0>
>>> a.keys()
dict_keys(['name', 'age', 'job'])
>>> a.values()
dict_values(['gaoqi', 18, 'programmer'])
>>> len(a)
3
>>> "age" in a
True
>>> 
