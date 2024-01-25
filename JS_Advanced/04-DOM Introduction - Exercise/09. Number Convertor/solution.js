function solve() {

    const firstElementToAdd = document.createElement('option')
    const secondElementToAdd = document.createElement('option')

    firstElementToAdd.value = 'binary';
    secondElementToAdd.value = 'hexadecimal';

    firstElementToAdd.innerHTML = 'Binary';
    secondElementToAdd.innerHTML = 'Hexadecimal';

    const menuOptions = document.getElementById('selectMenuTo');
    menuOptions.appendChild(firstElementToAdd);
    menuOptions.appendChild(secondElementToAdd);

    document.getElementsByTagName('button')[0].addEventListener('click', onclick)

    function onclick(){
        const numberInput = document.getElementById('input')
        const result = document.getElementById('result');

        if (menuOptions.value === 'binary'){
            result.value = Number (numberInput.value).toString(2);
        }else{
            result.value = Number (numberInput.value).toString(16).toUpperCase()
        }
    }
}