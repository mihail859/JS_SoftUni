function solve() {
   let textAreaProducts = document.querySelector('textarea')
   let buttons = document.querySelectorAll('.add-product');
   let arrFromButtons = Array.from(buttons);

   let products = [];
   let totalPrice = 0;
   


   arrFromButtons.forEach(currBtn => {
      currBtn.addEventListener('click', addToList);
   });

   function addToList(event){
      let productName = event.target.parentNode.parentNode.querySelector('.product-details>.product-title').textContent;
      let price = event.target.parentNode.parentNode.querySelector('.product-line-price').textContent;
     
      
      if (!products.includes(productName)){
         products.push(productName)
      }  ;

      totalPrice += Number (price);
      textAreaProducts.value += `Added ${productName} for ${price} to the cart.\n`
   };
   document.querySelector('.checkout').addEventListener('click', function (){
      textAreaProducts.value += `You bought ${products.join(', ')} for ${totalPrice.toFixed(2)}.`
      arrFromButtons.forEach(currBtn => {
         currBtn.disabled = true
      });
   });
   
}