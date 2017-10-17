import React, { Component } from 'react';

class Account extends Component {
    render() {
        return (
            <div>
                <button><a href = {process.env.REACT_APP_LOGOUT}> logout</a></button>
            </div>
        );
    }
}

export default Account;