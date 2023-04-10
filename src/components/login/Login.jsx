import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './login.css'; // import your CSS file

const Login = () => {
  const [loginId, setLoginId] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    const ipAddress ='124.41.211.80'
    e.preventDefault();
    try {
      const res = await axios.post('https://jp-dev.cityremit.global/web-api/config/v1/auths/login', {
        login_id: loginId,
        login_password: password,
        ip_address: ipAddress,
      });
      localStorage.setItem('jwtToken', res.data.data[0].jwt_token); // set the JWT token in state


       // do something with response data
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <form className="login-form" onSubmit={handleSubmit}>
      <h1>Login</h1>
      <label>
        Login ID:
        <input type="text" value={loginId} onChange={(e) => setLoginId(e.target.value)} />
      </label>
      <label>
        Password:
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      </label>
      <button type="submit">Login</button>
    </form>
  );
};

export default Login;
