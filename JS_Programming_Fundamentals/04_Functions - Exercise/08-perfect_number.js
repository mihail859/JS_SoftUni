function isPerfectNumber(number){
    let sumDivisors = 0 
    
    for (let i = 1; i < number; i++){
        if (number % i === 0){
            sumDivisors+= i
        }
    }
    if (sumDivisors === number){
        console.log("We have a perfect number!")
    }
    else{
        console.log("It's not so perfect.")
    }
}

isPerfectNumber(6)
console.log("--//--")
isPerfectNumber(28)
console.log("--//--")
isPerfectNumber(1236498)