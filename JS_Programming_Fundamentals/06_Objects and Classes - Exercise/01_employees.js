function employeesShow(arr){
    let obj = {}
    for (let name of arr){
        obj[name] = name.length
    }
    for (let [nameEmployee, number] of Object.entries(obj)){
        console.log(`Name: ${nameEmployee} -- Personal Number: ${number} `)
    }   
}
employeesShow([
    'Silas Butler',
    'Adnaan Buckley',
    'Juan Peterson',
    'Brendan Villarreal'
    ]
    )