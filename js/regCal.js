const date = new Date; //날짜 불러오기

/****************달력 내부 변수*****************/
let viewYear = date.getFullYear();
let viewMonth = date.getMonth();
let chkText = 1;
let chkMonth = 1;

let thisLast = new Date(viewYear, viewMonth + chkMonth, 0);

let TLDate = thisLast.getDate();
let TLDay = thisLast.getDay();

let chkcal = true;

let prevLast = new Date(viewYear, viewMonth, 0);
let test = thisLast - prevLast;

let firstClick = 0;
let secondClick = 0;

/* 
let monthDay = [31,28,31,30,31,30,31,31,30,31,30,31];
const currentWeek=["sun", "mon", "tues", "wend", "thur", "fri","sat"];
let today = new Date(date.getFullYear(), date.getMonth() - chkMonth, + 1).getDay();  //현재 월의 첫번째 날짜의 요일
const beforeToday = new Date(date.getFullYear(), date.getMonth() - 1, + 1).getDay();
const nextToday = new Date(date.getFullYear(), date.getMonth() +1 , + 1).getDay();
const chksum = date.getDate(); */



$(document).ready(function(){

  function calender(){
    thisLast = new Date(viewYear, viewMonth + chkMonth, 0);
    TLDate = thisLast.getDate();
    TLDay = thisLast.getDay();
    dayChk = parseInt(date.getDate());
    if(TLDay === 6){
      for(let j = 1; j <= TLDate; j++){
        $(".regDay>ul").append('<li class="display">' + j + '</li>');
      }
      $(".regMonth>.monthNumber").text(viewMonth + chkText);
    }
    else{
      for(let i =0; i <= TLDay; i++){
        $(".regDay>ul").append('<li class="hidden"></li>');
        $(".regDay>ul>li").animate({opacity:0});
      }
      for(let j = 1; j <= TLDate; j++){
        $(".regDay>ul").append('<li class="display">' + j + '</li>');
      }
      $(".regMonth>.monthNumber").text(viewMonth + chkText);
    }
  /*     $(".regMonth>ul>.display:nth-child("+ dayChk + ")").css({color:"green"},500); */
    console.log(TLDate);
  }
  calender();

  $(".leftBtn").click(
    function(){
      if(chkMonth <= 0){
        alert("이전 달력을 선택할 수 없습니다.")
      }
      else{
        chkMonth--;
        chkText--;
        $(".regDay>ul>li").remove();
        calender();
        console.log(thisLast);
      }
    }
  )
  $(".rightBtn").click(
    function(){
      if(chkMonth >=2){
        alert("아직 예약을 할 수 없습니다.")
      }
      else{
        chkMonth++;
        chkText++;
        $(".regDay>ul>li").remove();
        calender();
        console.log(thisLast);
      }
      
    }
  )

  /******************입실일 퇴실일 클릭 */
  $(".regDay>ul>li").click(
    function(){
      
      
      console.log("chk");
//      let clickIdx = $(this).index();
      let sumClick = 0;
      
      if(chkcal == true){
        $(".regDay>ul>li").css({"backgroundColor":"white","color":"#777777"});
        $(".chooseDay>li>span").text("");
        firstClick = $(this).index();

        $(".enter>p").text("퇴 실 일");
        $(this).css({"backgroundColor":"grey","color":"white"});
        
        $(".chooseDay>li:first-child").find("span").text(`${date.getFullYear()}-${viewMonth}-${(this).innerText.padStart(2, '0')}`);
        
        chkcal = false;
        console.log(firstClick)
      }
      else if(chkcal == false){
        secondClick = $(this).index();
        
        if(secondClick - firstClick > 2)
        {
          alert("2박을 초과할 수 없습니다.")
        }
        else if(secondClick - firstClick <= 0){
          alert("정확한 날짜를 클릭해 주세요.")
        }
        else{
         
          $(".enter>p").text("입 실 일");
          $(this).css({"backgroundColor":"grey","color":"white"})
          $(".chooseDay>li:nth-child(2)").find(">span").text(`${date.getFullYear()}-${viewMonth}-${(this).innerText.padStart(2, '0')}`);
          chkcal = true;
          console.log(secondClick);
          $(".chooseDay>li:last-child>span").text((secondClick - firstClick) * 25000);
        }
        
        console.log(sumClick);
      }
      
    }
    
  )
})


  // 다음달, 전달 클릭 이벤트

/* 

  function calender(){
    //시작요일이 월요일 부터이면
    if(today == 0){
      for(i = 0; i <=today; i++){
        $(".regDay>ul").append('<li class="hidden_cal"></li>');
        $(".regDay>ul>li").addClass("hidden_cal");
        // $(".regDay>ul>li").animate({opacity:0});
  
  //       console.log(today); 
      }
      for(j = 1; j <= monthDay[thisMonth] - 1; j++){
        $(".regDay>ul").append("<li>");
        $(".regDay>ul>li:nth-of-type(" + j + ")").text(j).addClass("display");
        // console.log($(".regDay>ul"))
        //console.log(today);
      }
    }
    else{
      for(i = 0; i < today; i++){
        $(".regDay>ul").append('<li></li>');
        $(".regDay>ul>li").addClass("hidden_cal");
        $(".regDay>ul>.hidden_cal").css({"opacity":"0"});
        console.log(today);
      }
      for(j = 1; j <= monthDay[thisMonth] - 1; j++){
        $(".regDay>ul").append("<li>");
        $(".regDay>ul>li:nth-of-type(" + (j + today) + ")").text(j);  
      }
    }
  //   $(".regMonth>.monthNumber").text(thisMonth);
  }
  calender();  

  $(".regDay>ul>li").click(
    function(){
      let chkcal = true;
      console.log("chk");
      let clickIdx = $(this).index();
      $(".chooseDay>li:first-child").find("span").text(`${date.getFullYear()}-${date.getMonth()}-${(this).innerText.padStart(2, '0')}`);
      if(chkcal == true){
        
      }
    }
  ) */
  /* $(".leftBtn").click(
    function(){
      
      $(".regDay>ul>li").remove();
      thisMonth--;
      chkMonth--;
      console.log(today);
      calender();
    }
  )
  $(".rightBtn").click(
    function(){
      thisMonth++;
      $(".regDay>ul>li").remove();
      today = nextToday;
      console.log($(".regDay>ul"))
      calender();
    }
  )
  
}) */

