const medal = [
    {
        'country':'중국',
        'gold':32,
        'silver':26,
        'bronze':24,
        total:function(){return this.gold + this.silver + this.bronze}
    },
    {
        'country':'카자흐스탄',
        'gold':3,
        'silver':8,
        'bronze':7,
        total:function(){return this.gold + this.silver + this.bronze}
    },
    {
        'country':'한국',
        'gold':15,
        'silver':14,
        'bronze':13,
        total:function(){return this.gold + this.silver + this.bronze}
    },
    {
        'country':'태국',
        'gold':0,
        'silver':0,
        'bronze':1,
        total:function(){return this.gold + this.silver + this.bronze}
    },
    {
        'country':'일본',
        'gold':9,
        'silver':11,
        'bronze':14,
        total:function(){return this.gold + this.silver + this.bronze}
    },
    {
        'country':'우즈베키스탄',
        'gold':1,
        'silver':1,
        'bronze':0,
        total:function(){return this.gold + this.silver + this.bronze}
    }
]

let ranking = medal.sort((a,b) => b.total() - a.total());


// for(let a of medal){
// return ranking.unshift(`랭킹: + ${medal[a]+1}`); 
// ===> ranking.unshift()를 사용하는 방법이 잘못 됬음. unshift는 배열의 앞에 항목을 추가하는데, 그걸 medal[a] + 1처럼 쓸 수 없다.
// 또한, for문에서 a는 객체를 순회하는 방식으로 medal[a]처럼 접근할 수 없다. ranking 배열에 순위를 출력하는 방식을 변경해야 됨.
// };
// console.log(ranking); 

// 수정
ranking = ranking.map((country, index) => ({
    ...country,
    rank: index + 1
}));

for( let country of ranking){
    console.log(`랭킹 ${country.rank}: ${country.country}`);
}