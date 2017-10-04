import React, { Component } from 'react';
import axios from 'axios';
import './womens-tees.css';

import Product from './product'

export default class WomensTees extends Component {
    constructor(){
        super()

        this.state={
            shirts:[],
           
        }
        
    }

    componentDidMount(){ 
         
    axios.get('/api/womens/tshirts').then(response=>{
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

