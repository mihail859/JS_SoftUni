function solve(arrayInput){
    let oddPositionsNumbers = arrayInput.filter(function (n, index) {
        // Check if the index is odd
        return index % 2 !== 0;
    });
    let doubleNumbers = oddPositionsNumbers.map((n) => n*2)
    doubleNumbers.reverse()
    console.log(doubleNumbers.join(" "))
}

solve([10, 15, 20, 25])
console.log("--//--")
solve([3, 0, 10, 4, 7, 3])