window.addEventListener('load', solve);

function solve() {
    let firstName = document.getElementById('first-name');
    let lastName = document.getElementById('last-name');
    let dateIn = document.getElementById('date-in');
    let dateOut = document.getElementById('date-out');
    let peopleCount = document.getElementById('people-count');

    let  values = {}
    

    let btnSubmitNext = document.getElementById('next-btn')
    btnSubmitNext.addEventListener('click', goToReservationSection)

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

    function goToReservationSection(event){
        event.preventDefault();
        if (firstName.value == '' || lastName.value == '' || dateIn.value == '' || dateOut.value == '' || peopleCount.value == '' || new Date(dateIn.value) >= new Date(dateOut.value)){
            return;
        }
        let confirmedList = document.querySelector('.confirm-list')
        

        
        let  ulToAppendInfo = document.querySelector('.info-list');
        let liParent = createElementsFunction('li', false, 'reservation-content')
        article = createElementsFunction('article', false, false);

        article.appendChild(createElementsFunction('h3', `Name: ${firstName.value} ${lastName.value}`, false));
        article.appendChild(createElementsFunction('p', `From date: ${dateIn.value}`, false));
        article.appendChild(createElementsFunction('p', `To date: ${dateOut.value}`, false));
        article.appendChild(createElementsFunction('p', `For ${peopleCount.value} people`, false));

        let  btn1Confirm = createElementsFunction('button', 'Confirm', 'confirm-btn')
        btn1Confirm.addEventListener('click', ()=>changeH1(false))
        let  btn2Cancel = createElementsFunction('button', 'Cancel', 'cancel-btn')
        btn2Cancel.addEventListener('click', ()=>changeH1(true))
        function changeH1(boolValue){
            if (boolValue){
                confirmedList.textContent = ''
                let field = document.getElementById('verification')
                field.textContent = 'Cancelled.'
                field.classList.add('reservation-cancelled')
                btnSubmitNext.disabled = false
            }
            else{
                confirmedList.textContent = ''
                let field = document.getElementById('verification')
                field.textContent = 'Confirmed.'
                field.classList.add('reservation-confirmed')
                btnSubmitNext.disabled = false
            }
        }
        
        values = {
            'firstName': firstName.value,
            "lastName": lastName.value,
            "dateIn": dateIn.value,
            "dateOut": dateOut.value,
            "peopleCount": peopleCount.value
        }
        let  btn1Edit = createElementsFunction('button', 'Edit', 'edit-btn')
        btn1Edit.addEventListener('click', ()=>setInputBack(values))

        let  btn2Continue = createElementsFunction('button', 'Continue', 'continue-btn')
        btn2Continue.addEventListener('click', createConfirmReservationPart)

        liParent.appendChild(article);
        liParent.appendChild(btn1Edit);
        liParent.appendChild(btn2Continue);
        ulToAppendInfo.appendChild(liParent)

        console.log(ulToAppendInfo);
        
        
        btnSubmitNext.disabled = true;
        
        document.querySelector('form').reset();
        console.log(values);

        function setInputBack(valuesObj){
            firstName.value = valuesObj['firstName']
            lastName.value = valuesObj['lastName']
            dateIn.value = valuesObj['dateIn']
            dateOut.value = valuesObj['dateOut']
            peopleCount.value = valuesObj['peopleCount']
            btnSubmitNext.disabled = false;
            ulToAppendInfo.textContent='';
        }

        function createConfirmReservationPart(){
            ulToAppendInfo.textContent = '';
            liParent.removeChild(btn1Edit);
            liParent.removeChild(btn2Continue);

            liParent.appendChild(btn1Confirm);
            liParent.appendChild(btn2Cancel);
            confirmedList.appendChild(liParent)
        }
    
        
    }   
}



    
    
