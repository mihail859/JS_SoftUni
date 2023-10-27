function calculate(input){
    let figure = input[0]
    let area = null
    if (figure === "square"){
        let a = Number (input[1])
        area = a * a
    }
    else if (figure === "rectangle"){
        let a1 = Number (input[1])
        let b1 = Number (input[2])
        area = a1 * b1
    }
    else if (figure === "circle"){
        let r = Number (input[1])
        area = Math.PI * Math.pow(r, 2)
    }
    else{
        let a2 = Number (input[1])
        let ha2 = Number (input[2])
        area = (a2 * ha2) / 2
    }
    console.log(area.toFixed(3))
}
calculate(["square", "5"])
calculate(["rectangle",
"7",
"2.5"])
calculate(["circle",
"6"])
calculate(["triangle",
"4.5",
"20"])
