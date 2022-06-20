$("document").ready(function(){
  //번호 클릭 시 이미지 파일 이름 변경

  //현재 위치 인덱스

  $("#photoBtn>ul>li").click(
    function(){
      let currentBtnIdx = $(this).index();
      let photo_l = $("#photoArea>ul>li").length;
      
      //이미지의 이름 바꾸기
      for(i = 0; i < photo_l; i++){
        if(i < 10){
          $("#photoArea>ul>li:nth-of-type(" + (i + 1) + ")>img").attr("src","img/photoImage"+ (currentBtnIdx + 1) +"_0" + i +".png");
        }
        else{
          $("#photoArea>ul>li:nth-of-type(" + (i + 1) + ")>img").attr("src","img/photoImage"+ (currentBtnIdx + 1) +"_" + i +".png");
        }
      }
    }
  )
  $("#photoArea>ul>li").click(
    function(){
      let currentPosition=$(this).index();
      $("#photoPop").stop().show("fast");
      $("#photoPop>ul>li").eq(currentPosition).stop().show("fast");
    }
  )
  
  $(".closeBtn>span:first-child").click(
    function(){
      $("#photoPop").stop().hide("fast");
      $("#photoPop>ul>li").stop().hide();
    }
  )
})