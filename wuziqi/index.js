window.onload = function(){
    //-------------------------------------
    var qipan = document.getElementById('qipan');
    var ROW = 10,
    width = Math.floor((600-ROW)/ROW)+'px';
    for(var i = 0;i<ROW;i++){
    	    var hangxian = document.createElement('div');
    	    var shuxian  = document.createElement('div');
    	    hangxian.setAttribute('class','hangxian');
    	    hangxian.style.top = 101+i*60+'px';
    	    shuxian.setAttribute('class','shuxian');
    	    shuxian.style.left = 531+i*60+'px';
    		qipan.appendChild(hangxian);
    		qipan.appendChild(shuxian);
    }

    for(var i = 0;i<ROW;i++){
    	for(var j = 0;j<ROW; j++){
    		var qizi  = document.createElement('div');
    		qizi.style.width  = width;
    		qizi.style.height = width;
    		qizi.setAttribute('class','qizi');
    		qizi.setAttribute('id',i+'-'+j);
    		qipan.appendChild(qizi);

    	}
    }

    var kaiguan = true,
    dict1 = {},dict2 = {},
    qiqi = document.getElementsByClassName('qizi');
    for(var i = 0; i<qiqi.length;i++){
	    qiqi[i].onclick = function(){
	    	var id = this.getAttribute('id');
	    	if(this.hasAttribute('hasColor')) return;
	    	if(kaiguan){
	    		this.style.background = 'white';
	    		this.setAttribute('hasColor','true');
	    		dict1[this.getAttribute('id')] = true;
	    		kaiguan = false;
	    		if(panduan(id,dict1)){
	    			alert('白棋赢了');
	    		}
	        }else{
	        	this.style.background = 'black';
	        	this.setAttribute('hasColor','true');
	        	dict2[this.getAttribute('id')] = true;
	        	kaiguan = true;
	        	if(panduan(id,dict2)){
	        		alert('黑棋赢了');
	        	}
	        }
	    } 
    };
    
  
    var panduan = function(id,dict){
    	var x = Number(id.split('-')[0]);
    	var y = Number(id.split('-')[1]);
    	var hang = 1, shu = 1, zxie = 1, yxie = 1;
    	var tx = x, ty = y;
    	while(dict[tx+'-'+(ty+1)]){
    		hang++;
    		ty++;
    	}
    	tx = x;
    	ty = y;
    	while(dict[tx+'-'+(ty-1)]){
    		hang++;
    		ty--;
    	}
    	if(hang >= 5){
    			return true;
    	}
    	tx = x;
    	ty = y;
    	while(dict[(tx+1)+'-'+ty]){
    		shu++;
    		tx++;
    	}
    	tx = x;
    	ty = y;
    	while(dict[(tx-1)+'-'+ty]){
    		shu++;
    		tx--;
    	}
    	if(shu >= 5){
    			return true;
    	}
    	tx = x;
    	ty = y;
    	while(dict[(tx-1)+'-'+(ty+1)]){
    		zxie++;
    		tx--;
    		ty++;
    	}
    	tx = x;
    	ty = y;
    	while(dict[(tx+1)+'-'+(ty-1)]){
    		zxie++;
    		tx++;
    		ty++;
    	}
    	if(zxie >= 5){
    			return true;
    	}
    	tx = x;
    	ty = y;
    	while(dict[(tx-1)+'-'+(ty-1)]){
    		yxie++;
    		tx--;
    		ty--;
    	}
    	tx = x;
    	ty = y;
    	while(dict[(tx+1)+'-'+(ty+1)]){
    		yxie++;
    		tx++;
    		ty++;
    	}
    	if(yxie >= 5){
    			return true;
    	}
    	return false;
    }

    // 五子棋结束---------------------------------------------------












































  // 1.求最大数

  // 2.循环结构

  // 3.

  // 20.五子棋

  // 21.贪吃蛇

  // 22.3d轮播

}