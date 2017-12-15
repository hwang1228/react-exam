import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Card from './Card';

class List extends Component {

    static propTypes = {
        cards: PropTypes.arrayOf(PropTypes.object),
        title: PropTypes.string,
        taskCallBacks: PropTypes.object
    }

    render() {
        let cards = this.props.cards.map((card) => {
            return <Card key={card.id} taskCallBacks={this.props.taskCallBacks} {...card}/>
        });

        return (
            <div className="list">
                <h1>{this.props.title}</h1>
                {cards}
            </div>
        );
    }
}

export default List;