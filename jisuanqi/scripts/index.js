
window.onload = function(){



	var f = '',s = '',o = '' ;
	var sc = document.getElementById('screen1');
	var equl = document.getElementById('dengyuhao');
	var ac = document.getElementById('ac');
	var nums = document.getElementsByClassName('number');
	var fuhao = document.getElementsByClassName('fuhao');
	var fushu = document.getElementById('fushu');
	for(var i=0;i<nums.length;i++){
		nums[i].onclick = function(){
			if(o == ''){
	       if(this.innerHTML == '.' && f.indexOf('.') != -1){
           return;
            }
               f = f + this.innerHTML;
				sc.innerHTML = f;
			}else{
		    if(this.innerHTML == '.' && f.indexOf('.') != -1){
            return;
          }
				s = s + this.innerHTML;
				sc.innerHTML = s;
			}
		}
	}
	for(var i=0;i<fuhao.length;i++){
			fuhao[i].onclick = function(){
				o = this.innerHTML;
			}
		}
  // fushu.onclick = function(){
  //   sc.innerHTML= -Number(f);
  // };

	equl.onclick = function(){
		if(o == '+'){
			sc.innerHTML = Number(f) + Number(s);
		}
		if(o == '-'){
			sc.innerHTML = Number(f) - Number(s);
		}
		if(o == '*'){
			sc.innerHTML = Number(f) * Number(s);
		}
		if(o == '/'){
			sc.innerHTML = Number(f) / Number(s);
		}
    // if(o == '+/-'){
    //   sc.innerHTML = Number(f)+Number(s);
    //   o = '';
    // }
    f = sc.innerHTML;
    s= '';
    o = '';
	}
	ac.onclick = function(){
        f = '';s = '';o = '';
		sc.innerHTML = 0;
	}






  var firstNumber = '';
  var secondNumber = '';
  var fuhao = '';
  var screen = document.getElementById('screen');
  var num = document.getElementsByClassName('num');
  var  denghao = document.getElementById('denghao');
  var oprator = document.getElementsByClassName('oprator');
  var qingchu = document.getElementById('qingchu');
  var pai = document.getElementById('pai'); 
  var kuohao = document.getElementsByClassName('kuohao');
  for( var i = 0;i<num.length;i++){
    num[i].onclick = function(){
       if( fuhao == ''){
          if(this.innerHTML == '.' && firstNumber.indexOf('.') != -1){
           return;
          }
       firstNumber = firstNumber + this.innerHTML;
       screen.innerHTML = firstNumber; 
       }else{
         if(this.innerHTML == '.' && firstNumber.indexOf('.') != -1){
           return;
          }
        secondNumber = secondNumber +this.innerHTML;
        screen.innerHTML = secondNumber;
       }  
    };
  }


for( var i = 0;i<oprator.length;i++){
  oprator[i].onclick = function(){
    fuhao = this.innerHTML.trim();
  }
}
denghao.onclick = function(){
    if( fuhao == '+'){
      screen.innerHTML = Number(firstNumber) + Number(secondNumber);
    } 
    if( fuhao == '-'){
      screen.innerHTML = Number(firstNumber) - Number(secondNumber);
    }
    if( fuhao == '*'){
       screen.innerHTML = Number(firstNumber) * Number(secondNumber);
    }
    if( fuhao == '/'){
       screen.innerHTML = Number(firstNumber) / Number(secondNumber);
    }
    if( fuhao == '%'){
       screen.innerHTML = Number(firstNumber) % Number(secondNumber);
        console.log(this.innerHTML);
    }
    if( fuhao == 'x!'){ 
         var result = 1;
        for(i = 1; i <= Number(firstNumber); i++){
           result *= i;
        }
        console.log(result);
       screen.innerHTML =result ;
    }
    if( fuhao == 'x²'){
       screen.innerHTML = Number(firstNumber)*Number(firstNumber);   
    }
    if( fuhao == 'x³'){
       screen.innerHTML = Number(firstNumber)*Number(firstNumber)*Number(firstNumber);  
    }
    if( fuhao == 'x³'){
       screen.innerHTML = Math.cube(Number(firstNumber));  
    }
    if( fuhao == 'x¯¹'){
       screen.innerHTML = 1/Number(firstNumber) ;  
    }
    if( fuhao == 'xʸ'){
       screen.innerHTML = Math.pow(Number(firstNumber),Number(secondNumber)) ;  
    }
    
    if( fuhao == '-'){
       screen.innerHTML = Number(firstNumber)+Number(secondNumber) ;
       fuhao = '';  
    }
    if(fuhao == '√'){
      screen.innerHTML = Math.sqrt(Number(firstNumber)) ;
    }
    if(fuhao == 'ˣ√y'){
      screen.innerHTML = Math.sqrt(Number(firstNumber),Number(secondNumber)) ;
    }

    if(fuhao == 'Rand'){
      screen.innerHTML = Math.random(Number(firstNumber)) ;
    }
    if(fuhao == 'sin'){
      screen.innerHTML = Math.sin(Number(firstNumber)) ;
    }
    if(fuhao == 'cos'){
      screen.innerHTML = Math.cos(Number(firstNumber)) ;
    }
    if(fuhao == 'tan'){
      screen.innerHTML = Math.tan(Number(firstNumber)) ;
    }
    if(fuhao == 'sinh'){
      screen.innerHTML = Math.sinh(Number(firstNumber)) ;
    }
    if(fuhao == 'cosh'){
      screen.innerHTML = Math.cosh(Number(firstNumber)) ;
    }
    if(fuhao == 'tanh'){
      screen.innerHTML = Math.tanh(Number(firstNumber)) ;
    }
    if(fuhao == 'log'){
      screen.innerHTML = Math.log(Number(firstNumber)) ;
    }
    //  if(fuhao == 'ln'){
    //   screen.innerHTML = Math.ln(Number(firstNumber)) ;
    // }
     if(fuhao == 'EE'){
      screen.innerHTML = Number(firstNumber)* (Math.pow(10,Number(secondNumber) ));
    }
    
    
    
    // if(fuhao == 'π'){
    //   if(fuhao = '+'){
    //     screen.innerHTML =Math.PI + Number(firstNumber);
    //   }
    //   if(fuhao = '-'){
    //     screen.innerHTML =Math.PI - Number(firstNumber);
    //   }
    //   if(fuhao = '*'){
    //     screen.innerHTML =Math.PI * Number(firstNumber);
    //   }
    //   if(fuhao = '/'){
    //     screen.innerHTML = Number(firstNumber)/Math.PI;
    //   }

    // }


    firstNumber =screen.innerHTML;secondNumber = '';fuhao = '';
    
 };
  

	 qingchu.onclick = function(){
	    screen.innerHTML = 0;
	    firstNumber ='';
	    secondNumber = '';
	    fuhao = '';
	   console.log(this.innerHTML);
	   } 

 // for( var i = 0;i<kuohao.length;i++){
 //  kuohao[i].onclick = function(){
 //    screen.innerHTML = this.innerHTML;
 //  }
 // }
     


      



};











