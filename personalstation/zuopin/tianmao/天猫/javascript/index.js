$(function(){
  // 下拉
  $('.xiala').hover(
      function(){
      $(this).find($('.cd')).show();
      },function(){
      $(this).find($('.cd') ).hide();
      }
  );
  // 移动
  $(".zuoyi").hover(
      function(){
        $(this).stop();
      $(this).animate({marginLeft:'8px'},'slow');
      },function(){
         $(this).stop();
      $(this).animate({marginLeft:'-8px'},'slow')
      }
  );

// top
var ti;
$(window).scroll(function(){
  if( $(window).scrollTop()>200){
     clearTimeout(ti);
     ti = setTimeout(function(){
   $(".top").show();
     },5000);
  }else{
    clearTimeout(ti);
    $(".top").hide();
  };
});

// 返回顶部
$(window).scroll(function(){
   if($(window).scrollTop()>100){
    $(".can").show();
   }else{
    $(".can").hide();
   }
   $(".can").click(function(){
      $({top: $(window).scrollTop()}).animate(
      {top: 0},
      {
            duration: 500,
            step: function() {
            $(window).scrollTop(this.top);
            }
      }
    );
   });
});

// ---------------------------------------------------
$(window).scroll(function(){
   if($(window).scrollTop() > 200){
    $("#fixed").show();
   }else{
    $("#fixed").hide();
   }
 });  
 
  $('.pirfu').each(function(i){
    $(this).data('index',i);
  });
  var kaiguan=true;
  $('.pirfu').click(function(){
     var i = $(this).data('index');
     if(kaiguan){
      $($('.font')[i]).css({background:'red'});
      $($('.ft')[i]).show();
      $($('.pirfu')[i]).hide();
      kaiguan=false;
     }else{
      $('.ft').hide();
      $('.font').css({background:''});
      $($('.font')[i]).css({background:'red'});
      // $($('.ft')[i]).show();
      $('.pirfu').show();
      kaiguan=true;
     }
     index=i;
     

    var newtop = $( $('.ceng')[i] ).offset().top -100;
    console.log($( $('.ceng')[i] ).offset().top);
    $({top: $(window).scrollTop()}).animate(
      {top: newtop},
      { 
        duration: 700,
        step: function() {
        $(window).scrollTop(this.top);
        }
      }
    );
  });
    
  var zu=[];
  $('.pirfu').each(function(i){
   zu.push($($('.ceng')[i]) .offset().top-890);
  })
  console.log(zu);
  $(window).mouseover(function(){
    console.log($(window).scrollTop());
     for(var i=0;i<zu.length;i++){
      if($(window).scrollTop()>=zu[i]&&$(window).scrollTop()>=zu[i+1]){
        $('.pirfu').removeClass('colo');
        $($('.pirfu')[i]).addClass('colo');

      }
    }
    
  })




// 轮播
var arr = ['#FFF701','#FF6D03',' #397DFC ','#28C6D2','#FDACCD','#DBDBDB','#E9E9E9','#5E00F6','#FFA800','#E8E8E8','#9948FD','#F02576','#E8E8E8','#7F00DB','#E8E8E8','#FEE703'];
$('.shu .xiala').each(function(i){
    $(this).data('index',i);
  }); 
$('.shu .xiala').hover(function(i){
   clearInterval(timerId);
    $('.ti').hide();
     $('.bjtp').hide();
    var i = $(this).data('index');
    $($('.ti')[i]).show();
     $($('.bjtp')[i]).show();
     // console.log(i);
     $('.bjtp').css({background:arr[i]});
     if(i==0){
      timerId = setInterval(lunbo,1000);
     }
    },function(){
      
    });
    $($('.ti')[0]).show();
  
$($('.bjtp')[0]).css({background:arr[index]});
var index = 0;
var lunbo = function(){
  $('.bjtp').css({background:arr[index]});
  $('.bjtp').hide();
  var el = $('.bjtp')[index];
  $(el).show();
  $('.xuhao').removeClass('red');
  $($('.xuhao')[index]).addClass('red');
  index +=1;
  if(index === 6){
    index = 0;
  }

}
$('.xuhao').each(function(i){
  $(this).data('index',i)
});
$('.xuhao').hover(function(){
    clearInterval(timerId);
    $('xuhao').removeClass('red');
    $(this).addClass('red');
    var i = $(this).data('index');
    $('bjtp').hide();
    $($('bjtp')[i]).show();
    index = i;
},function(){
  clearInterval(timerId);
  timerId = setInterval(lunbo,1000);
});
  var timerId = setInterval(lunbo,1000);

// 轮播(换一批)
    var count = 1;
    $($(".pinpai")[0]).show();
    $(".biany").click(function(){
    // console.log(count);
    $(".pinpai").hide();
    $($(".pinpai")[count]).show();
    count +=1;
    if(count == $('.pinpai').length){
    count = 0;
    }
    // console.log(count);
  });

   var count = 1;
    $($(".pinpai")[0]).show();
    $(".guoji").click(function(){
    
    // console.log(count);
    $(".pinpai").hide();
    $($(".pinpai")[count]).show();
    count +=1;
    if(count == $('.pinpai').length){
    count = 0;
    }
    // console.log(count);
  });

// // 箭头轮播
var q = 0;
$($('.hezi1 .zhongz') [0]).show(); 
  var lunbo1 = function(){
    $(".hezi1 .zhongz").hide();
         // console.log(q);
         q +=1;
         if (q == $('.hezi1 .zhongz').length ){
            q = 0;
          }
       $($(".hezi1 .zhongz")[q]).show();
      // console.log(q);
  }
 var timerId1 = setInterval(lunbo1,2000);     
// console.log(q);
$($('.hezi1 .zhongz') [0]).show(); 
$('.hezi1 #rijian').click(function(){
      $(".hezi1 .zhongz").hide();
      // console.log(q);
         q +=1;
      if (q == $('.hezi1 .zhongz').length ){
        q = 0;
      }
      $($(".hezi1 .zhongz")[q]).show();
      // console.log(q);
});

 
$('.hezi1 #ljian').click(function(){
      $(".hezi1 .zhongz").hide();
      // console.log(q1);
         q -=1;
      if (q < 0){
        q = $('.hezi1 .zhongz').length-1;
      }
      $($(".hezi1 .zhongz")[q]).show();
      // console.log(q);
});
// -------------------------------------------------
var q2 = 0;
$($('.hezi2 .zhongz') [0]).show(); 
  var lunbo2 = function(){
    $(".hezi2 .zhongz").hide();
      
         // console.log(q);
         q2 +=1;
         if (q2 == $('.hezi2 .zhongz').length ){
            q2 = 0;
          }
      $($(".hezi2 .zhongz")[q2]).show();
      // console.log(q);
  }
 var timerId1 = setInterval(lunbo2,2000);     


$($('.hezi2 .zhongz') [0]).show(); 
$('.hezi2 #rijian1').click(function(){
      $(".hezi2 .zhongz").hide();
      
      // console.log(q2);
         q2 +=1;
      if (q2 == $('.hezi2 .zhongz').length ){
        q2 = 0;
      }
      $($(".hezi2 .zhongz")[q2]).show();
      // console.log(q);
});

// $($('.hezi1 .zhongz') [0]).show(); 
$('.hezi2 #ljian1').click(function(){
      $(".hezi2 .zhongz").hide();
     
      // console.log(q2);
         q2 -=1;
      if (q2 < 0){
        q2 = $('.hezi2 .zhongz').length-1;
      }
       $($(".hezi2 .zhongz")[q2]).show();
      // console.log(q21);
});

// -----------------------------------------------
var q31 = 0;
$($('.hezi3 .zhongz') [0]).show(); 
  var lunbo3 = function(){
    $(".hezi3 .zhongz").hide();
      
         // console.log(q31);
         q31 +=1;
         if (q31 == $('.hezi3 .zhongz').length ){
            q31 = 0;
          }
        $($(".hezi3 .zhongz")[q31]).show();
      // console.log(q);
  }
 var timerId2 = setInterval(lunbo3,2000);  


$($('.hezi3 .zhongz') [0]).show(); 
$('.hezi3 #rijian2').click(function(){
      $(".hezi3 .zhongz").hide();
      
      // console.log(q31);
         q31 +=1;
      if (q31 == $('.hezi3 .zhongz').length ){
        q31 = 0;
      }
      $($(".hezi3 .zhongz")[q31]).show();
      // console.log(q);
});

$('.hezi3 #ljian2').click(function(){
      $(".hezi3 .zhongz").hide();
     
      // console.log(q31);
         q31 -=1;
      if (q31 < 0){
        q31 = $('.hezi3 .zhongz').length-1;
      }
       $($(".hezi3 .zhongz")[q31]).show();
      // console.log(q31);
});

// ------------------------------------------
var q4 = 0;
$($('.hezi4 .zhongz') [0]).show(); 
  var lunbo4 = function(){
    $(".hezi4 .zhongz").hide();
       
         // console.log(q4);
         q4 +=1;
         if (q4 == $('.hezi4 .zhongz').length ){
            q4 = 0;
          }
      $($(".hezi4 .zhongz")[q4]).show();
      // console.log(q);
  }
 var timerId3 = setInterval(lunbo4,2000);  

$($('.hezi4 .zhongz') [0]).show(); 
$('.hezi4 #rijian3').click(function(){
      $(".hezi4 .zhongz").hide();
     
      // console.log(q4);
         q4 +=1;
      if (q4 == $('.hezi3 .zhongz').length ){
        q4 = 0;
      }
      $($(".hezi4 .zhongz")[q4]).show();
      // console.log(q);
});

$('.hezi4 #ljian3').click(function(){
      $(".hezi4 .zhongz").hide();
      // console.log(q4);
         q4 -=1;
      if (q4 < 0){
        q4 = $('.hezi4 .zhongz').length-1;
      }
       $($(".hezi4 .zhongz")[q4]).show();
      // console.log(q4);
});
// -------------------------------------------------

var q5 = 0;
$($('.hezi5 .zhongz') [0]).show(); 
  var lunbo5 = function(){
    $(".hezi5 .zhongz").hide();
      
         // console.log(q5);
         q5 +=1;
         if (q5 == $('.hezi5 .zhongz').length ){
            q5 = 0;
          }
     $($(".hezi5 .zhongz")[q5]).show();
      // console.log(q);
  }
 var timerId4 = setInterval(lunbo5,2000);  

$($('.hezi5 .zhongz') [0]).show(); 
$('.hezi5 #rijian4').click(function(){
      $(".hezi5 .zhongz").hide();
    
      // console.log(q5);
         q5 +=1;
      if (q5 == $('.hezi5 .zhongz').length ){
        q5 = 0;
      }
    $($(".hezi5 .zhongz")[q5]).show();
      // console.log(q);
});

$('.hezi5 #ljian4').click(function(){
      $(".hezi5 .zhongz").hide();
     
      console.log(q5);
         q5 -=1;
      if (q5 < 0){
        q5 = $('.hezi5 .zhongz').length-1;
      }
       $($(".hezi5 .zhongz")[q5]).show();
      // console.log(q5);
});

// -------------------------------------
var q6 = 0;
$($('.hezi6 .zhongz') [0]).show(); 
  var lunbo6 = function(){
    $(".hezi6 .zhongz").hide();
       
         // console.log(q6);
         q6 +=1;
         if (q6 == $('.hezi6 .zhongz').length ){
            q6 = 0;
          }
       $($(".hezi6 .zhongz")[q6]).show();
      // console.log(q);
  }
 var timerId5 = setInterval(lunbo6,2000);  


$($('.hezi6 .zhongz') [0]).show(); 
$('.hezi6 #rijian5').click(function(){
      $(".hezi6 .zhongz").hide();
      // console.log(q6);
         q6 +=1;
      if (q6 == $('.hezi5 .zhongz').length ){
        q6 = 0;
      }
      $($(".hezi6 .zhongz")[q6]).show();
      // console.log(q);
});

$('.hezi6 #ljian5').click(function(){
      $(".hezi6 .zhongz").hide();
     
      console.log(q6);
         q6 -=1;
      if (q6 < 0){
        q6 = $('.hezi6 .zhongz').length-1;
      }
       $($(".hezi6 .zhongz")[q6]).show();
      // console.log(q6);
 });








});








