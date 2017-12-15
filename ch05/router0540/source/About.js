import React, { Component } from 'react';

class About extends Component {
    render() {
        console.log(this)
        return (
            <h1>ABOUT : { this.props.title}</h1>
        );
    }
}

export default About;