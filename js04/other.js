document.write("--불리언(boolean)특징--"+"<br>");
document.write("불리언은 논리값을 나태내면 true 또는 false중 하나의 값을 갖는다."+"<br>");
document.write("주로 조건문이나 반복문에서 조건식의 결과를 나타낼 때 사용"+"<br>");
let bool1 = true;
let bool2 = false;
document.write(typeof bool1," ", typeof bool2+"<br>"+"<br>");

document.write("--undefined특징--"+"<br>");
document.write("변수가 선언되었지만, 값이 없을때 할당되지 않았을때를 나타낸다."+"<br>");
document.write("해당 변수에 아무런 겂도 할당되지 않았거나, 정의되지 않은 변수에 접근하려고 할 때 사용된다."+"<br>");

let a = 9;

if (a){
	document.write('a에 값이 할당되지 않았습니다'+"<br>");
}

if (typeof b === undefined) {
    document.write(typeof b + "<br>")
  // b가 선언되지 않은 경우에 실행 
}

if(b = undefined) { // ReferenceError: b is not defined
    document.write("error"+ "<br>"+ "<br>");
}