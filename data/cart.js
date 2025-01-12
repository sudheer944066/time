export let cart =JSON.parse(localStorage.getItem('cart'));

function savedata(){
  localStorage.setItem('cart',JSON.stringify(cart));
}
 

export function addtocart(SelectQuan,item){
    let matchingitem;
    cart.forEach((same) => {
      if(same.product === item){
         matchingitem =same;
      }
    })
    if(matchingitem){
      matchingitem.quantity +=SelectQuan ;
    }
    else{
      cart.push({
        product :item,
        quantity : SelectQuan 
      });
    } 
    savedata();
}


export function removedata(id){
  let newcart=[];
  console.log(id);
  cart.forEach((cartItem) => {
        console.log(cartItem.id)
        if(id !== cartItem.id)
            newcart.push(cartItem);

        cart = newcart;
  })
  console.log(cart)
  savedata();

}