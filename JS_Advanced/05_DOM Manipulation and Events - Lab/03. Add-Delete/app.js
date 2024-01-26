function addItem() {
    const ulList  = document.getElementById('items');
    const inputField = document.getElementById('newItemText');

    if (inputField.value === ""){
        return 
    }

    const newElement = document.createElement('li');
    newElement.textContent = inputField.value;
    ulList.appendChild(newElement);

    let deleted = document.createElement('a');
    deleted.href = '#';
    deleted.textContent = '[Delete]';
    newElement.appendChild(deleted);

    deleted.addEventListener('click', remove);

    function remove(){
        newElement.remove()
    }


    inputField.value = '';

}