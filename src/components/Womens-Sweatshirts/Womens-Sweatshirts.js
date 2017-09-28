import React, { Component } from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';

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
        const sweatshirts = this.state.shirts.map((shirt)=>{
            return( <div key={shirt.id} className='item' >

              <Link to = {`/collections/womens-tees/products/${shirt.slug}`}>
             
               <div><img alt = '' src={shirt.img}/></div>
                <div>{shirt.name}</div>
                <div>{shirt.gender}</div>
                </Link>
                <div>${shirt.price}</div>
                 </div>)
        })
        return (
            <div>
                {sweatshirts}
            </div>
        );
    }
}

