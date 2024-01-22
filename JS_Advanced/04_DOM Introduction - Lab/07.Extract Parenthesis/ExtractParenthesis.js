function extract(content) {
    let toExtractText = document.getElementById(`${content}`)
    let text1 = toExtractText.textContent
    
    let pattern = /\([A-Za-z ]+\)/gm

    let result;
    let towns = []
    while ((result = pattern.exec(text1)) !== null){
        
        
        towns.push(result[0].substring(1, result[0].length - 1))
    }
    
    return towns.join("; ")
    
}