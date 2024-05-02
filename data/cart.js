export const cart = [];

export function addToCart(productId){

  let matchingItem=0;

  
  cart.forEach((cartItem)=>{
   if(productId===cartItem.productId){
    matchingItem=cartItem;
   }
   
  });

  if(matchingItem){
    matchingItem.quantity+=1;
  }else
    cart.push({
      productId:productId,
      quantity:1
    });

   }