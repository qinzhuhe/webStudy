		// 自调用函数---小蛇
		(function () {
			var elements = []; //存放小蛇的每个身体部分

			// 小蛇的构造函数
			function snake(width, height, direction) {
				// 小蛇的每个部分的宽高
				this.width = width || 20;
				this.height = height || 20;
				this.body = [{
						x: 3,
						y: 2,
						color: "red"
					}, //头
					{
						x: 2,
						y: 2,
						color: "blue"
					}, //身体
					{
						x: 1,
						y: 2,
						color: "blue"
					} //身体
				];

				// 方向
				this.direction = direction || "right";
			}

			// 创建蛇的原型添加方法---小蛇初始化
			snake.prototype.init = function (map) {
				// 先删除之前的小蛇
				remove();
				// 循环遍历创建div
				for (var i = 0; i < this.body.length; i++) {
					var obj = this.body[i];
					// 创建div
					var div = document.createElement("div");
					// 将div加入到map地图中
					map.appendChild(div);
					// 设置div的样式
					// 脱离文档流
					div.style.position = "absolute";
					// 宽高
					div.style.width = this.width + "px";
					div.style.height = this.height + "px";
					// 横纵坐标
					div.style.left = obj.x * this.width + "px";
					div.style.top = obj.y * this.height + "px";
					// 背景颜色
					div.style.backgroundColor = obj.color;

					// 方向

					// 将div加入到elements中--为了方便删除
					elements.push(div);
				}
			};

			// 为原型添加方法---小蛇可以运动
			snake.prototype.move = function (food, map) {
				// 改变小蛇的身体的坐标位置
				for (var i = this.body.length - 1; i > 0; i--) {
					this.body[i].x = this.body[i - 1].x;
					this.body[i].y = this.body[i - 1].y;
				}
				//判断方向---改变小蛇的头的坐标位置
				switch (this.direction) {
					case "right":
						this.body[0].x += 1;
						break;
					case "left":
						this.body[0].x -= 1;
						break;
					case "top":
						this.body[0].y -= 1;
						break;
					case "bottom":
						this.body[0].y += 1;
						break;
				}
				// 判断有没有吃到食物
				// 小蛇的头的坐标和食物的坐标一致了
				var headX = this.body[0].x * this.width;
				var headY = this.body[0].y * this.height;
				// 食物的横纵坐标
				var foodx = food.x;
				var foody = food.y;
				// 判断横纵坐标是否一致
				if (headX == foodx && headY == foody) {
					// 获取小蛇最后的尾巴
					var last = this.body[this.body.length - 1];
					// 把最后的蛇尾复制一个，重新加入到小蛇的body中
					this.body.push({
						x: last.x,
						y: last.y,
						color: last.color
					});
					// 把食物删除，并且重新初始化食物
					food.init(map);
				}
			};


			// 删除小蛇的私有函数
			function remove() {
				//删除map中的小蛇的每个div,同时删除elements数组中的每个元素,从蛇尾向蛇头方向删除div
				var i = elements.length - 1;
				for (; i >= 0; i--) {
					var ele = elements[i];
					// 找到这个子元素的父级元素，然后删除这个子元素
					ele.parentNode.removeChild(ele);
					// 再次把elements中的这个子元素也删除
					elements.splice(i, 1);
				}
			}

			// 将snake暴露给window，以便于让外部访问
			window.snake = snake;
		}());