function addItem() {
    const ulCollection = document.getElementById("items");

    let inputToAdd = document.getElementById('newItemText')
    if (inputToAdd.value === ''){
        return 
    }

    let elementToAdd = document.createElement('li')
    elementToAdd.textContent = inputToAdd.value
    ulCollection.appendChild(elementToAdd)

    inputToAdd.value = ""
}