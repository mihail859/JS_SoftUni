function create(words) {
   const parentElement = document.getElementById('content')
   words.forEach(element => {
      let newDivElement = document.createElement('div')
      let pInDiv = document.createElement('p')
      pInDiv.style.display = 'none'
      pInDiv.textContent = element

      newDivElement.appendChild(pInDiv)
      newDivElement.addEventListener('click', function (event){
         event.target.querySelector('p').style.display = 'block'
      })

      parentElement.appendChild(newDivElement)
   });
}