import React from 'react'
import { Formik } from 'formik';
import db from './firebase'

export default function EditForm(props) {
    return (
        <div>
                <Formik
      initialValues={{ title: props.title, description: props.description }}
    //   validate={values => {
    //     const errors = {};
    //     if (!values.email) {
    //       errors.email = 'Required';
    //     } else if (
    //       !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
    //     ) {
    //       errors.email = 'Invalid email address';
    //     }
    //     return errors;
    //   }}
      onSubmit={(values, { setSubmitting,resetForm }) => {
        db.collection('todos').doc(props.todoId).set({
            title: values.title,
            description: values.description,
            completed:false
          })
          setSubmitting(false)
          resetForm({})
          props.setIsEditing(false)
          
          

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
        <form onSubmit={handleSubmit}>
          <input
          placeholder='Title'
            type="text"
            name="title"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.title}
          />
          {/* {errors.email && touched.email && errors.email} */}
          <input
          placeholder='Description'
            type="text"
            name="description"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.description}
          />
          {/* {errors.password && touched.password && errors.password} */}
          <button type="submit" disabled={isSubmitting}>
            Update
          </button>
        </form>
      )}
    </Formik>
        </div>
    )
}
