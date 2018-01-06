import React, { Component } from 'react';
import axios from 'axios';
import './singleview.css';
import {connect} from 'react-redux';
import {addToShoppingCart} from '../../ducks/reducer';

class SingleView extends Component {
    constructor(){
        super()
        this.state = {
            item : {}
        }
    }

   //view individual item based on unique identifier 
    componentDidMount(){
     axios.get(`/api/item/${this.props.match.params.slug}`).then(response=>{
          this.setState({
          item: response.data
         })
         console.log(response.data)
       })
      }

    render() {
        const item=this.state.item
       
        console.log(this.state.item)
        return (
            <div className="shirt">
              <img alt='' src={item.img} /> 
             <div className='details'>
             <h1>{item.name}</h1> 
             <div>{item.gender}</div>
             <div>{item.type}</div> 
              <div>${item.price}</div>
             <p onClick={() => this.props.addToShoppingCart(item)}>Add to Cart</p>
             </div>
             
             
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
       
    }
}
export default connect( mapStateToProps, {addToShoppingCart})(SingleView);

