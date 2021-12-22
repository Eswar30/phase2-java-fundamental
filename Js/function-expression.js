//1.Non Parametrised function  declaration
// function showMessage() {
    // console.log("Hello eswar welcome to Javascript")
// }

//1. labeled function expression  //2. anonymous function expression 


//1. Labled function expression 
// Function expression :  A expression syntax is used to declare a function 
let showData = function showMessage() {
    console.log(" Hello eswar welcome to Javascript Function expression ")
}

//function calling 
showData();
console.log(showData);

//2. Anonymous function expression.
let createBox = function (width,height) {
    return width * height;
}
// console.log(createBox);

let a = createBox(10,10);
console.log(a);

