document.write("slice 활용"+"<br>");
let a = [1,2,3,4,5];
document.write("0번 인덱스에서부터 3번인덱스 앞까지 자르기"+a.slice(0,3)+"<br>");

document.write("foreach 활용"+"<br>");
let b = ["서울","경기","부산","전주","울산"];
b.forEach(function(item,index){
    document.write(index+" "+item+"<br>");
    a[index]=index;
})

document.write("reduce 활용"+"<br>");
let c = [12,34,56,78,90];
let result = c.reduce((a, c) => {
    document.write(`${a},${c}`+"<br>");
    return a + c;
},0);