// 전개 구문문
// const math = ["더하기", "빼기", "곱하기", "나누기"];
// const english = ["good", "nice", "very", "perfect"];

// const words = [...math, ...english]; //['더하기', '빼기', '곱하기', '나누기', 'good', 'nice', 'very', 'perfect']



// 구조분해할당 활용한 문제풀이
const students = [
    {
        name: '김철수',
        grade: '3학년',
        scores: {
            math:95,
            english:88,
            science:92
        },
        club: '과학동아리'
    },
    {
        name: '이영희',
        grade: '2학년',
        scores: {
            math:85,
            english:75,
            science:80
        },
        club: '과학동아리'
    }
]

// function result(student){
//     for(let i = 0 ; i >= students.length; i++){
//         let everage = (students[i].scores.math + students[i].scores.english + students[i].scores.science) / 3;
//         if(student[i] === student){
//             if(everage >= 90){
//              students[i].name + " - " + "최우수 상장, " + "장학금 100만원 (평균:" + everage + ")";
//             }
//             if(everage >= 80){
//              students[i].name + " - " + "우수 상장, " + "장학금 50만원 (평균:" + everage + ")";
//             }
//             if(everage >= 70){
//              students[i].name + " - " + "장려 상장, " + "장학금 20만원 (평균:" + everage + ")";
//             }
//             else{
//                 "계산할 수 없습니다"
//             }
//         }
//     }
// }            // 문법도 틀렸을 뿐더러 구조분해할당을 사용하지 않음