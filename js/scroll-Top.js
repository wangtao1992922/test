/**
 * Created by Administrator on 2017/5/23.
 */

/*���ض���Ч��*/
$(function(){
    //���ض���Ч�����ж��Ƿ��ڶ�����������ʾ��ť��
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('#scrollTop_wrap').fadeIn();
        } else {
            $('#scrollTop_wrap').fadeOut(0);
        }
    });

    // ������ض�������
    $('#scrollTop').click(function () {

        $('body, html').animate({scrollTop: 0}, 400);
    });
})
