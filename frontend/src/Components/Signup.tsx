import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
// import { createContext } from 'react';

export default function SignUp() {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log('Signup submitted', name, email, password, confirmPassword);
    navigate('./ProfilePage');
  };

  return (
    <div className='forms'>
      <form className='signUp' onSubmit={handleSubmit}>
        <input
          type='name'
          placeholder='Name'
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        ></input>
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
        <input
          type='password'
          placeholder='Enter confirm password'
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          required
        ></input>
        <button type='submit'>Sign Up</button>
      </form>
      <p>
        Already have an account? <Link to='/'>Log In</Link>
      </p>
    </div>
  );
}
