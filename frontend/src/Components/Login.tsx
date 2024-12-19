import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log('Login submitted', email, password);
    const url = 'http://localhost:5000/auth/login';
    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email,
          password,
        }),
      });
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message);
      }

      const json = await response.json();
      console.log('Login success:', json);
      navigate('/profile');
    } catch (error) {
      console.error(error);
      setError('Invalid email or password.');
    }
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
