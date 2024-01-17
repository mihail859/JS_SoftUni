function calculate(steps, lenStepInMeters, speedKmPerHour) {
    let distance = steps * lenStepInMeters;
    let speedMetersInSec = speedKmPerHour / 3.6;
    let timeInSeconds = distance / speedMetersInSec;
    let stops = Math.floor(distance / 500);
    let totalTimeInSeconds = timeInSeconds + stops * 60;

    let hours = Math.floor(totalTimeInSeconds / 3600);
    let minutes = Math.floor((totalTimeInSeconds % 3600) / 60);
    let seconds = Math.round(totalTimeInSeconds % 60);

    let hoursToPrint = hours < 10 ? `0${hours}` : `${hours}`
    let minutesToPrint =  minutes < 10 ? `0${minutes}` : `${minutes}`
    let secondsToPrint = seconds < 10 ? `0${seconds}` : `${seconds}`

    console.log(`${hoursToPrint}:${minutesToPrint}:${secondsToPrint}`)
}

calculate(4000, 0.60, 5);
console.log("--//--");
calculate(2564, 0.70, 5.5);
