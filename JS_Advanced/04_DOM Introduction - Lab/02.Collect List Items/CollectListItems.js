function extractText() {
    let itemsList = document.getElementsByTagName('li')
    let result = []
    for (let el of itemsList){
        result.push(el.textContent)
    }   
    let textAreaField = document.getElementById('result');
    textAreaField.textContent = result.join("\n")
}