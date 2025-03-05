// promise를 이용한 랜덤숫자게임

// 1. 1~100까지의 숫자를 맞춰야 함.
// 2. 컴퓨터는 랜덤하게 숫자를 생성함.
// 3. 숫자를 추측하면 Promise를 사용해 다음을 확인한다.
//  3-1. 정답이면 성공 메시지 반환.
//  3-2. 정답보다 높으면 DOWN 힌트 제공
//  3-3. 정답보다 낮으면 UP 힌트 제공
// 4. 총 5번의 기회가 주어짐

const bingo = Math.floor(Math.random() * 100);  // 랜덤으로 나오는 정답

const command = new Promise((resolve, reject) => {  // 답이 잘 전달되면 resolve로 right함수 실행 아니면 reject로 에러 생성후 메시지 전달
    resolve(right());
    reject(new Error("숫자를 입력하세요."));
});

function right(value){  // right함수의 매개변수 value가 랜덤값 bingo보다 낮으면 UP, 높으면 DOWN, 같으면 정답! 콘솔 출력
    if(value < bingo){
        console.log("UP");
    }
    else if(value > bingo){
        console.log("DOWN");
    }
    else if(value == bingo){
        console.log("정답!");
    }
}

command     // promis command가 resolve일때 right(value)의 결과값 sum을 반환 / reject일때 에러에 있던 메시지 error를 반환
    .then(sum => {
        return sum;
    })
    .catch(error => {
        console.log(error);
    });