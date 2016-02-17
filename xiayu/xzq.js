window.onload = function(){
    //var div = document.getElementsByClassName('box')[0];
    //var num=0;
    //setInterval(function(){
    //    num++;
    //    if(num==3){
    //        div.style.marginLeft = -num*300+"px";
    //        div.addEventListener('webkitTransitionEnd',fn,false);
    //        num=0;
    //    }else{
    //        div.removeEventListener('webkitTransitionEnd',fn,false);
    //        div.style.transition ="margin 1s ease";
    //        div.style.marginLeft = -num*300+'px';
    //    }
    //},1000);
    //
    //function fn(){
    //    div.style.transition="none";
    //    div.style.marginLeft=0;
    //}


    var cw=document.documentElement.clientWidth;
    var ch=document.documentElement.clientHeight;
    var arr=[];
for(var i = 0;i<300;i++){
        var rain=document.createElement('div');
        var tim = Math.random()*3;
        var lefts= 10+(cw-20)*Math.random();
        rain.style.cssText='width:7px;height:7px;background:#fff;position:absolute;left:'+lefts+'px;top:-20px;transition:top 1s linear '+tim+'s';
        document.body.appendChild(rain);
        arr.push(rain);
    }
    setTimeout(function(){
        for(var j = 0;j<arr.length;j++){
            arr[j].style.top= ch+"px";
            arr[j].addEventListener('webkitTransitionEnd',function(){
                this.style.top= -20+'px';
                this.style.transition="none";
                var tims = Math.random()*3;
                var that = this;
                setTimeout(function(){
                    that.style.transition="all 1s linear "+tims+"s";
                    that.style.top= ch+"px";
                },0);
            },false)
        }
    },0)



};