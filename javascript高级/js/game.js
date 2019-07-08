		// 自调用函数---游戏对象
		(function (){
			var that = null;
			// 游戏的构造函数
			function Game(map){
				this.food = new Food();
				this.snake = new snake();
				this.map = map;
				that = this;
			}
			// 添加原型方法---初始化游戏
			Game.prototype.init = function (){
				// 初始化游戏
				// 食物初始化
				this.food.init(this.map);
				// 小蛇初始化
				this.snake.init(this.map);
				// 调用自动移动小蛇的方法
				this.runSnake(this.food,this.map);
				// 调用按键的方法
				this.bindkey();
			};
			// 添加原型方法---设置小蛇可以自动的跑起来
			Game.prototype.runSnake = function (food,map){
				// 自动的去移动
				var timeId = setInterval(function(){
					// 此时的this是window
					// 移动小蛇
					this.snake.move(food,map);
					this.snake.init(map);
					// 横坐标的最大值
					var maxX = map.offsetWidth/this.snake.width;
					// 纵坐标的最大值
					var maxY = map.offsetHeight/this.snake.height;
					// 小蛇的头的坐标
					var headX = this.snake.body[0].x;
					var headY = this.snake.body[0].y;
					// console.log(this.snake.body[0].x);

					// 判断小蛇是否撞到横坐标边框，撞倒后停止游戏
					if(headX < 0 || headX>=maxX){
						clearInterval(timeId);
						alert("游戏结束！");
					}

					// 纵坐标
					if(headY < 0 || headY >= maxY){
						clearInterval(timeId);
						alert("游戏结束！");
					}
				}.bind(that),150);
			};
			// 添加原型方法---设置用户按键，改变小蛇移动的方向
			Game.prototype.bindkey = function (){
				// 获取用户的按键，改变小蛇的方向
				document.addEventListener("keydown", function (e){
					// 这里的this应该是楚大keydown的事件的对象---document
					// 所以，这里的this就是document
					// 获取按键按下的值
					switch(e.keyCode){
						case 37 : this.snake.direction = "left" ; break;
						case 38 : this.snake.direction = "top" ; break;
						case 39 : this.snake.direction = "right" ; break;
						case 40 : this.snake.direction = "bottom" ; break;
					}
				}.bind(that), false);
			};

			window.Game = Game;
		}());