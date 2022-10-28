import { Formik, Form, Field } from 'formik';
import React, { Component } from 'react';
import s from './Form.module.css';

const initialValues = {
  name: '',
  number: ''
  }

class ExampleForm extends Component {


  handleSubmit = (values, {resetForm}) => {
    this.props.onSubmit(values);
    resetForm();
  }

  render() {

    return (
      <Formik
        initialValues={initialValues}
        onSubmit={this.handleSubmit}
      >
        <Form
          autoComplete="off">
          <label>
            Name
            <Field
              className={s.input}
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
            />
          </label>
          <label>
            Phone number
            <Field
              className={s.input}
              type="tel"
              name="number"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
            />
          </label>
          <button className={s.button} type='submit'>Add contact</button>
        </Form>
      </Formik>
    )
  }
}

export default ExampleForm;

// OLD version of component Form!!!

// import React, { Component } from 'react';
// import s from './Form.module.css';
// import PropTypes from 'prop-types';

// export default class ContactForm extends Component {
//   state = {
//     name: '',
//     number: ''
//   }

//   handleChange = e => {
//     const { name, value } = e.target;
//     this.setState({ [name]: value });
//   }

//   handleSubmit = (e) => {
//     e.preventDefault();
//     this.props.onSubmit(this.state);
//     this.setState({ name: '', number: '' });
//   }

//   render() {
//     const { name, number } = this.state;

//     return (
//       <form
//         onSubmit={this.handleSubmit}
//         autoComplete="off">
//         <label>
//           Name
//           <input
//             className={s.input}
//             type="text"
//             name="name"
//             value={name}
//             pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
//             title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
//             required
//             onChange={this.handleChange}
//           />
//         </label>
//         <label>
//           Phone number
//           <input
//             className={s.input}
//             type="tel"
//             name="number"
//             value={number}
//             pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
//             title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
//             required
//             onChange={this.handleChange}
//           />
//         </label>
//         <button className={s.button} type='submit'>Add contact</button>
//       </form>
//     )
//   }
// }

// ContactForm.propTypes = {
//   onSubmit: PropTypes.func,
// }
