import React from 'react';
import {render} from 'react-dom';
import KanbanBoardContainer from './KanbanBoardContainer';

render(<KanbanBoardContainer />, document.getElementById('root'));
// render((
//     <Router>
//         <KanbanBoardContainer>
//             <Route path="/" component={KanbanBoard}>
//                 <Route path="new" component={NewCard} />
//                 <Route path="edit/:card_id" component={EditCard} />                            
//             </Route>
//         </KanbanBoardContainer>
//     </Router>
// ), document.getElementById('root'));