document.write("join 활용"+"<br>");
let phone = ["010", "1234", "5678"];
document.write("join으로 전화번호 - "+phone.join('-')+"<br>"+"<br>");

document.write("concat 활용"+"<br>");
let desert = ["과자", "케이크", "초콜릿", "크레페", "당고"];
let ramyeun = ["신라면", "진라면", "열라면", "너구리", "안성탕면"];
const add = desert.concat();
const add2 = ramyeun.concat();
document.write(add +"<br>");
document.write(add2 + "<br>"+"<br>");

document.write("for..of 활용"+"<br>");
let words = ["한국", "미국", "일본", "영국", "독일"];
for (let country of words){
    document.write(country+"<br>");
};
let brands = ["벤츠", "아우디", "샤넬", "디올", "현대"];
for (let plus of brands){
    document.write(plus+"<br>");
};