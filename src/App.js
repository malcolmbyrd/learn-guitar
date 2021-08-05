import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import './App.css';
import Weather from "./components/Weather";

const App = () => (
  <Router>
      <main>
        <Weather />
      </main>
  </Router>
);

export default App;
