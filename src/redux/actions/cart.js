export const addGoodToCart = (goodObj) => ({
    type: 'ADD_GOOD_CART',
    payload: goodObj,
  });

export const removeCartItem = (id) => ({
   type: 'REMOVE_ITEM',
   payload: id,
});  

export const plusCartItem = (id) => ({
  type: 'PLUS_CART_ITEM',
  payload: id,
});  


export const minusCartItem = (id) => ({
  type: 'MINUS_CART_ITEM',
  payload: id,
});  