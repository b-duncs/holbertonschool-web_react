import React, { Fragment } from 'react'
import './App.css';
import Notifications from '../Notifications/Notifications';
import Login from '../Logins/Login';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';

function App() {
  return (
    <Fragment>
      <Notifications />
      <div className="container">
        <Header />
        <Login />
        <Footer />
      </div>
    </Fragment>
  );
}

export default App
