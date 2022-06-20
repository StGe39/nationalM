$(document).ready(function(){
  let chkMt = 0;


  $(".mt_00").click(
    function(){
      $("#pop").stop().fadeIn("slow");
      $(".mapContent>ul").find(".at_00").stop().css({display:"block"});
      chkMt = 0;   
    }
  )
  $(".mt_01").click(
    function(){
      $("#pop").stop().fadeIn("slow");
      $(".mapContent>ul").find(".at_01").stop().css({display:"block"});
      chkMt = 1;
    }
  )
  $(".mt_02").click(
    function(){
      $("#pop").stop().fadeIn("slow");
      $(".mapContent>ul>.at_02").stop().show();
      chkMt = 2;    
    }
  )
  $(".mt_03").click(
    function(){
      $("#pop").stop().fadeIn("slow");
      $(".mapContent>ul>.at_03").stop().show();
      chkMt = 3;  
    }
  )
  $(".mt_04").click(
    function(){
      $("#pop").stop().fadeIn("slow");
      $(".mapContent>ul>.at_04").stop().show();
      chkMt = 4; 
    }
  )
  $(".mt_05").click(
    function(){
      $("#pop").stop().fadeIn("slow");
      $(".mapContent>ul>.at_05").stop().show(); 
      chkMt = 5;   
    }
  )
  $(".mt_06").click(
    function(){
      $("#pop").stop().fadeIn("slow");
      $(".mapContent>ul>.at_06").stop().show();    
      chkMt = 6;
    }
  )
  $(".mt_07").click(
    function(){
      $("#pop").stop().fadeIn("slow");
      $(".mapContent>ul>.at_07").stop().show();  
      chkMt = 7;  
    }
  )
  $(".mt_08").click(
    function(){
      $("#pop").stop().fadeIn("slow");
      $(".mapContent>ul>.at_08").stop().show();   
      chkMt = 8; 
    }
  )
  $(".mt_09").click(
    function(){
      $("#pop").stop().fadeIn("slow");
      $(".mapContent>ul>.at_09").stop().show();    
      chkMt = 9;
    }
  )
  $(".mt_10").click(
    function(){
      $("#pop").stop().fadeIn("slow");
      $(".mapContent>ul>.at_10").stop().show();   
      chkMt = 10; 
    }
  )
  $(".mt_11").click(
    function(){
      $("#pop").stop().fadeIn("slow");
      $(".mapContent>ul>.at_11").stop().show();    
      chkMt = 11;
    }
  )
  $(".mt_12").click(
    function(){
      $("#pop").stop().fadeIn("slow");
      $(".mapContent>ul>.at_12").stop().show();    
      chkMt = 12;
    }
  )
  $(".mt_13").click(
    function(){
      $("#pop").stop().fadeIn("slow");
      $(".mapContent>ul>.at_13").stop().show();    
      chkMt = 13;
    }
  )
  $(".mt_14").click(
    function(){
      $("#pop").stop().fadeIn("slow");
      $(".mapContent>ul>.at_14").stop().show(); 
      chkMt = 14;   
    }
  )
  $(".mt_15").click(
    function(){
      $("#pop").stop().fadeIn("slow");
      $(".mapContent>ul>.at_15").stop().show();    
      chkMt = 15;
    }
  )
  $(".mt_16").click(
    function(){
      $("#pop").stop().fadeIn("slow");
      $(".mapContent>ul>.at_16").stop().show();    
      chkMt = 16;
    }
  )
  $(".mt_17").click(
    function(){
      $("#pop").stop().fadeIn("slow");
      $(".mapContent>ul>.at_17").stop().show();    
      chkMt = 17;
    }
  )
  $(".mt_18").click(
    function(){
      $("#pop").stop().fadeIn("slow");
      $(".mapContent>ul>.at_18").stop().show();    
      chkMt = 18;
    }
  )
  $(".mt_19").click(
    function(){
      $("#pop").stop().fadeIn("slow");
      $(".mapContent>ul>.at_19").stop().show();    
      chkMt = 19;
    }
  )
  $(".parkMapArea , parkMapArea>p").click(
    function(){
      $(".list").stop().slideToggle();
    }
  )
  $(".parkMapArea>ul>li").click(
    function(){
      let currentT = $(this).text();
      let currentP = $(this).index();
      $(".parkMapArea>p").text(currentT);
      $(".parkMapArea>ul").stop().slideUp();
      $(".parkMapArea>p>span").stop().fadeIn();

      if(currentP < 10){
        $(".mapImg").find("img").attr("src","img/mt_" + chkMt + "_0" + currentP + ".png");
      }
      else{
        $(".mapImg").find("img").attr("src","img/mt_" + chkMt + "_" + currentP + ".png");
      }
    }
  )
  $(".mapContent>ul>li>img, .explainText, .parkMapImg").click(
    function(){
      $("#pop").stop().css({display:"none"});
      $(".mapContent>ul>li").css({display:"none"});
    }
  )
})