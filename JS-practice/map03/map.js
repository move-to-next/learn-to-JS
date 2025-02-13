const students = [
    {name:"김철수", age: 15, grade: 3},
    {name:"이영희", age: 16, grade: 2},
    {name:"박민수", age: 14, grade: 1},
    {name:"정지원", age: 15, grade: 3}
];

// 위에 students 배열을 Map으로 변환환
const studentsMap = new Map(
    students.map(student => [student.name, {age:student.age, grade: student.grade}])
);
console.log(studentsMap);

console.log(studentsMap.get('김철수'));

// const result = studentsMap.map(studentAge => {
//     return{
//         name: studentAge.name,
//         koreanAge: studentAge.age - 1,
//         gradeStr: `${studentAge.grade}학년`,
//         isAdult: (studentAge.age - 1) >= 18
//     };
// });
// console.log(result); X

const result = [...studentsMap].map(([name, info]) => ({
    name: name,
    koreanAge: info.age - 1,
    gradeStr: `${info.grade}학년`,
    isAdult: (info.age - 1) >= 18
}));
console.log(result); // 전개연산자를 활용한 map사용