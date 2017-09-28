import React, { Component } from 'react';
import { removeFromShoppingCart } from '../../ducks/reducer';
import { connect } from 'react-redux';

class Cart extends Component {
    
    render() {
        let shoppingCartDisplay = this.props.shoppingCart.map((item, index) => {
            return (
                <div  key={index}>
                    <img src={item.img} alt="" />
                    <div>
                        <h2>{item.name}</h2>
                        <h2>{"$" + item.price + ".00"}</h2>
                        <div >
                            <button className="shopping-cart-button" onClick={() => this.props.removeFromShoppingCart(index)}>Remove From Shopping Cart</button>
                        </div>
                    </div>
                </div>
            )
        })
        return (
            <div className="shopping-cart-container">
                {shoppingCartDisplay[0] ? 
                shoppingCartDisplay
                : <div className="go-buy-something"><h1>Your shopping cart is empty!  Go buy something!</h1></div>}
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