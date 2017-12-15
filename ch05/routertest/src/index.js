import React from 'react';
import ReactDOM from 'react-dom';
import './main.css';
import App from './App';
import RepoDetails from './RepoDetails'
// import registerServiceWorker from './registerServiceWorker';

import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import Home from './Home'
import Repos from './Repos'
import About from './About'
import ServerError from './ServerError'


ReactDOM.render(
    <Router history={browserHistory}>
        <Route path="/" component={App}>
            <IndexRoute component={Home}/> {/* 중첩구조. App 이 뜰때 Home 이 기본으로 열림*/}
            <Route path="about" component={About} title="어바웃"/>
            <Route path="repos" component={Repos}>
                <Route path=":repo_name" component={RepoDetails} />
            </Route>
            <Route path="error" component={ServerError} />
        </Route>
    </Router>
    , document.getElementById('root'));
// registerServiceWorker();
