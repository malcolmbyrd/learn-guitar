import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import './App.css';
import Weather from "./components/Weather";

const App = () => (
  <Router>
      <div className="App App-header">
        <nav>
          <Link to="/weather">Weather</Link>
        </nav>
      </div>
      <main>
        <Switch>
          <Route path="/weather">
            <Weather />
          </Route>
        </Switch>
      </main>
      <footer>Ben's React Weather App</footer>
  </Router>
);

export default App;
