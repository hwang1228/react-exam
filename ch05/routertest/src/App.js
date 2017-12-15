import React, { Component } from 'react'
import { Link } from 'react-router'

export default class App extends Component {



    render() {
        return (
            <div>
                <header>Router Test Application</header>
                <menu>
                    <ul>
                        <li><Link activeClassName="active" to="/about">About</Link></li>
                        <li><Link activeClassName="active" to="/repos">Repos</Link></li>
                    </ul>
                </menu>
                {this.props.children}
            </div>
        )
    }
}
