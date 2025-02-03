//----------------- 함수를 사용한 문제풀이1 ----------------
const foods = [
    ['치킨', 18000],
    ['피자', 20000],
    ['햄버거', 12000],
    ['짜장면', 8000],
    ['떡볶이', 5000]
];

// function result(food, count, distance){
//     for(let i = 0 ; i < foods.length ; i++){
//         if(foods[i][0] == food){
//             if(distance > 5){
//                 return foods[i][1] + 2000;
//             }
//             else if(2 < distance <= 5){
//                 return foods[i][1] + 1000;
//             }
//             else{
//                 return foods[i][1];
//             }
//         }
//         if(foods[i][1] <= 30000){
//             return foods[i][1] * 0.5;
//         }
//         if(count >= 3){
//             return foods[i][1] * 0.05;
//         }
//         else{
//             return "계산할 수 없습니다."
//         };
//     };
// };  // 풀어봤지만 잘못된 결과가 나옴

function result(food, count, distance) {
    for (let i = 0; i < foods.length; i++) {
        if (foods[i][0] === food) {
            // 기본 가격 계산
            let totalPrice = foods[i][1] * count;
            
            // 배달비 계산
            let deliveryFee = 0;
            if (distance > 5) {
                deliveryFee = 2000;
            } else if (distance > 2) {
                deliveryFee = 1000;
            }
            
            // 총 가격에 배달비 추가
            totalPrice += deliveryFee;
            
            // 수량 할인 (3개 이상)
            if (count >= 3) {
                totalPrice *= 0.95; // 5% 할인
            }
            
            // 주문 금액 할인 (3만원 이상)
            if (totalPrice >= 30000) {
                totalPrice *= 0.5; // 50% 할인
            }
            
            return totalPrice;
        }
    }
    
    return "음식을 찾을 수 없습니다.";
}
// 이게 맞는 방법