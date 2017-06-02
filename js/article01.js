/**
 * Created by Administrator on 2017/5/24.
 */
/**
 * Created by Administrator on 2017/5/24.
 */
//头部导航栏下拉效果
$(function(){

    $(".navItem").hover(function(){

        $(this).find("ul").stop().slideDown(600, 'elasticOut');
    },function(){
        $(this).find("ul").stop().slideUp(100);
    }).click(function(){             //点击当前项出现小点
        $(this).addClass("now")
    })

});

//笔的动画效果
$(function(){
    $(".list-name .pen").click(function(){
        $(".list-name").animate({"width":"100px","backgroundPositionX":"-680px" },0 ,function(){
            $(".list-name").animate({"width":"780px","backgroundPositionX":"-320px"},1500)
        })

    })
});

/*点击喜欢文字按钮*/
var likeTipsArr = ["你太酷了","你真牛逼","爱死你啦、MUA~","再点一下试试~"]; //把需要随机显示的提示写到这里
var ifLikebtnClicked = false; //赋值是否点击过，用于后面点击方法的判断，已经点击过的不能再点击
$(function(){
    $(".likebtn").live("click",function(){

        if(!ifLikebtnClicked){
            ifLikebtnClicked = true;
            $(".like-tip").text( likeTipsArr[ Math.floor(Math.random()*likeTipsArr.length) ] );
            doMove();

        }else if(ifLikebtnClicked &&$(".like-tip").text()=="再点一下试试~" ){ //此处用于提示再点一次只有的搞笑互动
            $(".like-tip").text("喊你点就点嗦~傻");
            doMove();
        }

//提示框运动方法，如果要写相关其他dom操作，可以在方法中相应位置添加
        function doMove(){
            $(".like-tip").slideDown().delay(600).

                animate({"left":"-1100px"},600,function(){
                    if( $(".like-tip").text()=="喊你点就点嗦~傻"){
                      $(".like-tip").animate({"left":"254px"},0).delay(400).animate({"left":"-1100px"},600)
                    }
                    $(".likebtn").addClass("likebtn-clicked");
                });
        }
    })
});

//list页请求数据
$(function(){

    var  articleName=getUrl();
    var data=articleData[articleName].data;
    $("#articleTitle").html(data.title);
    $("#content").html(data.content);
    $("#cover").attr("src",data.coverImg);

    //获得 url的 articleName的函数
    function getUrl(){
        var searchStr= window.location.search.substr(1);
        var searchArr01=searchStr.split("&");
        for(var i=0;i<searchArr01.length;i++){
           var searchArr02=searchArr01[i].split("=");
            if(searchArr02[0]=="articleName"){
                return searchArr02[1];
            }

        }
    }
});
//头部导航部分请求数据
$(function(){

    //获得url的函数
    function getUrl02(){
        var str=window.location.search.substr(1);
        console.log(str)
        var Arr01=str.split("=");
        if(Arr01[0]=="type"){
            return Arr01[1];
        }
    }
    var item=getUrl02();
   /* var data=articleData[item].data;
    $("#typeTitle").html(data.typeTitle);
    $("#articleTitle").html((data.title));
    $("#content").html(data.content);
    $("#cover").attr("src",data.coverImg);*/
});


