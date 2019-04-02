import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import * as serviceWorker from './serviceWorker';
import SignUpForm from './components/SignUpForm/SignUpForm';
import Contact from './components/Contact/Contact'

const routing = (
    <Router>
      <div>
        <Route exact path="/" component={App} />
        <Route path="/login" component={SignUpForm} />
        <Route path="/contact" component={Contact} />
        {/* <Route path="/your-brews" component={YourBrews} /> */}
      </div>
    </Router>
  )
          


ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
