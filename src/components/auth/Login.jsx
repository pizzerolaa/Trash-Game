import React, { useState } from 'react'
import axios from 'axios';
import '../../styles/login.css'
import Logo from '../../assets/logo.svg'

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const login = () => {
    const data = { username: username, password: password}
    axios.post('http://localhost:3001/auth/login', data).then((response) => {
      console.log(response.data);
    })
  };
  return (
    <div className='login-main'>
      <div className='fromContainer'>
        <div className="register-heading">
          <img src={Logo} alt="" />
          <h1>LogIn</h1>
        </div>
        
        <div className="register-field">
          <div className="register-enter">
            <label>Username: </label>  
            <input 
              type="text" 
              onChange={(event) => {
                setUsername(event.target.value)
              }}/>
          </div>
          {/* <ErrorMessage name='username' component='span'/> */}
        </div>
        {/* <input 
          type="text" 
          onChange={(event) => {
            setUsername(event.target.value)
          }}/> */}

        <div className="register-field">
          <div className="register-enter">
            <label>Password: </label>  
            <input 
              type="password" 
              onChange={(event) => {
                setPassword(event.target.value)
              }}/>
          </div>
          {/* <ErrorMessage name='password' component='span'/> */}
        </div>
        {/* <input 
        type="password" 
        onChange={(event) => {
            setPassword(event.target.value)
          }}/> */}

        <button onClick={login}>Login</button>
      </div>
    </div>
  )
}

export default Login