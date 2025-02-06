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
// 15
// 이유는? - 객체 calculator의 메서드 add가 x를 매개변수로 하는 화살표함수라
// add의 this는 calculator이고 calculator의 value인 "10" + calculator의 인자값 "5" 해서 15


const user = {
    userName: "john_doe",
    gerIdentity(){
        return this.userName;
    }
};
const getUserName = user.gerIdentity;

// getUserName()을 했을때 값은?
// john_doe
// 이유는? - 객체 user의 메서드인 gerIdentity는 this가 user이기 때문에 
// this.userName 즉, "john_doe"를 반환하고, 새로운 변수 getUserName에 할당시켜주기 때문에 john_doe


function introduce(greeting, punctuation) {
    console.log(`${greeting}, ${this.name}${punctuation}`);
}
const person = {name:"Bob"};

// call(), apply(), bind() 메서드를 사용해 introduce 함수를 호출해보세요.
// let intro = {
//     name: introduce.bind(person)
// }
// intro.name.call(person, "내 이름은",".")
// intro.name.apply(person, "내 이름은",".")
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
// 내일 풀어봄


































// let peter = {
//     name: "Peter Parker",
//     sayName(is, is2){
//         console.log(this.name+' is '+is+' or '+is2);
//     }
// }

// let bruce = {
//     name: "Bruce Wayne",
// }

// peter.sayName.call(bruce, ['batman', 'richman']); // call은 배열에 접근 못함
// peter.sayName.apply(bruce, ['batman', 'richman']); // apply는 배열에 접근함

// function sayName(){
//     console.log(this.name);
// }

// let bruce = {
//     name: 'bruce',
//     sayName: sayName
// }

// let peter = {
//     name: 'peter',
//     sayName: sayName.bind(bruce)
// }

// bruce.sayName();
// peter.sayName(); // bind는 새로운 함수 생성

// const person = {
//     name: 'hojun',
//     age: 25,
//     a(){
//         console.log(this);
//         console.log(this.name);
//         let b = () => {
//             console.log(this);
//             console.log(this.name)
//             let c = () => {
//                 console.log(this);
//                 console.log(this.name);
//             }
//             c()
//         }
//         b()
//     }
// }
// person.a();
// a의 this는 person이고
// b의 this도 a의 this의 this랑 같은거니까 person이고
// c의 this도 a의 this의 this의 this랑 같은거니까 person이고

// const obj = {
//     num:1,
//     func(){
//         setTimeout(
// 		function(){
// 			console.log(this)
// 		},1000)
//     }
// }

// obj.func();
// 여기서 this는 window
// 여기서 this.num는 undefined