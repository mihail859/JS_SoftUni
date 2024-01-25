function generateReport() {
    const output = document.getElementById("output")

    const selectedBoxes = document.querySelectorAll('[type="checkbox"]')
    const arrayFromNodeWithCheckBoxes = Array.from(selectedBoxes);

    const result = []

    const tableRows = document.querySelectorAll('tbody tr');
    const arrayFromNodeWithTableRows = Array.from(tableRows)
    

    arrayFromNodeWithTableRows.forEach( row => {
        let current = {}
        Array.from(row.querySelectorAll('td')).forEach((x, i)=> {
            if (arrayFromNodeWithCheckBoxes[i].checked){
                current[arrayFromNodeWithCheckBoxes[i].name] = x.textContent
            }
        })
        result.push(current)
    })
        
    output.textContent = JSON.stringify(result)
    
}