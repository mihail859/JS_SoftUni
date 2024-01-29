function attachEventsListeners() {
    const inputUnits = document.getElementById('inputUnits');
    const convertBtn = document.getElementById('convert');
    const outputUnits = document.getElementById('outputUnits');
    const outputField = document.getElementById('outputDistance');

    convertBtn.addEventListener('click', convert);

    let convertObj = {
        "km"  : 1000,
        "m"   : 1,
        "cm"  : 0.01,
        "mm"  : 0.001,
        "mi"  : 1609.34,
        "yrd" : 0.9144,
        "ft"  : 0.3048,
        "in"  : 0.0254
    }

    function convert(){
        let inputNumber = Number (document.getElementById('inputDistance').value) ;
        let selectUnit = inputUnits.options[inputUnits.selectedIndex].value
        let outputUnit = outputUnits.options[outputUnits.selectedIndex].value
        
        let inMeters = convertObj[selectUnit] * inputNumber
        let output = inMeters / convertObj[outputUnit]

        outputField.value = output
        
    }
}