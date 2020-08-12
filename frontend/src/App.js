import React from 'react';
import logo from './logo.svg';
import './App.css';

import { BrowserRouter as Router, Switch, Route }  from 'react-router-dom';

import Home from './pages/Home';
import Task from './pages/Task';
import PageNotFound from './pages/PageNotFound';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/task" exact component={Task} />
        <Route path="*" component={PageNotFound} />
      </Switch>
    </Router>
  );
}

export default App;
