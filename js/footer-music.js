/**
 * Created by Administrator on 2017/5/23.
 */
$(function(){
    var musicIndex = 0;
    //���ֲ���
    $(".music").find("span").click(function(){
        //��	musicIndex����1
        musicIndex++;
        //��ȡ��ǰ�����span��index����������Ҫ���ص�music�ĵ�ַ��
        index = $(this).index();

        if(navigator.appName=="Microsoft Internet Explorer"){ //�����ie
            $("body").append('<bgsound class="myaudio'+ musicIndex +'" src="music/sound0'+ index +'.mp3" autostart=true loop=false>');
        }else{ //����
            $("body").append('<audio class="myaudio'+ musicIndex +'" src="music/sound0'+ index +'.mp3" autoplay></audio>');
        }
        var removeIndex = musicIndex;
        setTimeout(function(){
            $(".myaudio"+removeIndex).remove();
        },3000);

    });

    //������������򿪲�ѯ��վ
    $("#beiaishenmin").click(function(){
        window.open("http://www.miitbeian.gov.cn");
    })
});