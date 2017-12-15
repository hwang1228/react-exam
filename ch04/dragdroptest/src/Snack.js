import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { DragSource } from 'react-dnd';

const snackSpec = {
    beginDrag(props) {
        return { name: props.name }
    },
    endDrag(props, monitor) {
        let dragItem = monitor.getItem();
        let dropResult = monitor.getDropResult();

        if(dropResult) {
            console.log(`${dropResult.name}에 ${dragItem.name}을 넣었습니다.`)
        }
    }
};

let collect = (connect, monitor) => {
    return {
        connectDragSource: connect.dragSource(),
        isDragging: monitor.isDragging()
    }
};

class Snack extends Component {
    static propTypes = {
        connectDragSource: PropTypes.func.isRequired,
        isDragging: PropTypes.bool.isRequired,
        name: PropTypes.string.isRequired
    }

    render() {
        const { connectDragSource, isDragging, name} = this.props;
        const opacity = isDragging ? 0.4 : 1;

        const style = {
            opacity: opacity
        }
        
        return connectDragSource (
            <div className="snack" style={style}>
                {name}
            </div>
        )
    }
}
export default DragSource('snack', snackSpec, collect)(Snack);