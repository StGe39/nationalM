$("document").ready(function(){
  let vImg = $("#visual img").index();
  let vImg_l = $(vImg).length;
  //visual 자동 슬라이드

  function autoImg(){
    
    //인덱스 필요
    
    //파일의 길이 필요
    
    console.log(vImg);
    console.log(vImg_l);
  }
    
  
  autoImg();




  let chk = true;
  $(".menuBtn").click(
    function(){

      if(chk == true){
        $(".mainMenu").animate({left:"0px"});
        $(this).find(".menu_toggle_btn").addClass("menu-open")

        chk = false;
      }
      else{
        $(".mainMenu").animate({left:"-30%"});
        $(this).find(".menu_toggle_btn").removeClass("menu-open")
        
        chk = true;
      }
    }
  )
})