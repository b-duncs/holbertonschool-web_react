import React from 'react'
import './Footer.css';
import { getFullYear, getFooterCopy } from '../utils/utils';

function App() {
  return (
    <div className="container">
      <footer className="App-footer">
        <p>Copyright {getFullYear()} - {getFooterCopy(1)}</p>
      </footer>
    </div>
  );
}

export default App
