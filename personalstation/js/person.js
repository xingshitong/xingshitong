/**
 * Created by Administrator on 2016/1/28 0028.
 */
$(function(){
    $(".xie").click(function(){
        setTimeout(function(){
            $(".dao1")[0].style.display='block';
        },500);
        setTimeout(function(){
            $(".dao1")[0].style.transform= 'rotateX(-180deg)';
        },1000);
        setTimeout(function(){
            $(".dao1")[1].style.display='block';
        },1500);
        setTimeout(function(){
            $(".dao1")[1].style.transform= 'rotateX(-180deg)';
        },2000);
        setTimeout(function(){
            $(".dao1")[2].style.display='block';
        },2500);
        setTimeout(function(){
            $(".dao1")[2].style.transform= 'rotateX(-180deg)';
        },3000);
        setTimeout(function(){
            $(".dao1")[3].style.display='block';
        },3500);
        setTimeout(function(){
            $(".dao1")[3].style.transform= 'rotateX(-180deg)';
        },4000);
        setTimeout(function(){
            $(".dao1")[4].style.display='block';
        },4500);
        setTimeout(function(){
            $(".dao1")[4].style.transform= 'rotateX(-180deg)';
        },5000);
    })

})