function aggregate(arr) {
    let obj = {
        sum: (numbers) => numbers.reduce((sum, a) => sum += a, 0),
        sumInverse: (numbers) => numbers.reduce((sum, a) => sum += 1/a, 0),
        toStr: (numbers) => numbers.map(a => a.toString()),
        concatNumbers: (numbers) => obj.toStr(numbers).join("") // Fix: Use obj.toStr
    };

    // Applying the functions to the array
    console.log(obj.sum(arr));
    console.log(obj.sumInverse(arr));
    console.log(obj.concatNumbers(arr));
}

// Example usage
aggregate([1, 2, 3]);
console.log("--//--//--/");
aggregate([2, 4, 8, 16]);
