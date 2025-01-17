document.write("---객체타입의 특징---"+"<br>")
document.write("객체타입은 원시타입과 다르게 값에 의한 전달이 아니라서, 값만 저장되는것이 아니라"+"<br>")
document.write("값의 참조(위치)까지 저장된다."+"<br>")
let arr1 = [1,2,3];
let arr2 = arr1;
document.write("배열인 변수를 다른 변수에 저장했을때 - "+ arr2+"<br>");

arr1[0] = 10;
document.write("배열을 할당받은 변수에서 0번째의 값을 바꿨을때 - "+arr2+"<br>"+"<br>");

document.write("배열객체 : 데이터를 순서대로 저장하는 객체이다."+"<br>");
let arr3 = new Array(1,2,3);
document.write("1. new Array()로 새로운 배열을 만들수 있다."+"<br>");
document.write("let arr3 = new Array(1,2,3)"+"<br>"+"<br>")
let arr4 = [1,2,3];
document.write("2. 배열은 주로 대괄호로 묶으며 0번째부터 셀 수 있다."+"<br>");
document.write("let arr4 = [1,2,3];"+"<br>");
document.write("arr4의 2번째 값 : "+arr4[2]+"<br>"+"<br>");
document.write("3. 인덱싱을 이용하여 요소를 추가,수정할 수 있다."+"<br>");
let arr5 = [5,6,7,8];
document.write("let arr5 = [5,6,7,8];"+"<br>");
arr5[3] = 9;
document.write("arr5의 3번째 값에 9로 변경 : "+ arr5[3] +"<br>"+"<br>");
document.write("4. 다른 배열을 요소로 가질 수 있다."+"<br>");
let arr6 = [[5,6],[7,8],[9,10]];
document.write("let arr6 = [[5,6],[7,8],[9,10]];"+"<br>");
document.write("arr6의 0번째 배열의 0번째 값 : "+arr6[0][0] +"<br>"+"<br>");ㄴ