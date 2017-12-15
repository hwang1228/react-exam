import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import Hello from './Hello';
// import GroceryList from './GroceryList';
import registerServiceWorker from './registerServiceWorker';

// ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(<Hello />, document.getElementById('root'));
// ReactDOM.render(<GroceryList />, document.getElementById('root'));
registerServiceWorker();
