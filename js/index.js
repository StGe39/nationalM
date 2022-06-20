$("document").ready(function(){
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