import React from 'react';
import ReactDOM from 'react-dom';
import ContactsAppContainer from './ContactsAppContainer';
import './index.css';

// let contacts = [
//     {name: "Cassio Zen", email: "cassiozen@gmail.com"},
//     {name: "Dan abramov", email: "gaearon@somewhere.com"},
//     {name: "Pete Hunt", email: "floydophone@somewhere.com"},
//     {name: "Paul O'Shannessy", email: "zpao@somewhere.com"},
//     {name: "Ryan Florence", email: "rpflorence@somewhere.com"},
//     {name: "Barak Obama", email: "obama@whitehouse.com"}    
// ]

ReactDOM.render(<ContactsAppContainer />, document.getElementById('root'));
