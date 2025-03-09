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
  return new Promise((resolve, reject) => {
    // 50% 확률로 성공 또는 실패
    const isSuccessful = Math.random() < 0.5;
    
    if (isSuccessful) {
      // 결제 성공: 영수증 정보 반환
      const receipt = {
        productId: product.id || '알 수 없음',
        productName: product.name || '알 수 없음',
        price: product.price || 0,
        timestamp: new Date().toISOString()
      };
      resolve(receipt);
    } else {
      // 결제 실패: 오류 메시지 반환
      const productName = product.name || '상품';
      reject(new Error(`${productName} 결제에 실패했습니다.`));
    }
  });
}

const productId = 'p1';
const product = { ...products[productId], id: productId };

processPayment(product)
  .then(receipt => {
    console.log('결제 성공:', receipt);
  })
  .catch(error => {
    console.error('결제 실패:', error.message);
  });