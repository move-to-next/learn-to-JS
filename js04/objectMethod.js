document.write("--- 배열의 메서드 ---"+"<br>");

document.write("1. push() & pop()"+"<br>");
let arr1 = [1,2,3,4];
let arr2 = [1,2,3,4,5];
document.write("let arr1 = "+arr1+"<br>"+"let arr2 = "+arr2+"<br>");
document.write("push()= 배열에 뒤쪽에 값을 추가해준다."+"<br>");
arr1.push(6,7);
document.write("let arr1 = "+arr1+"<br>");
document.write("pop()= 배열의 마지막요소를 빼고 나서 반환한다. "+"<br>");
arr2.pop();
document.write("let arr2 = "+arr2+"<br>"+"<br>");

document.write("2. unShift() & shift()"+"<br>");
let arr3 = [5,6,7,8];
let arr4 = [5,6,7,8,9];
document.write("let arr3 = "+arr3+ "<br>");
document.write("let arr4 = "+arr4+ "<br>");
document.write("unShift()= 배열의 첫번째요소에 값을 추가한다."+ "<br>");
arr3.unshift(3,4);
document.write("let arr3 = "+arr3+ "<br>");
document.write("shift()= 배열의 첫번째요소를 빼고 나서 반환한다."+"<br>");
arr4.shift();
document.write("let arr4 = "+arr4+ "<br>"+"<br>");

document.write("3. splice()"+"<br>");
let arr5 = [5,6,7,8];
document.write("let arr5 = "+arr5+ "<br>");
arr5.splice(0,3,2,3,4)
document.write("splice()= 배열의 시작요소부터 마지막요소의 바로앞까지의 순서를 정하고"+ "<br>");
document.write("대신 변경할 값을 입력한다."+ "<br>");
document.write("arr5.splice(0번째,3번째 바로앞,2,3,4)"+ "<br>");
document.write("let arr5 = "+arr5+"<br>"+"<br>");

document.write("4. slice()"+"<br>");
let arr6 = [10,11,12,13,14];
let arr7 = [10,11,12,13,14];
document.write("let arr6 = "+arr6+ "<br>");
document.write("let arr7 = "+arr7+ "<br>");
document.write("slice()= 배열에서 요소들을 추출해서 새로운 배열로 반환."+ "<br>");
document.write("배열의 첫번째 인덱스부터 종료 인덱스 전까지 추출해서 새로운 배열로 반환."+ "<br>");
document.write("let arr6 = "+arr6.slice(0,3)+"<br>");
document.write("let arr7 = "+arr7.slice(2,4)+"<br>"+"<br>");

document.write("5. sort()"+"<br>");
let arr8 = [12,1000,11,14,13];
document.write("let arr8 = "+arr8+ "<br>");
document.write("sort() = 배열의 요소를 정렬하는데 사용한다."+ "<br>");
document.write("let arr8 = "+arr8.sort()+ "<br>");
document.write("그치만 숫자는 문자열로 전환한 후에 유니코드의 포인트 순서대로 전환하기 때문에 1000이 먼저온다."+ "<br>"+ "<br>");

document.write("6. indexOf()"+"<br>");
let arr9 = [16,17,18,19,20];
document.write("let arr9 = "+arr9+ "<br>");
document.write("indexOf() = 배열안에 인덱스를 반환한다. 없으면 -1을 반환한다."+"<br>");
document.write("let arr9 = "+arr9.indexOf(18)+ "<br>"+ "<br>");

document.write("7. includes()"+"<br>");
let arr10 = [16,17,18,19,20];
document.write("let arr10 = "+arr10+ "<br>");
document.write("includes() = 배열안에 인덱스가 있으면 true를 없으면 false를 반환한다."+"<br>");
document.write("let arr10의 18 = "+arr10.includes(18)+ "<br>");
document.write("let arr10의 11 = "+arr10.includes(11)+ "<br>"+ "<br>");

