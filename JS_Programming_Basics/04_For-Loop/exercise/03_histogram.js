function histogramFunction(input){
    let n = Number (input[0])

    let pArray = {
        "p1": 0, 
        "p2": 0, 
        "p3": 0, 
        "p4": 0,
        "p5": 0
    }
    for (let i = 1; i<=n; i++){
        let currentNumber = Number (input[i])
        if(currentNumber<200){
            pArray.p1 +=1 
        }
        else if(currentNumber < 400){
            pArray.p2 += 1
        }
        else if(currentNumber < 600){
            pArray.p3 += 1
        }
        else if (currentNumber < 800){
            pArray.p4 += 1
        }
        else{
            pArray.p5 += 1
        }
    }
    console.log(pArray)
}
histogramFunction(["3",
"1",
"2",
"999"])
