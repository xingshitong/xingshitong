window.onload = function(){
//1. 在控制台中输出10行*
var aa = '*';
var xing = function(){
	for(var i = 0;i<10;i++){
		console.log(aa);
		aa += '*';
	}	
}
// xing();

// setInterval(xing,1000);
var xing2 = function(){
	var bb = '';
	for(var i = 0;i<5;i++){
		var s = '';
		for(var k = 0;k<i+1;k++){
			s += '*';
		}
		console.log(s);
	}	
}
// xing2();

// 2. 写一个函数在页面中输出5行*
// document.write('*');
// document.write('<br/>');
// document.write('*');
var xing3 = function(){
	for(var i = 0;i<6;i++){
		for( var k = 0;k<5-i;k++){
			document.write('--');
		}
		for(var j = 0; j<i*2+1;j++){
			document.write('-');
			document.write('*');
		}
		document.write('<br/>');
	}
}
// xing3();

// 3. 写一个函数  在页面中用定位创建28的元素，放到一个div中
//  28个元素都用定位  摆成金字塔  1 3 5 7 9

var Pjin = document.getElementById('Pjin'),
cc = 70,dd,dict2 = {'A':1,'2':2,'3':3,'4':4,'5':5,'6':6,'7':7,
'8':8,'9':9,'10':10,'J':11,'Q':12,'K':13};
var Pjinzita = function(){
	for(var i = 0; i<7 ;i++){
		for(var j = 0; j<i+1 ;j++){
			dd = 300 + (6-i)*66 + j*130;
			var Pzi = document.createElement('div');
			Pzi.setAttribute('class','Pzi');
			Pzi.style.top  = cc*i+'px';
			Pzi.style.left = dd+'px';
			Pzi.setAttribute('id',i+'-'+j);
			// Pzi.style.zIndex = 'cc';
			Pjin.appendChild(Pzi);
		}
	}
}
Pjinzita();

var previous = null,kaiguan = true;
Pjin.onclick = function(e){
	if(e.target == this ) return;
	// var ss = e.target.getAttribute('id').split('-');
	// console.log(ss[0]);

	var hh = Number((e.target.getAttribute('id').split('-'))[0]);
	var ii = Number((e.target.getAttribute('id').split('-'))[1]);
	if( document.getElementById((hh+1)+'-'+ii) 
		|| document.getElementById((hh+1)+'-'+(ii+1)) ){
		return;
    }
	if(previous != null){
		previous.style.border = '1px solid black';
        // e.target.style.border = '1px solid red';
        // previous = e.target;
	}
	e.target.style.border = '1px solid red';
	previous = e.target;
	if(kaiguan){
		var dp1 = e.target;
		var dp2 = dict2[e.target.innerHTML];
		kaiguan = false;
	}else{
		var dp11 = e.target;
		var dp22 = dict2[e.target.innerHTML];
		kaiguan = true;
	}
	if(dp2 == 13 || dp22 ==13 ){
		Pjin.removeChild(e.target);
	}
	if(dp2 + dp22 ==13){
		Pjin.removeChild(dp1);
		Pjin.removeChild(dp11);
	}
}


// 4. 事件委托



// 5. 给字典
var dict = {1:'A',2:'2',3:'3',4:'4',5:'5',6:'6',7:'7',
8:'8',9:'9',10:'10',11:'J',12:'Q',13:'K'};
var Pta = document.getElementsByClassName('Pzi');

var pukeshu = function(){
	var arr = [];
	for(var i = 0;i<13;i++){
		var pk = 1+Math.floor(Math.random()*13);
		arr.push(pk);
	}
	for(var j = 0; j<arr.length;j++){
		// console.log( dict[arr[i]] );
	}
}

// for(var i = 0;i<28; i++){
// 	Pta[i].innerHTML = dict[pukeshu()];
// }


// 5.写一个函数  生成一个乱序扑克牌
var yangshi = ['rd','bk','fk','mh']
var poker1 = [];

var poker = function(){
	var zidian = {};
	while(poker1.length !=52 ){
		var pukepai = {};
		pukepai.huase = yangshi[Math.floor(Math.random()*4)];
		pukepai.shuzi = dict[Math.floor(1+Math.random()*13)];
		if(!zidian[pukepai.huase+pukepai.shuzi]){
			poker1.push(pukepai);
			zidian[pukepai.huase+pukepai.shuzi] = true;
		}	
	}
	return poker1;
}


    var zuo = document.getElementById('zuo');
    var yzou = document.getElementById('yzou');
    var huiqu = document.getElementById('huiqu');
    var you = document.getElementById('you');
    for(var i = 0;i<24;i++){
    	var zuopk = document.createElement('div');
    	zuopk.setAttribute('class','zuo');
    	zuo.appendChild(zuopk);
    }
    



var aaa = poker();
for(var i = 0 ; i<28;i++){
	Pta[i].innerHTML = poker1[i].shuzi;
	if( poker1[i].huase == 'rd'){
		Pta[i].style.backgroundImage = 'url(./img/1.jpg)';
	}
	if( poker1[i].huase == 'bk'){
		Pta[i].style.backgroundImage = 'url(./img/2.jpg)';
	}
	if( poker1[i].huase == 'fk'){
		Pta[i].style.backgroundImage = 'url(./img/3.jpg)';
	}
	if( poker1[i].huase == 'mh'){
		Pta[i].style.backgroundImage = 'url(./img/4.jpg)';
	}
}

var zuopk = document.getElementsByClassName('zuo');
var k = 0;
for( var j = 51;j>27;j--){
	zuopk[k].innerHTML = poker1[j].shuzi;
	if( poker1[j].huase == 'rd'){
		zuopk[k].style.backgroundImage = 'url(./img/1.jpg)';
	}
	if( poker1[j].huase == 'bk'){
		zuopk[k].style.backgroundImage = 'url(./img/2.jpg)';
	}
	if( poker1[j].huase == 'fk'){
		zuopk[k].style.backgroundImage = 'url(./img/3.jpg)';
	}
	if( poker1[j].huase == 'mh'){
		zuopk[k].style.backgroundImage = 'url(./img/4.jpg)';
	}
	k++;
}


yzou.onclick = function(){
	console.log(zuo.lastElementChild);
	you.appendChild(zuo.removeChild(zuo.lastElementChild));
}

huiqu.onclick = function(){
	var ii = you.children.length;
	for(var i = 0; i<ii;i++){
		zuo.appendChild( you.removeChild(you.lastElementChild) );
	}
}









}