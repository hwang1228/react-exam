import React, { Component } from 'react'

export default class Home extends Component {
    componentDidMount() {
        console.log('### HOME Mounted');
    }

    componentWillUnmount() {
        console.log('### HOME UnMounted');
    }
    
    
    render() {
        return (
            <div>
                <h1>this is Home</h1>
            </div>
        )
    }
}
