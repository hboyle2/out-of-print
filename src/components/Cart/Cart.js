import React, { Component } from 'react';
import { removeFromShoppingCart } from '../../ducks/reducer';
import { connect } from 'react-redux';
import './cart.css'

class Cart extends Component {
    
    render() {
        let shoppingCartDisplay = this.props.shoppingCart.map((item, index) => {
            return (
                <div  key={index} className="blah">
                    <div className="one">
                    
                      <img  className="cart-shirt" src={item.img} alt="" />
                      <h2> {item.name}</h2>
                    </div>
                <div className="two">
                 <h2>{"$" + item.price + ".00"}</h2>
                </div>
                <div className="three">update</div>
                <div className="four">
                 <button className="shopping-cart-button" onClick={() => this.props.removeFromShoppingCart(item.id)}>X</button>
                </div>
                <div className="five">total</div>
                </div>
            )
        })
        console.log("shopping",this.props.shoppingCart)
        
        return (
            <div className="shopping-cart-container">
              
               
                <ul className='wrapper'>
                    <li className='box1'>My Bag</li>
                    <li className='box2'>
                    {shoppingCartDisplay[0] ? 
                shoppingCartDisplay 
                : <div className="go-buy-something"><h1>empty cart</h1></div>}  
                
                    </li>
                    <li className='box3'>
                        <div>subtotal</div>
                        {
                           
                            this.props.shoppingCart.reduce((sum, item)=>{
                                {/* console.log(item) */}
                               return sum + (parseInt(item.price, 10) * item.qty)
                            },0)
                        }
                        <div>CHECKOUT</div>
                    </li>
                    
                    
                    
                </ul>
               
            </div>
        )
    }

    }

    
    function mapStateToProps(state) {
        console.log(state);
        return {
            shoppingCart: state.shoppingCart
        };
    }
    
    export default connect(mapStateToProps, {removeFromShoppingCart})(Cart);