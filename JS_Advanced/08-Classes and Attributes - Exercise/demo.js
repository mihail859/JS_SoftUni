function add(arr) {
    const departments = {}
    for (let data of arr) {

        let departmentName = data[3]
        let employeeObj = { 'name': data[0], 'salary': data[1], 'position': data[2] }
        if (!departments.hasOwnProperty(departmentName)) {
            departments[departmentName] = []
        }
        departments[departmentName].push(employeeObj)

    }
    let depSalariesTotal = {}
    for (let [key, value] of Object.entries(departments)) {
        let total = 0
        for (let i = 0; i < value.length; i++) {
            total += value[i].salary
        }
        depSalariesTotal[key] = total
    }
    
    
    for (let [key, value] of Object.entries(depSalariesTotal)){
        depSalariesTotal[key] = value / departments[key].length
    }
    let sorted = Object.entries(depSalariesTotal).sort((a ,b) => b[1] - a[1])
    let dep = sorted[0][0]
    let avg_salary  = sorted[0][1]

    let employeesFinalSort = departments[dep].sort((a,b) =>{
        if (b.salary !== a.salary){
            return b.salary - a.salary
        }
        return a.name.localeCompare(b.name)
    });
    console.log(employeesFinalSort);

}




add([
    ["Stanimir", 9000, "engineer", "Sales"],
    ["Stanimir", 4000, "engineer", "Sales"],
    ["Stanimir", 8000, "engineer", "Sales"],
    ["Stanimir", 1000, "engineer", "uction"],
    ["Stanimir", 2000, "engineer", "uction"],
    ["Stanimir", 9000, "engineer", "Sales"],
    ["Stanimir1", 1, "engineer", "Shoes"],
    ["Atanimir2", 80005, "engineer", "Shoes"],
    ["Stanimir3", 40002, "engineer", "Shoes"],
    ["Stanimir4", 80005, "engineer", "Shoes"]]);
