function sumElementsInRange(arr, start_index, end_index){
    if (!Array.isArray(arr)){
        return NaN;
    }
    const startIdx = start_index < 0 ? 0 : start_index
    const lastIdx = end_index > arr.length -1 ? arr.length - 1 : end_index;
    
    

    return arr.slice(startIdx, lastIdx + 1)
       .map(Number)
       .reduce((acc, num) => acc + num, 0)

};

console.log(sumElementsInRange([10, 20, 30, 40, 50, 60], 3, 300));
console.log(sumElementsInRange([1.1, 2.2, 3.3, 4.4, 5.5], -3, 1));
console.log(sumElementsInRange([10, 'twenty', 30, 40], 0, 2));
console.log(sumElementsInRange([], 1, 2));
console.log(sumElementsInRange('text', 0, 2));