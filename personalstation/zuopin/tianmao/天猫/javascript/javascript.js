window.onload = function(){
var xiala = document.getElementsByClassName('xiala');
var cd = document.getElementsByClassName('cd');
for(var i = 0 ;i<xiala.length;i++){
  xiala[i].index = i;
      xiala[i].onmouseover = function(){
        cd[this.index].style.display = 'block';
      };
    xiala[i].onmouseout = function(){
     cd[this.index].style.display = 'none';
    };
}

var xback = document.getElementById('xback');
var timerId,juli,cha;
var SEC = 5,TIME = 60;
xback.onclick = function(){
  juli = document.body.scrollTop;
  cha = juli/TIME/SEC;
  clearInterval(timerId);
  timerId= setInterval(function(){
    document.body.scrollTop = juli;
    juli = juli - cha;
    if(juli<=0){
      clearInterval(timerId);
    }
  },SEC);
};

var tupians = document.getElementsByClassName('bjtp'),
    ddians  = document.getElementsByClassName('xuhao'),
    shuzi= document.getElementById('shuzi');
var newtupian = tupians[0];
var newddian  = ddians[0];
var timerId;
var kaiguan = true;
var fn = ( function(){
   var i = 1;
    return function(){
// 图片轮播
      newtupian.setAttribute('class','bjtp');
      tupians[i].setAttribute('class','bjtp show');
      newtupian = tupians[i];
// 小圆点
      newddian.setAttribute('class','xuhao');
      ddians[i].setAttribute('class','xuhao active');
      newddian = ddians[i];
//循环
      i++;
      if(i == tupians.length){
      i = 0;
   } 
};
})();
timerId = setInterval(fn,1000);

shuzi.onmouseover = function(){
  clearInterval(timerId);
};
shuzi.onmouseout = function(){
  if(kaiguan){
     clearInterval(timerId);
     timerId = setInterval(fn,1000);
  }
};

for(var i=0;i<ddians.length;i++){
    ddians[i].onclick = function(){
    	// alert(1);
       clearInterval(timerId);
       kaiguan = false;
       var index = this.getAttribute('index');
       newtupian.setAttribute('class','bjtp');
       tupians[index].setAttribute('class','bjtp show');
       newtupian = tupians[index];

       newddian.setAttribute('class','xuhao');
       this.setAttribute('class','xuhao active'); 
       newddian = this;
    };
};


var pinpais = document.getElementsByClassName('pinpai'),
    newpinpai = pinpais[0];
    lianjie = document.getElementById('lianjie');
var i = 1;
lianjie.onclick = function(){
   // console.log(i);
   newpinpai.setAttribute('class','pinpai ');
   pinpais[i].setAttribute('class','pinpai show1');
   console.log(pinpais[i]);
   newpinpai = pinpais[i];
   i++;
   if(i == pinpais.length){
     i = 0;
   } 
};
var can = document.getElementById('can');
window.onscroll = function(){
  if(document.body.scrollTop >=10){
   can.style.display='block';
}

};


// var fixed = document.getElementById('fixed');
// var ceng = document.getElementsByClassName('ceng');
// var pirfus = document.getElementsByClassName('pirfu');
// var start,end;
// var s=0,xishu=1;
// for(var i=0;i<pirfus.length;i++){
//   pirfus[i].index=i;
//   pirfus[i].onclick= function(){
//     // alert(1);
//     var scroll = ceng[this.index].setoffTop-fixed.getBoundingClientRect().top;
//     var nowtop =document.body.scrollTop;
//     start=nowtop;end=scroll;
//   if( start < end){
//     xishu = 1;
//   }else{
//     xishu = -1;
//   }
//   var cha = Math.abs(start -end)/50;
//    clearInterval(timerId);     //set之前要clear
//   timerId = setInterval(function(){
//     document.body.scrollTop = start;
//     start = start+xishu*cha;
//     if((xishu>0)?(start > end):(start<end ) ){
//       clearInterval(timerId);
//     }
//   },1);
//   };
// }



// var ljian = document.getElementsByClassName('ljian');
// var rjian = document.getElementsByClassName('rijian');
// var zhong1 = document.getElementsByClassName('zhong1');
// var newzhong1 = zhong1[i];
// // for(var i=0;i<zhong1.length;i++){
// //     // console.log(i);
// // };
// for(var i=0;i<ljian.length;i++){
//    ljian[i].onclick = function(){
//       alert(1);
//     kaiguan = false;
//     var back = (newzhong1.previousElementSibling)?newzhong1.previousElementSibling:zhong1[2];
//     newtupian.setAttribute('class','zhong1');
//     back.setAttribute('class','zhong1 show');
//     newtupian = back;
//    };
// };

// for(var i=0;i<rjian.length;i++){
//    rjian[i].onclick = function(){
//       alert(2);
//    };
// };



document.ondblclick = function(e){
  e.preventDefault();
};


};