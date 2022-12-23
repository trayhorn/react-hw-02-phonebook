import { useEffect, useState } from 'react';
import { nanoid } from 'nanoid';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import './App.css';
import Modal from './components/Modal/Modal';
import initialContacts from './initialContacts.json';
import ContactForm from './components/ContactsForm/Form';
import ContactsList from './components/ContactsList/Contacts.List';
import ContactFilter from './components/ContactsFilter/Filter';

const useLocalStorage = (key, defaultValue) => {
  const [state, setState] = useState(() => {
    return JSON.parse(window.localStorage.getItem(key)) ?? defaultValue
  })

  useEffect(() => {
    window.localStorage.setItem(key, JSON.stringify(state))
  }, [key, state])

  return [state, setState];
}


const App = () => {
  const [contacts, setContacts] = useLocalStorage('contacts', initialContacts);
  const [filter, setFilter] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);


  const addContact = ({ name, number }) => {
    if (checkIsAdded(name)) {
      return;
    }

    const contact = {
      id: nanoid(),
      name,
      number
    };

    setContacts(prevState => [...prevState, contact]);
  }

  const checkIsAdded = name => {
    let isAdded = false;

    contacts.map(contact => {
      if (contact.name === name) {
        toast.error(`You already have ${name} in contacts`);
        isAdded = true;
      }
    })

    return isAdded;
  }

  const deleteContact = contactId => {
    setContacts(prevState => {
      return prevState.filter(contact =>
        contact.id != contactId)
    })
  }

  const changeFilter = e => {
    setFilter(e.target.value);
  }

  const getVisibleContacts = () => {
    const nomalizedFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(nomalizedFilter));
  }

  const toggleModal = () => {
    setIsModalOpen(prevState => !prevState)
  }

  const visibleContacts = getVisibleContacts();

  return (
    <div className='container'>
      {isModalOpen && (
        <Modal>
          <ContactForm
            closeModal={toggleModal}
            onSubmit={addContact}
          />
        </Modal>
      )}
      <h1>Phonebook</h1>
      <button
        onClick={toggleModal}
        className="openModalButton"
      >Add new
      </button>
      <h2>Contacts</h2>
      <ContactFilter
        value={filter}
        onChange={changeFilter}
      />
      <ContactsList
        contacts={visibleContacts}
        onDeleteContact={deleteContact}
      />
      <ToastContainer
        autoClose={3000}
        position="top-center"
      />
    </div>
  )
}

export default App;