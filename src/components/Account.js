import React, { Component } from 'react';
import './account.css'

class Account extends Component {
    render() {
        return (
            <div>
                <div className="logout"><a href = {process.env.REACT_APP_LOGOUT}> logout</a></div>
            </div>
        );
    }
}

export default Account;