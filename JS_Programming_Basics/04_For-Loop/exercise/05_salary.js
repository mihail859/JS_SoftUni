function calculateForfeit(input){
    let wrongTabsFeeArray = {
        "Facebook": 150,
	    "Instagram": 100,
	    "Reddit": 50
    }
    let openTabs = Number (input[0])
    let salary = Number (input[1])
    let isSalaryLeft = true
    for (let i = 2; i <= openTabs + 2; i++){
        let currentTabOpen = input[i]
        if (wrongTabsFeeArray.hasOwnProperty(currentTabOpen)){
            salary -= wrongTabsFeeArray[currentTabOpen]
        }
        if(salary <= 0){
            console.log("You have lost your salary.")
            isSalaryLeft = false
            break
        }
    }
    if (isSalaryLeft){
        console.log(salary)
    }   

}
calculateForfeit(["10",
"750",
"Facebook",
"Dev.bg",
"Instagram",
"Facebook",
"Reddit",
"Facebook",
"Facebook"])

calculateForfeit(["3",
"500",
"Github.com",
"Stackoverflow.com",
"softuni.bg"])

calculateForfeit(["3",
"500",
"Facebook",
"Stackoverflow.com",
"softuni.bg"])
