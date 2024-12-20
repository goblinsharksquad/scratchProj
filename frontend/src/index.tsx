//Import react library including reactDOM

import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement //typeScript "type" to define document.getElementByID
);

//Root.render takes in the App
//Strict.Mode wraps around a component to identify a particular problem in an application.
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
