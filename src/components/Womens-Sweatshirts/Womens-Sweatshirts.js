import React, { Component } from 'react';
import axios from 'axios';
// import {Link} from 'react-router-dom';
import Product from '../womens-tees/product'

export default class WomensSweatshirts extends Component {
    constructor(){
        super()
    this.state={
        shirts:[]
      }
    }

    componentDidMount(){
        axios.get('/api/womens/sweatshirts').then( response => {
            this.setState({
                shirts: response.data
            })
        })
    }      


    render() {
        const shirtList = this.state.shirts.map((shirt)=>{
            console.log(shirt)
            return( <Product key={shirt.id} shirt = {shirt}/>)
        })
        
        return (
            <div className="shirtList">
                   {shirtList}
            </div>
       
        );
    }
}

