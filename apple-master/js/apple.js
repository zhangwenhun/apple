$(function(){
    $(window).resize(function(){
        var clientW = $(window).width();
        if(clientW<730){
            $(".header1").css("display","none");
            $(".header2").css("display","block");
        }else{
            $(".header1").css("display","block");
            $(".header2").css("display","none");
        }
    })
    $(window).resize();
    var aa = true;
    $(".menbtn").click(function(){
        $(".son").finish();
        if (aa==true){
            $(".menbtn span").html("+");
        aa=false;
        }else {
            $(".menbtn span").html("=");
        }
        $(".son").toggle(200);
    });

    var num =0;
    var move=function(){
        num++;
        if (num == $(".box .list").length - 1){
            $(".box").animate({marginLeft: -num * 100 + "%"},function(){
                $(".box").css({marginLeft:0});
            });
            num=0;
        }else {
            $(".box").animate({marginLeft:-num*100+"%"});
        }
        $("ul li").css({background:"#888",border:"none"});
        $("ul li").eq(num).css({background:"none",border:"1px solid blue"});
    }
    var t= setInterval(move,2000);
    $(" ul li").click(function(){
        clearInterval(t);
        var index = $(this).index("ul li");
        num=index;
        $("ul li").css({background:"#888",border:"none"});
        $(this).css({background:"none",border:"1px solid blue"});
        $(".box").animate({marginLeft:-num*100+"%"});
    })
    $(".box").hover(function(){
        clearInterval(t);
    },function(){
        t=setInterval(move,4000);
    })
    $("ul li").hover(function(){
        clearInterval(t);
    },function(){
        t=setInterval(move,4000);
    })
    $(".title").click(function(){
        $(this).next(".list-list").slideToggle({display:"block"});
    })
    touch.on(".box","dragstart",function(){
        margin=$(".box")[0].offsetLeft;
    })
    touch.on(".box","drag",function(e){
        $(".box").css({marginLeft:margin+e.x});
    })
    touch.on(".box","dragend",function(e){
        if(Math.abs(e.x)>300|| e.factor<5){
            if(e.direction=="left"){
                num++;
                if (num==$(".box .list").length-1){
                    $(".box").animate({marginLeft:-num*100+"%"},function(){
                        $(".box").css({maginLeft:0});
                    });
                    num=0;
                }else {
                    $(".box").animate({marginLeft:-num*100+"%"});
                }
            }else if(e.direction=="right") {
                num--;
                if (num==-1){
                    num=0;
                    $(".box").animate({marginLeft:-num*100+"%"});
                }else {
                    $(".box").animate({marginLeft:-num*100+"%"});
                }
            }
        }else{
            $(".box").animate({marginLeft:-num*100+"%"});
        }
        console.log(e.factor);//速率
    })
    $(".box").mousedown(function(e){
        e.preventDefault();
    })
    touch.on('.rotate', 'touchstart', function(ev){
        ev.startRotate();
        ev.preventDefault();
    });
    touch.on(".rotate","rotate",function(e){
        $(this).css("transform","rotate("+e.rotation+"deg)");
    })
})

