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

let bestScore = [];

for (let student in scores){
    if(scores[student] >= 90){
        bestScore.push(student);
    }
}

console.log(bestScore);

//