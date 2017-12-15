import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CheckList from './CheckList';
import marked from 'marked';

class Card extends Component {
    constructor() {
        super(...arguments);
        this.state = {
            showDetails: false
        }
    }

    toggleDetail() {
        this.setState({showDetails: !this.state.showDetails})
    }

    static propTypes = {
        id: PropTypes.number,
        title(props, propName, componentName) {
            if(props[propName]) {
                let value = props[propName];
                if(typeof value !== 'string' || value.length > 10) {
                    return new Error(`${propName} in ${componentName} is longer than 10 characters`);                    
                }
            }
        },
        description: PropTypes.string,
        color: PropTypes.string,
        tasks: PropTypes.arrayOf(PropTypes.object)
    }
    
    render() {
        let cardDetails;
        if(this.state.showDetails) {
            cardDetails = (
                <div className="card__details">
                    <span dangerouslySetInnerHTML={{__html:marked(this.props.description)}} />
                    <CheckList cardId={this.props.id} tasks={this.props.tasks} />
                </div>
            );
        }

        let sideColor = {
            position: 'absolute',
            zIndex: -1,
            top: 0,
            bottom: 0,
            left: 0,
            width: 7,
            backgroundColor: this.props.color
        }

        return (
            <div className="card">
                <div style={sideColor} />
                <div className={this.state.showDetails?"card__title card__title--is-open":"card__title"} onClick={this.toggleDetail.bind(this)}>{this.props.title}</div>
                {cardDetails}
            </div>
        );
    }
}

export default Card;