$(document).ready(function(){
  let chk = false;


  //popup이미지를 클릭시 모달창 띄우기
  //모달창이 떴을 때 chk 는 true로 변화줄것
  $(".galleryReview ul li").click(
    function(){
      let popIdx = $(this).index();

      if(chk == false){
        $(".popupArea").stop().show();
        console.log(popIdx);
        $(".popupArea ul li").eq(popIdx).stop().show();
        chk = true;
      }
    }
  )
  $(".popupArea").click(
    function(){
      if(chk == true){
        $(".popupArea").stop().hide();
        $(".popupArea ul li").stop().hide();
        chk = false;
      }
  })




  // 화면 클릭 시 모달창 닫기
  // 변수 선언해서 불린으로 변화를 시켜서 모달창이 떠있을때는 true
  // 아닐때는 false
  // false일때는 변화가 없어야 함 true일때만 작동






})