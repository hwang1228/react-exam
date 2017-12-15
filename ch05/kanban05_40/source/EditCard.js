import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CardForm from './CardForm';

class EditCard extends Component {
     componentWillMount() {
        let card = this.props.cards.find((card)=> card.id == this.props.match.params.card_id);
        this.setState(Object.assign({}, card));
    }

    handleChange(fieldName, value) {
        this.setState({ [fieldName] : value });
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.cardCallbacks.updateCard(this.state);
        this.props.history.push('/');
    }

    handleClose(e) {
        this.props.history.push('/');
    }

    render() {
        return (
            <CardForm draftCard={this.state}
                buttonLabel="Edit Card"
                handleChange={this.handleChange.bind(this)}
                handleSubmit={this.handleSubmit.bind(this)}
                handleClose={this.handleClose.bind(this)} />
        );
    }
}

EditCard.propTypes = {
    cardCallbacks : PropTypes.object
}

export default EditCard;