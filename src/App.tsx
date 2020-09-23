import React, { useEffect } from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import './App.scss';
import $request from './api/index';
import renderRouter from './router/renderRouter';
import routes from './router/routerConfig';
import logo from './logo.svg';

function App() {
  const getData = () => {
    return $request.http({
      url: 'https://honeycomb-dev.cloud.cityworks.cn:443/api/permission/swagger',
      successCallback: (data) => {
        console.log(11111, data);
      },
    });
  };

  useEffect(() => {
    const a = getData();
    console.log('hahahaha', a);
  }, []);

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
