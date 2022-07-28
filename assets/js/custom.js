// if (document.readyState == 'loading') {
//     document.addEventListener('DOMContentLoaded', ready)
// } else {
//     ready()
// }

// let carts = document.querySelectorAll('.add-cart');

// let products = [
//     { name: 'Kinesisk klockviva( cortusa matthioli)', tag: 'Kinesisk klockviva( cortusa matthioli)', price: 10, inCart: 0 },
//     { name: 'lewisia-twedyi(Alba)', tag: 'lewisia-twedyi(Alba)', price: 20, inCart: 0 },
//     { name: 'Aquilegia canadensis (Little Lanterns)', tag: 'Aquilegia canadensis (Little Lanterns)', price: 30, inCart: 0 },
// ];


// for(let i = 0; i < carts.length; i++){
//     carts[i].addEventListener('click', () =>{
//         cartNumbers(products[i]);
//         totalCost(products[i]);
//     })
// }

// function onLoadCartNumbers(){
//     let productNumbers = localStorage.getItem('cartNumbers');

//     if(productNumbers){
//         document.querySelector('.nav-icon span').textContent = productNumbers;
//     }
// }

// function cartNumbers(product) {
//     let productNumbers = localStorage.getItem('cartNumbers');
//     productNumbers = parseInt(productNumbers);

//     if(productNumbers){
//         localStorage.setItem('cartNumbers', productNumbers + 1);
//         document.querySelector('.nav-icon span').textContent = productNumbers + 1;
//     } else {
//         localStorage.setItem('cartNumbers', 1);
//         document.querySelector('.nav-icon span').textContent = 1;
//     }
//     setItems(product);
// }

// function setItems(product){
//     let cartItems = localStorage.getItem('productsInCart');
//     cartItems = JSON.parse(cartItems);
    
//     if(cartItems != null){

//         if(cartItems[product.tag] == undefined){
//             cartItems = {
//                 ...cartItems,
//                 [product.tag]: product
//             }
//         }
//         cartItems[product.tag].inCart += 1;
//     } else {
//         product.inCart = 1;
//         cartItems = {
//             [product.tag]: product
//         } 
//     }
    
//     localStorage.setItem("productsInCart", JSON.stringify(cartItems));
// }

// function totalCost(product){
//     let cartCost = localStorage.getItem('totalCost');
//     if(cartCost != null){
//         cartCost = parseInt(cartCost);
//         localStorage.setItem("totalCost", cartCost + product.price);
//     } else {
//         localStorage.setItem("totalCost", product.price);
//     }
// }

// function displayCart(){
//     let cartItems = localStorage.getItem("productsInCart")
//     cartItems = JSON.parse(cartItems);
//     let productContainer = document.querySelector(".products");
//     let cartCost = localStorage.getItem('totalCost');

//     if(cartItems && productContainer){
//         productContainer.innerHTML = '';
//         Object.values(cartItems).map(item => {
//             productContainer.innerHTML += `
//             <div class="product">
//                 <ion-icon name="close-circle"></ion-icon>
//                 <img src="./assets/img/${item.tag}.jpg">
//                 <span>${item.name}</span>
//             </div>
//             <div class="price">$${item.price},00</div>
//             <div class="quantity">
//                 <ion-icon class="decrease" name="chevron-back-circle"></ion-icon>
//                 <span>${item.inCart}</span>
//                 <ion-icon class="increase" name="chevron-forward-circle"></ion-icon>
//             </div>
//             <div class="total">
//                 $${item.inCart * item.price},00
//             </div>
//             `;
//         });

//         productContainer.innerHTML += `
//             <div clas="basketTotalContainer">
//                 <h4 class="basketTotalTitle">
//                     Basket Total
//                 </h4>
//                 <h4 class="basketTotal">
//                     $${cartCost},00
//                 </h4>
//         `;
//     }
// }

// onLoadCartNumbers();
// displayCart();


