import React, { Component } from 'react';
import './Searchbar.css';
import {Link} from 'react-router-dom';

class Searchbar extends Component {
    render() {
        return (
            <div className="searchbar">
               <div>Privacy Policy updated. By continuing to use this site, you agree to the terms.</div>
               <div className='cart'>
                   <div>Q</div>
                   <div>My Account</div>
                 <Link to ='/cart'><div>My Bags</div></Link>  
                </div> 
            </div>
            
        );
    }
}

export default Searchbar;