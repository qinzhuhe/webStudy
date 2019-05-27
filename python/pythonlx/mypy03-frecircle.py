#绘制奥运五环

import turtle


turtle.width(10)#改变笔触大小

#1 首先绘制圆，半径定为50，制定坐标点。
#  到达坐标点之前抬起笔，将路径抹去
#  然后到达坐标后重新打开笔触，绘制圆形，以下重复步骤

turtle.color("blue")
#进行颜色设定，设定蓝色
turtle.circle(50)

turtle.penup()
turtle.goto(120,0)
turtle.pendown()

#2

turtle.color("black")
#进行颜色设定，设定黑色
turtle.circle(50)

turtle.penup()
turtle.goto(240,0)
turtle.pendown()

#3

turtle.color("red")
#进行颜色设定，设定红色
turtle.circle(50)

turtle.penup()
turtle.goto(60,-50)
turtle.pendown()

#4

turtle.color("yellow")
#进行颜色设定，设定黄色
turtle.circle(50)

turtle.penup()
turtle.goto(182,-50)
turtle.pendown()

#5
turtle.color("green")
#进行颜色设定，设定为绿色
turtle.circle(50)
