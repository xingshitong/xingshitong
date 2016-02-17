$(function(){
    var box=$('.box');
    var copy=$('.copy');
    var canvas=$('canvas');
    var cobj = canvas[0].getContext('2d');
   $(".ju").hover(function(){
       $(this).css({
           background:'#666',
           transition:'all 1s ease',
           color:'#fff'
       });
       $(this).find('ul').css({
           background:'#666',
           display:'block'
       })
   },function(){
       $(this).css({
           background:'#ccc',
           transition:'all 1s ease',
           color:'#000'
       });
       $(this).find('ul').css({
           background:'#ccc',
           display:'none'
       })
   });
    $(".hang").hover(function(){
        $(this).css({
            background:'#666',
            transition:'all 1s ease',
            color:'#ccc'
        });
        $(this).find('ul').css({
            display:'block'
        })
    },function(){
        $(this).css({
            background:'#aaa',
            transition:'all 1s ease',
            color:'#000'
        });
        $(this).find('ul').css({
            display:'none'
        })
    });
    $(".ju ul li").hover(function(){
        $(this).css({
            background:'#ccc',
            transition:'all 1s ease',
            color:'#fff'
        })
    },function(){
        $(this).css({
            background:'#666',
            transition:'all 1s ease',
            color:'#000'
        })
    });

    var obj= new shape(copy[0],canvas[0],cobj);
    $('.xing li').click(function(){
        obj.shapes=$(this).attr('data-rol');
        obj.draw();
    });
    $('.fillColor input').change(function(){
        obj.fillColor=$(this).val();
        obj.draw();
    });
    $('.strokeColor input').change(function(){
        obj.borderColor=$(this).val();
        obj.draw();
    });
    $('.lineWidth li').click(function(){
        obj.lineWidth=$(this).attr('data-rol');
    });
    $('.type li').click(function(){
        obj.type=$(this).attr('data-rol');
    });
    $('.eraser li').click(function(){
        w=$(this).attr('data-rol');
        h=$(this).attr('data-rol');
        $('.xp').css({
            width:w+'px',
            height:h+'px'
        })
        obj.xp($('.xp'),w,h);
    })
    $('.file li').click(function(){
        var index= $(this).index('.file li');
        if(index==0){

        }
        if(index==1){
            var houtui = obj.history.pop();
            cobj.putImageData(houtui,0,0);
        }
    });
    $('.move').click(function(){
        obj.move($('.zou'));
    });
    $('.ju li').click(function(){

    })


});