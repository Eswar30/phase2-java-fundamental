//anonymous function expression
let printData = function () {
    console.log("This printdata is a function expression!");
}
printData();

//arrow function 
let makeData = () => {
    console.log("This makedata is a arrow function expression!");
}
makeData();


//oneline arrow function 

let onelineData = () => console.log ("Hello, Arrow function for one line statement");

//parametrise arrow function 

let ageCalculator = (name, yearofBirth) => console.log(`Hello user ${name} and your age ${2021-yearofBirth}`);
onelineData();
ageCalculator("Eswarayya" , 1990);
ageCalculator("Ayya" , 1909);

