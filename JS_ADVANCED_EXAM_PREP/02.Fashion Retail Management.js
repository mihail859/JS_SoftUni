class FashionRetailInventory {
    constructor(storehouse){
        this.storehouse = storehouse
        this.location = ""
        this.productStock = []
    }
    addProduct (productName, size, quantity, price){
        let productFind = this.productStock.find(p => p.productName === productName && p.size === size)
        if (productFind){
            productFind.quantity += quantity
            return `You added ${quantity} more pieces of product ${productName} size ${size}`
        }else{
            this.productStock.push({productName, size, quantity, price})
            return `The product ${productName}, size ${size} was successfully added to the inventory`
        }
    }
    sendProduct (productName, size) {
        let productFind = this.productStock.find(p => p.productName === productName && p.size === size)
        
        if (!productFind){
            throw new Error (`The product ${productName}, size ${size} is not in the inventory`)
        }
        let idxToRemove = this.productStock.indexOf(productFind)
        this.productStock.splice(idxToRemove, 1)
        return `The product ${productName}, size ${size} was successfully removed from the inventory`
    }
    findProductsBySize(size){
        let matchingElements = this.productStock.filter(p => p.size === size)

        if (!matchingElements){
            return `There are no products available in that size`
        }
        let matchingArr = []
        matchingElements.forEach(p => {
            matchingArr.push(`${p.productName}-${p.quantity} pieces`)
        });
        return matchingArr.join(", ")
    }
    listProducts () {
        if (this.productStock.length === 0){
            return `${this.storehouse} storehouse is empty`
        }
        let result = [`${this.storehouse} storehouse in ${this.location} available products:`]
        for (let currObj of this.productStock){
            result.push(`${currObj.productName}/Size:${currObj.size}/Quantity:${currObj.quantity}/Price:${currObj.price}$`)
        }
    }
}

// const storeHouse = new FashionRetailInventory("East", "Milano");
// console.log(storeHouse.addProduct("Shirt", "M", 10, 25.0));
// console.log(storeHouse.addProduct("T-Shirt", "M", 10, 25.0));
// console.log(storeHouse.addProduct("Sweather", "M", 10, 25.0));
// console.log(storeHouse.addProduct("Sweather", "M", 10, 25.0));

const storeHouse = new FashionRetailInventory("East", "Milano");
console.log(storeHouse.addProduct("Shirt", "M", 10, 25.0));
console.log(storeHouse.addProduct("T-Shirt", "M", 10, 25.0));
console.log(storeHouse.sendProduct("T-Shirt", "M"));
console.log(storeHouse.sendProduct("Sweather", "M"));

