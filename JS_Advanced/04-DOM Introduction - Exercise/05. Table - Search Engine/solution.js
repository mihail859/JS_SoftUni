function solve() {
   document.querySelector('#searchBtn').addEventListener('click', onClick);
   let rows = document.querySelectorAll('tbody>tr');

   function onClick() {
      let searched = document.getElementById('searchField').value.toLowerCase()

      for (let row of rows){

         let current = row.textContent.toLowerCase()

         if (current.includes(searched)){
            row.setAttribute('class','select')
         }else{
            row.removeAttribute('class')
         }
      }

   }   
}