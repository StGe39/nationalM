let date = new Date; //날짜 불러오기

const renderCalender = () => {
  const viewYear = date.getFullYear();
  const viewMonth = date.getMonth();

  //year-month 채우기

  document.querySelector(".regMonth>span:nth-oftype(3)").textContent = `${viewMonth}`;

  //지난 달 마지막 Date, 이번 달 마지막 Date

  const prevLast = new Date(viewYear, viewMonth, 0);
  const thisLast = new Date(viewYear, viewMonth + 1, 0); //  이번 달

  const PLDate = prevLast.getDate();
  const PLDay = prevLast.getDay();
  
  const TLDate = thisLast.getDate();
  const TLDay = thisLast.getDay();

  //Dates 기본 배열들

  const prevDates = [];
  const thisDates = [...Array(TLDate + 1).keys()].slice(1);
  const nextDates = [];

  //prevDates 계산

  if(PLDay !==6){
    for(let i = 0; i <PLDay + 1; i++){
      prevDates.unshift(PLDate - i);
    }
  }

  //nextDates 계산

  for(let i = 1; i < 7 - TLDay; i++){
    nextDates.push(i);
  }

  //Dates 합치기

  const dates= prevDates.concat(thisDates, nextDates);

  //Dates 정리

  dates.forEach((date,i) => {
    dates[i] = `<div class="date">${date}</div>`;
  })

  //Dates 그리기
  document.querySelector(".dates").innerHTML = dates.join('');
}


let monthDay = [31,28,31,30,31,30,31,31,30,31,30,31];
const currentWeek=["sun", "mon", "tues", "wend", "thur", "fri","sat"];
let today = new Date(date.getFullYear(), date.getMonth() - chkMonth, + 1).getDay();  //현재 월의 첫번째 날짜의 요일
const beforeToday = new Date(date.getFullYear(), date.getMonth() - 1, + 1).getDay();
const nextToday = new Date(date.getFullYear(), date.getMonth() +1 , + 1).getDay();
const chksum = date.getDate();





$(document).ready(function(){

  // 다음달, 전달 클릭 이벤트

  $(".leftBtn").click(
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


  function calender(){
    //시작요일이 월요일 부터이면
    if(today == 0){
      for(i = 0; i <=today; i++){
        $(".regDay>ul").append('<li class="hidden_cal"></li>');
        $(".regDay>ul>li").addClass("hidden_cal");
        /* $(".regDay>ul>li").animate({opacity:0}); */
  
  /*       console.log(today); */
      }
      for(j = 1; j <= monthDay[thisMonth] - 1; j++){
        $(".regDay>ul").append("<li>");
        $(".regDay>ul>li:nth-of-type(" + j + ")").text(j).addClass("display");
        /* console.log($(".regDay>ul"))
        console.log(today); */
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
    $(".regMonth>.monthNumber").text(thisMonth);
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
  )
  
})


