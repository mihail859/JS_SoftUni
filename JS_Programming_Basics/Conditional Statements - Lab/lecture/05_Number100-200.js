function categoryNumber(input){
    let inputNumber = Number (input[0])
    if (inputNumber < 100){
        console.log("Less than 100")
    }
    else if(inputNumber > 200){
        console.log("Greater than 200")
    }
    else{
        console.log("Between 100 and 200")
    }
}

categoryNumber(["95"])
categoryNumber(["120"])
categoryNumber(["210"])