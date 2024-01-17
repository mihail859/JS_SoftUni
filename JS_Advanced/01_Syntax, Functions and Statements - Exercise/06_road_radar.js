function radar(speed, area){
    let areasLimit = {
        motorway: 130,
        interstate: 90,
        city: 50,
        residential: 20
    }
    let limit = areasLimit[area]
    if (speed > limit){
        let status;
        let upSpeed = speed - limit 
        if (upSpeed <= 20){
            status = 'speeding'
        }else if (upSpeed <= 40){
            status = 'excessive speeding'
        }else{
            status = 'reckless driving'
        }
        console.log(`The speed is ${upSpeed} km/h faster than the allowed speed of ${limit} - ${status}`)
        
    }else{
        console.log(`Driving ${speed} km/h in a ${limit} zone`);
    }
}

radar(40, 'city')
/*`The speed is {difference} km/h faster than the allowed speed of {speed limit} - {status}`
For speeding up to 20 km/h over the limit, the status should be speeding.
For speeding up to 40 km/h over the limit, the status should be excessive speeding.
For anything else, status should be reckless driving.
*/