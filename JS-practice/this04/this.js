// this 연습
const desert = {
    type : "아이스크림",
    flavor : function(a){
        if(a === "choco"){
            console.log(`내가 좋아하는 ${a} ${this.type}`);
            //console.log(`내가 좋아하는 ${this.flavor(a)} ${this.type}`);
            // 이렇게 되면 flavor 함수가 무한 재귀 호출이 발생되어 this.flavor(a)는 비추추
        }
        else{
            console.log(`누가 ${a} ${this.type} 사오래?`);
        }
    }
};

desert.flavor("choco");
desert.flavor("와사비")


// 생성자 함수 호출
function Number(pen){
    this.pen = pen;
    this.buyPen = function () {
        return 2000 * this.pen;
    };
}

const pen = new Number(5);

console.log(`펜 ${pen.pen}자루에 ${pen.buyPen()}원`);


// 메서드 호출
const itsMe = {
    myName: "김재은",
    koreanAge : 31,
    originalAge(){
        return this.koreanAge - 2;
    }
}

console.log(`저의 이름은 ${itsMe.myName}이고, 나이는 ${itsMe.koreanAge}살이고, 만 나이는 ${itsMe.originalAge()}살 입니다.`);