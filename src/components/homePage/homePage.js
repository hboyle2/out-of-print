import React, { Component } from 'react';
import './homepage.css'
import { Carousel } from 'react-responsive-carousel'
import styles from 'react-responsive-carousel/lib/styles/carousel.min.css';
export default class HomePage extends Component {
    render() {
     
        return (
            <div className="dammit">
                 <div className="bob">
                <Carousel autoPlay={true} interval={9000} infiniteLoop={true} showThumbs={false}>
                <div className="bob">
                    <img src="https://cdn.shopify.com/s/files/1/0380/6785/t/30/assets/slide1.jpg?5736034691839156452" alt="car1" />
                  
                </div>
                <div className="bob">
                    <img src="https://cdn.shopify.com/s/files/1/0380/6785/t/30/assets/slide2.jpg?5736034691839156452" alt="car2" />
                  
                </div>
                <div className="bob">
                    <img src="https://cdn.shopify.com/s/files/1/0380/6785/t/30/assets/slide3.jpg?5736034691839156452" alt="car3" />
                
                </div>
                </Carousel>
            </div>
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

