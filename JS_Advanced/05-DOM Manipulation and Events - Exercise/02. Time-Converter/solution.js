function attachEventsListeners() {
    let daysInput = document.getElementById('days');
    let hoursInput = document.getElementById('hours');
    let minutesInput = document.getElementById('minutes');
    let secondsInput = document.getElementById('seconds');

    document.getElementById('daysBtn').addEventListener('click', convert)
    document.getElementById('hoursBtn').addEventListener('click', convert)
    document.getElementById('minutesBtn').addEventListener('click', convert)
    document.getElementById('secondsBtn').addEventListener('click', convert)

    function convert(event) {

        let days = 0
        let hours = 0;
        let minutes = 0;
        let sec = 0

        let input = event.target.parentElement
        let startConvert = input.getElementsByTagName('label')[0].textContent
        let value = input.getElementsByTagName('input')[0].value

        if (startConvert.includes('Days')) {
            days = Number (value);
            hours = days * 24
            minutes = hours * 60
            sec = minutes * 60
        } else if (startConvert.includes('Hours')) {
            hours = Number (value);
            days = hours / 24
            minutes = hours * 60
            sec = minutes * 60
        } else if (startConvert.includes('Minutes')) {
            minutes = Number (value)
            sec = minutes * 60
            hours = minutes / 60
            days = hours / 24
        } else if (startConvert.includes('Seconds')) {
            sec = Number (value)
            minutes = sec / 60
            hours = minutes / 60
            days = hours / 24
        }
        daysInput.value = days
        hoursInput.value = hours
        minutesInput.value = minutes
        secondsInput.value = sec
    }

}