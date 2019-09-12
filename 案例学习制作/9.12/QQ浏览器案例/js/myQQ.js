$(function (){
	setTimeout(function (){
		$(".section1").addClass("comein");
	}, 200);
	$('#fullpage').fullpage({
		// 显示项目符号
		navigation : true,
		// 循环滚动
		loopBottom : true,
		onLeave: function (index, nextIndex, direction){
			if(nextIndex != 1){
				// 如果不是第一屏幕，就给背景添加旋转的，因为逆时针所以是-60deg
				$("#bg").addClass("rotate");
			}else{
				$("#bg").removeClass("rotate");
			}

			// 第二屏
			// 当我们进入第二屏的时候，53 这个图变大
			if(nextIndex == 2){
				// jQuery 中的animate 是不支持 transform的
				$(".p2").css("transform" , "translateX(-50%) translateY(-50%) translateZ(0px) scale(1)"); // 通过jQuery中的 css 和 transition 搭配，基本也能实现动画效果
			}else{
				$(".p2").css("transform" , "translateX(-50%) translateY(-50%) translateZ(1000px) scale(1)")
			}

			// 第三屏
			// 当我们进入第三屏幕的时候，盒子进入屏幕
			if(nextIndex == 3){
				$(".p3").css("transform","translateZ(-50px) rotateX(30deg)");
				$(".title3").css("transform","translateZ(0px) rotateX(0deg)");
			}

			// 从第三屏离开到第四屏的时候
			if(nextIndex == 4){
				$(".p3").css("transform","translateZ(-200px) rotateX(-45deg) translateX(3000px)");
				$(".title3").css("transform","translateZ(1200px) rotateY(-60deg)");
			}

		}
	})
});