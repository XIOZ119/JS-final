const colors = [
    "#ef5777",
    "#575fcf",
    "#4bcffa",
    "#34e7e4",
    "#0be881",
    "#f53b57",
    "#3c40c6",
    "#0fbcf9",
    "#00d8d6",
    "#05c46b",
    "#ffc048",
    "#ffdd59",
    "#ff5e57",
    "#d2dae2",
    "#485460",
    "#ffa801",
    "#ffd32a",
    "#ff3f34"
  ];

const backgroundColor = document.querySelector("body");
const randomColor = colors[Math.floor(Math.random() * colors.length)];

backgroundColor.style.background = randomColor;


/* "플래너 type"
맨 위 
 - 왼쪽 : 요일 ( 년도/ 월/ 일 )
   그 옆 : 시간 ( 시 : 분 : 초 )
 - 오른쪽 : 랜덤한 사진(짱구 사진 그런거)
중앙 
 - 왼쪽 : to do list 입력
 - 오른쪽 : to do list 목록 + 삭제 
맨 밑 : 
 - 왼쪽 : 날씨 location 
 - 오른쪽 : 하루 한 줄 평
배경 : 랜덤 단색 
*/