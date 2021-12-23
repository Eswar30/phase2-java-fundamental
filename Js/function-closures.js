// Closures : Nested function 
// Closures has access to three different scope chain 
//1. inner variable/parameters  2. outer  variable/parameters   3. Global variables 

let firstName = "Eswar";  //gloabal variables

function fullNameMaker() {
    let middleName = "gs";  // local variable or outer variable 
    // nested function 
    function combine () {
        let lastName = "Ayya"; // local variable or inner variable
        return `${firstName}  ${middleName}  ${lastName}`;
    }

    return combine();

}

let response = fullNameMaker();
console.log(response);