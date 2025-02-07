const alice = {
    name: "Alice",
    greet(){
        console.log("안녕하세요, ${this.name}입니다.");
    }
};
// alice.greet()를 호출했을때 나오는 값은?
// "안녕하세요 Alice입니다."
// 이유는? - 객체 alice의 메서드인 greet의 this는 alice이기 떄문에 alice의 name인 "Alice"가 나옴.


const calculator = {
    value: 10,
    add: (x) => {
        return this.value + x;
    }
};
// calculator(5)를 호출했을때에 값은 어떻게 나올까?
// Nan (원 대답: 15)
// 이유는? - 객체 calculator의 메서드 add가 x를 매개변수로 하는 화살표함수라
// add의 this는 calculator이고 calculator의 value인 "10" + calculator의 인자값 "5" 해서 15
// 근데 틀렸음 왜냐하면 화살표함수는 자신만의 this를 가지지 않고 전역스코프의 this를 가지게 되는데 전역객체는 value가 없음 그래서 5 + undefined = Nan


const user = {
    userName: "john_doe",
    gerIdentity(){
        return this.userName;
    }
};
const getUserName = user.gerIdentity;

// getUserName()을 했을때 값은?
// undefined (원 대답: john_doe)
// 이유는? - 객체 user의 메서드인 gerIdentity는 this가 user이기 때문에 
// this.userName 즉, "john_doe"를 반환하고, 새로운 변수 getUserName에 할당시켜주기 때문에 john_doe
// 근데 사실 틀렸을 왜냐하면 메서드 genIdentity를 변수 getUserName에 새로 할당시켰을때 메서드 genIdentity하고 그안에 this하고 바인딩이 분리가 된다.
// 그래서 getUserName()를 호출하면 함수는 전역컨텍스트에서 실행되는데, 거기에는 userName이 없기 때문에 undefined가 나온다.


function introduce(greeting, punctuation) {
    console.log(`${greeting}, ${this.name}${punctuation}`);
}
const person = {name:"Bob"};

// call(), apply(), bind() 메서드를 사용해 introduce 함수를 호출해보세요.
// const abc = introduce.bind(person)
// introduce.call(person, "내 이름은",".")
// introduce.apply(person, ["내 이름은","."])
// 이유는? - bind를 가지고 name이라는 변수를 새로만들고 거기안에 introduce함수를 넣고
// call과 apply로 매개변수에 대입시겼다.


function User(name, age) {
    this.name = name;
    this.age = age;
    this.introduce = function() {
        console.log(`제 이름은 ${this.name}이고, 나이는 ${this.age}살입니다.`);
    }
}

// new 키워드를 사용해서 User 인스턴스를 만들고 introduce 메서드를 호출해보세요.
// const another = new User("철수", 12);
// another.introduce();
// 이유는? - User라는 함수가 있고, 새로운 변수를 만들어 그 변수안에 new키워드를 사용해서
// 생성자함수를 만들고 User라는 함수를 입히면 함수내부에 있는 메서드,프로퍼티들도 추가된다.