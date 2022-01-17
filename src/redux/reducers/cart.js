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
           const currentTotalCount = newItems[action.payload].items.length;
           delete newItems[action.payload];   
            return {
              ...state,
              items: newItems,
              totalPrice: state.totalPrice - currentTotalPrice,
              totalCount: state.totalCount - currentTotalCount,
            };
          } 

          case 'PLUS_CART_ITEM': {
            const newItems = [
              ...state.items[action.payload].items,
              state.items[action.payload].items[0]
            ];

            return {
              ...state,
              items: {
                ...state.items,
                [action.payload]: {
                  items: newItems,
                  totalPrice: getTotalPrice(newItems)
                }
              }
            };
          } 

            case 'MINUS_CART_ITEM': {
              const oldItems = state.items[action.payload].items;
              const newItems = oldItems.length > 1 ?
              state.items[action.payload].items.slice(1) : oldItems;

            return {
              ...state,
              items: {
                ...state.items,
                [action.payload]: {
                  items: newItems,
                  totalPrice: getTotalPrice(newItems)
                }
              }
            };
           }
            


                  
           default:
               return state;        
      }
  };


  export default goods;