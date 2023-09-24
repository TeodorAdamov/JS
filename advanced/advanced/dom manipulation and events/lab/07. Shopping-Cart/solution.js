function solve() {
   const shoppingCart = document.querySelector('.shopping-cart');
   const checkoutButton = document.querySelector('.checkout');
   shoppingCart.addEventListener('click', addToList);
   checkoutButton.addEventListener('click', checkout);

   
   let total = 0;
   const boughtProducts = new Set();


   function addToList(event) {
      console.log(event)
      
      if (event.target.className === 'add-product') {


         const textArea = document.querySelector('textarea');

         //get product name and price from the HTML
         const productDiv = event.target.parentElement.parentElement;
         const productName = productDiv.children[1].children[0].textContent;
         const productPrice = Number(productDiv.children[3].textContent);

         //calculate checkout price and add products to list
         total += productPrice;
         boughtProducts.add(productName);

         //add product to text area
         textArea.textContent += `Added ${productName} for ${productPrice.toFixed(2)} to the cart.\n`;
      }
   }
   

   function checkout() {
      //get textarea
      const textArea = document.querySelector('textarea');
      const productList = Array.from(boughtProducts);
      const addProductButtons = document.querySelectorAll('.product .product-add');


      //display checkout on textarea
      textArea.textContent += `You bought ${productList.join(', ')} for ${total.toFixed(2)}.`;


      //disable buttons
      Array.from(addProductButtons).forEach(button => {
         button.children[0].disabled = true;
      })
      checkoutButton.disabled = true;
   }
}