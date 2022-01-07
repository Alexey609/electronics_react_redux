import React from 'react';
import '../css/brand.css';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

function Brand() {
    const { totalPrice, totalCount } = useSelector(({ cart }) => cart);

    return (
        <div className="site-branding-area">
        <div className="container">
            <div className="row">
                <div className="col-sm-6">
                    <div className="logo">
                        <h1><Link to="/">e<span>Electronics</span></Link></h1>
                    </div>
                </div>
                
                <div className="col-sm-6">
                    <div className="shopping-item">
                        <Link to="/cart">Cart - <span className="cart-amunt">${totalPrice}</span> 
                        <i className="fa fa-shopping-cart"></i> <span className="product-count">{totalCount}</span>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}

export default Brand;
