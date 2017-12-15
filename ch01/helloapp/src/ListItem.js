import React, { Component } from 'react';

class ListItem extends Component {
    render() {
        return (
            <li>
                {this.props.name} X {this.props.quantity}
            </li>
        );
    }
}

export default ListItem;