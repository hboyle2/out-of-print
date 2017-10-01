import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import './navbar.css'

export default class Navbar extends Component {
    render() {
        return (
            
            <div className='navbar'>
               <Link to = '/'><img alt ='' className='bob' src='https://cdn.shopify.com/s/files/1/0380/6785/t/30/assets/logo-out-of-print.png?3105792032285812475'/></Link>
              <div className="dropdowns">
              <div className="shop">Shop</div>
               <div className="collections">Collections</div>
               <div className="shop-by">Shop By</div>
               <div className="story">Our Story</div>
              </div>
            
            </div>
        );
    }
}
