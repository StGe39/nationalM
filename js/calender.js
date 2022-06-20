//Dom객체 생ㅓ

const date = new Date(); //날짜 불러오기

const renderCalender = () => {
  const viewYear = date.getFullYear();
  const viewMonth = date.getMonth();

  //year-month 채우기

  document.querySelector(".regMonth>span:nth-oftype(3)").textContent = `${viewMonth}`;

  //지난 달 마지막 Date, 이번 달 마지막 Date

  const prevLast = new Date(viewYear, viewMonth, 0); // 지난 달
  const thisLsat = new Date(viewYear, viewMonth + 1, 0); // 이번 달


  const PLDate = prevLast.getDate();  //지난 달의 마지막 요일
  const PLDay = prevLast.getDay();    //지난 달 마지막 날짜

  const TLDate = thisLsat.getDate();  //이번 달의 마지막 요일
  const TLDay = thisLast.getDay();    //이번 달의 마지막 날짜

  //Dates 기본 배열들

  const prevDates = [];
  const thisDates = [];
  const nextDates = [];

  // prevDates 계산
  
  if(PLDay !==6){
    for(let i =0; i < PLDay + 1; i++){
      prevDates.unshift(PLDate - i);
    }
  }

  //nextDates 계산
  
  for(let i = 1; i < 7 - TLDay; i++){
    nextDates.push(i);
  }

  //Dates 합치기
  
  const dates = prevDates.concat(thisDates, nextDates);

  //Date 정리
  dates.forEach((date, i) => {
    dates[i] = `<div class = "date">${date}</div>`;
  })

  //Dates 그리기

  document.querySelector('.dates').innerHTML = dates.join('');
}