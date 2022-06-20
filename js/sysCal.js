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
let today = date.getDate();
let chkFirst = 0;

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
        $(".sysDay>ul").append('<li class="display">' + j + '</li>');
      }
      $(".sysMonth>.monthNumber").text(viewMonth + chkText);
    }
    else{
      for(let i =0; i <= TLDay; i++){
        $(".sysDay>ul").append('<li class="hidden"></li>');
        $(".sysDay>ul>li").animate({opacity:0});
      }
      for(let j = 1; j <= TLDate; j++){
        $(".sysDay>ul").append('<li class="display">' + j + '</li>');
      }
      $(".sysMonth>.monthNumber").text(viewMonth + chkText);
    }
  }
  calender();

  $(".leftBtn").click(
    function(){
      if(chkMonth <= 1){
        alert("이전 달력을 선택할 수 없습니다.")
      }
      else{
        chkMonth--;
        chkText--;
        $(".sysDay>ul>li").remove();
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
        $(".sysDay>ul>li").remove();
        calender();
        console.log(thisLast);
      }
      
    }
  )

  /******************신청일 클릭 */
  $(".sysDay>ul>li").click(
    function(){
      firstClick = $(this).index();
      chkFirst = firstClick - TLDay;
      console.log("chk");

      if(chkFirst - today <= 0){
        alert("정확한 날짜를 클릭해 주세요.")
      }
      else{
        $(".sysDay>ul>li").css({"backgroundColor":"white","color":"#777777"});
        $(".chooseDay>li:first-child>span").text("");
        

        $(this).css({"backgroundColor":"grey","color":"white"});
        
        $(".chooseDay>li:first-child").find("span").text(`${date.getFullYear()}-${viewMonth}-${(this).innerText.padStart(2, '0')}`);
      }     
      
    }
    
  )
  let plchk = true;
  /*****************국립공원선택************* */
    
  $(".chooseFacility").click(
    function(){
      if(plchk == true){
        $(".facilityList").stop().show();
        $(this).css({
          "border-top-left-radius":"15px",
          "border-top-right-radius":"15px",
          "border-bottom-left-radius":"0px",
          "border-bottom-right-radius":"0px"
        });
        plchk = false;
      }
      else if(plchk == false){
        $(".facilityList").stop().hide();
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
  $(".facilityList>li").click(
    function(){
      let plchkidx = $(this).text();
      $(".chooseFacility>h2").text(plchkidx);
      $(".chooseDay>li:last-child span").text(plchkidx);
    }
  )

})
