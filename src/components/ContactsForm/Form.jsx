import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import React, { Component } from 'react';
import s from './Form.module.css';

const initialValues = {
  name: '',
  number: ''
}

const addContactSchema = Yup.object().shape({
  name: Yup.string().required(),
  number: Yup.string().min(1).max(10).required(),
});

export default class ContactForm extends Component {
  handleSubmit = (values, { resetForm }) => {
    console.log(values);
    this.props.onSubmit(values);
    resetForm();
  }

  render() {

    return (
      <Formik
        validationSchema={addContactSchema}
        initialValues={initialValues}
        onSubmit={this.handleSubmit}
      >
        <Form
          className={s.form}
          autoComplete="off">
          <label>
            Name
            <Field
              className={s.input}
              type="text"
              name="name"
              required
            />
            {/* <ErrorMessage name="name" /> */}
          </label>
          <label>
            Phone number
            <Field
              className={s.input}
              type="tel"
              name="number"
              required
            />
            {/* <ErrorMessage name="number" /> */}
          </label>
          <div className={s.buttonContainer}>
            <button className={s.button} type='submit'>
              Add contact
            </button>
            <button
              className={s.button}
              onClick={this.props.closeModal}>
              Back
            </button>
          </div>
        </Form>
      </Formik>
    )
  }
}