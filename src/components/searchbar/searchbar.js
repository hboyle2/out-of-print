import React, { Component } from 'react';
import './Searchbar.css';
import {Link} from 'react-router-dom';

class Searchbar extends Component {
    render() {
        return (<div>
            <div className='blueshipping'>
            <div>
            FREE SHIPPING ON ALL US ORDERS
            </div>
            <div>
                New: Punk Rock Authors Apparel Shop>
            </div>
            
            </div>
  <div className="searchbar">
               <div className="privacy">Privacy Policy updated. By continuing to use this site, you agree to the terms.</div>
               <div className='cart'>
                   <div className="search">Q</div>
                   <div className="account">My Account</div>
                 <Link to ='/cart'><div className="bags">My Bags</div></Link>  
                </div> 
            </div>
        </div>
          
            
        );
    }
}

export default Searchbar;