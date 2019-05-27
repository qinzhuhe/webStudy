#导入海龟绘图模块
import turtle
t = turtle.Pen()
#这是一个循环
#循环开始，数值的改变即改变了层数笔画，围了多少圈等等

for x in range(360):
    t.forward(x)
    #角度，改变数值则改变角度，即形状改变
    t.left(120)
