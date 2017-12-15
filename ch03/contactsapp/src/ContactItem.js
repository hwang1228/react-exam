import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class ContactItem extends Component {
    static propTypes = {
        name: PropTypes.string.isRequired,
        /* email: PropTypes.string.isRequired*/
        email(props, propName, componentName) {
            if(props[propName]) {
                let val = props[propName];
                let regx = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
                if(typeof val !== 'string' || !regx.test(val)) {
                    return new Error(`${propName} in ${componentName} is not valid email address format`)
                }
            }
        }
    }

    componentDidUpdate() {
        console.log('test');
    }
    
    shouldComponentUpdate(nextProps, nextState) {
        return nextProps.name !== this.props.name;
    }
   
    render() {
        return <li>{this.props.name} - {this.props.email}</li>
    }
}
