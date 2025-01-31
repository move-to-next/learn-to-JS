document.write("--문제--"+"<br>");
document.write("나머지 연산자를 활용한 3의 배수 판별하기"+"<br>");
document.write("%연산자를 사용해서 3의 배수를 판별할 수 있는 함수를 만들어 보세요"+"<br>");

// function three(num){
//     let result = num/3;
//     if(result%0){
//         console.log("true");
//     }
//     else{
//         console.log("false");
//     };
// }; // 오답

function three(num){
    return num % 3 === 0;
}; // 이렇게 하면 됨됨
