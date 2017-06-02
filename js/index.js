/**
 * Created by Administrator on 2017/5/16.
 */

//头部导航栏下拉效果
$(function(){

    $(".navItem").hover(function(){

        $(this).find("ul").stop().slideDown(600, 'elasticOut'); //elasticOut 为 move.js中的动画效果
    },function(){
        $(this).find("ul").stop().slideUp(100);
    }).click(function(){
           $(this).addClass("now") .siblings().removeClass("now") ;  //点击当前项出现小点

    })

});
/*banner图轮播效果*/
$(function(){
    var oDiv=$(".banner-wrap");
    var oPre=oDiv.find(".pre");
    var oNext=oDiv.find(".next");
    var aSpan=oDiv.find(".dots-wrap span");
    var iNow=0;
    var animateFather=null;

    animateFather = $(".banner_pic").eq(0); //进入时先运动第一页的文字部分
    contentMove();

    oNext.click(function(){
             iNow++;
        if(iNow>aSpan.length-1 ){
            iNow=0
        }
        bannerChange();
        contentMove();
    });

    oPre.click(function(){
        iNow--;
        if(iNow<0 ){
            iNow=aSpan.length-1;
        }
        bannerChange();
        contentMove();
    });

    aSpan.click(function(){
        iNow=$(this).index();
        bannerChange();
        contentMove();
    });

    //banner图片切换函数
    function bannerChange(){
        $(".dots-wrap span" ).removeClass("now");
        $(".dots-wrap span" ).eq(iNow).addClass("now");
        $(".banner_pic").fadeOut(200);
        animateFather = $(".banner_pic").eq(iNow);
        animateFather.fadeIn(200);
    }
    //banner图文字切换函数
    function contentMove(){
        animateFather.find(".image01").show().addClass("animated  fadeInLeft"); //animate.css (css3库的动画效果)
        setTimeout(function(){
            animateFather.find(".image02").hide().show().addClass("animated  bounceInRight");
            animateFather.find(".image03").hide().show().addClass("animated  shake");
        },500);
    }

});

//主要产品左侧链接效果
    $( function(){
        var oWrap=$("#chanping");
        var list_lineBtn=oWrap.find(".list-lineBtn");
        var aSpan=list_lineBtn.find("span");
        var aContent=oWrap.find(".content_item");
        var oPre=oWrap.find(".pre");
        var oNext=oWrap.find(".next");
        var iNow=0;

        //轮播效果，点击下一页
        oNext.click(function(){
             iNow++;
            console.log(iNow)
            if(iNow>=aSpan.length){
                iNow=0
            }
            doChange("fadeInRight")
        });

        //点击上一页
        oPre.click(function(){
            iNow--;
            if(iNow<0){
                iNow=aSpan.length-1;
            }
            doChange("fadeInLeft")

        });

        aSpan.click(function(){
            var index = list_lineBtn.index($(this).parent());
            var action = (iNow>index)?"fadeInLeft":"fadeInRight";
            iNow = index;
            doChange(action);

        });

        //文字及图片切换函数
        function doChange(action){
            list_lineBtn.removeClass("now").eq(iNow).addClass("now");
            aContent.stop().fadeOut(0).eq(iNow).stop().fadeIn(400);
            aContent.eq(iNow).find("h1, p, img, h2").attr("class","").addClass("animated "+ action);

        }
    });

 //业务范围效果
  $(function(){
      var oDiv=$(".yewu");
      var middleImgs=oDiv.find(".middle-img");
      var aIcons=oDiv.find(".down_icon");
      var aDetail=oDiv.find(".yuwucontent-detail");
      var iNow=0;
      //鼠标移到中间图片和按钮时的动画效果
      middleImgs.add(aIcons).hover(function(){
          $(this).addClass("animated wobble")
      },function(){$(this).removeClass("animated wobble")})

      //点击右侧展开收起按钮
      aIcons.click(function(){
          iNow=aIcons.index($(this));
          doMove()
      })

      //点击中间图片
      middleImgs.click(function(){
          iNow=middleImgs.index($(this));
          doMove()

      })

      //内容改变函数
      function doMove(){
          if(aIcons.eq(iNow).hasClass("zhankai")){
              aDetail.stop().slideUp(300);
              aIcons.eq(iNow).removeClass("zhankai")
          }else{
              aDetail.stop().slideUp(300).delay(300).eq(iNow).slideDown(300);
              aIcons.removeClass("zhankai").eq(iNow).addClass("zhankai");

          }
      }

  })

//团队介绍轮播
$(function(){     //鼠标移入时出现蒙层效果
    $(".team-box .head-photo").hover(function(){
        $(this).find("span").stop().fadeIn(400);

    },function(){
        $(this).find("span").stop().fadeOut(400);
    })

    var oMove=$(".teammove");
    var aImgs=oMove.find(".twoteam-wrap");
    var imgWidth=aImgs.width();
    var oDiv=$(".teamcontent-wrap");
    var pre=oDiv.find(".pre");
    var next=oDiv.find(".next");
    var dots=oDiv.find(".dots-wrap").find("span");
    var iNow=0;
    //设置移动部分平铺时的宽度和显示的位置
    oMove.css({"width":imgWidth*aImgs.length,"left":-imgWidth})

    //点击下一页
    next.click(function(){
        iNow++;
        if(iNow>=dots.length){
            iNow=0;
            oMove.animate({"left":0},0);
        }
        doMove();
    })

    //点击上一页
    pre.click(function(){
        iNow--;
        if(iNow<0){
            iNow=dots.length-1;
            oMove.animate({"left":-imgWidth*(dots.length+1)},0);
        }
        doMove()

    })

    //点击点点
    dots.click(function(){
        iNow=$(this).index();
        doMove()
    })

    //图片滚动效果
    function doMove(){
        oMove.stop().animate({"left":-imgWidth*(iNow+1)},300)
        dots.removeClass("now").eq(iNow).addClass("now");
    }

    //自动滚动函数
    function autoMove(){
        timer=setInterval(function(){
            next.trigger("click");
        },2000)
    }
     autoMove()
    //鼠标移入时清除定时器，鼠标移出时开启定时器
    oDiv.hover(function(){
        clearInterval(timer);
    },function(){
        autoMove()
    })

})


