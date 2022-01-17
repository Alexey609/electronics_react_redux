import React from 'react';
import { Link } from 'react-router-dom';

function CartItem({ name, totalPrice, totalCount, onRemove, id }) {
    const handleRemoveClick = () => {
        onRemove(id);
    }

    return (
        <tbody>
        <tr className="cart_item">
             <td className="product-remove">
                  <Link to="" title="Remove this item" className="remove" href="#" onClick={handleRemoveClick}>×</Link> 
              </td>

              <td className="product-thumbnail">
                  <Link to=""></Link>
              </td>

              <td className="product-name">
                  <a href="single-product.html">{name}</a> 
              </td>

              <td className="product-price">
                  <span className="amount">${totalPrice}</span> 
              </td>

              <td className="product-quantity">
                  <div className="quantity buttons_added">
                       <input type="button" className="minus" value="-"/> 
                      <input type="number" size="4" className="input-text qty text" title="Qty" value={totalCount} min="0" step="1"/>
                    <input type="button" className="plus" value="+"/>
                  </div>
              </td>

               {/* <td className="product-subtotal">
                  <span className="amount">£15.00</span> 
              </td>  */}
          </tr>
         
       </tbody>            
    )
}

export default CartItem;
