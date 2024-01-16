function sameNumbersCheck(number){
    let arr = number.toString().split("")
    let sum = arr.map(Number).reduce((sum, a) => sum += a, 0)
    let newSet = new Set(arr)
    if (newSet.size === 1){
        console.log('true');
        console.log(sum)
    }else{
        console.log('false')
        console.log(sum)
    }
}

sameNumbersCheck(2222222)
console.log("--//--")
sameNumbersCheck(1234)