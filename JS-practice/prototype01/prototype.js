function Song(count){
    this.release = '2020.01.24';
    this.genre = 'pop';
    this.name = 'ProtoType';
    this.count = count;
}

Song.prototype.like = function(){
    console.log(`이 노래는 NomBe의 ${this.name}이고, 이 곡의 좋아요 수는 ${this.count}입니다.`);
}

const nombe = new Song(100);

console.log(nombe.like());