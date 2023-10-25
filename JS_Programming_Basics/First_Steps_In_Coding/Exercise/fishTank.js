
function calculate(input){
    let lenght = Number (input[0])
    let width = Number (input[1])
    let height = Number (input[2])
    let percent = Number (input[3])

    let volume = lenght * width * height
    let volumeInLitres = volume / 1000
    let neededLitres = volumeInLitres * (1-(percent/100))
    console.log(neededLitres)
}

calculate(
    ["105 ",
    "77 ",
    "89 ",
    "18.5 "]
    

)