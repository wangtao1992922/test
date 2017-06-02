/**
 * Created by Administrator on 2017/5/23.
 */
$(function(){
    var musicIndex = 0;
    //音乐播放
    $(".music").find("span").click(function(){
        //让	musicIndex自增1
        musicIndex++;
        //获取当前点击的span的index，以设置需要加载的music的地址。
        index = $(this).index();

        if(navigator.appName=="Microsoft Internet Explorer"){ //如果是ie
            $("body").append('<bgsound class="myaudio'+ musicIndex +'" src="music/sound0'+ index +'.mp3" autostart=true loop=false>');
        }else{ //其他
            $("body").append('<audio class="myaudio'+ musicIndex +'" src="music/sound0'+ index +'.mp3" autoplay></audio>');
        }
        var removeIndex = musicIndex;
        setTimeout(function(){
            $(".myaudio"+removeIndex).remove();
        },3000);

    });

    //备案声明点击打开查询网站
    $("#beiaishenmin").click(function(){
        window.open("http://www.miitbeian.gov.cn");
    })
});