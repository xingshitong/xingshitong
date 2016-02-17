window.onload = function(){


// 一个函数最好不要超过80行
// 一行代码不要让编辑器出现横向滚动条
// 一行代码的长度保障打印到纸上不换行

var el = function(id){
	return document.getElementById(id);
}



 var qian = el('qian'),
 nianfen = el('nianfen'),
 yuefen = el('yuefen'),
 rifen = el('rifen'),
 hou = el('hou'),
 who = el('who'),
 wenhao = el('wenhao'),
 tian = el('tian'),
 nfen = el('nfen'),
 yfen = el('yfen'),
 rfen = el('rfen'),
 Rxq = el('Rxq'),
 xing = el('xing'),
 RXQ = el('RXQ'),
 sheji = el('shezhi'),
 jintian = el('jintian'),
 xiaotu = el ('xiaotu'),
 ri = el('ri'),
 zhou = el('zhou'),
 yue = el('yue'),
 xiazai = el('xiazai'),
 biao = el('biao'),
 jiahao = el('jiahao');
 var Rhao = document.getElementsByClassName('Rhao'),
 syg;
 var cc = ['日','一','二','三','四','五','六'];






 var d = new Date();
 var meiyuetianshu = [31,28,31,30,31,30,31,31,30,31,30,31];

 addClass = function(el,s){
    var tmp = el.getAttribute('class').split(' ');
    var dict = {};
    for(var i = 0;i<tmp.length;i++){
    	dict[tmp[i]] = true;
    }
    if(!dict[s]){
    	el.setAttribute('class', el.getAttribute('class')+' '+s);
    }
 }
 removeClass = function(el,s){
    var tmp = el.getAttribute('class').split(' ');
    var dict = {};
    for(var i = 0;i<tmp.length;i++){
    	dict[tmp[i]] = true;
    }
    delete dict[s];
    var ns = '';
    for(var name in dict){
    	ns += ' ' + name;
    }
    el.setAttribute('class',ns)
 }



 var isrunnian = function(year){
 	if( year%4 ==0 &&year%100 !=0 ||year%400 == 0){
 		return true;
 	}
 	return false;
 }

 var previousDay = function(){
 	var currentyear = d.getFullYear();
 	var currentmonth = d.getMonth();
 	var currentdate = d.getDate();
 	var targetyear, targetmonth,targetDate;
 	targetdate=currentdate-1;
 	if(targetDate == 0){
 		targetmonth=currentmonth-1;
 		if(targetmonth == -1){
 			targetyear = currentyear - 1;
 			targetmonth = 11;
 		}
 		if(targetmonth ==1 && isrunnian(targetyear)){
 				meiyuetianshu[1] = 29;
 		}
 		targetdate = meiyuetianshu[targetmonth];
 		targetyear = currentyear;
 	}else{
 		targetmonth=currentmonth;
 		targetyear = currentyear;
 	}


 	d = new Date(targetyear,targetmonth,targetdate);
 	console.log(d.getFullYear(),d.getMonth()+1,d.getDate());
 }
 qian.onclick = function(){
 	previousDay();
 	huarili();
 	ondatechange(d);
 };
 hou.onclick = function(){
 	nextDay();
 	huarili();
 	ondatechange(d);
 }

 var nextDay = function(){
 	var currentyear = d.getFullYear();
 	var currentmonth = d.getMonth();
    var currentdate = d.getDate();
    var targetyear,targetmonth,targetdate;
    targetdate = currentdate+1;
    if(currentmonth == 1 && isrunnian(currentyear)){
    	meiyuetianshu[1] = 29;
    }
    if(targetdate > meiyuetianshu[currentmonth]){
    	targetmonth = currentmonth+1;
    	if(targetmonth == 12){
    		targetyear = currentyear+1;
    		targetmonth = 0;
    	}
    	targetdate = 1;
    	targetyear = currentyear;
    }else{
        targetmonth = currentmonth;
        targetyear = currentyear;
    }
    d = new Date(targetyear,targetmonth,targetdate);
 }

var chatu = document.getElementById('chatu');
var chatu1 = document.getElementsByClassName('chatu1');
var ajax = function(o){
    var req = new XMLHttpRequest();
    req.open('get',o.url);
    req.send();
    req.onreadystatechange = function(){
        if(this.readyState == this.DONE && this.status ==200 ){
            o.onsuccess(this.response);
        }
    }
}



     var riqi00 = function(){
            return d.getFullYear()+ '-' + d.getMonth() + '-' + d.getDate();
        }



 var ondatechange = function(d){
 	if(syg){
 		syg.style.color = 'black';
 		syg.style.background = '';
 	}
 	 var xx = d.getDate();
 	 el('d'+xx).style.color = 'white';
 	 el('d'+xx).style.background = 'red';
 	 syg = el('d'+xx);

 	var ss = d.getFullYear()+' 年 '+(d.getMonth()+1)+'月 '+d.getDate() + ' 日'+'星期'+ cc[d.getDay()];
    nyr.innerHTML = ss.slice(0,-3);
    xing.innerHTML = ss;
    tian.innerHTML = d.getDate();
    RXQ.innerHTML = cc[d.getDay()];
 	// nianfen.innerHTML = d.getFullYear();
 	// yuefen.innerHTML = d.getMonth()+1;
 	// rifen.innerHTML = d.getDate();
 	// tian.innerHTML = d.getDate();
 	// RXQ.innerHTML = d.getDay();
 	// Rxq.innerHTML = d.getDay();
 	// nfen.innerHTML = d.getFullYear();
 	// yfen.innerHTML = d.getMonth()+1;
 	// rfen.innerHTML = d.getDate();
 	// syg.style.background = 'black';
 	// currentd.style.background = 'red';
 	// syg = currentd;


    ajax({
            url:'http://localhost/rilichatu?time='+riqi00(),
            onsuccess:function(re){
                console.log(re);
                if(re !== 'none'){
                    re = JSON.parse(re);
                    var el;
                    for(var i = 0;i<re.length;i++){
                            chatu1[i].innerHTML = '';
                            el = document.createElement('img');
                            el.src = 'img/' + re[i];
                            chatu1[i].appendChild(el);
                        }  
                    }
                }
                
        });



 }
 // biao.onclick = function(e){
 // 	// if(e.target = this) return;
 // 	// var currentd = e.target;
 // 	ondatechange(d);
 // }

 var huarili = function(){
 	var i = 0,l;
 	//  1.前一月  
 	var shangyuetianshu = meiyuetianshu[d.getMonth()-1];
 	var tmp = d.getDate();
 	d.setDate(1);
 	var xingqi = d.getDay();
 	d.setDate(tmp);
 	l = xingqi ==0? 6:xingqi-1;
 	if(d.getMonth()-1 == -1){
 		shangyuetianshu = 31;
 	}
 	for(;i<l;i++){
        Rhao[i].innerHTML = shangyuetianshu - (l-i-1);
        Rhao[i].style.color = '#ccc';
        Rhao[i].removeAttribute('id');
        Rhao[i].setAttribute('pr',true)
 	}
 	for(;i<meiyuetianshu[d.getMonth()]+l;i++){
 		Rhao[i].setAttribute('id','d'+(i-l+1));
 		Rhao[i].innerHTML = i-l+1;
 		Rhao[i].style.color = 'black';
 		Rhao[i].removeAttribute('pr');
 		Rhao[i].removeAttribute('ne');
 	}
 	var D = i;
 	// if( D > 29 ){
 	// 	if(D > 35){
 	// 		for(;i<42-14;i++){
		//  		Rhao[i].setAttribute('ne',true);
		//  		Rhao[i].innerHTML = i-D+1;
		//  		Rhao[i].style.color = '#ccc';
 	//         }
 	// 	}
 	// 	for(;i<42-7;i++){
	 // 		Rhao[i].setAttribute('ne',true);
	 // 		Rhao[i].innerHTML = i-D+1;
	 // 		Rhao[i].style.color = '#ccc';
 	//     }
 	// }else{
 		
 	// }
 	for(;i<42;i++){
	 		Rhao[i].setAttribute('ne',true);
	 		Rhao[i].innerHTML = i-D+1;
	 		Rhao[i].style.color = '#ccc';
 	    }
 	//  2.当月   
 	//  3.下月
 }
 huarili();
 ondatechange(d);



for(var i = 0;i<Rhao.length;i++){
	Rhao[i].onclick = function(){
		var a = d.getFullYear();
		var b = d.getMonth();
		var c = d.getDate();
		var xa,xb,xc;
	    if(this.hasAttribute('id') ){
	    	d.setDate(this.innerHTML);
	    	ondatechange(d);
        }else if( this.hasAttribute('pr') ){
        	if( b-1 == -1){
        		xa = a-1;
        		xb = 0;
        		xc = this.innerHTML;
        	}else{
        		xa = a;
        		xb = b-1;
        		xc = this.innerHTML;
        	}
            d = new Date(xa,xb,xc);
        	huarili(d);
        	ondatechange(d);
        }else if( this.hasAttribute('ne') ){
        	if( b+1 == 12){
        		xa = a+1;
        		xb = 0;
        		xc = this.innerHTML;
        	}else{
        		xa = a;
        		xb = b+1;
        		xc = this.innerHTML;
        	}
        	d = new Date(xa,xb,xc);
        	huarili(d);
        	ondatechange(d);
        }

	}
}
    


for(var i = 0;i<chatu1.length;i++){
    chatu1[i].onclick = function(){
        console.log(this.firstElementChild.getAttribute('src'));
        var bb = document.createElement('img');
        // fangda.innerHTML = this.innerHTML;
        fangda.style.display = 'block';
        bb.src = this.firstElementChild.getAttribute('src');
        fangda.appendChild(bb);
   }
}

var wrong = document.getElementById('wrong');
wrong.onclick = function(){
    fangda.style.display = 'none';
}



 jintian.onclick = function(){
    var d = new Date();
 }

 if(d = new Date()){
    shike.style.top = (1+d.getHours())*64 +d.getMinutes()+'px';
 }







// 1.hover   2.当天日期 字红，hover粉色  点它红背景白字
// 3.少一行    4.少两行   5.礼拜天背景灰色
// 6.只有日期为今天才有红线      7.前往今天  8.scroll






// var d = new Date();       380037343
// 1. (1990,3,4,5,6,7,8)   2.('1932-1-8 4:42:31')    3.(56464165415);









}