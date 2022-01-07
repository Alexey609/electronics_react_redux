import React from 'react';
import { CartItem } from '../components';
import '../css/cart.css';
import { useSelector, useDispatch } from 'react-redux';
import { removeCartItem } from '../redux/actions/cart'

function Cart() {
    const { totalPrice, items } = useSelector(({ cart }) => cart);

    const addedGoods = Object.keys(items).map(key => {
        return items[key].items[0];
    })
    
    const dispatch = useDispatch();

    const onRemoveItem = (id) => {
         dispatch(removeCartItem(id));
    }

    return (
    <div className="container">
      <div className="row">    
        <div className="col-md-8">
                <div className="product-content-right">
                     <div className="woocommerce">
                        <table cellspacing="0" className="shop_table cart">
                                   <thead>
                                        <tr>
                                            <th className="product-remove">&nbsp;</th>
                                            <th className="product-thumbnail">&nbsp;</th>
                                            <th className="product-name">Product</th>
                                            <th className="product-price">Price</th>
                                            <th className="product-quantity">Quantity</th>
                                            {/* <th className="product-subtotal">Total</th> */}
                                        </tr>
                                    </thead>
                                    {addedGoods.map((obj) => (
                                    <CartItem name={obj.name}
                                    totalPrice={items[obj.id].totalPrice}
                                    totalCount={items[obj.id].items.length}
                                    id={obj.id}
                                    onRemove={onRemoveItem}
                                    /> 
                                    ))}
                               <tr>
              <td className="actions" colspan="6">
                  <div className="coupon">
                    
                  </div>
                  <input type="submit" value="Update Cart" name="update_cart" className="button"/>
                  <input type="submit" value="Proceed to Checkout" name="proceed" className="checkout-button button alt wc-forward"/>
              </td>
             </tr>  
                         </table>
                     </div>
                 </div>     
        </div>
        <div className="cart_totals ">
                                <h2>Cart Totals</h2>

                                <table cellspacing="0">
                                    <tbody>
                                        <tr className="order-total">
                                            <th>Order Total</th>
                                            <td><strong><span classNsme="amount">${totalPrice}</span></strong> </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
        </div>     
        </div>  
    )
}

export default Cart
