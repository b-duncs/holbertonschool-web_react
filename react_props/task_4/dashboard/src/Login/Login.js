import React from 'react'
import './Login.css';

function Login() {
  return (
    <div className="container">
      <div className="App-body">
        <p>Login to access the full dashboard</p>
        <form>
          <label htmlFor="email">Email:
            <input type="email" id="email" name="email" />
          </label>
          <label htmlFor="password">Password:
            <input type="password" id="password" name="password" />
          </label>
          <button>OK</button>
        </form>
      </div>
    </div>
  );
}

export default Login
