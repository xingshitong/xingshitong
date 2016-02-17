window.onload = function(){
(function(){
	var Xlun = document.getElementsByClassName('Xlun'),
	Xdian = document.getElementsByClassName('Xdian'),
	Xpre = document.getElementById('Xprevious'),
	Xnext = document.getElementById('Xnext'),
	aa = Xlun[0],timerId,bb = Xlun[0],cc=0,dd = Xdian[0];
	Xlun[0].style.display = 'block';
	Xdian[0].style.background = 'red';

	var XMJSQ = function(){
		cc++;
		if(cc == 5){
    		cc = 0;
    	}
    	dd.style.background = 'white';
    	aa.style.display = 'none';
    	Xlun[cc].style.display = 'block';
    	Xdian[cc].style.background = 'red';
    	aa = Xlun[cc];
    	dd = Xdian[cc];
    	bb = Xlun[cc];
    }

timerId = setInterval(XMJSQ,1000);

	for(var i = 0;i<Xdian.length;i++){
		Xdian[i].inde = i;
		Xdian[i].onmouseover = function(e){
			clearInterval(timerId);
			aa.style.display = 'none';
			dd.style.background = 'white';
			this.style.background = 'red';
			Xlun[this.inde].style.display = 'block';
			dd = e.target;
			aa = Xlun[this.inde];
			cc = this.inde;
		}
		Xdian[i].onmouseout = function(){
			timerId = setInterval(XMJSQ,1000);
		}
	}
	for(var i = 0;i<Xlun.length;i++){
		Xlun[i].Xin = i;
		Xlun[i].onclick = function(e){
			if(e.target == this){
				clearInterval(timerId);
			}
	    }
	    Xlun[i].onmouseout = function(){
	    	clearInterval(timerId);
	    	timerId = setInterval(XMJSQ,1000);
	    }
	}
	Xpre.onclick = function(){
	 //    var k = 0;
		// return function(){
		//    if(k == 3) return;
  //          console.log(1);
  //          k++;
		// };// 闭包 应用
		
		clearInterval(timerId);
		if(cc == 0){
			cc = 4;
		}else{
			cc -= 1;
		}
		aa = Xlun[cc];
		aa.style.display = 'block';
		bb.style.display = 'none';
		bb = aa;
		timerId = setInterval(XMJSQ,1000);
	};
	Xnext.onclick = function(){
		clearInterval(timerId);
		bb.style.display = 'none';
		cc += 1;
		if(cc == 5){
			cc = 0;
		}
		aa = Xlun[cc];
		aa.style.display = 'block';
		bb = aa;
		timerId = setInterval(XMJSQ,1000);
	}
})();

// var Xlun = document.getElementsByClassName('Xlun'),
// Xdian = document.getElementsByClassName('Xdian'),
// prev = document.getElementById('Xprevious'),
// next = document.getElementById('Xnext'),
// timerId,currentlun = Xlun[0],currentdian = Xdian[0];
// Xlun[0].style.display = 'block';
// Xdian[0].style.background = 'red';


// var XMJSQ = (function(){
// 	var i = 1;
// 	return function(){
// 		currentlun.style.display = 'none';
// 		Xlun[i].style.display = 'block';
// 		currentlun = Xlun[i];
// 		currentdian.style.background = '';
// 		Xdian[i].style.background = 'red';
// 		currentdian = Xdian[i];
// 		i++;
// 		if( i == Xlun.length ){
// 			i = 0;
// 		}
// 	}
// })();

// timerId = setInterval(XMJSQ,1000);

// for(var i = 0;i<Xlun.length;i++ ){
// 	Xlun[i].onmouseover = function(){
// 		clearInterval(timerId);
// 	}
// 	Xlun[i].onmouseout = function(){
// 		timerId = setInterval(XMJSQ,1000);
// 	}
// }

// for(var i = 0; i< Xdian.length;i++){
// 	Xdian[i].inde = i;
// 	Xdian[i].onclick = function(){
// 		clearInterval(timerId);
// 		currentlun.style.display = 'none';
// 		Xlun[this.inde].style.display = 'block';
// 		currentlun = Xlun[this.inde];
// 		currentdian.style.background = '';
// 		Xdian[this.inde].style.background = 'red';
// 		currentdian = Xdian[this.inde];
// 	}
// }

// next.onclick = function(){
// 	clearInterval(timerId);
// 	var next = (currentlun.nextElementSibling.getAttribute('Xlun'))? currentlun.nextElementSibling:Xlun[0];
// 	currentlun.style.display = 'none';
// 	next.style.display = 'block';
// 	currentlun = next;

//     var nextl = (currentdian.nextElementSibling)? currentdian.nextElementSibling:Xdian[0];
// 	currentdian.style.background = '';
// 	nextl.style.background = 'red';
// 	currentdian = nextl;
// }

































}