document.write("8. forEach()"+"<br>");
let arr11 = [16,17,18,19,20];
document.write("let arr11 = "+arr11+ "<br>");
document.write("forEach() = 배열의 각 요소에 대해 주어진 함수를 실행한다."+"<br>");
document.write("이 때 함수는 인자로 배열 요소,인덱스를 받는다."+"<br>");
document.write("배열의 요소를 순환하면서 해당 요소를 함수로 전달하고, 함수가 각 요소에 대해 실행된다."+"<br>");
arr11.forEach(function(item, index){
    document.write(index+" "+item+"<br>");
    arr11[index] = index;
});
let texts = ['abc', 'def', 'ghi', 'jkl'];
let newTexts = []; // 빈 배열
texts.forEach(function(item) {
    newTexts.push("123" + item + "456 ");
});
document.write(newTexts+"<br>");
document.write("forEach()메서드는 배열의 각 요소에 대해 특정 작업을 수행할 때 사용한다."+"<br>");
texts.forEach(function(numb){
    newTexts.push(numb+"789 ");
    newTexts.pop();
});
document.write(newTexts+"<br>");
document.write(newTexts.pop()+"<br>"+"<br>");
// 아직 이해가 안간다.

document.write("9. map()"+"<br>");
let arr12 = [21,22,23,24,25];
document.write("let arr12 = "+arr12+ "<br>");
document.write("map() = 배열의 각 요소에 대해 주어진 함수를 실행하고, 그 결과를 새로운 배열로 반환한다. "+"<br>");
arr12.map(function(item, index){
    document.write(index+" "+item+"<br>");
    arr12[index] = index;
});
let words = ['desk', 'chair', 'door', 'note'];
let newWords = words.map(function(item){
    return " "+item;
});
document.write(newWords+"<br>"+"<br>");

document.write("10. fliter()"+"<br>");
let arr13 = [26,27,28,29,30];
document.write("let arr13 = "+arr13+ "<br>");
document.write("fliter() = 기존의 배열에서 특정 조건을 만족하는 요소들만 추출하여 새로운 배열을 만든다."+"<br>");
const newArr13 = arr13.filter(function(el){
    return el % 2 === 0; //짝수를 찾는다.
});
document.write(newArr13+"<br>"+"<br>");

document.write("11. reduce()"+"<br>");
let arr14 = [31,32,33,34,35];
document.write("let arr14 = "+arr14+"<br>");
document.write("reduce = 배열의 각 요소에 대해 함수실행한다."+"<br>");
document.write("누적값a와 현재값c를 함수의 인자값으로 보낸다."+"<br>");
document.write("초기값 제외한 a는 첫번째 요소,c는 두번째 요소부터 순회함."+"<br>");
let result = arr14.reduce((a, c) => {
    document.write(`a: ${a}, c: ${c}`+"<br>");
    return a + c;
}, 0);

document.write("12. join()"+"<br>");
let arr15 = [4432, 2746, 5532, 6682];
document.write("let arr15 = "+arr15+"<br>");
document.write("join = 배열의 요소 사이에 특정문자를 추가할 때 사용."+"<br>");
document.write("요소사이에'-'추가 : "+arr15.join('-')+"<br>"+"<br>");
document.write("요소사이에'!!!'추가 : "+arr15.join('!!!')+"<br>"+"<br>");

document.write("13. concat()"+"<br>");
let arr16 = ["지렁이", "바구니", "다람쥐", "전화기"];
let arr17 = ["꿈틀", "들썩", "찍찍", "따르릉"];
document.write("let arr16 = "+ arr16+"<br>");
document.write("let arr17 = "+ arr17+"<br>");
document.write("concat() = 배열을 새로운 변수에 복사하는 메서드로, 얕은 복사가 된다."+ arr16+"<br>");
const add = arr16.concat();
document.write("add : ",add,"<br>");
document.write("add == arr16? ",add == arr16,"<br>");
const adds = arr17.concat();
document.write("adds : ",adds,"<br>");
document.write("adds == arr17? ",add == arr17,"<br>","<br>");

document.write("14. for...of.."+"<br>");
let arr18 = ['지팡이', '휠체어', '손잡이', '청소기'];
document.write("let arr18 = "+arr18+"<br>");
document.write("for..of.. = 각 배열을 순회하면서 요소의 값을 처리할때 사용된다. "+"<br>");
for (let arr19 of arr18){
    document.write(arr19);
};