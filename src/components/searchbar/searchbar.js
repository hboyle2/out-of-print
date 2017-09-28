import React, { Component } from 'react';
import './Searchbar.css'

class Searchbar extends Component {
    render() {
        return (
            <div className="searchbar">
               <div>Privacy Policy updated. By continuing to use this site, you agree to the terms.</div>
               <div className='cart'>
                   <div>Q</div>
                   <div>My Account</div>
                   <div>My Bags</div>
                </div> 
            </div>
            
        );
    }
}

export default Searchbar;