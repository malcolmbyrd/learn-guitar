import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { Provider } from 'react-redux';
import { Store } from './store';
import './App.css';
import Weather from "./components/Weather";

const Home = () => (
  <>
    <h1>Home</h1>
  </>
);

const App = () => (
  <Router>
    <Provider store={Store}>
      <div className="App">
        <nav>
          <Link to="/home">Home</Link>&nbsp;&nbsp;&nbsp;&nbsp;
          <Link to="/weather">Weather</Link>
        </nav>
        <div className="main-content">
          <Switch>
            <Route path="/home">
              <Home />
            </Route>
            <Route path="/weather">
              <Weather />
            </Route>
          </Switch>
        </div>
      </div>
    </Provider>
  </Router>
);

export default App;
