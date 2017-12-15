import React, { Component } from 'react'
import ContactsApp from './ContactsApp'
import 'whatwg-fetch'

export default class ContactsAppContainer extends Component {
    constructor() {
        super(...arguments);
        this.state = {
            contacts: []
        }
    }

    componentDidMount() {
        fetch('./Contacts.json')
            .then(response => response.json())
            .then(jsonStr => {
                this.setState({
                    contacts: jsonStr
                });
            })
            .catch(err => {
                console.error('error occured!!', err);
            });
    }
    

    render() {
        return (
               <ContactsApp contacts={this.state.contacts} /> 
        )
    }
}
