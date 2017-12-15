import React from 'react';
import {render} from 'react-dom';
import KanbanBoardContainer from './components/KanbanBoardContainer';

import { Router, Route, browserHistory, hashHistory } from 'react-router';
import KanbanBoard from './components/KanbanBoard';
import EditCard from './components/EditCard';
import NewCard from './components/NewCard';

//render(<KanbanBoardContainer />, document.getElementById('root'));
render((
    <Router history={hashHistory}>
        <Route component={KanbanBoardContainer}>
            <Route path="/" component={KanbanBoard}>
                <Route path="new" component={NewCard} />
                <Route path="edit/:card_id" component={EditCard} />
            </Route>
        </Route>
    </Router>
), document.getElementById('root'));