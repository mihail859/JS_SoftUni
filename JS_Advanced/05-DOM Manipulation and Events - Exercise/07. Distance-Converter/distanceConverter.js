function attachEventsListeners() {
    const inputUnits = document.getElementById('inputUnits');
    const convertBtn = document.getElementById('convert');
    const outputUnits = document.getElementById('outputUnits');
    convertBtn.addEventListener('click', convert)

    function convert(){
        let inputNumber = document.getElementById('inputDistance').value ;
        let selectUnit = inputUnits.options[inputUnits.selectedIndex].value
        let outputUnit = outputUnits.options[outputUnits.selectedIndex].value
        
        
    }
}