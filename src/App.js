import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import './App.css';
import initialContacts from './initialContacts.json';
import ContactForm from './components/ContactsForm/Form';
import ContactsList from './components/ContactsList/Contacts.List';
import ContactFilter from './components/ContactsFilter/Filter';
import Modal from './components/Modal/Modal';


class App extends Component {
  state = {
    contacts: initialContacts,
    filter: '',
    isModalOpen: false
  }


  componentDidMount() {
    const storage = JSON.parse(localStorage.getItem('contacts'));
    if (storage) {
      this.setState({contacts: storage})
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.contacts !== this.state.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts))
    }
  }

  addContact = ({ name, number }) => {

    if (this.checkIsAdded(name)) {
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

  checkIsAdded = name => {
    const { contacts } = this.state;
    let isAdded = false;

    contacts.map(contact => {
      if (contact.name === name) {
        alert(`You already have ${name} in contacts`);
        isAdded = true;
      }
    })

    return isAdded;
  }

  deleteContact = contactId => {
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

  toggleModal = () => {
    this.setState(({isModalOpen}) => {
      return {isModalOpen: !isModalOpen}
    })
  }


  render() {
    const { filter } = this.state;
    const visibleContacts = this.getVisibleContacts();

    return (
      <div className='container'>
        {this.state.isModalOpen && (
          <Modal>
            <ContactForm
              closeModal={this.toggleModal}
              onSubmit={this.addContact}
            />
          </Modal>
        )}
        <h1>Phonebook</h1>
        <button onClick={this.toggleModal}
        className="openModalButton">Add new contact</button>
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
