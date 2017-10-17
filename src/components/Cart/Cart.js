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
                <div className="three"><input placeholder={item.qty}/>update </div>
                <div className="four">
                 <button className="shopping-cart-button" onClick={() => this.props.removeFromShoppingCart(item.id)}>X</button>
                </div>
                <div className="five">{ "$" + item.price * item.qty + ".00"}</div>
                </div>
                // <tr key={index} className="blah">
                //     <td className="one"> <img  className="cart-shirt" src={item.img} alt="" />  <h2> {item.name}</h2></td>
                //     <td className="two"> <h2>{"$" + item.price + ".00"}</h2></td>
                //     <td className="three"><input placeholder={item.qty}/>update</td>
                //     <td className="four"><button className="shopping-cart-button" onClick={() => this.props.removeFromShoppingCart(item.id)}>X</button></td>
                //     <td className="five">{ "$" + item.price * item.qty + ".00"}</td>
                // </tr>
            )
        })

     
        // console.log("shopping",this.props.shoppingCart)
        
        return (
            <div className="shopping-cart-container">
              
               <div className="center">

                <ul className='wrapper'>
                    <li className='box1'>My Bag</li>
                    <li className='box2'>
                    {/* <tr className="label">
                   <th className="one1">Image</th>
                   <th className="two1">price</th>
                   <th className="two1">QTY</th>
                   <th className="two1">Delete</th>
                   <th className="two1">Total</th>
               </tr> */}
                    {shoppingCartDisplay[0] ? 
                shoppingCartDisplay 
                : <div className="go-buy-something"><h1>empty cart</h1></div>}  
                
                    </li>
                    <li className='box3'>

                        <div className="subtotal">subtotal</div>
                        <div className="total"> $
                            

                        {
                           
                            this.props.shoppingCart.reduce((sum, item)=>{
                                {/* console.log(item) */}
                               return sum + (parseInt(item.price, 10) * item.qty)
                            },0)
                        }
                        </div>
                        <div className="checkout">CHECKOUT</div>
                  
            
                    </li>
                    
                    
                    
                </ul>
               </div>
             
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