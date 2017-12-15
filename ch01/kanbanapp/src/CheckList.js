import React, { Component } from 'react';
import PropTypes from 'prop-types';

class CheckList extends Component {

    static propTypes = {
        cardId: PropTypes.number,
        tasks: PropTypes.arrayOf(PropTypes.object)
    }

    render() {
        let tasks =  this.props.tasks.map((task) => (
            <li key={task.id} className="checklist__task">
                <input type="checkbox" defaultChecked={task.done} />
                {task.name}
                <a href="#" className="checklist__task--remove"/>
            </li>
        ));

        return (
            <div className="checklist">
                <ul>{tasks}</ul>
                <input type="text" 
                className="checklist--add-task"
                placeholder="Type then Enter to add a task" />
            </div>
        );
    }
}

export default CheckList;