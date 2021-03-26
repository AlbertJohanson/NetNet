import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
   Route, 
   Switch } from 'react-router-dom'
import './index.sass';
import App from './Page/App';
import { Title } from './Page/Title';


ReactDOM.render(
  <React.StrictMode>
    <Router>
    <Switch>
      <Route path='/' component={App} exact />
      <Route exact path='/title/:sectionId/:movieId' component={Title} />
    </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);

