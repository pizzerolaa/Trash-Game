import React, { useState, useContext } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';
import '../../styles/login.css';
import Logo from '../../assets/logo.svg';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const { setAuthState } = useContext(AuthContext);

  const navigate = useNavigate();

  const login = () => {
    const data = { username: username, password: password };
    axios.post('http://localhost:3001/auth/login', data).then((response) => {
      if (response.data.error) {
        alert(response.data.error);
      } else {
        localStorage.setItem("accessToken", response.data.token);
        setAuthState({ username: response.data.username, id: response.data.id, status: true });
        navigate("/");
      }
    });
  };

  return (
    <div className='login-main'>
      <div className='fromContainer'>
        <div className="register-heading">
          <img src={Logo} alt="Logo" />
          <h1>LogIn</h1>
        </div>
        <div className="register-field">
          <div className="register-enter">
            <label>Username: </label>  
            <input 
              type="text" 
              onChange={(event) => setUsername(event.target.value)} 
            />
          </div>
        </div>
        <div className="register-field">
          <div className="register-enter">
            <label>Password: </label>  
            <input 
              type="password" 
              onChange={(event) => setPassword(event.target.value)} 
            />
          </div>
        </div>
        <button onClick={login}>Login</button>
      </div>
    </div>
  );
}

export default Login;
