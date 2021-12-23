function createProductStore (inventory) {
    return {
        inventory,
        inventoryValue() {
            return this.inventory.reduce (
                (total, product) => total + product.price, 0);
            },
            getPrice(productId){
                return this.inventory.find(
                    product => product.id === productId).price;
                }
            };
        }
        
const inventory = [
    { id: 1, name: 'Billa DVD', price: 1000},
    { id: 2, name: 'Viswasam DVD', price: 10000}

];

const myProductStore = createProductStore (inventory);
myProductStore. inventoryValue();
myProductStore. getPrice(2);
console.log(myProductStore);