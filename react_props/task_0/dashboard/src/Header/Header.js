import React from 'react'
import logo from '../assets/holberton-logo.jpg';
import './Header.css';

function App() {
  return (
    <div className="container">
      <header className="App-header">
        <img src={logo} alt="holberton-logo" />
        <h1>School dashboard</h1>
      </header>
    </div>
  );
}

export default App
