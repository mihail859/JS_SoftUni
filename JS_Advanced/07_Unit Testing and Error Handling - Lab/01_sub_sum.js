function sumElementsInRange(arr, start_index, end_index){
    if (Array.isArray(arr)){
        return NaN;
    }
    
};

console.log(sumElementsInRange([10, 20, 30, 40, 50, 60], 3, 300));
console.log(sumElementsInRange([1.1, 2.2, 3.3, 4.4, 5.5], -3, 1));
console.log(sumElementsInRange([10, 'twenty', 30, 40], 0, 2));
console.log(sumElementsInRange([], 1, 2));
console.log(sumElementsInRange('text', 0, 2));