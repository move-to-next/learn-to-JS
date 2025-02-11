// 다음 함수를 완성하세요:
//function calculate(num1, num2, callback) {
    // callback 함수를 사용해서 num1과 num2로 연산을 수행하세요
//}

// 이 함수를 사용해서 다음 연산들을 수행해보세요:
// - 두 수의 합
// - 두 수의 차
// - 두 수의 곱                                                                                                                                      

function calculate(num1, num2, callback){
    const calResult = callback(num1, num2);
    return calResult;
}
 
function add(a,b){
    return a + b;
}
function minus(a,b){
    return a - b;
}
function multifly(a,b){
    return a * b;
}

console.log(calculate(2,3,add));
console.log(calculate(2,3,minus));
console.log(calculate(2,3,multifly));


// 다음 함수를 완성하세요:
function processArray(arr, callback) {
    // const result = callback(arr); 배열 자체를 callback함수안에 한번에 넘기면 배열을 하나의 인자로 받아들여 계산이 어렵다.
    const result = arr.map(callback); // 배열 하나씩 callback함수를 적용시켜서 원하는 값이 나오도록 해야된다.
    return result;
    // arr의 각 요소에 callback 함수를 적용한 결과를 새 배열로 반환하세요
};

const newArr = [1, 2, 3, 4, 5]; // 새로운 배열 생성
const text = newArr.map(String); // 배열 요소를 문자열로 변환

function double(x){
    const text = x * 2;
    return text;
}                           // 요소를 2배로 만드는 함수

console.log(processArray(newArr, double));

// 다음 작업들을 수행해보세요:
// - 모든 요소를 2배로 만들기
// - 짝수만 필터링하기
// - 각 요소를 문자열로 변환하기



function fetchData(id, callback) {
    setTimeout (() => {
        const data = {
            id: id,
            data: `데이터 ${id}`
        };
        callback(data); // 콜백함수에 데이터값을 반환
    }, 1000);

    // setTimeout을 사용해서 비동기 작업을 흉내내보세요
    // 1초 후에 다음과 같은 데이터를 반환: 
    // { id: id, data: `데이터 ${id}` }
};

// 단일 데이터를 가져올 때
fetchData(1, function(x){
    console.log(x);
})

// 여러개의 데이터를 순차적으로 가져올 때
fetchData(1, function(a){
    console.log(a);
    fetchData(2, function(b){
        console.log(b);
        fetchData(3, function(c){
            console.log(c);
            fetchData(4, function(d){
                console.log(d);
            })  // 순차적으로 함수를 실행할 때 들여쓰기도 심할 뿐 아니라 코드의 가독성도 떨어진다. = 콜백지옥
        })
    })
})

// fetchData를 사용해서 다음 작업을 수행해보세요:
// - ID로 데이터를 가져와서 콘솔에 출력
// - 여러 개의 ID에 대해 순차적으로 데이터 가져오기