function search() {
   let townsArr = document.querySelectorAll('#towns>li');
   let arr = Array.from(townsArr);
   let searchedWord = document.querySelector('#searchText').value.toLowerCase();
   

   let matchesFound = 0

   for (el of arr){  
      
      let currentEl = el.textContent.toLowerCase()
      if (currentEl.includes(searchedWord)){
         matchesFound++;
         el.style.textDecoration = 'underline';
         el.style.fontWeight = "bold";
      }else{
         el.style.textDecoration = '';
         el.style.fontWeight = "";
      }
      
   }
   
   document.getElementById('result').textContent = `${matchesFound} matches found`

}
