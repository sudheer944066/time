
import { products } from "../data/products.js";
import{cart, addtocart} from"../data/cart.js";
let product = "";
products.forEach((productdata) =>{
    product += ` 
    <div class="product-container">
          <div class="product-image-container">
            <img class="product-image"
              src="${productdata.image}">
          </div>

          <div class="product-name limit-text-to-2-lines">
          ${productdata.name}
          </div>

          <div class="product-rating-container">
            <img class="product-rating-stars"
              src="images/ratings/rating-${productdata.rating.stars * 10}.png">
            <div class="product-rating-count link-primary">
            ${productdata.rating.count}
            </div>
          </div>

          <div class="product-price">
            $${((productdata.priceCents)/100).toFixed(2)}
          </div>

          <div class="product-quantity-container">
            <select class="optional-value-${productdata.id}" id="product-${productdata.id}">
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
            </select>
          </div>

          <div class="product-spacer"></div>

          <div class="added-to-cart js-added-${productdata.id}">
            <img src="images/icons/checkmark.png">
            Added
          </div>

          <button class="add-to-cart-button "
          data-button-id="${productdata.id}">
            Add to Cart
          </button>
        </div>
        `
});

document.querySelector('.js-products-grid').innerHTML= product;



document.querySelectorAll('.add-to-cart-button').forEach((additem) => {
  additem.addEventListener('click', () =>{
    let item = additem.dataset.buttonId;
    console.log(item);

    let selectquantity = document.querySelector(`.optional-value-${item}`);
    let SelectQuan =  Number(selectquantity.value);
    
    addtocart(SelectQuan,item);
    let cartquantity =0 ;
    cart.forEach((quantity) => {
      cartquantity += quantity.quantity;
    })
    document.querySelector('.cart-quantity').innerHTML = cartquantity;

   


    let added =document.querySelector(`.js-added-${item}`);
    added.classList.add("style");
   

   setTimeout(() => {
    let added =document.querySelector(`.js-added-${item}`);
    added.classList.add("styles");
   },1000)
   
  })
})