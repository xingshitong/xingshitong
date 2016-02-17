function shape(copy,canvas,cobj){
    this.copy=copy;
    this.canvas=canvas;
    this.cobj=cobj;
    this.fillColor='#000';
    this.strokeColor='#000';
    this.lineWidth=1;
    this.type='stroke';
    this.shapes='line';
    this.width=canvas.width;
    this.height=canvas.height;
    this.history=[];
}
shape.prototype={
    init:function(){
        this.cobj.fillStyle=this.fillColor;
        this.cobj.strokeStyle=this.strokeColor;
        this.cobj.lineWidth=this.lineWidth;
    },
    line:function(x,y,x1,y1){
        var that=this;
        that.cobj.beginPath();
        that.cobj.moveTo(x,y);
        that.cobj.lineTo(x1,y1);
        that.cobj[that.type]();
        that.cobj.closePath();
    },
    rect:function(x,y,x1,y1){
        var that=this;
        that.cobj.beginPath();
        that.cobj.rect(x,y,x1-x,y1-y);
        that.cobj.closePath();
        that.cobj[that.type]();
    },
    circle:function(x,y,x1,y1){
        var that=this;
        that.cobj.beginPath();
        var r=Math.sqrt((x1-x)*(x1-x)+(y1-y)*(y1-y));
        that.cobj.arc(x,y,r,0,2*Math.PI);
        that.cobj.closePath();
        that.cobj[that.type]();
    },
    draw:function(){
        var that=this;
        that.copy.onmousedown=function(e){
            var sx= e.offsetX;
            var sy= e.offsetY;
            that.copy.onmousemove=function(e){
                that.cobj.clearRect(0,0,that.width,that.height);
                if(that.history.length>0){
                    that.cobj.putImageData(that.history[that.history.length-1],0,0);
                }
                that.init();
                var ex= e.offsetX;
                var ey= e.offsetY;
                that[that.shapes](sx,sy,ex,ey);
            };
            that.copy.onmouseup=function(){
                that.history.push(that.cobj.getImageData(0,0,that.width,that.height));
                that.copy.onmousemove=null;
                that.copy.onmouseup=null;
            }
        }
    },
    pen:function(){
        var that=this;
        that.copy.onmousedown=function(e){
            var sx= e.offsetX;
            var sy= e.offsetY;
            that.cobj.beginPath();
            that.cobj.moveTo(sx,sy);
            that.copy.onmousemove=function(e){
                if(that.history.length>0){
                    that.cobj.putImageData(that.history[that.history.length-1],0,0);
                }
                that.init();
                var ex= e.offsetX;
                var ey= e.offsetY;
                that.cobj.lineTo(ex,ey);
                that.cobj[that.type]();
            };
            that.copy.onmouseup=function(){
                that.cobj.closePath();
                that.history.push(that.cobj.getImageData(0,0,that.width,that.height));
                that.copy.onmousemove=null;
                that.copy.onmouseup=null;
            }
        }
    },
    xp:function(xp,w,h){
        var that=this;
        that.copy.onmousedown=function(e){
            var sx= e.offsetX;
            var sy= e.offsetY;
            that.copy.onmousemove=function(e){
                var ex= e.offsetX;
                var ey= e.offsetY;
                xp.css({
                    display:'block',
                    left:ex-w/2,
                    top:ey-h/2
                });
                that.cobj.clearRect(ex,ey,w,h);
            };
            that.copy.onmouseup=function(){
                xp.css({
                    display:'none'
                });
                that.history.push(that.cobj.getImageData(0,0,that.width,that.height));
                that.copy.onmousemove=null;
                that.copy.onmouseup=null;
            }
        }
    },
    move:function(zou){
        var that=this;
        that.copy.onmousedown=function(e){
            var sx = e.offsetX;
            var sy = e.offsetY;
            var ex,ey,w, h,temp;
            that.copy.onmousemove=function(e){
                ex = e.offsetX;
                ey = e.offsetY;
                w = ex-sx;
                h = ey-sy;
                zou.css({
                    display:'block',
                    top:ey-h+'px',
                    left:ex-w+'px',
                    width:w+'px',
                    height:h+'px'
                })
                temp=that.cobj.getImageData(sx,sy,ex,ey);
                that.cobj.clearRect(sx,sy,w,h);
                that.cobj.putImageData(temp,sx,sy);
            }
            that.copy.onmouseup=function(){
                that.tuodong(zou,sx,sy,w,h,temp);
                that.copy.onmouseup = null;
                that.copy.onmousemove = null;
            }
        }
    },
    tuodong:function(zou,sx,sy,w,h,temp){
        var that=this;
        that.copy.onmousemove=function(e){
            alert(1);
            var mx = e.offsetX;
            var my = e.offsetY;
           if(mx>sx&&mx<sx+w&&my>sy&&mx<sy+h){
               cursor=move;
           }
        }
        that.copy.onmousedown=function(e){
            var dx = e.offsetX;
            var dy = e.offsetY;
            var x1 = dx-sx;
            var y1 = dy-sy;
            that.copy.onmousemove=function(e){
                var tx = e.offsetX;
                var ty = e.offsetY;
                zou.css({
                    left:tx-x1+'px',
                    top:ty-y1+'px'
                });
                that.cobj.clearRect(tx-x1,ty-y1,tx-x1+w,ty-y1+h);
                that.cobj.putImageData(temp,tx-x1,ty-y1);
            }
            that.copy.onmouseup=function(){
                that.copy.onmouseup = null;
                that.copy.onmousemove = null;
            }
        }

    }
}