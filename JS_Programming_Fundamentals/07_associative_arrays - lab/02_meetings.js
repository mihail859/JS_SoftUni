function manageMeetings(arrayInput){
    let meetingList = {}

    for (let row of arrayInput){
        let [day, name] = row.split(" ")
        if (meetingList.hasOwnProperty(day)){
            console.log(`Conflict on ${day}!`)
        }
        else{
            meetingList[day] = name
            console.log(`Scheduled for ${day}`)
        }
    }   
    for (let [key, value] of Object.entries(meetingList)){
        console.log(`${key} -> ${value}`)
    }
}
manageMeetings(['Monday Peter',
'Wednesday Bill',
'Monday Tim',
'Friday Tim']
)