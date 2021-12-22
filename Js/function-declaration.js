//function declaration : define a task by a function 
//syntax : function functname() { }
//1.Non Parametrised function    //2. Parametrised function 



//1.Non Parametrised function 
function showMessage() {
    console.log("Hello eswar welcome to Javascript")
}
//function calling 
showMessage();

//2. Parametrised function 
function displayMessage(username) {
    console.log("Hello",username,"welcome to Javascript")
}
displayMessage("Eswar");
displayMessage("Ayya");
displayMessage();
displayMessage(534567);
displayMessage(4-5);
displayMessage("4*5");
displayMessage("4+5");


//.Muti Parametrised function 

function fetchContent(name,age,gender) {
           console.log(`Hello user ${name}, your age is ${age}, & your gender is ${gender}`);
}

fetchContent('Eswar',25,'male');

//Defalut Parametrised function 
function displayContent(name="newuser",number="100010") {
    console.log(`Hello user ${name}, your age is ${number}`);
}

displayContent();
displayContent("Eswarayya", 898980);
displayContent("Mukesh");
displayContent('',234567);


