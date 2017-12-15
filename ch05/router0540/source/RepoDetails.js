import React, { Component } from 'react';
import 'babel-polyfill';

class RepoDetails extends Component {
  constructor() {
    super(...arguments);
    this.state = {
      repository : {}
    };
  }

  fetchRepo(repo_name) {
      fetch('https://api.github.com/repos/pro-react/' + repo_name)
        .then((response)=>{
          if (response.ok) {
            return response.json()
          } else {
            throw new Error("Server response wasn't ok");
          }
        })
        .then((responseData) => {
          this.setState({ repository : responseData });
        })
        .catch((error) => {
          this.props.history.push('/error');
        })
  }

  componentDidMount() {
    console.log("#DidMount : " + this.props.match.params.repo_name);
    console.dir(this)
    let repo_name =  this.props.match.params.repo_name;
    this.fetchRepo(repo_name);
  }

  componentWillReceiveProps(nextProps) {
    console.log("#WillReceive : " + nextProps.match.params.repo_name);
    let repo_name = nextProps.match.params.repo_name;
    this.fetchRepo(repo_name);
  }

  render() {
    return (
      <div>
        <h2>{this.state.repository.name}</h2>
        <p>{this.state.repository.description}</p>
        <span>star count : {this.state.repository.stargazers_count }</span>
      </div>
    );
  }
}

export default RepoDetails;