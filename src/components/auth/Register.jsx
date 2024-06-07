import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from "yup";
import '../../styles/register.css'

function Register() {
  const initialValues = {
    username: "",
    password: "",
  };

  const validationSchema = Yup.object().shape({
    username: Yup.string().min(3).max(15).required(),
    password: Yup.string().min(4).max(20).required(),

  });

  const onSubmit = () => {};

  return (
    <div className='register-main'>
      <Formik initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={validationSchema}
      >
        <Form className='fromContainer'>
          <label>Username: </label>
          <ErrorMessage name='username' component='span'/>
          <Field
            autocomplete="off"
            id="inputCreatePost"
            name="username"
            placeholder="(Ex. fher@gmail.com)"
          />

          <label>Password: </label>
          <ErrorMessage name='password' component='span'/>
          <Field
            autocomplete="off"
            id="inputCreatePost"
            name="password"
            placeholder="Your password"
          />

          <button type='submit'>Create post </button>
        </Form>
      </Formik> 
    </div>
  )
}

export default Register