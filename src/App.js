import React, { Component } from 'react';
import './App.css';

class App extends Component {
  state = {
    contacts: [],
    name: ''
  }

  handleChange = e => {
    this.setState({name: e.target.value})
  }

  handleSubmit = e => {
    e.preventDefault();
    console.log(this.state);
  }

  render() {
    return (
      <form className='form' onSubmit={this.handleSubmit}>
        <label className='label'>
          Name
          <input
            className='input'
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            onChange={this.handleChange}
          />
        </label>
        <button type='submit'>Add contact</button>
      </form>
    )
  }
}

export default App;
