function workingHours(input){
    let hour = Number (input[0])
    let day = input[1]
 
    let workDays = ["Monday",	"Tuesday",	"Wednesday", "Thursday", "Friday" ,	"Saturday"]

    if (workDays.includes(day) && (hour>=10 && hour <= 18)){
        console.log("open")
    }
    else{
        console.log("closed")
    }
}

workingHours(["11",
"Monday"])

workingHours(["19",
"Friday"])

workingHours(["11",
"Sunday"])
