import React from 'react';
import '../css/product.css'
import { Link } from 'react-router-dom';

function Product({ id, name, price, image, onClickGood }) {
    
    const handleAddGood = () => {
        const obj = {
            id, 
            name, 
            price, 
            image
        };
           onClickGood(obj);
      }

    return (
   
         <div className="single-shop-product">
             <div className="product-upper">
                  <img src={image} alt=""/>
             </div>
             <h2><Link to="">{name}</Link></h2>
                 <div className="product-carousel-price">
                    <ins>${price}</ins> 
                 </div>  
                       
                 <div className="product-option-shop">
            <Link to="" className="add_to_cart_button" data-quantity="1" data-product_sku="" 
            data-product_id="70" onClick={handleAddGood}>Add to cart</Link>
             </div>                   
         </div>   
           
    )
}

export default Product;
