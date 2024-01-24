function solve() {
   document.querySelector('#btnSend').addEventListener('click', onClick);
   const textAreaQuery = document.querySelector('#inputs>textarea');
   const divBestRestaurant = document.querySelector('#bestRestaurant>p');
   const divBestWorkers = document.querySelector('#workers>p');

   

   function onClick () {
      let info = JSON.parse(textAreaQuery.value)
      
      let restaurants = {};
      let workersInformationASDict = {};

      for (let data of info){
         
         let [restaurantName, employeesDataToSplit] = data.split(" - ")
         let employeesList = employeesDataToSplit.split(", ")
         
         for (let el of employeesList){
            let [employeeName, salary] = el.split(" ")
            salary = Number (salary)
            workersInformationASDict[employeeName]   = salary             

         }

         if (!restaurants.hasOwnProperty(restaurantName)){
            restaurants[restaurantName] = workersInformationASDict
         }
         else{
            Object.assign(restaurants[restaurantName], workersInformationASDict)
         }


         workersInformationASDict = {};
      }
      
      let averageSalaryObj = {}

      for (let rest in restaurants){
         let salary = 0;
         let workersCount = 0;

         for (let worker in restaurants[rest]){
            salary += restaurants[rest][worker];
            workersCount++;
         }

         averageSalaryObj[rest] = (salary / workersCount).toFixed(2)

      }

      let sorted = Object.entries(averageSalaryObj).sort((a, b) => b[1] - a[1])
      let workersFromTheBestRestaurant = restaurants[sorted[0][0]]
      let sortedWorkersFromTheBestRestaurant = Object.entries(workersFromTheBestRestaurant).sort((a, b) => Number(b[1]) - Number(a[1]))

      let objFromEntries = Object.fromEntries(sortedWorkersFromTheBestRestaurant)

      let bestSalary = Math.max(...Object.values(objFromEntries))
      
      divBestRestaurant.textContent = `Name: ${sorted[[0]][0]} Average Salary: ${sorted[[0]][1]} Best Salary: ${bestSalary.toFixed(2)}`

      let workersInfo = ''
      for (let key in objFromEntries){
         workersInfo += `Name: ${key} With Salary: ${objFromEntries[key]} `
      }

      let trimmedInfo = workersInfo.trim()
      divBestWorkers.textContent = trimmedInfo

   }
}