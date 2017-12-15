import React, { Component } from 'react'

export default class About extends Component {
    componentDidMount() {
        console.log('### ABOUT Mounted');
    }

    componentWillUnmount() {
        console.log('### ABOUT UnMounted');
    }

    render() {
        return (
            <div>
                <h1>{ this.props.route.title }</h1>
            </div>
        )
    }
}
