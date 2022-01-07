import React from 'react';
import { Link } from 'react-router-dom';
import '../css/footer.css';

function Footer() {
    return (
        <div className="footer-top-area">
           <div className="zigzag-bottom"></div>
           <div className="container">
            <div className="row">
                <div className="col-md-3 col-sm-6">
                    <div className="footer-about-us">
                        <h2>e<span>Electronics</span></h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis sunt id doloribus vero quam laborum quas alias dolores blanditiis iusto consequatur, modi aliquid eveniet eligendi iure eaque ipsam iste, pariatur omnis sint! Suscipit, debitis, quisquam. Laborum commodi veritatis magni at?</p>
                        <div className="footer-social">
                            <Link to="" target="_blank"><i className="fa fa-facebook"></i></Link>
                            <Link to="" target="_blank"><i className="fa fa-twitter"></i></Link>
                            <Link to="" target="_blank"><i className="fa fa-youtube"></i></Link>
                            <Link to="" target="_blank"><i className="fa fa-linkedin"></i></Link>
                            <Link to="" target="_blank"><i className="fa fa-pinterest"></i></Link>
                        </div>
                    </div>
                </div>
                
                <div className="col-md-3 col-sm-6">
                    <div className="footer-menu">
                        <h2 className="footer-wid-title">User Navigation </h2>
                        <ul>
                            <li><Link to="">My account</Link></li>
                            <li><Link to="">Order history</Link></li>
                            <li><Link to="">Wishlist</Link></li>
                            <li><Link to="">Vendor contact</Link></li>
                            <li><Link to="">Front page</Link></li>
                        </ul>                        
                    </div>
                </div>
                
                <div className="col-md-3 col-sm-6">
                    <div className="footer-menu">
                        <h2 className="footer-wid-title">Categories</h2>
                        <ul>
                            <li><Link to="">Mobile Phone</Link></li>
                            <li><Link to="">Home accesseries</Link></li>
                            <li><Link to="">LED TV</Link></li>
                            <li><Link to="">Computer</Link></li>
                            <li><Link to="">Gadets</Link></li>
                        </ul>                        
                    </div>
                </div>
                
                {/* <div className="col-md-3 col-sm-6">
                    <div className="footer-newsletter">
                        <h2 className="footer-wid-title">Newsletter</h2>
                        <p>Sign up to our newsletter and get exclusive deals you wont find anywhere else straight to your inbox!</p>
                        <div className="newsletter-form">
                            <input type="email" placeholder="Type your email"/>
                            <input type="submit" value="Subscribe"/>
                        </div>
                    </div>
                </div> */}
            </div>
        </div>
  </div>
    )
}

export default Footer;
