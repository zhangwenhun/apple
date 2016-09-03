window.onload=function(){
   $('.nav .search').on('click',function(e){
   	    e.preventDefault();
   	    $('.nav .xiaoshi').addClass('active')
   })


   $('.nav .search').on('click',function(e){
   	    e.preventDefault();
   	    $('.container .sosuokuang').addClass('huilai')
   	    $('.xialacaidan').addClass('xiala')
   	    $('.xialacaidan li').addClass('shunxulai')
   	    $('.zhezhao').css('display',"block")
   })

      $('.nav .bag').on('click',function(e){
   	    e.preventDefault();
   	    $('.nav img').toggleClass('gouwudaizi')
    })


    $('.xiaoping .mianbaoxie').on('click',function(e){
   	    e.preventDefault();
   	    $('.xiaoping .mianbaoxie .shanghengxian,.xiahengxian').toggleClass('xiangxia')
    })

      $('.xiaoping .mianbaoxie').on('click',function(e){
   	    e.preventDefault();
   	    $('.xiaoping .heimu').toggleClass('lala')
   	    $('.xiaoping .heimu ul li').toggleClass('chulaiba')
    })


   $('.sosuokuang .chahao').on('click',function(){
   	    $('.container .sosuokuang').removeClass('huilai') 
   	    $('.nav .xiaoshi').removeClass('active')
   	     $('.xialacaidan').removeClass('xiala')
   	      $('.xialacaidan li').removeClass('shunxulai')
   	    $('.zhezhao').css('display',"none")

   })

   $('.xiaopinglist li').on('click',function(e){
   	    e.stopPropagation();
   	    $(this).find('p').slideToggle();
        $('.xiaopinglist ul li span').toggleClass('bianshen')
   })
    //2.轮播图特效
	var win=$(".banner_middle")[0];
	var as=$("a",win);
	var lis=$("li",$(".point")[0]);
	var btnl=$(".btnl")[0];
	var btnr=$(".btnr")[0];
	var num=0;
	as[0].style.zIndex=10;
	var t=setInterval(moveR,2000);
	win.onmouseover=function(){
		clearInterval(t);
		btnl.style.display="block";
		btnr.style.display="block";
	}
	win.onmouseout=function(){
		t=setInterval(moveR,2000);
		btnl.style.display="none";
		btnr.style.display="none";
	}
	for(var i=0;i<lis.length;i++){
		lis[i].index=i;
		lis[i].onclick=function(){
			if(num==this.index){
				return;
			}
			for(var j=0;j<as.length;j++){
				animate(as[j],{opacity:0});
				lis[j].className="";		
			}
			lis[this.index].className="hot";
			animate(as[this.index],{opacity:1});
			num=this.index;
		}
	}
	var flag=true;
	btnr.onclick=function(){
		if(flag){
			flag=false;
			moveR();
		}
	}
	btnl.onclick=function(){
		if(flag){
			flag=false;	
			moveL();
		}
	}	
	function moveR(){
		num++;
		if(num==as.length){
			num=0;
		}
		for(var i=0;i<as.length;i++){
			animate(as[i],{opacity:0});
			lis[i].className="";			
		}
		lis[num].className="hot";
		animate(as[num],{opacity:1},function(){
			flag=true;
		});
	}
	function moveL(){
		num--;
		if(num<0){
			num=lis.length-1;
		}
		for(var i=0;i<as.length;i++){
			animate(as[i],{opacity:0});
			lis[i].className="";		
		}
		lis[num].className="hot";
		animate(as[num],{opacity:1},function(){
			flag=true;
		});
	}
}