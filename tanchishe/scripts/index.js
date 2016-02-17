window.onload = function(){
	var 
    MAXSNAKE =100,
    ROW = 10,
    snake = [{x:2,y:2},{x:2,y:3},{x:2,y:4}],
    RIGHT = 39, LEFT = 37, UP = 38, DOWN = 40,
    defaultDirection = RIGHT,
    dict = {};
	isInSnake = function(x,y){
		// panduan = function(){
		// 	if(dict[x+'-'+y]){
		// 		return true;
		// 	}else{
		// 		dict[x+'-'+y] = 1;
		// 		return false;
		// 	}
		// }
		
		for(var i =0;i<snake.length;i++){
			if(snake[i].x==x && snake[i].y==y){
					return true;
				}
			}
			return false;			
		}
    
    random = function(){
    	return Math.floor(Math.random()*ROW);
    }
    $ = function(id){
    	return document.getElementById(id);
    }
	dropFood = function(){
		var
		x = random(),y = random();
		if(snake.length ==MAXSNAKE){
			alert('你超神了...');
			return null;
		}
		while(isInSnake(x,y)){
			x = random(),
			y = random();
		}
        $(x+'-'+y).style.background = 'url(xiaoniao.jpg) no-repeat';
        return {x:x,y:y};

	},
	food=dropFood();
	//------------------------------------------------------------

	(function(){
		for(var i = 0;i<snake.length;i++){
			$(snake[i].x+'-'+snake[i].y).style.background = 'green';
		}	
	})();
	
	zou = function(dir){
		defaultDirection = dir;
		var last = snake.length-1;
        var newHead;
        console.log(dir);
        if(dir == LEFT){
        	newHead = {x:snake[last].x, y:snake[last].y-1};
        }
        if(dir == RIGHT){
        	newHead = {x:snake[last].x, y:snake[last].y+1};
        }
        if(dir == UP){
        	newHead = {x:snake[last].x-1, y:snake[last].y};
        }
        if(dir == DOWN){
        	newHead = {x:snake[last].x+1, y:snake[last].y};
        }
        if(newHead.x>9 || newHead.x<0|| newHead.y>9 || newHead.y<0){
        	alert('game over');
        	return null;
        }
        if(isInSnake(newHead.x,newHead.y)){
        	alert('咬自己干嘛');
        	return null;
        }
        // if(!panduan(newHead.x,newHead.y)){
        // 	alert('咬自己干嘛');
        // 	return null;
        // }
        if(newHead.x == food.x && newHead.y ==food.y){
        	snake.push(newHead);
        	$(food.x+'-'+food.y).style.background = 'green';
        	food = dropFood();
        	return null;
        }
        var weiba = snake.shift();
		snake.push(newHead);

		$(weiba.x+'-'+weiba.y).style.background = 'white';
		$(newHead.x+'-'+newHead.y).style.background = 'green';
	},
	
	setInterval(isInSnake,1000);


	document.onkeydown = function(e){
		var direction = e.keyCode;
		if( direction==LEFT || direction==UP ||direction==RIGHT ||direction==DOWN){
		    if(Math.abs(direction-defaultDirection) !== 2){
		    	console.log(direction);
		    	zou(direction);
		    }	
		}
	};

 //    var kaiguan = true;
	// document.onclick = function(){
	// 	if(kaiguan){
	// 		alert(1);
	// 	    kaiguan = false;
	// 	}else{
	// 		alert(2);
	// 	    kaiguan = true;
	// 	}	
	// };




































    
 //    var 
 //    MAXSNAKE =100,
 //    ROW = 10,
 //    snake = [{x:2,y:2},{x:2,y:3},{x:2,y:4}],
 //    RIGHT = 39, LEFT = 37, UP = 38, DOWN = 40,
 //    defaultDirection = RIGHT,

	// isInSnake = function(x,y){
	// 	for(var i =0;i<snake.length;i++){
	// 		if(snake[i].x==x && snake[i].y==y){
	// 				return true;
	// 			}
	// 		}
	// 		return false;			
	// 	}
    
 //    random = function(){
 //    	return Math.floor(Math.random()*ROW);
 //    }
 //    $ = function(id){
 //    	return document.getElementById(id);
 //    }
 //    // join = function(f,s){
 //    // 	return f+'-'+s;
 //    // }
	// dropFood = function(){
	// 	var
	// 	x = random(),
	// 	y = random();
	// 	//warning:当蛇的数据占满整个页面时会陷入死循环
	// 	if(snake.length ==MAXSNAKE){
	// 		alert('你超神了...');
	// 		return;
	// 	}
	// 	while(isInSnake(x,y)){
	// 		x = random(),
	// 		y = random();
	// 	}
 //        // var div = document.getElementById(x+'-'+y);
 //        // div.style.backgroundColor = '#f2c019';

 //        $(x+'-'+y).style.backgroundColor = '#f2c019';
 //        return {x:x,y:y};

	// },
	// food=dropFood();
	// //------------------------------------------------------------

	// (function(){
	// 	for(var i = 0;i<snake.length;i++){
	// 		$(snake[i].x+'-'+snake[i].y).style.background = 'green';
	// 	}	
	// })();
	


	// zou = function(dir){
	// 	defaultDirection = dir;
	// 	var last = snake.length-1;
 //        var newHead;
 //        console.log(dir);
 //        if(dir == LEFT){
 //        	newHead = {x:snake[last].x, y:snake[last].y-1};
 //        }
 //        if(dir == RIGHT){
 //        	newHead = {x:snake[last].x, y:snake[last].y+1};
 //        }
 //        if(dir == UP){
 //        	newHead = {x:snake[last].x-1, y:snake[last].y};
 //        }
 //        if(dir == DOWN){
 //        	newHead = {x:snake[last].x+1, y:snake[last].y};
 //        }
 //        if(newHead.x>9 || newHead.x<0|| newHead.y>9 || newHead.y<0){
 //        	alert('game over');
 //        	return null;
 //        }

 //        if(isInSnake(newHead.x,newHead.y)){
 //        	alert('咬自己干嘛');
 //        	return null;
 //        }

 //        if(newHead.x == food.x && newHead.y ==food.y){
 //        	snake.push(newHead);
 //        	$(food.x+'-'+food.y).style.background = 'green';
 //        	food = dropFood();
 //        	return null;
 //        }

 //        var weiba = snake.shift();

	// 	// var c = {};
	// 	// c.x = snake[snake.length-1].x;
	// 	// c.x = snake[snake.length-1].y+1;
		
	// 	// var newHead = {x:snake[last].x, y:snake[last].y+1};
	// 	snake.push(newHead);

	// 	$(weiba.x+'-'+weiba.y).style.background = 'white';
	// 	$(newHead.x+'-'+newHead.y).style.background = 'green';
	// }

	// document.onkeydown = function(e){
	// 	var direction = e.keyCode;

	// 	if( direction==LEFT || direction==UP ||direction==RIGHT ||direction==DOWN){

	// 	    if(Math.abs(direction-defaultDirection) !== 2){
	// 	    	console.log(direction);
	// 	    	zou(direction);
	// 	    }
			
	// 	}

	// // 	// alert(e.keyCode);
	// // 	// if(e.keyCode == 38){
	// // 	// 	zou('up');
	// // 	// }
	// // 	// if(e.keyCode == 40){
	// // 	// 	zou('down');
	// // 	// }
	// // 	// if(e.keyCode == 37){
	// // 	// 	zou('left');
	// // 	// }
	// // 	// if(e.keyCode == 39){
	// // 	// 	zou('right');
	// // 	// }

	// };


    













    
    
    // var kongZuoWei = function(x,y){
    // 	if(x==2&&y ==0){
    // 		return true;
    // 	}else{
    // 		return false;
    // 	}
    // }

    // var dianming = function(){
    // 	var x = Math.floor(Math.random()*5);
    // 	var y = Math.floor(Math.random()*10);
    // 	while(kongZuoWei(x,y)){
    //          x = Math.floor(Math.random()*5);
    // 		 y = Math.floor(Math.random()*10);
    // 	}
    // 	return {x:x,y:y};
    // }
    // console.log(dianming());


    // var da = [{a:1,b:2},{a:3,b:5},{a:12,b:4}];
    // var aaa = function(x,y){
    // 	for(var i = 0;i<da.length;i++){
    // 		if(da[i].a==x&&da[i].b==y){
    // 			return true;
    // 		}
    // 	}
    // 	return false;
    // }
    // console.log(aaa(4,5));




  //   var arr = [{x:0,y:0},{x:0,y:1},{x:0,y:2}];
  //   var fn = function(){
  //   	arr.shift();
  //   	var c = {};
  //   	c.x = 0;
  //   	c.y = arr[arr.length-1].y+1;
  //   	arr.push(c);
  //   }
  // console.log(fn;
  // console.log(fn());







































// var t = setInterval(aa,100);
// clearInterval(t);






}