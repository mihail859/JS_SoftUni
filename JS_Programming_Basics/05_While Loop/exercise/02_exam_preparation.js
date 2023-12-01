function prepExam(input){
    let numberBadGrades = Number(input[0])

    let badGrades = 0
    let problems = 0
    let lastProblem = ""
    let countProblems = 0
    let index = 1

    let isFailed = false
    while (true){
        let exam = input[index]

        if (exam === "Enough"){
            break
        }
        let score = Number (input[index + 1])

        if (score <= 4){
            badGrades++;
            lastProblem = exam
            problems += score
            countProblems++
            if (badGrades === numberBadGrades){
                console.log(`You need a break, ${badGrades} poor grades.`)
                isFailed = true
                break
            }
        }
        else{
            lastProblem = exam
            problems += score
            countProblems++
        }
        index += 2
    }

    if (!isFailed){
        let averageScore = problems / countProblems
        console.log(`Average score: ${averageScore.toFixed(2)}`)
        console.log(`Number of problems: ${countProblems}`)
        console.log(`Last problem: ${lastProblem}`)
    }
}

prepExam(["3",
"Money",
"6",
"Story",
"4",
"Spring Time",
"5",
"Bus",
"6",
"Enough"])




prepExam(["2",
"Income",
"3",
"Game Info",
"6",
"Best Player",
"4"])
