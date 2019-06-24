/**
 * [getstyle description]
 * @param  {[type]} element [description]--->元素
 * @param  {[type]} attr    [description]--->计算后的元素属性值
 * @return {[type]}         [description]
 */
function getstyle(element,attr){
	return window.getComputedStyle ? window.getComputedStyle(element,null)[attr] : element.currentStyle[attr];
}

/**
 * [vspeed description]
 * @param  {[type]}   element [description]--->元素
 * @param  {[type]}   json    [description]--->对象--->多个属性及多个目标值
 * @param  {Function} fn      [description]--->函数
 * @return {[type]}           [description]
 */
function vspeed(element,json,fn){
	// 清理定时器
	clearInterval(element.timId);
	// 启动定时器
	element.timId = setInterval(function (){
		// 默认假装所有的元素都已经到达其对应的目标值
		var flag = true;
		// 遍历json对象中的所有属性还有属性对应的目标值
		for(var attr in json){
			// 判断当前属性是否是设置透明度的
			if(attr == "opacity"){
				// 获取元素的当前的透明度
				var current = getstyle(element,attr)*100;
				// 获取元素目标的透明度
				var target = json[attr]*100;
				// 为了方便计算将两个值都放大100倍

				// 进行计算
				var step = (target-current)/10;
				// 判断是否正负
				step = step > 0 ? Math.ceil(step) : Math.floor(step);
				// 移动后的值
				current += step;
				// 将放大的数值缩回来
				element.style[attr] = current/100;
			}


			// 判断当前属性是否是设置层级的
			else if(attr=="zIndex"){
				element.style[attr] = json[attr];
			}


			// 普通属性
			else{
				// 获取元素这个属性的当前的值
				var current = parseInt(getstyle(element,attr));
				// 当前的属性对应的目标值
				var target = json[attr];
				// 移动的步数
				var step = (target-current)/10;
				step = step>0 ? Math.ceil(step) : Math.floor(step);
				current += step;//移动后的值
				element.style[attr] = current+"px";
			}
			if(current!=target){
				// 清理定时器
				flag = false;
			}
		}
		if(flag){
			// 清理定时器
			clearInterval(element.timId);
			if(fn){
				fn();
			}
		}
		// 测试代码
		console.log("目标位置："+target+"，当前位置："+current+"，每次移动："+step);
	}, 20);
}