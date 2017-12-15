import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class Digit extends Component {
    static propTypes = {
        value: PropTypes.number.isRequired        
    }


    shouldComponentUpdate(nextProps, nextState) {
        return nextProps.value !== this.props.value;   
    }


    render() {
        let digitStyle={
            display:'inline-block',
            fontSize: 20,
            padding: 10,
            margin: 5,
            background: '#eeeeee'
        };
        let displayValue;

        if(this.props.value < 10){
            displayValue = '0' + this.props.value;
        } else {
            displayValue = this.props.value;
        }
        return (
            <div style={digitStyle}>
                 {displayValue}</div>
        );
    }
}
