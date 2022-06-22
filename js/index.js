$("document").ready(function(){
  let visual = $(".visualArea");
  let vImg = $("#visual img");
  //visual 자동 슬라이드
  let i = 1
  function autoImg(){
    
    const vImgIdx = vImg.index();
    const vImg_l = $(vImg).length;
    const vImg_w = $(vImg).width();
    
    //인덱스 필요
    $(vImg).stop(false,false).animate({right:vImg_w*i});
    i++;
    if(i >= vImg_l){
      i = 0;
    }
    //파일의 길이 필요
    
    console.log(vImg);
    console.log(vImgIdx)
    console.log(vImg_l);
    console.log(vImg_w);
  }
    
  
setInterval(autoImg,3000);

  //test function

  $(vImg).click(
    function(){
      autoImg();
    }
  )


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