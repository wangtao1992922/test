/**
 * Created by Administrator on 2017/5/25.
 */

 $(function(){
     var wrap_block=$(".wrap-block");
     var iNow=0;
     var main_move=$(".main-move");
     //设置模块整屏的高度
     setHeight();
     function setHeight(){
         $(".wrap-block, .main-box").css({"height":$(window).height()});
         $(".main-move").css({"height":$(window).height()*wrap_block.length});
         $(".head-wrap, .gaishu-block").css({"width":$(window).width()});
     }

     var resizeTimer = null;   //调整浏览器高宽时，设置高度
     $(window).resize(function(){
         //处理重复触发的事件，我们可以使用timeOut来解决
         clearTimeout(resizeTimer);
         resizeTimer = setTimeout(setHeight,100);
     });

     //向上滚动方法
     var scrollTimer = null;
     function slideUp(){
         clearTimeout(scrollTimer);
         scrollTimer = setTimeout(function(){
             console.log("向上滚动了");
             iNow--;
             if(iNow<0){
                 iNow=0;
             }
             console.log(iNow)
             doMove();
         },100);

     }

     //向下滚动方法
     function slideDown(){
         clearTimeout(scrollTimer);
         scrollTimer = setTimeout(function(){
             iNow++;

             if(iNow>=wrap_block.length-1){
                 //当不支持循环切换时，终止切换，并还原iNow
                 iNow=wrap_block.length-2;
                 return false;

             }


             doMove();
         },100);
     }



     //运动方法
     function doMove(){

             var navIndex=iNow-1;
             if(navIndex == 4){
                 navIndex = 3;
             }
             if(navIndex != 5){

                 main_move.animate({"top":-iNow*wrap_block.height()},600,"easeBothStrong",function(){

                     if(iNow== 0){

                     }else if(iNow == 4){
                         $(".nav-piece").removeClass("now").eq(iNow-1).addClass("now");
                         $(".nav-piece").eq(iNow).addClass("now");
                     }else{
                         $(".nav-piece").removeClass("now").eq(iNow-1).addClass("now");
                     }
                 });
         }

     }


     //滚动触发的函数
     function scrollFn(e){
         //console.log("滚轮滚动了");
         e = e || window.event;

         if(e.wheelDelta){    //这就是 ie 或者 chrome
             if( e.wheelDelta>0 ){
                 //console.log("ie 或者 chrome向上滚动了")
                 slideUp();
             }else if( e.wheelDelta<0 ){
                 //console.log("ie 或者 chrome向下滚动了")
                 slideDown();
             }
         }else if(e.detail){  //火狐
             if(e.detail>0){
                 //console.log("火狐向下滚动了")
                 slideDown();
             }else if(e.detail<0){
                 //console.log("火狐向上滚动了")
                 slideUp();
             }
         }
     }
     //绑定事件
     if(document.addEventListener){ //针对火狐
         document.addEventListener("DOMMouseScroll",scrollFn,false);
     }
     //针对ie  chrome
     window.onmousewheel = document.onmousewheel = scrollFn;

     //点击首页导航跳转到相应模块
     var iNow=window.location.hash.substring(1);
     console.log(iNow);
     if(iNow==1||iNow==2||iNow==3||iNow==4){
         $(".welcome-wrap").slideUp(0,function(){
             doMove();
         })

     }

     //欢迎GIF刷新页面时，清除缓存，重新加载
     console.log($(".welcome-icon").attr("src "))

 });

//点击导航的时候，滚动到对应的界面
$(function(){
    $(".nav-piece h1").click(function(){
        var navIndex = $(this).parent().index(".nav-piece");
        if(navIndex == 4){
            navIndex = 3;
        }
        if(navIndex != 5){
         var   mainMoveIndex = navIndex+1;
            $(".main-move").animate({"top":"-"+ $(".wrap-block").height()*mainMoveIndex +"px"},600,"easeBothStrong",function(){

                if(mainMoveIndex== 0){

                }else if(mainMoveIndex == 4){
                    $(".nav-piece").removeClass("now").eq(mainMoveIndex-1).addClass("now");
                    $(".nav-piece").eq(mainMoveIndex).addClass("now");
                }else{
                    $(".nav-piece").removeClass("now").eq(mainMoveIndex-1).addClass("now");
                }
            });

        }
    });
})
//在第一页的时候，点击向下的翻页箭头
$(function(){
    $(".welcome2-wrap .next").click(function(){
        var  mainMoveIndex = 1;
        $(".main-move").animate({"top":"-"+ $(".wrap-block").height()*mainMoveIndex +"px"},600,"easeBothStrong",function(){
            $(".nav-piece").removeClass("now").eq(mainMoveIndex-1).addClass("now");
        })
    });

});

//进入页面时的欢迎效果
$(function(){

    doWelcomeAnimate();

    function doWelcomeAnimate(){

         welcomeAnimateTimer = setTimeout(function(){
            $(".welcome-content").animate({"top":"30%"},800);
            $(".welcome-content .text").each(function(index) {
                var $this = $(this);
                setTimeout(function(){

                    $this.show().addClass("animated  fadeInUp");
                },200*(index+1))
            });
             setTimeout(function(){
                 $(".welcome-wrap").slideUp(600,"easeOutStrong",function(){
                 });
             },2500);

        },3000);
    }
});


$(function(){
    //概述部分的滑动效果
    var gaishuIndex=0;
    var goRight=$(".gaishu .go-right");
    var goLeft=$(".gaishu .go-left");

    goRight.click(function(){
        gaishuIndex++;
        if(gaishuIndex>2){
            gaishuIndex=2;
            goRight.css({"opacity":"0.3"})
        }else{
            doMove();
        }
    });

    goLeft.click(function(){
        gaishuIndex--;
        if(gaishuIndex<0){
            gaishuIndex=0;
            goLeft.css({"opacity":"0.3"})
        }else{
            doMove()
        }
    });

        function doMove(){
            $(".gaishu .go-left, .gaishu .go-right").css("opacity",0.3);
            $(".gaishu-move").animate({"left":"-"+ $(".gaishu-block").width()*gaishuIndex +"px"},600,function(){
                $(".gaishu .go-left, .gaishu .go-right").css("opacity",1);
            })
        }
    });

//小鸟掌学对企业价值边角的呼吸灯效果
$(function(){
    setInterval(function(){
        $(".value_shineImg").fadeIn(1000,function(){
            $(".value_shineImg").delay(100).fadeOut(300);
        })
    },1400)
});

/*小鸟掌云*/
$(function(){
    //预存需要操作的dom
    var btnLeft=$(".btn_left");
    var btnRight=$(".btn_right");
    var contentMove=$(".zhangyun_content .content_move");

    btnRight.click(function(){
        This = $(this);
        $(".btn.now").animate({"left":"78px"},100,function(){
            $(".btn.now").removeClass("now");
            This.find(".btn").animate({"left":"0px"},300).addClass("now");
        });

        $(".content_move").animate({"left":"-910px"},600)

    })

    btnLeft.click(function(){
        This = $(this);
        $(".btn.now").animate({"left":"-78px"},100,function(){
            $(".btn.now").removeClass("now");
            This.find(".btn").animate({"left":"0px"},300).addClass("now");
        });

        $(".content_move").animate({"left":"0px"},600)

    })

});



