// 배열의 for...of 문

const friends = ['영철', '영수', '광수', '상철', '민수'];

for(let friend of friends){
    console.log(friend);
}

// map과 set으로 for...of 활용

let sum = [];
sum.push('농구', '마라톤', '양궁');

// Map 활용
let mapValues = sum.map(item => [`${item} 경기`, '']);
// 나오는덴 지장은은 없지만 그래도 키와값에는 빈값보다는 의미있는값 사용권장

const mapOlympic = new Map(mapValues);

for(let [keys, values] of mapOlympic){
    console.log(keys, values);
};

// Set 활용
const setOlympic = new Set(sum);

for(let sports of setOlympic){
    console.log(sports);
};