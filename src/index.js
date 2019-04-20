import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter as Router, Route,Switch} from 'react-router-dom';
import * as serviceWorker from './serviceWorker';
import SignUpForm from './components/SignUpForm/SignUpForm';
import Contact from './components/Contact/Contact';
import YourBrews from './components/YourBrews/YourBrews'
import SignIn from './components/SignUpForm/SignIn'

const routing = (
    <Router>
      <Switch>
        <Route exact path="/" component={App} />
        <Route path="/signin" component={SignIn} />
        <Route path="/signup" component={SignUpForm} />
        <Route path="/contact" component={Contact} />
        <Route path="/brews" component={YourBrews} />
      </Switch>
    </Router>
  )

          


ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
