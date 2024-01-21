function colorize() {
    let rows = Array.from(document.querySelectorAll('table tr'))
    
    let idx = 0
    for (let row of rows){
        idx++;
        if (idx % 2 === 0){
            row.style.background = 'teal'
        }
    }

}    