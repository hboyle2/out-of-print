import React, { Component } from 'react';
import './homepage.css'
export default class HomePage extends Component {
    render() {
        // var slideIndex = 0;
        // carousel();
        
        // function carousel() {
        //     var i;
        //     var x = document.getElementsByClassName("mySlides");
        //     for (i = 0; i < x.length; i++) {
        //       x[i].style.display = "none"; 
        //     }
        //     slideIndex++;
        //     if (slideIndex > x.length) {slideIndex = 1} 
        //     x[slideIndex-1].style.display = "block"; 
        //     setTimeout(carousel, 2000); // Change image every 2 seconds
        // }
        return (
            <div className="dammit">
                {/* <div id="index">
               <div id="promo-banner">
                   <h3>Sign up for updates and future promotions</h3>
                   <div id="signup-banner">
                       <form>
                           <input id="promo-input" type="text" placeholder="your email please"/>
                           <input type="submit" value="go"/>
                       </form>
                   </div>
               </div>
            </div> */}
           <div className="promo-images">
                    <img src="https://cdn.shopify.com/s/files/1/0380/6785/t/30/assets/leftpromo.jpg?635266383391944640" alt=""/>
                    <img src="https://cdn.shopify.com/s/files/1/0380/6785/t/30/assets/midpromo.jpg?635266383391944640" alt=""/>
                    <img src="https://cdn.shopify.com/s/files/1/0380/6785/t/30/assets/rightpromo.jpg?635266383391944640" alt=""/>
                    <img src="https://cdn.shopify.com/s/files/1/0380/6785/t/30/assets/leftpromo2.jpg?635266383391944640" alt=""/>
                    <img src="https://cdn.shopify.com/s/files/1/0380/6785/t/30/assets/midpromo2.jpg?635266383391944640" alt=""/>
                    <img src="https://cdn.shopify.com/s/files/1/0380/6785/t/30/assets/rightpromo2.jpg?635266383391944640" alt=""/>
                    <img src="https://cdn.shopify.com/s/files/1/0380/6785/t/30/assets/leftpromo3.jpg?635266383391944640" alt=""/>
                    <img src="https://cdn.shopify.com/s/files/1/0380/6785/t/30/assets/midpromo3.jpg?635266383391944640" alt=""/>
                    <img src="https://cdn.shopify.com/s/files/1/0380/6785/t/30/assets/rightpromo3.jpg?635266383391944640" alt=""/>
                    
                </div>
            </div>
            
        );
    }
}

