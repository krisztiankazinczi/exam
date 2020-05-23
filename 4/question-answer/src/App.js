import React from 'react';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Login from './components/Login/Login'
import Questions from './components/Questions/Questions'
import ReadQuestion from './components/Questions/ReadQuerstion'

function App() {
  return (
    <Router>
        <Switch>
          <Route path="/questions/:id" component={ReadQuestion} />
          <Route path="/questions" component={Questions} />
          <Route exact path="/" component={Login} />
        </Switch>
      </Router>
  );
}

export default App;
