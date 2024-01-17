function orderNumbers(arr){
    let arrCopy = []

    for (let n of arr){
        if (n >= 0){
            arrCopy.push(n)
        }else{
            arrCopy.unshift(n)
        }
    }   
    arrCopy.forEach(el => {
        console.log(el)
    })

}
orderNumbers([7, -2, 8, 9])
console.log("--//--")
orderNumbers([3, -2, 0, -1])