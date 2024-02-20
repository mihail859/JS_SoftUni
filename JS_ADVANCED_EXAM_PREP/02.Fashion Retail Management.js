class FashionRetailInventory {
    constructor(storehouse, location){
        this.storehouse = storehouse
        this.location = location
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

        if (matchingElements.length === 0){
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
        let result = [`${this.storehouse} storehouse in ${this.location} available products:`];

        this.productStock.sort((a, b) => {
            return a.productName.localeCompare(b.productName);
        });


        for (let currObj of this.productStock){
            result.push(`${currObj.productName}/Size:${currObj.size}/Quantity:${currObj.quantity}/Price:${currObj.price}$`)
        }
        
        return result.join("\n")
    }
}

// const storeHouse = new FashionRetailInventory("East", "Milano");
// console.log(storeHouse.addProduct("Shirt", "M", 10, 25.0));
// console.log(storeHouse.addProduct("T-Shirt", "M", 10, 25.0));
// console.log(storeHouse.addProduct("Sweather", "M", 10, 25.0));
// console.log(storeHouse.addProduct("Sweather", "M", 10, 25.0));

// const storeHouse = new FashionRetailInventory("East", "Milano");
// console.log(storeHouse.addProduct("Shirt", "M", 10, 25.0));
// console.log(storeHouse.addProduct("T-Shirt", "M", 10, 25.0));
// console.log(storeHouse.sendProduct("T-Shirt", "M"));
// console.log(storeHouse.sendProduct("Sweather", "M"));


// const storeHouse = new FashionRetailInventory("East", "Milano");
// console.log(storeHouse.addProduct("Shirt", "M", 10, 25.0));
// console.log(storeHouse.addProduct("T-Shirt", "M", 10, 25.0));
// console.log(storeHouse.addProduct("Shirt", "L", 5, 30.0));
// console.log(storeHouse.addProduct("Shoes", "9", 8, 50.0));
// console.log(storeHouse.sendProduct("Shoes", "9", 8, 50.0));
// console.log(storeHouse.listProducts());


const storeHouse = new FashionRetailInventory("East", "Milano");
  console.log(storeHouse.addProduct("Shirt", "M", 10, 25.0));
  console.log(storeHouse.addProduct("T-Shirt", "M", 10, 25.0));
  console.log(storeHouse.findProductsBySize("M"));
  console.log(storeHouse.findProductsBySize("XL"));
