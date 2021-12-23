let cartItems = [];

//add items to cart 
var addItems = (product) => {
    if(product!=null & product!=undefined)
    cartItems.push(product);
}

//remove items to cart
var removeItems = (productId) => {
    for (let index=0; index<cartItems.length; index++){
        if(cartItems[index].id == productId){
            cartItems.splice(index, 1);
        }
    }
    
}


//display cart
let displayItems = () => console.log(cartItems);

addItems({id:100,name:"Apple MAC OS", brand:"Apple", price:10000000});
addItems({id:101,name:"Dell MAC OS", brand:"Dell", price:1000000});
addItems({id:102,name:"Lenovo MAC OS", brand:"Lenovo", price:100000}); 

displayItems();
removeItems(101);

