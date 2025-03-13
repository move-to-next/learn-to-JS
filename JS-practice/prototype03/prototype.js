// 1. Product 생성자 함수를 만들고, id와 name과 price를 매개변수(속성)로 가진다.
function Product(id, name, price){
    this.id = id;
    this.name = name;
    this.price = price;
};

// 2. Product의 프로토타입으로 getInfo()메서드 만들고, 상품정보를 반환하도록 한다.
Product.prototype.getInfo = function(){
    // console.log(`제품이름: ${this.name}, 제품가격: ${this.price}`);
    return `제품ID: ${this.id}, 제품이름: ${this.name}, 제품가격: ${this.price}원`;
}

// 3. DiscountProduct 생성자 함수 만들고, Product를 상속받도록 한다. 추가로 할인율속성을 가짐
function DiscountProduct(id, name, price, discountRate){ //* discountRate매개변수가 선언되지 않음.
    Product.call(this, id, name, price);
    this.discountRate = discountRate;
}

// **** DiscountProduct가 Product를 상속받도록 설정
DiscountProduct.prototype = Object.create(Product.prototype);
DiscountProduct.prototype.constructor = DiscountProduct;

// 4.DiscountProduct의 프로토타입에 getFinalPrice()메서드를 추가. 할인된 최종가격을 계산.
DiscountProduct.Prototype.getFinalPrice = function(){
    //return this.price - (this.discountRate / 100); //* 계산식이 할인된 가격을 계산하지못함.
    return this.price * (1 - this.discountRate / 100);
}

// 5. ShoppingCart 생성자 함수를 만들고, 상품 목록(items)과 총액(totalPrice)를 속성으로 가짐.
function ShoppingCart(){
    this.items = [];
    //this.totalPrice = Number("") //* totalPrice가 배열이 아닌 숫자값이어야함.
    this.totalPrice = 0;
}

// 6. ShoppingCart의 프로토타입에 다음 메서드 추가.
// 6-1. addItem(product): 장바구니에 상품을 추가하고 총액을 업데이트함.
ShoppingCart.prototype.addItem = function(product){
    this.items.push(product);
    // this.totalPrice.reduce((a,c) => { //* reduce 메서드 사용법이 잘못됬음.
    //     return a+c;
    // }, 0);

    // DiscountProduct가 객체라면(instanceof로 product에 할당) 할인된 가격을 사용.
    if(product instanceof DiscountProduct){
        this.totalPrice += product.getFinalPrice();
    }else {
        this.totalPrice += product.price;
    }

    console.log(`${product.name} 추가, 총 액 : ${product.totalPrice}원`)
}
// 6-2. removeItem(productId): 장바구니에서 상품을 제거하고 총액을 업데이트합니다.
ShoppingCart.prototype.removeItem = function(productId){ //*pop말고 특정상품을 제거할 다른방법이 필요
    // this.items.pop(productId);
    // this.totalPrice.pop(productId);
    // console.log(`${productId.item}제거, 총 액 : ${productId.totalPrice}원`)
    // return

    const index = this.items.findIndex(item => item.id === productId);

    if (index !== -1){
        const product = this.items[index];

        if (product instanceof DiscountProduct) {
            this.totalPrice -= product.getFinalPrice();
        }else {
            this.totalPrice -= product.price;
        }

        this.items.splice(index, 1);

        console.log(`${product.name} 제거, 총액: ${this.totalPrice}원`);
    }else {
        console.log(`ID가 ${productId}인 상품을 찾을 수 없습니다.`);
    }
}
// 6-3. getCartSummary(): 장바구니에 담긴 모든 상품 정보와 총액을 반환합니다.
ShoppingCart.prototype.getCartSummary = function(){ //* 매개변수를 할당하는 문법이 잘못됨.
    if (this.items.length === 0){
        console.log("장바구니가 비어 있습니다.");
    }else {
        this.items.forEach(item => {
            if(item instanceof DiscountProduct) {
                console.log
            }
        })
    }
}

const snack = new DiscountProduct(1, "새우깡", 2400);
const cart = new ShoppingCart();

cart.DiscountProduct(snack); //* 매개변수를 할당하는 문법이 잘못됨.
cart.getCartSummary();