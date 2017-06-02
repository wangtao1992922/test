/**
 * Created by Administrator on 2017/5/23.
 */

/*返回顶部效果*/
$(function(){
    //返回顶部效果（判断是否在顶部以隐藏显示按钮）
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('#scrollTop_wrap').fadeIn();
        } else {
            $('#scrollTop_wrap').fadeOut(0);
        }
    });

    // 点击返回顶部滚动
    $('#scrollTop').click(function () {

        $('body, html').animate({scrollTop: 0}, 400);
    });
})
