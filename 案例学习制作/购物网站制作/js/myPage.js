$(function(){
    var k = $(window).height();
    // 点击next，往下播放一屏幕
    $(".next").click(function (event){
        $.fn.fullpage.moveSectionDown();;
    });
    $('#fullpage').fullpage({ // fullpage 方法里面接受json对象形式
    	// 是否显示项目导航
    	navigation : true,
    	// navigationPosition: "left",
    	// loopBottom: true,
    	// 滚动速度，单位为毫秒
    	scrollingSpeed: 1200,

    	// 回调函数滚动到某一屏后的回调函数，接受anchorLink和index两个参数，anchorLink是锚链接的名称，index是序号，从1开始计算
    	afterLoad: function (anchorLink, index){
            // 往第二屏幕滚动的时候，先隐藏，等到所有的动画执行完毕next才会显示出来
            // $(".next").fadeOut();
    		if(index == 2){
    			$(".search").show().animate({"right": 370}, 1500 ,function (){
                    // 方块走进框内，然后沙发两个字显示出来
                    $(".search-wrods").animate({"opacity": 1}, 500, function (){
                        $(".search").hide();
                        // 图片向右上角移动的同时缩小
                        $(".search-02-1").show().animate({"height": 30,"right": 220,"bottom": 450}, 800);
                        // 同时，沙发图片变大
                        $(".goods-02").show().animate({"height": 218}, 800);
                        // 同时，讲白色文字渐渐的显示出来
                        $(".word-02").animate({"opacity": 1}, 800, function (){
                            $(".next").fadeIn();
                        });
                    });
                });
    		}
    	},
        // 刚开始滚动屏幕就触发的毁掉函数onLeave
        // 滚动前的回调函数，接受index、nextIndex和direction 3个参数：index是离开的"页面"的序号，从1开始计算：nextIndex是滚动到的"页面"的序号，从1开始计算判断往上滚动还是往下滚动，值是up或down
        onLeave:function (index,nextIndex,direction){
            $(".next").fadeOut();
            if(index == 2 && nextIndex == 3){
                // 当第二屏幕往第三屏幕滚动的时候，沙发显示并且往第三屏幕移动，同时白色盒子显示
                // 沙发要往第三屏幕走，走的距离就是：当前屏幕的高度 - min到底部的高度 - 沙发到main的距离 (当前屏幕的高度 - 250)
                $(".shirt-02").show().animate({"bottom": -(k-250), "width": 207, "left": 260}, 2000,function(){
                    $(".img-01-a").animate({"opacity": 1}, 500 , function (){
                        $(".btn-01-a").animate({"opacity": 1}, 500, function (){
                            $(".next").fadeIn();
                        });
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
                    $(".car").animate({"left" : 1500}, 3000, "easeInElastic", function (){
                        // 当购物车走完后显示购物单
                        $(".note").show();
                        $(".note-img, .words-04-a").animate({"opacity": 1}, 1000, function (){
                            $(".next").fadeIn();
                        });
                    });
                });
            }
            // 第四屏到第五屏的过渡
            if(index == 4 && nextIndex == 5){
                // 小手上来
                $(".hand-05").animate({"bottom": 0}, 2000, function(){
                    // 鼠标显示
                    $(".mouse-a").animate({"opacity": 1});
                    // 沙发从800到70
                    $(".t1f-05").show().animate({"bottom": 70}, 1000, function (){
                        // 从单子上走
                        $(".order-05").animate({"bottom": 390}, function (){
                            $(".words-05").addClass("words-05-a");
                            $(".next").fadeIn();
                        });
                    })
                })
            }
            // 第五屏到第六屏的过渡
            if(index == 5 && nextIndex == 6){
                // 沙发的距离 当前屏幕的高度 - box 的 bottom 500
                $(".t1f-05").animate({"bottom": -(k - 500), "left" : "40%", "width" : 65}, 1500, function (){
                    $(".t1f-05").hide();
                });
                $(".box-06").animate({"left" : "38%"}, 1500, function (){
                    $(this).animate({"bottom" : 40}, 1000, function (){
                        $(this).hide();
                        // 让背景移动，营造出是车在移动的过程形象
                        // 而背景 在jQuery中改变比较麻烦
                        $(".section6").animate({"backgroundPositionX" : "100%","backgroundPositionY" : "100%"}, 4000, function(){
                            // 当背景动画执行完毕，man大小复原
                            $(".man").animate({"height" : 305,"bottom" : 116}, 1000, function (){
                                $(this).animate({"right" : 500}, 500,function (){
                                    // 门显示出来，模拟打开门的效果
                                    $(".door").animate({"opacity" : 1}, 200, function (){
                                        // 之后显示women
                                        $(".women").show().animate({"right" : 350,"height" : 305}, 500, function (){
                                            $(".pop-07").show();
                                            $(".next").fadeIn();
                                        });
                                    });
                                });
                            });
                        });
                        // 这里让字显示出来
                         $(".words-06-a").show().animate({"left" : "30%"}, 2000);
                        $(".pop-06").show();
                    })
                });
            }
            // 第五屏到第六屏的过渡
            if(index == 6 && nextIndex == 7){
                setTimeout(function (){
                    $(".start").animate({"width" : 120}, 1000, function (){
                        $(".good-07").show();
                        $(".next").fadeIn();
                    });
                }, 1000);
            }
            // 第八屏动画
            // $(".beginShoping").mouseenter(function (event){
            //     $(".btn-08-a").show();
            // }).mouseleave(function (event){
            //     $(".btn-08-a").hide();
            // });
            // 这里使用hover来替代更加简洁 以后一个盒子鼠标经过显示离开隐藏 我们都可以使用hover和toggle混搭来达成效果
            $(".beginShoping").hover(function (){
                $(".btn-08-a").toggle(); // toggle 显示和隐藏的切换
            });
            // 让手跟着鼠标移动
            $(document).mousemove(function(event) {
                   var x = event.pageX - $(".hand-08").width() / 2;  // 获得鼠标在页面中的x坐标
                   var y = event.pageY + 10;  // 获得鼠标在页面中的y坐标

                   // 手的top 值不能小于 这个大小minY   当前屏幕的高度 K  减去手的高度  449
                   var minY = k - 449;
                   // 把 鼠标在页面中的坐标 给  hand 大手 left  top
                   if(y < minY ) {
                      y = minY;
                   }

                 $(".hand-08").css({"left": x, "top": y});
              });
            // 当点击再来一次是，返回第一屏 ，分两步进行
            // 1、返回第一屏幕
            $(".again-08").click(function (event){
                $.fn.fullpage.moveTo(1);
                // 2、所有的动画都复原
                // 核心原理就是 让我们的图片（做动画的元素 清除 行内样式就可以了）
                // 所有动画的div盒子，添加move类名
                $("img, .move").attr("style", "");
            });
        }
    });
});