import{products} from"../data/products.js";
import{cart, removedata} from"../data/cart.js";
let productsList;
let matchingItem ;
let oy;
cart.forEach((cartItem) => {
       oy  = cartItem.id;
    
    products.forEach((hi)=>{
        if(oy  === hi.id){
            matchingItem = hi;
        }
    })

    productsList +=  `
    <div class="cart-item-container ">
            <div class="delivery-date">
            Delivery date: Tuesday, June 21
            </div>

            <div class="cart-item-details-grid">
            <img class="product-image"
                src="${matchingItem.image}">

            <div class="cart-item-details">
                <div class="product-name">
                ${matchingItem.name}
                </div>
                <div class="product-price">
                $10.90
                </div>
                <div class="product-quantity">
                <span>
                    Quantity: <span class="quantity-label">${cartItem.quantity}</span>
                </span>
                <span class="update-quantity-link link-primary">
                    Update
                </span>
                <span class="delete-quantity-link link-primary" data-del-id="${matchingItem.id}">
                    Delete
                </span>
                </div>
            </div>

            <div class="delivery-options">
                <div class="delivery-options-title">
                Choose a delivery option:
                </div>
                <div class="delivery-option">
                <input type="radio" checked
                    class="delivery-option-input"
                    name="delivery-option-${matchingItem.id}">
                <div>
                    <div class="delivery-option-date">
                    Tuesday, June 21
                    </div>
                    <div class="delivery-option-price">
                    FREE Shipping
                    </div>
                </div>
                </div>
                <div class="delivery-option">
                <input type="radio"
                    class="delivery-option-input"
                    name="delivery-option-${matchingItem.id}">
                <div>
                    <div class="delivery-option-date">
                    Wednesday, June 15
                    </div>
                    <div class="delivery-option-price">
                    $4.99 - Shipping
                    </div>
                </div>
                </div>
                <div class="delivery-option">
                <input type="radio"
                    class="delivery-option-input"
                    name="delivery-option-${matchingItem.id}">
                <div>
                    <div class="delivery-option-date">
                    Monday, June 13
                    </div>
                    <div class="delivery-option-price">
                    $9.99 - Shipping
                    </div>
                </div>
                </div>
            </div>
            </div>
        </div>
    `
})


document.querySelector('.order-summary').innerHTML =  productsList;

let checkoutQuantity = 0;



updateCartQuantity();

function updateCartQuantity(){
    cart.forEach((forquantity) => {
        checkoutQuantity += forquantity.quantity;
    })
    document.querySelector('.js-checkout-quantity').innerHTML =`${checkoutQuantity} items`;
}

document.querySelectorAll('.delete-quantity-link')
   .forEach((deleteProduct) => {
     deleteProduct.addEventListener('click', () => {   
       let hi = document.querySelector('.cart-item-container ');
       console.log(hi)
       hi.remove();
       removedata(deleteProduct.dataset.delId);
       console.log('oy');
    })
})








