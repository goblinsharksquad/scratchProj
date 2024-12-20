import React, { useState } from 'react';
//Import Link and useNavigate components from react-router-dom
//in order to add functionality to link separate pages
import { Link, useNavigate } from 'react-router-dom';

//useState functions are used to update the state of 
//email, name, passwords, confirm password, and error

export default function SignUp() {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  //declared variable navigate to host useNavigate hook
  const navigate = useNavigate();


  //Once form is submitted, handleSubmit function is triggered
  //React.FormEvent<HTMLFormElement> 
  //allows for the event to be defined when using typescript
  
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    //preventDefault method : used to stop the browser from 
    //executing its default action when certain events occur 
    event.preventDefault();
    console.log('Signup submitted', name, email, password, confirmPassword);
   //Fetch call to connect to backend using post method 
    const url = 'http://localhost:5000/auth/register';
    try {
      //await: waiting for a response 
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email,
          name,
          password,
          confirmPassword,
        }),
      });
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message);
      }
//Await used here so the navigate method is not 
//called until after the response is fulfilled
      const json = await response.json();
      console.log('Login success:', json);
      navigate('./ProfilePage');
    } catch (error) {
      console.error(error);
      setError('Invalid email or password.');
    }
  };

  //Form return syntax, users can enter their content based on onChange
  //onChange listens for what is being changed in the input fields and invokes the set method

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
