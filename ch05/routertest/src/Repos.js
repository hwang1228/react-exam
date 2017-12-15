import React, { Component } from 'react'
import { Link } from 'react-router'
import 'whatwg-fetch'

// const API_BASE = 'https://api.github.com/users/pro-react/repos';
const API_BASE = './repositories.json';

export default class Repos extends Component {
    constructor() {
        super(...arguments);

        this.state = {
            repositories: []
        }
    }
    componentDidMount() {
        console.log('### REPOS Mounted');

        fetch(API_BASE)
            .then(response => response.json())
            .then(jsonStr => this.setState({repositories:jsonStr}))
            .catch(err => {
                console.error('error occured', err);
            });
    }

    componentWillUnmount() {
        console.log('### REPOS UnMounted');
    }
    render() {
        let repos = this.state.repositories.map(repo => {
            return (
                <li key={repo.id}>
                    <Link to={"/repos/" + repo.name} activeClassName="active">{repo.name}</Link>
                </li>
            )
        });

        let child;
        if(this.props.children) {
            child = React.cloneElement(this.props.children, {repositories: this.state.repositories});
        }

        return (
            <div>
                <h1>Pro-react Repo. List</h1>
                <hr />
                <ul>
                    {repos}
                </ul>
                <hr />
                {child}
            </div>
        )
    }
}
