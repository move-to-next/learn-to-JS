const products = [
  { id: 1, name: "노트북", price: 1200000, category: "전자제품" },
  { id: 2, name: "헤드폰", price: 300000, category: "전자제품" },
  { id: 3, name: "책상", price: 450000, category: "가구" },
  { id: 4, name: "의자", price: 150000, category: "가구" },
  { id: 5, name: "마우스", price: 50000, category: "전자제품" },
  { id: 6, name: "키보드", price: 100000, category: "전자제품" },
  { id: 7, name: "책장", price: 350000, category: "가구" }
];

// foreach를 사용해서 모든 전자제품의 이름과 가격을 "상품명: 가격원" 형식으로 콘솔에 출력하세요.


// let sum = {};

// for (let electric of products){
//     let elecName = Object.values(electric).forEach(name);
//     let elecPrice = Object.values(electric).forEach(price);
//     sum[`상품명: ${elecName}`] =[`가격: ${elecPrice}원`];
// }

// console.log(sum);
// 1. foreach 메소드의 사용법이 올바르지 않음. foreach는 배열에 사용되는 메소드이며,
// 콜백함수를 인자로 받는다. 여기서는 name, price라는 정의되지않은 변수를 전달하고있음.
// 2. Object.values(electric)는 객체의 모든 값을 배열로 변환하는데, 이 경우 electric 객체
// 의 모든 속성(id,name,price,category)를 포함하므로 특정 속성만 추출하려면 다른 방법을 써야한다.
// 3. 전자제품을 필터링 하라고 했는데, 지금 코드는 모든 제품을 필터링하고 있음.

// 수정된 풀이
products.forEach(product => {
    if(product.category === "전자제품"){
        console.log(`상품명: ${product.name}, 가격: ${product.price}원`);
    }
});
// 전자제품의 이름과 가격 출력
