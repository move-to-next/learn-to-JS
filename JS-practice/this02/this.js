//------ 두번째 문제 풀이 -------
const one = {
    num: 1,
    count: function(x){
        return this.num + x;
    }
}
console.log(one.count(5));

const two = {
    num: 2,
    b: function(){
        return this.num;
    }
}
console.log(two.b());

const three = {
    num: 3,
    c(){
        return this.num;
    }
}

//------ 세세번째 문제 풀이 -------
const four = three.c.bind(three);
console.log(four());

const user = {
    userName: "jae_eun",
    gerIdentity(){
        return this.userName;
    }
};
const getUserName = user.gerIdentity;

console.log(user.gerIdentity());

//------ 네번째 문제 풀이 -------
function five(greeting, punctuation){
    console.log(`${greeting}, ${this.name}${punctuation}`);
}
const six = {
    name:"hari"
};

const seven = five.bind(six);
seven("안녕 나는", "!");

five.call(six, "안녕 나는", "!");
five.apply(six, ["안녕 나는","!"]);

//------ 다섯번째 문제 풀이 -------

function User(name, age) {
  this.name = name;
  this.age = age;
  this.introduce = function() {
    console.log(`제 이름은 ${this.name}이고, 나이는 ${this.age}살입니다.`);
  };
}

const eight = new User("하리", 7);
eight.introduce();