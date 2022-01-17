const initialState = {
    items: {},
    totalPrice: 0,
    totalCount: 0,
  };

  const getTotalPrice = arr => arr.reduce((sum, obj) => obj.price + sum, 0);

  const goods = (state = initialState, action) => {
      switch (action.type) {
          case 'ADD_GOOD_CART': {
              const currentItems = !state.items[action.payload.id]
              ? [action.payload]
              : [...state.items[action.payload.id].items, action.payload];

              const newItems = {
                ...state.items,
                [action.payload.id]: {
                  items: currentItems,
                  totalPrice: getTotalPrice(currentItems)
                }
            }

            const items = Object.values(newItems).map(obj => obj.items);
            const allGoods = [].concat.apply([], items);
            const totalPrice = getTotalPrice(allGoods);

              return {
                  ...state,
                  items: newItems,
                  totalCount: allGoods.length,
                  totalPrice,
                } 
              };

           case 'REMOVE_ITEM': {
           const newItems = {
             ...state.items,
           };
           const currentTotalPrice = newItems[action.payload].totalPrice;
           delete newItems[action.payload];   
            return {
              ...state,
              items: newItems,
              totalPrice: state.totalPrice - currentTotalPrice,
            };
          } 
          
           default:
               return state;        
      }
  };


  export default goods;