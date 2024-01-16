function gcd_function(number1, number2) {
    let gcd = number1 % number2
    while (gcd !== 0){
        number1 = number2
        number2 = gcd % number1
        gcd = number1 % number2
    }
    console.log(number2);
}

gcd_function(15, 5)
gcd_function(2154, 458)