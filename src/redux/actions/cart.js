export const addGoodToCart = (goodObj) => ({
    type: 'ADD_GOOD_CART',
    payload: goodObj,
  });

export const removeCartItem = (id) => ({
   type: 'REMOVE_ITEM',
   payload: id,
});  