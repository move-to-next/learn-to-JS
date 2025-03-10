// 1. Product 생성자 함수를 만들고, id와 name과 price를 매개변수(속성)로 가진다.
function Product(id, name, price){
    this.id = id,
    this.name = name,
    this.price = price
};

// 2. Product의 프로토타입으로 getInfo()메서드 만들고, 상품정보를 반환하도록 한다.
Product.prototype.getInfo = function(){
    console.log(`제품이름: ${this.name}, 제품가격: ${this.price}`);
}

// 3. DiscountProduct 생성자 함수 만들고, Product를 상속받도록 한다. 추가로 할인율속성을 가짐
function DiscountProduct(id, name, price){
    Product.call(this, id, name, price);
    this.discountRate = discountRate;
}

// 4.DiscountProduct의 프로토타입에 getFinalPrice()메서드를 추가. 할인된 최종가격을 계산.
DiscountProduct.Prototype.getFinalPrice = function(){
    return this.price - (this.discountRate / 100);
}

// 5. ShoppingCart 생성자 함수를 만들고, 상품 목록(items)과 총액(totalPrice)를 속성으로 가짐.
function ShoppingCart(items, totalPrice){
    this.items = items,
    this.totalPrice = totalPrice
}

// 6. ShoppingCart의 프로토타입에 다음 메서드 추가.
// 6-1. addItem(product): 장바구니에 상품을 추가하고 총액을 업데이트함.
ShoppingCart.prototype.addItem = function(product){
    
}