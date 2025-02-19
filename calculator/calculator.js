// DOM 불러오기
const calText = document.querySelector(".cal-text"); // 계산기 화면
const btn = document.querySelectorAll("button"); // 계산기 버튼

const no1 = document.querySelector(".no1"); // 버튼 1
const no2 = document.querySelector(".no2"); // 버튼 2
const no3 = document.querySelector(".no3"); // 버튼 3
const no4 = document.querySelector(".no4"); // 버튼 4
const no5 = document.querySelector(".no5"); // 버튼 5
const no6 = document.querySelector(".no6"); // 버튼 6
const no7 = document.querySelector(".no7"); // 버튼 7
const no8 = document.querySelector(".no8"); // 버튼 8
const no9 = document.querySelector(".no9"); // 버튼 9

const plus = document.querySelector(".plus"); // 버튼 +
const minus = document.querySelector(".minus"); // 버튼 -
const multiply = document.querySelector(".multiply"); // 버튼 ×
const division = document.querySelector(".division"); // 버튼 ÷
const equal = document.querySelector(".equal"); // 버튼 =

//코드 입력
no1.addEventListener("click", () => {
    calText.textContent = "1";
})
no2.addEventListener("click", () => {
    calText.textContent = "2";
})
no3.addEventListener("click", () => {
    calText.textContent = "3";
})
no4.addEventListener("click", () => {
    calText.textContent = "4";
})
no5.addEventListener("click", () => {
    calText.textContent = "5";
})
no6.addEventListener("click", () => {
    calText.textContent = "6";
})
no7.addEventListener("click", () => {
    calText.textContent = "7";
})
no8.addEventListener("click", () => {
    calText.textContent = "8";
})
no9.addEventListener("click", () => {
    calText.textContent = "9";
})