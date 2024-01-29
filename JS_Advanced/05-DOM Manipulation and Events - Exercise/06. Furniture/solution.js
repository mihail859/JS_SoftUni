function solve() {
    const generateBtn = document.querySelector('#exercise>button:first-of-type');
    const buyBtn = document.querySelector('#exercise>button:last-of-type');
    const textAreaGenerate = document.querySelector('#exercise>textarea:first-of-type');
    const boughtFurniture = document.querySelector('#exercise>textarea:last-of-type');
    const table = document.querySelector('.table>tbody')
    
    

    generateBtn.addEventListener('click', generateFurniture);
    buyBtn.addEventListener('click', buy);

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

    function buy(){
      let boughtFurnitureArr = [];
      let totalPrice= 0;
      let avgDecFactor = 0;

      let checkBoxes = Array.from(table.querySelectorAll('tr>td>input[type="checkbox"]'))
      checkBoxes.forEach(checkBox => {
        if (checkBox.checked){
          let row = checkBox.parentElement.parentElement;
          let productName = row.querySelector('td:nth-child(2)>p').textContent
          let price = Number (row.querySelector('td:nth-child(3)>p').textContent)
          let decorationNumber = Number (row.querySelector('td:nth-child(4)>p').textContent)
          boughtFurnitureArr.push(productName)
          totalPrice += price
          avgDecFactor += decorationNumber
        }
      });

      boughtFurniture.textContent += `Bought furniture: ${boughtFurnitureArr.join(", ")}\n`
      boughtFurniture.textContent += `Total price: ${totalPrice.toFixed(2)}\n`
      boughtFurniture.textContent += `Average decoration factor: ${(avgDecFactor/boughtFurnitureArr.length)}`
    }
}