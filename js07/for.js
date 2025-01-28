for(let i = 0 ; i <= 5 ; i++){
    console.log(i);
}

document.write("--문제--"+"<br>");
document.write("주어진 숫자 배열에서 가장 큰 수와 가장 작은 수를 찾아 출력하는 프로그램을 작성해보세요."+"<br>");
document.write("const numbers = [18, 5, 23, 12, 41, 3, 28, 35];"+"<br>");

const numbers = [18, 5, 23, 12, 41, 3, 28, 35];
let big = numbers[0];
let small = numbers[0];

for(let i = 1; i < numbers.length; i++){
    if(numbers[i] > big){
        big = numbers[i];
    };

    if(numbers[i] < small){
        small = numbers[i];
    };
};

document.write("가장 큰 수: " + big);
document.write("가장 작은 수: " + small);