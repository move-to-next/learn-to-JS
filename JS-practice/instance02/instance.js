function shopping(product, price){
    this.product = product,
    this.price = price,
    this.today = function() {
        console.log(`오늘 마트에 가서 장을 봤는데 ${product}를 샀고 ${this.price}원에 샀다.`);
    }
}

const buyThing = new shopping("계란", 6990);
console.log(buyThing);
console.log(buyThing.today());