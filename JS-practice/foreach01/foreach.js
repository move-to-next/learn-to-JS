let foods = ['햄버거', '초밥', '핫도그', '치킨'];
foods.forEach(food => console.log(food));
// 배열을 순회하면서 햄버거부터 하나씩 반환

let sum = 0; // 초기값 변수 생성
let numbers = [11, 22, 33, 44, 55, 66]; // 6개 숫자 배열 생성
numbers.forEach(addNumber); // 해당 배열에 forEach을 사용해 콜백함수를 실행

function addNumber(number) {
    sum += number;
} // 초기값 sum에 numbers배열의 요소값을 하나씩 누적(+=)함.

console.log(sum);
