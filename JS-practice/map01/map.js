// 문자열에서 처음으로 중복되는 문자를 찾으세요
// 예: "professional" => 'o'
function findFirstDuplicate(str) {
    const dupli = new Set(str.split(''));
    dupli.forEach(function(text){
        
    })
}
console.log(findFirstDuplicate("banana"));

// Set을 사용해서 이미 나온 문자를 추적하면 됩니다
// 문자열을 순회하면서 Set에 없는 문자는 추가하고, = foreach
// 있는 문자를 발견하면 그게 첫 중복 문자입니다.
































// const world = new Map();
// world.set(082, '한국');
// world.set('일본', '81');
// world.set('084', '베트남');
// world.set(1, '미국');
// world.set('독도는우리땅', true)

// console.log(world.get(082)); // world이라는 Map의 값에 접근해서 key에 082가 있다면 값으로 '한국'이 나옴.
// console.log(world.get('일본'));
// console.log(world.get(1));
// console.log(world.get('독도는우리땅'));

// console.log(world.has('084')); // Map에서 key가 '084'인게 있으면 true(boolean)
// console.log(world.delete(1)); // key 1 값 '미국' 삭제
// console.log(world);// key 1 값 '미국' 안나옴

// for (const num of world){ // Map 요소를 순회해서 가져옴
//     console.log(`${num[0]}`)
//     console.log(`${num[1]}`)
// }

// console.log(world.keys()); // 키 만 가져옴
// console.log(world.values()); // 값 만 가져옴
// console.log(world.entries()); // 둘다 가져옴

// let temp = new Map([
//     [1, 10],
//     [2, 20],
//     [3, 30],
//     [4, 40]]
// )

// console.log(temp);

// console.log("--------------------------");

// let s = new Set('abcddddddddd');
// console.log(s);         // 값 = [a,b,c,d]
// console.log(s.size);    // 4    set은 중복을 허용하지 않는다.

// s.add('f');     // Set에 값 추가하기
// console.log(s);

// for (let text of s){ // Set 순환하기
//     console.log(text)
// }

// let ss = new Set('abcdeeeeeeeeee'.split('')); // split : 하나씩 잘라서 새로운 배열로 반환
// console.log(ss);

// ss.delete('b');
// console.log(ss.has('b'));


// like = ['아이유', '아이유', '아이유', '아이브', '아이들', '에스파'];

// // 몇명이 좋아요를 눌렀을까?
// let melon = new Set(like);
// console.log(melon.size); // 4

// // 각각 몇명의 가수에게 좋아요를 눌렀을까
// for (const i of melon){
//     console.log(i, like.filter(liker => liker === i))
// }
// for (const name of melon) {
//     console.log(name, like.filter(liker => liker === name).length)
// }