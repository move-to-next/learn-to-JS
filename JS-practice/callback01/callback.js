function calculator(x,y,result,compare){
    const calcresult = result(x, y);
    const calccompare = compare(x, y);
    return {
        calculation:calcresult,
        comparison:calccompare
    }
}

function add(a,b){
    const add = a + b;
    console.log(add);
    return add;
    //const one = a + b;
    //console.log(a + b);
}
function minus(a,b){
    const minus = a - b;
    console.log(minus);
    return minus;
    //const two = a - b;
    //console.log(a - b);
}
function multifly(a,b){
    const multifly = a * b;
    console.log(multifly);
    return multifly;
    //const three = a * b;
    //console.log(a * b);
}
function division(a,b){
    const division = a / b;
    console.log(division);
    return division;
    //const four = a / b;
    //console.log(a / b);
}

function big(a,b){
    const big = a>b;
    console.log(big);
    return big;
    // console.log(a > b);
}
function small(a,b){
    const small = a < b;
    console.log(small);
    return small;
    // console.log(a < b);
}
function same(a,b){
    const same = a == b;
    console.log(same);
    return same;
    // console.log(a == b);
}

console.log(calculator(2, 3, add, big));
console.log(calculator(2, 3, minus, small));
console.log(calculator(2, 3, multifly, small));
console.log(calculator(2, 3, division, same));