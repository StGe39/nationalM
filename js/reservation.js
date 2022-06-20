$(document).ready(function(){
  let fachk = true;
  let plchk = true;

  $(".chooseFacility").click(
    function(){
      if(fachk == true){
        $(".facilityList").stop().show();
        $(this).css({
          "border-top-left-radius":"15px",
          "border-top-right-radius":"15px",
          "border-bottom-left-radius":"0px",
          "border-bottom-right-radius":"0px"
        });
        fachk = false;
      }
      else if(fachk == false){
        $(".facilityList").stop().hide();
        $(this).css({
          "border-top-left-radius":"15px",
          "border-top-right-radius":"15px",
          "border-bottom-left-radius":"15px",
          "border-bottom-right-radius":"15px"
        });
        fachk = true;
      }
    }
  )
  $(".facilityList>li").click(
    function(){
      let fachkidx = $(this).text()
      $(".chooseFacility>p").text(fachkidx);
    }
  )
  

  $(".choosePlace").click(
    function(){
      if(plchk == true){
        $(".placeList").stop().show();
        $(this).css({
          "border-top-left-radius":"15px",
          "border-top-right-radius":"15px",
          "border-bottom-left-radius":"0px",
          "border-bottom-right-radius":"0px"
        });
        plchk = false;
      }
      else if(plchk == false){
        $(".placeList").stop().hide();
        $(this).css({
          "border-top-left-radius":"15px",
          "border-top-right-radius":"15px",
          "border-bottom-left-radius":"15px",
          "border-bottom-right-radius":"15px"
        });
        plchk = true;
      }
    }
  )
  $(".placeList>li").click(
    function(){
      let plchkidx = $(this).text()
      $(".choosePlace>p").text(plchkidx);
    }
  )
  








  /*
  $(".facilityList>li").click(
    function(){
      let chk = $(this).index();
      if(chk = 0){
        $(".camping").css({"display":"none"});
        $(".shelter").css({"display":"block"});
      }
      
    }
  )
  */





  }
)