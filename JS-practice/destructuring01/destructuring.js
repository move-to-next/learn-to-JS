// 1.아래 객체에서 name과 age만 구조분해할당을 사용해서 추출하고 출력하세요
const student = {
    name: "하리",
    age: 6,
    grade: "A",
    class: "3-1"
};

let {name, age} = student;
console.log(name, age);


// 2. 데이터에서 첫 번째 학생의 이름과 점수를 구조분해할당으로 추출하세요.
// 첫 번째 학생의 이름과 수학,영어가 각각 변수에 저장되어야 합니다.
const classData = [
    {name2: "영희", scores: {math: 90, english: 85}},
    {name2: "민수", scores: {math: 95, english: 90}}
];

// 나의 풀이
// let [a, b] = classData;
// let {name2, scores} = a;
// let {math, english} = scores;

// 간소화 된 풀이
const [{name2, scores: {math, english}}] = classData;

// 위 코드에서 민수를 보이고자 할때
//const [{},{name2, scores: {math, english}}] = classData;

console.log(name2, math, english);


// 3. 다음 객체에서 필요한 정보를 구조분해할당으로 추출하세요.
// company가 없는 경우 "무직"이 기본값이 되어야 합니다.
// person1의 이름, 이메일, 회사를
// person2의 이름, 전화번호, 회사를 추출하세요.

const people = {
    person1: {
        info: {
            name3: "장민호",
            age: 25,
            contacts: {
                email: "minho@email.com",
                phone: "010-2134-5678"
            }
        },
        company: "테크컴퍼니"
    },
    person2: {
        info: {
            name3: "이서연",
            age: 28,
            contacts:{
                email: "seoyeon@email.com",
                phone: "010-2371-3958"
            }
        }
    }
}

const {person1: {info:{name3:name4,contacts: {email:email}}, company}} = people;
const {person2: {info:{name3:name5,contacts: {phone:phone}}, company:company2 = "무직"}} = people;

console.log(name4,email,company);
console.log(name5,phone,company2);