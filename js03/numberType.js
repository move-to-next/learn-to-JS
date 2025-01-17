document.write("--숫자형 메서드--"+"<br>");
document.write("1.parseInt - 문장에서 읽을 수 있는 숫자를 찾아 숫자형으로 변환"+"<br>");
let write = "단돈 3천원";
document.write("변경전 - " + write+"<br>");
document.write("변경후 - " + parseInt(write)+"<br>");
document.write("변경후타입 - " + typeof parseInt(write)+"<br>"+"<br>");

document.write("2.parseFloat - parseInt와 같은데 실수로 변환"+"<br>");
let size = "12.88cm";
document.write("변경전 - " + size+"<br>");
document.write("변경후(parseInt) - " + parseInt(size)+"<br>");
document.write("변경후(parseFloat) - " + parseFloat(size)+"<br>");
document.write("변경후타입 - " + typeof parseFloat(write)+"<br>"+"<br>");

document.write("3.Number.isInteger - 숫자가 정수인지 아닌지 판단"+"<br>");
let one = 01;
let two = 2.2;
document.write("숫자1은정수? - "+Number.isInteger(one)+"<br>");
document.write("숫자2.2은정수? - "+Number.isInteger(two)+"<br>"+"<br>");

document.write("4.isNaN - NaN인지 판별, 맞으면 true 아니면 false"+"<br>");
let numText = 4+"abc";
let four = 4;
document.write("NaN이 맞을까? - "+isNaN(numText)+"<br>");
document.write("NaN이 맞을까? - "+isNaN(four)+"<br>"+"<br>");

document.write("5.toFixed - 정수를 소수점이하의 자릿수로 지정"+"<br>");
let size2 = 15.23455;
document.write("정수 - "+size2.toFixed()+"<br>");
document.write("소수점 첫자리 - "+size2.toFixed(1)+"<br>");
document.write("소수점 둘째자리 - "+size2.toFixed(2)+"<br>");
document.write("소수점 셋째자리 - "+size2.toFixed(3)+"<br>");
document.write("소수점 넷째자리 - "+size2.toFixed(4)+"<br>"+"<br>");

document.write("6.Math객체 연산"+"<br>");
let size3 = 12.464;
document.write("숫자 - "+size3+"<br>");
document.write("내림 floor - "+Math.floor(size3)+"<br>");
document.write("반올림 round - "+Math.round(size3)+"<br>");
document.write("올림 ceil - "+Math.ceil(size3)+"<br>");
document.write("정수부 trunc - "+Math.trunc(size3)+"<br>"+"<br>");

document.write("7.BigInt - 안전하지 않은값뒤에(2의 53승부터) n을 붙여 안전하게 표현이 되게 하는값"+"<br>");
document.write("4n + 4n = " + (4n+4n)+"<br>");
document.write("4 + 4n = " + "TypeError"+"<br>"+"<br>");
document.write("BigInt함수를 이용하여 숫자를 BigInt형으로 변환할 때, 안전하지 않은값을 BigInt로 전환하면 정확한 결과값을 보여주지 않는다.")
document.write("숫자형에서 안전하게 표현할 수 없는 크기의 숫자는 BigInt로 표현할때 반드시 문자형으로 입력해야한다.")