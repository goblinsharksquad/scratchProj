import React, { useState, useEffect } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
// import { Formik, Form, Field } from 'formik';
import SignUp from '../Signup';
import Login from '../Login';

function ProfileName() {
  const [name, setName] = useState('');
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch the user name when the component mounts
    const fetchName = async () => {
      try {
        const response = await fetch('http://localhost:3000/api/getUserName');
        if (!response.ok) {
          throw new Error('Failed to fetch user name');
        }
        const data = await response.json();
        setName(data.name);
      } catch (err) {
        setError(err.message);
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

export default ProfileName;
