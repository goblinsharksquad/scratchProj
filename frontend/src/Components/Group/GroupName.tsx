import React, { useState, useEffect } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import { Formik, Form, Field } from 'formik';
import SignUp from '../Signup';
import Login from '../Login';
//Used useState in order to update profiles based on log-in/signup information

function GroupName() {
  const [name, setName] = useState('');
  const [error, setError] = useState<string | null>(null); //<string | null> (null) creates a type where the system expects either a 

  useEffect(() => {
    // Fetch the user name when the component mounts
    const fetchName = async () => {
      try {
        const response = await fetch('http://localhost:5000/groups/GoblinShark/participants');
        if (!response.ok) {
          throw new Error('Failed to fetch user name');
        }
        const data = await response.json();
        setName(data.name);
      } catch (err) {
        if (err instanceof Error) {
          setError(err.message); // Now works, as error is string | null
        } else {
          setError('An unknown error occurred');
        }
      }
    };

    fetchName();
  }, []);

  return (
    <div className='name'>
      {error && <p>Error: {error}</p>}
      {name && <p>User Name: {name}</p>} {/* Display the fetched user name */}
    </div>
  );
}

export default GroupName;
