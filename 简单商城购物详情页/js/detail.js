/**
 * Created by wt on 2017/5/28.
 */
$(function(){
    /*更换皮肤*/
    (function(){var changeBg=$("#bg li");
        changeBg.click(function(){
            $("#"+this.id).addClass("selected").siblings().removeClass("selected");//切换当前选择项
            $(".header,.nav ,#main h1").css("background",$("#"+this.id).css("background-color"))
        })
    })();

    /*衣服颜色切换*/
    (function(){
        $(".color_change ul li img").click(function(){
            var alt=$(this).attr("alt");
                $(".color_change strong").text(alt);//切换颜色：
            //切换对应的显示图片
            var imgSrc=$(this).attr("src");
            var i=imgSrc.lastIndexOf(".");
            var showImgSrc=imgSrc.substring(0,i);
            var jpg=imgSrc.substring(i);
            var imgSrc_small = showImgSrc + "_one_small"+ jpg;
            var imgSrc_big=showImgSrc + "_one_big"+ jpg;
            $("#bigImg").attr({"src":imgSrc_small});
            $("#big_img img").attr({"src":imgSrc_big});
            //切换对应的三张局部图片
            var str="";
            str='<li><img src="'+showImgSrc + "_one"+ jpg+'" alt="" /></li>'+
                '<li><img src="'+ showImgSrc+"_two"+jpg+'" alt="" /></li>'+
                '<li><img src="'+ showImgSrc+"_three"+jpg+'" alt="" /></li>'
            $(".imglist").empty().append(str)
        })
    })();
         //选择尺寸
    (function(){
        $(".pro_size ul li span").click(function(){
            var aText=$(this).text();
            $(".pro_size strong").text(aText);
        })
    })();
    //统计总价
    (function(){
        var price=$(".pro_price span").text();
        $("#num_sort").change(function(){
            var num=$(this).val();
            var sumPrice=num*price;
            $(".pro_price span").text(sumPrice)

        }).change()

    })();

    //评分效果
    (function(){
        $(".rating li a").click(function(){
            var title = $(this).attr("title");
            alert("您给此商品的评分是："+title);
            var cl = $(this).parent().attr("class");
            $(".rating").removeClass().addClass("rating "+cl+"star");
           return false
        })
    })();

    //点击购物车后的效果
    (function(){
        $("#shopping_car a").click(function(){
            var pro=$(".pro_detail_right");
            var pro_name=pro.find("h3").text();
            var pro_size=pro.find(".pro_size strong").text();
            var pro_color=pro.find(".color_change strong").text();
            var pro_num=pro.find("#num_sort").val();
            var pro_price=pro.find(".pro_price span").text();
            var tip=confirm(" 感谢您的购买"+"\n"+
                " 您购买的"+"\n"+
                "产品是："+pro_name+"\n"+    //文本的换行使用 \r或者\n
                "尺寸是："+pro_size+"\n"+
                "颜色是："+pro_color+"\n"+
                "数量是："+pro_num+"\n"+
                "总价是："+pro_price +"元。")
            if(tip==true){
                alert("已加入购物车！")
            }
        })

    })();
    //taba的切换效果
    (function(){
        $(".tab_menu ul li").click(function(){
            var index=$(".tab_menu ul li").index($(this));
            $(this).addClass("selected").siblings().removeClass("selected");
           $(".tab_box >div").hide().eq(index).show()
        })
    })();

    //放大镜效果
    (function(){
        var scale = 2; //缩放倍数
        var bigBox =document.getElementById("big_img");
        var smallBox = document.getElementsByClassName("small_img")[0];
        var lay =document.getElementById("lay"); //遮罩 放大镜
        var bigImg = bigBox.children[0];
        var pro_detail_right=document.getElementsByClassName("pro_detail_right")[0];

        lay.style.width = parseInt(smallBox.offsetWidth / scale) + "px";

        lay.style.height= parseInt(smallBox.offsetHeight/ scale) + "px";

        bigImg.style.width = smallBox.offsetWidth * scale + "px";

        bigImg.style.height= smallBox.offsetHeight * scale + "px";

        smallBox.onmouseover = function(){

            lay.style.display = "block";

            bigBox.style.display = "block";



        };

        smallBox.onmousemove = function(e){
            e = e || event;
            var x = e.clientX-this.offsetParent.offsetLeft  - lay.offsetWidth / 2;
            var Y = e.clientY-this.offsetParent.offsetTop - lay.offsetHeight / 2;
            if(x<0){
                x=0;
            }

            if(x >= smallBox.offsetWidth - lay.offsetWidth){
                x = smallBox.offsetWidth - lay.offsetWidth;

            };
            if(Y<0){
                Y=0;
            }

            if(Y >= smallBox.offsetHeight - lay.offsetHeight){

                Y = smallBox.offsetHeight - lay.offsetHeight;

            };
            lay.style.left = x + "px";

            lay.style.top= Y + "px";

            var left = lay.offsetLeft * scale;

            var top = lay.offsetTop * scale;

            bigImg.style.left = -1*left + "px";

            bigImg.style.top = -1*top+ "px";

        };

        smallBox.onmouseout = function(){

            lay.style.display = "none";

            bigBox.style.display = "none";
        };

    })()

})