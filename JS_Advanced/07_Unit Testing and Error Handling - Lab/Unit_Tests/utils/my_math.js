function sum(arr){
    let result = 0
    for (let i = 0; i < arr.length; i++){
        result += Number(arr[i])
    }

    return result
}
function product(arr){
    let result = 1
    for (let i = 0; i < arr.length; i++){
        result *= Number(arr[i])
    }

    return result
}

module.exports = {sum, product}