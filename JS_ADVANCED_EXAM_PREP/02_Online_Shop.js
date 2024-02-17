class OnlineShop {
	constructor(warehouseSpace ){
        this.warehouseSpace = warehouseSpace
        this.products = []
        this.sales = [] 
    }
    loadingStore(product, quantity, spaceRequired){
       
        if (this.warehouseSpace < spaceRequired){
            throw new Error ("Not enough space in the warehouse.");
        }
        this.warehouseSpace -= spaceRequired;
        this.products.push({product,quantity});
        
        return `The ${product} has been successfully delivered in the warehouse.`;
    }
    quantityCheck(product, minimalQuantity){
        
        if(minimalQuantity <= 0){
            throw new Error(`The quantity cannot be zero or negative.`)
        }
        let findProduct = this.products.find(x => x.product === product)

        if(!findProduct){
            throw new Error(`There is no ${product} in the warehouse.`)
        }
        if (minimalQuantity <= findProduct.quantity){
            return `You have enough from product ${product}.`
        }
        let difference = minimalQuantity - findProduct.quantity
        findProduct.quantity = minimalQuantity;
        return `You added ${difference} more from the ${product} products.`
        
    }
    sellProduct(product) {
        let findProduct = this.products.find(x => x.product === product)
        if(!findProduct){
            throw new Error(`There is no ${product} in the warehouse.`)
        }
        findProduct.quantity--;
        this.sales.push({product,quantity: 1})
        return `The ${product} has been successfully sold.`
    }
    revision(){
        if (this.sales.length === 0){
            throw new Error("There are no sales today!")
        }
        let sold = this.sales.length
        let arrReturningInfo = [`You sold ${sold} products today!`, `Products in the warehouse:`]
        this.products.forEach(p=>{
            arrReturningInfo.push(`${p.product}-${p.quantity} more left`)
        })

        return arrReturningInfo.join('\n').trim()
    }
}
const myOnlineShop = new OnlineShop(500)
console.log(myOnlineShop.loadingStore('headphones', 10, 200));
console.log(myOnlineShop.loadingStore('laptop', 5, 200));

console.log(myOnlineShop.quantityCheck('headphones', 10));
console.log(myOnlineShop.quantityCheck('laptop', 10));

console.log(myOnlineShop.sellProduct('headphones'));
console.log(myOnlineShop.sellProduct('laptop'));
console.log(myOnlineShop.revision());
