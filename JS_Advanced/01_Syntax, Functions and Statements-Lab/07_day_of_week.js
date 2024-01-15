function showDay(day){
    const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday","Sunday"];
    if (days.includes(day)){
        console.log(days.indexOf(day) + 1)
    }else{
        console.log(`error`)
    }
}

showDay('Monday')
showDay('Invalid')