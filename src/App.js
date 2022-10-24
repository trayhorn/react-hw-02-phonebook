import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import Form from './components/ContactsForm/Form';
import ContactsList from './components/ContactsList/Contacts.List';
import Filter from './components/ContactsFilter/Filter';
import './App.css';
import initialContacts from './initialContacts.json';

class App extends Component {
  state = {
    contacts: initialContacts,
    filter: '',
  }

  addContact = ({ name, number }) => {
    const contact = {
      id: nanoid(),
      name,
      number
    };

    this.setState(({ contacts }) => ({
      contacts: [...contacts, contact]
    }));
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
        <h2>Phonebook</h2>
        <Form
          onSubmit={this.addContact}
        />
        <h2>Contacts</h2>
        <Filter
          value={filter}
          onChange={this.changeFilter}
        />
        <ContactsList
          contacts={visibleContacts}
        />
      </div>
    )
  }
}

export default App;
