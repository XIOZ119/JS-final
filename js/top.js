/*맨 위 
 - 왼쪽 : 요일 ( 년도/ 월/ 일 )
   그 옆 : 시간 ( 시 : 분 : 초 )
 - 오른쪽 : 랜덤한 사진(짱구 사진 그런거) */

const toDayTitle = document.querySelector("#today");
const clockTitle = document.querySelector("#clock");

const today = new Date();

const year = today.getFullYear();
const month = String(today.getMonth() + 1).padStart(2,"0");
const day = String(today.getDate()).padStart(2,"0");

toDayTitle.innerText = "- " + year + "." + month + "." + day + ".";

const hours = String(today.getHours()).padStart(2,"0");
const minutes = String(today.getMinutes()).padStart(2,"0");
const seconds = String(today.getSeconds()).padStart(2,"0");

clockTitle.innerText = hours + ":" + minutes + ":" + seconds;
