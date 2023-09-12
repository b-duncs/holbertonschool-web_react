import logo from './holberton-logo.jpg';
import './App.css';
import { getFullYear, getFooterCopy } from './utils';

function App() {
  return (
    <div className="container">
      <header className="App-header">
        <img src={logo} alt="holberton-logo" />
        <h1>School dashboard</h1>
      </header>
      <body className="App-body">
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
      </body>
      <footer className="App-footer">
        <p>Copyright {getFullYear()} - {getFooterCopy(1)}</p>
      </footer>
    </div>
  )
}

export default App
