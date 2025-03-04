// 예재.1 메서드 컨텍스트에서의 this
class Calculator {
    constructor(value){
        this.value = value;
    }

    add(x){
        return this.value + x;
    }

    multiply(x){
        return this.value * x;
    }
}

const calc = new Calculator(10);
const addMethod = calc.add;
console.log(calc.add(5));
// 결과 = 15 / calc는 Calculator의 value를 10으로 갖는 생성자함수이고, calc의 add함수에 있는 인자값이 5이므로 this.value(=10) + x(=5) = 15
//console.log(addMethod(5));
// 결과 = 15 / addMethod도 calc.add니까 똑같이 적용되서 15가 될거 같음.(틀림)
// 결과 = error발생 / 메서드를 별도의 변수에 할당할 때 this의 컨텍스트가 사라지기 때문이다.
// 수정 = const addMethod = (x) => calc.add(x); 화살표함수 생성 console.log(addMethod(5));


// 예재.2 this의 동작을 설명하고 결과 예측해보기기
const person = {
    name : '홍길동',
    regularGreet : function() {
        console.log('일반 함수: ' + this.name);
    },
    arrowGreet: () => {
        console.log('화살표 함수: ' + this.name);
    }
};

person.regularGreet();
// 결과 = "일반 함수: 홍길동" / regularGreet 메서드가 일반함수이고 일반함수의 this는 함수를 호출한 객체를 가리키기 때문에 person의 name인 홍길동이 나온다.
person.arrowGreet();
// 결과 = "화살표 함수: undefined"(틀림) / arrowGreet 메서드가 화살표함수이고 화살표함수의 this는 주로 window를 가리키기 때문에 window의 name이 없어서 undefined가 나온다.
// 결과 = "화살표 함수: " / 화살표 함수의 this는 렉시컬 스코프. 즉, 화살표함수가 정의된 시점 주변 컨텍스트의 this를 그대로 상속 받는다.
// 그래서 브라우저 환경에서의 this는 window환경에서의 this인데 window의 this는 undefined가 아니라 아예 빈칸이므로 빈문자열이 반환된다.


// 예재.3 명시적 this 바인딩
function introduce(greeting, punctuation) {
    console.log(`${greeting}, ${this.name}${punctuation}`);
}

const user={
    name: '김철수'
};

introduce.call(user, '안녕하세요', '!'); // 결과 = greeting(안녕하세요), this.name(김철수)!(punctuation) / "안녕하세요, 김철수!"
introduce.apply(user, ['반갑습니다.','.']); // 결과 = greeting(반갑습니다.), this.name(김철수).(puntuation) / "반갑습니다., 김철수." == call과 비슷하지만 배열일때 적용
const boundIntroduce = introduce.bind(user);
boundIntroduce('헬로', '~'); // 결과 = greeting(헬로), this.name(김철수)~(puntuation) / introduce 함수에서 user를 bind했기 때문에