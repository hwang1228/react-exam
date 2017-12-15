import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link,
  NavLink
} from 'react-router-dom'

import { render } from 'react-dom';
import About from './About';
import Home from './Home';
import Repos from './Repos';
import RepoDetails from './RepoDetails';
import ServerError from './ServerError';

class App extends Component {

    render() {
        let  myProps = {
            test : "hello",
            test2 : "world"
        }

        return (
            <Router>
            <div>
                <header>App</header>
                <menu>
                    <ul>
                        <li><NavLink to="/" exact activeClassName="active">Home</NavLink></li>
                        <li><NavLink to="/about" activeClassName="active">About</NavLink></li>
                        <li><NavLink to="/repos" activeClassName="active">Repos</NavLink></li>
                    </ul>
                </menu>
                <Route exact path="/" render={(props) => (<Home {...props} {...myProps} />)} />
                <Route path="/about" render={(props) => (<About {...props} title="어바웃" />)} />
                <Route path="/repos" component={Repos} />
                <Route path="/repos/:repo_name" component={RepoDetails} />
                <Route path="/error" component={ServerError} />
            </div>
            </Router>
        );
    }
}

render(<App />, document.getElementById('root'));