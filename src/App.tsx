import React from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import logo from './logo.svg';
import './App.scss';
import Test from './components/test';
import renderRouter from './router/renderRouter';
import routes from './router/routerConfig';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Test label="111111" />
        <img src={logo} className="App-logo" alt="logo" />
        <Router>
          <ul>
            <li>
              <Link to="/">home</Link>
            </li>
            <li>
              <Link to="/test">test</Link>
            </li>
          </ul>
          {/* <Route path="/test" component={Test}/> */}

          {renderRouter(routes, {})}
        </Router>
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
