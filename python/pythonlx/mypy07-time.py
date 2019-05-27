Python 3.7.1 (v3.7.1:260ec2c36a, Oct 20 2018, 14:05:16) [MSC v.1915 32 bit (Intel)] on win32
Type "help", "copyright", "credits" or "license()" for more information.
>>> time.time()
Traceback (most recent call last):
  File "<pyshell#0>", line 1, in <module>
    time.time()
NameError: name 'time' is not defined
#打开(import)时间模块
>>> import time

#使用time来进行获取当前时间的行为
>>> time.time()
1541678948.4181657

#使用变量b承接当前时间被转为整数去掉小数点后的操作
>>> b=int(time.time())
>>> b
1541679053

#使用分钟（totalMinutes）来计算当前的分钟数
>>> totalMinutes=b/60
>>> totalMinutes
25694650.883333333

#将分钟数化为整数，使用“//”去掉小数点
>>> totalMinutes = b//60
>>> totalMinutes
25694650

#将分钟转换为小时，使用(totalHours)来接收
>>> totalHours = totalMinutes//60
>>> totalHours
428244

#将小时转换为天数，使用(totalHours)来接收有多少天
>>> totalDays =totalHours//24
#报错
>>> totaldays
Traceback (most recent call last):
  File "<pyshell#12>", line 1, in <module>
    totaldays
NameError: name 'totaldays' is not defined
#运行程序
>>> totalDays
17843

#报错
>>> totalYears = totalDay//365
Traceback (most recent call last):
  File "<pyshell#14>", line 1, in <module>
    totalYears = totalDay//365
NameError: name 'totalDay' is not defined

#将天数转换为年数，算清具体有多少年，假设一年由三百六十五天，使用(totalYears)接收
>>> totalYears = totalDays//365
>>> totalYears
48
>>> 
