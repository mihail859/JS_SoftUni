function solve() {
    const [addTask, openTasks, inProgress, complete] = Array.from(document.querySelectorAll('section')).map(s=> s.children[1])
    
    let taskName = document.getElementById('task')
    let description = document.getElementById('description')
    let dueDate = document.getElementById('date')
    document.getElementById('add').addEventListener('click', addSections)


    function addSections(event){
        event.preventDefault()
       let newArticle = document.createElement('article');
       if (!taskName.value || !description.value || !dueDate.value){
        return
       }
       let h3 = document.createElement('h3')
       h3.textContent = taskName.value

       let p1 = document.createElement('p')
       p1.textContent =  `Description: ${description.value}`


       let p2 = document.createElement('p')
       p2.textContent = `Due Date: ${dueDate.value}`

       newArticle.appendChild(h3)
       newArticle.appendChild(p1)
       newArticle.appendChild(p2)

       taskName.value = "";
       description.value = "";
       dueDate.value ="";

       let classBtns = document.createElement('div')
       classBtns.classList.add('flex')

       let btnGreen = document.createElement('button')
       btnGreen.classList.add('green')
       btnGreen.textContent = 'Start'

       let btnRed = document.createElement('button')
       btnRed.classList.add('red')
       btnRed.textContent = 'Delete'

       let btnOrange = document.createElement('button')
       btnOrange.classList.add('orange')
       btnOrange.textContent = 'Finish'

       btnGreen.addEventListener('click', goInProgress)
       btnRed.addEventListener('click', deleteSection)
       btnOrange.addEventListener('click', finishTheAssignment)

       classBtns.appendChild(btnGreen)
       classBtns.appendChild(btnRed)

       newArticle.appendChild(classBtns)
       openTasks.appendChild(newArticle)


       function goInProgress(){
        btnGreen.remove()
        classBtns.appendChild(btnOrange)
        inProgress.appendChild(newArticle)
       }
       function deleteSection(){
        newArticle.remove()
       }
       function finishTheAssignment(){
        classBtns.remove()
        complete.appendChild(newArticle)
       }

       
        
    }

    


    
}