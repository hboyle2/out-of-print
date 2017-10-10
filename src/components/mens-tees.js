import React, { Component } from 'react';
import axios from 'axios';
import './womens-tees/womens-tees.css';

import Product from '../components/womens-tees/product'

export default class MensTees extends Component {
    constructor(){
        super()

        this.state={
            shirts:[],
           
        }
        
    }

    componentDidMount(){ 
         
    axios.get('/api/mens/tshirts').then(response=>{
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