// DOM 불러오기
const calText = document.querySelector(".cal-text"); // 계산기 화면
const btn = document.querySelectorAll("button"); // 계산기 버튼
const reset = document.querySelector(".reset"); // 리셋 버튼튼

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
// no1.addEventListener("click", () => {
//     calText.textContent += "1";
// })
// no2.addEventListener("click", () => {
//     calText.textContent += "2";
// })
// no3.addEventListener("click", () => {
//     calText.textContent += "3";
// })
// no4.addEventListener("click", () => {
//     calText.textContent += "4";
// })
// no5.addEventListener("click", () => {
//     calText.textContent += "5";
// })
// no6.addEventListener("click", () => {
//     calText.textContent += "6";
// })
// no7.addEventListener("click", () => {
//     calText.textContent += "7";
// })
// no8.addEventListener("click", () => {
//     calText.textContent += "8";
// })
// no9.addEventListener("click", () => {
//     calText.textContent += "9";
// }) 이렇게는 너무 기니까

const numbers = [no1, no2, no3, no4, no5, no6, no7, no8, no9];
const calculate = [plus, minus, multiply, division];

numbers.forEach((btn, index) => {
    btn.addEventListener("click",() => {
        calText.textContent += (index + 1);
    });
});

plus.addEventListener("click", () => {
    calText.textContent += "+";
})

equal.addEventListener("click", () => {
    const number = calText.textContent.split("+").map(Number); // +를 기준으로 숫자를 나눠 새로운 배열을 만듦. 그런다음 숫자로 변환
    const result = number.reduce((a,c) => a + c, 0); // reduce를 활용해 값을 계산함.
    calText.textContent = result; // calText의 textContent를 계산된 값으로 할당함.
});

reset.addEventListener("click", () => {
    calText.textContent = "";
}); // 화면의 숫자를 삭제