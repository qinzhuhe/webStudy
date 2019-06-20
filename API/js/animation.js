/**
 * [animate description]
 * @param  {[type]} element [description]---外部传入的一个元素
 * @param  {[type]} target  [description]---想要到达的大小(目标)
 * @return {[type]}         [description]
 */
function animate (element,target){
	// 先清理定时器
	clearInterval(element.tim);
	// 创建元素下的对象，用于定时器
	 element.tim = setInterval(function (){
		// 获取位置
		var current = element.offsetLeft;
		// 每次移动的距离
		var trr = 10;
		// 如果当前位置小于目标就是正数，否则就是负数
		trr = current<target?trr:-trr;
		// 每次移动后的距离
		current += trr;
		// 判断当前移动后的位置是否到达目标地址
		if(Math.abs(target - current) >= Math.abs(trr)){
			element.style.left = current + "px";
		}
		else{
			clearInterval(element.tim);
			element.style.left = current + "px";
		}
	}, 20);
}