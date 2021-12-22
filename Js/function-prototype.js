function Employee(id,name,dept,salary){
    this.id = id;
    this.name = name;
    this.dept = dept;
    this.salary = salary;
}

// Add properties (property data) to prototype 
Employee.prototype.nationality = "Indian";
Employee.prototype.address = "Chennai";

// Add function within property
Employee.prototype.showId = function() {
    return this.id;
}

Employee.prototype.salaryIncrement = function() {
    return this.salary += 20000;
}

let empOne = new Employee(1001,"Eswar","Engnineering",10000);
console.log(empOne);
empOne.id = 10007;
empOne.name = "Sai";
empOne.jobtype = "full time"
console.log(empOne);
console.log('------------------------')
// Access prototype properties
console.log(empOne.nationality);
console.log(empOne.address);

console.log('------------------------')

//Access Prototype function
console.log(empOne.showId());
console.log("After increment salary", empOne.salaryIncrement());


let empTwo = new Employee(1002,"Ayya","Aeronatical",10000);
console.log(empTwo);
console.log(empTwo.id);

