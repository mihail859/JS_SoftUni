function employees(input){
    let employeesList = {}
    for (let row of input){
        let [company, id] = row.split(" -> ")
        if (!employeesList.hasOwnProperty(company)){
            employeesList[company] = []
        }
        if (employeesList[company].includes(id)){
            continue
        }
        employeesList[company].push(id)
    }
    let sortedKeys = Object.keys(employeesList).sort((a, b) => a.localeCompare(b))
    for (let c of sortedKeys){
        console.log(c)
        let employeesArr = employeesList[c]
        employeesArr.forEach(element => {
            console.log(`-- ${element}`)
        });
    }
}


employees([
    'SoftUni -> AA12345',
    'SoftUni -> CC12344',
    'Lenovo -> XX23456',
    'SoftUni -> AA12345',
    'Movement -> DD11111'
    ]
    )