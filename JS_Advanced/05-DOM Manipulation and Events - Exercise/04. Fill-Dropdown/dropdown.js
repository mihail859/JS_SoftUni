function addItem() {
    const optionsSection = document.getElementById('menu');
    const text = document.getElementById('newItemText');
    const value = document.getElementById('newItemValue');

    let newOption = document.createElement('option');
    newOption.textContent = text.value
    newOption.value = value.value

    optionsSection.appendChild(newOption);

    text.value= "";
    value.value = "";
}