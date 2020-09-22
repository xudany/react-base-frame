import React from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import './App.scss';
import renderRouter from './router/renderRouter';
import routes from './router/routerConfig';
import logo from './logo.svg';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Router>
          <ul>
            <li>
              <Link to="/">home</Link>
            </li>
            <li>
              <Link to="/infrastructure">infrastructure</Link>
            </li>
            <li>
              <Link to="/infrastructure/purification">/purification</Link>
              <Link to="/waterFactory/123">/purification/123</Link>
            </li>
          </ul>
          {renderRouter(routes, {})}
        </Router>
      </header>
    </div>
  );
}

export default App;
