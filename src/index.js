import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import UserLists from './UserLists';
import reportWebVitals from './reportWebVitals';
import LoginComponent from './LoginComponent';


ReactDOM.render(
  <React.StrictMode>
    <LoginComponent />
    <UserLists />
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
