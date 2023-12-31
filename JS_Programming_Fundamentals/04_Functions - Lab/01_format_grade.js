function showGrade(grade){
    let returningString;
    if (grade < 3.00){
        returningString = `Fail (2)`
    }
    else if(grade < 3.50){
        returningString = `Poor (${grade.toFixed(2)})`
    }
    else if (grade < 4.50){
        returningString = `Good (${grade.toFixed(2)})`
    }
    else if (grade < 5.50){
        returningString = `Very good (${grade.toFixed(2)})`
    }
    else{
        returningString = `Excellent (${grade.toFixed(2)})`
    }

    console.log(returningString)
}

showGrade(3.33)
showGrade(4.50)
showGrade(2.99)