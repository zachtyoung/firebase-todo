import React from 'react'
import { Formik } from 'formik';
import db from './firebase'

export default function EditForm(props) {
    return (
        <>
                <Formik
      initialValues={{ title: props.title, description: props.description }}
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
          <input
          placeholder='Description'
            type="text"
            name="description"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.description}
          />
          <button type="submit" disabled={isSubmitting}>
            Update
          </button>
        </form>
      )}
    </Formik>
        </>
    )
}
