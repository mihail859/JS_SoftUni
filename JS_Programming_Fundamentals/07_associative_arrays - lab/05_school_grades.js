function storeGrades(register){

    let studentList = {}

    for (let row of register){
        let info = row.split(" ")
        let student = info.shift()
        let grades = info.slice(0).map(Number)
        
        if (!studentList.hasOwnProperty(student)){
            studentList[student] = grades
        }else{
            for (let grade of grades){
                studentList[student].push(grade)
            }
        }
    }

    let keysSorted = Object.keys(studentList).sort((a,b) => a.localeCompare(b))
    
    for (let key of keysSorted){
        let gradesStudent = studentList[key]
        let gradesCount = gradesStudent.length

        let avgGrades = gradesStudent.reduce((sum , a) => sum+=a, 0) / gradesCount
        console.log(`${key}: ${avgGrades.toFixed(2)}`)
    }
}

storeGrades(['Lilly 4 6 6 5',
'Tim 5 6',
'Tammy 2 4 3',
'Tim 6 6']
)