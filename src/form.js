import React from 'react';
import { Formik } from 'formik';
import db from './firebase'
import firebase from 'firebase'
import add from './assets/add-circle.svg'

const Basic = () => (
  <div className='todo-form'>
    <Formik
      initialValues={{ title: '', description: '' }}
      validate={values => {
        const errors = {};
        if (!values.title) {
          errors.title = '';
        } 
        return errors;
      }}
      onSubmit={(values, { setSubmitting,resetForm }) => {
        db.collection('todos').add({
            title: values.title,
            description: values.description,
            completed:false,
            timestamp:firebase.firestore.FieldValue.serverTimestamp()
          })
          setSubmitting(false)
          resetForm({})
          
          

      }}
    >
      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
        isSubmitting,
        /* and other goodies */
      }) => (
        <form className='add-todo-form' onSubmit={handleSubmit}>
          {errors.title}
          <input
          autoComplete='off'
          className='add-todo'
            placeholder='What would like to do?'
            type="text"
            name="title"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.title}
          />
          <button className='add-todo-submit'type="submit" disabled={isSubmitting}>
            <img src={add}></img>
          </button>
        </form>
      )}
    </Formik>
  </div>
);

export default Basic;