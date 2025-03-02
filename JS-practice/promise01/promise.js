// Producer
const promise = new Promise((resolve, reject) => {
    document.write("요청 불러오기");
    setTimeout(() => {
        // resolve("success"+"<br>"); 요청을 가져 왔을때 success 불러오기
        reject(new Error("요청에 대한 값을 불러올 수 없습니다"+"<br>")); // 요청 못가져올때 메시지 출력
    }, 1000);
});

// Consumers
promise
    .then(value => { 
    // then : promise결과가 성공적으로 반영되고, 마지막에는 resolve라는 콜백함수를 통해 success가 value 파라미터에 나옴.
    document.write(value);
    })
    .catch(error => {
    // catch : promise결과가 실패해서 에러가 발생되는 경우 reject라는 콜백함수를 통해 "값을 불러올 수 없습니다"가 error 파라미터에 나옴.
    document.write(error);
    })
    .finally(() => {
    // finally : promise가 성공,실패 따질거 없이 맨 마지막에 무조건 나옴.
    document.write("요청이 끝났습니다."+"<br>");
    })

// Promise chaining
const movie = new Promise((resolve, reject) => {
    setTimeout(() =>{
        resolve("캡틴 아메리카 : ");
    }, 1000);
});

movie
    .then(word => {
        return word + "브레이브 "
    })
    .then(word => {
        return word + "뉴 월드"
    })
    .then(movie => setTimeout(() => document.write(movie), 2000));






// 지정된 시간(밀리초) 후에 resolve되는 Promise를 반환하는 함수
function wait(ms) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("안녕하세요")
        }, ms) // ms 밀리초 이후에 resolve되면 안녕하세요 출력.
    })
  }
  
  // 테스트 코드
  document.write("시작"+"<br>");
  
  wait(2000)
    .then((message) => {
      document.write(message + " 2초 후 실행"+"<br>");
      return wait(1000);
    })
    .then((message) => {
      document.write(message + " 추가 1초 후 실행"+"<br>");
    });
  
  document.write("wait 함수 호출 후 (비동기 실행)");