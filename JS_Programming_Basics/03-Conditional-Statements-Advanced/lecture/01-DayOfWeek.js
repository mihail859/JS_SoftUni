function dayOfTheWeek(input){
    let day = input[0]

    switch (day){
        case "1":
            console.log("Monday")
            break
        case "2":
            console.log("Tuesday")
            break
        case "3":
            console.log("Wednesday")  
            break
        case "4":
            console.log("Thursday")
            break
        case "5":
            console.log("Friday")
            break
        case "6":
            console.log("Saturday")   
            break
        case "7":
            console.log("Sunday")    
            break
        default:
            console.log("Error")  
            break       
    }
}
dayOfTheWeek(["1"])
dayOfTheWeek(["2"])
dayOfTheWeek(["3"])
dayOfTheWeek(["4"])
dayOfTheWeek(["5"])
dayOfTheWeek(["6"])
dayOfTheWeek(["7"])
dayOfTheWeek(["11"])