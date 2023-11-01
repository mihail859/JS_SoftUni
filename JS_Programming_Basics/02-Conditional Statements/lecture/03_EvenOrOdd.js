function even_or_odd(input){
    let number = Number (input[0])

    if (number % 2 === 0){
        console.log("even")
    }
    else{
        console.log("odd")
    }
}

even_or_odd(["2"])
even_or_odd(["3"])