function isPositive(num1, num2, num3){
    let isPositiveBool = false
    if (num1 > 0 & num2 > 0 & num3 > 0){
        isPositiveBool = true
    }
    else if ((num1 < 0 & num2 < 0 & num3 > 0) | (num1 < 0 & num3 < 0 & num2 > 0) | (num2 < 0 & num3 < 0 & num1 > 0)){
        isPositiveBool = true
    }   
    if (isPositiveBool){
        console.log("Positive")
    }
    else{
        console.log("Negative")
    }
}

isPositive( 5,
    12,
   -15
   )
isPositive(-6,
    -12,
     14
    )   