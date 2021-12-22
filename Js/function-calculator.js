// Arithmatic Calculation 
let add = function (num1,num2) {
    return num1 + num2;
}

let sub = function (num1,num2) {
    return num1 - num2;
}


let multi = function (num1,num2) {
    return num1  *num2;
}


let div = function (num1,num2) {
    return num1 / num2;
}


let avg = function (num1,num2) {
    return (num1 + num2) / 2;
}

let x = 100;
let y = 30;

console.log(`The Addition of ${x} + ${y} = `, add(x,y));
console.log(`The Subtractio of ${x} - ${y} = `, sub(x,y));
console.log(`The Mutiplication of ${x} * ${y} = `, multi(x,y));
console.log(`The Division of ${x} / ${y} = `, div(x,y));
console.log(`The Average of ${x} + ${y} / 2 = `, avg(x,y));


