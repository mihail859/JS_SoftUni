let arr = [];
arr.push({product: "milk", quantity: 10});
arr.push({product: "sugar", quantity: 180});
arr.push({product: "milk2", quantity: 107});
arr.push({product: "chocolate", quantity: 105});
arr.push({product: "cheese", quantity: 100});

let element = arr.find(x => x.product === "sugar"); // Use strict equality operator (===)

arr.forEach(obj => {
    if(obj.product === 'milk'){ // Use strict equality operator (===)
        obj.quantity += 100056;
    }
    return obj;
});

console.log(arr);
let n = 703.2168
console.log(n.toFixed(2));