// Javascript Constructor  : a "blueprint" for creating many objects of the same "type".
//1.Non Parametrised Constructor   //2. Parametrised  Constructor

//1.Non Parametrised Constructor
function Person() { }; //Zero argument constructor  =>return empty object




//create a eswar object 
let eswar = new Person(); //empty object
console.log(eswar);


//2. Parametrised  Constructor   : Use this keyword with in the Constructor
function Account(id,name,balance,email) {
        this.id = id;
        this.name = name;
        this.balance = balance;
        this.email = email;

}

let account1 = new Account(1001,"Eswar",456789,"eswar@gmail.com");
let account2 = new Account(1002,"Ayya",456689,"ayya@gmail.com");
console.log(account1);
console.log(account2);
let account3 = new Account(1003,"Eswar1",456789,"eswar1@gmail.com");
let account4 = new Account(1004,"Ayya1",456689,"ayya1@gmail.com");
console.log(account3, account4);

