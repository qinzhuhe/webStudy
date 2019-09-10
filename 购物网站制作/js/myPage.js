$(function(){
    var k = $(window).height();
    var flag = false;
    $('#fullpage').fullpage({ // fullpage 方法里面接受json对象形式
    	// 是否显示项目导航
    	navigation : true,
    	// navigationPosition: "left",
    	// loopBottom: true,
    	// 滚动速度，单位为毫秒
    	scrollingSpeed: 1200,

    	// 回调函数滚动到某一屏后的回调函数，接受anchorLink和index两个参数，anchorLink是锚链接的名称，index是序号，从1开始计算
    	afterLoad: function (anchorLink, index){
    		if(index == 2 && flag == false){
    			$(".search").show().animate({"right": 370}, 1500 ,function (){
                    // 方块走进框内，然后沙发两个字显示出来
                    $(".search-wrods").animate({"opacity": 1}, 500, function (){
                        $(".search").hide();
                        // 图片向右上角移动的同时缩小
                        $(".search-02-1").show().animate({"height": 30,"right": 220,"bottom": 450}, 800, function (){
                            flag = true;//如果flag为true，说明所以动画执行完毕
                        });
                        // 同时，沙发图片变大
                        $(".goods-02").show().animate({"height": 218}, 800);
                        // 同时，讲白色文字渐渐的显示出来
                        $(".word-02").animate({"opacity": 1}, 800);
                    });
                });
    		}
    	},
        // 刚开始滚动屏幕就触发的毁掉函数onLeave
        // 滚动前的回调函数，接受index、nextIndex和direction 3个参数：index是离开的"页面"的序号，从1开始计算：nextIndex是滚动到的"页面"的序号，从1开始计算判断往上滚动还是往下滚动，值是up或down
        onLeave:function (index,nextIndex,direction){
            if(index == 2 && nextIndex == 3 && flag == true){
                // 当第二屏幕往第三屏幕滚动的时候，沙发显示并且往第三屏幕移动，同时白色盒子显示
                // 沙发要往第三屏幕走，走的距离就是：当前屏幕的高度 - min到底部的高度 - 沙发到main的距离 (当前屏幕的高度 - 250)
                $(".shirt-02").show().animate({"bottom": -(k-250), "width": 207, "left": 260}, 2000,function(){
                    $(".img-01-a").animate({"opacity": 1}, 500 , function (){
                        $(".btn-01-a").animate({"opacity": 1}, 500);
                    })
                });
                $(".cover").show();
            }
            // 第三屏到第四屏的过渡
            if(index == 3 && nextIndex == 4){
                $(".shirt-02").hide();
                // 沙发的距离 当前屏幕的高度 - 250 + 第三屏幕的50距离
                $(".tlf").show().animate({"bottom" : -((k - 250)+50),"left" : 260,}, 2000,function (){
                    $(this).hide();// 动画完毕之后
                    $(".car-img").show();
                    // 进行到这一步购物车开始向右走
                    $(".car").animate({"left" : 1500}, 4000, "easeInElastic", function (){
                        // 当购物车走完后显示购物单
                        $(".note").show();
                        $(".note-img, .words-04-a").animate({"opacity": 1}, 1000);
                    });
                });
            }
        }
    });
});