$(function(){

	$('.www').hover(function(){
		$(this).find('.nnn').show();
	},function(){
		$(this).find('.nnn').hide();
	})


    $($('.pinpai')[0]).show();
    var kaiguan = true;
    $('#hyp').click(function(){
        if(kaiguan){
            $('.pinpai').hide();
            $($('.pinpai')[1]).show();
            kaiguan = false;
        }else{
            $('.pinpai').hide();
            $($('.pinpai')[0]).show(); 
            kaiguan = true;
        }
        
    })








    $($('.txtp')[0]).show();


    var bjys = ['#dbdbdb','#2c84de','#febee0','#0166ff','#fe7a00','#5d41af','#0166ff','#febee0','#2c84de','#dbdbdb','#5d41af','#fe7a00','#0166ff','#febee0','#2c84de','#dbdbdb'];
    $('.width').each(function(i){
        $(this).data('index',i)
    })
    $('.width').hover(function(){
        clearInterval(timerid);
        $('.txtp').hide();
        var k = $(this).data('index');
        $($('.txtp')[k]).show();
        if( k==0 ){
            timerid = setInterval(lunbo,1000);
        }
        $('.bjtp').hide();
            $($('.bjtp')[k]).show();
            $('.nav').css({background:bjys[k]});
    	this.style.background = 'red';
    	$(this).find('.nan').show();
    },function(){
    	this.style.background = '#4a4a4a';
    	$(this).find('.nan').hide();
    })


    $('.h-r img').hover(function(){
    	$(this).css({marginLeft:'5px'});
    },function(){
    	$(this).css({marginLeft:'0px'});
    })
    // $('.h-r img').hover(function(){
    //     $(this).css({position:'relative'});
    //     $(this).stop();
    //     $(this).animate({left:'5px'},200);
    // },function(){
    //     $(this).stop();
    //     $(this).animate({left:'0px'});
    // })

    
    $('.zuoxuanfu img').each(function(i){
        $(this).data('index',i);
    });
    $('.zuoxuanfu img').click(function(){
        $('.zuoxuanfu img').css({background:'white'});
        $(this).css( {background:'red'} );
    	var i = $(this).data('index');
        var newtop = $($('.di')[i]).offset().top;
        $({top:$(window).scrollTop()}).animate(
            {top:newtop},
            {
                duration:500,
                step:function(){
                   $(window).scrollTop(this.top); 
                }
            });	
    })
    
    // $(window).scroll(function(){
    //     var i = $().data('index');
    //     if( $(window).scrollTop() >= $($('.di')[i]).offset().top && $(window).scrollTop() <= $($('.di')[i+1]).offset().top ){
    //         $('.zuoxuanfu img').css({background:'red'});
    //         $($('.zuoxuanfu img')[i]).css({background:'red'});
    //     }
    // })
    



    $('.s-l').hover(function(){
    	$(this).find('.slide').slideDown();
    },function(){
    	$(this).find('.slide').slideUp();
    })
    $('.s-l').hover(function(){
        $(this).find('.slide').show();
    },function(){
        $(this).find('.slide').hide();
    })



    var tim;
    $(window).scroll(function(){
        for(var i = 0;i<$('.di').length;i++){  
            var j1 = $($('.di')[i]).offset().top -100;
            if(  j1<$(window).scrollTop() ){
                $('.zuoxuanfu img').css({background:'white'});
                $($('.zuoxuanfu img')[i]).css( {background:'red'} );
            }
        }
        if( $(window).scrollTop() >500){
            clearTimeout(tim);
            tim = setTimeout(function(){
               $('.zhiyin').fadeIn();
               $('.zuoxuanfu').show();
               $('.xuanfu').show();
           },500);
        }else{
            clearTimeout(tim);
            $('.zhiyin').fadeOut();
            $('.zuoxuanfu').hide();
            $('.xuanfu').hide();
        }
    })
        

    // $('.kuang').animate({left:'500px'},1000);

    
    $('.guoji').each(function(i){
        $(this).data('index',i);
    })
    $('.daoer li').click(function(){
        $('.daoer li').css({fontWeight:'100'});
        $(this).css({fontWeight:'700'});
    })










    $('#returntop').click(function(){
        $( {t:$(window).scrollTop()} ).animate({t:0},{
            duration:700,
            step:function(){
                $(window).scrollTop(this.t);
            }
        })
    })



    
   
    $($('.bjtp')[0]).show();
        var index = 0;
    var lunbo = function(){
        index += 1;
        if(index === 6){
            index = 0;
        }
        $('.txtp').hide();
        $($('.txtp')[index]).show();
        $('.nav').css({background:bjys[index]});
        $('.bjtp').hide();
        $($('.bjtp')[index]).show();

        $('.z-s').css({background:'#4a4a4a'});
        $($('.z-s')[index]).css({background:'red'});

    }
    var timerid = setInterval(lunbo,1000);

    $('.z-s').each(function(i){
        $(this).data('index',i);
    });
    $($('.z-s')[0]).css({background:'red'});
    $('.z-s').hover(function(){
        clearInterval(timerid);
        $('.bjtp').hide();
        var i = $(this).data('index');
        $(this).css({background:'red'});
        $($('.bjtp')[i]).show();
        index = i;
    },function(){
        $(this).css({background:'#4a4a4a'});
        timerid = setInterval(lunbo,1000);
    })


    

    $($('.xiao1 img')[0]).show();
    $($('.xiao2 img')[0]).show();
    $($('.xiao3 img')[0]).show();
    var ind = 0;
    var xlunbo = function(){
        ind += 1;
        if(ind === $('.xiao1 img').length){
            ind = 0;
        }
        $('.xiao1 img').hide();
        $($('.xiao1 img')[ind]).show();
        $('.xiao2 img').hide();
        $($('.xiao2 img')[ind]).show();
        $('.xiao3 img').hide();
        $($('.xiao3 img')[ind]).show();

    }
    var timer = setInterval(xlunbo,1000);

    $('#rijian').click(function(){
        ind += 1;
        if(ind === $('.xiao1 img').length){
            ind = 0;
        }
        $('.xiao1 img').hide();
        $($('.xiao1 img')[ind]).show();
        $('.xiao2 img').hide();
        $($('.xiao2 img')[ind]).show();
        $('.xiao3 img').hide();
        $($('.xiao3 img')[ind]).show();
    })
    $('#ljian').click(function(){
        ind -= 1;
        if(ind < 0 ){
            ind = $('.xiao1 img').length-1;
        }
        $('.xiao1 img').hide();
        $($('.xiao1 img')[ind]).show();
        $('.xiao2 img').hide();
        $($('.xiao2 img')[ind]).show();
        $('.xiao3 img').hide();
        $($('.xiao3 img')[ind]).show();
    })



    $($('.xiao4 img')[0]).show();
    $($('.xiao5 img')[0]).show();
    $($('.xiao6 img')[0]).show();
    var ind2 = 0;
    var xlunbo2 = function(){
        ind2 += 1;
        if(ind2 === $('.xiao4 img').length){
            ind2 = 0;
        }
        $('.xiao4 img').hide();
        $($('.xiao4 img')[ind2]).show();
        $('.xiao5 img').hide();
        $($('.xiao5 img')[ind2]).show();
        $('.xiao6 img').hide();
        $($('.xiao6 img')[ind2]).show();

    }
    var timer2 = setInterval(xlunbo2,1000);

    $('#rijian1').click(function(){
        ind2 += 1;
        if(ind2 === $('.xiao1 img').length){
            ind2 = 0;
        }
        $('.xiao4 img').hide();
        $($('.xiao4 img')[ind2]).show();
        $('.xiao5 img').hide();
        $($('.xiao5 img')[ind2]).show();
        $('.xiao6 img').hide();
        $($('.xiao6 img')[ind2]).show();
    })
    $('#ljian1').click(function(){
        ind2 -= 1;
        if(ind2 < 0 ){
            ind2 = $('.xiao4 img').length-1;
        }
        $('.xiao4 img').hide();
        $($('.xiao4 img')[ind2]).show();
        $('.xiao5 img').hide();
        $($('.xiao5 img')[ind2]).show();
        $('.xiao6 img').hide();
        $($('.xiao6 img')[ind2]).show();
    })


    $($('.xiao7 img')[0]).show();
    $($('.xiao8 img')[0]).show();
    $($('.xiao9 img')[0]).show();
    var ind3 = 0;
    var xlunbo3 = function(){
        ind3 += 1;
        if(ind3 === $('.xiao7 img').length){
            ind3 = 0;
        }
        $('.xiao7 img').hide();
        $($('.xiao7 img')[ind3]).show();
        $('.xiao8 img').hide();
        $($('.xiao8 img')[ind3]).show();
        $('.xiao9 img').hide();
        $($('.xiao9 img')[ind3]).show();

    }
    var timer3 = setInterval(xlunbo3,1000);

    $('#rijian2').click(function(){
        ind3 += 1;
        if(ind3 === $('.xiao7 img').length){
            ind3 = 0;
        }
        $('.xiao7 img').hide();
        $($('.xiao7 img')[ind3]).show();
        $('.xiao8 img').hide();
        $($('.xiao8 img')[ind3]).show();
        $('.xiao9 img').hide();
        $($('.xiao9 img')[ind3]).show();
    })
    $('#ljian2').click(function(){
        ind3 -= 1;
        if(ind3 < 0 ){
            ind3 = $('.xiao7 img').length-1;
        }
        $('.xiao7 img').hide();
        $($('.xiao7 img')[ind3]).show();
        $('.xiao8 img').hide();
        $($('.xiao8 img')[ind3]).show();
        $('.xiao9 img').hide();
        $($('.xiao9 img')[ind3]).show();
    })


    $($('.xiao10 img')[0]).show();
    $($('.xiao11 img')[0]).show();
    $($('.xiao12 img')[0]).show();
    var ind4 = 0;
    var xlunbo4 = function(){
        ind4 += 1;
        if(ind4 === $('.xiao10 img').length){
            ind4 = 0;
        }
        $('.xiao10 img').hide();
        $($('.xiao10 img')[ind4]).show();
        $('.xiao11 img').hide();
        $($('.xiao11 img')[ind4]).show();
        $('.xiao12 img').hide();
        $($('.xiao12 img')[ind4]).show();

    }
    var timer4 = setInterval(xlunbo4,1000);

    $('#rijian3').click(function(){
        ind4 += 1;
        if(ind4 === $('.xiao10 img').length){
            ind4 = 0;
        }
        $('.xiao10 img').hide();
        $($('.xiao10 img')[ind4]).show();
        $('.xiao11 img').hide();
        $($('.xiao11 img')[ind4]).show();
        $('.xiao12 img').hide();
        $($('.xiao12 img')[ind4]).show();
    })
    $('#ljian3').click(function(){
        ind4 -= 1;
        if(ind4 < 0 ){
            ind4 = $('.xiao10 img').length-1;
        }
        $('.xiao10 img').hide();
        $($('.xiao10 img')[ind4]).show();
        $('.xiao11 img').hide();
        $($('.xiao11 img')[ind4]).show();
        $('.xiao12 img').hide();
        $($('.xiao12 img')[ind4]).show();
    })

    

    $($('.xiao13 img')[0]).show();
    $($('.xiao14 img')[0]).show();
    $($('.xiao15 img')[0]).show();
    var ind5 = 0;
    var xlunbo5 = function(){
        ind5 += 1;
        if(ind5 === $('.xiao13 img').length){
            ind5 = 0;
        }
        $('.xiao13 img').hide();
        $($('.xiao13 img')[ind5]).show();
        $('.xiao14 img').hide();
        $($('.xiao14 img')[ind5]).show();
        $('.xiao15 img').hide();
        $($('.xiao15 img')[ind5]).show();

    }
    var timer5 = setInterval(xlunbo5,1000);

    $('#rijian4').click(function(){
        ind5 += 1;
        if(ind5 === $('.xiao13 img').length){
            ind5 = 0;
        }
        $('.xiao13 img').hide();
        $($('.xiao13 img')[ind5]).show();
        $('.xiao14 img').hide();
        $($('.xiao14 img')[ind5]).show();
        $('.xiao15 img').hide();
        $($('.xiao15 img')[ind5]).show();
    })
    $('#ljian4').click(function(){
        ind5 -= 1;
        if(ind5 < 0 ){
            ind5 = $('.xiao7 img').length-1;
        }
        $('.xiao13 img').hide();
        $($('.xiao13 img')[ind5]).show();
        $('.xiao14 img').hide();
        $($('.xiao14 img')[ind5]).show();
        $('.xiao15 img').hide();
        $($('.xiao15 img')[ind6]).show();
    })
    




    $($('.xiao16 img')[0]).show();
    $($('.xiao17 img')[0]).show();
    $($('.xiao18 img')[0]).show();
    var ind6 = 0;
    var xlunbo6 = function(){
        ind6 += 1;
        if(ind6 === $('.xiao16 img').length){
            ind6 = 0;
        }
        $('.xiao16 img').hide();
        $($('.xiao16 img')[ind6]).show();
        $('.xiao17 img').hide();
        $($('.xiao17 img')[ind6]).show();
        $('.xiao18 img').hide();
        $($('.xiao18 img')[ind6]).show();

    }
    var timer6 = setInterval(xlunbo6,1000);

    $('#rijian5').click(function(){
        ind6 += 1;
        if(ind6 === $('.xiao17 img').length){
            ind6 = 0;
        }
        $('.xiao16 img').hide();
        $($('.xiao16 img')[ind6]).show();
        $('.xiao17 img').hide();
        $($('.xiao17 img')[ind6]).show();
        $('.xiao18 img').hide();
        $($('.xiao18 img')[ind6]).show();
    })
    $('#ljian5').click(function(){
        ind6 -= 1;
        if(ind6 < 0 ){
            ind6 = $('.xiao17 img').length-1;
        }
        $('.xiao16 img').hide();
        $($('.xiao16 img')[ind6]).show();
        $('.xiao17 img').hide();
        $($('.xiao17 img')[ind6]).show();
        $('.xiao18 img').hide();
        $($('.xiao18 img')[ind6]).show();
    })








})