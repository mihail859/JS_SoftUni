window.addEventListener("load", solve);

function solve() {
    let snowmanName = document.getElementById('snowman-name')
    let height = document.getElementById('snowman-height')
    let location = document.getElementById('location')
    let creator = document.getElementById('creator-name')
    let specialAttribute = document.getElementById('special-attribute')

    let btnAdd = document.querySelector('.add-btn')
    btnAdd.addEventListener('click', addToSnowmanPreview)

    function createElementsFunction(typeElement, textContentElement, className){
      let createdElement = document.createElement(typeElement)
      if (textContentElement){
          createdElement.textContent = textContentElement
      }
      
      if (className){
          createdElement.classList.add(className)
      }
      return createdElement;
  }
    function addToSnowmanPreview(e){
      e.preventDefault();
      if (snowmanName.value == '' ||
          height.value == '' ||
          location.value == '' ||
          creator.value == '' ||
          specialAttribute.value == ''){
            return;
      }
      let  mainElement = document.getElementById('hero');
      let ulShowSnowMan = document.querySelector('.snow-list')
      let ulSnowmanPreview = document.querySelector('.snowman-preview')

      let liElement = createElementsFunction('li', false, 'snowman-info')
      let article1 = createElementsFunction('article', false, false)

      article1.appendChild(createElementsFunction('p', `Name: ${snowmanName.value}`, false))
      article1.appendChild(createElementsFunction('p', `Height: ${height.value}`, false))
      article1.appendChild(createElementsFunction('p', `Location: ${location.value}`, false))
      article1.appendChild(createElementsFunction('p', `Creator: ${creator.value}`, false))
      article1.appendChild(createElementsFunction('p', `Attribute: ${specialAttribute.value}`, false))


      let divBtnContainer = createElementsFunction('div', false, 'btn-container')
      let btnEdit = createElementsFunction('button', "Edit", 'edit-btn')
      let btnNext = createElementsFunction('button', "Next", 'next-btn');

      let btnBack = createElementsFunction('button', "Back", 'back-btn')

      let liSnowManContent = createElementsFunction('li', false, 'snowman-content')
      let btnSend = createElementsFunction('button', 'Send', 'send-btn');
      
      let article2 = createElementsFunction('article', false, false);
      article2.appendChild(createElementsFunction('p', `Name: ${snowmanName.value}`, false))
      article2.appendChild(createElementsFunction('p', `Height: ${height.value}`, false))
      article2.appendChild(createElementsFunction('p', `Location: ${location.value}`, false))
      article2.appendChild(createElementsFunction('p', `Creator: ${creator.value}`, false))
      article2.appendChild(createElementsFunction('p', `Attribute: ${specialAttribute.value}`, false))
      article2.appendChild(btnSend)
      liSnowManContent.appendChild(article2)


      divBtnContainer.appendChild(btnEdit);
      divBtnContainer.appendChild(btnNext);

      liElement.appendChild(article1)
      liElement.appendChild(divBtnContainer)
      ulSnowmanPreview.appendChild(liElement)

      let objValues = {
        "snowmanName": snowmanName.value,
        "height": height.value,
        "location": location.value,
        "creator": creator.value,
        "specialAttribute": specialAttribute.value
      }
      btnEdit.addEventListener('click', editTheData);
      btnNext.addEventListener('click', showYourSnowMan);
      btnSend.addEventListener('click', sendTheData);

      btnBack.addEventListener('click', reloadThePage)

      function editTheData(){
        snowmanName.value = objValues['snowmanName']
          height.value = objValues["height"]
          location.value = objValues["location"]
          creator.value = objValues["creator"]
          specialAttribute.value = objValues["specialAttribute"]
          btnAdd.disabled = false;
          ulSnowmanPreview.textContent = ''
      }

      function showYourSnowMan(){
        ulSnowmanPreview.textContent = ''
        ulShowSnowMan.appendChild(liSnowManContent)
      }

      function sendTheData(){
        
        mainElement.remove();
        document.querySelector('body').appendChild(btnBack)
        document.getElementById('back-img').removeAttribute('hidden')
      }
      function reloadThePage(){
        window.location.reload();

      }


      document.querySelector('form').reset();
      btnAdd.disabled = true;
      
    }
}
