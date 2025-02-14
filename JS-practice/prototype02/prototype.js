function Book(title, author, year){
    this.title = title;
    this.author = author;
    this.year = year;
    this.isAvailable = true;
}

//function borrowBook(){
//    Book.prototype.isAvailable = false;
//}

Book.prototype.borrowBook = function(){
    this.isAvailable = false;
}

//function returnBook(){
//    Book.prototype.isAvailable = true;
//}

Book.prototype.returnBook = function(){
    this.isAvailable = true;
}

Book.prototype.getBookInfo = function(){
    // if(this.isAvailable === true){
    //     this.isAvailable = "예"
    // }
    // else{
    //     this.isAvailable = "아니오"
    // }
    const status = this.isAvailable ? "예" : "아니요";
    console.log(`제목: ${this.title}, 저자: ${this.author}, 출판연도: ${this.year}, 대출가능: ${status}`) //대출가능: ${this.isAvailable}
}

const book1 = new Book("해리포터", "J.K롤링", 1997);
book1.getBookInfo();
book1.borrowBook();
book1.getBookInfo();