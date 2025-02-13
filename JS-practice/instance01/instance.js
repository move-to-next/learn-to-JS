function mySelf(name, job){
    this.name = name,
    this.job = job,
    this.introduce = function() {
        console.log(`저는 ${this.name}이고 직업은 ${this.job}입니다.`);
}
}

const itsMe = new mySelf("김재은", "백수");
console.log(itsMe); // 인스턴스
console.log(itsMe.introduce()); // itsMe에 있는 메서드 introduce실행