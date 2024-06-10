import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useNavigate } from 'react-router-dom';
import * as Yup from "yup";
import '../../styles/register.css'
import axios from 'axios';
import Logo from '../../assets/logo.svg'

function Register() {
  const initialValues = {
    username: "",
    password: "",
  };
  const navigate = useNavigate();

  const validationSchema = Yup.object().shape({
    username: Yup.string().min(3).max(15).required(),
    password: Yup.string().min(4).max(20).required(),

  });

  const onSubmit = (data) => {
    axios.post('http://localhost:3001/auth', data).then((response) => {
      console.log(data);
      navigate('/login');
    });
  };

  return (
    <div className='register-main'>
      <Formik initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={validationSchema}
      >
        <Form className='fromContainer'>
          <div className="register-heading">
            <img src={Logo} alt="" />
            <h1>Register</h1>
          </div>

          <div className="register-field">
            <div className="register-enter">
              <label>Username: </label>  
              <Field
                autocomplete="off"
                id="inputCreatePost"
                name="username"
                placeholder="(Ex. fher@gmail.com)"
              />
            </div>
            <ErrorMessage name='username' component='span'/>
          </div>

          <div className="register-field">
            <div className="register-enter">
              <label>Password: </label>  
              <Field
                autocomplete="off"
                type="password"
                id="inputCreatePost"
                name="password"
                placeholder="Your password"
              />
            </div>
            <ErrorMessage name='password' component='span'/>
          </div>
          <button type='submit'>Register</button>
        </Form>
      </Formik> 
    </div>
  )
}

export default Register