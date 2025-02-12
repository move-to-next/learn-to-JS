/*
문제: 학생들의 시험 점수 관리하기

Map 객체를 사용해서 다음 작업을 수행하세요:

1. 3명의 학생의 이름과 점수를 Map에 저장하세요
2. 전체 학생의 평균 점수를 계산하세요
3. 가장 높은 점수를 받은 학생의 이름을 찾으세요

예시 데이터:
- 민수: 85점
- 영희: 92점
- 철수: 78점
*/

let scores = new Map();

scores.set('민수', 85);
scores.set('영희', 92);
scores.set('철수', 78);

let minsu = scores.get('민수');
let younghee = scores.get('영희');
let cheolsu = scores.get('철수');

const average = (scores.get('민수') + scores.get('영희') + scores.get('철수'))/scores.size;

// const big = Math.max(...scores.values()); 점수를 먼저 비교하고 가져오려고 함..

// 올바른 예시
let highestScore = 0; // 초기값
let highestStudent = ''; // 초기값

for(let [name, score] of scores) { // scores라는 Map을 순회할때 name변수에 key가 할당되고, scores변수에는 value가 할당된다.
    if (score > highestScore){
        highestScore = score;
        highestStudent = name;
    }
}

console.log("민수의 점수 : " + minsu);
console.log("영희의 점수 : " + younghee);
console.log("철수의 점수 : " + cheolsu);
console.log("학생 전체 점수의 평균 점수 : " + average);
console.log("가장 높은 점수를 받은 학생 : " + highestStudent); // 영희
console.log("최고 점수 : " + highestScore); // 92