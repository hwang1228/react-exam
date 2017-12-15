import React, { Component } from 'react'
import 'whatwg-fetch'

export default class RepoDetails extends Component {

    // constructor() {
    //     super(...arguments);
    //     this.state = {
    //         repository: {}
    //     }
    // }

    // fetchData(repoName) {
    //     // fetch('./gitrepo.json')
    //     fetch('http://api.github.com/repos/pro-react' + repoName)
    //         .then(response => response.json())
    //         .then(jsonStr => this.setState({repository: jsonStr}))
    //         .catch(err => {
    //             console.error(`fetch repository(${repoName}) info fail`, err);
    //         });
    // }

    componentDidMount() {
        // let repoName = this.props.params.repo_name;
        // this.fetchData(repoName);
    }
    

    // componentWillReceiveProps(nextProps) {
        // let repoName = nextProps.params.repo_name;
        // this.fetchData(repoName);
    // }

    render() {
        let repository = this.props.repositories.find(repo => repo.name === this.props.params.repo_name);
        this.repository = repository;

        if(!this.repository) {
            this.repository = {
                name: '',
                description: '',
                stargazers_count: 10
            };
            this.props.router.push('/error');
        }

        return (
            <div>
                 <h2>{this.repository.name}</h2>
                 <p>{this.repository.description}</p>
                start count: <span>{this.repository.stargazers_count}</span> 
            </div>
        )
    }
}
