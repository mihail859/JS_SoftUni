function printResult(input){
    let numberOfJudges = Number (input[0])

    let currentGradesSum = 0
    let currentGradesCount = 0

    let totalFinalPresentationScore = 0
    let totalFinalPresentationCount = 0

    let idx = 1
    while (true){
        courseName = input[idx]
        if (courseName === "Finish"){
            break
        }
        for (let j = 0; j < numberOfJudges; j++){
            idx++
            let currentGrade = Number (input[idx])
            currentGradesSum += currentGrade
            currentGradesCount++;
        }
        let avg = currentGradesSum / currentGradesCount
        console.log(`${courseName} - ${avg.toFixed(2)}.`)

        totalFinalPresentationScore += avg
        totalFinalPresentationCount++;
        currentGradesSum = 0
        currentGradesCount = 0
        idx++

    }
    let finalAvgScore = totalFinalPresentationScore  / totalFinalPresentationCount
    console.log(`Student's final assessment is ${finalAvgScore.toFixed(2)}.`)
    
}

printResult(["2",
"While-Loop",
"6.00",
"5.50",
"For-Loop",
"5.84",
"5.66",
"Finish"])

printResult(["3",
"Arrays",
"4.53",
"5.23",
"5.00",
"Lists",
"5.83",
"6.00",
"5.42",
"Finish"])

printResult(["2",
"Objects and Classes",
"5.77",
"4.23",
"Dictionaries",
"4.62",
"5.02",
"RegEx",
"2.88",
"3.42",
"Finish"])
