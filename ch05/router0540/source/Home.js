import React, { Component } from 'react';

class Home extends Component {

    
    render() {
        console.log(this.props)
        return (
            <h1>HOME { this.props.test } { this.props.test2 }</h1>
        );
    }
}

export default Home;