class OnlineShop {
	constructor(warehouseSpace ){
        this.warehouseSpace = warehouseSpace
        this.products = []
        this.sales = [] 
    }
    loadingStore(product, quantity, spaceRequired){
       
        if (spaceRequired > this.warehouseSpace){
            throw new Error ("Not enough space in the warehouse.")
        }
        this.products.push({
            product,
            quantity
        })
        this.warehouseSpace -= spaceRequired
        return `The ${product} has been successfully delivered in the warehouse.`
    }
    quantityCheck(product, minimalQuantity){
        
        if(minimalQuantity <= 0){
            throw new Error(`The quantity cannot be zero or negative.`)
        }
        let findProduct = this.products.find((x) => x.product == product)

        if(!findProduct){
            throw new Error(`There is no ${product} in the warehouse.`)
        }
        if (minimalQuantity <= findProduct.quantity){
            return `You have enough from product ${product}.`
        }else{
            let difference = minimalQuantity - findProduct.quantity
            findProduct.quantity = minimalQuantity;
            return `You added ${difference} more from the ${product} products.`
        }
    }
    sellProduct(product) {
        let findProduct = this.products.find((x) => x.product === product)
        if(!findProduct){
            throw new Error(`There is no ${product} in the warehouse.`)
        }
        findProduct.quantity -= 1
        this.sales.push({
            product,
            quantity: 1
        })
        return `The ${product} has been successfully sold`
    }
    revision(){
        if (this.sales.length === 0){
            throw new error("There are no sales today!")
        }
        let arrReturningInfo = [`You sold ${this.sales.length} products today!`, "Products in the warehouse:"]
        for (let obj of this.products){
            arrReturningInfo.push(`${obj.product} - ${obj.quantity} more left`)
        }

        return arrReturningInfo.join('\n').trim()
    }
}
