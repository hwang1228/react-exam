import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { DropTarget } from 'react-dnd';

let ShoppingCartSpec = {
    drop() {
        return { name: 'ShoppingCart'};
    }
}

let collect = (connect, monitor) => {
    return {
        connectDropTarget: connect.dropTarget(),
        isOver: monitor.isOver(),
        canDrop: monitor.canDrop()
    }
}

class ShoppingCart extends Component {
    static propTypes = {
        connectDropTarget: PropTypes.func.isRequired,
        isOver: PropTypes.bool.isRequired,
        canDrop: PropTypes.bool.isRequired
    }

    render() {

        const { canDrop, isOver, connectDropTarget } = this.props;
        const isActive = isOver && canDrop;
        let backgroundColor = isActive ? '#FFFFFF':'#F7F7F7';


        const style = {
            backgroundColor: backgroundColor
        }

        return connectDropTarget (
            <div className="shopping-cart" style={style}>
                { isActive ? "Hm.. Looks Delicious.":"Drag Items Here to order !"}
            </div>
        )
    }
}
// snack 이라는 식별자를 가진 함수를 drop 할 수 있음
export default DropTarget('snack', ShoppingCartSpec, collect)(ShoppingCart);