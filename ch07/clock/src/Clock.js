import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Digit from './Digit'

export default class Clock extends Component {
    static propTypes = {
        hours: PropTypes.number.isRequired,
        minutes: PropTypes.number.isRequired,
        seconds: PropTypes.number.isRequired,
        tenth: PropTypes.number.isRequired  
    }

    render() {
        return(
            <div>
                <Digit value={this.props.hours} />{' : '}
                <Digit value={this.props.minutes} />{' : '}
                <Digit value={this.props.seconds} />{'   '}
                <Digit value={this.props.tenth} />
            </div>
        );
    }
}
