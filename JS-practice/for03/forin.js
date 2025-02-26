// 객체의 for...in문

const animal = {
    kind: 'poppy',
    name: '하리',
    age: 7,
    color:'ivory'
} // 객체 animal

for (let poppy in animal){
    console.log(`${poppy}: ${animal[poppy]}`);
} // animal 이라는 객체에 접근해 객체내부 요소의 키와 값으로 반환한다.



const scores = {
    철수: 85,
    영희: 92,
    민수: 78,
    수진: 95,
    지훈: 88
};

// 모든 학생의 평균 점수 구하기
let totalScore = 0; // 학생들의 총 점수
let studentCount = 0; // 학생 수

for (let student in scores){
    totalScore += scores[student]; // 학생들의 총 점수 누적
    studentCount++; // scores 객체 순회하면서 학생수 구하기
};

const average = totalScore / studentCount; // 평균값 변수 만들고 총 점수 / 학생 수
console.log(average);


// 90점 이상인 학생들의 이름을 배열로 나열
let bestScore = []; // 빈 배열 생성

for (let student in scores){
    if(scores[student] >= 90){  // scores 객체요소중에 90점 넘는 숫자가 있으면
        bestScore.push(student); // 해당 숫자(점수)를 가진 학생 이름을 빈 배열에 삽입
    }
}

console.log(bestScore);


// 가장 높은 점수와 낮은 점수를 구해보기
const studentNames = Object.keys(scores);
let highScore = studentNames[0]; // 높은 점수의 초기값 설정
let rowScore = studentNames[0]; // 낮은 점수의 초기값 설정

console.log(highScore); // 초기값 철수
console.log(rowScore);  // 초기값 철수

for(let score in scores){
    if(scores[score] > scores[highScore]){  // 객체를 순회하면서 철수(85) < 영희(92) < 수진(95)
        highScore = score;  // highScore은 수진
    }
    else if(scores[score] < scores[rowScore]){  // 객체를 순회하면서 철수(85) > 민수(78)
        rowScore = score;   // rowScore은 민수
    }
};

console.log(`높은점수 학생 : ${highScore} / 점수: ${scores[highScore]}`);
console.log(`낮은점수 학생 : ${rowScore} / 점수: ${scores[rowScore]}`);