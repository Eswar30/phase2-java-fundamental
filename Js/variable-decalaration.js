//var : var keyword has functional level scope -->reassign value 
//let : let  keyword has block level scope -->reassign value 
//const : const  keyword has block  level scope -->can not reassign value

let display = function (){
    var status = true ;
    if (status){
        var itemOne = "Apple Mac book";
        let itemTwo = "Dell book XYX";
        const itemThree = "Lenovo book";

        itemOne = "Mac book";
        itemTwo = "Dell book";

        // itemThree = "Lenovo"; //Uncaught TypeError: Assignment to constant variable.

        console.log(itemOne);
        console.log(itemTwo);
        console.log(itemThree);
    }
    console.log(itemOne);
        // console.log(itemTwo); /// Uncaught ReferenceError
        // console.log(itemThree); // Uncaught ReferenceError: variable-decalaration.js:21
}   
display();
// console.log(itemOne);// Uncaught ReferenceError: itemOne is not defined