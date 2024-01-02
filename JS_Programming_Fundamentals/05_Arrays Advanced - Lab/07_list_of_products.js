function orderByProductName(productList) {
    // Create a copy of the array before sorting
    let sortedList = productList.slice().sort();

    for (let i = 0; i < sortedList.length; i++) {
        console.log(`${i + 1}.${sortedList[i]}`);
    }
}

// Example usage:
const products = ["Apple", "Orange", "Banana", "Grapes"];
orderByProductName(products);
