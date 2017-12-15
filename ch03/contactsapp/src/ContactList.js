import React, { Component } from 'react'
import PropTypes from 'prop-types'
import ContactItem from './ContactItem'

export default class ContactList extends Component {
    static propTypes = {
        contacts: PropTypes.arrayOf(PropTypes.object),
        filterText: PropTypes.string.isRequired
    }
    
    render() {
        let filteredContacts = this.props.contacts.filter(contact => {
            for(let idx in contact) {
                if(contact[idx].toString().toLowerCase().indexOf(this.props.filterText.toLowerCase()) >-1) {
                    return true;
                }
            }
            return false;
            // return contact.name.toLowerCase().indexOf(this.props.filterText.toLowerCase()) >-1
            //     || contact.email.toLowerCase().indexOf(this.props.filterText.toLowerCase()) >-1
        })
        let contactItems = filteredContacts.map(contact => {
            return <ContactItem key={contact.email}
                        name={contact.name}
                        email={contact.email} />
            }
        );
        
        return (
            <ul>
                {contactItems} 
            </ul>
        )
    }
}
