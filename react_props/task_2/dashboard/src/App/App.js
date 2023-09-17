import './App.css'
import React, { Fragment } from 'react'
import Header from '../Header/Header';
import Notifications from '../Notifications/Notifications';
import Login from '../Login/Login';
import Footer from '../Footer/Footer';

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

export default App;
