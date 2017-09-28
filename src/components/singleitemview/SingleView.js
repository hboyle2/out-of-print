import React, { Component } from 'react';
import axios from 'axios';
import './singleview.css'

export default class SingleView extends Component {
    constructor(){
        super()
        this.state = {
            item : {}
        }
    }

    
    componentDidMount(){
       
         
                axios.get(`/api/item/${this.props.match.params.slug}`).then(response=>{
                    this.setState({
                        item: response.data
                    })
                  console.log(response.data)
               
            })
           
        }
        
      
    

    
    render() {
        console.log(this.props.match.params.slug)
        return (
            <div className="item">
              <img src={this.state.item.img} /> 
             <div className='details'>
             <h1>{this.state.item.name}</h1> 
             <div>{this.state.item.type}</div> 
             <div>${this.state.item.price}</div>
             </div>
             
             
            </div>
        );
    }
}

