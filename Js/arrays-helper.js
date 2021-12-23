var nameOfCompanies = ['Dell','Simplilearn','Microsoft','Wipro'];
var numbers = [10,20,20];
var items = [
    { name: 'Realme Jc2', type: 'camera', price:100},
    { name: 'Sony Jc2', type: 'camera', price:40},
    { name: 'Apple Jc2', type: 'Laptop', price:10},
    { name: 'Dell Inspiron', type: 'Laptop', price:16}
]; 

//reduce method 
let totalPrice = items.reduce((acc,product)=>{
    return acc+= product.price;
},0);
console.log("Total price:", totalPrice);



// every : every element should satisfy the condition 
var priceStatus = items.every(function(product){
    return product.price > 5;
});
console.log("Every result", priceStatus);

// Some : Some element should satisfy the condition  =>true 
var priceStatus1 = items.some(function(product){
    return product.price > 40;
});
console.log("Some result", priceStatus1);




//filter 
var filteredProducts = items.filter(function(product){
    return product.type == 'Laptop';
})
console.log(filteredProducts);



// Find elements of the first match 
var findProd = items.find((product) => {
    return product.name == 'Sony Jc2';
}); 
console.log(findProd);



// iterate over array element 
nameOfCompanies.forEach((name) =>{
    console.log(name);

});

// Using the IIFE function 
let doubles = numbers.map(function(num){
    return num * 2; 
});
console.log(doubles);

// use the arrow function 

let services = nameOfCompanies .map((comp) =>{
    return comp +"services "
});

console.log(services);
