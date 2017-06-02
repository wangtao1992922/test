/**
 * Created by Administrator on 2017/5/23.
 */
//头部导航下拉效果
$(function(){

    $(".navItem").hover(function(){

        $(this).find("ul").stop().slideDown(600, 'elasticOut');
    },function(){
        $(this).find("ul").stop().slideUp(100);
    }).click(function(){
        $(this).addClass("now") .siblings().removeClass("now");  //点击当前项出现小点
    })

});

//笔的动画效果
$(function(){
    $(".list-name .pen").click(function(){
        $(".list-name").animate({"width":"100px","backgroundPositionX":"-1000px" },0 ,function(){
            $(".list-name").animate({"width":"1100px","backgroundPositionX":"0px"},2000)
        })

    })
})

//数据加载

$(function(){
    //页面进入的时候，请求第0页
    var page=0;
    goDate();
    //点击加载下一页按钮
    $(".list-more").click(function(){
        page++;
        goDate()
    });

    //获取数据函数
    function goDate(){
        var date=listData["listData0"+page].data;
        var listArr=date.list;
        var str="";
        for(var i=0; i<listArr.length; i++){

            str+='<div class="content-one" onclick="openArticle(this)" myId="'+ listArr[i].sysId +'" >' +
                '<img class="arrow" src="images/list_img_over_xiaojiantou.png" /> ' +
                '<div class="image"><img src="'+ listArr[i].coverImg +'"/></div> ' +
                '<div class="text-content"> ' +
                '<div class="small-title">'+ listArr[i].title +'</div> ' +
                '<div class="date">'+ listArr[i].creatAt +'</div> ' +
                '<p>'+ listArr[i].describe +'</p> ' +
                '</div> ' +
                '</div>';
        }
        $(".list-content").append(str)
        console.log(date.pageStart+1)

        //Math.ceil(15/6)=3    2+1   表示已经是最后一页了，就隐藏下一页的按钮
        if( Math.ceil( date.count/date.pageSize ) == date.pageStart+1){
            $(".list-more").hide(0);
        }

    }


});
//设置点击单项内容时跳转到的网址
function openArticle(obj){
    window.open("article.html?type=xiaoniaoNews"+$(obj).attr("myId")+"","_blank")

}






