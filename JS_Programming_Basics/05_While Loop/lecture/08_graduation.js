function graduationScore(input){
    let student = input[0]

    let gradeSum = 0
    let gradesCount = 0
    let index = 1
    let classNumber = 0

    let timesExcluded  = 0
    while (true){
        let currentGrade = Number (input[index])
        if (classNumber === 12){
            let avgScore = gradeSum / gradesCount
            console.log(`${student} graduated. Average grade: ${avgScore.toFixed(2)}`)
            break
        }


        else if (currentGrade >= 4 && classNumber < 12){
            gradeSum += currentGrade
            gradesCount++
            classNumber++
        }

        else{
            timesExcluded++
            if (timesExcluded == 2){
                console.log(`${student} has been excluded at ${classNumber + 1} grade`)
                break
            }
        }




        index++;
    }
}
graduationScore(["Gosho", 
"5",
"5.5",
"6",
"5.43",
"5.5",
"6",
"5.55",
"5",
"6",
"6",
"5.43",
"5"])

graduationScore(["Mimi", 
"5",
"6",
"5",
"6",
"5",
"6",
"6",
"2",
"3"])