// function ready() {
//     var removeCartItemButtons = document.getElementsByClassName('btn-danger')
//     for (var i = 0; i < removeCartItemButtons.length; i++) {
//         var button = removeCartItemButtons[i]
//         button.addEventListener('click', removeCartItem)
//     }

//     var quantityInputs = document.getElementsByClassName('cart-quantity-input')
//     for (var i = 0; i < quantityInputs.length; i++) {
//         var input = quantityInputs[i]
//         input.addEventListener('change', quantityChanged)
//     }

//     var addToCartButtons = document.getElementsByClassName('shop-item-button')
//     for (var i = 0; i < addToCartButtons.length; i++) {
//         var button = addToCartButtons[i]
//         button.addEventListener('click', addToCartClicked)
//     }

//     document.getElementsByClassName('btn-purchase')[0].addEventListener('click', purchaseClicked)
// }

// function purchaseClicked() {
//     alert('Thank you for your purchase')
//     var cartItems = document.getElementsByClassName('cart-items')[0]
//     while (cartItems.hasChildNodes()) {
//         cartItems.removeChild(cartItems.firstChild)
//     }
//     updateCartTotal()
// }

// function removeCartItem(event) {
//     var buttonClicked = event.target
//     buttonClicked.parentElement.parentElement.remove()
//     updateCartTotal()
// }

// function quantityChanged(event) {
//     var input = event.target
//     if (isNaN(input.value) || input.value <= 0) {
//         input.value = 1
//     }
//     updateCartTotal()
// }

// function addToCartClicked(event) {
//     var button = event.target
//     var shopItem = button.parentElement.parentElement
//     var title = shopItem.getElementsByClassName('shop-item-title')[0].innerText
//     var price = shopItem.getElementsByClassName('shop-item-price')[0].innerText
//     var imageSrc = shopItem.getElementsByClassName('shop-item-image')[0].src
//     addItemToCart(title, price, imageSrc)
//     updateCartTotal()
//     console.log(title)
// }

// function addItemToCart(title, price, imageSrc) {
//     var cartRow = document.createElement('div')
//     cartRow.classList.add('cart-row')
//     var cartItems = document.getElementsByClassName('cart-items')[0]
//     var cartItemNames = cartItems.getElementsByClassName('cart-item-title')
//     for (var i = 0; i < cartItemNames.length; i++) {
//         if (cartItemNames[i].innerText == title) {
//             alert('This item is already added to the cart')
//             return
//         }
//     }
//     var cartRowContents = `
//         <div class="cart-item cart-column">
//             <img class="cart-item-image" src="${imageSrc}" width="100" height="100">
//             <span class="cart-item-title">${title}</span>
//         </div>
//         <span class="cart-price cart-column">${price}</span>
//         <div class="cart-quantity cart-column">
//             <input class="cart-quantity-input" type="number" value="1">
//             <button class="btn btn-danger" type="button">REMOVE</button>
//         </div>`
//     cartRow.innerHTML = cartRowContents
//     cartItems.append(cartRow)
//     cartRow.getElementsByClassName('btn-danger')[0].addEventListener('click', removeCartItem)
//     cartRow.getElementsByClassName('cart-quantity-input')[0].addEventListener('change', quantityChanged)
// }

// function updateCartTotal() {
//     var cartItemContainer = document.getElementsByClassName('cart-items')[0]
//     var cartRows = cartItemContainer.getElementsByClassName('cart-row')
//     var total = 0
//     for (var i = 0; i < cartRows.length; i++) {
//         var cartRow = cartRows[i]
//         var priceElement = cartRow.getElementsByClassName('cart-price')[0]
//         var quantityElement = cartRow.getElementsByClassName('cart-quantity-input')[0]
//         var price = parseFloat(priceElement.innerText.replace('$', ''))
//         var quantity = quantityElement.value
//         total = total + (price * quantity)
//     }
//     total = Math.round(total * 100) / 100
//     document.getElementsByClassName('cart-total-price')[0].innerText = '$' + total
// }