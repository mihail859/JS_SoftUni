function solve() {
    const generateBtn = document.querySelector('#exercise>button:first-of-type');
    const buyBtn = document.querySelector('#exercise>button:last-of-type');
    const textAreaGenerate = document.querySelector('#exercise>textarea:first-of-type');
    const boughtFurniture = document.querySelector('#exercise>textarea:last-of-type');
    const table = document.querySelector('.table>tbody')
    
    

    generateBtn.addEventListener('click', generateFurniture);

    function generateFurniture(){
      
      let arrayWithObjects = JSON.parse(textAreaGenerate.value);
      arrayWithObjects.forEach(element => {
        let row = document.createElement('tr');
        let tdForImg = document.createElement('td');
        let imgToAdd = document.createElement('img');
        imgToAdd.setAttribute('src', element.img);

        tdForImg.appendChild(imgToAdd);
        row.appendChild(tdForImg);

        let tdForName = document.createElement('td');
        let pForName = document.createElement('p');
        pForName.textContent = element.name;

        tdForName.appendChild(pForName);
        row.appendChild(tdForName);

        let tdForPrice =  document.createElement('td');
        let pForPrice = document.createElement('p');
        pForPrice.textContent = element.price;
        tdForPrice.appendChild(pForPrice);
        row.appendChild(tdForPrice);

        let tdForDecFactor = document.createElement('td');
        let pForDecFactor = document.createElement('p');
        pForDecFactor.textContent = element.decFactor;
        tdForDecFactor.appendChild(pForDecFactor);
        row.appendChild(tdForDecFactor);

        let tdForCheck = document.createElement('td');
        let checkBox = document.createElement('input');
        checkBox.setAttribute('type', 'checkbox');
        tdForCheck.appendChild(checkBox);
        row.appendChild(tdForCheck);

        table.appendChild(row)
      });
    }
}