import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import './navbar.css'

export default class Navbar extends Component {
    constructor(){
        super()
        this.state={
            hover: false
        }
        this.mouseOut = this.mouseOut.bind(this);
        this.mouseOver = this.mouseOver.bind(this);
    }

    mouseOver() {
        this.setState({hover: true});
    }
    mouseOut() {
        this.setState({hover: false});
    }
    render() {
        return (
            <div>
            <div className='navbar'>
               <Link to = '/'><img alt ='' className='bob' src='https://cdn.shopify.com/s/files/1/0380/6785/t/30/assets/logo-out-of-print.png?3105792032285812475'/></Link>
              <div className="dropdowns">
              <div onMouseOut={this.mouseOut} onMouseOver={this.mouseOver} className="shop">Shop</div>
               <div className="collections">Collections</div>
               <div className="shop-by">Shop By</div>
               <div className="story">Our Story</div>
            </div>
            </div>
            <div onMouseOut={this.mouseOut} onMouseOver={this.mouseOver} className= { this.state.hover ? 'dropdown' :  ' dropdown hide-dropdown' }>
                <ul>
                    <li id='title'>Women</li>
                    <Link to ="/collections/womens-tees"><li>T-Shirts</li></Link>
                    <li>Long-Sleeve</li>
                    <li>Sweatshirts</li>
                    <li>Socks</li>
                    <li>Scarves</li>
                    <li>Leggings</li>
                    <li>New Arrivals</li>
                    <li>Best Sellers</li>
                    <li>View All</li>
                </ul>
                <ul>
                    <li id='title'>Men/unisex</li>
                    <Link to ="/collections/mens-tees"><li>T-Shirts</li></Link>
                    <li>Long-Sleeve</li>
                    <li>Sweatshirts</li>
                    <li>Socks</li>
                    <li>Scarves</li>
                    <li>New Arrivals</li>
                    <li>Best Sellers</li>
                    <li>View All</li>
                </ul>
                <ul>
                    <li id='title'>Kids & baby</li>
                    <li>Kids Tees</li>
                    <li>Baby Bodysuits</li>
                    <li>Toddler Socks</li>
                    <li>Kids Tote</li>
                    <li>Books</li>
                    <li>New Arrivals</li>
                    <li>View All</li>
                </ul>
                <ul>
                    <li id='title'>Accessories</li>
                    <li>Pins</li>
                    <li>Totes</li>
                    <li>Pouches</li>
                    <li>Jewelry</li>
                    <li>Book Boxes</li>
                    <li>New Arrivals</li>
                    <li>View All</li>
                </ul>
                <ul>
                    <li id='title'>Home & Office</li>
                    <li>Mugs</li>
                    <li>Aprons</li>
                    <li>Tea Towels</li>
                    <li>Coaster Sets</li>
                    <li>Notebooks</li>
                    <li>Pennants</li>
                    <li>Matchbox Sets</li>
                    <li>Books</li>
                    <li>View All</li>
                </ul>

            </div>
            </div>
           
        );
    }
}
