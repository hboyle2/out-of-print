import React, { Component } from 'react';
import axios from 'axios';
import './womens-tees.css';
import {Link} from 'react-router-dom';

export default class WomensTees extends Component {
    constructor(){
        super()

        this.state={
            shirts:[],
            hover: false
        }
        this.hover = this.hover.bind(this);
    }

    componentDidMount(){ 
         
    axios.get('/api/womens/tshirts').then(response=>{
        this.setState({
            shirts: response.data
        })
      
   })

}

hover(){
    this.setState({
        hover: !this.state.hover
    })
}

    render() {
        const shirtList = this.state.shirts.map((shirt)=>{
            console.log(shirt)
            return( <div key={shirt.id} className='item' >

              <Link to = {`/collections/womens-tees/products/${shirt.slug}`} >
             
               {/* <div><img alt='' src={shirt.img}/></div> */}
               <div onMouseOver={this.hover}>{this.state.hover ? (<img src={shirt.img}/>) : (<img src={shirt.img2}/>)}</div>
               {/* {this.state.hover ? (<img src={shirt.img}/>) : (<img src={shirt.img2}/>)}  */}
                <div>{shirt.name}</div>
                <div>{shirt.gender}</div>
                </Link>
                <div>${shirt.price}</div>
                 </div>)
        })
        
        return (
            <div className='shirtList'>
                {shirtList}
              
                
            </div>
        );
    }
}

