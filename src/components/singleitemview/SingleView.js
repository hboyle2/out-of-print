import React, { Component } from 'react';

export default class SingleView extends Component {
    render() {
        console.log(this.props.match.params.slug)
        return (
            <div>
               this is my dang shirt view
               
            </div>
        );
    }
}

