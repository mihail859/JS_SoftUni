class Company{
    constructor(){
        this.departments = {}; 
    }
    

    addEmployee(...args){
        let inputErrors = args.some(x=> x === null || x === undefined || x === "" ) || args[1] < 0
        if(inputErrors){
            throw new Error("Invalid input!")
        }

        
        let employeeObj = {'name': args[0], 'salary': args[1], 'position': args[2]}
        let depName = args[3]
        if(!this.departments.hasOwnProperty(depName)){
            this.departments[depName] = []
        }
        this.departments[depName].push(employeeObj); 

        return `New employee is hired. Name: ${args[0]}. Position: ${args[2]}`
    };

    bestDepartmentShow(){
        let depSalariesTotal = {}
        for (let [key, value] of Object.entries(this.departments)) {
            let total = 0
            for (let i = 0; i < value.length; i++) {
                total += value[i].salary
            }
            depSalariesTotal[key] = total
        }
        for (let [key, value] of Object.entries(depSalariesTotal)){
            depSalariesTotal[key] = value / this.departments[key].length
        }
        let sorted = Object.entries(depSalariesTotal).sort((a ,b) => b[1] - a[1])
        return sorted[0]
    }

    bestDepartment(){
        let best = this.bestDepartmentShow()
        let bestDepName = best[0];
        let bestDepAvgSalary = best[1]
        let employeesFinalSort = this.departments[bestDepName].sort((a,b) =>{
            if (b.salary !== a.salary){
                return b.salary - a.salary
            }
            return a.name.localeCompare(b.name)
        });

        let arrReturn = []
        arrReturn.push(`Best Department is: ${bestDepName}`)
        arrReturn.push(`Average salary: ${bestDepAvgSalary.toFixed(2)}`)

        for (let e of employeesFinalSort){
            arrReturn.push(`${e['name']} ${e['salary']} ${e['position']}`)
        }
        return arrReturn.join('\n');
    }
}



let c = new Company();
c.addEmployee("Stanimir", 2000, "engineer", "Construction");
c.addEmployee("Pesho", 1500, "electrical engineer", "Construction");
c.addEmployee("Slavi", 500, "dyer", "Construction");
c.addEmployee("Stan", 2000, "architect", "Construction");
c.addEmployee("Stanimir", 1200, "digital marketing manager", "Marketing");
c.addEmployee("Pesho", 1000, "graphical designer", "Marketing");
c.addEmployee("Gosho", 1350, "HR", "Human resources");
console.log(c.bestDepartment());
