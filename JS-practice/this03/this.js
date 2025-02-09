function sum(x, y, abc){
    abc(x + y);
    return x+y;
}

function def(s){
    console.log('콜백함수', s);
}

sum(10, 20, def);

// function qwer(매변1, 매변2, 콜백함수);

let arr = [1,2,3,4,5];
arr.map(feb);

function feb(x){
    return x ** 2
}
console.log(arr.map(feb)); //명시적 함수 정의
console.log(arr.map(x => x ** 2)); // 익명의 화살표 함수

let arr2 = [1, 2, 3, 4, 5];
arr2.forEach(e => console.log(e**2));

function 제곱(x){
  console.log(x**2)
}