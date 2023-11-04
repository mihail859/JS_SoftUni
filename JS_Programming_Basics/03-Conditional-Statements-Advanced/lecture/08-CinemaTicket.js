function calculate(input){
    /*Monday	Tuesday	Wednesday	Thursday	Friday	Saturday	Sunday
        12	        12	    14	    14	        12	       16	     16
*/
    let day = input[0]
    let price = ""
    switch(day){
        case "Monday":
        case "Tuesday":
        case "Friday":
            price = "12"
            break
        case "Wednesday":
        case "Thursday":
            price = "14"
            break
        case "Saturday":
        case "Sunday":
            price = "16" 
            break

    }

    console.log(price)
}

calculate(["Monday"])
calculate(["Friday"])
calculate(["Sunday"])