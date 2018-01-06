import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './womens-tees.css'

//component for individual product
class Product extends Component {
    constructor(props){
        super(props)
        this.state = {
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
    
    //then mouse hovers over image the image will change to person view
    render() {
        const {shirt} = this.props
       
            return( 
                
                <div  className='item' >
                <Link to = {`/collections/womens-tees/products/${shirt.slug}`}
                <div onMouseOver={this.mouseOver} onMouseOut = {this.mouseOut}>
                {this.state.hover ? (<img alt="" src={shirt.img2}/>) : (<img  alt="" src={shirt.img}/>)}</div>
                <div>{shirt.name}</div>
                <div>{shirt.gender} {shirt.type}</div>
                </Link>
                <div>${shirt.price}</div>
                </div>
            )
        
        
    }
}

export default Product;
