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
        console.log("정답!!");
    }
}

command     // promis command가 resolve일때 right(value)의 결과값 sum을 반환 / reject일때 에러에 있던 메시지 error를 반환
    .then(sum => {
        return sum;
    })
    .catch(error => {
        console.log(error);
    });

// 위의 코드에서 5번의 기회를 주는 기능의 구현을 모르겠어서 ai를 활용함.

const random = Math.floor(Math.random() * 100);
let attempts = 5; // 시도 기회 추가

function playGame(value){
    return new Promise((resolve, reject) => {       // promise를 함수안에 넣음 = promise함수 또눈 promise를 반환하는 함수
        attempts--; // 기회 점점 차감;

        if(attempts == 0){  // 기회가 0일때 reject되면서 답안 메시지 생성
            reject(new Error("기회를 모두 소진하였습니다. 정답은 " + random + "이었습니다."));
            return; // reject된 메시지 반환
        };

        if(value < random){ // value가 정답보다 작으면 resolve되면서 UP메시지와 기횟수가 저장되어 나오는 인스턴스 생성
            resolve({message:"UP", remainingAttempts: attempts});
        }
        else if(value > random){ // value가 정답보다 크면 resolve되면서 DOWN메시지와 기횟수가 저장되어 나오는 인스턴스 생성
            resolve({message:"DOWN", remainingAttempts: attempts});
        }
        else if(value == random){// value가 정답과 같으면 resolve되면서 정답!!메시지와 기횟수가 저장되어 나오는 인스턴스 생성
            resolve({message:"정답!!", remainingAttempts: attempts});
        }
    });
}

function startGame(guess){  // guess를 매개변수로 하는 게임실행 함수 생성
    playGame(guess)
        .then(result => {   // promise함수인 playGame가 resolve이면
            console.log(result.message);    // 결과값인 result의 message(UP,DOWN)출력
            console.log(`남은횟수: ${result.remainingAttempts}`);   // 결과값인 result의 남은횟수 출력

            if(result.message === "정답!") {    // result의 message가 정답!!이라면
                console.log("게임 종료!!");  // 게임 종료!! 출력
            }
        })
        .catch(error => {   // promise함수인 playGame이 reject이면
            console.log(error.message); // error의 message출력
        })
}