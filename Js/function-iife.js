// immediately invoked function expression. -->self-executing function
//syntax 

(function () {
    console.log("immediately invoked function expression. -->self-executing function");

}) ();

//

(function () {
    console.log("immediately invoked function expression. -->self-executing function");

}) ();


let firstName;
let lastName;
( function(){
    firstName = "Eswar"
    lastName  = "Ayya"
}) ();

console.log(firstName, lastName);
