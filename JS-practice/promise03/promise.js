// 상품 데이터베이스 (상품ID: {이름, 가격, 재고})
const products = {
    'p1': { name: '노트북', price: 1200000, stock: 5 },
    'p2': { name: '스마트폰', price: 800000, stock: 10 },
    'p3': { name: '헤드폰', price: 150000, stock: 0 }
  };
  
  // 1. 상품을 검색하는 함수 (Promise 반환)
  function findProduct(productId) {
    return new Promise((resolve, reject) => {
        if(products[productId]){
            resolve(products[productId]);
        }
        else{
            reject(new Error("상품이 존재하지 않습니다."));
        }
    })
    // 이 함수를 구현하세요
    // - 상품이 존재하면 resolve로 상품 정보 반환
    // - 상품이 존재하지 않으면 reject로 에러 메시지 반환
  }
  
  // 2. 장바구니에 상품을 추가하는 함수 (Promise 반환)
  function addToCart(product) {
    if(product.stock > 0){
        resolve(`${product.name}이(가) 장바구니에 실렸습니다.`)
    }
    else{
        reject(new Error(`${product.name}은(는) 품절되었습니다.`));
    }
    // 이 함수를 구현하세요
    // - 상품의 재고가 있으면 resolve로 성공 메시지 반환
    // - 상품의 재고가 없으면 reject로 품절 메시지 반환
  }
  
  // 3. 결제를 처리하는 함수 (Promise 반환)
  function processPayment(product) {
    // 이 함수를 구현하세요
    // - 50% 확률로 결제 성공 또는 실패 (랜덤으로 구현)
    // - 성공하면 resolve로 영수증 정보 반환
    // - 실패하면 reject로 결제 실패 메시지 반환
  }
  
  // 테스트 코드
  function orderProduct(productId) {
    // Promise 체인을 이용해 전체 주문 과정을 구현하세요
    // findProduct -> addToCart -> processPayment 순서로 진행
    // 각 단계의 결과를 콘솔에 출력
    // 에러 발생 시 적절한 에러 메시지 출력
  }
  
  // 주문 테스트 - 아래 세 가지 경우를 테스트해보세요
  orderProduct('p1');  // 존재하는 상품, 재고 있음
  orderProduct('p3');  // 존재하는 상품, 재고 없음
  orderProduct('p5');  // 존재하지 않는 상품