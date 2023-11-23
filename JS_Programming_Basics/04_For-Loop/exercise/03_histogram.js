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
    let totalNumbers = n
    let p1Percent = pArray.p1 / totalNumbers * 100
    let p2Percent = pArray.p2 / totalNumbers * 100
    let p3Percent = pArray.p3 / totalNumbers * 100
    let p4Percent = pArray.p4 / totalNumbers * 100
    let p5Percent = pArray.p5 / totalNumbers * 100

    console.log(`${p1Percent.toFixed(2)}%`)
    console.log(`${p2Percent.toFixed(2)}%`)
    console.log(`${p3Percent.toFixed(2)}%`)
    console.log(`${p4Percent.toFixed(2)}%`)
    console.log(`${p5Percent.toFixed(2)}%`)
    
}
histogramFunction(["3",
"1",
"2",
"999"])
histogramFunction(["7",
"800",
"801",
"250",
"199",
"399",
"599",
"799"])


