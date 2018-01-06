import React, { Component } from 'react';
import './footer.css'
class Footer extends Component {
    render() {
        return (
            <div className="footer">
                <div className="spread">
                <div className="f2">
                <div id="haf">
                    <h4>Help</h4>
                    <ul >
                        <li>FAQ</li>
                        <li>Contact Us</li>
                        <li>Shipping</li>
                        <li>Returns</li>
                        <li>Catalog</li>
                        <li>Wholesale</li>
                    </ul>
                </div>
                <div className="apparel">
                    <h4>Apparel</h4>
                    <ul id="haf">
                        <li>T-Shirts</li>
                        <li>Women</li>
                        <li>Unisex</li>
                        <li>Sweatshirts</li>
                        <li>Kids & Baby</li>
                        <li>New Arrivals</li>
                    </ul>
                </div>
                <div className="favorites">
                    <h4>Favorites</h4>
                    <ul id="haf">
                        <li>Punk Rock</li>
                        <li>Banned Books</li>
                        <li>Agatha Christie</li>
                        <li>4 Mugs for $30</li>
                        <li>Earn $10</li>
                        <li>Gift Cards</li>
                    </ul>
                </div>
                </div>
               
                <div className="signup">
                <h3>Be the first to know about title releases</h3>
                <div >
                    <input className="input" type="email" placeholder="Enter email here"/>
                    <input type="submit" className="submit" value="sign up"/>
                    <ul className="social">
                    <li>
                        <a href="https://www.facebook.com/outofprintclothing"><i className="fa fa-facebook fa-2x" aria-hidden="true"></i>
                        </a>
                    </li>
                    <li><i className="fa fa-twitter fa-2x "aria-hidden="true"></i></li>
                    <li><i className="fa fa-tumblr fa-2x" aria-hidden="true"></i></li>
                    <li><i className="fa fa-pinterest fa-2x" aria-hidden="true"></i></li>
                    <li><i className="fa fa-instagram fa-2x" aria-hidden="true"></i></li>
                </ul>
                </div>
         </div>
         </div>
       </div>
        );
    }
}

export default Footer;
