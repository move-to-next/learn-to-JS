function numbers(eee, fff, ggg) {
    return eee + fff + ggg;
};
document.write("1+2+3 = "+ numbers(1 ,2 ,3 +"<br>"));

function tomorrow(ddd){
    let days = ["월요일" ,"화요일", "수요일", "목요일", "금요일", "토요일", "일요일"];
    return days[ddd];
};
let monday = tomorrow(0);
document.write(`${monday}`+"<br>");

//----------------- 함수를 사용한 문제풀이1 ----------------
const fruits = [
    ['사과', 1000],
    ['바나나', 1500],
    ['딸기', 2000],
    ['포도', 3000],
    ['오렌지', 1800]
];

function result(fruit, count){
    for(let i=0; i < fruits.length; i++){
        if(fruits[i][0] === fruit){
            return fruits[i][1] * count;
        }
    }
    return "계산할 수 없습니댜."
}
document.write(result('사과', 4)+"<br>");
document.write(result('바나나', 5)+"<br>"+"<br>");

//----------------- 함수를 사용한 문제풀이2 ----------------
const movies = [
    ['일반영화', 12000],
    ['3D영화', 15000],
    ['IMAX', 18000],
    ['4DX', 20000],
    ['프리미엄', 25000]
]

function result2(movie, age){
    for(let i=0; i < movies.length; i++){
        if(movies[i][0] === movie){
            if(age <= 12){
                return movies[i][1] * (1 - 0.5);
            }
            else if(age <= 18){
                return movies[i][1] * (1 - 0.2);
            }
            else if(age >= 65){
                return movies[i][1] * (1 - 0.35);
            }
            else{
                return movies[i][1];
            }
        }
    }
    return "영화를 찾을 수 없습니다."
}
document.write(result2('프리미엄',65));