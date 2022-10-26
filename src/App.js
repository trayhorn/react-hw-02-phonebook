import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import ContactForm from './components/ContactsForm/Form';
import ContactsList from './components/ContactsList/Contacts.List';
import ContactFilter from './components/ContactsFilter/Filter';
import './App.css';
import initialContacts from './initialContacts.json';

class App extends Component {
  state = {
    contacts: initialContacts,
    filter: '',
  }

  addContact = ({ name, number }) => {
    let isAdded = false;

    this.state.contacts.map(contact => {
      if (contact.name === name) {
        alert(`You already have ${name} in contacts`);
        isAdded = true;
      }
    })

    if (isAdded) {
      return;
    }

    const contact = {
      id: nanoid(),
      name,
      number
    };

    this.setState(({ contacts }) => {
      return { contacts: [...contacts, contact] }
    })
  }

  deleteContact = (contactId) => {
    this.setState(({contacts}) => ({
      contacts: contacts.filter(contact =>
        contact.id != contactId),
    }))
  }

  changeFilter = e => {
    this.setState({ filter: e.target.value });
  }

  getVisibleContacts = () => {
    const { contacts, filter } = this.state;
    const nomalizedFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(nomalizedFilter));
  }


  render() {
    const { filter } = this.state;

    const visibleContacts = this.getVisibleContacts();

    return (
      <div className='container'>
        <h1>Phonebook</h1>
        <ContactForm
          onSubmit={this.addContact}
        />
        <h2>Contacts</h2>
        <ContactFilter
          value={filter}
          onChange={this.changeFilter}
        />
        <ContactsList
          contacts={visibleContacts}
          onDeleteContact={this.deleteContact}
        />
      </div>
    )
  }
}

export default App;
