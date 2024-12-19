import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';


export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
   const navigate = useNavigate(); 

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log('Login submitted', email, password);
     navigate('/profile');
  };

  return (
    <div className='forms'>
      <form className='Login' onSubmit={handleSubmit}>
        <input
          type='email'
          placeholder='Enter email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        ></input>
        <input
          type='password'
          placeholder='Enter password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        ></input>
        <button type='submit'>Log in</button>
      </form>
      <p>
        Don't have an account? <Link to='/SignUp'>Sign Up</Link>
      </p>
    </div>
  );
}
